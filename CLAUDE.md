# Design System Hub

Centralized monorepo for @acme themed UI components built on shadcn/ui. This project provides five distinct visual themes (Vega, Nova, Maia, Lyra, Mira) that can be applied to any React application.

## Quick Start

```bash
bun install         # Install dependencies
bun run build       # Build all packages
bun run dev         # Start dev mode (watch)
```

## Package Manager

Use **bun** for all operations:
- `bun install` - Install dependencies
- `bun run <script>` - Run scripts
- `bunx <package>` - Execute packages (e.g., `bunx shadcn@latest add button`)

## Architecture

```
design-system-hub/
├── packages/
│   ├── ui-core/           # Shared utilities, hooks, and types
│   │   ├── src/
│   │   │   ├── utils/cn.ts      # Class name merger (clsx + tailwind-merge)
│   │   │   ├── types/index.ts   # Shared TypeScript types
│   │   │   ├── hooks/index.ts   # Shared React hooks
│   │   │   └── index.ts         # Package exports
│   │   └── tsup.config.ts       # Build configuration
│   │
│   ├── ui-vega/           # Modern, high-contrast theme (blue)
│   ├── ui-nova/           # Soft, warm theme (orange, rounded)
│   ├── ui-maia/           # Minimal, monochrome theme (grayscale)
│   ├── ui-lyra/           # Vibrant, colorful theme (purple/pink)
│   └── ui-mira/           # Classic, corporate theme (navy)
│
├── apps/
│   └── showcase/          # Vite + React demo application
│       └── src/App.tsx    # Theme showcase with live switching
│
├── registry/              # shadcn registry JSON files
│   ├── index.json         # Main registry manifest
│   ├── components/        # Per-theme component definitions
│   │   └── {theme}/       # Theme-specific component JSON
│   └── themes/            # Theme style definitions
│       └── {theme}/style.json
│
├── scripts/
│   └── build-registry.ts  # Registry generator script
│
└── .claude/               # Claude Code configuration
    ├── agents/            # Custom agent definitions
    ├── hooks/             # Pre/post tool-use hooks
    └── skills/            # User-invocable skills
```

## Available Skills

Use these slash commands for common workflows:

| Command | Description |
|---------|-------------|
| `/create-component <name>` | Create a new component across all themes |
| `/apply-theme <theme>` | Apply a theme profile to a target project |
| `/new-layout <name>` | Create a layout template |
| `/publish-ui` | Version and publish packages with changesets |

### Skill Examples

```bash
/create-component data-table
/create-component alert-dialog --themes vega,nova
/apply-theme vega
/apply-theme nova --target ../my-app
/new-layout DashboardLayout
/new-layout AuthLayout --sections header,main
/publish-ui --bump minor
```

## Development Commands

| Command | Description |
|---------|-------------|
| `bun install` | Install all workspace dependencies |
| `bun run dev` | Start watch mode for all packages |
| `bun run build` | Build all packages (via Turbo) |
| `bun run build:registry` | Generate registry JSON from components |
| `bun run lint` | Run linting across packages |
| `bun run changeset` | Create a new changeset for versioning |
| `bun run version` | Apply changesets and bump versions |
| `bun run release` | Build and publish packages to npm |

## Key Files

| File | Purpose |
|------|---------|
| `components.json` | shadcn CLI configuration with @acme registry |
| `.mcp.json` | MCP shadcn server configuration |
| `turbo.json` | Turborepo build pipeline |
| `.changeset/config.json` | Changesets versioning config |
| `tailwind.config.ts` | Shared Tailwind configuration |
| `tsconfig.base.json` | Shared TypeScript configuration |

## Theme Packages

Each theme package (`ui-{theme}`) follows the same structure:

```
packages/ui-{theme}/
├── src/
│   ├── components/        # Theme-styled components
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── styles.css         # CSS variables for the theme
│   └── index.ts           # Package exports
├── package.json
└── tsconfig.json
```

### Theme Profiles

