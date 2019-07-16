import { GeneralApiProblem } from "./api-problem";

interface Source {
  id: any;
  name: string;
}

export interface News {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface SearchResult {
  status: string;
  totalResults: number;
  articles: News[];
}

export type GetNewsResult =
  | { kind: "ok"; results: SearchResult }
  | GeneralApiProblem;
