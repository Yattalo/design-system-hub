---
name: new-layout
description: Create a new layout template for the design system
triggers:
  - /new-layout
  - /create-layout
  - "create layout"
  - "new layout"
context: fork
agent: design-system-agent
allowed-tools:
  - Write
  - Edit
  - Read
  - Glob
---

# New Layout

Create a new layout template that works across all themes.

## Parameters

- `name` (required): Layout name in PascalCase (e.g., "DashboardLayout", "AuthLayout")
- `sections` (optional): Comma-separated sections (default: "header,main,footer")

## Usage

```
/new-layout DashboardLayout
/new-layout AuthLayout --sections header,main
/new-layout AdminLayout --sections sidebar,header,main,footer
```

## Common Layout Patterns

### DashboardLayout
- Sidebar navigation
- Top header with breadcrumbs
- Main content area
- Optional footer

### AuthLayout
- Centered card
- Background pattern/image
- Minimal header

### MarketingLayout
- Full-width sections
- Sticky header
- CTA-focused footer

## Process

### Step 1: Create Layout Component

Generate layout in `packages/ui-core/src/layouts/{name}.tsx`:

```typescript
import * as React from "react";
import { cn } from "../utils/cn";

interface {Name}LayoutProps {
  children: React.ReactNode;
  className?: string;
  // Section slots
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  footer?: React.ReactNode;
}

export function {Name}Layout({
  children,
  className,
  header,
  sidebar,
  footer,
}: {Name}LayoutProps) {
  return (
    <div className={cn("min-h-screen flex flex-col", className)}>
      {header && <header className="...">{header}</header>}
      <div className="flex flex-1">
        {sidebar && <aside className="...">{sidebar}</aside>}
        <main className="flex-1">{children}</main>
      </div>
      {footer && <footer className="...">{footer}</footer>}
    </div>
  );
}
```

### Step 2: Export from ui-core

Add to `packages/ui-core/src/index.ts`:

```typescript
export { {Name}Layout } from "./layouts/{name}";
```

### Step 3: Create Theme Variants (Optional)

If layout needs theme-specific styling:

1. Create themed version in each `packages/ui-{theme}/src/layouts/`
2. Apply theme-specific spacing, colors, shadows
3. Export from theme package

### Step 4: Add to Registry

Update `registry/index.json`:

```json
{
  "name": "{name}-layout",
  "type": "registry:block",
  "registryDependencies": []
}
```

### Step 5: Create Usage Example

Add example to `apps/showcase/`:

```typescript
import { DashboardLayout } from "@acme/ui-core";

export default function Demo() {
  return (
    <DashboardLayout
      header={<Header />}
      sidebar={<Sidebar />}
      footer={<Footer />}
    >
      <Content />
    </DashboardLayout>
  );
}
```

## Layout Guidelines

- Use CSS Grid or Flexbox for structure
- Support responsive breakpoints
- Allow slot customization via props
- Keep accessibility in mind (landmarks, skip links)
- Layouts should be theme-agnostic (use CSS variables)
