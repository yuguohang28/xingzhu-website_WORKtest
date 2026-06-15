// === Xingzhu Technology - Insights Data ===

export const CATEGORIES = [
  { id: 'all', label: '全部' },
  { id: 'industry-trends', label: '行业趋势' },
  { id: 'tech-practice', label: '技术实践' },
  { id: 'policy', label: '政策解读' },
  { id: 'case-study', label: '案例研究' },
]

export const ARTICLES = [
  {
    id: 'ai-reshape-supply-chain',
    title: 'AI 大模型如何重塑建材供应链预测',
    category: 'tech-practice',
    date: '2026-06-10',
    excerpt:
      '从需求波动到库存优化，大模型正在改变建材供应链的预测范式。本文深入探讨了基于 Transformer 架构的时间序列模型如何将预测准确率提升至 92% 以上，以及在实际部署中遇到的冷启动挑战与解决方案。',
    tags: ['AI 大模型', '供应链预测', '深度学习'],
    featured: true,
    featuredSize: 'large',
  },
  {
    id: 'green-policy-2026',
    title: '2026 年绿色建材产业政策深度解读',
    category: 'policy',
    date: '2026-06-08',
    excerpt:
      '随着"双碳"目标进入攻坚期，绿色建材认证标准与碳配额管理政策迎来新一轮调整。本文梳理了 2026 年上半年出台的核心政策文件，分析其对建材生产企业和供应链参与者的实际影响。',
    tags: ['绿色建材', '政策分析', '双碳'],
    featured: true,
    featuredSize: 'small',
  },
  {
    id: 'data-silos-to-synergy',
    title: '从数据孤岛到智能协同：建材企业的数字化转型路径',
    category: 'industry-trends',
    date: '2026-06-05',
    excerpt:
      '建材行业长期面临系统割裂、数据标准不统一等痛点。本文以三家头部企业的转型实践为例，展示了通过数据中台与 AI 引擎实现采产销全链路协同的可行路径与关键成功因素。',
    tags: ['数字化转型', '数据中台', '智能协同'],
    featured: true,
    featuredSize: 'small',
  },
  {
    id: 'supply-chain-finance-ai',
    title: '供应链金融 + AI：破解建材行业资金周转难题',
    category: 'industry-trends',
    date: '2026-06-01',
    excerpt:
      '建材行业账期长、融资难的问题长期制约中小企业发展。AI 驱动的智能风控与动态授信模型正在重塑供应链金融的效率边界，将审批时效从周级压缩至分钟级。',
    tags: ['供应链金融', '智能风控', '资金周转'],
  },
  {
    id: 'steel-quality-inspection',
    title: '智能质检在建筑钢材采购中的应用实践',
    category: 'tech-practice',
    date: '2026-05-25',
    excerpt:
      '基于计算机视觉与光谱分析的智能质检系统正在改变传统钢材验收流程。本文介绍了该技术在采购验收环节的部署方案、准确率对比数据以及 ROI 分析。',
    tags: ['智能质检', '计算机视觉', '钢材采购'],
  },
  {
    id: 'carbon-emission-auto',
    title: '碳排放核算自动化：建材企业的 ESG 必修课',
    category: 'policy',
    date: '2026-05-20',
    excerpt:
      'ESG 信息披露要求日趋严格，建材企业亟需建立自动化碳核算能力。本文探讨了 IoT 数据采集与 AI 排放因子模型相结合的技术方案，以及不同规模企业的实施路线图。',
    tags: ['碳排放', 'ESG', '自动化核算'],
  },
  {
    id: 'multimodal-logistics',
    title: '多式联运优化：AI 如何降低建材物流成本',
    category: 'tech-practice',
    date: '2026-05-15',
    excerpt:
      '建材物流涉及公路、铁路、水运等多种运输方式的复杂衔接。AI 路径规划与动态调度引擎能够在满足交付时效的前提下，将综合物流成本降低 18% 至 25%。',
    tags: ['多式联运', '物流优化', '路径规划'],
  },
  {
    id: 'supply-chain-resilience',
    title: '建筑行业下行周期中的供应链韧性建设',
    category: 'industry-trends',
    date: '2026-05-10',
    excerpt:
      '在行业整体增速放缓的背景下，供应链韧性成为建材企业的核心竞争力。本文从供应商多元化、安全库存算法和需求预测三个维度，提出了一套可量化的韧性评估与建设框架。',
    tags: ['供应链韧性', '风险管理', '下行周期'],
  },
]

// Helper: get articles by category
export function getArticlesByCategory(categoryId) {
  if (categoryId === 'all') return ARTICLES
  return ARTICLES.filter((a) => a.category === categoryId)
}

// Helper: get featured articles (prioritize featured, then first 3)
export function getFeaturedArticles() {
  return ARTICLES.filter((a) => a.featured).sort((a, b) => {
    const order = { large: 0, small: 1 }
    return (order[a.featuredSize] || 0) - (order[b.featuredSize] || 0)
  })
}

// Helper: format date for display
export function formatArticleDate(dateStr) {
  const date = new Date(dateStr)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year} 年 ${month} 月 ${day} 日`
}

// Helper: get category label by id
export function getCategoryLabel(categoryId) {
  const cat = CATEGORIES.find((c) => c.id === categoryId)
  return cat ? cat.label : ''
}
