import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  Building2,
  ArrowUpRight,
} from 'lucide-react'
import { NAV_ITEMS, SITE_CONFIG } from '@/shared/data/navigation'
import { EASE_OUT_EXPO } from '@/shared/motion'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const navClasses = scrolled
    ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/[0.04]'
    : 'bg-transparent border-b border-transparent'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-500 ${navClasses}`}>
      <div className="max-w-[1400px] mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-sm bg-accent-500 flex items-center justify-center">
            <Building2 className="w-4.5 h-4.5 text-slate-950" strokeWidth={2} />
          </div>
          <span className="text-base font-semibold tracking-tight text-white">
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `px-4 py-2 text-sm rounded-sm transition-all duration-300 ${
                  isActive
                    ? 'text-accent-400 bg-accent-500/8'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 bg-accent-500 hover:bg-accent-400 text-slate-950 text-sm font-medium rounded-sm transition-all duration-300"
          >
            咨询顾问
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
            aria-label={isOpen ? '关闭菜单' : '打开菜单'}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
            className="lg:hidden absolute top-16 left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-white/[0.04]"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3, ease: EASE_OUT_EXPO }}
                >
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-sm text-base transition-all duration-300 ${
                        isActive
                          ? 'text-accent-400 bg-accent-500/8'
                          : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                      }`
                    }
                  >
                    {item.label}
                    <span className="ml-2 text-xs text-slate-600">{item.en}</span>
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                className="mt-4"
              >
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-accent-500 hover:bg-accent-400 text-slate-950 text-base font-medium rounded-sm transition-all"
                >
                  咨询顾问
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
