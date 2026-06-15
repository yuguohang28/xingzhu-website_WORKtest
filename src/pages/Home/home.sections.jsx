import { motion } from 'framer-motion'
import { ShoppingCart, Eye, Search, Truck, ArrowRight } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOnce } from '@/shared/motion'
import { Section, SectionHeader, Card, Button } from '@/shared/components'

import {
  HOME_SECTION_IDS,
  HERO_VISUAL_NODES,
  ANIMATION_DELAYS,
} from './home.config'
import {
  HERO_DATA,
  CAPABILITY_CARDS,
  STATS_DATA,
  TRUST_LOGOS,
  CTA_DATA,
} from './home.data'
import {
  heroContainerVariants,
  heroContentVariants,
  heroVisualNodeVariants,
  statItemVariants,
  trustLineVariants,
  ctaContentVariants,
} from './home.motion'

const ICON_MAP = {
  ShoppingCart,
  Eye,
  Search,
  Truck,
}

const ACCENT_CLASSES = {
  blue: {
    icon: 'text-blue-400',
    border: 'border-blue-500/20',
    pill: 'bg-blue-500/10 text-blue-300',
  },
  emerald: {
    icon: 'text-emerald-400',
    border: 'border-emerald-500/20',
    pill: 'bg-emerald-500/10 text-emerald-300',
  },
  purple: {
    icon: 'text-purple-400',
    border: 'border-purple-500/20',
    pill: 'bg-purple-500/10 text-purple-300',
  },
  amber: {
    icon: 'text-amber-400',
    border: 'border-amber-500/20',
    pill: 'bg-amber-500/10 text-amber-300',
  },
}

const PARTNER_MONOGRAMS = [
  // 中建集团 - stacked rectangles (building form)
  {
    paths: [
      { type: 'rect', attrs: { x: 10, y: 8, width: 12, height: 44, rx: 2 }, cls: 'fill-blue-400/60' },
      { type: 'rect', attrs: { x: 26, y: 18, width: 12, height: 34, rx: 2 }, cls: 'fill-blue-400/40' },
      { type: 'rect', attrs: { x: 42, y: 28, width: 12, height: 24, rx: 2 }, cls: 'fill-blue-400/30' },
    ],
  },
  // 万科地产 - nested chevron V shape
  {
    paths: [
      { type: 'path', attrs: { d: 'M6 46 L30 10 L54 46', strokeWidth: 3, strokeLinecap: 'round', strokeLinejoin: 'round' }, cls: 'stroke-emerald-400/60', fill: 'none' },
      { type: 'path', attrs: { d: 'M18 46 L30 22 L42 46', strokeWidth: 2.5, strokeLinecap: 'round', strokeLinejoin: 'round' }, cls: 'stroke-emerald-400/40', fill: 'none' },
    ],
  },
  // 碧桂园 - concentric circle with arc
  {
    paths: [
      { type: 'circle', attrs: { cx: 30, cy: 30, r: 20, strokeWidth: 3 }, cls: 'stroke-purple-400/60', fill: 'none' },
      { type: 'path', attrs: { d: 'M30 10 Q50 30 30 50', strokeWidth: 2.5, strokeLinecap: 'round' }, cls: 'stroke-purple-400/40', fill: 'none' },
    ],
  },
  // 中国中铁 - horizontal bars with vertical connector (rail track)
  {
    paths: [
      { type: 'line', attrs: { x1: 10, y1: 12, x2: 50, y2: 12, strokeWidth: 3, strokeLinecap: 'round' }, cls: 'stroke-amber-400/60' },
      { type: 'line', attrs: { x1: 10, y1: 26, x2: 50, y2: 26, strokeWidth: 3, strokeLinecap: 'round' }, cls: 'stroke-amber-400/40' },
      { type: 'line', attrs: { x1: 10, y1: 40, x2: 50, y2: 40, strokeWidth: 3, strokeLinecap: 'round' }, cls: 'stroke-amber-400/30' },
      { type: 'line', attrs: { x1: 30, y1: 40, x2: 30, y2: 55, strokeWidth: 2.5, strokeLinecap: 'round' }, cls: 'stroke-amber-400/30' },
    ],
  },
  // 华润置地 - H block form
  {
    paths: [
      { type: 'rect', attrs: { x: 8, y: 8, width: 8, height: 44, rx: 2 }, cls: 'fill-rose-400/60' },
      { type: 'rect', attrs: { x: 44, y: 8, width: 8, height: 44, rx: 2 }, cls: 'fill-rose-400/60' },
      { type: 'rect', attrs: { x: 8, y: 24, width: 44, height: 8, rx: 2 }, cls: 'fill-rose-400/50' },
    ],
  },
  // 保利发展 - nested shield
  {
    paths: [
      { type: 'path', attrs: { d: 'M30 6 L50 16 V34 Q50 46 30 54 Q10 46 10 34 V16 Z', strokeWidth: 3, strokeLinejoin: 'round' }, cls: 'stroke-cyan-400/60', fill: 'none' },
      { type: 'path', attrs: { d: 'M30 16 L42 22 V34 Q42 42 30 48 Q18 42 18 34 V22 Z', strokeWidth: 2.5, strokeLinejoin: 'round' }, cls: 'stroke-cyan-400/40', fill: 'none' },
    ],
  },
]

