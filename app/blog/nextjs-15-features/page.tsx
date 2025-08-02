import Image from 'next/image';
import Link from 'next/link';

export default function NextJS15FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <li><Link href="/" className="hover:text-gray-900 dark:hover:text-white">首页</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-gray-900 dark:hover:text-white">博客</Link></li>
            <li>/</li>
            <li className="text-gray-900 dark:text-white">Next.js 15 新特性详解</li>
          </ol>
        </nav>

        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full">
                技术分享
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Next.js 15 新特性详解
            </h1>
            <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  张
                </div>
                <span>张三</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                2024-01-15
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                5分钟阅读
              </div>
            </div>
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop&crop=center"
                alt="Next.js 15"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </header>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Next.js 15 带来了许多激动人心的新功能，包括改进的 App Router、更好的性能优化和开发体验提升。本文将深入探讨这些革命性特性。
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🚀 主要新特性</h2>
            <p className="mb-6">
              Next.js 15 是一个重要的版本更新，带来了许多突破性的改进：
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. 改进的 App Router</h3>
            <p className="mb-6">
              App Router 在 Next.js 15 中得到了显著改进，提供了更好的性能和开发体验：
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>更快的路由匹配</li>
              <li>更好的缓存策略</li>
              <li>改进的错误处理</li>
              <li>更流畅的页面过渡</li>
            </ul>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold mb-4">App Router 示例</h4>
              <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
{`// app/page.tsx
export default function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold">欢迎使用 Next.js 15</h1>
      <p className="text-lg text-gray-600">
        体验全新的开发体验和性能优化
      </p>
    </div>
  );
}

// app/blog/[slug]/page.tsx
export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <article>
      <h1>博客文章: {params.slug}</h1>
      {/* 文章内容 */}
    </article>
  );
}`}
              </pre>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. 服务端组件优化</h3>
            <p className="mb-6">
              服务端组件在 Next.js 15 中得到了进一步优化：
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>更快的渲染速度</li>
              <li>更好的内存管理</li>
              <li>改进的流式渲染</li>
              <li>更智能的组件缓存</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. 性能优化</h3>
            <p className="mb-6">
              Next.js 15 在性能方面有了显著提升：
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>更快的构建速度</li>
              <li>更小的包大小</li>
              <li>更好的缓存策略</li>
              <li>优化的运行时性能</li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
              <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 性能提升数据</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">+50%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">构建速度提升</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">-15%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">包大小减少</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">+30%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">开发体验提升</div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🛠️ 开发体验改进</h2>
            <p className="mb-6">
              Next.js 15 在开发体验方面也有很多改进：
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>更快的热重载</li>
              <li>更好的错误提示</li>
              <li>改进的调试工具</li>
              <li>更智能的代码分割</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">📊 功能对比表</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">特性</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Next.js 14</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Next.js 15</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">改进</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">构建速度</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">100%</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">150%</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-green-600">+50%</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">包大小</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">100%</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">85%</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-green-600">-15%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">开发体验</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">良好</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">优秀</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-green-600">+30%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">📈 迁移指南</h2>
            <p className="mb-6">
              从 Next.js 14 迁移到 15 非常简单，按照以下步骤进行：
            </p>
            <ol className="list-decimal list-inside mb-6 space-y-2">
              <li>更新 package.json 中的 Next.js 版本</li>
              <li>运行 <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">npm install</code></li>
              <li>检查破坏性变更文档</li>
              <li>测试应用功能</li>
              <li>部署到生产环境</li>
            </ol>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-8">
              <h4 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-2">⚠️ 注意事项</h4>
              <p className="text-yellow-800 dark:text-yellow-200">
                在迁移过程中，请确保仔细阅读官方迁移指南，并备份重要数据。建议先在开发环境中测试所有功能。
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🔮 未来展望</h2>
            <p className="mb-6">
              Next.js 15 为未来的发展奠定了坚实的基础，我们期待看到更多创新功能的出现：
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>更强大的服务端组件</li>
              <li>更好的国际化支持</li>
              <li>更智能的代码分割</li>
              <li>更完善的开发工具</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🎯 总结</h2>
            <p className="mb-6">
              Next.js 15 是一个重要的版本更新，带来了显著的性能提升和更好的开发体验。建议所有项目都尽快升级到这个版本，以享受新特性带来的优势。
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">相关标签</h3>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "前端框架", "App Router", "服务端组件"].map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                张
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">张三</h3>
                <p className="text-gray-600 dark:text-gray-400">资深前端开发工程师，专注于Next.js和React技术栈研究</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
} 