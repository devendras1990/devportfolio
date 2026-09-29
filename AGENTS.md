# AGENTS.md — Portfolio Project Engineering & UI Rules

## Purpose

This repository is the personal portfolio website for **Devendra Singh Bisht**.

Any AI coding agent working in this repository MUST treat the existing implementation as the source of truth for:

- visual language
- component structure
- spacing
- typography
- color system
- responsive behavior
- animation style
- accessibility patterns
- data modeling
- routing
- dependency choices
- code formatting

The objective is **evolution, not reinvention**.

Do not replace the current visual system with a generic Tailwind/shadcn dashboard aesthetic. Do not introduce a second design system.

---

# 1. Technology Baseline

Current stack:

- React 19
- TypeScript
- TanStack Start
- TanStack Router
- Vite 8
- Tailwind CSS 4
- shadcn/ui-style components
- Radix UI primitives
- Lucide React icons
- TanStack Query
- React Hook Form
- Zod
- Manrope font
- ESLint 9
- Prettier 3
- Bun lockfile is present

Important project characteristics:

- The application is a TanStack Start application.
- Routing is file-based under `src/routes`.
- `src/routeTree.gen.ts` is generated. Do not manually edit it.
- The main portfolio experience is currently implemented in `src/components/Portfolio.tsx`.
- The visual system is primarily custom CSS in `src/styles.css`.
- `src/components/ui/*` contains reusable shadcn/Radix-style primitives.
- Project content is modeled in `src/lib/projects.ts`.
- Images live under `src/assets/projects`.
- `@` aliases map to `src` through the existing configuration.

Do not migrate frameworks, routing systems, styling systems, or component libraries unless explicitly requested.

---

# 2. Source-of-Truth Priority

When deciding how to implement a new feature, follow this priority:

1. Existing working component behavior
2. Existing `src/styles.css`
3. Existing shadcn/Radix components in `src/components/ui`
4. Existing project data models in `src/lib`
5. Existing route conventions
6. Existing ESLint/Prettier configuration
7. New code only where the existing architecture has no suitable pattern

If a new implementation conflicts with an existing pattern, preserve the existing pattern unless the task explicitly asks for a redesign/refactor.

---

# 3. Repository Structure

Expected structure:

```text
portfolio/
├── .agent/
│   └── skills/
│       └── portfolio-ui/
│           └── SKILL.md
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── projects/
│   ├── components/
│   │   ├── Portfolio.tsx
│   │   └── ui/
│   ├── hooks/
│   ├── lib/
│   │   ├── projects.ts
│   │   ├── utils.ts
│   │   └── ...
│   ├── routes/
│   │   ├── __root.tsx
│   │   ├── index.tsx
│   │   └── README.md
│   ├── routeTree.gen.ts
│   ├── router.tsx
│   ├── server.ts
│   ├── start.ts
│   └── styles.css
├── AGENTS.md
├── components.json
├── eslint.config.js
├── package.json
├── prettier configuration
└── vite.config.ts
```

Do not create arbitrary top-level folders for UI code.

---

# 4. UI Architecture Rules

## 4.1 Existing design language

The portfolio is intentionally:

- dark
- premium
- editorial
- minimal
- high contrast
- typography-led
- spacious
- slightly experimental
- product-design oriented
- motion-aware

The visual system combines:

- near-black blue/purple background
- violet primary accent
- violet-to-red gradient
- muted gray typography
- thin borders
- large editorial headings
- generous vertical spacing
- subtle glass/backdrop effects
- restrained hover motion
- grid textures
- radial glows
- custom cursor
- preloader
- laptop/project mockups

Do not convert this into:

- a conventional SaaS dashboard
- a card-heavy template
- a generic white portfolio
- a default shadcn theme
- a Bootstrap-style layout
- an overly animated landing page

---

# 5. Design Tokens

The canonical CSS variables live in `src/styles.css`.

Important existing values/patterns include:

```css
--background
--foreground
--card
--card-foreground
--popover
--popover-foreground
--primary
--primary-foreground
--secondary
--secondary-foreground
--muted
--muted-foreground
--accent
--accent-foreground
--destructive
--destructive-foreground
--border
--input
--ring
--surface
--surface-high
--line
--glow
--grad-a
--grad-b
--grad
```

