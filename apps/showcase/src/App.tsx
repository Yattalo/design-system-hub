import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Palette,
  Layers,
  Sparkles,
  Copy,
  Check,
  ChevronRight,
  Zap,
  Github,
  Twitter,
  Mail,
  Terminal,
  Boxes,
  Download,
  MousePointerClick,
  FormInput,
  ToggleLeft,
  SlidersHorizontal,
  CheckSquare,
  ListFilter,
  Menu,
  X,
  Star,
} from "lucide-react";

// Import flagship hero components
import {
  BrutalistHero,
  VaporwaveHero,
  CyberdeckHero,
  HologramHero,
  BubblegumHero,
} from "./components/heroes";

// Import components from all 20 themes
import * as Brutalist from "@crazyone/ui-brutalist";
import * as Vaporwave from "@crazyone/ui-vaporwave";
import * as Obsidian from "@crazyone/ui-obsidian";
import * as Bubblegum from "@crazyone/ui-bubblegum";
import * as Wireframe from "@crazyone/ui-wireframe";
import * as Terracotta from "@crazyone/ui-terracotta";
import * as Cyberdeck from "@crazyone/ui-cyberdeck";
import * as Gelato from "@crazyone/ui-gelato";
import * as Retrofuture from "@crazyone/ui-retrofuture";
import * as Nightclub from "@crazyone/ui-nightclub";
import * as Synthwave from "@crazyone/ui-synthwave";
import * as Greenhouse from "@crazyone/ui-greenhouse";
import * as Blackletter from "@crazyone/ui-blackletter";
import * as Bioluminescent from "@crazyone/ui-bioluminescent";
import * as Bauhaus from "@crazyone/ui-bauhaus";
import * as Campfire from "@crazyone/ui-campfire";
import * as Arctic from "@crazyone/ui-arctic";
import * as Darkroom from "@crazyone/ui-darkroom";
import * as Thunderstorm from "@crazyone/ui-thunderstorm";
import * as Hologram from "@crazyone/ui-hologram";

type ThemeId =
  | "brutalist" | "vaporwave" | "obsidian" | "bubblegum" | "wireframe"
  | "terracotta" | "cyberdeck" | "gelato" | "retrofuture" | "nightclub"
  | "synthwave" | "greenhouse" | "blackletter" | "bioluminescent" | "bauhaus"
  | "campfire" | "arctic" | "darkroom" | "thunderstorm" | "hologram";

interface ThemeConfig {
  id: ThemeId;
  name: string;
  tagline: string;
  description: string;
  gradient: string;
  category: "bold" | "retro" | "nature" | "dark" | "playful";
}

