import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@crazyone/ui-brutalist";

/**
 * # BRUTALIST BUTTONS
 *
 * Industrial buttons with hard offset shadows, mechanical shake animations,
 * and uppercase monospace typography. Based on the Brutalist design system
 * philosophy: "Truth to Materials, Zero Pretense".
 *
 * ## Design Features
 * - 3px solid borders
 * - Hard shadow offset (4-8px, zero blur)
 * - UPPERCASE JetBrains Mono text
 * - Mechanical shake animation on active
 * - No border radius
 */
const meta: Meta<typeof Button> = {
  title: "Brutalist/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Industrial buttons with hard shadows and mechanical interactions.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link", "success", "warning"],
      description: "The visual style variant",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "xl", "icon"],
      description: "The size of the button",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// PRIMARY VARIANTS
// ============================================

export const Default: Story = {
  args: {
    children: "SUBMIT",
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "CANCEL",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    children: "DELETE",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "OUTLINE",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "GHOST",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "LEARN MORE",
    variant: "link",
  },
};

// ============================================
// SEMANTIC VARIANTS (NEW)
// ============================================

export const Success: Story = {
  args: {
    children: "CONFIRM",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "CAUTION",
    variant: "warning",
  },
};

// ============================================
// SIZES
// ============================================

export const Small: Story = {
  args: {
    children: "SMALL",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "LARGE",
    size: "lg",
  },
};

export const ExtraLarge: Story = {
  args: {
    children: "EXTRA LARGE",
    size: "xl",
  },
};

// ============================================
// STATES
// ============================================

export const Disabled: Story = {
  args: {
    children: "DISABLED",
    disabled: true,
  },
};

// ============================================
// SHOWCASES
// ============================================

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.15em] font-mono opacity-60">Primary Actions</p>
        <div className="flex flex-wrap gap-4">
          <Button>DEFAULT</Button>
          <Button variant="secondary">SECONDARY</Button>
          <Button variant="outline">OUTLINE</Button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.15em] font-mono opacity-60">Semantic</p>
        <div className="flex flex-wrap gap-4">
          <Button variant="success">SUCCESS</Button>
          <Button variant="warning">WARNING</Button>
          <Button variant="destructive">DESTRUCTIVE</Button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.15em] font-mono opacity-60">Minimal</p>
        <div className="flex flex-wrap gap-4">
          <Button variant="ghost">GHOST</Button>
          <Button variant="link">LINK</Button>
        </div>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  name: "All Sizes",
  render: () => (
    <div className="flex items-end gap-4">
      <Button size="sm">SMALL</Button>
      <Button size="default">DEFAULT</Button>
      <Button size="lg">LARGE</Button>
      <Button size="xl">EXTRA LARGE</Button>
    </div>
  ),
};

export const InteractiveDemo: Story = {
  name: "Interactive Demo",
  render: () => (
    <div className="space-y-4 text-center">
      <p className="text-xs uppercase tracking-[0.15em] font-mono opacity-60 mb-8">
        Click buttons to see the mechanical shake animation
      </p>
      <div className="flex gap-4">
        <Button size="lg">CLICK ME</Button>
        <Button size="lg" variant="destructive">DELETE</Button>
        <Button size="lg" variant="success">CONFIRM</Button>
      </div>
    </div>
  ),
};

export const ShadowShowcase: Story = {
  name: "Shadow Behavior",
  render: () => (
    <div className="space-y-6">
      <p className="text-xs uppercase tracking-[0.15em] font-mono opacity-60">
        Hover to lift • Click to press down
      </p>
      <div className="flex gap-8">
        <div className="text-center space-y-2">
          <Button size="lg">HOVER ME</Button>
          <p className="text-xs font-mono opacity-50">Default: 4px shadow</p>
        </div>
        <div className="text-center space-y-2">
          <Button size="lg" variant="outline">HOVER ME</Button>
          <p className="text-xs font-mono opacity-50">Hover: 6px + lift</p>
        </div>
        <div className="text-center space-y-2">
          <Button size="lg" variant="secondary">CLICK ME</Button>
          <p className="text-xs font-mono opacity-50">Active: 2px + press</p>
        </div>
      </div>
    </div>
  ),
};
