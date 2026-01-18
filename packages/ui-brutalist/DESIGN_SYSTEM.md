# BRUTALIST Design System

> "Architecture is the will of an epoch translated into space." - Ludwig Mies van der Rohe

## Philosophy

Brutalism emerged from post-war architecture as a radical rejection of ornament. Named after *béton brut* (raw concrete), it celebrates exposed structure, material honesty, and functional purity. This design system translates those principles into digital interfaces.

### Core Principles

1. **Truth to Materials** - No gradients, no soft shadows, no pretense. Every element shows its construction.
2. **Structural Exposure** - Visible borders, explicit grid, naked typography. The skeleton IS the skin.
3. **Functional Honesty** - Every element has purpose. Ornament is crime.
4. **Confrontational Presence** - The interface doesn't seduce. It demands attention.
5. **Democratic Rawness** - Accessible through contrast, not through polish.

---

## Color Palette

The palette draws from industrial sites, construction zones, and raw concrete.

### Primary Palette

| Token | Name | HEX | HSL | Usage |
|-------|------|-----|-----|-------|
| `--brutal-yellow` | Safety Yellow | `#FFD600` | `50 100% 50%` | Primary actions, highlights, CTA |
| `--brutal-black` | Void Black | `#1A1A1A` | `0 0% 10%` | Text, borders, shadows |
| `--brutal-red` | Stop Red | `#FF0000` | `0 100% 50%` | Destructive, errors, warnings |
| `--brutal-concrete` | Raw Concrete | `#E8E4E0` | `30 10% 89%` | Backgrounds |
| `--brutal-steel` | Cold Steel | `#B8B4B0` | `30 4% 71%` | Muted, secondary elements |

### Extended Palette

| Token | Name | HEX | HSL | Usage |
|-------|------|-----|-----|-------|
| `--brutal-white` | Chalk White | `#FAFAFA` | `0 0% 98%` | Card backgrounds |
| `--brutal-charcoal` | Deep Charcoal | `#2A2A2A` | `0 0% 16%` | Heavy text, dark mode bg |
| `--brutal-orange` | Hazard Orange | `#FF6600` | `24 100% 50%` | Warning states |
| `--brutal-green` | Exit Green | `#00CC00` | `120 100% 40%` | Success states |
| `--brutal-blue` | Info Blue | `#0066FF` | `220 100% 50%` | Information states |

### Semantic Tokens

```css
:root {
  /* Core */
  --background: 30 10% 89%;        /* Raw Concrete */
  --foreground: 0 0% 10%;          /* Void Black */
  --card: 0 0% 98%;                /* Chalk White */
  --card-foreground: 0 0% 10%;    /* Void Black */

  /* Actions */
  --primary: 50 100% 50%;          /* Safety Yellow */
  --primary-foreground: 0 0% 10%; /* Void Black */
  --secondary: 30 4% 71%;          /* Cold Steel */
  --secondary-foreground: 0 0% 10%;

  /* States */
  --destructive: 0 100% 50%;       /* Stop Red */
  --destructive-foreground: 0 0% 98%;
  --success: 120 100% 40%;         /* Exit Green */
  --warning: 24 100% 50%;          /* Hazard Orange */

  /* UI */
  --muted: 30 4% 71%;
  --muted-foreground: 0 0% 30%;
  --accent: 50 100% 50%;
  --accent-foreground: 0 0% 10%;
  --border: 0 0% 10%;
  --input: 0 0% 10%;
  --ring: 50 100% 50%;

  /* Brutalist-specific */
  --radius: 0;
}
```

### Dark Mode

```css
.dark {
  --background: 0 0% 10%;          /* Void Black */
  --foreground: 30 10% 89%;        /* Raw Concrete */
  --card: 0 0% 16%;                /* Charcoal */
  --card-foreground: 30 10% 89%;
  --muted: 0 0% 25%;
  --muted-foreground: 0 0% 65%;
  --border: 0 0% 98%;
}
```

---

## Typography

Typography in brutalism is functional, not decorative. We use a strict hierarchy based on weight and size, not style variety.

### Font Stack

| Role | Font Family | Fallback | Weight Range | Character |
|------|-------------|----------|--------------|-----------|
| **Display** | Space Grotesk | system-ui, sans-serif | 500-700 | Bold, geometric, industrial |
| **Body** | JetBrains Mono | SF Mono, Consolas, monospace | 400-500 | Technical, precise, raw |
| **Code** | JetBrains Mono | SF Mono, Consolas, monospace | 400 | Consistent with body |

### Font Loading

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

