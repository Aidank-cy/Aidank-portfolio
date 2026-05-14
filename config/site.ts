import { basePath } from "@/lib/basePath";

export const siteConfig = {
  name: "Aidank",
  avatar: `${basePath}/avatar.jpg`,
  title: "Aidank Portfolio",
  description:
    "Aidank's personal project showcase.",
  url: "https://aidank-cy.github.io/Aidank-portfolio",
  githubUsername: "Aidank-cy",
  githubUrl: "https://github.com/Aidank-cy",
  intro:
    "I don't write code. I architect the Artificial Intelligence that does.",
  about:
    "CS grad student at Shanghai Jiao Tong University. This site is a harness engineering project — learning how to craft prompts, set constraints, and build feedback loops that let AI write every line of code, clean, error-free, and up to standard. Zero human-written code, from architecture to deployment.",
  socials: [
    {
      label: "Source",
      href: "https://github.com/Aidank-cy/Aidank-portfolio",
    },
    { 
      label: "Email",
      href: "mailto:1794291485@qq.com",
    },
  ],
} as const;
