// === Xingzhu Technology - Contact Page ===
// Main page component that assembles all sections.

import { motion } from 'framer-motion'
import { pageTransition } from '@/shared/motion'
import { HeroSection, ContactFormSection } from './contact.sections'

export default function Contact() {
  return (
    <motion.main
      className="min-h-[100dvh] bg-surface-950"
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
    >
      <HeroSection />
      <ContactFormSection />
    </motion.main>
  )
}
