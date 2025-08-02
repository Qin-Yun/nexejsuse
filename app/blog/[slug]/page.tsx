import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Mock 博客文章数据
const blogPosts = [
  {
    slug: "nextjs-15-features",
    title: "Next.js 15 新特性详解",
    excerpt: "探索 Next.js 15 带来的全新功能，包括改进的 App Router、更好的性能优化和开发体验提升。",
    content: `
# Next.js 15 新特性详解

Next.js 15 带来了许多激动人心的新功能，让我们一起来探索这些改进。

## 🚀 主要新特性

### 1. 改进的 App Router
App Router 在 Next.js 15 中得到了显著改进，提供了更好的性能和开发体验。

\`\`\`typescript
// app/page.tsx
export default function HomePage() {
  return (
    <div>
      <h1>欢迎使用 Next.js 15</h1>
      <p>体验全新的开发体验</p>
    </div>
  );
}
\`\`\`

### 2. 更好的性能优化
- 更快的构建速度
- 更小的包大小
- 更好的缓存策略

### 3. 增强的开发体验
- 更快的热重载
- 更好的错误提示
- 改进的调试工具

## 📊 性能对比

| 特性 | Next.js 14 | Next.js 15 | 改进 |
|------|------------|------------|------|
| 构建速度 | 100% | 150% | +50% |
| 包大小 | 100% | 85% | -15% |
| 开发体验 | 良好 | 优秀 | +30% |

## 🛠️ 迁移指南

从 Next.js 14 迁移到 15 非常简单：

1. 更新依赖版本
2. 检查破坏性变更
3. 测试应用功能
4. 部署到生产环境

## 总结

Next.js 15 是一个重要的版本更新，带来了显著的性能提升和更好的开发体验。建议所有项目都尽快升级到这个版本。
    `,
    author: "张三",
    date: "2024-01-15",
    readTime: "5分钟",
    category: "技术分享",
    image: "/next.svg",
    tags: ["Next.js", "React", "前端开发"]
  },
  {
    slug: "react-19-typescript",
    title: "React 19 与 TypeScript 最佳实践",
    excerpt: "学习如何在 React 19 项目中正确使用 TypeScript，提高代码质量和开发效率。",
    content: `
# React 19 与 TypeScript 最佳实践

TypeScript 是现代 React 开发中不可或缺的工具，本文将分享在 React 19 中使用 TypeScript 的最佳实践。

## 🎯 核心概念

### 1. 类型定义
正确使用 TypeScript 类型定义是提高代码质量的关键。

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

interface UserCardProps {
  user: User;
  onEdit?: (user: User) => void;
  onDelete?: (id: number) => void;
}
\`\`\`

### 2. 组件类型
为 React 组件定义正确的类型。

\`\`\`typescript
import React from 'react';

const UserCard: React.FC<UserCardProps> = ({ user, onEdit, onDelete }) => {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      {onEdit && <button onClick={() => onEdit(user)}>编辑</button>}
      {onDelete && <button onClick={() => onDelete(user.id)}>删除</button>}
    </div>
  );
};
\`\`\`

### 3. Hook 类型
为自定义 Hook 定义类型。

\`\`\`typescript
import { useState, useEffect } from 'react';

interface UseApiResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useApi<T>(url: string): UseApiResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
\`\`\`

## 📋 最佳实践清单

- [ ] 为所有组件定义 Props 类型
- [ ] 使用泛型提高代码复用性
- [ ] 避免使用 any 类型
- [ ] 利用 TypeScript 的严格模式
- [ ] 定期更新类型定义

## 总结

TypeScript 与 React 19 的结合为开发带来了更好的类型安全和开发体验。通过遵循这些最佳实践，可以显著提高代码质量和团队协作效率。
    `,
    author: "李四",
    date: "2024-01-12",
    readTime: "8分钟",
    category: "编程教程",
    image: "/vercel.svg",
    tags: ["React", "TypeScript", "前端开发"]
  },
  {
    slug: "modern-frontend-toolchain",
    title: "现代前端开发工具链搭建",
    excerpt: "从零开始搭建现代化的前端开发环境，包括构建工具、代码检查和测试框架。",
    content: `
# 现代前端开发工具链搭建

一个完善的前端开发工具链对于提高开发效率和代码质量至关重要。本文将详细介绍如何搭建现代化的前端开发环境。

## 🛠️ 核心工具

### 1. 包管理器
选择合适的包管理器是第一步。

\`\`\`bash
# 使用 npm
npm init -y

# 使用 yarn
yarn init -y

# 使用 pnpm
pnpm init
\`\`\`

### 2. 构建工具
现代前端项目离不开强大的构建工具。

\`\`\`javascript
// webpack.config.js
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
\`\`\`

### 3. 代码检查
ESLint 和 Prettier 是代码质量的保障。

\`\`\`json
// .eslintrc.json
{
  "extends": [
    "eslint:recommended",
    "@typescript-eslint/recommended"
  ],
  "rules": {
    "no-console": "warn",
    "prefer-const": "error"
  }
}
\`\`\`

### 4. 测试框架
完善的测试是项目稳定性的保证。

\`\`\`javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
\`\`\`

## 📊 工具链对比

| 工具 | 用途 | 推荐度 |
|------|------|--------|
| Vite | 构建工具 | ⭐⭐⭐⭐⭐ |
| ESLint | 代码检查 | ⭐⭐⭐⭐⭐ |
| Prettier | 代码格式化 | ⭐⭐⭐⭐⭐ |
| Jest | 单元测试 | ⭐⭐⭐⭐ |
| Cypress | E2E测试 | ⭐⭐⭐⭐ |

## 🚀 快速开始

1. 初始化项目
2. 安装依赖
3. 配置工具
4. 编写测试
5. 部署上线

## 总结

一个完善的前端开发工具链能够显著提高开发效率和代码质量。选择合适的工具并正确配置是成功的关键。
    `,
    author: "王五",
    date: "2024-01-10",
    readTime: "12分钟",
    category: "开发工具",
    image: "/globe.svg",
    tags: ["前端开发", "工具链", "工程化"]
  }
];

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* 面包屑导航 */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
                首页
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
                博客
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="text-gray-900 dark:text-white">{post.title}</li>
          </ol>
        </nav>

        {/* 文章头部 */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            {/* 分类标签 */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full">
                {post.category}
              </span>
            </div>

            {/* 文章标题 */}
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {post.title}
            </h1>

            {/* 文章摘要 */}
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              {post.excerpt}
            </p>

            {/* 文章元信息 */}
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 pb-6">
              <div className="flex items-center space-x-6">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {post.author}
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {post.date}
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readTime}
                </span>
              </div>

              {/* 标签 */}
              <div className="flex items-center space-x-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          {/* 文章内容 */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <div 
              className="markdown-content"
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .split('\n')
                  .map(line => {
                    if (line.startsWith('# ')) {
                      return `<h1 class="text-3xl font-bold mb-4">${line.substring(2)}</h1>`;
                    }
                    if (line.startsWith('## ')) {
                      return `<h2 class="text-2xl font-semibold mb-3 mt-6">${line.substring(3)}</h2>`;
                    }
                    if (line.startsWith('### ')) {
                      return `<h3 class="text-xl font-semibold mb-2 mt-4">${line.substring(4)}</h3>`;
                    }
                    if (line.startsWith('```')) {
                      return `<pre class="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto my-4"><code>`;
                    }
                    if (line.startsWith('- ')) {
                      return `<li class="ml-4">${line.substring(2)}</li>`;
                    }
                    if (line.trim() === '') {
                      return '<br>';
                    }
                    if (line.startsWith('|')) {
                      return `<tr><td>${line.split('|').slice(1, -1).join('</td><td>')}</td></tr>`;
                    }
                    return `<p class="mb-4">${line}</p>`;
                  })
                  .join('')
                  .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto my-4"><code>$1</code></pre>')
                  .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-sm">$1</code>')
                  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 dark:text-blue-400 hover:underline">$1</a>')
              }}
            />
          </div>
        </article>

        {/* 导航按钮 */}
        <div className="text-center mt-12 space-x-4">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            返回博客列表
          </Link>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
} 