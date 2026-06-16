// === Feature Detail ===

import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { Card } from '@/shared/components'
import { tabContentVariants } from '../solutions.motion'
import DynamicIcon from './DynamicIcon'

export default function FeatureDetail({ category }) {
  if (!category) return null

  const heroFeature = category.features.find((f) => f.isHero)
  const smallFeatures = category.features.filter((f) => !f.isHero)

  return (
    <div className="hidden md:block mt-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={category.id}
          variants={tabContentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Category description */}
          <p className="text-slate-400 text-sm mb-8 max-w-[600px]">
            {category.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Hero feature - spans 2 columns */}
            {heroFeature && (
              <div className="md:col-span-2 bg-gradient-to-br from-accent-500/[0.04] to-accent-600/[0.02] border border-accent-500/15 rounded-sm p-6 md:p-8 flex flex-col">
                <div className="w-10 h-10 rounded-sm bg-accent-500/15 flex items-center justify-center mb-4">
                  <DynamicIcon
                    name={heroFeature.icon}
                    className="w-5 h-5 text-accent-400"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                  {heroFeature.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  {heroFeature.description}
                </p>
                {heroFeature.highlights && (
                  <ul className="mt-auto space-y-2.5">
                    {heroFeature.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-slate-300"
                      >
                        <CheckCircle className="w-4 h-4 text-accent-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Small features - right column */}
            <div className="flex flex-col gap-5">
              {smallFeatures.map((feat, i) => (
                <Card key={feat.title} delay={i + 1} className="flex-1">
                  <div className="w-8 h-8 rounded-sm bg-white/[0.04] flex items-center justify-center mb-3">
                    <DynamicIcon
                      name={feat.icon}
                      className="w-4 h-4 text-accent-400"
                    />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1.5">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {feat.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
