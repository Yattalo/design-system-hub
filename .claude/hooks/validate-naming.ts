/**
 * Pre-tool-use hook to validate naming conventions in the design system
 *
 * Enforces:
 * - Component files use kebab-case (e.g., button.tsx, data-table.tsx)
 * - Package names follow @acme/ui-{theme} pattern
 * - CSS variables follow --{token} convention
 */

interface HookContext {
  tool: string;
  args: Record<string, unknown>;
}

interface HookResult {
  proceed: boolean;
  message?: string;
}

const THEME_NAMES = ["vega", "nova", "maia", "lyra", "mira", "core"] as const;

function isKebabCase(str: string): boolean {
  return /^[a-z][a-z0-9]*(-[a-z0-9]+)*$/.test(str);
}

function validateComponentPath(filePath: string): HookResult {
  // Check if writing to a component file
  if (!filePath.includes("/components/") || !filePath.endsWith(".tsx")) {
    return { proceed: true };
  }

  // Extract filename
  const filename = filePath.split("/").pop()?.replace(".tsx", "") ?? "";

  if (!isKebabCase(filename)) {
    return {
      proceed: false,
      message: `Component filename must be kebab-case. Got: "${filename}". Example: "data-table.tsx"`,
    };
  }

  return { proceed: true };
}

function validatePackagePath(filePath: string): HookResult {
  // Check if writing to packages directory
  if (!filePath.includes("/packages/")) {
    return { proceed: true };
  }

  // Extract package name
  const match = filePath.match(/\/packages\/ui-([^/]+)\//);
  if (match) {
    const themeName = match[1];
    if (!THEME_NAMES.includes(themeName as (typeof THEME_NAMES)[number])) {
      return {
        proceed: false,
        message: `Unknown theme package: "ui-${themeName}". Valid themes: ${THEME_NAMES.join(", ")}`,
      };
    }
  }

  return { proceed: true };
}

export function preToolUse(context: HookContext): HookResult {
  const { tool, args } = context;

  // Only validate Write and Edit operations
  if (tool !== "Write" && tool !== "Edit") {
    return { proceed: true };
  }

  const filePath = (args.file_path as string) ?? (args.path as string) ?? "";

  // Run validations
  const componentValidation = validateComponentPath(filePath);
  if (!componentValidation.proceed) {
    return componentValidation;
  }

  const packageValidation = validatePackagePath(filePath);
  if (!packageValidation.proceed) {
    return packageValidation;
  }

  return { proceed: true };
}
