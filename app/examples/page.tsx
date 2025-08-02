import Image from "next/image";

export default function Examples() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Next.js 使用例子
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            通过实际代码示例学习 Next.js 的核心功能
          </p>
        </div>

        {/* 主要内容 */}
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* 1. 基础页面组件 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              📄 1. 基础页面组件
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              创建一个简单的页面组件，展示基本的 Next.js 页面结构。
            </p>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
{`// app/page.tsx
export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        欢迎来到我的 Next.js 应用
      </h1>
      <p className="text-gray-600">
        这是一个使用 Next.js 构建的页面。
      </p>
    </div>
  );
}`}
              </pre>
            </div>
          </section>

          {/* 2. 动态路由 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              🔗 2. 动态路由
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              使用动态路由创建可复用的页面，支持参数传递。
            </p>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
{`// app/posts/[id]/page.tsx
interface PostPageProps {
  params: {
    id: string;
  };
}

export default function PostPage({ params }: PostPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">
        文章 ID: {params.id}
      </h1>
      <p className="text-gray-600">
        这是文章 {params.id} 的详细内容。
      </p>
    </div>
  );
}`}
              </pre>
            </div>
          </section>

          {/* 3. 数据获取 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              📊 3. 数据获取
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              在服务器端获取数据并渲染页面。
            </p>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
{`// app/users/page.tsx
interface User {
  id: number;
  name: string;
  email: string;
}

async function getUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">用户列表</h1>
      <div className="grid gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded-lg">
            <h3 className="font-semibold">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}`}
              </pre>
            </div>
          </section>

          {/* 4. API 路由 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              🔌 4. API 路由
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              创建后端 API 端点处理请求。
            </p>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
{`// app/api/users/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const users = [
    { id: 1, name: '张三', email: 'zhang@example.com' },
    { id: 2, name: '李四', email: 'li@example.com' },
  ];
  
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();
  
  // 处理创建用户的逻辑
  const newUser = {
    id: Date.now(),
    name: body.name,
    email: body.email,
  };
  
  return NextResponse.json(newUser, { status: 201 });
}`}
              </pre>
            </div>
          </section>

          {/* 5. 客户端组件 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              🎯 5. 客户端组件
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              使用客户端组件处理交互和状态管理。
            </p>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
{`// app/components/Counter.tsx
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="text-center p-6 border rounded-lg">
      <h3 className="text-xl font-semibold mb-4">计数器</h3>
      <p className="text-2xl font-bold mb-4">{count}</p>
      <div className="space-x-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          减少
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          增加
        </button>
      </div>
    </div>
  );
}`}
              </pre>
            </div>
          </section>

          {/* 6. 布局组件 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              🏗️ 6. 布局组件
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              创建可复用的布局组件。
            </p>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
{`// app/components/Layout.tsx
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            我的应用
          </Link>
          <div className="space-x-4">
            <Link href="/" className="hover:text-gray-300">
              首页
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              关于
            </Link>
            <Link href="/examples" className="hover:text-gray-300">
              例子
            </Link>
          </div>
        </div>
      </nav>
      
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2024 我的 Next.js 应用
      </footer>
    </div>
  );
}`}
              </pre>
            </div>
          </section>

          {/* 7. 图片优化 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              🖼️ 7. 图片优化
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              使用 Next.js 的图片组件进行自动优化。
            </p>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
{`// app/components/ImageGallery.tsx
import Image from 'next/image';

const images = [
  { src: '/image1.jpg', alt: '风景图片 1' },
  { src: '/image2.jpg', alt: '风景图片 2' },
  { src: '/image3.jpg', alt: '风景图片 3' },
];

export default function ImageGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative h-64">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}`}
              </pre>
            </div>
          </section>

          {/* 8. 表单处理 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              📝 8. 表单处理
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              处理表单提交和数据验证。
            </p>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
{`// app/components/ContactForm.tsx
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('消息发送成功！');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      alert('发送失败，请重试。');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">姓名</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">邮箱</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">消息</label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="w-full p-2 border rounded"
          rows={4}
          required
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        发送消息
      </button>
    </form>
  );
}`}
              </pre>
            </div>
          </section>

          {/* 实践建议 */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              💡 实践建议
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">最佳实践</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <span>使用 TypeScript 提供类型安全</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <span>合理使用服务端和客户端组件</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <span>优化图片和字体加载</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <span>实现错误边界和加载状态</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">性能优化</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span>使用静态生成提高加载速度</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span>实现代码分割减少包大小</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span>缓存 API 响应数据</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span>使用 CDN 加速静态资源</span>
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