import Image from 'next/image';
import Link from 'next/link';

export default function MicroFrontendArchitecturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <li><Link href="/" className="hover:text-gray-900 dark:hover:text-white">首页</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-gray-900 dark:hover:text-white">博客</Link></li>
            <li>/</li>
            <li className="text-gray-900 dark:text-white">微前端架构设计与实践</li>
          </ol>
        </nav>

        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm font-medium rounded-full">
                架构设计
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              微前端架构设计与实践
            </h1>
            <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  孙
                </div>
                <span>孙八</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                2024-01-03
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                10分钟阅读
              </div>
            </div>
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop&crop=center"
                alt="微前端架构"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </header>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              微前端是一种新兴的前端架构模式，它将大型前端应用拆分为多个独立的小型应用。本文将深入探讨微前端的设计理念、实现方案和最佳实践。
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🏗️ 微前端架构概述</h2>
            <p className="mb-6">
              微前端架构的核心思想是将前端应用拆分为多个独立的、可独立开发、部署和维护的小型应用：
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>独立开发和部署</li>
              <li>技术栈多样性</li>
              <li>团队自治</li>
              <li>渐进式迁移</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🔧 实现方案对比</h2>
            <p className="mb-6">
              目前主流的微前端实现方案包括：
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li><strong>Module Federation</strong> - Webpack 5 的模块联邦</li>
              <li><strong>Single-SPA</strong> - 轻量级微前端框架</li>
              <li><strong>qiankun</strong> - 蚂蚁金服开源方案</li>
              <li><strong>Garfish</strong> - 字节跳动开源方案</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">📋 设计原则</h2>
            <p className="mb-6">
              微前端架构设计需要遵循以下原则：
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>应用独立性</li>
              <li>技术栈无关性</li>
              <li>运行时集成</li>
              <li>团队自治</li>
              <li>渐进式升级</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🚀 技术实现</h2>
            <p className="mb-6">
              微前端的核心技术实现包括：
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>应用注册和发现</li>
              <li>路由管理</li>
              <li>状态管理</li>
              <li>通信机制</li>
              <li>样式隔离</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🎯 最佳实践</h2>
            <p className="mb-6">
              实施微前端架构时的最佳实践：
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>制定统一的开发规范</li>
              <li>建立共享组件库</li>
              <li>实施自动化测试</li>
              <li>建立监控体系</li>
              <li>制定部署策略</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">⚠️ 挑战与解决方案</h2>
            <p className="mb-6">
              微前端架构面临的挑战及解决方案：
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>性能优化 - 代码分割和懒加载</li>
              <li>样式冲突 - CSS-in-JS 或 CSS Modules</li>
              <li>状态管理 - 全局状态管理方案</li>
              <li>调试困难 - 统一的开发工具</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">📈 迁移策略</h2>
            <p className="mb-6">
              从单体应用迁移到微前端的策略：
            </p>
            <ol className="list-decimal list-inside mb-6 space-y-2">
              <li>识别业务边界</li>
              <li>选择合适的技术方案</li>
              <li>制定迁移计划</li>
              <li>逐步实施迁移</li>
              <li>验证和优化</li>
            </ol>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🔮 未来展望</h2>
            <p className="mb-6">
              微前端架构的未来发展趋势：
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>更成熟的工具链</li>
              <li>更好的开发体验</li>
              <li>更强的性能优化</li>
              <li>更完善的生态</li>
            </ul>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">相关标签</h3>
            <div className="flex flex-wrap gap-2">
              {["微前端", "架构设计", "大型应用", "前端架构", "模块化"].map((tag) => (
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
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                孙
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">孙八</h3>
                <p className="text-gray-600 dark:text-gray-400">资深前端架构师，专注于大型应用架构设计和微前端技术研究</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
} 