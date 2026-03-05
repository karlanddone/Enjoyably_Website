# Specifications Document (specs.md) - Enjoyably Main Website

## 1. Product Overview
The `enjoyably.app` main website is the marketing showcase and global navigation hub for the Enjoyably software ecosystem. The ecosystem transforms raw content into polished educational material across three distinct vectors:
- **YouTube Content Generation** (`ytc.enjoyably.app`)
- **Course Generation** (`courses.enjoyably.app`)
- **Internal Training Generation** (`internal.enjoyably.app`)

## 2. Target Audience
Creators, educators, business trainers, and content marketers looking to automate the conversion of their knowledge into structured, engaging formats.

## 3. Aesthetic Guidelines (2026 Standards)
- **Visual Impact**: Instantly recognizable modern SaaS aesthetic. "Dark mode first" layout to reduce eye strain and feel premium.
- **Color Palette**:
  - **Deep Gray** (`#1F2937`): Primary UI background
  - **Soft Gray** (`#F9FAFB`): Primary text on dark backgrounds
  - **Pure White** (`#FFFFFF`): High-contrast text and icons
  - **Mid Gray** (`#6B7280`): Secondary text, descriptions
  - **Light Gray** (`#E5E7EB`): Borders and dividers (for lighter theme variants/subtle borders)
  - **Energy Teal** (`#14B8A6`): Primary action color (buttons, highlights, logos)
  - **Wisdom Indigo** (`#4F4F6E5`): Core brand secondary accent
  - **Optimistic Yellow** (`#F59E0B`): Secondary accent (used sparingly for 'spark' moments)
  - **Lighter Modal/Card BG** (`#374151`)
- **Typography**: `Inter` font family everywhere.
  - Headings: Bold/Semi-bold
  - UI Elements: Medium
  - Body: Regular
- **Styling Details**: Glassmorphism (subtle backdrop blurs, semi-transparent borders), smooth hover micro-animations, fast interactive feedback.
- **Brand Voice & Tone**: "The Knowledgeable Guide" (Clear, Supportive, Knowledgeable, Empowering, Optimistic, Human). Avoid robotic, vague, or overly-technical language.

## 4. Key Pages & Sections

### Single Page Application (Home)
1. **Global Navigation Bar**
   - Logo
   - Anchor links: Features, Apps, Pricing
   - CTA: "Get Started" or "Login"
2. **Hero Section**
   - Bold, animated headline: *e.g., "Transform Your Knowledge into Experiences."*
   - Subheadline explaining the AI content conversion engine.
   - Primary Call to Action.
   - Visual element (abstract 3D graphic, dashboard mockup, or code-generated animation).
3. **The Enjoyably Ecosystem (App Gateway)**
   - Interactive UI cards linking to the 3 main sub-apps.
   - Each card must visually depict the flavor of the specific application and contain explicit outbound links to `ytc.`, `courses.`, and `internal.` subdomains.
4. **How It Works (Features)**
   - 3-step visualization: Input Content -> AI Processing -> Export Format.
5. **Global Footer**
   - Sitemap, privacy policy, terms, copyright.

## 5. Technical Requirements
- Built in the existing Turborepo `apps/main-website`.
- Framework: React 19 + Vite + TypeScript.
- Styling: Tailwind CSS v4 using centralized `@theme` tokens.
- Shared UI components mapped to `@repo/ui`.
- All code heavily tested using established TDD workflow constraints.