| Theme | Primary Color | Style | Use Case |
|-------|---------------|-------|----------|
| **Vega** | Blue (#3b82f6) | Sharp, modern, high-contrast | Enterprise dashboards, admin panels |
| **Nova** | Orange (#f97316) | Soft, rounded, warm | Consumer apps, friendly interfaces |
| **Maia** | Gray (#171717) | Minimal, monochrome | Documentation, content-focused |
| **Lyra** | Purple (#8b5cf6) | Vibrant, gradients | Marketing, creative applications |
| **Mira** | Navy (#1e3a5f) | Corporate, classic | Business applications, finance |

### Theme CSS Variables

Each theme defines these CSS variables in `styles.css`:

```css
:root {
  --background: <hsl>;
  --foreground: <hsl>;
  --card: <hsl>;
  --card-foreground: <hsl>;
  --primary: <hsl>;
  --primary-foreground: <hsl>;
  --secondary: <hsl>;
  --muted: <hsl>;
  --accent: <hsl>;
  --destructive: <hsl>;
  --border: <hsl>;
  --input: <hsl>;
  --ring: <hsl>;
  --radius: <rem>;
}
```

## Component Conventions

### Required Patterns

1. **Always use `cn()` from `@acme/ui-core`** for class merging:
   ```typescript
   import { cn } from "@acme/ui-core";
   ```

2. **Use `class-variance-authority`** for component variants:
   ```typescript
   import { cva, type VariantProps } from "class-variance-authority";

   const buttonVariants = cva("base-classes", {
     variants: {
       variant: { default: "...", secondary: "..." },
       size: { default: "...", sm: "...", lg: "..." },
     },
     defaultVariants: { variant: "default", size: "default" },
   });
   ```

3. **Export both component and variants type**:
   ```typescript
   export interface ButtonProps
     extends React.ButtonHTMLAttributes<HTMLButtonElement>,
       VariantProps<typeof buttonVariants> {
     asChild?: boolean;
   }

   export { Button, buttonVariants };
   ```

4. **Use Radix primitives** for complex components:
   ```typescript
   import { Slot } from "@radix-ui/react-slot";
   ```

### File Naming

- Component files: **kebab-case** (e.g., `button.tsx`, `data-table.tsx`)
- Package names: `@acme/ui-{theme}` pattern
- Enforced by `.claude/hooks/validate-naming.ts`

## Adding Components

### Step 1: Scaffold from shadcn

```bash
bunx shadcn@latest add <component-name>
```

Or use MCP shadcn tools if available.

### Step 2: Distribute to Theme Packages

For each theme (vega, nova, maia, lyra, mira):

1. Copy component to `packages/ui-{theme}/src/components/{name}.tsx`
2. Update imports to use `@acme/ui-core`:
   ```typescript
   import { cn } from "@acme/ui-core";
   ```
3. Apply theme-specific variant styling if needed
4. Update `packages/ui-{theme}/src/index.ts` to export the component

### Step 3: Update Registry

Run the registry build script:

```bash
bun run build:registry
```

This generates JSON files in `registry/components/{theme}/` for each component.

### Step 4: Verify Build

```bash
bun run build
```

## MCP Integration

The project includes MCP (Model Context Protocol) integration with shadcn:

```json
// .mcp.json
{
  "mcpServers": {
    "shadcn": {
      "command": "npx",
      "args": ["shadcn@latest", "mcp"]
    }
  }
}
```

### Available MCP Tools

- `mcp__shadcn__search_items_in_registries` - Search for components
- `mcp__shadcn__view_items_in_registries` - View component details
- `mcp__shadcn__get_item_examples_from_registries` - Get usage examples
- `mcp__shadcn__get_add_command_for_items` - Get CLI add command
- `mcp__shadcn__list_items_in_registries` - List all registry items

### Custom Registry

The `components.json` defines a local `@acme` registry:

```json
{
  "registries": {
    "@acme": "file://./registry/{name}.json"
  }
}
```

## Hooks

### Naming Validation Hook

Located at `.claude/hooks/validate-naming.ts`, this hook enforces:

- Component files must use kebab-case (e.g., `data-table.tsx`)
- Package paths must match `ui-{theme}` pattern
- Valid themes: vega, nova, maia, lyra, mira, core

The hook runs before Write and Edit operations to ensure consistency.

## Agent Configuration

A specialized `design-system-agent` is available for:

- Creating components via MCP shadcn
- Adapting components to themes
- Managing the registry
- Version and publish workflows

## Showcase Application

The `apps/showcase` demo:

- Built with Vite + React
- Uses `motion/react` for animations
- Demonstrates all themes with live switching
- Shows component variants, states, and patterns

Run locally:

```bash
cd apps/showcase
bun run dev
```

## Package Dependencies

### Workspace Protocol

Internal dependencies use `workspace:*`:

```json
{
  "dependencies": {
    "@acme/ui-core": "workspace:*"
  }
}
```

### Common Dependencies

- `@radix-ui/react-*` - Unstyled accessible primitives
- `class-variance-authority` - Variant management
- `clsx` + `tailwind-merge` - Class utilities (via cn)
- `tsup` - Build tool for packages

### Peer Dependencies

Theme packages expect:
- `react` ^18.0.0 || ^19.0.0
- `react-dom` ^18.0.0 || ^19.0.0
- `tailwindcss` ^3.4.0 || ^4.0.0

## Versioning & Publishing

### Create a Changeset

```bash
bun run changeset
```

Select packages, bump type (major/minor/patch), and write summary.

### Apply Versions

```bash
bun run version
```

Updates package.json versions and CHANGELOG.md files.

### Publish

```bash
bun run release
```

Builds and publishes all changed packages to npm.

## Troubleshooting

### Build Errors

```bash
bun install          # Ensure dependencies
bun run build        # Check for TypeScript errors
```

### Component Not Exporting

Verify the component is:
1. In `packages/ui-{theme}/src/components/`
2. Exported in `packages/ui-{theme}/src/index.ts`
3. Built with `bun run build`

### Registry Out of Sync

```bash
bun run build:registry
```

### Hook Blocking Changes

The naming validation hook may block:
- Non-kebab-case component filenames
- Unknown theme package names

Check `.claude/hooks/validate-naming.ts` for rules.

## Code Style

- TypeScript strict mode
- Functional components with `forwardRef`
- CSS-in-JS via Tailwind classes
- HSL color values with CSS variables
- Accessibility-first (Radix primitives)

## Testing Components

Use the showcase app for visual testing:

```bash
cd apps/showcase
bun run dev
```

Switch between themes using the navigation dots to verify styling.