const themes: ThemeConfig[] = [
  { id: "brutalist", name: "Brutalist", tagline: "Raw concrete, zero pretense", description: "Exposed structure, harsh shadows, monospace typography", gradient: "from-neutral-800 via-orange-600 to-orange-500", category: "bold" },
  { id: "vaporwave", name: "Vaporwave", tagline: "Dead malls, eternal sunset", description: "Hot pink and cyan, VHS aesthetic, chromatic aberration", gradient: "from-pink-400 via-purple-500 to-cyan-400", category: "retro" },
  { id: "obsidian", name: "Obsidian", tagline: "Volcanic glass precision", description: "Void black with molten accents, surgical precision", gradient: "from-neutral-900 via-rose-600 to-rose-500", category: "dark" },
  { id: "bubblegum", name: "Bubblegum", tagline: "Dopamine hits, zero regrets", description: "Bouncy pink and yellow, playful squish effects", gradient: "from-pink-400 via-pink-500 to-amber-400", category: "playful" },
  { id: "wireframe", name: "Wireframe", tagline: "Sketched, never finished", description: "Hand-drawn borders, paper texture, red markup", gradient: "from-neutral-300 via-neutral-400 to-red-400", category: "playful" },
  { id: "terracotta", name: "Terracotta", tagline: "Sunbaked earth, timeless warmth", description: "Mediterranean warmth, organic curves, sage accents", gradient: "from-orange-600 via-amber-600 to-green-600", category: "nature" },
  { id: "cyberdeck", name: "Cyberdeck", tagline: "Neon-lit hacker aesthetic", description: "Terminal black with matrix green, blinking cursors", gradient: "from-black via-green-500 to-green-400", category: "dark" },
  { id: "gelato", name: "Gelato", tagline: "Italian summer afternoon", description: "Pastel layers, scooped edges, elegant playfulness", gradient: "from-pink-200 via-green-200 to-amber-200", category: "playful" },
  { id: "retrofuture", name: "Retrofuture", tagline: "Tomorrow as imagined yesterday", description: "Atomic age optimism, starbursts, long shadows", gradient: "from-amber-100 via-blue-700 to-orange-500", category: "retro" },
  { id: "nightclub", name: "Nightclub", tagline: "3AM, bass drops heavy", description: "Blackout with laser pink and strobe gold", gradient: "from-black via-pink-600 to-amber-400", category: "dark" },
  { id: "synthwave", name: "Synthwave", tagline: "Chrome dreams, electric highways", description: "Purple night sky with neon magenta and cyan", gradient: "from-purple-900 via-pink-600 to-cyan-400", category: "retro" },
  { id: "greenhouse", name: "Greenhouse", tagline: "Glass walls, growing things", description: "Morning mist with forest green and sunlight yellow", gradient: "from-green-100 via-green-600 to-amber-400", category: "nature" },
  { id: "blackletter", name: "Blackletter", tagline: "Gothic power, modern edge", description: "Ink black with cardinal red, gothic arch frames", gradient: "from-neutral-900 via-neutral-800 to-red-700", category: "bold" },
  { id: "bioluminescent", name: "Bioluminescent", tagline: "Deep ocean, living light", description: "Abyss black with cyan and jellyfish purple glow", gradient: "from-blue-950 via-cyan-500 to-purple-500", category: "dark" },
  { id: "bauhaus", name: "Bauhaus", tagline: "Form follows function, beautifully", description: "Pure primary colors, geometric shapes, clean lines", gradient: "from-red-500 via-yellow-400 to-blue-600", category: "bold" },
  { id: "campfire", name: "Campfire", tagline: "Stories under the stars", description: "Night sky with ember orange and firelight warmth", gradient: "from-slate-800 via-orange-500 to-amber-300", category: "nature" },
  { id: "arctic", name: "Arctic", tagline: "Crystal clarity, frozen precision", description: "Ice white with glacier blue and aurora purple", gradient: "from-white via-cyan-400 to-purple-500", category: "nature" },
  { id: "darkroom", name: "Darkroom", tagline: "Analog process, patient craft", description: "Safe light black with darkroom red and paper cream", gradient: "from-neutral-900 via-red-900 to-amber-100", category: "retro" },
  { id: "thunderstorm", name: "Thunderstorm", tagline: "Electric tension, dramatic release", description: "Storm cloud gray with lightning yellow and rain silver", gradient: "from-slate-800 via-slate-600 to-yellow-400", category: "bold" },
  { id: "hologram", name: "Hologram", tagline: "Tomorrow rendered today", description: "Void black with iridescent spectrum gradients", gradient: "from-purple-600 via-pink-500 to-cyan-400", category: "dark" },
];

// Base theme module interface (common components across all themes)
type BaseThemeModule = {
  Button: typeof Brutalist.Button;
  Card: typeof Brutalist.Card;
  CardHeader: typeof Brutalist.CardHeader;
  CardTitle: typeof Brutalist.CardTitle;
  CardDescription: typeof Brutalist.CardDescription;
  CardContent: typeof Brutalist.CardContent;
  CardFooter: typeof Brutalist.CardFooter;
  Input: typeof Brutalist.Input;
  Checkbox: typeof Brutalist.Checkbox;
  Switch: typeof Brutalist.Switch;
  Slider: typeof Brutalist.Slider;
  Select: typeof Brutalist.Select;
  SelectTrigger: typeof Brutalist.SelectTrigger;
  SelectValue: typeof Brutalist.SelectValue;
  SelectContent: typeof Brutalist.SelectContent;
  SelectItem: typeof Brutalist.SelectItem;
};

