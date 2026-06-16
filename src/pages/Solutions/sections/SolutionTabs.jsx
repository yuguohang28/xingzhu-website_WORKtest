// === Solution Tabs ===

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { solutionCategories } from '../solutions.data'
import { TAB_CONFIG } from '../solutions.config'
import DynamicIcon from './DynamicIcon'

export default function SolutionTabs({ activeTab, onTabChange }) {
  const [mobileOpen, setMobileOpen] = useState(null)

  const handleMobileClick = (id) => {
    if (mobileOpen === id) {
      setMobileOpen(null)
    } else {
      setMobileOpen(id)
      onTabChange(id)
    }
  }

  return (
    <div className="mt-10">
      {/* Desktop: horizontal tabs */}
      <div className="hidden md:flex border-b border-surface-200">
        {TAB_CONFIG.items.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium transition-all duration-300 border-b-2 -mb-px ${
                isActive
                  ? 'border-accent-500 text-surface-800'
                  : 'border-transparent text-surface-400 hover:text-surface-600'
              }`}
            >
              <DynamicIcon
                name={tab.icon}
                className={`w-4 h-4 ${isActive ? 'text-accent-400' : 'text-surface-400'}`}
              />
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Mobile: vertical accordion */}
      <div className="md:hidden space-y-2">
        {solutionCategories.map((cat) => {
          const isOpen = mobileOpen === cat.id
          return (
            <div
              key={cat.id}
              className="border border-surface-200 rounded-sm overflow-hidden"
            >
              <button
                onClick={() => handleMobileClick(cat.id)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <div className="flex items-center gap-3">
                  <DynamicIcon
                    name={cat.icon}
                    className="w-4 h-4 text-accent-400"
                  />
                  <span className="text-sm font-medium text-surface-800">
                    {cat.label}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-surface-400 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 space-y-3 border-t border-surface-200 pt-3">
                      <p className="text-xs text-surface-400 mb-3">
                        {cat.description}
                      </p>
                      {cat.features.map((feat) => (
                        <div
                          key={feat.title}
                          className="flex items-start gap-3 p-3 rounded-sm bg-surface-100"
                        >
                          <div className="shrink-0 w-7 h-7 rounded-sm bg-accent-100 flex items-center justify-center">
                            <DynamicIcon
                              name={feat.icon}
                              className="w-3.5 h-3.5 text-accent-400"
                            />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-surface-800">
                              {feat.title}
                            </h4>
                            <p className="text-xs text-surface-400 mt-0.5 leading-relaxed">
                              {feat.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}
