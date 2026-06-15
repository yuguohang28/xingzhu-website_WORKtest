// === 星筑科技 - Solutions Page Section Components ===

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import {
  Search,
  BarChart3,
  ShieldCheck,
  Route,
  TrendingUp,
  UserCheck,
  FileText,
  RefreshCw,
  Layers,
  Eye,
  FileSearch,
  CheckCircle,
  LineChart,
  PieChart,
  LayoutDashboard,
  AlertTriangle,
  Globe,
  Camera,
  ChevronDown,
  Check,
  X,
  ArrowRight,
} from 'lucide-react'

import {
  fadeUp,
  fadeIn,
  staggerContainer,
  slideInLeft,
  slideInRight,
  viewportOnce,
} from '@/shared/motion'
import { Section, SectionHeader, Card, Button } from '@/shared/components'
import {
  tabContentVariants,
  featureCardVariants,
  architectureItemVariants,
} from './solutions.motion'
import {
  heroFeatures,
  solutionCategories,
  architectureLayers,
  comparisonData,
} from './solutions.data'
import { SOLUTIONS_CONFIG, TAB_CONFIG } from './solutions.config'

// ─── Icon lookup ────────────────────────────────────────────────────────────

const iconMap = {
  Search,
  BarChart3,
  ShieldCheck,
  Route,
  TrendingUp,
  UserCheck,
  FileText,
  RefreshCw,
  Layers,
  Eye,
  FileSearch,
  CheckCircle,
  LineChart,
  PieChart,
  LayoutDashboard,
  AlertTriangle,
  Globe,
  Camera,
}

function DynamicIcon({ name, className = 'w-4 h-4' }) {
  const Icon = iconMap[name]
  return Icon ? <Icon className={className} /> : null
}

// ─── Hero Section ───────────────────────────────────────────────────────────

