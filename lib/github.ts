import { cache } from "react";
import { projects as projectConfigs } from "@/config/projects";
import type {
  GitHubLanguageResponse,
  GitHubRepoResponse,
  ProjectConfig,
  ProjectDetail,
  ProjectLanguage,
  ProjectSummary,
} from "@/lib/types";
import { ensureProtocol, repoToSlug } from "@/lib/utils";

const GITHUB_API_BASE = "https://api.github.com";

function getGitHubHeaders(accept = "application/vnd.github+json") {
  const token = process.env.GITHUB_TOKEN;

  return {
    Accept: accept,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    "X-GitHub-Api-Version": "2022-11-28",
  };
}

async function fetchGitHubJson<T>(path: string): Promise<T> {
  const response = await fetch(`${GITHUB_API_BASE}${path}`, {
    headers: getGitHubHeaders(),
  });

  if (!response.ok) {
    throw new Error(
      `GitHub request failed for ${path} with status ${response.status}`,
    );
  }

  return response.json() as Promise<T>;
}

async function fetchGitHubText(path: string) {
  const response = await fetch(`${GITHUB_API_BASE}${path}`, {
    headers: getGitHubHeaders("application/vnd.github.raw+json"),
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(
      `GitHub text request failed for ${path} with status ${response.status}`,
    );
  }

  return response.text();
}

const getRepo = cache(async (repo: string) => {
  return fetchGitHubJson<GitHubRepoResponse>(`/repos/${repo}`);
});

const getRepoLanguages = cache(async (repo: string) => {
  return fetchGitHubJson<GitHubLanguageResponse>(`/repos/${repo}/languages`);
});

const getRepoReadme = cache(async (repo: string) => {
  return fetchGitHubText(`/repos/${repo}/readme`);
});

function toProjectSummary(
  config: ProjectConfig,
  repo: GitHubRepoResponse,
): ProjectSummary {
  return {
    repo: config.repo,
    slug: repoToSlug(config.repo),
    owner: repo.owner.login,
    name: repo.name,
    fullName: repo.full_name,
    description: repo.description,
    url: repo.html_url,
    homepage: repo.homepage ? ensureProtocol(repo.homepage) : null,
    primaryLanguage: repo.language,
    stars: repo.stargazers_count,
    updatedAt: repo.updated_at,
    topics: repo.topics ?? [],
    featured: config.featured,
    order: config.order,
  };
}

function toLanguageBreakdown(languageMap: GitHubLanguageResponse) {
  const total = Object.values(languageMap).reduce(
    (sum, bytes) => sum + bytes,
    0,
  );

  if (!total) {
    return [] as ProjectLanguage[];
  }

  return Object.entries(languageMap)
    .map(([name, bytes]) => ({
      name,
      bytes,
      percentage: Number(((bytes / total) * 100).toFixed(1)),
    }))
    .sort((left, right) => right.bytes - left.bytes);
}

export const getAllProjects = cache(async () => {
  const summaries = await Promise.all(
    [...projectConfigs]
      .sort((left, right) => left.order - right.order)
      .map(async (config) => {
        const repo = await getRepo(config.repo);

        return toProjectSummary(config, repo);
      }),
  );

  return summaries;
});

export const getFeaturedProjects = cache(async () => {
  const projects = await getAllProjects();

  return projects.filter((project) => project.featured);
});

export const getProjectBySlug = cache(async (slug: string) => {
  const config = projectConfigs.find((item) => repoToSlug(item.repo) === slug);

  if (!config) {
    return null;
  }

  const [repo, readme, languageMap] = await Promise.all([
    getRepo(config.repo),
    getRepoReadme(config.repo),
    getRepoLanguages(config.repo),
  ]);

  const summary = toProjectSummary(config, repo);

  const detail: ProjectDetail = {
    ...summary,
    forks: repo.forks_count,
    openIssues: repo.open_issues_count,
    readme,
    languages: toLanguageBreakdown(languageMap),
  };

  return detail;
});
