import { motion } from 'framer-motion'
import { ShoppingCart, Eye, Search, Truck } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOnce } from '@/shared/motion'
import { Section, SectionHeader } from '@/shared/components'
import { HOME_SECTION_IDS } from '../home.config'
import { CAPABILITY_CARDS, SECTION_HEADERS } from '../home.data'

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

export default function CapabilitiesSection() {
  return (
    <Section id={HOME_SECTION_IDS.capabilities} className="relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">
        <SectionHeader
          title={SECTION_HEADERS.capabilities.title}
          subtitle={SECTION_HEADERS.capabilities.subtitle}
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
