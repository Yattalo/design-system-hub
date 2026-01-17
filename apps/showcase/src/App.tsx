import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Palette,
  Type,
  Grid3X3,
  Layers,
  CreditCard,
  LayoutDashboard,
  Sparkles,
  Copy,
  Check,
  ChevronRight,
  Zap,
  Star,
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Bell,
  Search,
  Settings,
  Menu,
  X,
  Github,
  Twitter,
  Mail,
  Package,
  Terminal,
  Code2,
  Boxes,
  Download,
  Eye,
  MousePointerClick,
} from "lucide-react";

// Import buttons from each theme
import {
  Button as VegaButton,
  Card as VegaCard,
  CardHeader as VegaCardHeader,
  CardTitle as VegaCardTitle,
  CardDescription as VegaCardDescription,
  CardContent as VegaCardContent,
  CardFooter as VegaCardFooter,
} from "@acme/ui-vega";
import {
  Button as NovaButton,
  Card as NovaCard,
  CardHeader as NovaCardHeader,
  CardTitle as NovaCardTitle,
  CardDescription as NovaCardDescription,
  CardContent as NovaCardContent,
  CardFooter as NovaCardFooter,
} from "@acme/ui-nova";
import {
  Button as MaiaButton,
  Card as MaiaCard,
  CardHeader as MaiaCardHeader,
  CardTitle as MaiaCardTitle,
  CardDescription as MaiaCardDescription,
  CardContent as MaiaCardContent,
  CardFooter as MaiaCardFooter,
} from "@acme/ui-maia";
import {
  Button as LyraButton,
  Card as LyraCard,
  CardHeader as LyraCardHeader,
  CardTitle as LyraCardTitle,
  CardDescription as LyraCardDescription,
  CardContent as LyraCardContent,
  CardFooter as LyraCardFooter,
} from "@acme/ui-lyra";
import {
  Button as MiraButton,
  Card as MiraCard,
  CardHeader as MiraCardHeader,
  CardTitle as MiraCardTitle,
  CardDescription as MiraCardDescription,
  CardContent as MiraCardContent,
  CardFooter as MiraCardFooter,
} from "@acme/ui-mira";

type Theme = "vega" | "nova" | "maia" | "lyra" | "mira";

interface ThemeConfig {
  id: Theme;
  name: string;
  tagline: string;
  description: string;
  gradient: string;
  accent: string;
  style: string;
}

const themes: ThemeConfig[] = [
  {
    id: "vega",
    name: "Vega",
    tagline: "Modern & Bold",
    description: "High-contrast blue theme with sharp edges and strong shadows",
    gradient: "from-blue-600 via-blue-500 to-cyan-400",
    accent: "#3b82f6",
    style: "Sharp corners, bold shadows, modern feel",
  },
  {
    id: "nova",
    name: "Nova",
    tagline: "Warm & Inviting",
    description: "Soft orange tones with generous roundness",
    gradient: "from-orange-500 via-amber-500 to-yellow-400",
    accent: "#f97316",
    style: "Rounded corners, warm palette, friendly",
  },
  {
    id: "maia",
    name: "Maia",
    tagline: "Minimal & Pure",
    description: "Monochrome elegance with precise typography",
    gradient: "from-neutral-800 via-neutral-600 to-neutral-400",
    accent: "#171717",
    style: "Minimal, grayscale, typography-focused",
  },
  {
    id: "lyra",
    name: "Lyra",
    tagline: "Vibrant & Playful",
    description: "Purple and pink gradients with energetic motion",
    gradient: "from-purple-600 via-violet-500 to-fuchsia-500",
    accent: "#8b5cf6",
    style: "Gradients, vibrant colors, dynamic",
  },
  {
    id: "mira",
    name: "Mira",
    tagline: "Classic & Corporate",
    description: "Navy professional theme with traditional elegance",
    gradient: "from-slate-800 via-slate-700 to-slate-600",
    accent: "#1e3a5f",
    style: "Corporate, navy palette, trustworthy",
  },
];

const ButtonMap = {
  vega: VegaButton,
  nova: NovaButton,
  maia: MaiaButton,
  lyra: LyraButton,
  mira: MiraButton,
};

