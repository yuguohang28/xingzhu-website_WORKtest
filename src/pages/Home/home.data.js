export const HERO_DATA = {
  headlineLine1: '用 AI 重塑',
  headlineLine2: '建筑供应链',
  headlineHighlight: '建筑供应链',
  subtext: '以人工智能重塑建材流通，让每一块建材都能追根溯源。',
  primaryCta: { text: '了解平台', to: '/solutions' },
  secondaryCta: { text: '预约演示', to: '/contact' },
}

export const CAPABILITY_CARDS = [
  {
    id: 'procurement',
    title: '智能采购引擎',
    description:
      '基于深度学习的需求预测与智能匹配，将采购效率提升 3 倍以上，成本降低 18%。',
    icon: 'ShoppingCart',
    gradient: 'linear-gradient(135deg, rgba(37,99,235,0.2), rgba(37,99,235,0.05), transparent)',
    cornerGradient: 'linear-gradient(225deg, rgba(37,99,235,0.15), transparent)',
    accent: 'blue',
    layout: 'tall',
  },
  {
    id: 'visualization',
    title: '供应链可视化',
    description:
      '实时追踪每一批货物从出厂到工地的完整轨迹，异常预警准确率 96%。',
    icon: 'Eye',
    gradient: 'linear-gradient(135deg, rgba(5,150,105,0.2), rgba(5,150,105,0.05), transparent)',
    cornerGradient: 'linear-gradient(225deg, rgba(5,150,105,0.15), transparent)',
    accent: 'emerald',
    layout: 'small',
  },
  {
    id: 'quality',
    title: '质量 AI 检测',
    description:
      '计算机视觉自动识别建材缺陷，检测精度达 99.3%，覆盖 200 余品类。',
    icon: 'Search',
    gradient: 'linear-gradient(135deg, rgba(147,51,234,0.2), rgba(147,51,234,0.05), transparent)',
    cornerGradient: 'linear-gradient(225deg, rgba(147,51,234,0.15), transparent)',
    accent: 'purple',
    layout: 'small',
  },
  {
    id: 'logistics',
    title: '物流智能调度',
    description:
      '多目标优化算法动态规划配送路径，运输时效提升 42%，碳排放降低 27%。',
    icon: 'Truck',
    gradient: 'linear-gradient(135deg, rgba(217,119,6,0.2), rgba(217,119,6,0.05), transparent)',
    cornerGradient: 'linear-gradient(225deg, rgba(217,119,6,0.15), transparent)',
    accent: 'amber',
    layout: 'wide',
  },
]

export const STATS_DATA = [
  { value: '800+', label: '城市覆盖' },
  { value: '12,000+', label: '供应商入驻' },
  { value: '98.6%', label: '履约准时率' },
  { value: '45亿+', label: '平台交易额' },
]

export const TRUST_LOGOS = [
  { id: 1, name: '中建集团' },
  { id: 2, name: '万科地产' },
  { id: 3, name: '碧桂园' },
  { id: 4, name: '中国中铁' },
  { id: 5, name: '华润置地' },
  { id: 6, name: '保利发展' },
]

export const SECTION_HEADERS = {
  capabilities: { title: '核心能力', subtitle: 'AI 技术驱动建材供应链全面升级' },
  trust: { label: '领先企业信赖之选' },
}

export const HERO_COMMAND_CENTER = {
  screenTitle: '星筑 AI 供应链控制台',
  screenSub: '实时分析中',
  project: {
    label: '项目需求',
    name: '南宁城市更新一期',
    status: 'AI 已识别',
    batch: '本周 18 批次',
    materials: ['水泥', '砂石', '钢材'],
  },
  suppliers: {
    label: '供应商匹配',
    count: '326',
    response: '最优响应 18min',
    items: [
      { name: '区域一级仓', score: '98', status: '可履约' },
      { name: '砂石联采站', score: '94', status: '价格优' },
      { name: '钢材集配商', score: '91', status: '在途短' },
    ],
  },
  metrics: [
    { label: '智能询价', value: '1,284', hint: '今日处理' },
    { label: '价格指数', value: '+3.2%', hint: '较上周' },
    { label: '履约风险', value: '低', hint: '风险可控' },
  ],
  trend: {
    label: '区域价格趋势',
    values: [28, 42, 35, 54, 48, 62, 57],
  },
  flow: ['需求识别', '询价比价', '供应匹配', '履约追踪'],
}

export const CTA_DATA = {
  title: '开启智能供应链之旅',
  description:
    '加入 12,000+ 供应商，共同构建 AI 驱动的建材流通新生态。',
  buttonText: '立即预约演示',
  buttonTo: '/contact',
}
