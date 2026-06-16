import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { viewportOnce } from '@/shared/motion'
import { Button } from '@/shared/components'
import { HERO_VISUAL_NODES } from '../home.config'
import { HERO_DATA } from '../home.data'
import {
  heroContainerVariants,
  heroContentVariants,
  heroVisualNodeVariants,
} from '../home.motion'

export default function HeroSection() {
  return (
    <section
      id="hero"
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
