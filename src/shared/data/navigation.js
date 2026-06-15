export const NAV_ITEMS = [
  { label: '首页', path: '/', en: 'Home' },
  { label: '关于我们', path: '/about', en: 'About' },
  { label: '解决方案', path: '/solutions', en: 'Solutions' },
  { label: '行业洞察', path: '/insights', en: 'Insights' },
  { label: '联系我们', path: '/contact', en: 'Contact' },
]

export const SITE_CONFIG = {
  name: '星筑科技',
  nameEn: 'Xingzhu Technology',
  tagline: '以建材供应链为本体的 AI 科技公司',
  taglineEn: 'AI-Powered Building Materials Supply Chain',
  copyright: `© ${new Date().getFullYear()} 星筑科技. All rights reserved.`,
}

export const FOOTER_LINKS = {
  solutions: [
    { label: '智能采购', path: '/solutions#procurement' },
    { label: '供应链优化', path: '/solutions#supply-chain' },
    { label: '质量追溯', path: '/solutions#traceability' },
    { label: '数据洞察', path: '/solutions#analytics' },
  ],
  company: [
    { label: '关于我们', path: '/about' },
    { label: '加入我们', path: '/about#careers' },
    { label: '新闻动态', path: '/insights' },
    { label: '联系我们', path: '/contact' },
  ],
  legal: [
    { label: '隐私政策', path: '/privacy' },
    { label: '服务条款', path: '/terms' },
  ],
}

export const SOCIAL_LINKS = [
  { label: '微信公众号', icon: 'QRCode', href: '#' },
  { label: 'LinkedIn', icon: 'Linkedin', href: '#' },
]
