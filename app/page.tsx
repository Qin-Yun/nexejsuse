import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-slate-900 dark:via-teal-900 dark:to-cyan-900 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '6s'}}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '9s'}}></div>
      </div>
      
      <div className="relative z-10 font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div className="text-center sm:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Next.js 学习应用
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              探索现代前端开发的最佳实践，从基础概念到高级技巧，一站式学习平台
            </p>
          </div>
          
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 dark:border-gray-700/20">
            <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left space-y-2">
              <li className="tracking-[-.01em]">
                Get started by editing{" "}
                <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
                  app/page.tsx
                </code>
                .
              </li>
              <li className="tracking-[-.01em]">
                Save and see your changes instantly.
              </li>
            </ol>
          </div>
        </main>
      </div>
    </div>
  );
}
