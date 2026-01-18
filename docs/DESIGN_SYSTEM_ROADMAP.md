# Design System Roadmap

Piano di sviluppo per trasformare ogni tema in un design system completo e distintivo.

## Stato Attuale

| # | Tema | Categoria | Status | Sessione |
|---|------|-----------|--------|----------|
| 1 | **brutalist** | Flagship | ✅ COMPLETATO | 1 |
| 2 | vaporwave | Flagship | 🔲 Da fare | 2 |
| 3 | cyberdeck | Flagship | 🔲 Da fare | 3 |
| 4 | hologram | Flagship | 🔲 Da fare | 4 |
| 5 | bubblegum | Flagship | 🔲 Da fare | 5 |
| 6 | obsidian | Elemental | 🔲 Da fare | 6 |
| 7 | campfire | Elemental | 🔲 Da fare | 7 |
| 8 | arctic | Elemental | 🔲 Da fare | 8 |
| 9 | thunderstorm | Elemental | 🔲 Da fare | 9 |
| 10 | synthwave | Retro | 🔲 Da fare | 10 |
| 11 | retrofuture | Retro | 🔲 Da fare | 11 |
| 12 | darkroom | Retro | 🔲 Da fare | 12 |
| 13 | terracotta | Organic | 🔲 Da fare | 13 |
| 14 | gelato | Organic | 🔲 Da fare | 14 |
| 15 | greenhouse | Organic | 🔲 Da fare | 15 |
| 16 | bioluminescent | Organic | 🔲 Da fare | 16 |
| 17 | blackletter | Typography | 🔲 Da fare | 17 |
| 18 | wireframe | Typography | 🔲 Da fare | 18 |
| 19 | nightclub | Nightlife | 🔲 Da fare | 19 |
| 20 | bauhaus | Geometric | 🔲 Da fare | 20 |
| 21 | vega | Professional | 🔲 Da fare | 21 |
| 22 | nova | Professional | 🔲 Da fare | 22 |
| 23 | maia | Professional | 🔲 Da fare | 23 |
| 24 | lyra | Professional | 🔲 Da fare | 24 |
| 25 | mira | Professional | 🔲 Da fare | 25 |

---

## Template per Ogni Sessione

### Deliverables Richiesti

Per ogni tema, creare:

1. **`DESIGN_SYSTEM.md`** - Documentazione completa
   - Filosofia e principi di design
   - Color palette (primary, accent, background, foreground, semantic colors)
   - Typography system (3 font: display, body, mono)
   - Effects system (shadows, glows, textures, patterns)
   - Animation system (5+ keyframes distintivi)
   - Spacing & layout rules
   - Component patterns

2. **`variables.css`** - CSS Foundation
   - @import font (Google Fonts o self-hosted)
   - CSS custom properties (colori, tipografia, shadows, spacing)
   - Base styles (body, headings, code)
   - Utility classes specifiche del tema
   - Dark mode variant

3. **`animations.css`** - Animazioni distintive
   - 5-10 keyframes unici per il tema
   - Timing functions personalizzate
   - Utility classes .animate-*
   - Supporto reduced-motion

4. **Componenti aggiornati**
   - Button (tutte le varianti)
   - Card (con features specifiche del tema)
   - Altri componenti esistenti

---

## Piano per Sessione

### Sessione 2: VAPORWAVE
**Estetica**: 80s nostalgia, gradients, retro terminals, Japanese aesthetic

**Palette proposta**:
- Primary: Hot Pink `#FF6AD5`
- Accent: Cyan `#00FFFF`
- Background: Deep Purple `#1A0A2E`
- Neon accents con glow effects

**Typography**:
- Display: VT323 o Press Start 2P (pixel/retro)
- Body: Space Mono (terminal feel)
- Decorative: Noto Sans JP (Japanese aesthetic)

**Effects distintivi**:
- Gradient backgrounds (pink → cyan → purple)
- Neon glow (box-shadow con blur)
- Grid perspective (CSS grid con transform)
- Scanlines overlay
- Chrome text effect

**Animazioni**:
- `vaporwave-pulse` - Neon pulse
- `vaporwave-glitch` - VHS glitch
- `vaporwave-float` - Levitation effect
- `vaporwave-scanline` - CRT scanline
- `vaporwave-gradient` - Animated gradient

---

### Sessione 3: CYBERDECK
**Estetica**: Terminal aesthetic, green phosphor, hacker vibes

**Palette proposta**:
- Primary: Phosphor Green `#00FF41`
- Accent: Amber `#FFB000`
- Background: Terminal Black `#0D0D0D`
- Text: Matrix green variants

**Typography**:
- Display: Share Tech Mono
- Body: Fira Code
- System: IBM Plex Mono

**Effects distintivi**:
- Terminal cursor blink
- Matrix rain background
- CRT screen curve effect
- Phosphor glow
- Boot sequence animations

---

### Sessione 4: HOLOGRAM
**Estetica**: Translucent layers, prismatic effects, futuristic

**Palette proposta**:
- Primary: Holographic gradient
- Base: Translucent white/black
- Prismatic: Rainbow refraction

**Typography**:
- Display: Orbitron
- Body: Inter (clean, futuristic)

**Effects distintivi**:
- Prismatic gradients (rainbow)
- Glassmorphism (blur + transparency)
- Holographic shimmer
- Depth layers (z-axis)
- Chromatic aberration

---

### Sessione 5: BUBBLEGUM
**Estetica**: Playful Y2K, bouncy, candy colors, kawaii

