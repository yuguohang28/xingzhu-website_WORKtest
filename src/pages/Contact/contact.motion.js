// === Xingzhu Technology - Contact Page Motion Variants ===
// Page-specific animation variants for form, success state, and info panel.

import { EASE_OUT_EXPO, SPRING_SNAPPY } from '@/shared/motion'

// Form container slides in from left
export const formContainerVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
}

// Info panel slides in from right with slight delay
export const infoPanelVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.15 },
  },
}

// Staggered entrance for form fields
export const formFieldVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT_EXPO, delay: 0.1 + i * 0.06 },
  }),
}

// Success checkmark entrance
export const successCheckVariants = {
  hidden: { scale: 0, opacity: 0, rotate: -15 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: { ...SPRING_SNAPPY, delay: 0.2 },
  },
}

// Success message text entrance
export const successContentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.4 },
  },
}

// FAQ chevron rotation
export const faqChevronVariants = {
  collapsed: { rotate: 0 },
  expanded: { rotate: 180, transition: { duration: 0.3, ease: EASE_OUT_EXPO } },
}

// Contact method cards stagger
export const contactMethodVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT_EXPO, delay: 0.2 + i * 0.08 },
  }),
}

// Shimmer overlay for submit button loading state
export const shimmerVariants = {
  initial: { x: '-100%' },
  animate: {
    x: '100%',
    transition: {
      repeat: Infinity,
      duration: 1.2,
      ease: 'linear',
    },
  },
}
