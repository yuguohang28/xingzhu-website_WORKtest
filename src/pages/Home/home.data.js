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
  screenTitle: 'AI Supply Command',
  screenSub: '实时供应链指挥中心',
  // Site nodes on the map — x/y in percentage within the central panel
  sites: [
    { id: 'site-a', label: '科技园项目', type: 'building', x: 22, y: 28 },
    { id: 'site-b', label: '商务区项目', type: 'building', x: 72, y: 22 },
    { id: 'warehouse', label: '区域中心仓', type: 'warehouse', x: 48, y: 54 },
    { id: 'supplier', label: '供应商集群', type: 'supplier', x: 18, y: 62 },
    { id: 'site-c', label: '住宅区项目', type: 'building', x: 76, y: 58 },
  ],
  // Routes: indices into sites array (from -> to)
  routes: [
    { from: 3, to: 2 },  // supplier -> warehouse
    { from: 2, to: 0 },  // warehouse -> site-a
    { from: 2, to: 1 },  // warehouse -> site-b
    { from: 2, to: 4 },  // warehouse -> site-c
    { from: 3, to: 0 },  // supplier -> site-a (direct)
  ],
  // 4 floating stat panels
  panels: [
    { label: '智能询价', value: '1,284', hint: '今日处理', pos: 'tl' },
    { label: '价格指数', value: '+3.2%', hint: '较上周 ↑', pos: 'tr' },
    { label: '供应商在线', value: '326', hint: '实时响应', pos: 'bl' },
    { label: '履约风险', value: '低', hint: '风险可控', pos: 'br' },
  ],
  // Bottom supply chain flow bar
  flow: ['需求识别', '询价比价', '供应匹配', '履约追踪'],
}

export const CTA_DATA = {
  title: '开启智能供应链之旅',
  description:
    '加入 12,000+ 供应商，共同构建 AI 驱动的建材流通新生态。',
  buttonText: '立即预约演示',
  buttonTo: '/contact',
}
