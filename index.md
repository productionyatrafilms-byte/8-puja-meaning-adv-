# index.html — Build Instructions

Source: 8 Puja Meaning — file key `4TEVE59QYpCzd7OB6sCnC4`
Base frame size: **1920 x 1080** (px -> vw divides by 1920)
Base template: `basic-template.html` — content goes in `.main-container > .stage`

**STATUS: built — Hindi + Gujarati text not supplied**

---

## Navigation

← from: none (entry page)
→ to: `points.html#N` (N = 1..8, the point that was clicked)

Frames `1:2` (home 1), `3:360` (home 2) and `13:228` (home) are **one page in
three states** — an intro animation, not three pages. `13:228` is the resting
state; the other two are its start and mid positions. Driven by CSS keyframes
in `index.css`, no toggle class.

---

## 0. Assets

### 0.1 — Images

| File | Layer / use | Natural px |
|---|---|---|
| bg.png | `91513 1` page background (`.page-bg`) | 1920x1080 |
| frame.png | `Frame 5` arch + glow | 706x992 |
| stand.png | `M` stand under the arch | 813x130 |
| point.png | `Vector` point badge | 346x355 |
| pointhover.png | point badge hover state | 346x322 |
| flower.png | `Group 1321314374/5` | 80x80 |
| home.png | `HOME` | 68x62 |
| crown.png | `_ÎÓÈ_1` (15:2304) — rendered from Figma, was not in assets | 236x162 (2x) |
| knot.png | `_ÎÓÈ_1` (15:2298) — rendered from Figma, was not in assets | 298x152 (2x) |
| divider.png | `Objects` (13:248) — rendered from Figma, was not in assets | 932x44 (2x) |
| stage-spacer.png | transparent spacer | 1920x1043 |

Missing: none

`point.png` / `pointhover.png` were exported about 11% larger than the Figma
vector (opaque shape 321px vs 289px), so both are drawn at 311.5px wide to put
the shape back at its Figma size.

### 0.2 — Fonts

| Family | Used for | File in /fonts/ |
|---|---|---|
| Trochut Regular | "8 Puja Meaning" | Trochut-Regular.ttf |
| Yeseva One Regular | point labels | YesevaOne-Regular.ttf |
| Vidaloka Regular | stand caption | Vidaloka-Regular.ttf |

---

## 1. Palette

```
--title-brown:   #872d0e                  "8 Puja Meaning"
--white:         #ffffff                  labels, caption
--caption-glow:  #be3100                  caption text-shadow
--label-shadow:  rgba(0, 0, 0, 0.3)       point label text-shadow
--page-bg-color: #f9e7d3                  body colour behind bg.png
```

---

## 2. Structure

```
.main-container
└── .stage
    ├── img.stage-spacer
    ├── .flower.flower-left / .flower-right
    ├── .home-frame > img.home-frame-img      (overflow hidden — arch rises inside it)
    ├── .crown, .home-title, .divider, .knot
    ├── .stand, .stand-text
    └── a.point.point-1 .. .point-8           (img.point-img + img.point-hover + .point-label)

Content extent: y 8 .. 1051 of the frame -> spacer 1920x1043. Both pages share it.
The top is kept so the points-page arch tip (y 21) is never clipped; only the
empty strip under the text plate is trimmed.
All vertical % below are measured from y=8, not the frame's 0.
Home button and #langSelect are direct children of <body>, outside the stage.
```

---

## 3. Frame 13:228 Guidelines — resting state

    3.1- no home button on this start page (removed on request)
    3.2- flowers — width `4.15%` (79.7px), top `12.575%` (139px), left `27.912%` (536px) and `67.379%` (1294px)
    3.3- home-frame — width `36.771%` (706px), left `31.979%` (614px), top `0.863%` (17px), frame.png
    3.4- crown — width `6.146%` (118px), left `46.927%` (901px), top `20.348%` (220px)
    3.5- home-title — Trochut `7.2917vw` (140px), line-height `7.379vw`, `#872d0e`, three lines
         "8 / Puja / Meaning", centred on left `49.949%` (959px), top `49.702%` (526px)
    3.6- divider — width `24.271%` (466px), left `37.893%` (727.5px), top `73.278%` (772px)
    3.7- knot — width `7.76%` (149px), left `46.146%` (886px), top `77.373%` (815px)
    3.8- stand — width `42.323%` (812.6px), left `28.879%` (554.5px), top `87.272%` (918px), stand.png
    3.9- stand-text — Vidaloka `1.875vw` (36px), line-height `1.8975vw`, white,
         shadow `0 0.052vw 0.12vw #be3100`, two lines, centred on left `49.949%`, top `93.09%` (979px)
    3.10- points — container width `16.224%` (311.5px) placed 9.4px left / 5.5px above the Figma vector
         label Yeseva One `2.5vw` (48px), line-height `2.53vw`, white, shadow `0 0.104vw 0.104vw rgba(0,0,0,.3)`

| # | Label | Vector x,y | Label centre x,y |
|---|---|---|---|
| 1 | Jal Puja | 192.05, 239.09 | 336.57, 369.86 |
| 2 | Chandan Puja | 17.05, 502 | 163.55, 647.06 |
| 3 | Phool Puja | 359.75, 502 | 505.75, 635.94 |
| 4 | Dhoop Puja | 192.05, 745.1 | 331.92, 885.59 |
| 5 | Deepak Puja | 1443.25, 239.09 | 1589.25, 374.73 |
| 6 | Akshat Puja | 1268.25, 502 | 1409.89, 637.15 |
| 7 | Naivedya Puja | 1610.95, 502 | 1757.45, 641.73 |
| 8 | Fal Puja | 1443.25, 745.1 | 1589.25, 883.27 |

    3.11- on hover of a point → pointhover.png fades in, badge scales to 1.05
    3.12- on click of point N → points.html#N

---

## 4. Frames 1:2 and 3:360 Guidelines — intro animation

    4.1- home 1: stand sits 30px (1.5625vw) lower with no caption; arch is below its
         clip box; points are 16px dots at their centres; title, labels, ornaments hidden
    4.2- home 2: stand in place, arch risen, points at full size, text still hidden
    4.3- home: title, crown, divider, knot, caption and labels fade in
    4.4- sequence: stand 0.2s → arch 0.35s → points 0.95s staggered 0.08s → text 1.7s
    4.5- skipped entirely under prefers-reduced-motion

---

## 5. Open questions

1. Hindi and Gujarati text was not in Figma — it was written for the project and lives in `assets/js/data.js` with the English. Please have it checked.
3. Where should the home button go? It currently reloads index.html.
4. The language pill in Figma is orange (`#fe742f`, Baloo). `#langSelect` is a
   never-touch global, so the shared blue pill is kept.