Current visual direction:

- background: very dark blue/black
- foreground: near white
- primary: violet/purple
- gradient start: `#6025F5`
- gradient end: `#FF5555`
- font: Manrope

Do not hard-code alternative colors in components when an existing variable can be used.

Prefer:

```css
color: var(--foreground);
color: var(--muted-foreground);
border-color: var(--line);
background: var(--surface);
```

over introducing one-off colors.

---

# 6. Typography Rules

Primary font:

```text
Manrope
```

Use the existing global font configuration.

Typography characteristics:

- large display headings
- tight letter spacing
- strong visual hierarchy
- muted secondary text
- uppercase micro-labels
- small metadata
- generous line height for body copy

Existing heading patterns use values similar to:

```css
letter-spacing: -0.055em;
```

and large responsive `clamp()` sizes.

When adding headings:

- use the existing heading scale
- use `clamp()` for responsive display typography
- avoid arbitrary desktop-only font sizes
- preserve tight editorial letter spacing
- use muted text for secondary emphasis where appropriate

Do not introduce another font unless explicitly requested.

---

# 7. Layout Rules

The main content uses the existing:

```css
.section-shell
.section-pad
```

Pattern:

```css
.section-shell {
  width: min(100% - 64px, 1380px);
  margin-inline: auto;
}
```

Default large-screen section spacing is intentionally generous.

Do not create competing container classes such as:

- `.container-main`
- `.page-wrapper`
- `.content-container`

unless there is a real architectural reason.

Use the existing shell/padding system first.

---

# 8. Responsive Rules

Existing breakpoints:

```text
1000px
640px
```

Current behavior:

### Above 1000px

- full navigation
- large two-column project layouts
- six-column workflow
- four-column AI tool grid
- five-column philosophy/evolution structures

### 1000px and below

- desktop navigation collapses
- mobile menu becomes available
- project layouts become single-column
- workflow/tool grids reduce columns
- content widths become narrower

### 640px and below

- typography scales down significantly
- hero becomes single-column
- actions stack
- artifact becomes smaller
- stats become two columns
- projects become single-column
- modal content becomes mobile-friendly
- grids collapse to one column where required
- custom cursor is disabled

Any new section MUST be tested at:

- 1440px+
- 1024px
- 768px
- 640px
- 390px

Do not fix mobile by simply shrinking desktop elements.

---

# 9. Component Rules

## Prefer existing primitives

Before creating a new button, dialog, dropdown, tooltip, etc., inspect:

```text
src/components/ui/
```

Use existing primitives whenever possible.

The project uses:

- Radix primitives
- shadcn-style variants
- Lucide icons

Do not install another component library for a basic UI element.

---

# 10. Button Rules

Buttons should use the existing `Button` component where possible:

```tsx
import { Button } from "@/components/ui/button";
```

Existing visual variants include patterns such as:

- premium
- outlinePremium
- ghost
- text
- textMuted
- filter
- filterActive

Do not create repeated inline button CSS unless a genuinely unique interaction requires it.

Use Lucide icons for directional/utility icons.

---

# 11. Icon Rules

Use:

```tsx
import { ... } from "lucide-react";
```

Prefer existing icons over:

- Unicode symbols
- emoji
- custom SVG recreation
- icon font packages
- arbitrary inline SVG

Existing visual language commonly uses:

- ArrowUpRight
- ArrowDown
- Check
- ChevronDown
- Menu
- X
- Sparkles

Keep icon sizing subtle and consistent.

---

# 12. Page/Section Architecture

The current single-page portfolio is organized into logical sections.

Major sections include patterns for:

1. Preloader
2. Custom cursor
3. Navbar
4. Hero
5. About/intro
6. Selected work
7. Case study modal
8. AI × Product Design
9. Skills
10. Design/system playground
11. About details
12. Career/evolution
13. Experience
14. Resume CTA
15. Contact
16. Footer

When modifying an existing section:

- preserve its ID
- preserve navigation links
- preserve semantic section structure
- preserve animation unless the task specifically changes it
- preserve responsive behavior

When adding a section:

- give it a stable semantic ID
- add navigation only if the section is intended to be navigable
- reuse `.section-shell`, `.section-pad`, `.section-label`

