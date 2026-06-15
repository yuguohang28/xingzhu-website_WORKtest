# About Page - Xingzhu Technology

About page module for the Xingzhu Technology (星筑科技) website. Tells the story of an AI company revolutionizing the building materials supply chain.

## File Structure

| File | Purpose |
|------|---------|
| `About.jsx` | Main page component. Assembles all sections with page-transition wrapper. |
| `about.sections.jsx` | Individual section components: HeroSection, StoryTimeline, ValuesGrid, DataNarrative, TeamSection. |
| `about.data.js` | All data objects: company story, timeline events, values, stats, team members, careers copy. |
| `about.motion.js` | Page-specific animation variants extending shared motion presets (timeline scroll-reveal, stat entrance, etc.). |
| `about.config.js` | Page-specific constants (section IDs, meta description). |

## Sections

1. **Hero** - Left-aligned headline with abstract geometric pattern, trust indicators.
2. **Story Timeline** - Vertical alternating timeline on desktop, horizontal scroll-swipe on mobile.
3. **Values Grid** - 3 asymmetric cards (1 featured + 2 standard) with Lucide icons.
4. **Data Narrative** - 4 large display numbers with labels in a horizontal strip.
5. **Team/Culture** - Bento grid with team ethos, geometric abstract avatars (monograms), careers CTA.

## Key Rules Followed

- Dark theme throughout (no light sections).
- Imports from `@/shared/motion` and `@/shared/components`; no redefinition of shared primitives.
- Icons from `lucide-react`.
- `framer-motion` (not `motion/react`).
- Tailwind CSS classes exclusively.
- All text in Chinese.
- No em-dashes, no navbar, no footer, no section numbering eyebrows, no scroll cues.
- Mobile: single column.
- Uses `min-h-[100dvh]` not `h-screen`.
