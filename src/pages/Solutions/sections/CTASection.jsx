// === CTA Section ===

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp, viewportOnce } from '@/shared/motion'
import { Button } from '@/shared/components'
import { SOLUTIONS_CONFIG } from '../solutions.config'

export default function CTASection() {
  return (
    <section
      id={SOLUTIONS_CONFIG.sectionIds.cta}
      className="relative py-24 md:py-32 px-6 bg-surface-950 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-accent-500)_0%,_transparent_65%)] opacity-[0.04]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative max-w-[800px] mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
          用AI重塑您的
          <span className="text-accent-400">建材供应链</span>
        </h2>
        <p className="mt-5 text-base md:text-lg text-slate-400 leading-relaxed max-w-[560px] mx-auto">
          预约专属演示，了解星筑科技如何通过AI技术赋能您的采购、物流与质量管理，驱动供应链全面升级。
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button variant="primary" size="lg" to="/contact">
            预约演示
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="secondary" size="lg" to="/contact">
            获取解决方案白皮书
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