// Map theme IDs to their modules
const themeModules: Record<ThemeId, BaseThemeModule> = {
  brutalist: Brutalist,
  vaporwave: Vaporwave,
  obsidian: Obsidian,
  bubblegum: Bubblegum,
  wireframe: Wireframe,
  terracotta: Terracotta,
  cyberdeck: Cyberdeck,
  gelato: Gelato,
  retrofuture: Retrofuture,
  nightclub: Nightclub,
  synthwave: Synthwave,
  greenhouse: Greenhouse,
  blackletter: Blackletter,
  bioluminescent: Bioluminescent,
  bauhaus: Bauhaus,
  campfire: Campfire,
  arctic: Arctic,
  darkroom: Darkroom,
  thunderstorm: Thunderstorm,
  hologram: Hologram,
};

const sections = [
  { id: "hero", label: "Overview", icon: Sparkles },
  { id: "themes", label: "Themes", icon: Palette },
  { id: "buttons", label: "Buttons", icon: MousePointerClick },
  { id: "inputs", label: "Inputs", icon: FormInput },
  { id: "checkboxes", label: "Checkboxes", icon: CheckSquare },
  { id: "switches", label: "Switches", icon: ToggleLeft },
  { id: "sliders", label: "Sliders", icon: SlidersHorizontal },
  { id: "selects", label: "Selects", icon: ListFilter },
  { id: "cards", label: "Cards", icon: Layers },
  { id: "install", label: "Install", icon: Terminal },
];

// Flagship themes with custom heroes
const flagshipThemes: ThemeId[] = ["brutalist", "vaporwave", "cyberdeck", "hologram", "bubblegum"];

// Hero component map
const heroComponents: Partial<Record<ThemeId, React.ComponentType>> = {
  brutalist: BrutalistHero,
  vaporwave: VaporwaveHero,
  cyberdeck: CyberdeckHero,
  hologram: HologramHero,
  bubblegum: BubblegumHero,
};

function useCopyToClipboard() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };
  return { copied, copy };
}

