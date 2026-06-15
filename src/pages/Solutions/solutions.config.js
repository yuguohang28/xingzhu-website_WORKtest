// === 星筑科技 - Solutions Page Configuration ===

export const TAB_CONFIG = {
  defaultTab: 'procurement',
  items: [
    { id: 'procurement', label: '智能采购', icon: 'Search' },
    { id: 'supply-chain', label: '供应链优化', icon: 'RefreshCw' },
    { id: 'traceability', label: '质量追溯', icon: 'ShieldCheck' },
    { id: 'analytics', label: '数据洞察', icon: 'BarChart3' },
  ],
}

export const SOLUTIONS_CONFIG = {
  sectionIds: {
    hero: 'solutions-hero',
    solutions: 'solutions-tabs',
    architecture: 'solutions-architecture',
    comparison: 'solutions-comparison',
    cta: 'solutions-cta',
  },
}
