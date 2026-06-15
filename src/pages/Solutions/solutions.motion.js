// === 星筑科技 - Solutions Page Motion Variants ===

import { EASE_OUT_EXPO } from '@/shared/motion'

// Tab content fade + slide transition
export const tabContentVariants = {
  initial: { opacity: 0, x: 30 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE_OUT_EXPO },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.25, ease: EASE_OUT_EXPO },
  },
}

// Staggered entrance for feature cards
export const featureCardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE_OUT_EXPO,
      delay: 0.1 + i * 0.08,
    },
  }),
}

// Architecture item entrance
export const architectureItemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: EASE_OUT_EXPO,
      delay: 0.2 + i * 0.08,
    },
  }),
}
