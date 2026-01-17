# Design System Hub

Centralized monorepo for @crazyone themed UI components built on shadcn/ui.

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
- `bunx <package>` - Execute packages

## Architecture

```
packages/
├── ui-core/     # Shared utilities (cn, hooks, types)
├── ui-vega/     # Modern, high-contrast theme (blue)
├── ui-nova/     # Soft, warm theme (orange, rounded)
├── ui-maia/     # Minimal, monochrome theme (grayscale)
├── ui-lyra/     # Vibrant, colorful theme (purple/pink)
└── ui-mira/     # Classic, corporate theme (navy)

apps/
└── showcase/    # Demo app for visual testing

registry/        # shadcn registry JSON files
scripts/         # Build scripts
```

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

## Adding Components

1. Use MCP shadcn or run: `bunx shadcn@latest add <component>`
2. Copy to each theme package
3. Apply theme-specific styling
4. Update exports in `src/index.ts`
5. Run `bun run build:registry` to update registry

## Theme Colors Summary

| Theme | Primary | Style |
|-------|---------|-------|
| Vega  | Blue (#3b82f6) | Sharp, modern |
| Nova  | Orange (#f97316) | Soft, rounded |
| Maia  | Gray (#171717) | Minimal |
| Lyra  | Purple (#8b5cf6) | Vibrant |
| Mira  | Navy (#1e3a5f) | Corporate |
