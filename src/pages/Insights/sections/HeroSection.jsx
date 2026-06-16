// === Xingzhu Technology - Insights Hero Section ===

import { motion } from 'framer-motion'
import { fadeUp } from '@/shared/motion'
import { HERO_CONFIG } from '../insights.config'

export function HeroSection() {
  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="max-w-[820px]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            {HERO_CONFIG.headline}
          </h1>
          <p className="mt-6 text-base md:text-lg text-slate-400 leading-relaxed max-w-[65ch]">
            {HERO_CONFIG.subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
