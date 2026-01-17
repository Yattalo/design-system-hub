---
name: apply-theme
description: Apply a theme profile to a target project
triggers:
  - /apply-theme
  - /switch-theme
  - "apply theme"
  - "switch theme"
context: fork
agent: design-system-agent
allowed-tools:
  - Read
  - Write
  - Edit
  - Bash(bun *)
---

# Apply Theme

Switch or apply a theme variant to a target project.

## Parameters

- `theme` (required): Theme name (vega | nova | maia | lyra | mira)
- `target` (optional): Target project path (default: current directory)

## Usage

```
/apply-theme vega
/apply-theme nova --target ../my-app
```

## Available Themes

### Vega (Modern, High-Contrast)
- **Primary**: Deep blue (#3b82f6)
- **Style**: Sharp edges, bold shadows
- **Radius**: 0.375rem
- **Best for**: Enterprise dashboards, admin panels

### Nova (Soft, Warm)
- **Primary**: Warm orange (#f97316)
- **Style**: Rounded corners, smooth transitions
- **Radius**: 1rem
- **Best for**: Consumer apps, friendly interfaces

### Maia (Minimal, Monochrome)
- **Primary**: Pure black (#171717)
- **Style**: Clean lines, no color distractions
- **Radius**: 0.25rem
- **Best for**: Documentation, content-focused sites

### Lyra (Vibrant, Colorful)
- **Primary**: Purple (#8b5cf6) with pink accent
- **Style**: Gradients, shadows with color
- **Radius**: 0.5rem
- **Best for**: Marketing, creative applications

### Mira (Classic, Corporate)
- **Primary**: Navy blue (#1e3a5f)
- **Style**: Professional, conservative
- **Radius**: 0.375rem
- **Best for**: Business applications, finance

## Process

### Step 1: Install Theme Package

```bash
cd {target}
bun add @crazyone/ui-{theme}
```

### Step 2: Configure Tailwind

Update target's `tailwind.config.ts`:

```typescript
export default {
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@crazyone/ui-{theme}/dist/**/*.js'
  ],
  // Theme extends from CSS variables set in styles
}
```

### Step 3: Import Theme Styles

Add to main CSS file (e.g., `globals.css`):

```css
@import '@crazyone/ui-{theme}/styles.css';
```

### Step 4: Update Component Imports

Replace existing shadcn imports with themed variants:

```typescript
// Before
import { Button } from "@/components/ui/button"

// After
import { Button } from "@crazyone/ui-{theme}"
```

## Verification

After applying, verify:
- [ ] CSS variables are loaded (check `--primary` in devtools)
- [ ] Components render with correct styling
- [ ] Dark mode toggle works (if applicable)