---

# 13. Navigation Rules

Navigation currently uses:

```text
Work
About
Skills
AI
Experience
Contact
```

Navigation scrolls to section IDs.

Use the existing:

```tsx
scrollTo(id);
```

pattern for same-page navigation.

Do not introduce a routing solution for an internal anchor section.

Do not change section IDs casually because existing navigation depends on them.

---

# 14. Project Data Rules

Project metadata belongs in:

```text
src/lib/projects.ts
```

The `Project` type currently contains:

```ts
type Project = {
  id: number;
  title: string;
  category: string;
  url: string;
  description: string;
  designed: string[];
  tools: string[];
  filters: string[];
};
```

If project content changes:

- update `projects.ts`
- do not hard-code the same project information into the UI
- keep rendering components data-driven

The project image list currently maps by project ID.

If adding/removing projects, carefully update the image/data relationship. Prefer a future refactor to an image field on the `Project` type if the list becomes difficult to maintain, but do not perform that refactor unless required by the task.

---

# 15. Images

Project images are stored in:

```text
src/assets/projects/
```

Current assets are `.webp`.

Rules:

- use imported local assets for project imagery
- use meaningful `alt` text
- use lazy loading for below-the-fold project images
- preserve aspect ratio
- use `object-fit: cover` where the existing design requires it
- do not hotlink external images unless explicitly required
- do not replace project imagery with placeholders when an existing asset is available

Do not duplicate the same image into `public/` without a reason.

---

# 16. Case Study Modal

The current case study interaction:

- opens as a fixed full-screen modal
- locks body scrolling
- closes with the close button
- closes with Escape
- exposes project metadata
- shows the project image
- includes live website links

Any changes must preserve:

- `role="dialog"`
- `aria-modal="true"`
- keyboard Escape support
- body scroll locking
- visible close control
- focus-visible styles

Do not turn the modal into a third-party dialog unless explicitly requested.

---

# 17. Animation Rules

Motion is part of the design language, but it must remain restrained.

Existing patterns include:

- preloader transition
- title entrance
- ambient glow breathing
- floating hero artifact
- rotating artifact core
- hover image scale
- project hover overlay
- modal entrance
- tool-card hover lift
- philosophy-card hover transform

Rules:

- prefer CSS transitions/keyframes for simple decorative motion
- do not add Framer Motion/GSAP just for simple transitions
- avoid continuous heavy animations
- avoid excessive parallax
- avoid animations that interfere with reading
- respect `prefers-reduced-motion`

The existing stylesheet already contains:

```css
@media (prefers-reduced-motion: reduce);
```

Any new animation must follow the same accessibility principle.

---

# 18. Cursor Rules

The portfolio has a custom cursor on desktop.

Interactive elements may use:

```html
data-cursor="VIEW" data-cursor="EXPLORE" data-cursor="OPEN"
```

Do not add custom cursor behavior to every element.

Use cursor labels only for meaningful visual interactions.

The custom cursor is intentionally disabled on mobile.

---

# 19. CSS Rules

The primary custom styling file is:

```text
src/styles.css
```

This project intentionally contains substantial custom CSS.

Do not automatically convert existing CSS into Tailwind utility classes.

Do not create:

- `styles-new.css`
- `portfolio.css`
- `global-custom.css`
- component-specific CSS files

unless the project architecture genuinely requires it.

Prefer adding styles to the existing visual system.

---

# 20. Tailwind Rules

Tailwind CSS 4 is installed and configured.

Use Tailwind when:

- a small local layout utility is appropriate
- an existing shadcn component uses Tailwind
- a route-level utility is simpler in Tailwind

Use custom CSS when:

- extending the portfolio's visual system
- implementing complex visual effects
- modifying the existing section styling
- working with gradients, masks, custom animations, artifacts, or editorial layouts

Do not mix large Tailwind utility strings with giant custom CSS for the same element without a reason.

---

# 21. shadcn/Radix Rules

`components.json` defines:

- style: new-york
- TypeScript/TSX
- Lucide icon library
- aliases:
  - `@/components`
  - `@/components/ui`
  - `@/lib`
  - `@/hooks`

If a new standard primitive is required:

