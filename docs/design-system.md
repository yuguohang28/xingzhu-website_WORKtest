# 星筑科技 - Design System

## Brand Foundation

- **Company**: 星筑科技 (Xingzhu Technology)
- **Positioning**: AI-driven building materials supply chain
- **Brand essence**: Industrial precision meets algorithmic intelligence

## Color Tokens

| Token | Hex | Usage |
|-------|-----|-------|
| Accent 500 | `#d4874b` | Primary CTAs, active states, key highlights |
| Accent 400 | `#e0934e` | Hover states |
| Surface 950 | `#020617` | Deepest background |
| Surface 900 | `#0f172a` | Primary background |
| Surface 850 | `#15202d` | Card surfaces |
| Surface 800 | `#1e293b` | Elevated surfaces |
| Text Primary | `#ffffff` | Headlines, important text |
| Text Secondary | `#94a3b8` | Body text (slate-400) |
| Text Muted | `#64748b` | Captions, meta (slate-500) |

## Typography

- **Display**: System sans-serif with tight tracking
- **Body**: System sans-serif, relaxed leading
- **Mono**: System monospace for data/metrics
- **Scale**: text-xs → text-sm → text-base → text-lg → text-xl → text-2xl → text-3xl → text-4xl → text-5xl → text-6xl

## Motion Language

- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` for entrances
- **Spring**: `stiffness: 120, damping: 20` for interactive
- **Duration**: 0.5s page transitions, 0.7s section reveals
- **Stagger**: 80ms per child element
- **Viewport**: trigger at 20% visibility, 60px margin

## Spacing Scale

- **Section**: `py-24 md:py-32`
- **Container**: `max-w-[1400px] mx-auto px-6`
- **Card padding**: `p-6`
- **Gap grid**: `gap-6` or `gap-12`

## Border & Shape

- **Radius**: `rounded-sm` (2px) universally
- **Border style**: `border-white/[0.04]` default
- **Hover border**: `border-white/[0.08]`

## Component Tokens

- **Navbar**: 64px height, `z-50`, fixed, backdrop-blur on scroll
- **Button**: `rounded-sm`, `font-medium`, gap-2 for icon+text
- **Card**: `bg-white/[0.02]`, `border-white/[0.04]`, `p-6`
- **Section**: `py-24 md:py-32`, `px-6`
- **Container**: `max-w-[1400px] mx-auto`

## Icons

- **Library**: Lucide React
- **Stroke**: `strokeWidth={2}` default, `1.5` for small sizes
- **Size scale**: w-4 h-4 (inline), w-5 h-5 (nav), w-8 h-8 (feature)

## Page-Specific Notes

| Page | Key Visual Element | Accent Usage |
|------|-------------------|--------------|
| Home | Ambient grid hero + bento capabilities | CTAs + stat numbers |
| About | Timeline narrative + data cards | Timeline connector + stat highlights |
| Solutions | Architecture diagram + feature cards | Feature icons + tab indicators |
| Insights | Editorial cards + date stamps | Category badges |
| Contact | Split form + info hierarchy | Submit button + focus rings |
