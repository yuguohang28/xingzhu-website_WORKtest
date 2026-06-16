// === Architecture Section ===

import { motion } from 'framer-motion'
import { Section, SectionHeader } from '@/shared/components'
import { fadeUp, viewportOnce } from '@/shared/motion'
import { architectureItemVariants } from '../solutions.motion'
import { architectureLayers } from '../solutions.data'
import { SOLUTIONS_CONFIG } from '../solutions.config'

export default function ArchitectureSection() {
  return (
    <Section dark id={SOLUTIONS_CONFIG.sectionIds.architecture}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <SectionHeader
          headline="技术架构"
          description="端到端AI技术平台，四层架构支撑建材供应链全场景智能化"
          className="mb-0"
        />
      </motion.div>

      <div className="relative mt-16 md:mt-20 max-w-4xl mx-auto pl-10 md:pl-14">
        {/* Vertical connector line */}
        <div className="absolute left-[13px] md:left-[17px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-accent-500/50 via-accent-500/20 to-accent-500/50" />

        <div className="space-y-14 md:space-y-20">
          {architectureLayers.map((layer, idx) => (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Connector dot */}
              <div className="absolute -left-[25px] md:-left-[31px] top-1 w-[18px] h-[18px] md:w-[22px] md:h-[22px] rounded-full bg-surface-100 border-2 border-accent-500/50 flex items-center justify-center">
                <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-accent-500" />
              </div>

              {/* Layer label */}
              <div className="mb-5">
                <span
                  className={`inline-block px-3 py-1 text-xs font-medium rounded-sm border ${layer.labelColor}`}
                >
                  {layer.label}
                </span>
                <p className="mt-1.5 text-sm text-surface-400">
                  {layer.description}
                </p>
              </div>

              {/* Layer items */}
              <div className="flex flex-wrap gap-2.5">
                {layer.items.map((item, i) => (
                  <motion.div
                    key={item}
                    custom={i}
                    variants={architectureItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className={`px-3.5 py-2 text-xs md:text-sm rounded-sm border ${layer.itemColor}`}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
