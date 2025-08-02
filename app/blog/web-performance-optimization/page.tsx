import Image from 'next/image';
import Link from 'next/link';

export default function WebPerformanceOptimizationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <li><Link href="/" className="hover:text-gray-900 dark:hover:text-white">首页</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-gray-900 dark:hover:text-white">博客</Link></li>
            <li>/</li>
            <li className="text-gray-900 dark:text-white">Web性能优化实战指南</li>
          </ol>
        </nav>

        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 text-sm font-medium rounded-full">
                性能优化
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Web性能优化实战指南
            </h1>
            <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  钱
                </div>
                <span>钱七</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                2024-01-05
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                15分钟阅读
              </div>
            </div>
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&crop=center"
                alt="Web性能优化"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </header>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              在当今快节奏的互联网时代，网站性能直接影响用户体验和业务成功。本文将深入探讨Web性能优化的核心技术和最佳实践。
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">📊 性能指标的重要性</h2>
            <p className="mb-6">
              了解关键性能指标是优化的第一步。Google的Core Web Vitals包括：
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li><strong>LCP (Largest Contentful Paint)</strong> - 最大内容绘制时间</li>
              <li><strong>FID (First Input Delay)</strong> - 首次输入延迟</li>
              <li><strong>CLS (Cumulative Layout Shift)</strong> - 累积布局偏移</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🖼️ 图片优化策略</h2>
            <p className="mb-6">
              图片通常是网页中最大的资源，优化图片可以显著提升加载速度：
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>使用现代图片格式（WebP、AVIF）</li>
              <li>实施响应式图片</li>
              <li>启用懒加载</li>
              <li>压缩和优化图片</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">📦 代码分割与懒加载</h2>
            <p className="mb-6">
              将代码分割成更小的块，只在需要时加载：
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>路由级别的代码分割</li>
              <li>组件级别的懒加载</li>
              <li>第三方库的动态导入</li>
              <li>预加载关键资源</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">⚡ 缓存策略</h2>
            <p className="mb-6">
              合理的缓存策略可以大幅提升用户体验：
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>浏览器缓存配置</li>
              <li>CDN缓存策略</li>
              <li>Service Worker缓存</li>
              <li>API响应缓存</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🔧 构建优化</h2>
            <p className="mb-6">
              优化构建过程可以减少包体积：
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Tree Shaking</li>
              <li>代码压缩和混淆</li>
              <li>移除未使用的CSS</li>
              <li>优化依赖包</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">📈 监控与分析</h2>
            <p className="mb-6">
              持续监控是性能优化的关键：
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>使用Lighthouse进行审计</li>
              <li>实施Real User Monitoring (RUM)</li>
              <li>监控关键业务指标</li>
              <li>建立性能预算</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🎯 最佳实践总结</h2>
            <p className="mb-6">
              性能优化是一个持续的过程，需要：
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>建立性能文化</li>
              <li>制定性能预算</li>
              <li>持续监控和改进</li>
              <li>关注用户体验</li>
            </ul>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">相关标签</h3>
            <div className="flex flex-wrap gap-2">
              {["性能优化", "Web开发", "用户体验", "前端优化", "Core Web Vitals"].map((tag) => (
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
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                钱
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">钱七</h3>
                <p className="text-gray-600 dark:text-gray-400">资深前端性能优化专家，专注于Web性能监控和优化技术</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
} 