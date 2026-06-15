// === Xingzhu Technology - Insights Page Motion Variants ===
import { EASE_OUT_EXPO, SPRING_SMOOTH } from '@/shared/motion'

// Card hover: subtle scale + border highlight with spring physics
export const cardHover = {
  rest: {
    scale: 1,
    borderColor: 'rgba(255, 255, 255, 0.04)',
    transition: { duration: 0.4, ease: EASE_OUT_EXPO },
  },
  hover: {
    scale: 1.02,
    borderColor: 'rgba(212, 135, 75, 0.3)',
    transition: { type: 'spring', stiffness: 200, damping: 18, mass: 0.8 },
  },
}

// Larger card variant with more pronounced hover
export const cardHoverLarge = {
  rest: {
    scale: 1,
    borderColor: 'rgba(255, 255, 255, 0.04)',
    transition: { duration: 0.4, ease: EASE_OUT_EXPO },
  },
  hover: {
    scale: 1.015,
    borderColor: 'rgba(212, 135, 75, 0.35)',
    y: -4,
    transition: { type: 'spring', stiffness: 180, damping: 16, mass: 0.9 },
  },
}

// Stagger entrance for article grid
export const articleStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
}

// Entrance for each article card
export const articleCardEntrance = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
}

// Featured card entrances (split by size)
export const featuredLargeEntrance = {
  hidden: { opacity: 0, x: -20, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
}

export const featuredSmallEntrance = {
  hidden: { opacity: 0, x: 20, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
}

// Filter pill active/rest variants
export const pillVariants = {
  rest: {
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    color: '#94a3b8',
  },
  hover: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    color: '#ffffff',
  },
  active: {
    backgroundColor: 'rgba(212, 135, 75, 1)',
    color: '#020617',
  },
}

// Newsletter section entrance
export const newsletterEntrance = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
}

// Badge entrance (staggered)
export const badgeEntrance = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ...SPRING_SMOOTH, delay: 0.2 },
  },
}
