import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/shared/motion'

function Section({ children, className = '', dark = false, ...props }) {
  return (
    <section
      className={`py-24 md:py-32 px-6 ${dark ? 'bg-surface-100' : ''} ${className}`}
      {...props}
    >
      <div className="max-w-[1400px] mx-auto">
        {children}
      </div>
    </section>
  )
}

export default Section
