# points.html — Build Instructions

Source: 8 Puja Meaning — file key `4TEVE59QYpCzd7OB6sCnC4`
Base frame size: **1920 x 1080** (px -> vw divides by 1920)
Base template: `basic-template.html` — content goes in `.main-container > .stage`

**STATUS: built — Hindi + Gujarati text not supplied**

---

## Navigation

← from: `index.html` (click on a point)
→ to: `index.html` (home button)

Frames `13:300`, `15:1500`, `15:1585`, `15:1755`, `15:1840`, `15:1925`,
`15:2010`, `15:2095` (point 1..8) are **one page, eight slides**. Between
frames only three things change: the image strip offset, the meaning text and
the puja name. `points.html#N` opens on slide N.

---

## 0. Assets

### 0.1 — Images

| File | Layer / use | Natural px |
|---|---|---|
| bg-points.png | `91513 1` with its opaque `#853925` overlay (`.page-bg`) — generated | 192x108 |
| slideframe.png | `Vector` 13:319 large arch | 1568x1060 |
| textframe.png | `M` 13:329 meaning plate | 1436x130 |
| points/1.png .. 8.png | `video box` slides | 817x534 |
| prev.png / next.png | `Polygon 2` / `Polygon 1` | 56x80 / 68x106 |
| decoleft.png / decoright.png | `Group 1321314372` | 52x42 |
| flower.png | `Group 1321314374/5` | 80x80 |
| home.png | `HOME` | 68x62 |
| stage-spacer.png | transparent spacer | 1920x1043 |

Missing: none

### 0.2 — Fonts

| Family | Used for | File in /fonts/ |
|---|---|---|
| Trochut Regular | "8 Puja Meaning" | Trochut-Regular.ttf |
| Abhaya Libre ExtraBold | puja name | AbhayaLibre-ExtraBold.ttf |
| Vidaloka Regular | meaning text | Vidaloka-Regular.ttf |

---

## 1. Palette

```
--page-bg-color: #853925    body / page background
--white:         #ffffff    all text, slider border
--title-glow:    #be3100    title + meaning text-shadow
--name-glow:     #e55108    puja name text-shadow
--slide-bg:      #ffca9c    slider box fill
--slide-shadow:  #f2823c    slider box shadow
```

---

## 2. Structure

```
.main-container
└── .stage
    ├── img.stage-spacer
    ├── a.back-btn
    ├── .flower.flower-left / .flower-right
    ├── .slide-frame                       slideframe.png
    ├── .page-title                        "8 Puja Meaning"
    ├── .puja-name                         deco + 8 x .puja-name-item + deco
    ├── .slider-wrapper
    │   ├── .swiper.puja-swiper > .swiper-wrapper > 8 x .swiper-slide > img
    │   └── .slider-border                 white 10px inner border
    ├── .btn-prev / .btn-next
    ├── .text-frame                        textframe.png
    └── .meaning                           8 x .meaning-item

Content extent: y 8 .. 1051 of the frame -> spacer 1920x1043. Both pages share it.
The top is kept so the points-page arch tip (y 21) is never clipped; only the
empty strip under the text plate is trimmed.
All vertical % below are measured from y=8, not the frame's 0.
Home button and #langSelect are direct children of <body>, outside the stage.
```

---

## 3. Frame 13:300 Guidelines — point 1 (layout for all eight)

    3.1- back-btn — width `3.542%`, left `1.93%`, top `4%` of body, home.png → index.html
    3.2- flowers — width `4.15%`, top `15.927%` (174px), left `14.022%` (269px) and `81.735%` (1569px)
    3.3- slide-frame — width `81.639%` (1567.5px), left `9.181%` (176px), top `1.242%` (21px);
         the arch bleeds off the bottom of the frame and is clipped by `.stage`
    3.4- page-title — Trochut `4.4271vw` (85px), line-height `4.4802vw`, white,
         shadow `0 0.208vw 0.208vw #be3100`, centred on left `50.041%`, top `19.442%` (211px)
    3.5- puja-name — Abhaya Libre ExtraBold `2.5vw` (48px), line-height `2.53vw`, white,
         shadow `0 0.104vw 0.104vw #e55108`, centred on left `50%`, top `28.818%` (308.6px);
         deco images `2.708vw` (52px) either side, gap `0.34vw`
    3.6- slider-wrapper — width `42.552%` (817px), left `28.863%` (554px), top `32.771%` (350px),
         fill `#ffca9c`, radius `1.042vw` (20px), shadow `0 0.521vw 1.302vw #f2823c`,
         white border `0.521vw` (10px) drawn over the image edge
    3.7- btn-prev — width `2.917%` (56px), left `20.781%` (399px), top `54.362%` (575px)
    3.8- btn-next — width `3.542%` (68px), left `76.094%` (1461px), top `53.237%` (563px)
    3.9- text-frame — width `74.781%` (1435.8px), left `12.692%` (243.7px), top `87.569%` (921px)
    3.10- meaning — Vidaloka `1.6667vw` (32px), line-height `1.6867vw`, white,
          shadow `0 0.052vw 0.12vw #be3100`, width `71.849%` (1379.5px), centred on
          left `49.95%`, top `93.193%` (980px)

    3.11- slider instructions
      3.11.1- Swiper, one slide per view, slide effect, speed 600, no loop, keyboard on
      3.11.2- first slide → `#N` from the URL, else slide 1
      3.11.3- btn-next → next slide, btn-prev → previous slide
      3.11.4- prev is dimmed on slide 1 (Figma shows the faded Polygon variant there)
      3.11.5- on slide change the puja name and the meaning text swap to the same index

| # | Puja name | Image |
|---|---|---|
| 1 | Jal Puja | points/1.png |
| 2 | Chandan Puja | points/2.png |
| 3 | Phool Puja | points/3.png |
| 4 | Dhoop Puja | points/4.png |
| 5 | Deepak Puja | points/5.png |
| 6 | Akshat Puja | points/6.png |
| 7 | Naivedya Puja | points/7.png |
| 8 | Fal Puja | points/8.png |

---

## 4. Open questions

1. Hindi and Gujarati text was not in Figma — it was written for the project and lives in `assets/js/data.js` with the English. Please have it checked.
3. Frame 15:2095 (point 8) has a "Pranam" popup parked below the canvas. It is now
   the separate page `pranam.html` (frame point 9), reached by a pulsing "Pranam"
   arrow that appears on the last slide only (see pranam.md). Next is still dimmed
   on slide 8, although Figma shows it active there.
4. In Figma the image strip runs right-to-left (slide 1 is the rightmost).
   Built as a normal left-to-right Swiper.
5. The blurred glow ellipse 15:415 sits entirely behind the arch and is not built.