const CardMap = {
  vega: {
    Card: VegaCard,
    CardHeader: VegaCardHeader,
    CardTitle: VegaCardTitle,
    CardDescription: VegaCardDescription,
    CardContent: VegaCardContent,
    CardFooter: VegaCardFooter,
  },
  nova: {
    Card: NovaCard,
    CardHeader: NovaCardHeader,
    CardTitle: NovaCardTitle,
    CardDescription: NovaCardDescription,
    CardContent: NovaCardContent,
    CardFooter: NovaCardFooter,
  },
  maia: {
    Card: MaiaCard,
    CardHeader: MaiaCardHeader,
    CardTitle: MaiaCardTitle,
    CardDescription: MaiaCardDescription,
    CardContent: MaiaCardContent,
    CardFooter: MaiaCardFooter,
  },
  lyra: {
    Card: LyraCard,
    CardHeader: LyraCardHeader,
    CardTitle: LyraCardTitle,
    CardDescription: LyraCardDescription,
    CardContent: LyraCardContent,
    CardFooter: LyraCardFooter,
  },
  mira: {
    Card: MiraCard,
    CardHeader: MiraCardHeader,
    CardTitle: MiraCardTitle,
    CardDescription: MiraCardDescription,
    CardContent: MiraCardContent,
    CardFooter: MiraCardFooter,
  },
};

// Utility for copying to clipboard
function useCopyToClipboard() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return { copied, copy };
}

// Section navigation
const sections = [
  { id: "hero", label: "Overview", icon: Sparkles },
  { id: "colors", label: "Colors", icon: Palette },
  { id: "typography", label: "Typography", icon: Type },
  { id: "buttons", label: "Buttons", icon: MousePointerClick },
  { id: "cards", label: "Cards", icon: Layers },
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "pricing", label: "Pricing", icon: CreditCard },
  { id: "patterns", label: "Patterns", icon: Grid3X3 },
  { id: "install", label: "Install", icon: Terminal },
];

