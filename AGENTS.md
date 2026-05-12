# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## 项目概述

个人信息以及项目的展示网站，Apple 或者类似于 langchain / Linear / Vercel 的风格或视觉效果的网站，前端静态导出到 GitHub Pages，后端 API 部署到 Vercel

## 站点主人信息

- Name: Aidank
- School: Shanghai Jiao Tong University
- Education:
  - Information Engineering undergraduate student, September 2021 to June 2025
  - Computer Science graduate student, September 2025 to now

## 技术栈
-- Next.js 15, TypeScript, Tailwind CSS（样式）+ @tailwindcss/typography
-- Framer Motion（动效）, MDX, Shiki/rehype-pretty-code (代码高亮)
- GitHub REST API（拉取仓库数据）
- Vercel Serverless Functions（admin 登录 API）
- JWT（admin 认证）

## 开发命令
- dev: npm run dev
- build: npm run build（静态导出到 out/）
- deploy: GitHub Actions 自动部署到 GitHub Pages
- test: npm test

# 设计规范（IMPORTANT）
- 风格对标 Apple / langchain / Linear / Vercel 官网：留白、名字大字 、简介小字
- 点击特效，黑白主题，尽量克制，不做花哨配色
- 首页信息层次优先级：头像 > 名字 > 学校/身份简介 > 项目入口
- 项目页延续首页视觉系统，保持统一材质、边框和排版节奏
  
## 网站在浏览器呈现的布局

1.首页是Dashboard Dashboard中间有一个可以上传设备图片的圆形区域 是我的头像 然后这个圆形区域下面有我设定的名字
2.Dashboard我的名字下面有一段简短比较小的黑色一行个人简介 表明是哪个大学的学生
4.个人简介下面是我的项目列表 新的项目的页面中也是有我的头像的圆形区域 以及我设定的名字 然后名字下面有项目两个字
5.紧接着下面是一个个可以连接到具体某个页面的项目 具体排版是n*3 也就是我的项目是可添加的 有扩展性的 同时排列方式是3列就下一行

## 内容与配置约定

- 个人信息统一放在 `lib/site-data.ts`
- 项目卡片和项目详情都由 `lib/site-data.ts` 中的项目数组驱动
- 头像默认支持前端本地上传预览，后续如果接入 admin 或对象存储，再替换为真实上传链路
- 站点必须保持静态导出兼容，不引入必须依赖服务端运行时的前台逻辑

## 项目规则目录

- 项目根目录新增 `.project-rules/`
- 该目录用于沉淀本项目的规则、内容规范、组件约束、视觉约束、发布注意事项
- 后续如果你确定了更合适的目录名，可以整体重命名，不影响站点代码结构

## 目录结构
app/
    page #首页（Dashboard）关于我 
    projects/page.tsx     # 项目列表
    projects/[slug]/      # 项目详情
    admin/                # Admin 后台（受保护）
    api/admin/            # Admin API（登录、项目管理）
    api/public/           # 公开 API
component/ ...
lib/... #工具函数
content/... #项目的描述
.project-rules/ # 项目规则、规范与约束说明

