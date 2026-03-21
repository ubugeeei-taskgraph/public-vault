export interface Task {
  id: string;
  title: string;
  content: string;
  status: string;
  visibility: string;
  portfolio: string;
  surface: string;
  discipline: string;
  stream: string;
  urgency: number;
  importance: number;
  progress: number;
  efforts: number;
  agenty: number;
  owners: string[];
  assignees: string[];
  requesters: string[];
  dueDate: string | null;
  uncertainty: number;
  blockers: string[];
  focus: string[];
  reviewWeek: string;
  reviewMonth: string;
  parent: string | null;
  children: string[];
  privateChildren: number;
  redactionReason: string | null;
  tags: string[];
  updated: string;
  path: string;
  slug: string;
  body: string;
}

export interface PublicScopeDisclosure {
  id: string;
  title: string;
  visibility: string;
  publicSharePercentLabel: string;
  excludedScopes: string[];
  updated: string;
  body: string;
}
