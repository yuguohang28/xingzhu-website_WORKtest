// === Xingzhu Technology - Insights Page Sections ===

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Tag } from 'lucide-react'

import { fadeUp, fadeIn, staggerContainer, viewportOnce } from '@/shared/motion'
import { Section, SectionHeader, Button } from '@/shared/components'
import { HERO_CONFIG, INSIGHTS_CONFIG } from './insights.config'
import {
  getFeaturedArticles,
  getArticlesByCategory,
  formatArticleDate,
  getCategoryLabel,
  CATEGORIES,
} from './insights.data'
import {
  articleStagger,
  articleCardEntrance,
  featuredLargeEntrance,
  featuredSmallEntrance,
  newsletterEntrance,
} from './insights.motion'

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
// Article Grid Card
// ---------------------------------------------------------------------------

function ArticleCard({ article }) {
  const { title, date, excerpt, category, tags } = article
  return (
    <motion.div
      className="group relative bg-white/[0.02] border border-white/[0.04] rounded-sm cursor-pointer"
      variants={articleCardEntrance}
      whileHover={{
        scale: 1.02,
        borderColor: 'rgba(212, 135, 75, 0.3)',
        transition: { type: 'spring', stiffness: 200, damping: 18 },
      }}
    >
      <div className="relative z-10 p-5 md:p-6 flex flex-col h-full">
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
        <p className="mt-3 text-sm text-slate-400 leading-relaxed line-clamp-2 flex-1">
          {excerpt}
        </p>
        {tags && tags.length > 0 && (
          <div className="mt-4 pt-4 border-t border-white/[0.04] flex flex-wrap gap-2">
            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-[11px] text-slate-500"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// Hero Section
// ---------------------------------------------------------------------------

export function HeroSection() {
  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="max-w-[820px]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            {HERO_CONFIG.headline}
          </h1>
          <p className="mt-6 text-base md:text-lg text-slate-400 leading-relaxed max-w-[65ch]">
            {HERO_CONFIG.subtitle}
          </p>
        </motion.div>
      </div>
    </section>
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
        eyebrow="精选推荐"
        headline="本期重点"
        description="来自行业前沿的深度报道与趋势分析，助您把握市场脉搏。"
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

// ---------------------------------------------------------------------------
// All Articles Section (with Category Filters)
// ---------------------------------------------------------------------------

export function ArticleGridSection() {
  const [activeCategory, setActiveCategory] = useState('all')
  const filteredArticles = useMemo(
    () => getArticlesByCategory(activeCategory),
    [activeCategory]
  )

  return (
    <Section>
      <SectionHeader
        eyebrow="全部文章"
        headline="探索更多内容"
        description="涵盖行业趋势、技术实践、政策解读与案例研究的多维内容矩阵。"
      />

      {/* Category Filter Pills */}
      <motion.div
        className="mt-10 md:mt-12 flex flex-wrap gap-2 md:gap-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {CATEGORIES.map((cat) => (
          <motion.button
            key={cat.id}
            variants={fadeIn}
            className={`px-4 py-2 text-sm font-medium rounded-sm transition-all duration-300 cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-accent-500 text-slate-950'
                : 'bg-white/[0.04] text-slate-400 hover:bg-white/[0.08] hover:text-white'
            }`}
            onClick={() => setActiveCategory(cat.id)}
            whileTap={{ scale: 0.96 }}
          >
            {cat.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Article Grid */}
      <motion.div
        className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        variants={articleStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        key={activeCategory}
      >
        {filteredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </motion.div>

      {filteredArticles.length === 0 && (
        <motion.p
          className="mt-12 text-center text-slate-500 text-sm"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
        >
          该分类暂无文章，请查看其他分类。
        </motion.p>
      )}
    </Section>
  )
}

// ---------------------------------------------------------------------------
// Newsletter CTA Section
// ---------------------------------------------------------------------------

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
