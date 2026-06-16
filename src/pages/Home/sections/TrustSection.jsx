import { motion } from 'framer-motion'
import { staggerContainer, viewportOnce } from '@/shared/motion'
import { Section } from '@/shared/components'
import { HOME_SECTION_IDS } from '../home.config'
import { TRUST_LOGOS, SECTION_HEADERS } from '../home.data'
import { trustLineVariants } from '../home.motion'

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

export default function TrustSection() {
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
            {SECTION_HEADERS.trust.label}
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
