# BotLeague — India's Ultimate Robotics Arena

A production-ready landing page for BotLeague, a national robotics competition platform, built with React 19, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (typically `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── components/
│   ├── ui/                 # Reusable primitives (Button, SectionHeading, CornerFrame)
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Competitions.tsx
│   ├── Journey.tsx
│   ├── About.tsx
│   ├── Categories.tsx
│   ├── Disciplines.tsx
│   ├── Benefits.tsx
│   ├── Ecosystem.tsx
│   ├── EcosystemFormCard.tsx
│   ├── Sponsors.tsx
│   └── Footer.tsx
├── data/
│   └── mockData.ts         # All section content, typed
├── types/
│   └── index.ts            # Shared TypeScript interfaces
├── assets/
├── index.css
├── App.tsx
└── main.tsx
```

## Design system

| Token | Value |
|---|---|
| Primary background | `#0A0A0A` |
| Secondary background | `#111111` |
| Card background | `#161616` |
| Border | `#262626` |
| Primary red | `#FF4D4D` |
| Blue accent | `#2D5BFF` |
| Text white | `#FFFFFF` |
| Text gray | `#B0B0B0` |

Typography: **Rajdhani** (display/headings), **Inter** (body), **JetBrains Mono** (data, eyebrows, stats — the scoreboard voice).

Signature element: a viewfinder-style corner-bracket frame (`CornerFrame`), echoing the broadcast/HUD language of a live competition arena, used consistently across event, discipline, and feature cards.

## Notes

- All imagery is sourced from Unsplash as placeholders — swap in real photography before launch.
- The three Ecosystem signup forms (Judge / Volunteer / Community) run full client-side validation; no backend is wired up, so submissions only show a local success state.
- Respects `prefers-reduced-motion` and includes visible keyboard focus states throughout.
