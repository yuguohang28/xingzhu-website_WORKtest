// === Xingzhu Technology About Page Motion Variants ===
// Page-specific animation extensions built on @/shared/motion presets

import { EASE_OUT_EXPO, EASE_OUT_QUINT } from '@/shared/motion'

// Timeline connector line: grows from zero height
export const timelineLine = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.4, ease: EASE_OUT_EXPO },
  },
}

// Timeline node: fades up with positional delay
export const timelineNode = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.1 + i * 0.15 },
  }),
}

// Hero pattern grid cell entrance
export const cellReveal = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: EASE_OUT_EXPO },
  },
}

// Stat entrance with staggered delay
export const statReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT_QUINT, delay: 0.1 + i * 0.12 },
  }),
}

// Geometric floating element entrance
export const geoFloat = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1, ease: EASE_OUT_EXPO, delay: 0.5 },
  },
}

// Value card scale entrance
export const valueCardReveal = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.1 + i * 0.12 },
  }),
}
