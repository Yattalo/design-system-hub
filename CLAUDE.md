# Design System Hub

Centralized monorepo for @crazyone themed UI components built on shadcn/ui.

## Quick Start

```bash
bun install                    # Install dependencies
bun run build                  # Build all packages
bun run dev                    # Start dev mode (watch)
cd apps/storybook && bun run storybook  # Run Storybook on port 6006
```

## Package Manager

Use **bun** for all operations:
- `bun install` - Install dependencies
- `bun run <script>` - Run scripts
- `bunx <package>` - Execute packages

## Architecture

```
packages/
├── ui-core/           # Shared utilities (cn, hooks, types)
│
├── ui-brutalist/      # Raw concrete, harsh shadows, anti-design
├── ui-vaporwave/      # 80s nostalgia, gradients, retro terminals
├── ui-cyberdeck/      # Terminal aesthetic, green phosphor
├── ui-hologram/       # Translucent layers, prismatic effects
├── ui-bubblegum/      # Playful Y2K, bouncy, candy colors
│
├── ui-obsidian/       # Glass morphism, volcanic glow
├── ui-campfire/       # Flickering flames, ember warmth
├── ui-bauhaus/        # Strict geometry, primary colors
├── ui-arctic/         # Ice crystals, aurora gradients
├── ui-terracotta/     # Clay textures, Mediterranean warmth
├── ui-gelato/         # Soft scoops, creamy Italian pastels
│
├── ui-synthwave/      # Intense neon, grid perspective, chrome
├── ui-darkroom/       # Film grain, red safelight, vignette
├── ui-thunderstorm/   # Lightning flashes, electric crackle
├── ui-retrofuture/    # Atomic age, orbit animations, starbursts
├── ui-greenhouse/     # Leaf patterns, organic growth
│
├── ui-wireframe/      # Blueprint overlays, hand-drawn
├── ui-nightclub/      # Strobe effects, bass pulse, VIP
├── ui-bioluminescent/ # Deep sea glow, jellyfish pulses
└── ui-blackletter/    # Gothic illuminated manuscripts

apps/
├── showcase/          # Demo app for visual testing
└── storybook/         # Component playground (port 6006)

registry/              # shadcn registry JSON files
scripts/               # Build scripts
```

## Storybook

Storybook provides an interactive playground for all themed components.

### Running Storybook

```bash
cd apps/storybook
bun run storybook      # Opens at http://localhost:6006
```

### Structure

```
apps/storybook/
├── .storybook/
│   ├── main.ts        # Storybook config
│   └── preview.tsx    # Global decorators, theme imports
├── stories/
│   ├── brutalist/
│   │   ├── Button.stories.tsx
│   │   └── Card.stories.tsx
│   ├── vaporwave/
│   │   └── ...
│   └── {theme}/       # One folder per theme
└── package.json       # Theme dependencies
```

### Adding a Theme to Storybook

1. Add dependency in `apps/storybook/package.json`:
   ```json
   "@crazyone/ui-{theme}": "workspace:*"
   ```

2. Import CSS in `.storybook/preview.tsx`:
   ```ts
   import "@crazyone/ui-{theme}/styles.css";
   ```

3. Create stories in `stories/{theme}/`:
   ```tsx
   import { Button } from "@crazyone/ui-{theme}";

   const meta: Meta<typeof Button> = {
     title: "{Theme}/Button",
     component: Button,
   };
   ```

### Currently in Storybook

- Brutalist (Button, Card)
- Vaporwave (Button, Card)
- Cyberdeck (Button, Card)
- Hologram (Button, Card)
- Bubblegum (Button, Card)

## Available Skills

- `/create-component <name>` - Create a new component across all themes
- `/apply-theme <theme>` - Apply a theme to a project
- `/new-layout <name>` - Create a layout template
- `/publish-ui` - Version and publish packages

## Key Files

| File | Purpose |
|------|---------|
| `components.json` | shadcn CLI configuration |
| `.mcp.json` | MCP shadcn server config |
| `turbo.json` | Build pipeline config |
| `.changeset/config.json` | Versioning config |

## Component Conventions

- All components use `cn()` from `@crazyone/ui-core`
- Use `class-variance-authority` for variants
- Export both component and variants type
- CSS variables follow `--{token}` pattern
- Animations in `src/styles/animations.css`

## Theme Package Structure

Each theme package follows this structure:

```
packages/ui-{theme}/
├── src/
│   ├── components/
│   │   ├── button.tsx      # CVA variants + animations
│   │   ├── card.tsx        # Styled container
│   │   └── ...
│   ├── styles/
│   │   ├── globals.css     # CSS variables, base styles
│   │   └── animations.css  # @keyframes + utility classes
│   └── index.ts            # Public exports
├── package.json
└── tsconfig.json
```

## Adding Components

1. Use MCP shadcn or run: `bunx shadcn@latest add <component>`
2. Copy to each theme package
3. Apply theme-specific styling in the component
4. Add animations to `animations.css` if needed
5. Update exports in `src/index.ts`
6. Run `bun run build:registry` to update registry

## Theme Categories

| Category | Themes | Aesthetic |
|----------|--------|-----------|
| Flagship | brutalist, vaporwave, cyberdeck, hologram, bubblegum | Fully realized, complex animations |
| Elemental | obsidian, campfire, arctic, thunderstorm | Nature-inspired, atmospheric |
| Retro | synthwave, retrofuture, darkroom | Nostalgic, period-specific |
| Organic | terracotta, gelato, greenhouse, bioluminescent | Natural textures, soft shapes |
| Typography | blackletter, wireframe | Font-focused, structural |
| Nightlife | nightclub | Dark, high-energy, pulsing |
| Geometric | bauhaus | Strict shapes, primary colors |