1. check whether it already exists
2. extend the existing component if appropriate
3. preserve current variants
4. keep accessibility behavior
5. do not introduce another UI framework

---

# 22. TypeScript Rules

Use strict, explicit types where useful.

Prefer:

- type-safe props
- discriminated unions where appropriate
- typed data models
- typed event handlers
- no `any` unless unavoidable

Do not suppress TypeScript errors just to make a build pass.

Do not add:

```ts
// @ts-ignore
```

without a documented technical reason.

---

# 23. React Rules

Use functional components and React hooks.

Follow the existing pattern:

- local UI state with `useState`
- derived data with `useMemo`
- browser lifecycle effects with `useEffect`

Do not:

- introduce class components
- add global state for local UI state
- add Redux/Zustand unnecessarily
- duplicate derived state

If state is only needed by one section, keep it local.

---

# 24. Data vs Presentation

Keep content/data separate from presentation.

Good:

```tsx
projects.map(...)
```

with content in:

```text
src/lib/projects.ts
```

Avoid hard-coding repeated project metadata into JSX.

For new repeated content, create typed data structures in `src/lib` where appropriate.

---

# 25. Accessibility

Every new interactive element must be keyboard accessible.

Requirements:

- visible focus state
- semantic buttons for actions
- anchors for navigation
- `aria-label` where icon-only buttons need context
- meaningful image alt text
- dialog semantics for modals
- Escape handling where applicable
- reduced motion support

Never use a clickable `<div>` when a `<button>` or `<a>` is semantically appropriate.

---

# 26. SEO / Metadata

The root route and index route already define metadata.

When adding a new route:

- provide a meaningful title
- provide a description
- add relevant Open Graph metadata if appropriate

Do not remove existing metadata.

---

# 27. Routing Rules

Routes live under:

```text
src/routes/
```

Use TanStack Router APIs.

Do not manually edit:

```text
src/routeTree.gen.ts
```

If route generation is needed, use the project's normal development/build process.

For internal sections of the existing portfolio, prefer anchor scrolling rather than creating a new route.

---

# 28. Server / Start Files

Treat these as infrastructure:

```text
src/server.ts
src/start.ts
```

Do not modify them for normal UI work.

They contain error handling and CSRF/server middleware.

Only modify them when the task explicitly requires server/runtime behavior.

---

# 29. Error Handling

Existing error utilities include:

```text
src/lib/error-capture.ts
src/lib/error-page.ts
src/lib/lovable-error-reporting.ts
```

Do not remove or bypass existing error handling without a concrete reason.

If introducing new asynchronous behavior:

- handle failures
- avoid unhandled promise rejections
- keep errors observable in development

---

# 30. Dependency Rules

Before adding a dependency:

1. check whether the capability already exists
2. check existing dependencies
3. prefer the existing stack
4. add a package only when it materially reduces complexity

Do not add:

- Bootstrap
- Material UI
- Chakra
- Ant Design
- another icon library
- another animation library
- another router
- another state library

unless explicitly requested.

---

# 31. Formatting

Existing Prettier configuration:

```json
{
  "printWidth": 100,
  "semi": true,
  "singleQuote": false,
  "trailingComma": "all"
}
```

Follow it.

Do not manually format files in a conflicting style.

Run:

```bash
npm run format
```

when formatting the repository is required.

---

# 32. Validation

For meaningful changes, validate with:

```bash
npm run lint
npm run build
```

For local development:

```bash
npm run dev
```

If Bun is used by the environment, use the equivalent Bun command, but do not rewrite package scripts without a reason.

Never claim a change is complete if the build/lint state was not checked when checking was possible.

---

# 33. Safe Change Strategy

For every requested change:

### Step 1 — Inspect

Read the relevant existing component, CSS, data model, and UI primitive.

### Step 2 — Reuse

Identify an existing pattern that is visually/structurally closest.

### Step 3 — Modify minimally

Change only what is necessary.

### Step 4 — Preserve

Do not accidentally change unrelated:

- spacing
- typography
- animations
- breakpoints
- navigation
- data
- accessibility

### Step 5 — Validate

Run lint/build when appropriate.

### Step 6 — Review responsive behavior

Check desktop + tablet + mobile.

---

# 34. UI Change Rules

When asked to "redesign" or "improve" a section, interpret that as:

