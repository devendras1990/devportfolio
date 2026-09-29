# Antigravity Agent Setup

This package contains project-specific instructions for the portfolio repository.

## Files

```text
AGENTS.md
.agent/
└── skills/
    └── portfolio-ui/
        └── SKILL.md
```

## Installation

Copy these files into the project root:

```text
portfolio/
├── AGENTS.md
└── .agent/
    └── skills/
        └── portfolio-ui/
            └── SKILL.md
```

If the repository already has an `AGENTS.md`, merge the rules instead of blindly replacing project-specific instructions.

## What the instructions enforce

- Existing UI is the source of truth.
- Existing `src/styles.css` is the canonical visual system.
- Existing shadcn/Radix components should be reused.
- TanStack Start and TanStack Router must be preserved.
- Project content stays data-driven through `src/lib/projects.ts`.
- Existing breakpoints are preserved.
- Existing animations and reduced-motion behavior are preserved.
- No unnecessary UI libraries or dependencies are introduced.
- UI redesigns must remain visually native to the current portfolio.
- Generated `src/routeTree.gen.ts` must not be edited manually.
- Lint/build validation is expected for meaningful changes.

## Project-specific visual identity

The current portfolio is:

- dark editorial
- Manrope typography
- violet primary accent
- violet → red gradient
- thin borders
- large display typography
- generous spacing
- subtle ambient effects
- restrained motion
- product-design focused

The agent should extend this system rather than replace it.
