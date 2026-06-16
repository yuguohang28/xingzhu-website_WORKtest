// === Comparison Section ===

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { Section, SectionHeader } from '@/shared/components'
import { fadeUp, fadeIn, viewportOnce } from '@/shared/motion'
import { comparisonData } from '../solutions.data'
import { SOLUTIONS_CONFIG } from '../solutions.config'

export default function ComparisonSection() {
  const { before, after } = comparisonData

  return (
    <Section dark id={SOLUTIONS_CONFIG.sectionIds.comparison}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <SectionHeader
          headline={comparisonData.sectionTitle}
          description={comparisonData.sectionDesc}
          className="mb-0"
        />
      </motion.div>

      <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
        {/* Before */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="border border-surface-200 rounded-sm p-6 md:p-8 bg-surface-100"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-sm bg-red-500/10 flex items-center justify-center">
              <X className="w-4 h-4 text-red-400" />
            </div>
            <h3 className="text-base font-semibold text-surface-600">
              {before.title}
            </h3>
          </div>
          <ul className="space-y-4">
            {before.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-surface-400">
                <X className="w-4 h-4 text-red-400/60 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* After */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ delay: 0.15 }}
          className="border border-accent-300/60 rounded-sm p-6 md:p-8 bg-accent-50/80"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-sm bg-accent-100 flex items-center justify-center">
              <Check className="w-4 h-4 text-accent-400" />
            </div>
            <h3 className="text-base font-semibold text-surface-800">
              {after.title}
            </h3>
          </div>
          <ul className="space-y-4">
            {after.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-surface-600">
                <Check className="w-4 h-4 text-accent-400 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  )
}
