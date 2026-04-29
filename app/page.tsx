import Link from '@/components/Link'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-white">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Vic</h1>
        <p className="mt-3 text-sm text-blue-400 sm:text-base">Underwater Exploration</p>

        <p className="mt-8 text-base leading-7 text-gray-300 sm:text-lg">
          你好，我是 Vic。这里记录我对水下探索、游戏、音乐与世界的持续观察。
        </p>

        <div className="mt-12 flex justify-center">
          <Link
            href="/home"
            className="rounded-full bg-orange-500 px-8 py-3 text-base font-bold text-white transition hover:bg-orange-400"
          >
            进入 Vicverse
          </Link>
        </div>
      </div>
    </main>
  )
}
