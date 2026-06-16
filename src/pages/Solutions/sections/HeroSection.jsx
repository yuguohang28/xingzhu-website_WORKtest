// === Hero Section ===

import { motion } from 'framer-motion'
import { slideInLeft, staggerContainer, fadeUp } from '@/shared/motion'
import { Button } from '@/shared/components'
import { heroFeatures } from '../solutions.data'
import { SOLUTIONS_CONFIG } from '../solutions.config'
import DynamicIcon from './DynamicIcon'

export default function HeroSection() {
  return (
    <section
      id={SOLUTIONS_CONFIG.sectionIds.hero}
      className="relative min-h-[100dvh] flex items-center bg-surface-950 overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-accent-500)_0%,_transparent_60%)] opacity-[0.03]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-surface-800)_0%,_transparent_60%)] opacity-[0.05]" />

      <div className="relative w-full max-w-[1400px] mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Headline */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              用AI重塑
              <br />
              <span className="text-accent-400">建材供应链</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-slate-400 leading-relaxed max-w-[520px]">
              从智能采购到全链路追溯，星筑科技以AI为核心驱动建材供应链数字化升级，帮助企业降本增效、掌控质量、规避风险。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  document.getElementById('solutions-tabs')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                了解解决方案
              </Button>
              <Button variant="secondary" size="lg" to="/contact">
                预约演示
              </Button>
            </div>
          </motion.div>

          {/* Right: Feature capability list */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {heroFeatures.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group flex items-start gap-4 p-4 rounded-sm border border-white/[0.04] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-300"
              >
                <div className="shrink-0 w-10 h-10 rounded-sm bg-accent-500/10 flex items-center justify-center group-hover:bg-accent-500/20 transition-colors">
                  <DynamicIcon
                    name={item.icon}
                    className="w-5 h-5 text-accent-400"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
