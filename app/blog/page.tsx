import Link from 'next/link';
import Image from 'next/image';

// 博客数据 - 使用Unsplash免费图片
const blogPosts = [
  {
    id: 1,
    title: "Next.js 15 新特性详解",
    excerpt: "探索 Next.js 15 带来的全新功能，包括改进的 App Router、更好的性能优化和开发体验提升。深入了解服务端组件、流式渲染等革命性特性。",
    author: "张三",
    date: "2024-01-15",
    readTime: "5分钟",
    category: "技术分享",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop&crop=center",
    slug: "nextjs-15-features",
    tags: ["Next.js", "React", "前端框架"]
  },
  {
    id: 2,
    title: "React 19 与 TypeScript 最佳实践",
    excerpt: "学习如何在 React 19 项目中正确使用 TypeScript，提高代码质量和开发效率。掌握类型安全、组件设计和状态管理的最佳实践。",
    author: "李四",
    date: "2024-01-12",
    readTime: "8分钟",
    category: "编程教程",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop&crop=center",
    slug: "react-19-typescript",
    tags: ["React", "TypeScript", "前端开发"]
  },
  {
    id: 3,
    title: "现代前端开发工具链搭建",
    excerpt: "从零开始搭建现代化的前端开发环境，包括构建工具、代码检查和测试框架。打造高效、稳定的开发工作流程。",
    author: "王五",
    date: "2024-01-10",
    readTime: "12分钟",
    category: "开发工具",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop&crop=center",
    slug: "modern-frontend-toolchain",
    tags: ["工具链", "构建工具", "开发环境"]
  },
  {
    id: 4,
    title: "Tailwind CSS 4.0 深度解析",
    excerpt: "深入了解 Tailwind CSS 4.0 的新特性和改进，包括新的颜色系统、性能优化和更好的开发体验。",
    author: "赵六",
    date: "2024-01-08",
    readTime: "6分钟",
    category: "CSS框架",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&crop=center",
    slug: "tailwind-css-4-deep-dive",
    tags: ["Tailwind CSS", "CSS", "样式框架"]
  },
  {
    id: 5,
    title: "Web性能优化实战指南",
    excerpt: "全面的Web性能优化指南，涵盖图片优化、代码分割、缓存策略等关键技术，让你的网站飞起来。",
    author: "钱七",
    date: "2024-01-05",
    readTime: "15分钟",
    category: "性能优化",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center",
    slug: "web-performance-optimization",
    tags: ["性能优化", "Web开发", "用户体验"]
  },
  {
    id: 6,
    title: "微前端架构设计与实践",
    excerpt: "探索微前端架构的设计理念和实践方案，了解如何构建可扩展、可维护的大型前端应用。",
    author: "孙八",
    date: "2024-01-03",
    readTime: "10分钟",
    category: "架构设计",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop&crop=center",
    slug: "micro-frontend-architecture",
    tags: ["微前端", "架构设计", "大型应用"]
  }
];

// 分类颜色映射
const categoryColors = {
  "技术分享": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  "编程教程": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  "开发工具": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  "CSS框架": "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
  "性能优化": "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  "架构设计": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300"
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            技术博客
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            分享最新的前端技术和开发经验，助力开发者提升技能水平
          </p>
        </div>

        {/* 统计信息 */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{blogPosts.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">文章总数</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">6</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">技术分类</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">5</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">作者团队</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">10k+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">阅读量</div>
            </div>
          </div>
        </div>

        {/* 博客列表 */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* 博客封面图片 */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${categoryColors[post.category as keyof typeof categoryColors]}`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="inline-flex items-center px-2 py-1 bg-white/90 dark:bg-gray-800/90 rounded-full text-xs text-gray-600 dark:text-gray-300">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* 博客内容 */}
                <div className="p-6">
                  {/* 博客标题 */}
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors cursor-pointer line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>

                  {/* 博客摘要 */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* 标签 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* 博客元信息 */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
                          {post.author.charAt(0)}
                        </div>
                        <span>{post.author}</span>
                      </div>
                      <span className="flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {post.date}
                      </span>
                    </div>
                  </div>

                  {/* 阅读更多按钮 */}
                  <div className="mt-4">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium transition-colors group"
                    >
                      阅读更多
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* 订阅区域 */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">订阅我们的技术博客</h3>
            <p className="text-blue-100 mb-6">获取最新的技术文章和开发技巧，提升你的编程技能</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="输入你的邮箱地址"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                订阅
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