export function HeroSection() {
  return (
    <section
      id={SOLUTIONS_CONFIG.sectionIds.hero}
      className="relative min-h-[100dvh] flex items-center bg-surface-950 overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-accent-500)_0%,_transparent_60%)] opacity-[0.03]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-surface-800)_0%,_transparent_60%)] opacity-[0.05]" />

      <div className="relative w-full max-w-[1400px] mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Headline */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              用AI重塑
              <br />
              <span className="text-accent-400">建材供应链</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-slate-400 leading-relaxed max-w-[520px]">
              从智能采购到全链路追溯，星筑科技以AI为核心驱动建材供应链数字化升级，帮助企业降本增效、掌控质量、规避风险。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="#solutions-tabs">
                了解解决方案
              </Button>
              <Button variant="secondary" size="lg" href="#solutions-cta">
                预约演示
              </Button>
            </div>
          </motion.div>

          {/* Right: Feature capability list */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {heroFeatures.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group flex items-start gap-4 p-4 rounded-sm border border-white/[0.04] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-300"
              >
                <div className="shrink-0 w-10 h-10 rounded-sm bg-accent-500/10 flex items-center justify-center group-hover:bg-accent-500/20 transition-colors">
                  <DynamicIcon
                    name={item.icon}
                    className="w-5 h-5 text-accent-400"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Solution Tabs ─────────────────────────────────────────────────────────

export function SolutionTabs({ activeTab, onTabChange }) {
  const [mobileOpen, setMobileOpen] = useState(null)

  const handleMobileClick = (id) => {
    if (mobileOpen === id) {
      setMobileOpen(null)
    } else {
      setMobileOpen(id)
      onTabChange(id)
    }
  }

  return (
    <div className="mt-10">
      {/* Desktop: horizontal tabs */}
      <div className="hidden md:flex border-b border-white/[0.06]">
        {TAB_CONFIG.items.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium transition-all duration-300 border-b-2 -mb-px ${
                isActive
                  ? 'border-accent-500 text-white'
                  : 'border-transparent text-slate-500 hover:text-slate-300'
              }`}
            >
              <DynamicIcon
                name={tab.icon}
                className={`w-4 h-4 ${isActive ? 'text-accent-400' : 'text-slate-600'}`}
              />
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Mobile: vertical accordion */}
      <div className="md:hidden space-y-2">
        {solutionCategories.map((cat) => {
          const isOpen = mobileOpen === cat.id
          return (
            <div
              key={cat.id}
              className="border border-white/[0.06] rounded-sm overflow-hidden"
            >
              <button
                onClick={() => handleMobileClick(cat.id)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <div className="flex items-center gap-3">
                  <DynamicIcon
                    name={cat.icon}
                    className="w-4 h-4 text-accent-400"
                  />
                  <span className="text-sm font-medium text-white">
                    {cat.label}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 space-y-3 border-t border-white/[0.04] pt-3">
                      <p className="text-xs text-slate-500 mb-3">
                        {cat.description}
                      </p>
                      {cat.features.map((feat) => (
                        <div
                          key={feat.title}
                          className="flex items-start gap-3 p-3 rounded-sm bg-white/[0.02]"
                        >
                          <div className="shrink-0 w-7 h-7 rounded-sm bg-accent-500/10 flex items-center justify-center">
                            <DynamicIcon
                              name={feat.icon}
                              className="w-3.5 h-3.5 text-accent-400"
                            />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-white">
                              {feat.title}
                            </h4>
                            <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                              {feat.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Feature Detail ─────────────────────────────────────────────────────────

export function FeatureDetail({ category }) {
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

// ─── Architecture Section ───────────────────────────────────────────────────

export function ArchitectureSection() {
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
              <div className="absolute -left-[25px] md:-left-[31px] top-1 w-[18px] h-[18px] md:w-[22px] md:h-[22px] rounded-full bg-surface-900 border-2 border-accent-500/50 flex items-center justify-center">
                <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-accent-500" />
              </div>

              {/* Layer label */}
              <div className="mb-5">
                <span
                  className={`inline-block px-3 py-1 text-xs font-medium rounded-sm border ${layer.labelColor}`}
                >
                  {layer.label}
                </span>
                <p className="mt-1.5 text-sm text-slate-500">
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

// ─── Comparison Section ─────────────────────────────────────────────────────

export function ComparisonSection() {
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
          className="border border-white/[0.06] rounded-sm p-6 md:p-8 bg-white/[0.01]"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-sm bg-red-500/10 flex items-center justify-center">
              <X className="w-4 h-4 text-red-400" />
            </div>
            <h3 className="text-base font-semibold text-slate-300">
              {before.title}
            </h3>
          </div>
          <ul className="space-y-4">
            {before.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-500">
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
          className="border border-accent-500/20 rounded-sm p-6 md:p-8 bg-accent-500/[0.02]"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-sm bg-accent-500/15 flex items-center justify-center">
              <Check className="w-4 h-4 text-accent-400" />
            </div>
            <h3 className="text-base font-semibold text-white">
              {after.title}
            </h3>
          </div>
          <ul className="space-y-4">
            {after.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
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

// ─── CTA Section ────────────────────────────────────────────────────────────

export function CTASection() {
  return (
    <section
      id={SOLUTIONS_CONFIG.sectionIds.cta}
      className="relative py-24 md:py-32 px-6 bg-surface-950 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-accent-500)_0%,_transparent_65%)] opacity-[0.04]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative max-w-[800px] mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
          用AI重塑您的
          <span className="text-accent-400">建材供应链</span>
        </h2>
        <p className="mt-5 text-base md:text-lg text-slate-400 leading-relaxed max-w-[560px] mx-auto">
          预约专属演示，了解星筑科技如何通过AI技术赋能您的采购、物流与质量管理，驱动供应链全面升级。
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button variant="primary" size="lg" href="#">
            预约演示
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="secondary" size="lg" href="#">
            获取解决方案白皮书
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