function App() {
  const [activeTheme, setActiveTheme] = useState<ThemeId>("brutalist");
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const { copied, copy } = useCopyToClipboard();

  const currentTheme = themes.find((t) => t.id === activeTheme)!;
  const ThemeModule = themeModules[activeTheme];
  const { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Input, Checkbox, Switch, Slider, Select, SelectTrigger, SelectValue, SelectContent, SelectItem } = ThemeModule;

  const filteredThemes = categoryFilter
    ? themes.filter((t) => t.category === categoryFilter)
    : themes;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <div
      data-theme={activeTheme}
      className="min-h-screen bg-background text-foreground transition-all duration-500"
    >
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
      >
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${currentTheme.gradient} flex items-center justify-center`}>
                <Boxes className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold">@crazyone</span>
            </div>

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

            <button
              className="lg:hidden p-2 rounded-md hover:bg-muted"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

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
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left"
                  >
                    <section.icon className="w-5 h-5" />
                    {section.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section - Show flagship hero or default */}
      <section id="hero">
        <AnimatePresence mode="wait">
          {flagshipThemes.includes(activeTheme) ? (
            <motion.div
              key={activeTheme}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {heroComponents[activeTheme] && (() => {
                const HeroComponent = heroComponents[activeTheme]!;
                return <HeroComponent />;
              })()}
            </motion.div>
          ) : (
            <motion.div
              key="default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative min-h-screen flex items-center pt-16 overflow-hidden"
            >
              <div className="absolute inset-0 overflow-hidden">
                <div className={`absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br ${currentTheme.gradient} opacity-10 blur-3xl`} />
                <div className={`absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl ${currentTheme.gradient} opacity-10 blur-3xl`} />
              </div>

              <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                      <Sparkles className="w-4 h-4" />
                      <span>20 Themes • 7 Components • Infinite Audacity</span>
                    </div>

                    <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
                      <span className="block">@crazyone</span>
                      <span className={`block bg-gradient-to-r ${currentTheme.gradient} bg-clip-text text-transparent`}>
                        {currentTheme.name}
                      </span>
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed">
                      {currentTheme.description}. The most audacious design system ever built on shadcn/ui.
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

                    <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
                      {[
                        { label: "Themes", value: "20" },
                        { label: "Components", value: "7+" },
                        { label: "Personalities", value: "∞" },
                      ].map((stat) => (
                        <div key={stat.label}>
                          <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-4 gap-3"
                  >
                    {themes.slice(0, 16).map((theme, index) => (
                      <motion.button
                        key={theme.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.03 }}
                        whileHover={{ scale: 1.1, zIndex: 10 }}
                        onClick={() => setActiveTheme(theme.id)}
                        className={`aspect-square rounded-xl bg-gradient-to-br ${theme.gradient} transition-all duration-200 ${
                          activeTheme === theme.id ? "ring-2 ring-offset-2 ring-offset-background ring-primary" : "opacity-70 hover:opacity-100"
                        }`}
                        title={theme.name}
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Flagship theme indicator */}
        {flagshipThemes.includes(activeTheme) && (
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 py-3 px-4 text-center">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              <Star className="w-4 h-4 fill-current" />
              Flagship Theme with Custom Hero Experience
              <Star className="w-4 h-4 fill-current" />
            </span>
          </div>
        )}
      </section>

      {/* Themes Section */}
      <section id="themes" className="py-24 border-t border-border">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={Palette}
            title="20 Audacious Themes"
            description="Each theme is a complete personality, not just a color swap."
            gradient={currentTheme.gradient}
          />

          <div className="flex flex-wrap gap-2 mb-8">
            <Button
              variant={categoryFilter === null ? "default" : "outline"}
              size="sm"
              onClick={() => setCategoryFilter(null)}
            >
              All
            </Button>
            {["bold", "retro", "dark", "nature", "playful"].map((cat) => (
              <Button
                key={cat}
                variant={categoryFilter === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setCategoryFilter(cat)}
                className="capitalize"
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredThemes.map((theme) => (
              <motion.div
                key={theme.id}
                layout
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveTheme(theme.id)}
                className={`cursor-pointer rounded-xl border-2 p-4 transition-all ${
                  activeTheme === theme.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className={`h-20 rounded-lg bg-gradient-to-br ${theme.gradient} mb-3`} />
                <h3 className="font-semibold">{theme.name}</h3>
                <p className="text-xs text-muted-foreground">{theme.tagline}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Buttons Section */}
      <section id="buttons" className="py-24 bg-muted/30">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={MousePointerClick}
            title="Buttons"
            description="Six variants, three sizes, each with theme-specific personality."
            gradient={currentTheme.gradient}
          />

          <Card>
            <CardContent className="p-8">
              <div className="grid gap-8">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-4">Variants</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="link">Link</Button>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-4">Sizes</h3>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button size="sm">Small</Button>
                    <Button>Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon"><Zap className="w-4 h-4" /></Button>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-4">With Icons</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button className="gap-2"><Github className="w-4 h-4" />GitHub</Button>
                    <Button variant="outline" className="gap-2">Learn More<ChevronRight className="w-4 h-4" /></Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Inputs Section */}
      <section id="inputs" className="py-24 border-t border-border">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={FormInput}
            title="Inputs"
            description="Text inputs with size and state variants."
            gradient={currentTheme.gradient}
          />

          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-muted-foreground">Sizes</h3>
                  <Input inputSize="sm" placeholder="Small input" />
                  <Input placeholder="Default input" />
                  <Input inputSize="lg" placeholder="Large input" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-muted-foreground">States</h3>
                  <Input placeholder="Default state" />
                  <Input variant="error" placeholder="Error state" />
                  <Input variant="success" placeholder="Success state" />
                  <Input disabled placeholder="Disabled state" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Checkboxes Section */}
      <section id="checkboxes" className="py-24 bg-muted/30">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={CheckSquare}
            title="Checkboxes"
            description="Accessible checkboxes with theme-specific styling."
            gradient={currentTheme.gradient}
          />

          <Card>
            <CardContent className="p-8">
              <div className="flex flex-wrap gap-8">
                <label className="flex items-center gap-3 cursor-pointer">
                  <Checkbox />
                  <span>Unchecked</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <Checkbox defaultChecked />
                  <span>Checked</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <Checkbox disabled />
                  <span className="text-muted-foreground">Disabled</span>
                </label>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Switches Section */}
      <section id="switches" className="py-24 border-t border-border">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={ToggleLeft}
            title="Switches"
            description="Toggle switches for binary settings."
            gradient={currentTheme.gradient}
          />

          <Card>
            <CardContent className="p-8">
              <div className="flex flex-wrap gap-8">
                <label className="flex items-center gap-3 cursor-pointer">
                  <Switch />
                  <span>Off</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <Switch defaultChecked />
                  <span>On</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <Switch disabled />
                  <span className="text-muted-foreground">Disabled</span>
                </label>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sliders Section */}
      <section id="sliders" className="py-24 bg-muted/30">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={SlidersHorizontal}
            title="Sliders"
            description="Range sliders for value selection."
            gradient={currentTheme.gradient}
          />

          <Card>
            <CardContent className="p-8">
              <div className="space-y-8 max-w-md">
                <div>
                  <label className="text-sm font-medium mb-4 block">Default Slider</label>
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-4 block">Low Value</label>
                  <Slider defaultValue={[25]} max={100} step={1} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-4 block">High Value</label>
                  <Slider defaultValue={[75]} max={100} step={1} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Selects Section */}
      <section id="selects" className="py-24 border-t border-border">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={ListFilter}
            title="Selects"
            description="Dropdown select menus with search and grouping."
            gradient={currentTheme.gradient}
          />

          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <label className="text-sm font-medium mb-2 block">Basic Select</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="brutalist">Brutalist</SelectItem>
                      <SelectItem value="vaporwave">Vaporwave</SelectItem>
                      <SelectItem value="obsidian">Obsidian</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">With Selection</label>
                  <Select defaultValue="cyberdeck">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cyberdeck">Cyberdeck</SelectItem>
                      <SelectItem value="synthwave">Synthwave</SelectItem>
                      <SelectItem value="hologram">Hologram</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Disabled</label>
                  <Select disabled>
                    <SelectTrigger>
                      <SelectValue placeholder="Disabled" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option">Option</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cards Section */}
      <section id="cards" className="py-24 bg-muted/30">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={Layers}
            title="Cards"
            description="Flexible card primitives for any content."
            gradient={currentTheme.gradient}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Basic Card</CardTitle>
                <CardDescription>A simple card with header, content and footer.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cards adapt to each theme's unique personality while maintaining consistency.
                </p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline" size="sm">Cancel</Button>
                <Button size="sm">Save</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Feature Card</CardTitle>
                <CardDescription>Highlight key features</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Theme-specific styling", "20 unique personalities", "Production ready"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className={`h-32 bg-gradient-to-br ${currentTheme.gradient}`} />
              <CardHeader>
                <CardTitle>@crazyone/ui-{activeTheme}</CardTitle>
                <CardDescription>Theme package</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full gap-2">
                  <Terminal className="w-4 h-4" />
                  Install
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="install" className="py-24 border-t border-border">
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
                  { pm: "bun", cmd: `bun add @crazyone/ui-${activeTheme}` },
                  { pm: "npm", cmd: `npm install @crazyone/ui-${activeTheme}` },
                  { pm: "pnpm", cmd: `pnpm add @crazyone/ui-${activeTheme}` },
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
                        <><Check className="w-4 h-4" />Copied</>
                      ) : (
                        <><Copy className="w-4 h-4" />Copy</>
                      )}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${currentTheme.gradient} flex items-center justify-center`}>
                <Boxes className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold">@crazyone</span>
            </div>
            <p className="text-sm text-muted-foreground">
              20 Audacious Themes • Built on shadcn/ui • MIT License
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon"><Github className="w-5 h-5" /></Button>
              <Button variant="ghost" size="icon"><Twitter className="w-5 h-5" /></Button>
              <Button variant="ghost" size="icon"><Mail className="w-5 h-5" /></Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

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
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <p className="text-lg text-muted-foreground max-w-2xl">{description}</p>
    </motion.div>
  );
}

export default App;
