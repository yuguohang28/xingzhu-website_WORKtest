import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { slideInLeft, viewportOnce } from '@/shared/motion'
import { Button } from '@/shared/components'
import { ABOUT_STORY, HERO_CONTENT } from '../about.data'
import { geoFloat, cellReveal } from '../about.motion'

export default function HeroSection() {
  return (
    <section
      id="about-hero"
      className="relative min-h-[100dvh] flex items-center px-6 bg-surface-950 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            'linear-gradient(rgba(212,135,75,0.05) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(212,135,75,0.05) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '56px 56px',
        }}
      />

      {/* Geometric decorative elements */}
      <motion.div
        variants={geoFloat}
        initial="hidden"
        animate="visible"
        className="absolute right-[8%] top-[12%] w-72 h-72 border border-accent-500/10 rounded-full pointer-events-none"
      />
      <motion.div
        variants={geoFloat}
        initial="hidden"
        animate="visible"
        className="absolute right-[22%] bottom-[18%] w-40 h-40 bg-accent-500/[0.03] rotate-45 pointer-events-none"
      />
      <motion.div
        variants={geoFloat}
        initial="hidden"
        animate="visible"
        className="absolute right-[6%] top-[55%] w-5 h-5 bg-accent-500/30 rounded-full pointer-events-none"
      />
      <motion.div
        variants={geoFloat}
        initial="hidden"
        animate="visible"
        className="absolute right-[32%] top-[8%] w-3 h-3 bg-accent-500/40 rounded-sm rotate-45 pointer-events-none"
      />

      {/* Grid pattern cells (right side accent blocks) */}
      <motion.div
        className="absolute right-[5%] top-[50%] -translate-y-1/2 grid grid-cols-6 gap-2 pointer-events-none opacity-60 hidden lg:grid"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.03, delayChildren: 0.4 } },
        }}
        initial="hidden"
        animate="visible"
      >
        {[
          [0, 0, 0, 1, 1, 0],
          [0, 0, 1, 1, 1, 1],
          [0, 1, 1, 2, 2, 1],
          [0, 1, 2, 2, 2, 1],
          [0, 0, 1, 2, 1, 0],
          [0, 0, 0, 1, 0, 0],
        ].flatMap((row, ri) =>
          row.map((cell, ci) => {
            if (cell === 0) return null
            return (
              <motion.div
                key={`${ri}-${ci}`}
                variants={cellReveal}
                className={`w-8 h-8 rounded-sm ${
                  cell === 2
                    ? 'bg-accent-500/30 border border-accent-500/40'
                    : 'bg-accent-500/10 border border-accent-500/20'
                }`}
              />
            )
          })
        )}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-24 pb-16 lg:pt-0 lg:pb-0">
        {/* Left: Headline */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          animate="visible"
          viewport={viewportOnce}
        >
          <p className="text-accent-500 text-sm tracking-[0.2em] mb-6 font-medium">
            {HERO_CONTENT.eyebrow}
          </p>
          <h1 className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold tracking-tight text-white leading-[1.05]">
            {ABOUT_STORY.mission.split('').map((char, i) =>
              char === ' ' ? (
                <br key={i} />
              ) : (
                <span key={i} className="inline-block hover:text-accent-400 transition-colors duration-300">
                  {char}
                </span>
              )
            )}
          </h1>
          <p className="text-surface-400 text-base md:text-lg mt-8 leading-relaxed max-w-[520px]">
            {ABOUT_STORY.intro}
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Button variant="primary" size="lg" to="/solutions">
              {HERO_CONTENT.cta1}
            </Button>
            <Button variant="secondary" size="lg" to="/contact">
              {HERO_CONTENT.cta2}
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex gap-8 mt-14 pt-8 border-t border-white/[0.04]">
            <div>
              <span className="text-white text-2xl font-bold">{HERO_CONTENT.trustIndicator1.value}</span>
              <span className="text-surface-500 text-sm ml-1">{HERO_CONTENT.trustIndicator1.label}</span>
            </div>
            <div>
              <span className="text-white text-2xl font-bold">{HERO_CONTENT.trustIndicator2.value}</span>
              <span className="text-surface-500 text-sm ml-1">{HERO_CONTENT.trustIndicator2.label}</span>
            </div>
          </div>
        </motion.div>

        {/* Right: visual spacer on desktop */}
        <div className="hidden lg:block" />
      </div>
    </section>
  )
}
