// === Xingzhu Technology - Insights Page ===

import { motion } from 'framer-motion'
import { pageTransition } from '@/shared/motion'
import { HeroSection, FeaturedArticles, ArticleGridSection, NewsletterSection } from './insights.sections'

export default function Insights() {
  return (
    <motion.div
      className="min-h-[100dvh] bg-surface-950"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <HeroSection />
      <FeaturedArticles />
      <ArticleGridSection />
      <NewsletterSection />
    </motion.div>
  )
}
