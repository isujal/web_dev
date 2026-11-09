---
name: The Ducktators · FRC 11745
description: A film premiere for a regiment of builders; purple light on a stage-black set.
colors:
  electric: "#8B3DFF"
  ducktator: "#5E2A84"
  violet: "#5B47FF"
  lavender: "#C9A6FF"
  mist: "#D9CDF2"
  night: "#22083E"
  charcoal: "#131313"
  stage-0: "#05020A"
  stage-1: "#0B0614"
  stage-2: "#140A24"
  stage-3: "#1D0F33"
  projector: "#F6F1FF"
  spill: "#A064FF"
  specular: "#E8D6FF"
  text: "#E4DAF7"
  text-dim: "#A898C6"
  line: "rgba(201, 166, 255, .16)"
  line-strong: "rgba(201, 166, 255, .32)"
  glass-fill: "rgba(14, 8, 26, .46)"
  ok: "#3EE08A"
  err: "#FF7A90"
typography:
  display:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 5.4vw, 5rem)"
    fontWeight: 300
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  title-card:
    fontFamily: "Michroma, Arial, sans-serif"
    fontSize: "clamp(1.7rem, 6.2vw, 5.4rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "0.26em"
  giant:
    fontFamily: "Anton, Arial Narrow, sans-serif"
    fontSize: "min(54vw, 78vh)"
    fontWeight: 400
    lineHeight: 0.8
    letterSpacing: "-0.01em"
  script:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(1.45rem, 2.6vw, 2.5rem)"
    fontWeight: 300
    lineHeight: 1.32
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2.3rem)"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(16px, 1.05vw + 10px, 18px)"
    fontWeight: 400
    lineHeight: 1.6
  lede:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(1.05rem, .6vw + .9rem, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.6
  label-wide:
    fontFamily: "Michroma, Arial, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.28em"
  numeral:
    fontFamily: "Orbitron, Arial, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.12em"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.7rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.14em"
rounded:
  still: "6px"
  ctl: "12px"
  chip: "14px"
  card: "18px"
  hero: "26px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  max: "1280px"
  section: "clamp(96px, 14vw, 200px)"
  block: "56px"
components:
  button-primary:
    backgroundColor: "{colors.electric}"
    textColor: "{colors.projector}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "16px 26px"
  button-primary-sm:
    padding: "11px 18px"
  button-glass:
    backgroundColor: "{colors.glass-fill}"
    textColor: "{colors.projector}"
    rounded: "{rounded.pill}"
    padding: "16px 26px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.lavender}"
    rounded: "{rounded.pill}"
    padding: "16px 26px"
  nav-pill:
    rounded: "{rounded.pill}"
    padding: "8px 8px 8px 12px"
    width: "min(100% - 24px, 1180px)"
  chip:
    backgroundColor: "{colors.glass-fill}"
    textColor: "{colors.projector}"
    rounded: "{rounded.chip}"
    padding: "10px 16px 10px 10px"
  tag:
    textColor: "{colors.text-dim}"
    typography: "{typography.mono}"
    rounded: "{rounded.pill}"
    padding: "6px 9px"
  field:
    backgroundColor: "rgba(5, 2, 10, .55)"
    textColor: "{colors.projector}"
    rounded: "{rounded.ctl}"
    padding: "13px 14px"
  filmstrip-frame:
    backgroundColor: "#07040C"
    rounded: "{rounded.still}"
    width: "clamp(280px, 30vw, 420px)"
  domain-row:
    textColor: "{colors.text}"
    typography: "{typography.headline}"
    padding: "24px 4px"
  tier:
    backgroundColor: "{colors.glass-fill}"
    rounded: "{rounded.card}"
    padding: "26px 22px"
  officer-card:
    backgroundColor: "{colors.stage-2}"
    rounded: "{rounded.card}"
    padding: "22px"
  enlistment-pass:
    backgroundColor: "{colors.glass-fill}"
    rounded: "{rounded.hero}"
    padding: "clamp(22px, 3vw, 34px)"
  credits-roll:
    backgroundColor: "#000000"
    textColor: "{colors.projector}"
---

> **v2 update (keynote redesign):** the site now uses **Geist** (display 700–800, tracking −0.045em to −0.06em) and **Geist Mono** for labels and numbers; Michroma is kept only for the logotype. The palette adds **regimental brass `#E9B949`** (primary buttons, stars, highlights) and **paper `#F5F3F9`** light sections alongside black `#000`. Outfit, Orbitron and Anton are no longer loaded. Tokens below that predate v2 are superseded by the variables at the top of `css/style.css` until this file is regenerated.

# Design System: The Ducktators · FRC 11745

## Overview

**Creative North Star: "The Premiere Night"**

The site is a film premiere for a regiment that has not fought yet. The set is stage black tinted purple; the only light is purple light (a ceiling spill, a projector beam, rim glow on type and badge). Film grammar does the structural work: a running timecode HUD with scene slates, letterbox bars that close in on the title sequence, a sprocketed filmstrip for the season, call-sheet rows, and a scroll-scrubbed end-credits roll with open `[Your name here]` slots.

Density is low and cinematic: one idea per scene, generous section padding, long light Outfit lines. Liquid-glass plates (real SVG displacement on Chromium with a fine pointer, frosted blur elsewhere) hold the interactive pieces. The regimental motifs (cap band, three collar stars, ranks, stamps) are punctuation, never wallpaper.

The bible palette and glow are pinned (Ducktator Purple, Electric, Blue-Violet, Lavender, Mist, Night). This site extends them with four stage tones, a projector white, a spill and a specular highlight for glass.

**Key Characteristics:**
- Stage-black ground (`stage-0`) with purple vignettes; never flat grey or pure white panels.
- Purple light as material: glow is emitted by type, badge, beam and active states.
- Film grammar: timecode, scene slates in the HUD, letterbox, filmstrip, credits.
- Liquid glass with gradient edge and pointer-following specular.
- Wide Michroma for credits-style labels, light Outfit for everything you read.

## Colors

A one-hue world: violet-purple light on near-black stages, with green and coral reserved for status.

### Primary
- **Electric Purple** (`electric`): the light source. Primary button gradient start, focus caret, active pipeline bar, stars, HUD record dot, `::selection`, cap band. Every glow is this colour at 0.35 to 0.95 alpha.
- **Ducktator Purple** (`ducktator`): the deep brand tone. Officer monogram gradient end, scrollbar, sponsor-section floor glow.

### Secondary
- **Blue-Violet** (`violet`): gradient partner to Electric (buttons, selected picks, chip icons, glass edge tail). Never used alone as a fill.

### Tertiary
- **Lavender** (`lavender`): the label colour. Wide labels, timecodes, dates, numerals, the outline 11745, focus outline, FAQ chevrons.
- **Mist** (`mist`): soft secondary text on glass (hero lede, field labels, rank pills).
- **Spill** (`spill`) and **Specular** (`specular`): only inside light effects (projector beam, glass highlight and edge).

### Neutral
- **Stage 0 to 3** (`stage-0` … `stage-3`): the set. `stage-0` is the page; `stage-1` the reel band; `stage-2` officer cards, enlist top, select options. Pure `#000` is reserved for letterbox bars and the credits theatre.
- **Projector White** (`projector`): headline and display type. Plain `#fff` is used for emphasis inside copy and on primary buttons.
- **Text** (`text`) for body; **Text Dim** (`text-dim`, 6.9:1 on stage-0) for supporting copy.
- **Line / Line Strong** (`line`, `line-strong`): hairline dividers and inset rings; lavender at 16% and 32%.
- **Status**: `ok` for done/success (tinted `#BFF5D6` text), `err` for field errors.

### Named Rules
**The One Light Rule.** Every glow, highlight and accent is purple light from the bible palette. No second accent hue; green and coral exist only as status.

**The Stage Not Black Rule.** Surfaces are purple-tinted stage tones; `#000` appears only where the film frame itself is black (letterbox, credits).

## Typography

**Display Font:** Outfit 300 (with system-ui)
**Title-card / Label Font:** Michroma (with Arial)
**Numerals:** Orbitron 700 (with Arial); **Giant:** Anton (with Arial Narrow)
**Mono:** JetBrains Mono 500

**Character:** Light, tightly tracked Outfit reads like spoken narration; Michroma at wide tracking is the credit-card voice; Orbitron carries every number and date; Anton appears only as huge outline numerals.

### Hierarchy
- **Display** (Outfit 300, `display`): every section headline, Projector White with a soft purple text glow, balanced wrap.
- **Title card** (Michroma 400, uppercase, `title-card`): the team name in the hero and the credits lead; the brightest glow on the page.
- **Giant** (Anton, outline only, 1.5px lavender stroke at 22%): the 11745 behind the hero; Anton at small size marks "next" frames and the credits post-line.
- **Script** (Outfit 300, `script`): narration paragraphs that brighten word by word on scroll; Orbitron numerals inline on a purple highlighter band.
- **Headline / Title** (Outfit 300 / 600): domain names; frame and card titles.
- **Body / Lede** (Outfit 400): body max 60–70ch; ledes in Text Dim at 56ch.
- **Label wide** (Michroma, uppercase, 0.18–0.3em tracking, 0.7–0.8rem): tier ranks, countdown label, spec terms, nav name, stamps.
- **Numeral** (Orbitron 700): dates, amounts, countdown units, team number.
- **Mono** (JetBrains Mono 500, uppercase, 0.14em): timecode, tags, placeholder notices ("developing"), utility links.

### Named Rules
**The Numbers Wear Orbitron Rule.** Any figure the reader should notice (dates, counts, amounts, 11745) is set in Orbitron, tabular where it ticks.

**The Optical Centre Rule.** Wide-tracked centred caps add `padding-left` equal to their tracking so the line centres optically.

## Layout

Single column of scenes inside `.wrap` (`min(100% - 2 × gutter, max)`), each scene padded by `section`. Inner splits are asymmetric two-column grids (5fr/7fr regiment, 1.05fr/1fr robot, 1fr/520px enlist, 1fr/1.4fr contact) with a sticky aside where content scrolls past it. The season reel is a horizontal filmstrip pinned and scrubbed by vertical scroll; the hero is pinned for 70% of a viewport while numerals push in and letterbox bars close.

Breakpoints: at 1020px the nav collapses to a menu drawer and all splits stack; at 640px officers, tiers and field rows go single-column, the HUD drops its scene slate, and the hero name tightens tracking to 0.08em. Without JS (or with reduced motion) the reel scrolls natively, script words are fully opaque, the credits render static, and grain is removed.

## Elevation & Depth

Depth is light, not lift. Planes separate by tonal stage steps, vignette gradients, inset hairline rings and backdrop blur; outer shadows are long, soft and dark (`0 18px 40px -18px`) or purple glows. A fixed film-grain overlay (7%, overlay blend) sits over everything.

### Shadow Vocabulary
- **Glass plate** (inset top white 22%, inset bottom electric 25%, `0 18px 40px -18px rgba(0,0,0,.8)`): all glass.
- **Electric glow** (`0 10px 30px -8px rgba(139,61,255,.75)`, hover `0 16px 40px -10px` at .9): primary button, selected picks.
- **Inset ring** (`inset 0 0 0 1px var(--line)` / `--line-strong`): cards, tags, fields, ghost button, tiles.
- **Focus halo** (`inset 0 0 0 1.5px electric, 0 0 0 4px rgba(139,61,255,.22)`): fields.
- **Text glow** (`0 0 22px` to `60px` electric): title-card and display type only.

### Named Rules
**The Light Has A Source Rule.** Glows sit on things that emit (type, badge, active state, stars); passive containers get inset rings, not halos.

## Shapes

Pills for anything you press or that labels state (buttons, nav, nav links, tags, picks, HUD). Soft rectangles for containers: chip 14px, card 18px, hero plates 26px, fields 12px. Film objects are near-square (stills, stamps, sealed envelope at 6px; redaction bars 2px). Circles for the badge, lens, officer monograms and domain dots. Dashed hairlines mean "unfinished or perforated" (frame separators, pass tear line, undeveloped placeholders, open tiles). Stamps are rotated (−6° to −9°) and bordered in Electric.

## Components

### Buttons
- **Shape:** full pill (999px), Outfit 600 at 0.98rem, 10px icon gap.
- **Primary:** Electric to Blue-Violet gradient at 120deg, white text, electric glow; hover lifts 2px and deepens the glow; active scales to 0.98.
- **Glass:** glass plate with Projector White text; hover lifts and brightens the specular.
- **Ghost:** transparent with a `line-strong` inset ring and lavender text; hover turns ring lavender and text white.
- **Small:** 11px 18px, 0.9rem (nav CTA).

### Chips
- **Hero chips:** glass plates (14px) with a 34px gradient icon tile (stroked inline SVG), a small Text Dim caption over a white value.
- **Tags:** mono uppercase pills with inset ring; `done` uses the green ring and mint text, `live` an Electric 30% fill.
- **Picks:** pill toggles; checked state takes the primary gradient and glow.

### Cards / Containers
- **Glass plate:** the liquid-glass recipe (see sidecar) on tiers, chips, countdown, lens and the enlistment pass.
- **Officer card:** `stage-2` fill, inset hairline, 64px monogram disc in an Electric-to-Ducktator radial with a white ring.
- **Tiers:** four glass columns that rise in height by rank (`--h`), dotted rank pips under the Michroma rank, top tier tinted with an Electric gradient.

### Inputs / Fields
- **Style:** 12px radius, stage-0 at 55% fill, `line-strong` inset ring, white text, Electric caret.
- **Focus:** ring becomes 1.5px Electric plus a 4px purple halo.
- **Error:** 1.5px coral ring and a coral 0.8rem message.

### Navigation
- Floating glass pill centred 14px from top, badge with glow, Michroma name with Orbitron number, Text Dim links that fill lavender 10% on hover/active; hides upward on scroll down. Below 1020px a 44px round menu opens a full-screen blurred drawer in Outfit 300.

### Filmstrip Frame (signature)
A `#07040C` strip with lavender sprocket rows top and bottom; frames separated by dashed hairlines; each still is 4:3, 6px, purple-vignetted, holding an outline numeral, a line drawing, a sealed redacted envelope with a rotated stamp, or a mono "developing" placeholder. Meta row: Orbitron date left, status tag right.

### Domain Roll-call (signature)
Accordion rows on hairlines: a glowing dot in the domain's own colour (`--c`), Outfit 300 name, Michroma motto right. Opening draws a coloured light line across the top, nudges the name 6px and reveals role pills tinted with `--c`.

### Enlistment Pass
A 26px glass plate with a badge header, Michroma title, mono subline and a dashed tear line; fields, pick pills and a full-width primary button below.

### Credits Roll
Black theatre with masked fade top and bottom; Michroma lead with heavy glow, Michroma Text Dim role terms over Outfit 300 names; open slots in lavender wrapped in Electric brackets; Anton post-credit line. Scroll-scrubbed and pinned.

### HUD Timecode
Fixed bottom-left mono pill: blinking Electric record dot, scene slate (`SC 03 · SEASON REEL`), lavender running timecode.

## Do's and Don'ts

### Do:
- **Do** pair Electric with Blue-Violet in a 120deg gradient for anything primary or selected.
- **Do** set every notable figure in Orbitron and every credit-style label in wide-tracked Michroma caps.
- **Do** mark missing people, photos, dates and sponsors as open slots (brackets, dashed rings, "developing") rather than filling them.
- **Do** use `ease` `cubic-bezier(.2, .8, .2, 1)` for CSS transitions and `expo.out` for GSAP entrances; scrub scroll scenes.
- **Do** keep every effect optional: reduced motion removes grain, scrubs and word reveals and leaves all content readable.

### Don't:
- **Don't** introduce an accent hue outside the bible purples; green and coral are status only.
- **Don't** put glows on passive containers; rings and tone steps separate planes.
- **Don't** use pure `#000` as a section surface outside letterbox and credits.
- **Don't** use glyph or emoji icons; icons are stroked inline SVG (1.8 stroke, round caps).
- **Don't** use real politics, flags, salutes or insignia; regimental play stays at cap, stars, ranks and stamps.
