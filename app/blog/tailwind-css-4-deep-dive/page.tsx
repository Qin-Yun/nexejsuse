import Image from 'next/image';
import Link from 'next/link';

export default function TailwindCSS4DeepDivePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* 面包屑导航 */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <li><Link href="/" className="hover:text-gray-900 dark:hover:text-white">首页</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-gray-900 dark:hover:text-white">博客</Link></li>
            <li>/</li>
            <li className="text-gray-900 dark:text-white">Tailwind CSS 4.0 深度解析</li>
          </ol>
        </nav>

        {/* 文章头部 */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 text-sm font-medium rounded-full">
                CSS框架
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Tailwind CSS 4.0 深度解析
            </h1>
            <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  赵
                </div>
                <span>赵六</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                2024-01-08
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                6分钟阅读
              </div>
            </div>
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop&crop=center"
                alt="Tailwind CSS 4.0"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </header>

          {/* 文章内容 */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Tailwind CSS 4.0 带来了许多激动人心的新特性和改进，包括全新的颜色系统、更好的性能优化和更优秀的开发体验。本文将深入探讨这些变化及其对前端开发的影响。
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🎨 全新的颜色系统</h2>
            <p className="mb-6">
              Tailwind CSS 4.0 引入了基于 OKLCH 颜色空间的新颜色系统，这带来了更准确的颜色表示和更好的可访问性。新的颜色系统支持：
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>更精确的颜色控制</li>
              <li>更好的深色模式支持</li>
              <li>改进的颜色对比度</li>
              <li>更流畅的颜色过渡</li>
            </ul>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">代码示例</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
{`// 新的颜色语法
<div className="bg-blue-500/50 text-blue-900">
  半透明背景
</div>

// OKLCH 颜色
<div className="bg-[oklch(0.5_0.2_240)]">
  自定义颜色
</div>`}
              </pre>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">⚡ 性能优化</h2>
            <p className="mb-6">
              4.0 版本在性能方面有了显著提升，主要改进包括：
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>更快的编译速度</li>
              <li>更小的包体积</li>
              <li>更好的缓存机制</li>
              <li>优化的运行时性能</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🛠️ 开发体验改进</h2>
            <p className="mb-6">
              新版本在开发体验方面也有很多改进：
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>更好的 IntelliSense 支持</li>
              <li>改进的错误提示</li>
              <li>更灵活的配置选项</li>
              <li>更好的插件生态系统</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🚀 新功能特性</h2>
            <p className="mb-6">
              Tailwind CSS 4.0 引入了许多新功能：
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>容器查询支持</li>
              <li>改进的响应式设计</li>
              <li>新的动画系统</li>
              <li>更好的国际化支持</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">📈 迁移指南</h2>
            <p className="mb-6">
              从 Tailwind CSS 3.x 迁移到 4.0 需要注意以下几点：
            </p>
            <ol className="list-decimal list-inside mb-6 space-y-2">
              <li>更新配置文件</li>
              <li>检查颜色使用</li>
              <li>测试响应式设计</li>
              <li>验证深色模式</li>
            </ol>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 专家建议</h3>
              <p className="text-blue-800 dark:text-blue-200">
                建议在项目中逐步迁移到 Tailwind CSS 4.0，先在新功能中使用新特性，然后逐步更新现有代码。
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🔮 未来展望</h2>
            <p className="mb-6">
              Tailwind CSS 4.0 为未来的发展奠定了坚实的基础，我们期待看到更多创新功能的出现。
            </p>
          </div>

          {/* 标签 */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">相关标签</h3>
            <div className="flex flex-wrap gap-2">
              {["Tailwind CSS", "CSS", "样式框架", "前端开发", "设计系统"].map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* 作者信息 */}
          <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                赵
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">赵六</h3>
                <p className="text-gray-600 dark:text-gray-400">资深前端开发工程师，专注于CSS框架和设计系统研究</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
} 