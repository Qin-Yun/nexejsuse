import Image from 'next/image';
import Link from 'next/link';

export default function React19TypeScriptPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <li><Link href="/" className="hover:text-gray-900 dark:hover:text-white">首页</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-gray-900 dark:hover:text-white">博客</Link></li>
            <li>/</li>
            <li className="text-gray-900 dark:text-white">React 19 与 TypeScript 最佳实践</li>
          </ol>
        </nav>

        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-medium rounded-full">
                编程教程
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              React 19 与 TypeScript 最佳实践
            </h1>
            <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  李
                </div>
                <span>李四</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                2024-01-12
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                8分钟阅读
              </div>
            </div>
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop&crop=center"
                alt="React 19 TypeScript"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </header>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              TypeScript 是现代 React 开发中不可或缺的工具，本文将分享在 React 19 中使用 TypeScript 的最佳实践，帮助你提高代码质量和开发效率。
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🎯 核心概念</h2>
            <p className="mb-6">
              在 React 19 中使用 TypeScript 需要掌握以下核心概念：
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. 类型定义</h3>
            <p className="mb-6">
              正确使用 TypeScript 类型定义是提高代码质量的关键：
            </p>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold mb-4">基础类型定义示例</h4>
              <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
{`interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

interface UserCardProps {
  user: User;
  onEdit?: (user: User) => void;
  onDelete?: (id: number) => void;
}`}
              </pre>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. 组件类型</h3>
            <p className="mb-6">
              为 React 组件定义正确的类型：
            </p>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold mb-4">组件类型示例</h4>
              <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
{`const UserCard: React.FC<UserCardProps> = ({ 
  user, 
  onEdit, 
  onDelete 
}) => {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      {onEdit && (
        <button onClick={() => onEdit(user)}>编辑</button>
      )}
      {onDelete && (
        <button onClick={() => onDelete(user.id)}>删除</button>
      )}
    </div>
  );
};`}
              </pre>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Hook 类型</h3>
            <p className="mb-6">
              为自定义 Hook 定义类型：
            </p>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold mb-4">Hook 类型示例</h4>
              <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
{`interface UseApiResult<T> {
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
}`}
              </pre>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">📋 最佳实践清单</h2>
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">✅ 推荐做法</h3>
              <ul className="space-y-2 text-green-800 dark:text-green-200">
                <li>✓ 为所有组件定义 Props 类型</li>
                <li>✓ 使用泛型提高代码复用性</li>
                <li>✓ 利用 TypeScript 的严格模式</li>
                <li>✓ 定期更新类型定义</li>
                <li>✓ 使用联合类型和交叉类型</li>
                <li>✓ 为事件处理器定义正确类型</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
              <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-4">❌ 避免做法</h3>
              <ul className="space-y-2 text-red-800 dark:text-red-200">
                <li>✗ 避免使用 any 类型</li>
                <li>✗ 不要忽略类型错误</li>
                <li>✗ 避免过度复杂的类型定义</li>
                <li>✗ 不要忘记为异步函数定义返回类型</li>
                <li>✗ 避免使用类型断言</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🔧 高级技巧</h2>
            <p className="mb-6">
              掌握这些高级技巧可以让你更好地使用 TypeScript：
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. 条件类型</h3>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
{`type NonNullable<T> = T extends null | undefined ? never : T;

type UserName = NonNullable<User['name']>; // string

type ConditionalProps<T> = T extends { show: true } 
  ? { content: string } 
  : { content?: string };`}
              </pre>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. 映射类型</h3>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
{`type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Required<T> = {
  [P in keyof T]-?: T[P];
};

type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};`}
              </pre>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🚀 性能优化</h2>
            <p className="mb-6">
              使用 TypeScript 时的性能优化技巧：
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>使用 const assertions 减少类型推断</li>
              <li>合理使用泛型约束</li>
              <li>避免过度复杂的类型定义</li>
              <li>使用类型别名提高可读性</li>
              <li>合理使用类型断言</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">📈 迁移策略</h2>
            <p className="mb-6">
              从 JavaScript 迁移到 TypeScript 的策略：
            </p>
            <ol className="list-decimal list-inside mb-6 space-y-2">
              <li>逐步添加类型注解</li>
              <li>使用 JSDoc 注释作为过渡</li>
              <li>配置 TypeScript 严格模式</li>
              <li>建立类型定义库</li>
              <li>培训团队成员</li>
            </ol>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🎯 总结</h2>
            <p className="mb-6">
              TypeScript 与 React 19 的结合为开发带来了更好的类型安全和开发体验。通过遵循这些最佳实践，可以显著提高代码质量和团队协作效率。
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">相关标签</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "前端开发", "类型安全", "最佳实践"].map((tag) => (
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
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                李
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">李四</h3>
                <p className="text-gray-600 dark:text-gray-400">资深前端开发工程师，专注于React和TypeScript技术栈研究</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
} 