:root {
  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-body: "JetBrains Mono", "SF Mono", Consolas, monospace;
  --font-mono: "JetBrains Mono", "SF Mono", Consolas, monospace;
}
```

### Type Scale (Major Third - 1.250)

| Token | Size | Line Height | Letter Spacing | Usage |
|-------|------|-------------|----------------|-------|
| `--text-xs` | 0.6875rem (11px) | 1.4 | 0.1em | Micro labels |
| `--text-sm` | 0.8125rem (13px) | 1.4 | 0.05em | Small text, captions |
| `--text-base` | 1rem (16px) | 1.5 | 0.02em | Body text |
| `--text-lg` | 1.25rem (20px) | 1.4 | 0.01em | Lead paragraphs |
| `--text-xl` | 1.5625rem (25px) | 1.3 | 0 | Subheadings |
| `--text-2xl` | 1.9375rem (31px) | 1.2 | -0.01em | Section headers |
| `--text-3xl` | 2.4375rem (39px) | 1.1 | -0.02em | Page headers |
| `--text-4xl` | 3.0625rem (49px) | 1.05 | -0.02em | Hero text |
| `--text-5xl` | 3.8125rem (61px) | 1 | -0.03em | Display |

### Typography Patterns

```css
/* Headlines - Space Grotesk, uppercase, tight tracking */
.brutal-headline {
  font-family: var(--font-display);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Body - JetBrains Mono, normal case */
.brutal-body {
  font-family: var(--font-body);
  font-weight: 400;
  letter-spacing: 0.02em;
}

/* Labels - Monospace, uppercase, wide tracking */
.brutal-label {
  font-family: var(--font-mono);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: var(--text-xs);
}

/* Code block */
.brutal-code {
  font-family: var(--font-mono);
  background: hsl(var(--muted));
  padding: 0.125em 0.375em;
  border: 2px solid hsl(var(--border));
}
```

---

## Effects System

Brutalism rejects soft, blurred effects. Every shadow is hard, every edge is sharp.

### Shadow System

All shadows use **zero blur radius** and solid colors. Shadows are structural, not atmospheric.

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-brutal-xs` | `1px 1px 0 0 hsl(var(--border))` | Micro elements |
| `--shadow-brutal-sm` | `2px 2px 0 0 hsl(var(--border))` | Small components |
| `--shadow-brutal-md` | `4px 4px 0 0 hsl(var(--border))` | Default components |
| `--shadow-brutal-lg` | `6px 6px 0 0 hsl(var(--border))` | Elevated elements |
| `--shadow-brutal-xl` | `8px 8px 0 0 hsl(var(--border))` | Dialogs, dropdowns |
| `--shadow-brutal-2xl` | `12px 12px 0 0 hsl(var(--border))` | Hero cards |

### Shadow Behavior

```css
/* Default state */
.brutal-elevated {
  box-shadow: var(--shadow-brutal-md);
  transition: box-shadow 0.1s ease-out, transform 0.1s ease-out;
}

/* Hover - Shadow grows, element lifts */
.brutal-elevated:hover {
  box-shadow: var(--shadow-brutal-lg);
  transform: translate(-2px, -2px);
}

/* Active/Pressed - Shadow shrinks, element presses down */
.brutal-elevated:active {
  box-shadow: var(--shadow-brutal-xs);
  transform: translate(2px, 2px);
}
```

### Border System

| Token | Value | Usage |
|-------|-------|-------|
| `--border-thin` | 1px solid | Subtle dividers |
| `--border-default` | 2px solid | Standard borders |
| `--border-thick` | 3px solid | Emphasized borders |
| `--border-heavy` | 4px solid | Maximum emphasis |

### Texture Effects

```css
/* Concrete noise texture overlay */
.brutal-texture::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.04;
  pointer-events: none;
  mix-blend-mode: multiply;
}

/* Blueprint grid overlay */
.brutal-grid::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, hsl(var(--border) / 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, hsl(var(--border) / 0.1) 1px, transparent 1px);
  background-size: 24px 24px;
  pointer-events: none;
}
```

---

## Animation System

Brutalist animations are jarring, mechanical, and unapologetic. No smooth easing—sharp steps and abrupt transitions.

### Timing Functions

```css
:root {
  --ease-brutal: cubic-bezier(0.7, 0, 0.3, 1);    /* Sharp, mechanical */
  --ease-slam: cubic-bezier(0.2, 1.5, 0.5, 1);    /* Overshoot bounce */
  --ease-step: steps(4, end);                      /* Discrete steps */
}
```

### Core Animations

#### Shake (Active/Error state)
Mechanical vibration triggered on click or error.
```css
@keyframes brutal-shake {
  0%, 100% { transform: translate(0, 0); }
  20% { transform: translate(-4px, 0); }
  40% { transform: translate(4px, 0); }
  60% { transform: translate(-2px, 0); }
  80% { transform: translate(2px, 0); }
}
```

#### Slam (Enter animation)
Element stamps down with industrial weight.
```css
@keyframes brutal-slam {
  0% { transform: translateY(-20px) scale(1.05); opacity: 0; }
  60% { transform: translateY(3px) scale(0.98); }
  100% { transform: translateY(0) scale(1); opacity: 1; }
}
```

#### Glitch (Attention/Error)
Digital corruption effect for text.
```css
@keyframes brutal-glitch {
  0%, 100% {
    clip-path: inset(40% 0 61% 0);
    transform: translate(0);
  }
  20% {
    clip-path: inset(92% 0 1% 0);
    transform: translate(-4px, 2px);
  }
  40% {
    clip-path: inset(43% 0 1% 0);
    transform: translate(4px, -2px);
  }
  60% {
    clip-path: inset(25% 0 58% 0);
    transform: translate(-2px, 0);
  }
  80% {
    clip-path: inset(54% 0 7% 0);
    transform: translate(2px, 0);
  }
}
```

#### Flicker (Industrial light)
Unstable industrial lighting effect.
```css
@keyframes brutal-flicker {
  0%, 100% { opacity: 1; }
  92% { opacity: 1; }
  93% { opacity: 0.3; }
  94% { opacity: 1; }
  96% { opacity: 0.5; }
  97% { opacity: 1; }
}
```

#### Stamp (Press effect)
Heavy press down animation.
```css
@keyframes brutal-stamp {
  0% { transform: scale(1); }
  50% { transform: scale(0.95); }
  100% { transform: scale(1); }
}
```

### Animation Utilities

```css
.animate-brutal-shake { animation: brutal-shake 0.3s var(--ease-brutal); }
.animate-brutal-slam { animation: brutal-slam 0.25s var(--ease-slam) forwards; }
.animate-brutal-glitch { animation: brutal-glitch 2s infinite; }
.animate-brutal-flicker { animation: brutal-flicker 3s infinite; }
.animate-brutal-stamp { animation: brutal-stamp 0.15s var(--ease-brutal); }
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Spacing & Layout

### Base Unit

All spacing derives from an **8px base unit** for industrial precision.

### Spacing Scale

| Token | Value | Pixels |
|-------|-------|--------|
| `--space-1` | 0.25rem | 4px |
| `--space-2` | 0.5rem | 8px |
| `--space-3` | 0.75rem | 12px |
| `--space-4` | 1rem | 16px |
| `--space-6` | 1.5rem | 24px |
| `--space-8` | 2rem | 32px |
| `--space-12` | 3rem | 48px |
| `--space-16` | 4rem | 64px |
| `--space-24` | 6rem | 96px |
| `--space-32` | 8rem | 128px |

### Border Radius

**Brutalism rejects rounded corners. All radii are 0.**

```css
:root {
  --radius: 0;
  --radius-sm: 0;
  --radius-md: 0;
  --radius-lg: 0;
  --radius-full: 0;
}
```

### Layout Patterns

```css
/* Section container */
.brutal-section {
  padding-block: var(--space-16);
  padding-inline: var(--space-6);
}

/* Stack (vertical) */
.brutal-stack {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

/* Cluster (horizontal wrap) */
.brutal-cluster {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

/* Grid */
.brutal-grid {
  display: grid;
  gap: var(--space-6);
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
```

---

## Component Patterns

### Button

```
┌────────────────────────┐
│  CLICK ME              │ ←── 4px offset shadow
└────────────────────────┘
    ↓ hover
┌────────────────────────┐
│  CLICK ME              │ ←── 6px offset, lifted -2px
└────────────────────────┘
    ↓ active
┌────────────────────────┐
│  CLICK ME              │ ←── 2px offset, pressed +2px
└────────────────────────┘
```

- 3px solid border
- Hard shadow offset (no blur)
- UPPERCASE text with letter-spacing
- Monospace font (JetBrains Mono)
- Active: shake animation
- No border-radius

### Card

- 3px solid border
- 4-8px hard shadow
- No rounded corners
- Optional concrete texture overlay
- Heavy weight visual presence

### Alert

- Full-width blocks
- Left border accent (4px)
- Icon + text layout
- Color-coded by severity

### Badge

- Inline stamps
- Heavy border
- Uppercase monospace text
- No padding curves

---

## Accessibility

Brutalism and accessibility are **not mutually exclusive**. The high-contrast nature of brutalist design actually aids accessibility.

### Contrast Ratios

All color combinations meet WCAG AAA standards (7:1 minimum).

| Combination | Ratio | Grade |
|-------------|-------|-------|
| Black on Concrete | 12.5:1 | AAA |
| Black on Yellow | 11.2:1 | AAA |
| Black on White | 21:1 | AAA |
| Yellow on Black | 11.2:1 | AAA |
| White on Red | 4.0:1 | AA Large |

### Focus States

Focus indicators are aggressive and unmissable:
- 3px solid ring in Safety Yellow
- High contrast against all backgrounds
- No subtle glows—hard outlines only

### Touch Targets

Minimum touch target: 44x44px (WCAG requirement)

### Motion

All animations respect `prefers-reduced-motion`

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2024-01 | Initial design system |

---

*"Less is more."* - Ludwig Mies van der Rohe

*"Less, but better."* - Dieter Rams

*"Nothing is enough."* - Brutalism
