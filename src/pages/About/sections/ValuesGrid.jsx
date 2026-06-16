import { motion } from 'framer-motion'
import { Cpu, Shield, Leaf } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOnce } from '@/shared/motion'
import { Card } from '@/shared/components'
import { VALUES_DATA, SECTION_CONTENT } from '../about.data'
import { valueCardReveal } from '../about.motion'

const iconMap = { Cpu, Shield, Leaf }

export default function ValuesGrid() {
  return (
    <section id="about-values" className="!bg-surface-100">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-surface-800 leading-[1.1]">
          {SECTION_CONTENT.values.title}
        </h2>
        <p className="mt-5 text-surface-500 text-base leading-relaxed max-w-[65ch]">
          {SECTION_CONTENT.values.description}
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
                <div className="w-12 h-12 rounded-sm bg-accent-100 border border-accent-300/60 flex items-center justify-center mb-6 group-hover:bg-accent-500/20 transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-accent-400" />
                </div>
                <h3
                  className={`text-surface-800 font-semibold leading-tight ${
                    value.large ? 'text-2xl' : 'text-xl'
                  }`}
                >
                  {value.title}
                </h3>
                <p className="text-surface-500 text-sm md:text-base leading-relaxed mt-4">
                  {value.description}
                </p>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
