# @crazyone Design System - MEGA BUILD PROMPT

> Copia questo prompt in una nuova sessione Claude Code per costruire il design system completo.

---

## Contesto

Sei il lead architect del design system **@crazyone**, un monorepo React completo basato su shadcn/ui. L'obiettivo è creare IL design system più completo, audace e production-ready disponibile open source.

Il progetto esiste già su GitHub: https://github.com/Yattalo/design-system-hub

**Primo passo**: Clona il repo e rinomina tutto da `@crazyone` a `@crazyone`.

## Architettura Monorepo

```
packages/
├── core/                    # @crazyone/core - utilities, hooks, types
├── icons/                   # @crazyone/icons - icon system
└── themes/                  # 20 themed packages
    ├── brutalist/           # Raw concrete, zero pretense
    ├── vaporwave/           # Dead malls, eternal sunset
    ├── obsidian/            # Volcanic glass precision
    ├── bubblegum/           # Dopamine hits, zero regrets
    ├── wireframe/           # Sketched, never finished
    ├── terracotta/          # Sunbaked earth, timeless warmth
    ├── cyberdeck/           # Neon-lit hacker aesthetic
    ├── gelato/              # Italian summer afternoon
    ├── retrofuture/         # Tomorrow as imagined yesterday
    ├── nightclub/           # 3AM, bass drops heavy
    ├── synthwave/           # Chrome dreams, electric highways
    ├── greenhouse/          # Glass walls, growing things
    ├── blackletter/         # Gothic power, modern edge
    ├── bioluminescent/      # Deep ocean, living light
    ├── bauhaus/             # Form follows function, beautifully
    ├── campfire/            # Stories under the stars
    ├── arctic/              # Crystal clarity, frozen precision
    ├── darkroom/            # Analog process, patient craft
    ├── thunderstorm/        # Electric tension, dramatic release
    └── hologram/            # Tomorrow rendered today

apps/
├── showcase/               # Interactive demo (Vite + React)
├── docs/                   # Documentation (Astro Starlight)
└── storybook/              # Component stories

registry/                   # shadcn-compatible JSON files
```

---

## I 20 TEMI AUDACI

### 1. BRUTALIST
- **Tagline**: Raw concrete, zero pretense
- **Colors**: Charcoal `#2D2D2D` + Safety Orange `#FF4D00`
- **Typography**: Monospace, uppercase, tight tracking
- **Radius**: `0px` - sharp edges only
- **Shadows**: Harsh offset `8px 8px 0 #000`
- **Signature**: Exposed grid coordinates `[01.02]` visibili nell'UI
- **Use Case**: Architecture, dev tools, galleries

### 2. VAPORWAVE
- **Tagline**: Dead malls, eternal sunset
- **Colors**: Hot Pink `#FF6AD5` + Cyan `#01CDFE`
- **Typography**: Bold condensed + Japanese katakana decorative
- **Radius**: `0px` o `24px` - no in-between
- **Shadows**: Chromatic aberration (pink/cyan offset)
- **Signature**: VHS scan lines animati su tutte le superfici
- **Use Case**: Music, streetwear, NFT, retro gaming

### 3. OBSIDIAN
- **Tagline**: Volcanic glass precision
- **Colors**: Void Black `#0A0A0A` + Molten Core `#E94560`
- **Typography**: Thin elegant sans, generous spacing
- **Radius**: `2px` - surgical precision
- **Shadows**: None - depth via transparency layers
- **Signature**: Diagonal "crack" line decorativa sulle card
- **Use Case**: Luxury fintech, premium dev tools, stealth startups

### 4. BUBBLEGUM
- **Tagline**: Dopamine hits, zero regrets
- **Colors**: Bubblegum Pink `#FF6B9D` + Candy Yellow `#FFC75F`
- **Typography**: Rounded bouncy sans (Nunito, Quicksand)
- **Radius**: `16px` to `999px` - pills and blobs
- **Shadows**: Soft colorful drops
- **Signature**: Buttons "squish" on hover come gomma vera
- **Use Case**: Gen-Z apps, dating, casual gaming

