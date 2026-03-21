# public-vault

`public-vault` contains the public Obsidian vault and the static site that will be published with GitHub Pages.

## Responsibilities

- store every public task as a Markdown file
- keep task notes flat under `taskgraph-public-vault/10-tasks`
- preserve graph edges through task IDs
- keep weekly and monthly focus visible in notes
- state clearly that this repository is only the public subset of the broader task landscape
- generate a public dashboard from the vault contents

## Layout

- `taskgraph-public-vault`: the public Obsidian vault and source of truth
- `vault`: compatibility mirror for shared config assets
- `site`: the Vite-powered dashboard
- `scripts`: build-time utilities such as task extraction
- `.github/workflows`: GitHub Pages deployment

## Local development

```bash
vp install
vp run dev
```

## Build for GitHub Pages

```bash
vp run build
```

## Test

```bash
vp run test
```

The `dev`, `build`, and `test` tasks generate the public task data before they invoke the Vite+ command surface.
