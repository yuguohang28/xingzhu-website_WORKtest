// === Xingzhu Technology - Insights Newsletter Section ===

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { viewportOnce } from '@/shared/motion'
import { Section, SectionHeader, Button } from '@/shared/components'
import { INSIGHTS_CONFIG } from '../insights.config'
import { newsletterEntrance } from '../insights.motion'

export function NewsletterSection() {
  return (
    <Section>
      <motion.div
        className="max-w-[800px] mx-auto bg-white/[0.02] border border-white/[0.06] rounded-sm p-8 md:p-12 lg:p-14 text-center"
        variants={newsletterEntrance}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <SectionHeader
          className="mx-auto text-center"
          headline={INSIGHTS_CONFIG.newsletterTitle}
          description={INSIGHTS_CONFIG.newsletterDescription}
        />
        <div className="mt-8 max-w-[480px] mx-auto">
          <form
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder={INSIGHTS_CONFIG.newsletterPlaceholder}
              className="flex-1 px-4 py-3 text-sm bg-surface-900 border border-white/[0.08] rounded-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all duration-300"
            />
            <Button type="submit" variant="primary" size="md">
              {INSIGHTS_CONFIG.newsletterButton}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
          <p className="mt-3 text-xs text-slate-600">
            订阅即表示您同意接收邮件，可随时退订。
          </p>
        </div>
      </motion.div>
    </Section>
  )
}
