import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/shared/motion'

function Card({ children, className = '', animate = true, delay = 0, ...props }) {
  const Comp = animate ? motion.div : 'div'
  const animProps = animate
    ? {
        variants: fadeUp,
        initial: 'hidden',
        whileInView: 'visible',
        viewport: viewportOnce,
        transition: { ...fadeUp.visible.transition, delay: delay * 0.08 },
      }
    : {}

  return (
    <Comp
      className={`bg-white/[0.02] border border-white/[0.04] rounded-sm p-6 hover:border-white/[0.08] transition-all duration-300 ${className}`}
      {...animProps}
      {...props}
    >
      {children}
    </Comp>
  )
}

export default Card
