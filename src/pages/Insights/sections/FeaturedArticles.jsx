// === Xingzhu Technology - Insights Featured Articles Section ===

import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'

import { staggerContainer, viewportOnce } from '@/shared/motion'
import { Section, SectionHeader } from '@/shared/components'
import { getFeaturedArticles, formatArticleDate, getCategoryLabel, SECTION_CONTENT } from '../insights.data'
import { featuredLargeEntrance, featuredSmallEntrance } from '../insights.motion'

// ---------------------------------------------------------------------------
// Category Badge
// ---------------------------------------------------------------------------

function CategoryBadge({ category, size = 'sm' }) {
  const label = getCategoryLabel(category)
  const sizeClasses = size === 'sm' ? 'px-2.5 py-0.5 text-[11px]' : 'px-3 py-1 text-xs'
  return (
    <span
      className={`inline-block bg-accent-500/10 text-accent-400 font-medium rounded-sm ${sizeClasses} tracking-wide`}
    >
      {label}
    </span>
  )
}

// ---------------------------------------------------------------------------
// Featured Article Card (large)
// ---------------------------------------------------------------------------

function FeaturedCardLarge({ article }) {
  const { title, date, excerpt, category } = article
  return (
    <motion.div
      className="group relative bg-white/[0.02] border border-white/[0.04] rounded-sm p-6 md:p-8 lg:p-10 cursor-pointer"
      variants={featuredLargeEntrance}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      whileHover={{
        scale: 1.015,
        y: -4,
        borderColor: 'rgba(212, 135, 75, 0.35)',
        transition: { type: 'spring', stiffness: 180, damping: 16, mass: 0.9 },
      }}
    >
      <div className="relative z-10 flex flex-col h-full">
        <CategoryBadge category={category} size="md" />
        <h3 className="mt-4 text-xl md:text-2xl lg:text-3xl leading-tight text-white font-semibold tracking-tight">
          {title}
        </h3>
        <div className="mt-3 flex items-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {formatArticleDate(date)}
          </span>
        </div>
        <p className="mt-4 text-sm md:text-base text-slate-400 leading-relaxed line-clamp-3 md:line-clamp-4">
          {excerpt}
        </p>
        <div className="mt-auto pt-6">
          <span className="inline-flex items-center gap-2 text-sm text-accent-400 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
            阅读全文 <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// Featured Article Card (small)
// ---------------------------------------------------------------------------

function FeaturedCardSmall({ article, delay }) {
  const { title, date, excerpt, category } = article
  return (
    <motion.div
      className="group relative bg-white/[0.02] border border-white/[0.04] rounded-sm p-5 md:p-6 cursor-pointer"
      variants={featuredSmallEntrance}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
      whileHover={{
        scale: 1.02,
        borderColor: 'rgba(212, 135, 75, 0.3)',
        transition: { type: 'spring', stiffness: 200, damping: 18 },
      }}
    >
      <div className="relative z-10 flex flex-col h-full">
        <CategoryBadge category={category} />
        <h3 className="mt-3 text-base md:text-lg leading-snug text-white font-semibold tracking-tight line-clamp-2">
          {title}
        </h3>
        <div className="mt-2 flex items-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {formatArticleDate(date)}
          </span>
        </div>
        <p className="mt-3 text-sm text-slate-400 leading-relaxed line-clamp-2">
          {excerpt}
        </p>
        <div className="mt-auto pt-4">
          <span className="inline-flex items-center gap-2 text-xs text-accent-400 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
            阅读全文 <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// Featured Articles Section
// ---------------------------------------------------------------------------

export function FeaturedArticles() {
  const featured = getFeaturedArticles()

  if (featured.length === 0) return null

  const [largeCard, ...smallCards] = featured

  return (
    <Section dark>
      <SectionHeader
        eyebrow={SECTION_CONTENT.featured.eyebrow}
        headline={SECTION_CONTENT.featured.headline}
        description={SECTION_CONTENT.featured.description}
      />
      <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {/* Large featured card - spans left column */}
        <motion.div
          className="md:row-span-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <FeaturedCardLarge article={largeCard} />
        </motion.div>

        {/* Smaller featured cards - stack in right column */}
        <motion.div
          className="flex flex-col gap-5 md:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {smallCards.map((article, i) => (
            <FeaturedCardSmall key={article.id} article={article} delay={0.1 + i * 0.1} />
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
