import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            关于 Next.js
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            现代React框架，让Web开发更简单、更快速
          </p>
        </div>

        {/* Next.js Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={200}
            height={50}
            className="dark:invert"
          />
        </div>

        {/* 主要内容 */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* 什么是Next.js */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              🚀 什么是 Next.js？
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Next.js 是一个基于 React 的全栈 Web 应用框架，由 Vercel 开发和维护。
              它提供了许多开箱即用的功能，让开发者能够快速构建现代化的 Web 应用。
              Next.js 简化了 React 应用的开发流程，提供了优秀的开发体验和性能优化。
            </p>
          </section>

          {/* 核心特性 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              ⭐ 核心特性
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">服务端渲染 (SSR)</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      在服务器端预渲染页面，提升首屏加载速度和SEO
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">静态站点生成 (SSG)</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      在构建时生成静态HTML，提供极快的加载速度
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">App Router</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      基于文件系统的路由，支持嵌套布局和并行路由
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">API Routes</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      内置API路由，轻松创建后端API端点
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">自动代码分割</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      自动优化包大小，只加载需要的代码
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    6
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">TypeScript支持</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      开箱即用的TypeScript支持，提供更好的开发体验
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 优势 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              🎯 为什么选择 Next.js？
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">性能优化</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  内置性能优化，包括图片优化、字体优化、自动代码分割等
                </p>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="text-3xl mb-2">🛠️</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">开发体验</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  热重载、快速刷新、优秀的错误提示，提升开发效率
                </p>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div className="text-3xl mb-2">🚀</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">部署简单</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  支持多种部署平台，特别是Vercel提供一键部署
                </p>
              </div>
            </div>
          </section>

          {/* 技术栈 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              🛠️ 技术栈
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">前端技术</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>React 19.1.0</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>TypeScript 5.x</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Tailwind CSS 4.x</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Geist 字体</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">开发工具</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Turbopack (快速打包)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>ESLint (代码检查)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>PostCSS (CSS处理)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>App Router (文件路由)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 学习资源 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              📚 学习资源
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  📖 官方文档
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  详细的API文档和使用指南
                </p>
              </a>
              <a
                href="https://nextjs.org/learn"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  🎓 交互式教程
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  手把手教你构建Next.js应用
                </p>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 