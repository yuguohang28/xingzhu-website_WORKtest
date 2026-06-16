import { motion } from 'framer-motion'
import { ArrowRight, Cpu, FileText, Search, Users, TrendingUp, CheckCircle } from 'lucide-react'
import { viewportOnce } from '@/shared/motion'
import { Button } from '@/shared/components'
import { HERO_DATA, HERO_DASHBOARD } from '../home.data'
import {
  heroContainerVariants,
  heroContentVariants,
  corePulseVariants,
  coreRingVariants,
  dashNodeVariants,
  connectionLineVariants,
  metricCardVariants,
} from '../home.motion'

/* ------------------------------------------------------------------ */
/*  Icon lookup for dashboard nodes                                   */
/* ------------------------------------------------------------------ */
const NODE_ICON_MAP = { FileText, Search, Users, TrendingUp, CheckCircle }

const NODE_COLOR_MAP = {
  blue:   { dot: 'bg-blue-500', soft: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', line: 'rgba(59,130,246,0.35)' },
  emerald:{ dot: 'bg-emerald-500', soft: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600', line: 'rgba(16,185,129,0.35)' },
  purple: { dot: 'bg-purple-500', soft: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600', line: 'rgba(147,51,234,0.35)' },
  amber:  { dot: 'bg-amber-500', soft: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-600', line: 'rgba(217,119,6,0.35)' },
  cyan:   { dot: 'bg-cyan-500', soft: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-600', line: 'rgba(6,182,212,0.35)' },
}

/* ------------------------------------------------------------------ */
/*  HeroSection                                                        */
/* ------------------------------------------------------------------ */
export default function HeroSection() {
  const { aiCore, nodes, centerPos, metrics } = HERO_DASHBOARD

  // Compute SVG line coordinates from percentage positions.
  // viewBox = "0 0 1000 600"
  const cx = 500, cy = 228  // centerPos 50% / 38%
  const nodeCoords = [
    { x: 180, y: 156 },  // 需求录入   18% / 26%
    { x: 500, y: 48  },  // 智能询价   50% / 8%
    { x: 820, y: 156 },  // 供应商匹配 82% / 26%
    { x: 220, y: 360 },  // 价格分析   22% / 60%
    { x: 780, y: 360 },  // 履约追踪   78% / 60%
  ]

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-50 via-surface-100 to-surface-50" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/[0.03] to-transparent" />

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
        viewport={viewportOnce}
      >
        {/* ================================================================= */}
        {/*  Left: Content  (unchanged)                                       */}
        {/* ================================================================= */}
        <div className="flex flex-col gap-8 pt-20 lg:pt-0">
          <motion.div variants={heroContentVariants} className="flex flex-col gap-4">
            <h1 className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold tracking-tight text-surface-800 leading-[1.1]">
              {HERO_DATA.headlineLine1}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-emerald-500">
                {HERO_DATA.headlineLine2}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-surface-600 max-w-[40ch] leading-relaxed">
              {HERO_DATA.subtext}
            </p>
          </motion.div>

          <motion.div variants={heroContentVariants} className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg" to={HERO_DATA.primaryCta.to}>
              {HERO_DATA.primaryCta.text}
            </Button>
            <Button variant="outline" size="lg" to={HERO_DATA.secondaryCta.to}>
              {HERO_DATA.secondaryCta.text}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        {/* ================================================================= */}
        {/*  Right: AI Supply Chain Dashboard                                 */}
        {/* ================================================================= */}
        <motion.div
          variants={heroContentVariants}
          className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[520px] rounded-2xl border border-surface-200 bg-white/60 overflow-hidden select-none"
        >
          {/* ---------- subtle grid ---------- */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: [
                'linear-gradient(rgba(59,130,246,0.12) 1px, transparent 1px)',
                'linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)',
              ].join(', '),
              backgroundSize: '44px 44px',
            }}
          />

          {/* ---------- SVG connection lines + flow dots ---------- */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1000 600"
            fill="none"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid meet"
          >
            {nodeCoords.map((nc, i) => (
              <g key={`conn-${i}`}>
                {/* static line */}
                <motion.line
                  x1={cx} y1={cy} x2={nc.x} y2={nc.y}
                  stroke={NODE_COLOR_MAP[nodes[i].color].line}
                  strokeWidth="1.2"
                  variants={connectionLineVariants}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                />
                {/* flowing dash line (looping offset) */}
                <line
                  x1={cx} y1={cy} x2={nc.x} y2={nc.y}
                  stroke={NODE_COLOR_MAP[nodes[i].color].line}
                  strokeWidth="2"
                  strokeDasharray="8 120"
                  opacity="0.6"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0" to="-256"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </line>
              </g>
            ))}
          </svg>

          {/* ---------- AI Core (center) ---------- */}
          <motion.div
            className="absolute z-20 flex flex-col items-center gap-1.5"
            style={{ left: centerPos.x, top: centerPos.y, transform: 'translate(-50%, -50%)' }}
            variants={corePulseVariants}
            initial="hidden"
            animate="visible"
          >
            {/* pulse ring */}
            <motion.div
              className="absolute w-[72px] h-[72px] rounded-full border border-accent-300/50"
              variants={coreRingVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.div
              className="absolute w-[88px] h-[88px] rounded-full border border-accent-200/40"
              variants={coreRingVariants}
              initial="hidden"
              animate="visible"
            />
            {/* icon wrapper */}
            <div className="relative w-14 h-14 rounded-full bg-accent-500 flex items-center justify-center shadow-sm">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs font-semibold text-surface-700 tracking-wide">
              {aiCore.label}
            </span>
          </motion.div>

          {/* ---------- 5 business nodes ---------- */}
          {nodes.map((node, i) => {
            const Icon = NODE_ICON_MAP[node.icon]
            const palette = NODE_COLOR_MAP[node.color]
            return (
              <motion.div
                key={node.id}
                className={`absolute z-10 flex items-center gap-2 bg-white/90 backdrop-blur-sm border ${palette.border} rounded-lg px-3 py-2 shadow-sm`}
                style={{ left: node.x, top: node.y, transform: 'translate(-50%, -50%)' }}
                variants={dashNodeVariants}
                custom={i}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.04, boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}
              >
                <div className={`w-6 h-6 rounded-md ${palette.soft} flex items-center justify-center`}>
                  <Icon className={`w-3.5 h-3.5 ${palette.text}`} />
                </div>
                <span className="text-xs font-medium text-surface-700 whitespace-nowrap">
                  {node.label}
                </span>
              </motion.div>
            )
          })}

          {/* ---------- 3 metric cards (bottom) ---------- */}
          <div className="absolute bottom-3 left-3 right-3 z-10 flex gap-2.5">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                className="flex-1 bg-white/85 backdrop-blur-sm border border-surface-200 rounded-lg px-3 py-2.5 text-center"
                variants={metricCardVariants}
                custom={i}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -2, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-base font-bold text-surface-800 tracking-tight">
                  {m.value}
                </div>
                <div className="text-[10px] text-surface-500 mt-0.5 leading-tight">
                  {m.label}
                </div>
                <div className="text-[9px] text-accent-500 mt-0.5">
                  {m.hint}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
