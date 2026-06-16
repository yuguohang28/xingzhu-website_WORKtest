import { motion } from 'framer-motion'
import { staggerContainer, viewportOnce } from '@/shared/motion'
import { Section } from '@/shared/components'
import { HOME_SECTION_IDS } from '../home.config'
import { STATS_DATA } from '../home.data'
import { statItemVariants } from '../home.motion'

export default function StatsSection() {
  return (
    <Section
      id={HOME_SECTION_IDS.stats}
      className="relative border-y border-surface-200"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-24">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {STATS_DATA.map((stat, index) => (
            <motion.div
              key={stat.label}
              custom={index}
              variants={statItemVariants}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-surface-800 mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-surface-500 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
