// === 星筑科技 - Solutions Page ===

import { useState } from 'react'

import {
  HeroSection,
  SolutionTabs,
  FeatureDetail,
  ArchitectureSection,
  ComparisonSection,
  CTASection,
} from './solutions.sections'
import { solutionCategories } from './solutions.data'
import { TAB_CONFIG } from './solutions.config'

export default function Solutions() {
  const [activeTab, setActiveTab] = useState(TAB_CONFIG.defaultTab)

  const activeCategory = solutionCategories.find((c) => c.id === activeTab)

  return (
    <main className="bg-surface-950">
      <HeroSection />

      {/* Solutions Tabs + Feature Detail */}
      <section
        id="solutions-tabs"
        className="py-24 md:py-32 px-6 bg-surface-950"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-[720px]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-white leading-[1.1]">
              四大解决方案
            </h2>
            <p className="mt-5 text-slate-400 text-base leading-relaxed max-w-[65ch]">
              围绕建材供应链核心场景，提供从采购到交付的全链路AI解决方案
            </p>
          </div>

          <SolutionTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          <FeatureDetail category={activeCategory} />
        </div>
      </section>

      <ArchitectureSection />
      <ComparisonSection />
      <CTASection />
    </main>
  )
}
