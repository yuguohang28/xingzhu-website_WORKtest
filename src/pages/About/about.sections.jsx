// === Xingzhu Technology About Page Sections ===

import { motion } from 'framer-motion'
import { Cpu, Shield, Leaf, ArrowRight, Sparkles, HardHat } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOnce, slideInLeft } from '@/shared/motion'
import { Section, Card, Button } from '@/shared/components'
import {
  timelineLine,
  timelineNode,
  cellReveal,
  statReveal,
  geoFloat,
  valueCardReveal,
} from './about.motion'
import {
  ABOUT_STORY,
  TIMELINE_EVENTS,
  VALUES_DATA,
  STATS_DATA,
  TEAM_ETHOS,
  TEAM_AVATARS,
  CAREERS_DATA,
} from './about.data'

// ─── Hero Section ───────────────────────────────────────────────────────────

export function HeroSection() {
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
            AI 重塑建材供应链
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
              探索解决方案
            </Button>
            <Button variant="secondary" size="lg" to="/contact">
              联系我们
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex gap-8 mt-14 pt-8 border-t border-white/[0.04]">
            <div>
              <span className="text-white text-2xl font-bold">7</span>
              <span className="text-surface-500 text-sm ml-1">年行业深耕</span>
            </div>
            <div>
              <span className="text-white text-2xl font-bold">98.7%</span>
              <span className="text-surface-500 text-sm ml-1">AI质检准确率</span>
            </div>
          </div>
        </motion.div>

        {/* Right: visual spacer on desktop */}
        <div className="hidden lg:block" />
      </div>
    </section>
  )
}

// ─── Story Timeline Section ─────────────────────────────────────────────────

