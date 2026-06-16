---
name: website-agent-team
description: Use this skill when maintaining, improving, refactoring, redesigning, or organizing the Xingzhu Technology website with an Agent Team workflow.
---

# Website Agent Team Workflow

Use this skill when the user asks to maintain, improve, refactor, redesign, optimize, or organize the Xingzhu Technology website, especially when the user mentions Agent Team, subagents, five pages, or multi-page collaboration.

## Required First Step

Before making changes:

1. Read `CLAUDE.md`.
2. Inspect the current project structure.
3. Identify whether the request affects:
   - one page only
   - multiple pages
   - shared components
   - routing
   - build or deployment
   - visual design only
   - content/data only

Do not start by rewriting the project.

## Bug Handling Rule

If build failures, runtime errors, blank pages, broken routes, broken interactions, component errors, or visual regressions appear during the work, switch to the `website-bug-audit` skill before fixing.

Do not guess at fixes. First reproduce or read the error, identify the failing layer, compare with working code in the project, then apply the smallest fix and verify again.

## Project Boundaries

This is a React + Vite + Tailwind CSS + Framer Motion enterprise website.

Preserve:

- existing routing
- existing content unless the user asks to change it
- shared navigation
- shared footer
- overall visual identity
- build compatibility

Do not convert the project into separate standalone HTML pages.

## When To Use Agent Team

Use Agent Team when the task affects three or more pages, or when the user explicitly asks for Agent Team.

Do not use Agent Team for a small one-file change.

## Main Agent Responsibilities

The main agent owns:

- `src/shared`
- `src/App.jsx`
- `src/main.jsx`
- `package.json`
- `vite.config.js`
- global architecture
- shared visual system
- final integration
- final build verification

The main agent must coordinate the subagents and resolve conflicts.

## Subagent Responsibilities

If using five page subagents:

### Home subagent

May modify only:

- `src/pages/Home`

Responsibilities:

- homepage structure
- homepage content organization
- homepage sections
- homepage data/config/motion files

### About subagent

May modify only:

- `src/pages/About`

Responsibilities:

- about page structure
- company story
- values
- team/culture sections
- about data/config/motion files

### Solutions subagent

May modify only:

- `src/pages/Solutions`

Responsibilities:

- solution page structure
- solution tabs
- architecture section
- comparison section
- solution data/config/motion files

### Insights subagent

May modify only:

- `src/pages/Insights`

Responsibilities:

- insights page structure
- article data
- article cards
- category filters
- newsletter section
- insights data/config/motion files

### Contact subagent

May modify only:

- `src/pages/Contact`

Responsibilities:

- contact page structure
- contact form UI
- contact methods
- location/business inquiry sections
- contact data/config/motion files

## Subagent Restrictions

Subagents must not modify:

- `src/shared`
- `src/App.jsx`
- `src/main.jsx`
- `package.json`
- `package-lock.json`
- `vite.config.js`
- other page directories
- root configuration files

If a subagent needs a shared component or shared change, it must report the need to the main agent instead of changing shared files directly.

## Recommended Page Structure

Each page should be organized toward this structure when practical:

```text
PageName/
  PageName.jsx
  pageName.data.js
  pageName.config.js
  pageName.motion.js
  sections/
    Hero.jsx
    MainSection.jsx
    CTA.jsx
  README.md
```

Do not force this structure if the requested change is small and the current structure is sufficient.

## Data Rule

Visible page content should live in the page data file whenever practical.

Examples:

- section titles
- descriptions
- button labels
- cards
- article lists
- tags
- metrics
- feature lists
- contact methods

Section components should focus on rendering and layout.

## Shared Component Rule

If two or more pages repeat the same visual pattern, the main agent should consider extracting a shared component.

Possible shared components:

- `PageHero`
- `FeatureCard`
- `MetricCard`
- `ArticleCard`
- `TagPill`
- `CTASection`
- `FormField`

Do not create abstractions unless they reduce real duplication.

## Design Standard

The visual direction should be:

- premium
- restrained
- technical
- clean
- modern
- enterprise-grade
- not template-like

Avoid:

- cheap gradients
- excessive glow
- cluttered effects
- oversized marketing blocks
- inconsistent spacing
- decorative elements that do not support content

## Execution Order

For multi-page work:

1. Main agent reads project structure and `CLAUDE.md`.
2. Main agent identifies shared constraints and architecture boundaries.
3. Main agent decides whether shared components need changes.
4. Main agent starts page subagents only after the shared direction is clear.
5. Each subagent works only in its own page directory.
6. Main agent reviews subagent outputs.
7. Main agent resolves integration issues.
8. If any bug or build failure appears, main agent uses `website-bug-audit` before modifying further.
9. Main agent runs `npm run build`.
10. Main agent reports:
   - files changed
   - structure improved
   - bugs found or not found
   - any remaining risks
   - build result

## Completion Checklist

Before finishing:

- Confirm no page route was broken.
- Confirm navigation still works.
- Confirm shared layout still renders.
- Confirm no subagent modified forbidden files.
- Confirm page data is placed in data files where practical.
- Run `npm run build`.
- If build or runtime errors appear, use `website-bug-audit` and verify the fix.
- Report the result clearly.