function App() {
  const [activeTheme, setActiveTheme] = useState<Theme>("vega");
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { copied, copy } = useCopyToClipboard();

  const Button = ButtonMap[activeTheme];
  const {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
  } = CardMap[activeTheme];
  const currentTheme = themes.find((t) => t.id === activeTheme)!;

  // Track scroll position for section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div
      data-theme={activeTheme}
      className="min-h-screen bg-background text-foreground transition-all duration-500"
    >
      {/* Floating Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
      >
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-lg bg-gradient-to-br ${currentTheme.gradient} flex items-center justify-center`}
              >
                <Boxes className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold">@acme/ui</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === section.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>

            {/* Theme Selector */}
            <div className="hidden md:flex items-center gap-2">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setActiveTheme(theme.id)}
                  className={`relative w-8 h-8 rounded-full bg-gradient-to-br ${
                    theme.gradient
                  } transition-all duration-300 ${
                    activeTheme === theme.id
                      ? "ring-2 ring-offset-2 ring-offset-background ring-primary scale-110"
                      : "opacity-60 hover:opacity-100 hover:scale-105"
                  }`}
                  title={theme.name}
                >
                  {activeTheme === theme.id && (
                    <motion.div
                      layoutId="activeTheme"
                      className="absolute inset-0 rounded-full ring-2 ring-primary"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-muted"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border bg-background"
            >
              <div className="p-4 space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeSection === section.id
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <section.icon className="w-5 h-5" />
                    {section.label}
                  </button>
                ))}
                {/* Mobile Theme Selector */}
                <div className="flex items-center gap-2 pt-4 border-t border-border mt-4">
                  {themes.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => setActiveTheme(theme.id)}
                      className={`flex-1 h-10 rounded-lg bg-gradient-to-br ${
                        theme.gradient
                      } transition-all ${
                        activeTheme === theme.id
                          ? "ring-2 ring-offset-2 ring-primary"
                          : "opacity-50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br ${currentTheme.gradient} opacity-5 blur-3xl animate-blob`}
          />
          <div
            className={`absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl ${currentTheme.gradient} opacity-5 blur-3xl animate-blob animation-delay-2000`}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_70%)]" />
          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>5 Themes • 2 Components • Infinite Possibilities</span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
                <span className="block">Design System</span>
                <span
                  className={`block bg-gradient-to-r ${currentTheme.gradient} bg-clip-text text-transparent`}
                >
                  {currentTheme.name}
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed">
                {currentTheme.description}. Built on shadcn/ui foundations with
                theme-specific personalities ready to drop into any project.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <Download className="w-5 h-5" />
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Github className="w-5 h-5" />
                  View Source
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
                {[
                  { label: "Themes", value: "5" },
                  { label: "Components", value: "2+" },
                  { label: "Bundle Size", value: "~4kb" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Theme Preview Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative grid gap-4">
                {/* Floating Theme Cards */}
                <div className="grid grid-cols-2 gap-4">
                  {themes.slice(0, 4).map((theme, index) => (
                    <motion.div
                      key={theme.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -4 }}
                      onClick={() => setActiveTheme(theme.id)}
                      className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
                        activeTheme === theme.id
                          ? "border-primary bg-primary/5 shadow-lg shadow-primary/20"
                          : "border-border bg-card hover:border-primary/50"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${theme.gradient} mb-4`}
                      />
                      <h3 className="font-semibold text-lg">{theme.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {theme.tagline}
                      </p>
                    </motion.div>
                  ))}
                </div>
                {/* Fifth Theme Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.01, y: -2 }}
                  onClick={() => setActiveTheme("mira")}
                  className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
                    activeTheme === "mira"
                      ? "border-primary bg-primary/5 shadow-lg shadow-primary/20"
                      : "border-border bg-card hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${themes[4].gradient}`}
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{themes[4].name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {themes[4].tagline}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronRight className="w-5 h-5 rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      {/* Color Tokens Section */}
      <section id="colors" className="py-24 border-t border-border">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={Palette}
            title="Color System"
            description="Semantic color tokens that adapt to each theme. Build once, skin infinitely."
            gradient={currentTheme.gradient}
          />

          <div className="grid gap-8">
            {/* Primary Colors */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Core Palette</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  {
                    name: "Background",
                    var: "--background",
                    class: "bg-background",
                  },
                  {
                    name: "Foreground",
                    var: "--foreground",
                    class: "bg-foreground",
                  },
                  { name: "Primary", var: "--primary", class: "bg-primary" },
                  {
                    name: "Secondary",
                    var: "--secondary",
                    class: "bg-secondary",
                  },
                  { name: "Muted", var: "--muted", class: "bg-muted" },
                  { name: "Accent", var: "--accent", class: "bg-accent" },
                ].map((color) => (
                  <ColorToken
                    key={color.name}
                    name={color.name}
                    variable={color.var}
                    className={color.class}
                    onCopy={() => copy(`hsl(var(${color.var}))`, color.var)}
                    copied={copied === color.var}
                  />
                ))}
              </div>
            </div>

            {/* Semantic Colors */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Semantic Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Card", var: "--card", class: "bg-card" },
                  { name: "Popover", var: "--popover", class: "bg-popover" },
                  {
                    name: "Destructive",
                    var: "--destructive",
                    class: "bg-destructive",
                  },
                  { name: "Border", var: "--border", class: "bg-border" },
                ].map((color) => (
                  <ColorToken
                    key={color.name}
                    name={color.name}
                    variable={color.var}
                    className={color.class}
                    onCopy={() => copy(`hsl(var(${color.var}))`, color.var)}
                    copied={copied === color.var}
                  />
                ))}
              </div>
            </div>

            {/* Theme Gradient Preview */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Theme Gradient</h3>
              <div
                className={`h-32 rounded-2xl bg-gradient-to-r ${currentTheme.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl drop-shadow-lg">
                    {currentTheme.name} Theme
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section id="typography" className="py-24 bg-muted/30">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={Type}
            title="Typography Scale"
            description="A carefully crafted type scale for beautiful hierarchy and readability."
            gradient={currentTheme.gradient}
          />

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Type Scale */}
            <Card className="p-8">
              <h3 className="text-lg font-semibold mb-6">Heading Scale</h3>
              <div className="space-y-6">
                {[
                  { label: "Display", class: "text-6xl font-bold", size: "60px" },
                  { label: "H1", class: "text-5xl font-bold", size: "48px" },
                  { label: "H2", class: "text-4xl font-bold", size: "36px" },
                  { label: "H3", class: "text-3xl font-semibold", size: "30px" },
                  { label: "H4", class: "text-2xl font-semibold", size: "24px" },
                  { label: "H5", class: "text-xl font-medium", size: "20px" },
                  { label: "H6", class: "text-lg font-medium", size: "18px" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-baseline gap-4 pb-4 border-b border-border last:border-0"
                  >
                    <span className="w-20 text-sm text-muted-foreground shrink-0">
                      {item.label}
                    </span>
                    <span className={item.class}>The quick brown fox</span>
                    <span className="text-xs text-muted-foreground ml-auto">
                      {item.size}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Body Text */}
            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="text-lg font-semibold mb-6">Body Text</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-muted-foreground block mb-1">
                      Large (18px)
                    </span>
                    <p className="text-lg leading-relaxed">
                      Design systems enable teams to build better products
                      faster by making design reusable—reusability makes scale
                      possible.
                    </p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground block mb-1">
                      Base (16px)
                    </span>
                    <p className="text-base leading-relaxed">
                      Design systems enable teams to build better products
                      faster by making design reusable—reusability makes scale
                      possible.
                    </p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground block mb-1">
                      Small (14px)
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Design systems enable teams to build better products
                      faster by making design reusable—reusability makes scale
                      possible.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-lg font-semibold mb-6">Font Weights</h3>
                <div className="space-y-3">
                  {[
                    { weight: "font-light", label: "Light (300)" },
                    { weight: "font-normal", label: "Regular (400)" },
                    { weight: "font-medium", label: "Medium (500)" },
                    { weight: "font-semibold", label: "Semibold (600)" },
                    { weight: "font-bold", label: "Bold (700)" },
                  ].map((item) => (
                    <div
                      key={item.weight}
                      className="flex justify-between items-center"
                    >
                      <span className={`text-xl ${item.weight}`}>
                        {item.label}
                      </span>
                      <code className="text-xs bg-muted px-2 py-1 rounded">
                        {item.weight}
                      </code>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Buttons Section */}
      <section id="buttons" className="py-24 border-t border-border">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={MousePointerClick}
            title="Button Components"
            description="Six variants, three sizes, unlimited possibilities. Buttons that feel native to each theme."
            gradient={currentTheme.gradient}
          />

          <div className="grid gap-8">
            {/* All Variants Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(
                [
                  "default",
                  "secondary",
                  "outline",
                  "ghost",
                  "destructive",
                  "link",
                ] as const
              ).map((variant) => (
                <Card key={variant} className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold capitalize">{variant}</h3>
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      variant="{variant}"
                    </code>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button variant={variant} size="sm">
                      Small
                    </Button>
                    <Button variant={variant}>Default</Button>
                    <Button variant={variant} size="lg">
                      Large
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Button States */}
            <Card className="p-8">
              <h3 className="text-lg font-semibold mb-6">Button States</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="text-center">
                  <Button className="mb-2">Normal</Button>
                  <span className="text-xs text-muted-foreground block">
                    Default
                  </span>
                </div>
                <div className="text-center">
                  <Button className="mb-2 hover:bg-primary/90">Hover</Button>
                  <span className="text-xs text-muted-foreground block">
                    :hover
                  </span>
                </div>
                <div className="text-center">
                  <Button className="mb-2" disabled>
                    Disabled
                  </Button>
                  <span className="text-xs text-muted-foreground block">
                    disabled
                  </span>
                </div>
                <div className="text-center">
                  <Button className="mb-2 gap-2">
                    <span className="animate-spin">⏳</span>
                    Loading
                  </Button>
                  <span className="text-xs text-muted-foreground block">
                    loading
                  </span>
                </div>
              </div>
            </Card>

            {/* Button with Icons */}
            <Card className="p-8">
              <h3 className="text-lg font-semibold mb-6">With Icons</h3>
              <div className="flex flex-wrap gap-4">
                <Button className="gap-2">
                  <Mail className="w-4 h-4" />
                  Email Us
                </Button>
                <Button variant="secondary" className="gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
                <Button variant="outline" className="gap-2">
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Settings className="w-4 h-4" />
                </Button>
                <Button variant="destructive" className="gap-2">
                  <X className="w-4 h-4" />
                  Delete
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section id="cards" className="py-24 bg-muted/30">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={Layers}
            title="Card Components"
            description="Flexible card primitives for any content. Compose headers, content, and footers."
            gradient={currentTheme.gradient}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Basic Card */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Card</CardTitle>
                <CardDescription>
                  A simple card with header, content and footer.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cards can contain any content and are perfect for grouping
                  related information together.
                </p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline" size="sm">
                  Cancel
                </Button>
                <Button size="sm">Save</Button>
              </CardFooter>
            </Card>

            {/* Feature Card */}
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Optimized for performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Tree-shakeable", "Zero runtime", "CSS variables"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary" />
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Revenue
                  <span className="text-sm font-normal text-emerald-500 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    +12.5%
                  </span>
                </CardTitle>
                <CardDescription>Monthly recurring revenue</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">$45,231</div>
                <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-primary rounded-full" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  75% of monthly goal
                </p>
              </CardContent>
            </Card>

            {/* User Card */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl font-bold">
                    JD
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Jane Doe</h3>
                    <p className="text-sm text-muted-foreground">
                      Product Designer
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
                  {[
                    { label: "Projects", value: "24" },
                    { label: "Followers", value: "1.2k" },
                    { label: "Following", value: "284" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="font-semibold">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  View Profile
                </Button>
              </CardFooter>
            </Card>

            {/* Notification Card */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-primary" />
                  New Message
                </CardTitle>
                <CardDescription>2 minutes ago</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  You have a new message from the design team regarding the
                  component library updates.
                </p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button size="sm">Read</Button>
                <Button size="sm" variant="ghost">
                  Dismiss
                </Button>
              </CardFooter>
            </Card>

            {/* Image Card */}
            <Card className="overflow-hidden">
              <div
                className={`h-40 bg-gradient-to-br ${currentTheme.gradient} relative`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Package className="w-16 h-16 text-white/50" />
                </div>
              </div>
              <CardHeader>
                <CardTitle>@acme/ui-{activeTheme}</CardTitle>
                <CardDescription>Theme package</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    12.4k
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    847
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full gap-2">
                  <Terminal className="w-4 h-4" />
                  bun add @acme/ui-{activeTheme}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" className="py-24 border-t border-border">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={LayoutDashboard}
            title="Dashboard Patterns"
            description="Real-world dashboard components ready to drop into your admin panels."
            gradient={currentTheme.gradient}
          />

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                label: "Total Revenue",
                value: "$45,231",
                change: "+20.1%",
                positive: true,
                icon: DollarSign,
              },
              {
                label: "Subscriptions",
                value: "2,350",
                change: "+180.1%",
                positive: true,
                icon: Users,
              },
              {
                label: "Sales",
                value: "12,234",
                change: "+19%",
                positive: true,
                icon: CreditCard,
              },
              {
                label: "Active Now",
                value: "573",
                change: "-2.5%",
                positive: false,
                icon: Activity,
              },
            ].map((stat) => (
              <Card key={stat.label}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </CardTitle>
                  <stat.icon className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p
                    className={`text-xs flex items-center gap-1 mt-1 ${
                      stat.positive ? "text-emerald-500" : "text-red-500"
                    }`}
                  >
                    {stat.positive ? (
                      <ArrowUpRight className="w-3 h-3" />
                    ) : (
                      <ArrowDownRight className="w-3 h-3" />
                    )}
                    {stat.change} from last month
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Chart */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Overview</CardTitle>
                    <CardDescription>
                      Revenue over the last 6 months
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {/* Fake Chart */}
                <div className="h-64 flex items-end gap-2">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map(
                    (height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: i * 0.05, duration: 0.5 }}
                        className="flex-1 bg-primary/80 rounded-t hover:bg-primary transition-colors"
                      />
                    )
                  )}
                </div>
                <div className="flex justify-between mt-4 text-xs text-muted-foreground">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>You made 265 sales this month.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Olivia Martin", email: "olivia@email.com", amount: "+$1,999" },
                    { name: "Jackson Lee", email: "jackson@email.com", amount: "+$39" },
                    { name: "Isabella Nguyen", email: "isabella@email.com", amount: "+$299" },
                    { name: "William Kim", email: "will@email.com", amount: "+$99" },
                    { name: "Sofia Davis", email: "sofia@email.com", amount: "+$39" },
                  ].map((sale, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold">
                        {sale.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{sale.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{sale.email}</p>
                      </div>
                      <span className="text-sm font-medium">{sale.amount}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-muted/30">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={CreditCard}
            title="Pricing Cards"
            description="Beautiful pricing tables that convert. Highlight your best plan."
            gradient={currentTheme.gradient}
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$9",
                description: "Perfect for trying out",
                features: ["5 projects", "Basic analytics", "48-hour support"],
                featured: false,
              },
              {
                name: "Pro",
                price: "$29",
                description: "Best for professionals",
                features: [
                  "Unlimited projects",
                  "Advanced analytics",
                  "Priority support",
                  "Custom domains",
                  "API access",
                ],
                featured: true,
              },
              {
                name: "Enterprise",
                price: "$99",
                description: "For large organizations",
                features: [
                  "Everything in Pro",
                  "Dedicated support",
                  "SLA guarantee",
                  "Custom integrations",
                ],
                featured: false,
              },
            ].map((plan) => (
              <Card
                key={plan.name}
                className={`relative ${
                  plan.featured
                    ? "border-primary shadow-lg shadow-primary/20 scale-105"
                    : ""
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span
                      className={`px-4 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${currentTheme.gradient}`}
                    >
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-lg">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-5xl font-bold mb-2">{plan.price}</div>
                  <p className="text-sm text-muted-foreground mb-6">per month</p>
                  <ul className="space-y-3 text-left">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm"
                      >
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={plan.featured ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Patterns Section */}
      <section id="patterns" className="py-24 border-t border-border">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={Grid3X3}
            title="UI Patterns"
            description="Common UI patterns built with our components. Copy-paste ready."
            gradient={currentTheme.gradient}
          />

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Login Form */}
            <Card className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold">Welcome back</h3>
                <p className="text-muted-foreground">
                  Enter your credentials to access your account
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-input"
                    />
                    Remember me
                  </label>
                  <Button variant="link" className="h-auto p-0">
                    Forgot password?
                  </Button>
                </div>
                <Button className="w-full">Sign In</Button>
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-2 bg-card text-xs text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Twitter className="w-4 h-4" />
                    Twitter
                  </Button>
                </div>
              </div>
            </Card>

            {/* Search + Filters */}
            <Card className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold">Search & Filters</h3>
                <p className="text-muted-foreground">
                  Find what you're looking for
                </p>
              </div>
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search components..."
                    className="w-full h-10 pl-10 pr-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {["All", "Buttons", "Cards", "Forms", "Layout"].map(
                    (filter, i) => (
                      <Button
                        key={filter}
                        variant={i === 0 ? "default" : "outline"}
                        size="sm"
                      >
                        {filter}
                      </Button>
                    )
                  )}
                </div>
                <div className="border rounded-lg divide-y divide-border">
                  {[
                    { name: "Button", count: 6 },
                    { name: "Card", count: 4 },
                    { name: "Input", count: 3 },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between p-4 hover:bg-muted/50 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Code2 className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {item.count} variants
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Hero Section Pattern */}
            <Card className="overflow-hidden lg:col-span-2">
              <div
                className={`relative p-12 bg-gradient-to-br ${currentTheme.gradient} text-white`}
              >
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-sm mb-4">
                    <Sparkles className="w-4 h-4" />
                    New Feature
                  </div>
                  <h2 className="text-4xl font-bold mb-4">
                    Build faster with our component library
                  </h2>
                  <p className="text-lg opacity-90 mb-6">
                    50+ components designed with accessibility and performance in
                    mind. Drop-in ready for your next project.
                  </p>
                  <div className="flex gap-4">
                    <button className="h-11 px-6 rounded-lg bg-white text-foreground font-semibold hover:bg-white/90 transition-colors">
                      Get Started Free
                    </button>
                    <button className="h-11 px-6 rounded-lg bg-white/20 font-semibold hover:bg-white/30 transition-colors flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="install" className="py-24 bg-muted/30">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={Terminal}
            title="Installation"
            description="Get started in seconds. Choose your theme and install."
            gradient={currentTheme.gradient}
          />

          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden">
              <div className="p-6 bg-muted/50 border-b border-border">
                <h3 className="font-semibold mb-2">Install the package</h3>
                <p className="text-sm text-muted-foreground">
                  Choose your preferred package manager
                </p>
              </div>
              <CardContent className="p-0">
                {[
                  { pm: "bun", cmd: `bun add @acme/ui-${activeTheme}` },
                  { pm: "npm", cmd: `npm install @acme/ui-${activeTheme}` },
                  { pm: "pnpm", cmd: `pnpm add @acme/ui-${activeTheme}` },
                  { pm: "yarn", cmd: `yarn add @acme/ui-${activeTheme}` },
                ].map((item) => (
                  <div
                    key={item.pm}
                    className="flex items-center justify-between p-4 border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-12 text-sm font-medium text-muted-foreground">
                        {item.pm}
                      </span>
                      <code className="text-sm bg-background px-3 py-1.5 rounded border border-border font-mono">
                        {item.cmd}
                      </code>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copy(item.cmd, item.pm)}
                      className="gap-2"
                    >
                      {copied === item.pm ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Usage Example</CardTitle>
                <CardDescription>
                  Import and use components in your React app
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="p-4 bg-foreground text-background rounded-lg text-sm overflow-x-auto font-mono">
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
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute top-3 right-3 gap-2"
                    onClick={() =>
                      copy(
                        `import { Button, Card, CardHeader, CardTitle, CardContent } from "@acme/ui-${activeTheme}";`,
                        "usage"
                      )
                    }
                  >
                    {copied === "usage" ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* All Themes */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Available Themes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {themes.map((theme) => (
                  <Card
                    key={theme.id}
                    className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                      activeTheme === theme.id
                        ? "ring-2 ring-primary"
                        : "hover:border-primary/50"
                    }`}
                    onClick={() => setActiveTheme(theme.id)}
                  >
                    <div
                      className={`h-16 rounded-lg bg-gradient-to-br ${theme.gradient} mb-3`}
                    />
                    <div className="font-semibold">{theme.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {theme.tagline}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-lg bg-gradient-to-br ${currentTheme.gradient} flex items-center justify-center`}
              >
                <Boxes className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold">@acme/ui</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Built with shadcn/ui • Themed with love • MIT License
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper Components
function SectionHeader({
  icon: Icon,
  title,
  description,
  gradient,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <p className="text-lg text-muted-foreground max-w-2xl">{description}</p>
    </motion.div>
  );
}

function ColorToken({
  name,
  variable,
  className,
  onCopy,
  copied,
}: {
  name: string;
  variable: string;
  className: string;
  onCopy: () => void;
  copied: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group cursor-pointer"
      onClick={onCopy}
    >
      <div
        className={`${className} h-24 rounded-xl border border-border mb-3 flex items-end justify-end p-2 transition-all group-hover:shadow-lg`}
      >
        <span className="opacity-0 group-hover:opacity-100 transition-opacity">
          {copied ? (
            <Check className="w-4 h-4 text-white drop-shadow" />
          ) : (
            <Copy className="w-4 h-4 text-white drop-shadow" />
          )}
        </span>
      </div>
      <div className="font-medium text-sm">{name}</div>
      <code className="text-xs text-muted-foreground">{variable}</code>
    </motion.div>
  );
}

export default App;