### 5. WIREFRAME
- **Tagline**: Sketched, never finished
- **Colors**: Paper White `#FFFFFF` + Pencil `#333333` + Red Markup `#FF6B6B`
- **Typography**: Hand-drawn style (Virgil, Architects Daughter)
- **Radius**: `4px` with wobbly imperfect edges
- **Shadows**: Sketchy hand-drawn lines
- **Signature**: Borders SVG imperfetti, mai perfettamente dritti
- **Use Case**: Design tools, prototyping, creative agencies

### 6. TERRACOTTA
- **Tagline**: Sunbaked earth, timeless warmth
- **Colors**: Terracotta `#C17767` + Sage `#5B8C5A`
- **Typography**: Organic serif (Lora, Freight Text)
- **Radius**: `8px` - soft but not childish
- **Shadows**: Warm diffused with orange tint
- **Signature**: Mediterranean tile patterns come decorazioni
- **Use Case**: Wellness, artisan, sustainable brands

### 7. CYBERDECK
- **Tagline**: Neon-lit hacker aesthetic
- **Colors**: Terminal Black `#0D0D0D` + Matrix Green `#00FF41`
- **Typography**: Monospace only (JetBrains Mono)
- **Radius**: `0px` - hard tech edges
- **Shadows**: Neon glow `0 0 20px rgba(0,255,65,0.5)`
- **Signature**: Cursore lampeggiante `█` alla fine di tutti gli heading
- **Use Case**: Dev tools, cybersecurity, CLI docs

### 8. GELATO
- **Tagline**: Italian summer afternoon
- **Colors**: Vanilla `#FFF5E4` + Strawberry `#D4A5A5` + Pistachio `#A8E6CF`
- **Typography**: Elegant playful serif (Playfair Display)
- **Radius**: `12px` - scooped soft edges
- **Shadows**: Ultra-soft barely visible
- **Signature**: Multi-color gradient borders come gelato stratificato
- **Use Case**: Hospitality, restaurants, lifestyle, weddings

### 9. RETROFUTURE
- **Tagline**: Tomorrow as imagined yesterday
- **Colors**: Atomic Cream `#F4E9CD` + Space Navy `#2B4162` + Rocket Orange `#FA7921`
- **Typography**: Geometric optimistic (Futura, Avenir)
- **Radius**: `8px` with occasional starburst shapes
- **Shadows**: Long dramatic cast shadows (1960s poster)
- **Signature**: Atomic starburst/boomerang come section dividers
- **Use Case**: Space tech, retro gaming, mid-century brands

### 10. NIGHTCLUB
- **Tagline**: 3AM, bass drops heavy
- **Colors**: Blackout `#0F0F0F` + Laser Pink `#FF1493` + Strobe Gold `#FFD700`
- **Typography**: Ultra-bold extended (Bebas Neue, Druk Wide)
- **Radius**: `4px` - sharp enough to cut
- **Shadows**: Multi-colored blur simulating club lights
- **Signature**: Text con gradient animato che "respira" come luci pulsanti
- **Use Case**: Music venues, DJ portfolios, events, nightlife apps

### 11. SYNTHWAVE
- **Tagline**: Chrome dreams, electric highways
- **Colors**: Purple Night `#2B1055` + Neon Magenta `#FF2A6D` + Cyan `#05D9E8`
- **Typography**: Chrome-effect display, geometric sans body
- **Radius**: `0px` containers, `999px` buttons
- **Shadows**: Dramatic neon purple/pink/cyan halos
- **Signature**: Horizon line con grid prospettico nei backgrounds
- **Use Case**: Racing games, electronic music, 80s revival

### 12. GREENHOUSE
- **Tagline**: Glass walls, growing things
- **Colors**: Morning Mist `#F0F7F4` + Forest `#2D5A3D` + Sunlight `#F9C74F`
- **Typography**: Humanist sans with organic curves (Source Sans)
- **Radius**: `16px` - natural soft forms
- **Shadows**: Soft diffused like frosted glass
- **Signature**: Cards con effetto vetro smerigliato verde
- **Use Case**: Plant apps, sustainable startups, organic brands

### 13. BLACKLETTER
- **Tagline**: Gothic power, modern edge
- **Colors**: Ink Black `#0A0A0A` + Cardinal Red `#C41E3A`
- **Typography**: Modern blackletter headlines, clean sans body
- **Radius**: `0px` - sharp as cathedral spires
- **Shadows**: Hard dramatic, no softness
- **Signature**: Headers con gothic arch frame decorativo
- **Use Case**: Metal bands, tattoo, craft breweries, motorcycle

