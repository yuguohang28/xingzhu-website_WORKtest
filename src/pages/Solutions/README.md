# Solutions Page - 星筑科技

Enterprise solutions page for Xingzhu Technology's AI-powered building materials supply chain platform.

## File Structure

| File | Purpose |
|------|---------|
| `Solutions.jsx` | Main page component. Assembles all sections. Manages active tab state. |
| `solutions.sections.jsx` | Named-export section components: HeroSection, SolutionTabs, FeatureDetail, ArchitectureSection, ComparisonSection, CTASection. |
| `solutions.data.js` | Data layer: hero features, solution categories (with per-tab features), architecture layers, comparison data. |
| `solutions.motion.js` | Page-specific Framer Motion variants: tab transitions, staggered card entrance, architecture item entrance. |
| `solutions.config.js` | Constants: tab definitions, section ID references. |

## Design Highlights

- **Dark theme** throughout using surface-950/900 with accent-400/500 orange highlights.
- **Hero**: Two-column layout (left headline + right 2x2 capability grid).
- **Solution tabs**: Desktop horizontal tab bar with accent underline; mobile vertical accordion with inline features.
- **Feature grid**: Asymmetric 3-column layout (1 hero card spanning 2 columns + 2-3 small cards stacked right).
- **Architecture diagram**: CSS grid with vertical connector line, colored layer blocks, staggered entrance animation.
- **Comparison**: Side-by-side before/after cards with X icons (traditional) and Check icons (solution).
- **CTA**: Full-width banner with radial accent gradient background.

## Shared Dependencies

- Components: `@/shared/components` (Section, SectionHeader, Card, Button)
- Motion: `@/shared/motion` (fadeUp, fadeIn, staggerContainer, slideInLeft, slideInRight, viewportOnce, SPRING_SMOOTH, EASE_OUT_EXPO)
- Icons: `lucide-react`
- Animation: `framer-motion`
