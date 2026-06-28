---
name: Friends & Fries Cafe
description: Ankleshwar's favorite hangout — bold, warm, social cafe website
colors:
  primary: "#D4380D"
  accent: "#FAAD14"
  neutral-bg: "#0D0D0D"
  neutral-surface: "#1A1A1A"
  neutral-text: "#F5F5F5"
  neutral-muted: "#888888"
  neutral-border: "#2A2A2A"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(2rem, 10vw, 5rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.02em"
    textTransform: "uppercase"
  heading:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.1em"
    textTransform: "uppercase"
rounded:
  sm: "4px"
  md: "6px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-text}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    fontWeight: 500
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.neutral-text}"
    border: "1px solid {colors.neutral-text}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    fontWeight: 500
  card-menu:
    backgroundColor: "{colors.neutral-surface}"
    rounded: "{rounded.md}"
    padding: "20px"
  input-field:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.neutral-text}"
    border: "1px solid {colors.neutral-border}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
  nav-link:
    color: "{colors.neutral-muted}"
    fontFamily: "Inter, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 500
    letterSpacing: "0.1em"
    textTransform: "uppercase"
---

# Design System: Friends & Fries Cafe

## 1. Overview

**Creative North Star: "The Ankleshwar Living Room"**

Friends & Fries Cafe is a digital storefront that feels like walking into the warmest corner of Ankleshwar — bold typography, fiery orange accents against near-black surfaces, and a golden glow that signals good food and better company. The design is unapologetically bold: big display type, strong contrast, asymmetrical layouts that never default to center. It's a local joint, not a chain — and every pixel says so.

