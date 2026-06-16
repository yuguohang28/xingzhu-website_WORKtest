import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { staggerContainer, viewportOnce } from '@/shared/motion'
import { Button } from '@/shared/components'
import { CTA_DATA } from '../home.data'
import { ctaContentVariants } from '../home.motion'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">
        <motion.div
          className="flex flex-col items-center text-center gap-8 max-w-2xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h2
            variants={ctaContentVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            {CTA_DATA.title}
          </motion.h2>
          <motion.p
            variants={ctaContentVariants}
            className="text-lg text-slate-400 leading-relaxed max-w-lg"
          >
            {CTA_DATA.description}
          </motion.p>
          <motion.div variants={ctaContentVariants}>
            <Button
              variant="primary"
              size="lg"
              to={CTA_DATA.buttonTo}
            >
              {CTA_DATA.buttonText}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
