import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/shared/motion'
import { Section, Card } from '@/shared/components'
import { TIMELINE_EVENTS, SECTION_CONTENT } from '../about.data'
import { timelineLine, timelineNode } from '../about.motion'

export default function StoryTimeline() {
  return (
    <Section id="about-story" dark>
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-white leading-[1.1]">
          {SECTION_CONTENT.story.title}
        </h2>
        <p className="mt-5 text-surface-400 text-base leading-relaxed max-w-[65ch]">
          {SECTION_CONTENT.story.description}
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
