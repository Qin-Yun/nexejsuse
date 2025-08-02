import Link from 'next/link';

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            帮助中心
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            获取使用帮助和常见问题解答
          </p>
        </div>

        {/* 主要内容 */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* 快速导航 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              🚀 快速开始
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link 
                href="/examples" 
                className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <div className="text-2xl mb-2">📚</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">使用例子</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  查看 Next.js 的实际代码示例
                </p>
              </Link>
              <Link 
                href="/about" 
                className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <div className="text-2xl mb-2">ℹ️</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">关于 Next.js</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  了解 Next.js 的特性和优势
                </p>
              </Link>
              <Link 
                href="/blog" 
                className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <div className="text-2xl mb-2">📝</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">技术博客</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  阅读最新的技术文章和教程
                </p>
              </Link>
            </div>
          </section>

          {/* 常见问题 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              ❓ 常见问题
            </h2>
            <div className="space-y-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Q: 如何开始学习 Next.js？
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A: 建议从查看&ldquo;使用例子&rdquo;页面开始，那里有详细的代码示例。然后阅读&ldquo;关于 Next.js&rdquo;页面了解框架特性，最后通过&ldquo;技术博客&rdquo;学习进阶知识。
                </p>
              </div>
              
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Q: Next.js 与 React 有什么区别？
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A: Next.js 是基于 React 的全栈框架，提供了服务端渲染、静态生成、API 路由等功能，让 React 应用开发更加简单和高效。
                </p>
              </div>
              
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Q: 如何部署 Next.js 应用？
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A: Next.js 应用可以部署到 Vercel、Netlify、AWS 等平台。推荐使用 Vercel，它提供了最佳的支持和性能优化。
                </p>
              </div>
              
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Q: 如何优化 Next.js 应用性能？
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A: 使用静态生成、图片优化、代码分割、缓存策略等技术。详细内容请参考&ldquo;使用例子&rdquo;页面中的性能优化部分。
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Q: 支持哪些数据库？
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A: Next.js 可以与任何数据库配合使用，包括 PostgreSQL、MySQL、MongoDB、SQLite 等。通过 API 路由可以轻松集成各种数据库。
                </p>
              </div>
            </div>
          </section>

          {/* 使用指南 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              📖 使用指南
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">基础概念</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <span>App Router - 基于文件系统的路由</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <span>服务端组件 - 默认在服务器端渲染</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <span>客户端组件 - 使用 &apos;use client&apos; 指令</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <span>布局组件 - 共享 UI 结构</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">开发流程</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span>创建页面组件</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span>配置路由和布局</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span>添加样式和交互</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span>测试和部署</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 技术支持 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              🛠️ 技术支持
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">官方资源</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>
                    <a 
                      href="https://nextjs.org/docs" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      📖 官方文档
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://nextjs.org/learn" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      🎓 交互式教程
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://github.com/vercel/next.js" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      💻 GitHub 仓库
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://nextjs.org/discord" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      💬 Discord 社区
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">社区资源</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>
                    <a 
                      href="https://stackoverflow.com/questions/tagged/next.js" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      🔍 Stack Overflow
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.reddit.com/r/nextjs/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      📱 Reddit 社区
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://twitter.com/nextjs" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      🐦 Twitter 官方
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://nextjs.org/blog" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      📰 官方博客
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 联系信息 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              📞 联系我们
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">获取帮助</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  如果您在使用过程中遇到问题，可以通过以下方式获取帮助：
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>查看常见问题解答</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>参考使用例子页面</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>访问官方文档</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>加入社区讨论</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">反馈建议</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  我们非常重视您的反馈和建议，这将帮助我们改进产品：
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>功能建议</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Bug 报告</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>文档改进</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>用户体验优化</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 