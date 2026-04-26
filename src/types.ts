export type TopicId =
  | "reading"
  | "entertainment"
  | "history"
  | "universal-truths"
  | "government"
  | "opinion";

export interface Subpage {
  id: string;
  title: string;
  description: string;
  content: string[];
  sourceUrl?: string;
  commentary?: string[];
}

export interface Topic {
  id: TopicId;
  title: string;
  shortLabel: string;
  description: string;
  overview: string;
  accent: string;
  subpages: Subpage[];
}
