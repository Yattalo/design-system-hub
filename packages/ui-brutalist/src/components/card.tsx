import * as React from "react";
import { cn } from "@crazyone/ui-core";

/**
 * BRUTALIST CARD
 *
 * Design principles:
 * - Heavy 3px borders
 * - Hard offset shadows (8px default)
 * - No border radius
 * - Optional concrete texture overlay
 * - Grid coordinate labels
 * - Structural, architectural presence
 */

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    /** Add concrete noise texture overlay */
    texture?: boolean;
    /** Add grid coordinate label [row.col] */
    coords?: { row: number; col: number };
    /** Elevate on hover */
    interactive?: boolean;
  }
>(({ className, texture, coords, interactive = false, ...props }, ref) => (
  <div
    ref={ref}
    data-row={coords?.row}
    data-col={coords?.col}
    className={cn(
      // Base structure
      "relative bg-[hsl(0_0%_98%)] text-[hsl(0_0%_10%)]",
      // Heavy border - structural
      "border-3 border-[hsl(0_0%_10%)]",
      // Hard shadow - architectural
      "shadow-[8px_8px_0_0_hsl(0_0%_10%)]",
      // No radius - brutalist
      "rounded-none",
      // Transitions
      "transition-all duration-100",
      // Interactive states
      interactive && [
        "hover:shadow-[12px_12px_0_0_hsl(0_0%_10%)]",
        "hover:-translate-x-1 hover:-translate-y-1",
        "active:shadow-[4px_4px_0_0_hsl(0_0%_10%)]",
        "active:translate-x-1 active:translate-y-1",
        "cursor-pointer",
      ],
      // Texture overlay
      texture && "brutal-texture",
      // Grid coordinates
      coords && "brutal-coords",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col space-y-2 p-6",
      // Bottom border separator
      "border-b-3 border-[hsl(0_0%_10%)]",
      className
    )}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      // Display font, uppercase, industrial
      "font-display text-2xl font-bold uppercase tracking-[0.05em]",
      "leading-none",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      // Monospace body text
      "font-mono text-sm text-[hsl(0_0%_30%)]",
      "tracking-[0.02em]",
      className
    )}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "p-6",
      // Monospace text
      "font-mono",
      className
    )}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center gap-4 p-6",
      // Top border separator
      "border-t-3 border-[hsl(0_0%_10%)]",
      // Muted background for footer
      "bg-[hsl(30_4%_71%/0.3)]",
      className
    )}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

/**
 * CardLabel - Small uppercase label for categories/tags
 */
const CardLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      // Brutal label style
      "inline-block font-mono text-xs font-semibold uppercase tracking-[0.15em]",
      "bg-[hsl(50_100%_50%)] text-[hsl(0_0%_10%)]",
      "px-2 py-1 border-2 border-[hsl(0_0%_10%)]",
      "shadow-[2px_2px_0_0_hsl(0_0%_10%)]",
      className
    )}
    {...props}
  />
));
CardLabel.displayName = "CardLabel";

/**
 * CardDivider - Heavy horizontal divider
 */
const CardDivider = React.forwardRef<
  HTMLHRElement,
  React.HTMLAttributes<HTMLHRElement>
>(({ className, ...props }, ref) => (
  <hr
    ref={ref}
    className={cn(
      "border-0 h-[3px] bg-[hsl(0_0%_10%)]",
      "my-4 mx-6",
      className
    )}
    {...props}
  />
));
CardDivider.displayName = "CardDivider";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardLabel,
  CardDivider,
};
