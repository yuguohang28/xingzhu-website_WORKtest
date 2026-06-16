// === Xingzhu Technology - Contact Hero Section ===

import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/shared/motion'
import { HERO_CONTENT } from '../contact.data'

function HeroSection() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 bg-surface-950">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-[720px]"
        >
          <p className="text-xs text-slate-500 tracking-widest mb-4 uppercase">
            {HERO_CONTENT.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
            {HERO_CONTENT.headline1}
            <br />
            <span className="text-accent-500">{HERO_CONTENT.headline2}</span>
          </h1>
          <p className="mt-5 text-slate-400 text-base leading-relaxed max-w-[65ch]">
            {HERO_CONTENT.description}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
