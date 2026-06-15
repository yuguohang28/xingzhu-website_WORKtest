# 行业洞察 (Insights) — 星筑科技

行业洞察页面 — 建材供应链与 AI 技术领域的编辑级内容平台。

## 文件结构

| 文件 | 用途 |
|------|------|
| `Insights.jsx` | 主页面组件，组装所有区块，提供页面级路由过渡动效 |
| `insights.sections.jsx` | 区块组件：HeroSection、FeaturedArticles、ArticleGridSection、NewsletterSection |
| `insights.data.js` | 文章数据、分类定义、筛选与格式化工具函数 |
| `insights.motion.js` | 页面专属动效变体：卡片悬浮物理、入场动画、筛选标签动画 |
| `insights.config.js` | 页面级常量：标题、副标题、订阅区文案 |

## 设计要点

- 全暗色主题，延续星筑科技品牌设计语言
- 编辑级排版：左对齐 Hero、非对称 bento 精选网格、水平胶囊分类筛选
- 卡片悬浮动效使用 Spring 物理（刚度为 150-200，阻尼为 16-20），辅以边框高亮过渡
- 所有文字使用中文，无破折号
- 使用 `@/shared/motion` 与 `@/shared/components` 中的共享预设与组件

## 区块说明

1. **HeroSection** — 纯文字首屏，无图片，编辑自信感
2. **FeaturedArticles** — 异形 bento 网格，1 张大卡片 + 2 张小卡片
3. **ArticleGridSection** — 分类筛选 + 文章网格（最大 3 列）
4. **NewsletterSection** — 内联订阅 CTA，输入框 + 按钮

## 依赖

- `framer-motion` — 动效引擎
- `lucide-react` — 图标
- `@/shared/motion` — 共享动效预设
- `@/shared/components` — Section、SectionHeader、Card、Button
