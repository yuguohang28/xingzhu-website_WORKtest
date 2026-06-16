// === Xingzhu Technology - Insights Article Grid Section ===

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Tag } from 'lucide-react'

import { fadeIn, staggerContainer, viewportOnce } from '@/shared/motion'
import { Section, SectionHeader } from '@/shared/components'
import {
  getArticlesByCategory,
  formatArticleDate,
  getCategoryLabel,
  CATEGORIES,
  SECTION_CONTENT,
} from '../insights.data'
import { articleStagger, articleCardEntrance } from '../insights.motion'

// ---------------------------------------------------------------------------
// Category Badge
// ---------------------------------------------------------------------------

function CategoryBadge({ category, size = 'sm' }) {
  const label = getCategoryLabel(category)
  const sizeClasses = size === 'sm' ? 'px-2.5 py-0.5 text-[11px]' : 'px-3 py-1 text-xs'
  return (
    <span
      className={`inline-block bg-accent-100 text-accent-400 font-medium rounded-sm ${sizeClasses} tracking-wide`}
    >
      {label}
    </span>
  )
}

// ---------------------------------------------------------------------------
// Article Grid Card
// ---------------------------------------------------------------------------

function ArticleCard({ article }) {
  const { title, date, excerpt, category, tags } = article
  return (
    <motion.div
      className="group relative bg-surface-100 border border-surface-200 rounded-sm cursor-pointer"
      variants={articleCardEntrance}
      whileHover={{
        scale: 1.02,
        borderColor: 'rgba(212, 135, 75, 0.3)',
        transition: { type: 'spring', stiffness: 200, damping: 18 },
      }}
    >
      <div className="relative z-10 p-5 md:p-6 flex flex-col h-full">
        <CategoryBadge category={category} />
        <h3 className="mt-3 text-base md:text-lg leading-snug text-surface-800 font-semibold tracking-tight line-clamp-2">
          {title}
        </h3>
        <div className="mt-2 flex items-center gap-4 text-xs text-surface-400">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {formatArticleDate(date)}
          </span>
        </div>
        <p className="mt-3 text-sm text-surface-500 leading-relaxed line-clamp-2 flex-1">
          {excerpt}
        </p>
        {tags && tags.length > 0 && (
          <div className="mt-4 pt-4 border-t border-surface-200 flex flex-wrap gap-2">
            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-[11px] text-surface-400"
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
        eyebrow={SECTION_CONTENT.allArticles.eyebrow}
        headline={SECTION_CONTENT.allArticles.headline}
        description={SECTION_CONTENT.allArticles.description}
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
                ? 'bg-accent-500 text-surface-50'
                : 'bg-surface-200/50 text-surface-500 hover:bg-surface-300/50 hover:text-surface-800'
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
          className="mt-12 text-center text-surface-400 text-sm"
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
