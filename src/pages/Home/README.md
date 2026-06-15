# Home - 星筑科技 (Xingzhu Technology)

The flagship landing page for the AI-powered building materials supply chain platform.

## File Structure

| File | Purpose |
|---|---|
| `Home.jsx` | Root page component, assembles all sections in order |
| `home.sections.jsx` | Named-export section components (HeroSection, TrustSection, CapabilitiesSection, StatsSection, CTASection) |
| `home.data.js` | All content data: hero, capability cards, stats, trust logos, CTA |
| `home.motion.js` | Page-specific framer-motion animation variants extending `@/shared/motion` presets |
| `home.config.js` | Section ID constants, animation delays, visual node coordinates |

## Section Order

1. **Hero** - Asymmetric split layout, min-h-[100dvh], abstract geometric visual on right
2. **Trust** - Partner logos as abstract SVG monograms, below hero
3. **Capabilities** - Bento grid with 4 cards (tall / small / small / wide), gradient accents
4. **Stats** - 4 key metrics (cities, suppliers, fulfillment rate, volume)
5. **CTA** - Full-width dark banner with single call-to-action button

## Dependencies

- `@/shared/motion` - animation preset exports (fadeUp, staggerContainer, viewportOnce, SPRING_SMOOTH, EASE_OUT_EXPO)
- `@/shared/components` - Section, SectionHeader, Card, Button
- `lucide-react` - icons (ShoppingCart, Eye, Search, Truck, ArrowRight)
- `framer-motion` - animation runtime (not motion/react)
- Tailwind CSS - all styling
