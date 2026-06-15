# Contact Page - 联系我们

The conversion-focused contact page for Xingzhu Technology.

## Files

| File | Purpose |
|------|---------|
| `Contact.jsx` | Main page component. Assembles HeroSection + ContactFormSection with page transition animation. |
| `contact.sections.jsx` | All section components: HeroSection, ContactFormSection, InfoPanel, FaqAccordion, FormField, SuccessState. |
| `contact.data.js` | Data objects: form field definitions, contact methods, FAQ items, office locations. |
| `contact.config.js` | Validation rules, initial form state, response time copy. |
| `contact.motion.js` | Page-specific Framer Motion variants for form entrance, success state, FAQ, and loading shimmer. |

## Design

- **Split layout**: 60% form (left) / 40% info panel (right) on desktop; stacked on mobile
- **Form**: 5 fields (name, company, email, phone, message) with labels above inputs, validation on blur and submit, loading shimmer, success state with checkmark animation
- **Right panel**: Contact methods with Lucide icons, FAQ accordion with smooth height animation, office addresses, response time trust signal
- **States**: idle, focused, validation error, loading (1.5s simulated), success, reset

## Dependencies

- `@/shared/components` (Section, SectionHeader, Button)
- `@/shared/motion` (fadeUp, viewportOnce, pageTransition)
- `lucide-react` (Mail, Phone, MapPin, Check, ChevronDown, Clock, Send, Loader2)
- `framer-motion`
