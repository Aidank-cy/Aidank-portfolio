export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  year: string;
  techStack: string[];
  highlight: string;
  description: string[];
};

export const profile = {
  name: "Aidank",
  title: "Student",
  school: "Shanghai Jiao Tong University",
  bio: "Information Engineering undergraduate student (2021-2025), now a Computer Science graduate student focused on thoughtful products and clear interfaces.",
};

export const projects: Project[] = [
  {
    slug: "campus-companion",
    title: "Campus Companion",
    summary: "面向校园生活的信息整合平台，统一课程、活动与社团动态。",
    category: "Web Platform",
    year: "2026",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlight: "将分散的校园信息整理成一个更轻、更直观的界面。",
    description: [
      "这个项目聚焦学生日常使用频率最高的内容，把课程安排、校园通知与活动信息整合在一个统一入口中。",
      "页面设计强调快速浏览与低认知负担，适合在移动端和桌面端同时使用。",
    ],
  },
  {
    slug: "lab-notes",
    title: "Lab Notes",
    summary: "一个偏研究记录风格的个人知识管理实验站点。",
    category: "Knowledge System",
    year: "2026",
    techStack: ["MDX", "Shiki", "Framer Motion"],
    highlight: "让长文本内容在阅读时保持安静、克制、但不单调。",
    description: [
      "项目把实验记录、课程笔记和个人思考整理为统一的内容结构，适合长期积累。",
      "视觉上采用留白、细边框和轻量动效，尽量接近编辑型网站的阅读体验。",
    ],
  },
  {
    slug: "motion-gallery",
    title: "Motion Gallery",
    summary: "一个用于展示界面动效与视觉实验的小型作品集合。",
    category: "Design Exploration",
    year: "2026",
    techStack: ["Framer Motion", "React", "CSS"],
    highlight: "用黑白基调和缓慢动势，强调界面的节奏感。",
    description: [
      "这个页面集合更偏视觉实验，展示按钮反馈、卡片切换、版式过渡和简单交互。",
      "重点不在于功能复杂，而是让每一次进入页面和点击操作都更有质感。",
    ],
  },
  {
    slug: "repo-lens",
    title: "Repo Lens",
    summary: "用于提取与展示 GitHub 仓库信息的轻量型观察面板。",
    category: "Developer Tool",
    year: "2026",
    techStack: ["GitHub API", "Next.js", "Vercel"],
    highlight: "把开发项目的状态从原始列表转换成更易读的展示模块。",
    description: [
      "项目用于展示仓库的更新时间、技术栈、简介以及近期变化，让个人项目更容易被快速理解。",
      "它适合作为个人主页中项目模块的后续扩展方向。",
    ],
  },
  {
    slug: "mono-journal",
    title: "Mono Journal",
    summary: "黑白视觉语言下的个人写作与作品归档网站。",
    category: "Editorial Site",
    year: "2026",
    techStack: ["Next.js", "MDX", "Typography"],
    highlight: "在极简框架下保持页面层次与内容表达力。",
    description: [
      "它将项目展示和文章写作放在同一视觉系统里，保证内容之间风格统一。",
      "页面主要通过字号、间距和材质感背景建立区分，而不是依赖强色彩。",
    ],
  },
  {
    slug: "signal-board",
    title: "Signal Board",
    summary: "一个面向个人成长与任务追踪的简洁 Dashboard 原型。",
    category: "Productivity",
    year: "2026",
    techStack: ["TypeScript", "Tailwind CSS", "Charts"],
    highlight: "将目标、进度和反思压缩进一个更干净的界面。",
    description: [
      "这个原型关注信息优先级，把最重要的任务与状态放在最前面，减少多余模块。",
      "适合作为个人主页未来向数据化展示扩展时的界面参考。",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