**Palette proposta**:
- Primary: Bubblegum Pink `#FF69B4`
- Secondary: Mint Green `#98FF98`
- Accent: Lavender, Baby Blue
- Background: Soft pastels

**Typography**:
- Display: Fredoka One (bouncy, rounded)
- Body: Nunito (friendly, soft)

**Effects distintivi**:
- Bouncy animations (spring physics)
- Soft shadows (no hard edges)
- Rounded everything (border-radius: 9999px)
- Confetti particles
- Bubble float effect

---

### Sessioni 6-9: ELEMENTAL (Obsidian, Campfire, Arctic, Thunderstorm)

Temi ispirati a elementi naturali con effetti atmosferici.

| Tema | Elemento | Colore Key | Effetto Key |
|------|----------|------------|-------------|
| Obsidian | Lava/Glass | Volcanic Red + Black | Glass morphism + ember glow |
| Campfire | Fire | Orange/Amber/Red | Flickering flames, ember particles |
| Arctic | Ice | Ice Blue/White | Frost crystals, aurora gradients |
| Thunderstorm | Lightning | Electric Blue/Purple | Lightning flashes, rain drops |

---

### Sessioni 10-12: RETRO (Synthwave, Retrofuture, Darkroom)

| Tema | Era | Colore Key | Effetto Key |
|------|-----|------------|-------------|
| Synthwave | 1980s | Neon Pink + Cyan | Grid perspective, chrome, sun |
| Retrofuture | 1950s | Atomic teal + cream | Starbursts, orbit animations |
| Darkroom | Photography | Red safelight + black | Film grain, vignette |

---

### Sessioni 13-16: ORGANIC (Terracotta, Gelato, Greenhouse, Bioluminescent)

| Tema | Ispirazione | Colore Key | Effetto Key |
|------|-------------|------------|-------------|
| Terracotta | Mediterranean | Clay orange/brown | Texture terracotta, warm shadows |
| Gelato | Italian pastry | Pastel scoops | Soft melty gradients |
| Greenhouse | Plants | Leaf greens | Organic growth, photosynthesis |
| Bioluminescent | Deep sea | Glow blue/green | Jellyfish pulse, underwater |

---

### Sessioni 17-18: TYPOGRAPHY (Blackletter, Wireframe)

| Tema | Stile | Font Key | Effetto Key |
|------|-------|----------|-------------|
| Blackletter | Gothic | Fraktur/UnifrakturMaguntia | Illuminated letters, ink texture |
| Wireframe | Blueprint | Architect's Daughter | Hand-drawn lines, sketch effect |

---

### Sessioni 19-20: SPECIAL (Nightclub, Bauhaus)

| Tema | Vibe | Colore Key | Effetto Key |
|------|------|------------|-------------|
| Nightclub | Club/VIP | Deep purple + gold | Strobe, laser, bass pulse |
| Bauhaus | Geometric | Primary (R/Y/B) + Black | Strict geometry, no curves |

---

### Sessioni 21-25: PROFESSIONAL (Vega, Nova, Maia, Lyra, Mira)

Temi business-oriented con personalità distinte.

| Tema | Carattere | Colore Key | Use Case |
|------|-----------|------------|----------|
| Vega | Sharp, modern | Enterprise Blue | Dashboards, analytics |
| Nova | Soft, warm | Warm Orange | Consumer apps, friendly |
| Maia | Minimal | Monochrome Gray | Documentation, clean |
| Lyra | Vibrant | Purple/Violet | Marketing, creative |
| Mira | Corporate | Navy Blue | Business, formal |

---

## Checklist per Ogni Sessione

```markdown
## Sessione N: [NOME_TEMA]

### Pre-work
- [ ] Leggere questa roadmap
- [ ] Aprire Storybook e Showcase per testing
- [ ] Leggere i file esistenti del tema

### Deliverables
- [ ] Creare `DESIGN_SYSTEM.md` con documentazione completa
- [ ] Aggiornare `variables.css` con nuova palette e fonts
- [ ] Aggiornare `animations.css` con 5+ keyframes distintivi
- [ ] Aggiornare `button.tsx` con tutte le varianti
- [ ] Aggiornare `card.tsx` con features distintive
- [ ] Aggiornare altri componenti se necessario

### Quality Check
- [ ] Build passa senza errori
- [ ] Storybook mostra i componenti correttamente
- [ ] Showcase mostra il tema
- [ ] Dark mode funziona (se applicabile)
- [ ] Animazioni rispettano reduced-motion

### Commit
- [ ] Commit con messaggio dettagliato
- [ ] Aggiornare questa roadmap (status = ✅)
```

---

## Comandi Utili

```bash
# Avviare ambiente di sviluppo
bun run dev

# Avviare Storybook
cd apps/storybook && bun run storybook

# Avviare Showcase
cd apps/showcase && bun run dev

# Build singolo tema
bun run build --filter=@crazyone/ui-[tema]

# Build tutti
bun run build
```

---

## Note

- **Una sessione = Un tema completo**
- Ogni design system deve essere AUDACE e DISTINTIVO
- Non limitarsi a cambiare colori - creare un'identità visiva completa
- Riferimento qualità: TGI Acid Lux (vedi esempio nel prompt originale)
- Usare l'agente `avant-garde-frontend-architect` con ULTRATHINK per design complessi

---

*Ultimo aggiornamento: Sessione 1 (Brutalist completato)*