### 14. BIOLUMINESCENT
- **Tagline**: Deep ocean, living light
- **Colors**: Abyss `#001219` + Cyan `#00F5D4` + Jellyfish Purple `#9B5DE5`
- **Typography**: Fluid organic sans (Outfit, Sora)
- **Radius**: `24px` - organic flowing shapes
- **Shadows**: Glowing inner shadows that pulse
- **Signature**: Hover glow "pulse" come bioluminescenza disturbata
- **Use Case**: Marine biology, aquariums, sci-fi, meditation

### 15. BAUHAUS
- **Tagline**: Form follows function, beautifully
- **Colors**: Pure White + Black + Red `#FF0000` + Yellow `#FFCC00` + Blue `#0000FF`
- **Typography**: Geometric sans exclusively (Futura)
- **Radius**: `0px` o `50%` - squares and circles only
- **Shadows**: None - depth through color blocking
- **Signature**: Geometric overlapping shapes (circles on rectangles)
- **Use Case**: Design schools, architecture, art galleries

### 16. CAMPFIRE
- **Tagline**: Stories under the stars
- **Colors**: Night Sky `#1A1A2E` + Ember `#FF6B35` + Firelight `#F7C59F`
- **Typography**: Warm approachable serif (Crimson Pro)
- **Radius**: `8px` - comfortable, not clinical
- **Shadows**: Warm-tinted with orange undertones
- **Signature**: Gradient headers che flickerano come fuoco
- **Use Case**: Storytelling, podcasts, camping, community

### 17. ARCTIC
- **Tagline**: Crystal clarity, frozen precision
- **Colors**: Ice White `#F8F9FA` + Glacier Blue `#4CC9F0` + Aurora Purple `#7209B7`
- **Typography**: Thin elegant geometric (Exo 2 Light)
- **Radius**: `4px` - crystalline precise
- **Shadows**: Ultra-subtle blue-tinted
- **Signature**: Hexagonal ice crystal geometry nelle decorazioni
- **Use Case**: Climate tech, Nordic brands, data viz, minimalist SaaS

### 18. DARKROOM
- **Tagline**: Analog process, patient craft
- **Colors**: Safe Light Black `#1C1C1C` + Red `#8B0000` + Paper Cream `#F5F5DC`
- **Typography**: Classic condensed serif
- **Radius**: `0px` - photo paper edges
- **Shadows**: Soft vignette effects
- **Signature**: Film grain animato e vignettatura sulle immagini
- **Use Case**: Photography, film labs, vintage cameras

### 19. THUNDERSTORM
- **Tagline**: Electric tension, dramatic release
- **Colors**: Storm Cloud `#1B1B2F` + Lightning `#F5F749` + Rain Silver `#7F8C8D`
- **Typography**: Bold dramatic condensed (Oswald)
- **Radius**: `2px` - sharp electric edges
- **Shadows**: Dramatic offset suggesting tension
- **Signature**: Flash animation occasionale sugli alert importanti
- **Use Case**: News, sports, weather, energy companies

### 20. HOLOGRAM
- **Tagline**: Tomorrow rendered today
- **Colors**: Void `#0D0D1A` + Full spectrum iridescent gradient
- **Typography**: Futuristic sans (Space Grotesk)
- **Radius**: `12px` with gradient borders
- **Shadows**: Prismatic multi-color glow
- **Signature**: Bordi iridescenti che shiftano colore con lo scroll
- **Use Case**: Crypto, VR/AR, sci-fi, future tech

---

## 50 COMPONENTI ESSENZIALI

### Form Primitives (12)
| Component | Variants |
|-----------|----------|
| Input | default, error, success, disabled, with-icon |
| Textarea | default, error, auto-resize |
| Select | default, multi, searchable |
| Checkbox | default, indeterminate |
| Radio | default, card-style |
| Switch | default, with-icon, with-label |
| Slider | default, range, stepped |
| DatePicker | single, range, with-time |
| TimePicker | 12h, 24h |
| FileUpload | dropzone, button, avatar |
| ColorPicker | swatch, spectrum |
| OTPInput | default, with-separator |