function renderSvgElement(element, i) {
  const { type, attrs, cls } = element
  const className = cls || ''
  switch (type) {
    case 'rect':
      return <rect key={i} {...attrs} className={className} />
    case 'circle':
      return <circle key={i} {...attrs} className={className} />
    case 'line':
      return <line key={i} {...attrs} className={className} />
    case 'path':
      return <path key={i} {...attrs} className={className} fill={element.fill} />
    default:
      return null
  }
}

function PartnerMonogram({ index }) {
  const elements = PARTNER_MONOGRAMS[index % PARTNER_MONOGRAMS.length]
  return (
    <svg
      viewBox="0 0 60 60"
      className="w-12 h-12"
      fill="none"
      aria-hidden="true"
    >
      {elements.paths.map((el, i) => renderSvgElement(el, i))}
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  HeroSection                                                        */
/* ------------------------------------------------------------------ */
export function HeroSection() {
  return (
    <section
      id={HOME_SECTION_IDS.hero}
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/5 to-transparent" />

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
        viewport={viewportOnce}
      >
        {/* ---------- Left: Content ---------- */}
        <div className="flex flex-col gap-8 pt-20 lg:pt-0">
          <motion.div variants={heroContentVariants} className="flex flex-col gap-4">
            <h1 className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold tracking-tight text-white leading-[1.1]">
              {HERO_DATA.headlineLine1}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-emerald-300">
                {HERO_DATA.headlineLine2}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-[40ch] leading-relaxed">
              {HERO_DATA.subtext}
            </p>
          </motion.div>

          <motion.div variants={heroContentVariants} className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg" href={HERO_DATA.primaryCta.href}>
              {HERO_DATA.primaryCta.text}
            </Button>
            <Button variant="outline" size="lg" href={HERO_DATA.secondaryCta.href}>
              {HERO_DATA.secondaryCta.text}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        {/* ---------- Right: Abstract Visual ---------- */}
        <motion.div
          variants={heroContentVariants}
          className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden border border-white/5 bg-slate-900/50"
        >
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: [
                'linear-gradient(rgba(59,130,246,0.15) 1px, transparent 1px)',
                'linear-gradient(90deg, rgba(59,130,246,0.15) 1px, transparent 1px)',
              ].join(', '),
              backgroundSize: '48px 48px',
            }}
          />

          {/* Glowing orbs */}
          <div className="absolute top-[40%] left-[45%] w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="absolute top-[25%] left-[35%] w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[15%] right-[20%] w-48 h-48 bg-emerald-500/8 rounded-full blur-[80px]" />

          {/* Geometric nodes */}
          {HERO_VISUAL_NODES.map((node, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={heroVisualNodeVariants}
              className={`absolute ${node.size} ${node.shape} ${node.border} ${node.rotate || ''}`}
              style={{ top: node.y, left: node.x }}
            />
          ))}

          {/* Connection lines (SVG) */}
          <svg
            className="absolute inset-0 w-full h-full opacity-25"
            viewBox="0 0 600 500"
            fill="none"
            aria-hidden="true"
          >
            <line
              x1="120" y1="75" x2="300" y2="200"
              stroke="rgba(96,165,250,0.35)" strokeWidth="1.5" strokeDasharray="6 4"
            />
            <line
              x1="300" y1="200" x2="430" y2="325"
              stroke="rgba(96,165,250,0.25)" strokeWidth="1.5" strokeDasharray="6 4"
            />
            <line
              x1="120" y1="75" x2="200" y2="380"
              stroke="rgba(52,211,153,0.2)" strokeWidth="1.5" strokeDasharray="6 4"
            />
            <line
              x1="390" y1="100" x2="330" y2="280"
              stroke="rgba(168,85,247,0.2)" strokeWidth="1.5" strokeDasharray="6 4"
            />
            <circle cx="120" cy="75" r="4" fill="rgba(96,165,250,0.6)" />
            <circle cx="300" cy="200" r="3" fill="rgba(96,165,250,0.5)" />
            <circle cx="430" cy="325" r="4" fill="rgba(52,211,153,0.5)" />
            <circle cx="200" cy="380" r="3" fill="rgba(52,211,153,0.4)" />
            <circle cx="390" cy="100" r="3" fill="rgba(168,85,247,0.4)" />
            <circle cx="330" cy="280" r="3" fill="rgba(168,85,247,0.35)" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  TrustSection                                                       */
/* ------------------------------------------------------------------ */
export function TrustSection() {
  return (
    <Section id={HOME_SECTION_IDS.trust} className="relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <motion.div
          className="flex flex-col items-center gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p
            variants={trustLineVariants}
            className="text-xs font-semibold text-slate-500 tracking-[0.15em]"
          >
            领先企业信赖之选
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-x-10 gap-y-8 md:gap-x-16"
            variants={staggerContainer}
          >
            {TRUST_LOGOS.map((partner, index) => (
              <motion.div
                key={partner.id}
                variants={trustLineVariants}
                className="flex flex-col items-center gap-3"
              >
                <div className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300">
                  <PartnerMonogram index={index} />
                </div>
                <span className="text-xs text-slate-500 font-medium whitespace-nowrap">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}

/* ------------------------------------------------------------------ */
/*  CapabilitiesSection                                                */
/* ------------------------------------------------------------------ */
export function CapabilitiesSection() {
  return (
    <Section id={HOME_SECTION_IDS.capabilities} className="relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">
        <SectionHeader
          title="核心能力"
          subtitle="AI 技术驱动建材供应链全面升级"
          className="mb-16"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {CAPABILITY_CARDS.map((card) => {
            const Icon = ICON_MAP[card.icon]
            const isTall = card.layout === 'tall'
            const isWide = card.layout === 'wide'
            const accent = ACCENT_CLASSES[card.accent]

            return (
              <motion.div
                key={card.id}
                variants={fadeUp}
                className={`
                  group relative overflow-hidden rounded-2xl border border-white/[0.06]
                  ${isTall ? 'md:col-span-2 md:row-span-2' : ''}
                  ${isWide ? 'md:col-span-3' : ''}
                  ${!isTall && !isWide ? 'md:col-span-1' : ''}
                `}
              >
                <div
                  className="relative h-full p-8 md:p-10 flex flex-col"
                >
                  {/* Gradient background */}
                  <div
                    className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    style={{ background: card.gradient }}
                  />
                  <div className="absolute inset-0 bg-slate-900/40" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col gap-4 flex-1">
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] ${isTall ? 'mb-4' : 'mb-2'}`}
                    >
                      <Icon className={`w-6 h-6 ${accent.icon}`} />
                    </div>
                    <h3
                      className={`font-bold text-white ${isTall ? 'text-2xl' : 'text-xl'}`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`text-slate-400 leading-relaxed ${isTall ? 'text-lg max-w-xl' : 'text-base'}`}
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div
                    className="absolute top-0 right-0 w-28 h-28 rounded-bl-[40px]"
                    style={{ background: card.cornerGradient }}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </Section>
  )
}

/* ------------------------------------------------------------------ */
/*  StatsSection                                                       */
/* ------------------------------------------------------------------ */
export function StatsSection() {
  return (
    <Section
      id={HOME_SECTION_IDS.stats}
      className="relative border-y border-white/[0.06]"
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
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-slate-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}

/* ------------------------------------------------------------------ */
/*  CTASection                                                         */
/* ------------------------------------------------------------------ */
export function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">
        <motion.div
          className="flex flex-col items-center text-center gap-8 max-w-2xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h2
            variants={ctaContentVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            {CTA_DATA.title}
          </motion.h2>
          <motion.p
            variants={ctaContentVariants}
            className="text-lg text-slate-400 leading-relaxed max-w-lg"
          >
            {CTA_DATA.description}
          </motion.p>
          <motion.div variants={ctaContentVariants}>
            <Button
              variant="primary"
              size="lg"
              href={CTA_DATA.buttonHref}
            >
              {CTA_DATA.buttonText}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
