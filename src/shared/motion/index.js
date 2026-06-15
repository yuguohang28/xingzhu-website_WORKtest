// === Xingzhu Technology - Shared Motion Configuration ===
// Every animation on the site uses these presets for visual consistency.
// Page modules import from here; they don't define their own easing curves.

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1]
export const EASE_OUT_QUINT = [0.22, 1, 0.36, 1]
export const EASE_IN_OUT = [0.76, 0, 0.24, 1]
export const SPRING_SMOOTH = { type: 'spring', stiffness: 120, damping: 20 }
export const SPRING_SNAPPY = { type: 'spring', stiffness: 200, damping: 24 }

// Fade-up entrance — the standard scroll-reveal for sections
export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
}

// Fade-in only — for elements that shouldn't move
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
}

// Stagger children container — wraps lists and grids
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

// Slide in from left — for split layouts
export const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
}

// Slide in from right
export const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
}

// Viewport trigger defaults — used with whileInView
export const viewportOnce = {
  once: true,
  amount: 0.2,
  margin: '-60px',
}

// Page transition — wraps route changes
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT_EXPO },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.3, ease: EASE_IN_OUT },
  },
}
