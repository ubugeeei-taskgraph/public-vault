import { access, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const repoRoot = process.cwd();
const outputFile = path.join(repoRoot, "site", "src", "generated", "tasks.ts");
const disclosureOutputFile = path.join(repoRoot, "site", "src", "generated", "public-scope.ts");

async function directoryExists(directory: string): Promise<boolean> {
  try {
    await access(directory);
    return true;
  } catch {
    return false;
  }
}

async function resolveVaultRoot(root: string): Promise<string> {
  const candidates = [path.join(root, "taskgraph-public-vault"), path.join(root, "vault")];

  for (const candidate of candidates) {
    if (await directoryExists(path.join(candidate, "10-tasks"))) {
      return candidate;
    }
  }

  throw new Error(
    `Could not find a public vault with 10-tasks under ${root}. Checked: ${candidates.join(", ")}`,
  );
}

const vaultRoot = await resolveVaultRoot(repoRoot);

async function walk(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const nextPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        return walk(nextPath);
      }

      return nextPath.endsWith(".md") ? [nextPath] : [];
    }),
  );

  return files.flat();
}

function normalizeList(value: unknown): string[] {
  return Array.isArray(value) ? value.map((item) => asScalarString(item)).filter(Boolean) : [];
}

type RawTask = NonNullable<ReturnType<typeof normalizeTask>>;

function asScalarString(value: unknown): string {
  if (typeof value === "string") {
    return value;
  }

  if (typeof value === "number" || typeof value === "boolean" || typeof value === "bigint") {
    return String(value);
  }

  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString();
  }

  return "";
}

function normalizeDate(value: unknown): string {
  if (!value) {
    return "";
  }

  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }

  const stringValue = asScalarString(value);
  if (!stringValue) {
    return "";
  }

  const directMatch = stringValue.match(/\d{4}-\d{2}-\d{2}/);
  if (directMatch) {
    return directMatch[0];
  }

  const parsed = new Date(stringValue);
  return Number.isNaN(parsed.getTime()) ? stringValue : parsed.toISOString().slice(0, 10);
}

function normalizeTask(filePath: string, raw: string) {
  const { data, content } = matter(raw);

  const relativePath = path.relative(vaultRoot, filePath).replaceAll(path.sep, "/");

  if (data.note_type !== "task" || !relativePath.startsWith("10-tasks/")) {
    return null;
  }

  return {
    id: asScalarString(data.id),
    title: asScalarString(data.title),
    content: asScalarString(data.content ?? ""),
    status: asScalarString(data.status ?? "active"),
    visibility: asScalarString(data.visibility ?? "public"),
    portfolio: asScalarString(data.portfolio ?? "personal-oss"),
    surface: asScalarString(data.surface ?? "repository"),
    discipline: asScalarString(data.discipline ?? "engineering"),
    stream: asScalarString(data.stream ?? "delivery"),
    urgency: Number(data.urgency ?? 3),
    importance: Number(data.importance ?? 3),
    progress: Number(data.progress ?? 0),
    efforts: Number(data.efforts ?? 3),
    agenty: Number(data.agenty ?? data.ai_agency ?? 3),
    owners: normalizeList(data.owners),
    assignees: normalizeList(data.assignees),
    requesters: normalizeList(data.requesters),
    dueDate: data.due_date ? normalizeDate(data.due_date) : null,
    uncertainty: Number(data.uncertainty ?? 3),
    blockers: normalizeList(data.blockers),
    focus: normalizeList(data.focus),
    reviewWeek: asScalarString(data.review_week ?? ""),
    reviewMonth: asScalarString(data.review_month ?? ""),
    parent: data.parent ? asScalarString(data.parent) : null,
    children: normalizeList(data.children),
    privateChildren: Number(data.private_children ?? 0),
    redactionReason: asScalarString(data.redaction_reason) || null,
    tags: normalizeList(data.tags),
    updated: normalizeDate(data.updated),
    path: relativePath,
    slug: relativePath.replace(/\.md$/, ""),
    body: content.trim(),
  };
}

function extractLinkTarget(value: string | null): string | null {
  if (!value) {
    return null;
  }

  const wikiMatch = value.match(/^\[\[(.+?)\]\]$/);
  if (wikiMatch) {
    return wikiMatch[1].split("|")[0]?.trim() ?? null;
  }

  const markdownMatch = value.match(/^\[[^\]]+\]\((.+?)\)$/);
  if (markdownMatch) {
    return markdownMatch[1].trim();
  }

  return value.trim();
}

