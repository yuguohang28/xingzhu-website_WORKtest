import { motion } from 'framer-motion'
import { Sparkles, HardHat, ArrowRight } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOnce } from '@/shared/motion'
import { Section, Card, Button } from '@/shared/components'
import { TEAM_ETHOS, TEAM_AVATARS, CAREERS_DATA, SECTION_CONTENT } from '../about.data'

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
        className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center mb-3 shadow-lg shadow-surface-900/8`}
      >
        <span className="text-surface-800 font-bold text-lg md:text-xl tracking-wide">
          {initials}
        </span>
      </div>
      <span className="text-surface-800 text-sm font-medium">{name}</span>
      <span className="text-surface-400 text-xs mt-0.5">{role}</span>
    </motion.div>
  )
}

export default function TeamSection() {
  return (
    <Section id="about-team" className="!bg-surface-100">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-surface-800 leading-[1.1]">
          {SECTION_CONTENT.team.title}
        </h2>
        <p className="mt-5 text-surface-500 text-base leading-relaxed max-w-[65ch]">
          {SECTION_CONTENT.team.description}
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
            <h3 className="text-surface-800 text-2xl md:text-3xl font-semibold leading-tight">
              {TEAM_ETHOS.tagline}
            </h3>
            <p className="text-surface-500 text-sm md:text-base leading-relaxed mt-5">
              {TEAM_ETHOS.description}
            </p>
          </div>

          {/* Bottom section with careers CTA */}
          <div className="mt-8 pt-8 border-t border-surface-200">
            <div className="flex items-start gap-4">
              <HardHat className="w-5 h-5 text-accent-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-surface-800 text-sm font-medium">加入我们</p>
                <p className="text-surface-500 text-sm mt-1 leading-relaxed">
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
