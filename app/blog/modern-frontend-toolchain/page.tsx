import Image from 'next/image';
import Link from 'next/link';

export default function ModernFrontendToolchainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <li><Link href="/" className="hover:text-gray-900 dark:hover:text-white">首页</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-gray-900 dark:hover:text-white">博客</Link></li>
            <li>/</li>
            <li className="text-gray-900 dark:text-white">现代前端开发工具链搭建</li>
          </ol>
        </nav>

        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm font-medium rounded-full">
                开发工具
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              现代前端开发工具链搭建
            </h1>
            <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  王
                </div>
                <span>王五</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                2024-01-10
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                12分钟阅读
              </div>
            </div>
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop&crop=center"
                alt="现代前端开发工具链"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </header>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              一个完善的前端开发工具链对于提高开发效率和代码质量至关重要。本文将详细介绍如何搭建现代化的前端开发环境。
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🛠️ 核心工具</h2>
            <p className="mb-6">
              现代前端开发工具链包括以下核心工具：
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. 包管理器</h3>
            <p className="mb-6">
              选择合适的包管理器是第一步：
            </p>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold mb-4">包管理器对比</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-200 dark:bg-gray-700">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">工具</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">特点</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">推荐度</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">npm</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Node.js 默认包管理器</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">⭐⭐⭐⭐</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">yarn</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Facebook 开发，性能优秀</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">⭐⭐⭐⭐⭐</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">pnpm</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">磁盘空间效率高</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">⭐⭐⭐⭐⭐</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. 构建工具</h3>
            <p className="mb-6">
              现代构建工具提供了更快的构建速度和更好的开发体验：
            </p>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold mb-4">构建工具对比</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-200 dark:bg-gray-700">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">工具</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">特点</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">适用场景</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Vite</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">极快的开发服务器</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">现代前端项目</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Webpack</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">功能强大，生态丰富</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">复杂项目</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Rollup</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">专注于库打包</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">库开发</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. 代码质量工具</h3>
            <p className="mb-6">
              确保代码质量和一致性的工具：
            </p>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold mb-4">代码质量工具</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-200 dark:bg-gray-700">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">工具</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">功能</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">推荐度</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">ESLint</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">代码检查</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">⭐⭐⭐⭐⭐</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Prettier</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">代码格式化</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">⭐⭐⭐⭐⭐</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Husky</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Git hooks</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">⭐⭐⭐⭐</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. 测试框架</h3>
            <p className="mb-6">
              完善的测试是保证代码质量的重要手段：
            </p>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold mb-4">测试工具对比</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-200 dark:bg-gray-700">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">工具</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">类型</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">推荐度</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Jest</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">单元测试</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">⭐⭐⭐⭐⭐</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">React Testing Library</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">组件测试</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">⭐⭐⭐⭐⭐</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Cypress</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">E2E测试</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">⭐⭐⭐⭐</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🚀 快速开始</h2>
            <p className="mb-6">
              按照以下步骤快速搭建现代前端开发工具链：
            </p>
            <ol className="list-decimal list-inside mb-6 space-y-2">
              <li>初始化项目并选择包管理器</li>
              <li>配置构建工具（Vite/Webpack）</li>
              <li>设置代码检查和格式化工具</li>
              <li>配置测试框架</li>
              <li>建立 CI/CD 流程</li>
            </ol>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 专家建议</h3>
              <p className="text-blue-800 dark:text-blue-200">
                建议根据项目规模和团队需求选择合适的工具组合。小型项目可以使用轻量级工具，大型项目则需要更完善的工具链。
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🔧 自动化脚本</h2>
            <p className="mb-6">
              在 package.json 中添加自动化脚本：
            </p>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold mb-4">package.json 脚本示例</h4>
              <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
{`{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint src --ext .js,.jsx,.ts,.tsx --fix",
    "format": "prettier --write src/**/*.{js,jsx,ts,tsx,css,md}",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "type-check": "tsc --noEmit",
    "prepare": "husky install"
  }
}`}
              </pre>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">📈 持续集成</h2>
            <p className="mb-6">
              建立 CI/CD 流程确保代码质量：
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>代码提交前自动检查</li>
              <li>自动化测试执行</li>
              <li>代码覆盖率检查</li>
              <li>自动化部署</li>
              <li>性能监控</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🎯 总结</h2>
            <p className="mb-6">
              一个完善的前端开发工具链能够显著提高开发效率和代码质量。选择合适的工具并正确配置是成功的关键。
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">相关标签</h3>
            <div className="flex flex-wrap gap-2">
              {["前端开发", "工具链", "工程化", "构建工具", "测试框架"].map((tag) => (
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
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                王
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">王五</h3>
                <p className="text-gray-600 dark:text-gray-400">资深前端工程师，专注于前端工程化和开发工具链研究</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
} 