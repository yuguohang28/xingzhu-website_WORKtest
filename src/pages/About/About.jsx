// === Xingzhu Technology About Page ===

import { motion } from 'framer-motion'
import { pageTransition } from '@/shared/motion'
import { HeroSection, StoryTimeline, ValuesGrid, DataNarrative, TeamSection } from './about.sections'

export default function About() {
  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
    >
      <HeroSection />
      <StoryTimeline />
      <ValuesGrid />
      <DataNarrative />
      <TeamSection />
    </motion.div>
  )
}
