export type SocialLink = {
  label: string;
  href: string;
};

export type ProjectConfig = {
  repo: string;
  featured: boolean;
  order: number;
};

export type GitHubRepoResponse = {
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  updated_at: string;
  topics?: string[];
  owner: {
    login: string;
  };
};

export type GitHubLanguageResponse = Record<string, number>;

export type ProjectSummary = {
  repo: string;
  slug: string;
  owner: string;
  name: string;
  fullName: string;
  description: string | null;
  url: string;
  homepage: string | null;
  primaryLanguage: string | null;
  stars: number;
  updatedAt: string;
  topics: string[];
  featured: boolean;
  order: number;
};

export type ProjectLanguage = {
  name: string;
  bytes: number;
  percentage: number;
};

export type ProjectDetail = ProjectSummary & {
  forks: number;
  openIssues: number;
  readme: string | null;
  languages: ProjectLanguage[];
};