This system explicitly rejects corporate fast-food aesthetics, purple/blue gradients, centered hero layouts, and card-in-card nesting. It embraces darkness as a canvas (#0D0D0D background) and uses #D4380D red-orange and #FAAD14 gold as deliberate accents, not decorative color washes.

**Key Characteristics:**
- Dark, high-contrast canvas with fiery accent colors
- Oversized, tight-set display typography (Space Grotesk 900)
- Asymmetrical, off-center layouts throughout
- Tactile card components with hover reveals
- Smooth, choreographed scroll reveals and page transitions
- Local pride — Ankleshwar is referenced in the hero, footer, and reviews badge

## 2. Colors: The Fire & Gold Palette

A dark canvas punctuated by a fiery red-orange and warm gold. The palette is intentionally limited — two accent colors, four neutrals — creating a signature look that's unmistakable at any distance.

### Primary
- **Fiery Red-Orange** (#D4380D): The brand's soul. Used for CTAs, accent borders, active tab states, Chef's Pick badges, and the ticker strip. Never diluted or gradient-blended.

### Accent
- **Golden Yellow** (#FAAD14): The warmth signal. Used for star ratings, price tags, the Google Maps rating badge, and active nav link color. Appears in smaller, deliberate doses.

### Neutral
- **Near Black** (#0D0D0D): The canvas. Background for all pages. Creates the dark, confident stage.
- **Surface Dark** (#1A1A1A): Card and surface backgrounds. Lighter than the canvas but still deep.
- **White-Off** (#F5F5F5): Primary text and headings. High contrast against the dark canvas.
- **Muted Gray** (#888888): Secondary text, descriptions, nav links at rest.
- **Border Subtle** (#2A2A2A): Dividers, border lines, input strokes.

### Named Rules
**The Rarity Rule.** The primary accent (#D4380D) is used on no more than 15% of any given viewport. Its impact depends on its scarcity. The ticker strip is the one exception.

**The No-Gradient Rule.** Gradients on text, buttons, or backgrounds are prohibited. Every color is a solid fill. Emphasis comes from weight, size, and placement.

## 3. Typography

**Display Font:** Space Grotesk (900, uppercase)
**Body Font:** Inter (400, 500)

**Character:** A geometric sans-serif with attitude meets a clean, readable workhorse. Space Grotesk at 900 weight, tight tracking, and uppercase carries all the personality — it's loud, confident, and unapologetic. Inter steps in for body copy and labels, staying quietly legible at small sizes.

### Hierarchy
- **Display** (900, clamp(2rem, 10vw, 5rem), 0.9 line-height, -0.02em letter-spacing, uppercase): Hero headlines and section titles. Short, punchy, never wraps more than two lines.
- **Heading** (700, 2rem, 1.2 line-height): Section subheadings, menu category headers, card titles.
- **Title** (600, 1rem, 1.2): Menu item names, feature card titles.
- **Body** (400, 1rem, 1.7): All paragraph text. Capped at 55ch max-width. Color #888888 on dark backgrounds (6.5:1 contrast).
- **Label** (500, 0.75rem, 0.1em letter-spacing, uppercase): Form labels, nav links, badges, meta text.

### Named Rules
**The No-Inter-On-Headings Rule.** Inter is never used for headings or display type. Space Grotesk owns every headline role. Inter owns body, labels, and navigation. No crossover.

## 4. Elevation

The system uses soft shadows for depth — surfaces lift subtly on hover and interaction rather than remaining flat. The base state is flat (no shadow on cards at rest), and elevation is a response to user attention.

### Shadow Vocabulary
- **Card Hover** (`0 8px 24px rgba(0,0,0,0.4)`): Used on menu card popups and hover tooltips. Creates a floating effect above the surface.
- **Tooltip/Popup** (`0 8px 24px rgba(0,0,0,0.4)`): Same shadow applied to the menu item hover popup.

### Named Rules
**The Flat-At-Rest Rule.** Cards, buttons, and surfaces have no shadow in their default state. Elevation is earned through interaction — hover, focus, or active states only.

## 5. Components

### Buttons
- **Shape:** Slightly squared corners (4px radius). No pill shapes except category tabs and rating badge.
- **Primary:** Background #D4380D, text white, padding 12px 24px. Hover: scale(1.03), background darkens to #B33000.
- **Secondary:** Border 1px solid white, text white, transparent background. Hover: scale(1.03).
- **Transition:** 200ms ease on all state changes.

### Menu Cards
- **Shape:** 6px border-radius. 20px padding.
- **Background:** #1A1A1A at rest, #222222 on hover.
- **Hover treatment:** Left border 3px solid #D4380D appears. Popup tooltip rises above with dish image, name, description, and Chef's Pick badge.
- **Internal layout:** Flex space-between for name + price (right-aligned, #FAAD14). Description below in #888888, truncated.

### Input Fields
- **Style:** Background #1A1A1A, border 1px solid #333333, text #F5F5F5, 4px border-radius.
- **Focus:** Border shifts to #D4380D, no outline.
- **Error:** Border shifts to #D4380D, error message appears below in same color.
- **Padding:** 12px 16px. Labels above in uppercase, #888888, 0.75rem.

### Navigation
- **Style:** Fixed top, full width. Transparent background on hero, solid #0D0D0D + bottom border after 80px scroll. Transition 300ms.
- **Typography:** Inter 500, 0.85rem, uppercase, tracking-widest. Color #888888 at rest, #F5F5F5 on hover, #FAAD14 when active.
- **Mobile:** Hamburger (Lucide Menu icon) opens full-screen dark overlay with staggered link entries (0.05s delay each).
- **No CTA button** in the navbar.

### Category Tabs (Menu Page)
- **Style:** Pill-shaped (9999px radius), transparent background with 1px solid #333 border.
- **Active:** Background #D4380D, border matches, text white.
- **Hover/Inactive:** Text #888888, no background change.

### Chef's Pick Badge
- **Style:** Small inline pill, background #D4380D, text white, 0.65rem, uppercase, letter-spacing 0.05em.
- **Position:** Below item description on card; inside popup tooltip as orange pill.

### Rating Badge (Hero)
- **Style:** Pill shape, border #FAAD14, text #FAAD14. Contains Google "G" logo SVG, rating, reviews count.
- **Interaction:** Clickable, opens Google Maps in new tab.

## 6. Do's and Don'ts

### Do:
- **Do** use #D4380D sparingly — it's the accent, not the canvas. The Rarity Rule applies.
- **Do** keep body text at #888888 minimum on #0D0D0D for 6.5:1 contrast.
- **Do** use Space Grotesk 900 uppercase for all display/hero text. Tight letter-spacing (-0.02em) is intentional.
- **Do** keep layouts asymmetrical — no centered heroes, no equal-column grids for feature sections.
- **Do** use object-fit cover on all images with overflow-hidden containers.
- **Do** animate with easeOut timing and keep durations between 0.2s and 0.6s.
- **Do** use scroll reveals on section entrances with whileInView.
- **Do** stagger child elements when animating lists (0.05-0.15s delays).

### Don't:
- **Don't** use centered hero layouts or equal-column grids.
- **Don't** use card-in-card nesting.
- **Don't** use purple or blue gradients anywhere.
- **Don't** use emoji in headings or navigation.
- **Don't** use Inter as a heading font — Space Grotesk owns all headline roles.
- **Don't** use ghost cards (cards with just a border and no fill).
- **Don't** use bounce easing on any animation.
- **Don't** use gradient text (`background-clip: text` decoration).
- **Don't** animate CSS layout properties (width, height, top, left) — use transform/opacity only.
- **Don't** use side-stripe borders greater than 1px as a colored accent on cards.
- **Don't** use the hero-metric template (big number, small label, supporting stats).
- **Don't** prefix every section with a tiny uppercase tracked eyebrow ("ABOUT" / "MENU" / "GALLERY").
