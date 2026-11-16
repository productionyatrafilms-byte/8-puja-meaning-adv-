# pranam.html — Build Instructions

Source: 8 Puja Meaning — file key `4TEVE59QYpCzd7OB6sCnC4`, frame `point 9` (`15:2369`)
Reference build: `projects/gyaanpanchami/pranam.html` (behaviour, video, sound)
Base frame size: **1920 x 1080** (px -> vw divides by 1920)
Base template: `basic-template.html` — content goes in `.main-container > .stage`

**STATUS: built — Hindi + Gujarati text written for the project, needs a native check**

---

## Navigation

← from: `points.html` — the "Pranam" arrow on the last slide (Fal Puja)
→ to: `index.html` (HOME pill), `points.html#8` (back arrow)

---

## 0. Assets

### 0.1 — Images

All rendered from the Figma layers of frame 15:2369 at 1x, transparent PNG.

| File | Layer / use | Natural px |
|---|---|---|
| bg-points.png | page background `#853925` (`.page-bg`) | 192x108 |
| pranam-halo.png | `Group 1321314371` soft shadow behind the arch (half size, shown 2x) | 778x598 |
| pranam-arch.png | `Vector` 15:2397, narrower arch (69% of the frame) | 1409x1115 |
| pranam-glow.png | `Group 1` 15:2403 white glow at the foot of the arch | 1322x861 |
| pranam-card.png | `Group 1321314360` rounded orange card | 747x762 |
| pranam-circle.png | `Ellipse 3` white disc + `Ellipse 2` ring | 582x590 |
| pranam-home.png | `Group 1321314363` HOME pill with its icon, no text | 445x164 |
| back.png | `Layer 4` orange back circle | 68x72 |
| flower.png | `Group 1321314374/5` | 80x80 |
| square.png | transparent square — keeps the video circle round at height auto | 100x100 |
| pranam-bg-1.png | circle background behind the video (from Gyaan Panchami) | 1673x940 |
| arowAsset.png | Pranam arrow on points.html (from Gyaan Panchami, yellow) | 128x68 |

Video: `assets/videos/pranam.mp4`. Sound: `assets/audio/pranam.mp3`. Both are the
Gyaan Panchami files, so the couple in the video is not the couple Figma draws
in the `MASCOT copy 15 1` layer.

Missing: none

### 0.2 — Fonts

| Family | Used for | File in /fonts/ |
|---|---|---|
| Baloo Regular | "Pranam", "HOME", arrow label (English) | Baloo-Regular.ttf |
| ITF Devanagari 400 / 700 | every Hindi text | ITFDevanagari-Regular.otf, ITFDevanagari-Bold.otf |
| Noto Sans Gujarati 400 / 700 | every Gujarati text | NotoSansGujarati-Regular.ttf, NotoSansGujarati-Bold.ttf |

The language toggle (E H G) keeps its own font.

---

## 1. Palette

```
--page-bg-color: #853925    body / page background
--title-brown:   #bd5b3f    "Pranam" title
--white:         #ffffff    HOME label, arrow label
```

---

## 2. Structure

```
body
├── #langSelect
├── a.back-btn                      back arrow, top-left, outside the stage
├── img.page-bg
└── .main-container > .stage
    ├── img.stage-spacer
    ├── .pranam-halo, .flower x2, .pranam-arch, .pranam-glow
    ├── .pranam-card                card image is in flow; the rest is absolute in %
    │   ├── img.pranam-circle
    │   ├── .pranam-video           round, holds square.png + <video>
    │   └── h1.pranam-title         data-text="pranam.title"
    └── a.home-pill                 pill image + span.home-pill-label

Stage extent: y 8 .. 1051 of the frame -> spacer 1920x1043 (same as every page).
All vertical % are measured from y=8.
```

---

## 3. Frame 15:2369 Guidelines

    3.1- back-btn — width `3.542%` (68px), left `2.292%`, top `3.426%` of body, back.png → points.html#8
    3.2- flowers — as points.html: width `4.15%`, left `14.022%` / `81.735%`, top `15.927%`
    3.3- pranam-arch — width `73.385%` (1409px), left `13.328%`, top `-3.816%`
    3.4- pranam-glow — width `68.854%`, left `15.583%`, top `20.307%`
    3.5- pranam-card — width `38.906%` (747px), left `30.75%`, top `21.418%`
      3.5.1- circle ring — width `77.912%`, left `11.512%`, top `11.286%` of the card
      3.5.2- video circle — diameter 500px = `66.934%` of the card, centred at left `49.95%`, top `48.96%`;
             the ring's inner edge is 500px, so the video sits exactly inside it
      3.5.3- title — Baloo `4.1667vw` (80px), `#f9f9f9`, centred at left `49.6%`, top `10%` of the card (user-supplied values)
    3.6- home-pill — width `23.177%` (445px), left `38.776%`, top `83.49%`; label Baloo `3.6458vw`
         (70px) white, centred at left `60.2%`, top `49.5%` of the pill
    3.7- on hover of back / pill → scale 1.1
    3.8- page load → video plays muted in a loop, pranam.mp3 plays once (if the browser
         blocks it, on the first click, key or touch)

    3.9- Hindi / Gujarati title: bold, `3.3vw`, no extra lift (the title now sits at top 10% of the card)

---

## 4. Open questions

1. Hindi and Gujarati text was not in Figma — it was written for the project (data.js).
2. The video shows the Gyaan Panchami couple, not the Figma mascot.
3. The arrow on points.html is the yellow Gyaan Panchami arrow — it is not in the
   Figma frames and can be recoloured to the orange palette if wanted.
4. Hindi for HOME is `होम` and Gujarati `ઘર` (the Gyaan Panchami wording).