> Improve the requested section while maintaining the portfolio's existing visual identity.

Do NOT interpret it as:

> Replace the entire visual system with a new design.

Unless the user explicitly requests a complete redesign, preserve:

- dark editorial aesthetic
- Manrope typography
- violet/red accent
- thin borders
- large headings
- generous whitespace
- subtle motion
- existing container widths
- existing responsive breakpoints

---

# 35. "Same as Existing" Rule

If the user says:

- "same design"
- "match existing"
- "follow current UI"
- "make it consistent"
- "same structure"
- "optimize according to existing code"

then the agent MUST first inspect the closest existing implementation and reuse:

- class naming style
- spacing scale
- colors
- typography
- button variant
- icon treatment
- responsive breakpoint
- animation behavior

Do not invent a new style before inspecting the current implementation.

---

# 36. Refactoring Rules

Refactoring is allowed only when it improves maintainability without changing behavior.

Good candidates:

- extracting repeated components
- extracting repeated data
- reducing duplicated event handlers
- improving type safety
- splitting an excessively large component

Do not perform opportunistic rewrites while solving an unrelated UI task.

Avoid changing many files when one or two files are sufficient.

---

# 37. Component Extraction Guidance

`Portfolio.tsx` currently contains many logical components.

If it becomes difficult to maintain, components may be extracted into:

```text
src/components/
```

Suggested future organization:

```text
src/components/
├── Portfolio.tsx
├── portfolio/
│   ├── Preloader.tsx
│   ├── CustomCursor.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Work.tsx
│   ├── CaseStudy.tsx
│   ├── AISection.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   └── Contact.tsx
└── ui/
```

Do not force this extraction for a small change.

---

# 38. Performance Rules

Preserve:

- lazy loading for below-the-fold images
- local optimized WebP assets
- CSS-based decorative effects
- minimal JavaScript for visual effects

Avoid:

- large unoptimized images
- unnecessary re-renders
- expensive scroll listeners
- continuously running JS animations
- duplicate asset loading

When adding scroll behavior, prefer passive listeners where applicable and clean them up.

---

# 39. Mobile Rules

Never hide important content merely to make mobile easier.

Mobile should retain:

- project information
- CTA actions
- case study access
- navigation
- contact information
- accessibility

Decorative-only elements may be reduced or disabled.

The custom cursor is one such desktop-only decoration.

---

# 40. Security Rules

Do not introduce:

- unsafe HTML rendering
- arbitrary script injection
- hard-coded secrets
- API keys in source code
- credentials in project files

External links should use:

```tsx
target = "_blank";
rel = "noreferrer";
```

when opening in a new tab, matching existing project behavior.

---

# 41. Generated / Protected Files

Do not manually edit generated files:

```text
src/routeTree.gen.ts
```

Treat lockfiles as package-manager generated artifacts.

Do not rewrite Git history.

The repository may be connected to Lovable. Preserve existing commit history and avoid force-push/rebase/amend/squash operations on published history.

---

# 42. Agent Communication Rules

When completing a coding task, report:

1. What changed
2. Files changed
3. Any important architectural decision
4. Validation performed
5. Any remaining limitation

Keep the explanation concise and technical.

Do not claim:

- "pixel perfect"
- "fully tested"
- "production ready"

unless the relevant validation was actually performed.

---

# 43. Final Quality Checklist

Before finishing a UI implementation, verify:

- [ ] Existing design language preserved
- [ ] Existing CSS variables reused
- [ ] Manrope retained
- [ ] Existing container system reused
- [ ] Existing button primitives reused
- [ ] Lucide icons used
- [ ] No unnecessary dependencies added
- [ ] Responsive behavior implemented
- [ ] Mobile checked
- [ ] Keyboard accessibility preserved
- [ ] Images have useful alt text
- [ ] No generated route file manually edited
- [ ] No unrelated files changed
- [ ] TypeScript errors addressed
- [ ] ESLint checked where appropriate
- [ ] Build checked where appropriate
- [ ] Existing animations preserved unless intentionally changed
- [ ] `prefers-reduced-motion` respected

---

# 44. Golden Rule

**Do not make the project look like the agent's preferred design. Make the agent's changes look like they were originally designed as part of this project.**
