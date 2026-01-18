import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@crazyone/ui-vega";

/**
 * # VEGA BUTTONS
 *
 * Modern, professional buttons with a clean enterprise blue aesthetic.
 * High-contrast, sharp corners with subtle shadows.
 *
 * ## Design Features
 * - Enterprise blue primary color
 * - Clean, modern shadow system
 * - Professional hover states
 * - Subtle rounded corners
 */
const meta: Meta<typeof Button> = {
  title: "Vega/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Modern enterprise buttons with professional blue styling.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      description: "The visual style variant",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
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
    children: "Submit",
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "Cancel",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    children: "Delete",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "Learn More",
    variant: "link",
  },
};

// ============================================
// SIZES
// ============================================

export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    size: "lg",
  },
};

// ============================================
// STATES
// ============================================

export const Disabled: Story = {
  args: {
    children: "Disabled",
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
        <p className="text-xs uppercase tracking-wide text-muted-foreground">Primary Actions</p>
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">Semantic</p>
        <div className="flex flex-wrap gap-4">
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">Minimal</p>
        <div className="flex flex-wrap gap-4">
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  name: "All Sizes",
  render: () => (
    <div className="flex items-end gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