### Layout (8)
| Component | Variants |
|-----------|----------|
| Container | sm, md, lg, xl, full |
| Stack | vertical, horizontal |
| Grid | responsive cols |
| Flex | row, column, wrap |
| Divider | horizontal, vertical, with-label |
| Spacer | fixed, flexible |
| AspectRatio | 16/9, 4/3, 1/1, custom |
| ScrollArea | default, thin |

### Navigation (8)
| Component | Variants |
|-----------|----------|
| Navbar | fixed, sticky, transparent |
| Sidebar | collapsible, mini, overlay |
| Tabs | default, pills, underline, vertical |
| Breadcrumb | default, with-icons |
| Pagination | default, compact, simple |
| Menu | default, nested |
| CommandPalette | CMD+K interface |
| Steps | horizontal, vertical, dot |

### Feedback (8)
| Component | Variants |
|-----------|----------|
| Alert | info, success, warning, error |
| Toast | default, with-action |
| Progress | bar, circular, steps |
| Skeleton | text, avatar, card |
| Spinner | default, dots, bars |
| Badge | default, dot, outline |
| Banner | default, dismissible |
| EmptyState | default, with-action |

### Overlay (6)
| Component | Variants |
|-----------|----------|
| Modal | default, full-screen, drawer |
| Drawer | left, right, bottom |
| Popover | default, with-arrow |
| Tooltip | default, rich |
| DropdownMenu | default, with-icons |
| Sheet | default, snap-points |

### Data Display (8)
| Component | Variants |
|-----------|----------|
| Table | default, sortable, selectable |
| DataGrid | virtualized, editable |
| List | default, divided, interactive |
| Avatar | default, group, with-status |
| Tag | default, removable, interactive |
| Stats | default, with-trend, with-icon |
| Timeline | vertical, horizontal |
| Accordion | default, multiple |

---

## 15 PAGE TEMPLATES

### Authentication
1. **LoginPage** - Email/password + social login
2. **RegisterPage** - Multi-step registration
3. **ForgotPassword** - Password recovery flow

### Dashboard
4. **DashboardLayout** - Sidebar + topbar + content area
5. **StatsOverview** - Metrics cards with charts
6. **DataTablePage** - CRUD table with filters
7. **SettingsPage** - Multi-section settings tabs

### Marketing
8. **HeroSection** - Landing page hero variants
9. **FeaturesGrid** - Feature showcase grid
10. **PricingTable** - 3-tier pricing comparison
11. **TestimonialSlider** - Customer reviews carousel

### E-commerce
12. **ProductCard** - Product listing item
13. **CheckoutForm** - Multi-step checkout

### Content
14. **BlogPostLayout** - Article with sidebar
15. **FAQAccordion** - Collapsible FAQ

---

## Requisiti Tecnici

- **Namespace**: `@crazyone`
- **Package Manager**: bun
- **Build**: tsup (ESM + CJS + .d.ts)
- **Styling**: Tailwind CSS + CSS Variables (HSL)
- **Variants**: class-variance-authority (CVA)
- **Monorepo**: bun workspaces + Turborepo
- **Registry**: shadcn-compatible JSON per ogni tema
- **Accessibility**: WCAG AA minimum, keyboard navigation, screen reader support

## Workflow di Sviluppo

Per ogni sessione:
1. Crea **3-5 componenti** con tutte le varianti
2. Applica styling per **TUTTI i 20 temi**
3. Aggiungi al **showcase** interattivo
4. Genera **registry JSON** per shadcn
5. Scrivi **test** con Vitest

## Comandi

```bash
bun install           # Install dependencies
bun run dev           # Dev mode
bun run build         # Build all packages
bun run build:registry # Generate shadcn registry
bun run test          # Run tests
bun run changeset     # Create version changeset
```

---

## INIZIA ORA

1. Clona: `git clone https://github.com/Yattalo/design-system-hub`
2. Rinomina `@crazyone` → `@crazyone` in tutti i file
3. Crea la struttura per i 20 temi
4. Inizia con i componenti **Input**, **Select**, **Checkbox**, **Switch**, **Slider**
5. Applica tutti i 20 temi
6. Aggiorna showcase

**GO WILD. BE AUDACIOUS. MAKE DESIGNERS JEALOUS.**
