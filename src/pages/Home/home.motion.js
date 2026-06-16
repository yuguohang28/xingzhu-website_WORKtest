import { SPRING_SMOOTH, EASE_OUT_EXPO } from '@/shared/motion'

export const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

export const heroContentVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...SPRING_SMOOTH },
  },
}

export const heroVisualNodeVariants = {
  hidden: { opacity: 0, scale: 0.6, rotate: -15 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      ...SPRING_SMOOTH,
      delay: 0.3 + i * 0.12,
    },
  }),
}

export const statItemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: EASE_OUT_EXPO,
      delay: i * 0.12,
    },
  }),
}

export const trustLineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...SPRING_SMOOTH },
  },
}

// Dashboard: AI core breathing pulse
export const corePulseVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.2 },
  },
}
export const coreRingVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: [1, 1.08, 1],
    opacity: [0.5, 0.25, 0.5],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  },
}

// Dashboard: business node entrance
export const dashNodeVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_OUT_EXPO, delay: 0.35 + i * 0.08 },
  }),
}

// Dashboard: connection line draw
export const connectionLineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.5 + i * 0.06 },
  }),
}

// Dashboard: flow dot along a line
export const flowDotVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: [0, 1, 1, 0],
    transition: { duration: 1.8, delay: 0.9 + i * 0.15, repeat: Infinity, ease: 'linear' },
  }),
}

// Dashboard: metric card entrance
export const metricCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT_EXPO, delay: 0.7 + i * 0.1 },
  }),
}

export const ctaContentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE_OUT_EXPO,
    },
  },
}
