---
name: website-bug-audit
description: Use this skill when auditing, debugging, or fixing bugs in the Xingzhu Technology website, including build failures, blank pages, route errors, component errors, broken interactions, styling regressions, data rendering issues, or failed verification after website changes.
---

# Website Bug Audit Workflow

Use this skill for bug review and debugging in the Xingzhu Technology website.

This skill is for technical correctness. For broad multi-page architecture work, use `website-agent-team` first and switch to this skill only when bugs, failed builds, or unexpected behavior appear.

## Required Rule

Do not guess fixes.

Before changing code, identify the root cause by checking evidence.

## Phase 1: Reproduce Or Read The Failure

Start with the concrete symptom:

- build error
- console/runtime error
- blank page
- broken route
- broken navigation
- broken interaction
- missing content
- malformed layout
- style regression

If there is an error message, read it completely and note:

- file path
- line number
- component name
- import/export name
- route path
- package or dependency involved

## Phase 2: Locate The Failing Layer

Classify the issue into one primary layer:

- routing: `src/App.jsx`
- app entry: `src/main.jsx`
- shared layout: `src/shared/layout`
- shared components: `src/shared/components`
- page entry: `src/pages/*/*.jsx`
- page sections: `src/pages/*/sections`
- page data: `src/pages/*/*.data.js`
- page motion: `src/pages/*/*.motion.js`
- styling: `src/index.css` or Tailwind classes
- build/config: `package.json`, `vite.config.js`, dependency versions

Do not modify unrelated layers.

## Phase 3: Compare With Working Patterns

Find a similar working page or component in the project.

Compare:

- imports and exports
- component names
- data shape
- route path
- shared component usage
- animation variants
- Tailwind class patterns

Use the existing project pattern unless there is a clear reason not to.

## Phase 4: Fix Minimally

Apply the smallest change that addresses the root cause.

Avoid:

- broad rewrites
- unrelated refactors
- changing visual direction while fixing a bug
- modifying shared files when the issue is isolated to one page
- changing package versions unless the dependency is proven to be the cause

## Phase 5: Verify

After fixing, run:

```bash
npm run build
```

If the issue is visual or interactive, also verify the affected route in the browser when practical.

Report:

- root cause
- files changed
- fix applied
- verification result
- any remaining risk

## Common Website Checks

For route bugs:

- check `src/App.jsx`
- check navigation data
- check route names and links

For page content bugs:

- check the page `*.data.js`
- check the section consuming that data
- confirm the data shape matches what the component expects

For component bugs:

- check imports and exports
- compare with another working shared component
- confirm props are passed correctly

For style bugs:

- check whether the issue is local to a section or from a shared wrapper
- inspect responsive classes
- avoid changing global styles unless the problem is global

For animation bugs:

- check `*.motion.js`
- check `framer-motion` variants and `initial/animate/whileInView`
- confirm the component is wrapped in `motion.*` where variants are used