export function StoryTimeline() {
  return (
    <Section id="about-story" dark>
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-white leading-[1.1]">
          发展历程
        </h2>
        <p className="mt-5 text-surface-400 text-base leading-relaxed max-w-[65ch]">
          从2018年创始至今，星筑科技一步一个脚印，用技术重新定义建材供应链的标准。
        </p>
      </motion.div>

      {/* Mobile: horizontal scroll timeline */}
      <div className="md:hidden mt-12 -mx-6 px-6 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="flex gap-4 pb-4" style={{ minWidth: `${TIMELINE_EVENTS.length * 296}px` }}>
          {TIMELINE_EVENTS.map((event, i) => (
            <motion.div
              key={i}
              className="snap-start w-[280px] shrink-0"
              variants={timelineNode}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={viewportOnce}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-accent-500 text-lg font-mono font-bold">{event.year}</span>
                <div className="h-px flex-1 bg-accent-500/20" />
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-accent-500 mb-4" />
              <Card className="!p-5">
                <h3 className="text-white font-semibold text-base">{event.title}</h3>
                <p className="text-surface-400 text-sm mt-2 leading-relaxed">
                  {event.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop: vertical timeline */}
      <div className="hidden md:block relative mt-16">
        {/* Center line */}
        <motion.div
          className="absolute left-1/2 top-0 bottom-0 w-px bg-accent-500/20 -translate-x-1/2 origin-top"
          variants={timelineLine}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        />

        {TIMELINE_EVENTS.map((event, i) => (
          <motion.div
            key={i}
            className={`flex items-start gap-8 mb-16 last:mb-0 ${
              i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
            variants={timelineNode}
            initial="hidden"
            whileInView="visible"
            custom={i}
            viewport={viewportOnce}
          >
            {/* Content */}
            <div className="w-[calc(50%-36px)]">
              <Card className="!p-6 relative">
                <span className="text-accent-500 text-sm font-mono font-bold">{event.year}</span>
                <h3 className="text-white text-xl font-semibold mt-2">{event.title}</h3>
                <p className="text-surface-400 text-sm mt-3 leading-relaxed">
                  {event.description}
                </p>
              </Card>
            </div>

            {/* Center dot */}
            <div className="shrink-0 relative z-10">
              <div className="w-4 h-4 rounded-full bg-accent-500 border-[3px] border-surface-950" />
            </div>

            {/* Spacer */}
            <div className="w-[calc(50%-36px)]" />
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

// ─── Values Grid Section ────────────────────────────────────────────────────

export function ValuesGrid() {
  const iconMap = { Cpu, Shield, Leaf }

  return (
    <Section id="about-values" className="!bg-surface-900">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-white leading-[1.1]">
          我们的价值观
        </h2>
        <p className="mt-5 text-surface-400 text-base leading-relaxed max-w-[65ch]">
          三大核心理念驱动着星筑科技的每一次创新与决策。
        </p>
      </motion.div>

      <motion.div
        className="mt-12 grid md:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {VALUES_DATA.map((value, i) => {
          const IconComponent = iconMap[value.icon] || Cpu
          return (
            <motion.div
              key={i}
              variants={valueCardReveal}
              custom={i}
              className={`group ${
                value.large ? 'md:col-span-1 md:row-span-1' : 'md:col-span-1'
              }`}
            >
              <Card className={`!p-8 h-full ${value.large ? 'md:!p-10' : ''}`}>
                <div className="w-12 h-12 rounded-sm bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-6 group-hover:bg-accent-500/20 transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-accent-400" />
                </div>
                <h3
                  className={`text-white font-semibold leading-tight ${
                    value.large ? 'text-2xl' : 'text-xl'
                  }`}
                >
                  {value.title}
                </h3>
                <p className="text-surface-400 text-sm md:text-base leading-relaxed mt-4">
                  {value.description}
                </p>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}

// ─── Data Narrative Section ─────────────────────────────────────────────────

export function DataNarrative() {
  return (
    <Section id="about-stats" dark>
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-white leading-[1.1]">
          数据见证成长
        </h2>
        <p className="mt-5 text-surface-400 text-base leading-relaxed max-w-[65ch]">
          一组数字背后，是星筑科技对建材供应链持续深耕的承诺。
        </p>
      </motion.div>

      <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {STATS_DATA.map((stat, i) => (
          <motion.div
            key={i}
            className="text-center"
            variants={statReveal}
            initial="hidden"
            whileInView="visible"
            custom={i}
            viewport={viewportOnce}
          >
            <span className="block text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight gradient-accent bg-clip-text text-transparent">
              {stat.value}
            </span>
            <span className="block text-surface-400 text-sm md:text-base mt-3">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Decorative separator */}
      <div className="mt-16 h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />
    </Section>
  )
}

// ─── Team Cultures Section (Bento) ──────────────────────────────────────────

function AbstractAvatar({ initials, gradient, name, role, delay = 0 }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ ...fadeUp.visible.transition, delay }}
      className="flex flex-col items-center text-center"
    >
      {/* Geometric abstract avatar — monogram circle */}
      <div
        className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center mb-3 shadow-lg shadow-black/20`}
      >
        <span className="text-white font-bold text-lg md:text-xl tracking-wide">
          {initials}
        </span>
      </div>
      <span className="text-white text-sm font-medium">{name}</span>
      <span className="text-surface-500 text-xs mt-0.5">{role}</span>
    </motion.div>
  )
}

export function TeamSection() {
  return (
    <Section id="about-team" className="!bg-surface-900">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-white leading-[1.1]">
          团队与文化
        </h2>
        <p className="mt-5 text-surface-400 text-base leading-relaxed max-w-[65ch]">
          一支跨学科的精英团队，用技术与热情驱动建材供应链的智能化变革。
        </p>
      </motion.div>

      {/* Bento grid */}
      <motion.div
        className="mt-12 grid md:grid-cols-4 md:grid-rows-[auto_auto] gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {/* Panel 1: Team ethos (large) — spans 2 cols, 2 rows on desktop */}
        <Card className="!p-8 md:!p-10 md:col-span-2 md:row-span-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-accent-400" />
              <span className="text-accent-500 text-sm font-medium">团队理念</span>
            </div>
            <h3 className="text-white text-2xl md:text-3xl font-semibold leading-tight">
              {TEAM_ETHOS.tagline}
            </h3>
            <p className="text-surface-400 text-sm md:text-base leading-relaxed mt-5">
              {TEAM_ETHOS.description}
            </p>
          </div>

          {/* Bottom section with careers CTA */}
          <div className="mt-8 pt-8 border-t border-white/[0.04]">
            <div className="flex items-start gap-4">
              <HardHat className="w-5 h-5 text-accent-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-white text-sm font-medium">加入我们</p>
                <p className="text-surface-400 text-sm mt-1 leading-relaxed">
                  {CAREERS_DATA.description}
                </p>
                <Button variant="secondary" size="sm" className="mt-4" to="/contact">
                  {CAREERS_DATA.cta}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Panels 2-5: Team member avatars */}
        {TEAM_AVATARS.slice(0, 4).map((member, i) => (
          <Card key={i} className="!p-6 flex items-center justify-center" delay={0.2 + i * 0.1}>
            <AbstractAvatar {...member} delay={0.2 + i * 0.1} />
          </Card>
        ))}

        {/* Panel 6: Extra team members (bottom row, spans 2 cols) */}
        <Card className="!p-6 md:col-span-2 flex items-center justify-center gap-6 md:gap-10 flex-wrap">
          {TEAM_AVATARS.slice(4).map((member, i) => (
            <AbstractAvatar
              key={i}
              {...member}
              delay={0.6 + i * 0.1}
            />
          ))}
        </Card>
      </motion.div>
    </Section>
  )
}
