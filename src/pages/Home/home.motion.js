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

// Command Center: central screen panel entrance
export const screenPanelVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.15 },
  },
}

// Command Center: site marker entrance
export const siteMarkerVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_OUT_EXPO, delay: 0.5 + i * 0.08 },
  }),
}

// Command Center: route line draw
export const routeLineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1, ease: EASE_OUT_EXPO, delay: 0.55 + i * 0.1 },
  }),
}

// Command Center: floating panel drift
export const floatPanelVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.6 + i * 0.1 },
  }),
}

// Command Center: flow step entrance
export const flowStepVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: EASE_OUT_EXPO, delay: 0.8 + i * 0.08 },
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
