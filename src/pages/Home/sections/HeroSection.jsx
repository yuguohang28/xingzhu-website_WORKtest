import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { viewportOnce } from '@/shared/motion'
import { Button } from '@/shared/components'
import { HERO_DATA, HERO_COMMAND_CENTER } from '../home.data'
import {
  heroContainerVariants,
  heroContentVariants,
  screenPanelVariants,
  siteMarkerVariants,
  routeLineVariants,
  floatPanelVariants,
  flowStepVariants,
} from '../home.motion'

/* ──────────────── building / warehouse / supplier shape helpers ──────────── */

function SiteShape({ type, color = '#64748b' }) {
  const sz = { building: [14, 10], warehouse: [20, 16], supplier: [11, 11] }[type] || [14, 10]
  const rx = type === 'supplier' ? sz[0] / 2 : 2.5
  return (
    <rect
      x={-(sz[0] / 2)} y={-(sz[1] / 2)}
      width={sz[0]} height={sz[1]} rx={rx}
      fill={color} opacity="0.85"
      style={{ filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.25))' }}
    />
  )
}

/* ══════════════════════════════════════════════════════════════════════════ */
/*  HeroSection                                                               */
/* ══════════════════════════════════════════════════════════════════════════ */

export default function HeroSection() {
  const { screenTitle, screenSub, sites, routes, panels, flow } = HERO_COMMAND_CENTER

  // SVG viewBox coordinate system for the map inside the central panel
  const VB = { w: 400, h: 280 }

  const nodePos = [
    { x: 80,  y: 65,  color: '#94a3b8' },  // 科技园项目
    { x: 300, y: 55,  color: '#94a3b8' },  // 商务区项目
    { x: 195, y: 150, color: '#d4874b' },  // 区域中心仓 — accent
    { x: 65,  y: 210, color: '#64748b' },  // 供应商集群
    { x: 305, y: 205, color: '#94a3b8' },  // 住宅区项目
  ]

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-50 via-surface-100 to-surface-50" />
      <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-l from-blue-600/[0.025] via-transparent to-transparent" />

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
        viewport={viewportOnce}
      >
        {/* ═════════════════════════════════════════════════════════════════ Left */}
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

        {/* ════════════════════════════════════════════════════════════════ Right */}
        <motion.div
          variants={heroContentVariants}
          className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[540px] select-none"
        >
          {/* ── 4 floating data panels ── */}
          {panels.map((p, i) => {
            const pos = {
              tl: 'top-1 left-0',
              tr: 'top-1 right-0',
              bl: 'bottom-[84px] left-0',
              br: 'bottom-[84px] right-0',
            }[p.pos]

            return (
              <motion.div
                key={p.label}
                className={`absolute z-30 ${pos} bg-white/80 backdrop-blur-md border border-surface-200/80 rounded-xl px-4 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)]`}
                variants={floatPanelVariants}
                custom={i}
                initial="hidden"
                animate="visible"
                style={{ willChange: 'transform' }}
              >
                <div className="text-[10px] text-surface-400 tracking-wide mb-0.5">
                  {p.label}
                </div>
                <div className="text-lg font-bold text-surface-800 tracking-tight leading-none">
                  {p.value}
                </div>
                <div className="text-[10px] text-surface-400 mt-1">{p.hint}</div>
              </motion.div>
            )
          })}

          {/* ── Central dark-glass command screen ── */}
          <motion.div
            className="absolute z-10 inset-x-0 top-10 bottom-[92px] rounded-2xl overflow-hidden
                       bg-[#1a1f2e] border border-white/[0.08]
                       shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_8px_32px_rgba(0,0,0,0.10),0_2px_8px_rgba(0,0,0,0.06)]"
            variants={screenPanelVariants}
            initial="hidden"
            animate="visible"
          >
            {/* ── title bar ── */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-[#141923] border-b border-white/[0.05] flex items-center px-4 gap-2 z-20">
              <span className="w-2.5 h-2.5 rounded-full bg-[#475569]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#475569]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#475569]" />
              <span className="ml-3 text-[11px] text-slate-500 tracking-wide font-medium">
                {screenTitle}
              </span>
              <span className="ml-auto text-[10px] text-slate-600">{screenSub}</span>
            </div>

            {/* ── blueprint grid ── */}
            <div
              className="absolute inset-0 top-10 opacity-[0.06]"
              style={{
                backgroundImage: [
                  'linear-gradient(rgba(148,163,184,0.4) 1px, transparent 1px)',
                  'linear-gradient(90deg, rgba(148,163,184,0.4) 1px, transparent 1px)',
                ].join(', '),
                backgroundSize: '28px 28px',
              }}
            />

            {/* ── SVG map layer ── */}
            <svg
              className="absolute inset-0 top-10 w-full h-[calc(100%-40px)]"
              viewBox={`0 0 ${VB.w} ${VB.h}`}
              fill="none"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              {/* subtle crosshair grid */}
              <defs>
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="0.7" fill="rgba(148,163,184,0.25)" />
                </pattern>
              </defs>
              <rect x="0" y="0" width={VB.w} height={VB.h} fill="url(#dots)" />

              {/* route lines — supplier to warehouse, warehouse to sites */}
              {routes.map((r, i) => {
                const fx = nodePos[r.from].x, fy = nodePos[r.from].y
                const tx = nodePos[r.to].x,   ty = nodePos[r.to].y
                return (
                  <g key={`route-${i}`}>
                    {/* static line */}
                    <motion.line
                      x1={fx} y1={fy} x2={tx} y2={ty}
                      stroke="rgba(148,163,184,0.5)"
                      strokeWidth="1" strokeDasharray="5 4"
                      variants={routeLineVariants}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                    />
                    {/* flowing dot */}
                    <circle r="2" fill="rgba(212,135,75,0.8)">
                      <animateMotion
                        dur="2.2s" repeatCount="indefinite"
                        path={`M${fx},${fy} L${tx},${ty}`}
                      />
                    </circle>
                  </g>
                )
              })}

              {/* site markers */}
              {sites.map((site, i) => (
                <motion.g
                  key={site.id}
                  transform={`translate(${nodePos[i].x},${nodePos[i].y})`}
                  variants={siteMarkerVariants}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                >
                  <SiteShape type={site.type} color={nodePos[i].color} />
                  {/* label */}
                  <text
                    x={site.type === 'warehouse' ? 16 : 12}
                    y={site.type === 'warehouse' ? 3 : 2.5}
                    fill="rgba(203,213,225,0.7)"
                    fontSize="8"
                    fontFamily="system-ui"
                    style={{ letterSpacing: '0.02em' }}
                  >
                    {site.label}
                  </text>
                </motion.g>
              ))}
            </svg>

            {/* ── scanning line ── */}
            <div
              className="absolute left-0 right-0 h-px z-15 pointer-events-none"
              style={{
                top: '40px',
                background: 'linear-gradient(90deg, transparent 0%, rgba(212,135,75,0.35) 20%, rgba(212,135,75,0.55) 50%, rgba(212,135,75,0.35) 80%, transparent 100%)',
                animation: 'scanDown 4s ease-in-out infinite',
              }}
            />
          </motion.div>

          {/* ── Bottom flow bar ── */}
          <div className="absolute bottom-2 left-6 right-6 z-30 flex items-center justify-center gap-0">
            {flow.map((step, i) => (
              <motion.div
                key={step}
                className="flex items-center gap-0"
                variants={flowStepVariants}
                custom={i}
                initial="hidden"
                animate="visible"
              >
                <span className={[
                  'px-3 py-1.5 rounded-md text-[11px] font-medium tracking-wide',
                  i === 0
                    ? 'bg-accent-500/12 text-accent-600 border border-accent-300/40'
                    : 'text-surface-500',
                ].join(' ')}>
                  {step}
                </span>
                {i < flow.length - 1 && (
                  <span className="text-surface-300 mx-0.5 text-[10px]">→</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* scanning line keyframes */}
      <style>{`
        @keyframes scanDown {
          0%, 100% { top: 40px; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { top: calc(100% - 52px); opacity: 0; }
        }
      `}</style>
    </section>
  )
}
