import { useState } from "react";

// Import buttons from each theme
import { Button as VegaButton, Card as VegaCard, CardHeader as VegaCardHeader, CardTitle as VegaCardTitle, CardDescription as VegaCardDescription, CardContent as VegaCardContent, CardFooter as VegaCardFooter } from "@acme/ui-vega";
import { Button as NovaButton, Card as NovaCard, CardHeader as NovaCardHeader, CardTitle as NovaCardTitle, CardDescription as NovaCardDescription, CardContent as NovaCardContent, CardFooter as NovaCardFooter } from "@acme/ui-nova";
import { Button as MaiaButton, Card as MaiaCard, CardHeader as MaiaCardHeader, CardTitle as MaiaCardTitle, CardDescription as MaiaCardDescription, CardContent as MaiaCardContent, CardFooter as MaiaCardFooter } from "@acme/ui-maia";
import { Button as LyraButton, Card as LyraCard, CardHeader as LyraCardHeader, CardTitle as LyraCardTitle, CardDescription as LyraCardDescription, CardContent as LyraCardContent, CardFooter as LyraCardFooter } from "@acme/ui-lyra";
import { Button as MiraButton, Card as MiraCard, CardHeader as MiraCardHeader, CardTitle as MiraCardTitle, CardDescription as MiraCardDescription, CardContent as MiraCardContent, CardFooter as MiraCardFooter } from "@acme/ui-mira";

type Theme = "vega" | "nova" | "maia" | "lyra" | "mira";

const themes: { id: Theme; name: string; description: string }[] = [
  { id: "vega", name: "Vega", description: "Modern, high-contrast" },
  { id: "nova", name: "Nova", description: "Soft, warm, rounded" },
  { id: "maia", name: "Maia", description: "Minimal, monochrome" },
  { id: "lyra", name: "Lyra", description: "Vibrant, colorful" },
  { id: "mira", name: "Mira", description: "Classic, corporate" },
];

const ButtonMap = {
  vega: VegaButton,
  nova: NovaButton,
  maia: MaiaButton,
  lyra: LyraButton,
  mira: MiraButton,
};

const CardMap = {
  vega: { Card: VegaCard, CardHeader: VegaCardHeader, CardTitle: VegaCardTitle, CardDescription: VegaCardDescription, CardContent: VegaCardContent, CardFooter: VegaCardFooter },
  nova: { Card: NovaCard, CardHeader: NovaCardHeader, CardTitle: NovaCardTitle, CardDescription: NovaCardDescription, CardContent: NovaCardContent, CardFooter: NovaCardFooter },
  maia: { Card: MaiaCard, CardHeader: MaiaCardHeader, CardTitle: MaiaCardTitle, CardDescription: MaiaCardDescription, CardContent: MaiaCardContent, CardFooter: MaiaCardFooter },
  lyra: { Card: LyraCard, CardHeader: LyraCardHeader, CardTitle: LyraCardTitle, CardDescription: LyraCardDescription, CardContent: LyraCardContent, CardFooter: LyraCardFooter },
  mira: { Card: MiraCard, CardHeader: MiraCardHeader, CardTitle: MiraCardTitle, CardDescription: MiraCardDescription, CardContent: MiraCardContent, CardFooter: MiraCardFooter },
};

function App() {
  const [activeTheme, setActiveTheme] = useState<Theme>("vega");
  const Button = ButtonMap[activeTheme];
  const { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } = CardMap[activeTheme];

  return (
    <div
      data-theme={activeTheme}
      className="min-h-screen bg-background text-foreground transition-colors duration-300"
    >
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-2">@acme Design System</h1>
          <p className="text-muted-foreground">
            Themed component library built on shadcn/ui
          </p>
        </header>

        {/* Theme Selector */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Select Theme</h2>
          <div className="flex flex-wrap gap-3">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setActiveTheme(theme.id)}
                className={`px-4 py-2 rounded-lg border transition-all ${
                  activeTheme === theme.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-card-foreground border-border hover:bg-muted"
                }`}
              >
                <span className="font-medium">{theme.name}</span>
                <span className="text-sm ml-2 opacity-70">
                  {theme.description}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Card Showcase */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Card Component</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Basic Card */}
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here with some details.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is the card content. It can contain any elements you want.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">Cancel</Button>
                <Button size="sm" className="ml-2">Save</Button>
              </CardFooter>
            </Card>

            {/* Feature Card */}
            <Card>
              <CardHeader>
                <CardTitle>Feature Highlight</CardTitle>
                <CardDescription>Showcase your product features</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Responsive design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Dark mode support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Accessible components
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card>
              <CardHeader>
                <CardTitle>Statistics</CardTitle>
                <CardDescription>Monthly overview</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-primary">2,847</div>
                <p className="text-sm text-muted-foreground mt-1">Active users this month</p>
              </CardContent>
              <CardFooter>
                <span className="text-sm text-muted-foreground">+12% from last month</span>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Button Showcase */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Button Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Default */}
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="font-medium mb-3 text-card-foreground">Default</h3>
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Small</Button>
                <Button>Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            {/* Secondary */}
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="font-medium mb-3 text-card-foreground">
                Secondary
              </h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="secondary" size="sm">
                  Small
                </Button>
                <Button variant="secondary">Default</Button>
                <Button variant="secondary" size="lg">
                  Large
                </Button>
              </div>
            </div>

            {/* Outline */}
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="font-medium mb-3 text-card-foreground">Outline</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  Small
                </Button>
                <Button variant="outline">Default</Button>
                <Button variant="outline" size="lg">
                  Large
                </Button>
              </div>
            </div>

            {/* Ghost */}
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="font-medium mb-3 text-card-foreground">Ghost</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="ghost" size="sm">
                  Small
                </Button>
                <Button variant="ghost">Default</Button>
                <Button variant="ghost" size="lg">
                  Large
                </Button>
              </div>
            </div>

            {/* Destructive */}
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="font-medium mb-3 text-card-foreground">
                Destructive
              </h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="destructive" size="sm">
                  Small
                </Button>
                <Button variant="destructive">Default</Button>
                <Button variant="destructive" size="lg">
                  Large
                </Button>
              </div>
            </div>

            {/* Link */}
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="font-medium mb-3 text-card-foreground">Link</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="link" size="sm">
                  Small
                </Button>
                <Button variant="link">Default</Button>
                <Button variant="link" size="lg">
                  Large
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Color Palette Preview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <ColorSwatch name="Background" variable="--background" />
            <ColorSwatch name="Foreground" variable="--foreground" />
            <ColorSwatch name="Primary" variable="--primary" />
            <ColorSwatch name="Secondary" variable="--secondary" />
            <ColorSwatch name="Muted" variable="--muted" />
            <ColorSwatch name="Accent" variable="--accent" />
          </div>
        </section>

        {/* Theme Info */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Current Theme: {themes.find((t) => t.id === activeTheme)?.name}
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Usage Example</CardTitle>
              <CardDescription>
                {themes.find((t) => t.id === activeTheme)?.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="p-4 bg-muted rounded text-sm overflow-x-auto">
                {`import { Button, Card, CardHeader, CardTitle, CardContent } from "@acme/ui-${activeTheme}";

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}`}
              </pre>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}

function ColorSwatch({
  name,
  variable,
}: {
  name: string;
  variable: string;
}) {
  return (
    <div className="text-center">
      <div
        className="w-full h-16 rounded-lg border mb-2"
        style={{ backgroundColor: `hsl(var(${variable}))` }}
      />
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}

export default App;
