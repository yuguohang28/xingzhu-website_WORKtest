import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/shared/motion'
import { Section } from '@/shared/components'
import { STATS_DATA, SECTION_CONTENT } from '../about.data'
import { statReveal } from '../about.motion'

export default function DataNarrative() {
  return (
    <Section id="about-stats" dark>
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-surface-800 leading-[1.1]">
          {SECTION_CONTENT.stats.title}
        </h2>
        <p className="mt-5 text-surface-500 text-base leading-relaxed max-w-[65ch]">
          {SECTION_CONTENT.stats.description}
        </p>
      </motion.div>

      <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {STATS_DATA.map((stat, i) => (
          <motion.div
            key={i}
            className="text-center"
            variants={statReveal}
            initial="hidden"
            whileInView="visible"
            custom={i}
            viewport={viewportOnce}
          >
            <span className="block text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight gradient-accent bg-clip-text text-transparent">
              {stat.value}
            </span>
            <span className="block text-surface-500 text-sm md:text-base mt-3">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Decorative separator */}
      <div className="mt-16 h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />
    </Section>
  )
}