function resolveTaskReference(
  currentPath: string,
  value: string | null,
  taskById: Map<string, RawTask>,
  taskBySlug: Map<string, RawTask>,
  taskByBasename: Map<string, RawTask>,
): string | null {
  const target = extractLinkTarget(value);

  if (!target) {
    return null;
  }

  if (taskById.has(target)) {
    return target;
  }

  const cleanTarget = target.replace(/\.md$/, "").replace(/^\.\//, "");
  const fromExactSlug = taskBySlug.get(cleanTarget);
  if (fromExactSlug) {
    return fromExactSlug.id;
  }

  const resolvedRelative = path
    .relative(vaultRoot, path.resolve(path.dirname(path.join(vaultRoot, currentPath)), cleanTarget))
    .replaceAll(path.sep, "/");
  const fromRelativeSlug = taskBySlug.get(resolvedRelative);
  if (fromRelativeSlug) {
    return fromRelativeSlug.id;
  }

  const fromTaskFolderSlug = taskBySlug.get(`10-tasks/${cleanTarget}`);
  if (fromTaskFolderSlug) {
    return fromTaskFolderSlug.id;
  }

  const basename = cleanTarget.split("/").pop() ?? cleanTarget;
  return taskByBasename.get(basename)?.id ?? target;
}

function normalizeDisclosure(raw: string) {
  const { data, content } = matter(raw);

  if (data.note_type !== "disclosure" || data.id !== "disclosure.public.scope") {
    return null;
  }

  return {
    id: asScalarString(data.id),
    title: asScalarString(data.title ?? "Public scope disclosure"),
    visibility: asScalarString(data.visibility ?? "public"),
    publicSharePercentLabel: asScalarString(data.public_share_percent_label ?? "X"),
    excludedScopes: normalizeList(data.excluded_scopes),
    updated: asScalarString(data.updated ?? ""),
    body: content.trim(),
  };
}

const files = await walk(vaultRoot);
const rawTasks: RawTask[] = [];
let disclosure: ReturnType<typeof normalizeDisclosure> = null;

for (const filePath of files) {
  const raw = await readFile(filePath, "utf8");
  const task = normalizeTask(filePath, raw);
  const publicScope = normalizeDisclosure(raw);

  if (task) {
    rawTasks.push(task);
  }

  if (publicScope) {
    disclosure = publicScope;
  }
}

const taskById = new Map(rawTasks.map((task) => [task.id, task]));
const taskBySlug = new Map(rawTasks.map((task) => [task.slug, task]));
const taskByBasename = new Map(rawTasks.map((task) => [path.basename(task.slug), task]));

const tasks = rawTasks.map((task) => ({
  ...task,
  parent: resolveTaskReference(task.path, task.parent, taskById, taskBySlug, taskByBasename),
  children: task.children
    .map((child) => resolveTaskReference(task.path, child, taskById, taskBySlug, taskByBasename))
    .filter((child): child is string => Boolean(child)),
  blockers: task.blockers
    .map((blocker) =>
      resolveTaskReference(task.path, blocker, taskById, taskBySlug, taskByBasename),
    )
    .filter((blocker): blocker is string => Boolean(blocker)),
}));

tasks.sort((left, right) => left.title.localeCompare(right.title));

const serialized = JSON.stringify(tasks, null, 2);
const generatedAt = new Date().toISOString();
const source = `import type { Task } from "../lib/types";

export const generatedAt = "${generatedAt}";

export const tasks: Task[] = ${serialized};
`;

const disclosureSource = `import type { PublicScopeDisclosure } from "../lib/types";

export const publicScopeDisclosure: PublicScopeDisclosure = ${JSON.stringify(
  disclosure ?? {
    id: "disclosure.public.scope",
    title: "Public scope disclosure",
    visibility: "public",
    publicSharePercentLabel: "X",
    excludedScopes: [
      "Work-related tasks are managed in a separate system and are not included here.",
      "Private tasks are tracked in the private vault or appear only as redacted bridges.",
    ],
    updated: "",
    body: "This vault contains only the public-facing slice of the task graph. It represents about X% of the overall task landscape. Work-related tasks are managed in a separate system and are intentionally excluded from this vault.",
  },
  null,
  2,
)};
`;

await writeFile(outputFile, source, "utf8");
await writeFile(disclosureOutputFile, disclosureSource, "utf8");
console.log(`Generated ${tasks.length} public tasks into ${path.relative(repoRoot, outputFile)}`);
