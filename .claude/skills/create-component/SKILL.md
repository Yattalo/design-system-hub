---
name: create-component
description: Create a new shadcn component in the design system
triggers:
  - /create-component
  - /new-component
  - "create component"
  - "add component"
context: fork
agent: design-system-agent
allowed-tools:
  - mcp__shadcn__*
  - Write
  - Edit
  - Read
  - Glob
  - Bash(bunx shadcn*)
---

# Create Component

Create a new component using MCP shadcn and distribute it to all theme packages.

## Parameters

- `name` (required): Component name in kebab-case (e.g., "data-table", "alert-dialog")
- `themes` (optional): Comma-separated themes or "all" (default: "all")

## Usage

```
/create-component card
/create-component data-table --themes vega,nova
```

## Process

### Step 1: Scaffold Base Component

Use the shadcn MCP or CLI to add the component:

```bash
bunx shadcn@latest add <component-name>
```

### Step 2: Review Component Structure

Read the generated component and understand its:
- Props interface
- Variant configurations (if using CVA)
- Dependencies (Radix primitives, etc.)

### Step 3: Distribute to Theme Packages

For each target theme:

1. Copy component to `packages/ui-{theme}/src/components/{name}.tsx`
2. Update imports to use `@acme/ui-core` for utilities
3. Apply theme-specific variant styling if needed
4. Update `packages/ui-{theme}/src/index.ts` to export the component

### Step 4: Update Registry

Add component entry to `registry/index.json`:

```json
{
  "name": "{component-name}",
  "type": "registry:ui",
  "registryDependencies": []
}
```

### Step 5: Verify Build

```bash
bun run build
```

## Example: Creating a Card Component

1. Scaffold: `bunx shadcn@latest add card`
2. Read generated component
3. For each theme:
   - Copy to theme package
   - Adjust border-radius, shadows per theme style
4. Export from each package's index.ts
5. Add to registry

## Notes

- Always preserve the component's accessibility features
- Maintain consistent prop interfaces across themes
- Document any theme-specific behavior differences
