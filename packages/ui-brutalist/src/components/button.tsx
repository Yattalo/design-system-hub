import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@crazyone/ui-core";

/**
 * BRUTALIST BUTTON
 *
 * Design principles:
 * - 3px solid borders (never thin)
 * - Hard offset shadows (zero blur)
 * - UPPERCASE monospace text
 * - Mechanical shake on active
 * - No border radius
 * - Industrial color palette
 */

const buttonVariants = cva(
  [
    // Base structure
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    // Typography - Industrial monospace, uppercase, wide tracking
    "font-mono font-semibold uppercase tracking-[0.15em]",
    // Borders - Heavy, structural
    "border-3 border-current",
    // Shadows - Hard offset, zero blur
    "shadow-[4px_4px_0_0_currentColor]",
    // Transitions - Sharp, mechanical
    "transition-all duration-100",
    // Hover - Lift and grow shadow
    "hover:shadow-[6px_6px_0_0_currentColor] hover:-translate-x-0.5 hover:-translate-y-0.5",
    // Active - Press down, shrink shadow, shake
    "active:shadow-[2px_2px_0_0_currentColor] active:translate-x-0.5 active:translate-y-0.5",
    "active:animate-[brutal-shake_0.3s_cubic-bezier(0.7,0,0.3,1)]",
    // Focus - Hard yellow ring
    "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[hsl(50_100%_50%)] focus-visible:ring-offset-2",
    // Disabled state
    "disabled:pointer-events-none disabled:opacity-40 disabled:grayscale",
    // Icon sizing
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        // Primary - Safety Yellow with black text
        default: [
          "bg-[hsl(50_100%_50%)] text-[hsl(0_0%_10%)]",
          "border-[hsl(0_0%_10%)]",
          "shadow-[4px_4px_0_0_hsl(0_0%_10%)]",
          "hover:shadow-[6px_6px_0_0_hsl(0_0%_10%)]",
          "active:shadow-[2px_2px_0_0_hsl(0_0%_10%)]",
        ].join(" "),

        // Destructive - Stop Red
        destructive: [
          "bg-[hsl(0_100%_50%)] text-white",
          "border-[hsl(0_0%_10%)]",
          "shadow-[4px_4px_0_0_hsl(0_0%_10%)]",
          "hover:shadow-[6px_6px_0_0_hsl(0_0%_10%)]",
          "active:shadow-[2px_2px_0_0_hsl(0_0%_10%)]",
        ].join(" "),

        // Outline - Transparent with black border
        outline: [
          "bg-transparent text-[hsl(0_0%_10%)]",
          "border-[hsl(0_0%_10%)]",
          "shadow-[4px_4px_0_0_hsl(0_0%_10%)]",
          "hover:bg-[hsl(0_0%_10%)] hover:text-[hsl(0_0%_98%)]",
          "hover:shadow-[6px_6px_0_0_hsl(0_0%_10%)]",
          "active:shadow-[2px_2px_0_0_hsl(0_0%_10%)]",
        ].join(" "),

        // Secondary - Cold Steel
        secondary: [
          "bg-[hsl(30_4%_71%)] text-[hsl(0_0%_10%)]",
          "border-[hsl(0_0%_10%)]",
          "shadow-[4px_4px_0_0_hsl(0_0%_10%)]",
          "hover:shadow-[6px_6px_0_0_hsl(0_0%_10%)]",
          "active:shadow-[2px_2px_0_0_hsl(0_0%_10%)]",
        ].join(" "),

        // Ghost - No shadow, minimal presence
        ghost: [
          "bg-transparent text-[hsl(0_0%_10%)]",
          "border-transparent shadow-none",
          "hover:bg-[hsl(50_100%_50%/0.2)] hover:border-[hsl(0_0%_10%)]",
          "active:bg-[hsl(50_100%_50%/0.3)]",
        ].join(" "),

        // Link - Text only, underline on hover
        link: [
          "bg-transparent text-[hsl(0_0%_10%)]",
          "border-transparent shadow-none",
          "underline-offset-4 hover:underline",
          "p-0 h-auto",
        ].join(" "),

        // Success - Exit Green
        success: [
          "bg-[hsl(120_100%_40%)] text-[hsl(0_0%_10%)]",
          "border-[hsl(0_0%_10%)]",
          "shadow-[4px_4px_0_0_hsl(0_0%_10%)]",
          "hover:shadow-[6px_6px_0_0_hsl(0_0%_10%)]",
          "active:shadow-[2px_2px_0_0_hsl(0_0%_10%)]",
        ].join(" "),

        // Warning - Hazard Orange
        warning: [
          "bg-[hsl(24_100%_50%)] text-[hsl(0_0%_10%)]",
          "border-[hsl(0_0%_10%)]",
          "shadow-[4px_4px_0_0_hsl(0_0%_10%)]",
          "hover:shadow-[6px_6px_0_0_hsl(0_0%_10%)]",
          "active:shadow-[2px_2px_0_0_hsl(0_0%_10%)]",
        ].join(" "),
      },
      size: {
        default: "h-11 px-6 py-2 text-sm",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-10 text-base",
        xl: "h-16 px-12 text-lg",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
