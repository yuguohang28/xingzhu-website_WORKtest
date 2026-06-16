import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Home } from 'lucide-react'
import { fadeUp, viewportOnce } from '@/shared/motion'
import { Button } from '@/shared/components'

export default function NotFound() {
  return (
    <main className="min-h-[100dvh] bg-surface-50 flex items-center justify-center px-6">
      <motion.div
        className="text-center max-w-md"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        viewport={viewportOnce}
      >
        {/* 404 numeric visual */}
        <p className="text-[clamp(6rem,15vw,10rem)] font-bold tracking-tight text-surface-800/5 select-none leading-none">
          404
        </p>

        <div className="-mt-6 space-y-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-surface-800 tracking-tight">
            页面未找到
          </h1>
          <p className="text-surface-500 text-sm md:text-base leading-relaxed max-w-[40ch] mx-auto">
            您访问的页面不存在或已被移除。请检查链接是否正确，或返回首页继续浏览。
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="secondary" size="md" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4" />
            返回上一页
          </Button>
          <Button variant="primary" size="md" to="/">
            <Home className="w-4 h-4" />
            返回首页
          </Button>
        </div>
      </motion.div>
    </main>
  )
}
