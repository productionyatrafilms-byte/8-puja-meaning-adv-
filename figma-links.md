# Figma Frame Links

## Base frame width

1920

<!-- The Figma frame's width in px. Every px -> vw conversion divides by this.
     Get it wrong and the whole page mis-scales. Usually 1440 or 1920. -->

## Frame Index

## [index].html

| Frame  | Node ID | Figma Link                                                                              |
| ------ | ------- | --------------------------------------------------------------------------------------- |
| home 1 | node-id=1-2 | https://www.figma.com/design/4TEVE59QYpCzd7OB6sCnC4/8-Puja-Meaning?node-id=1-2&m=dev    |
| home 2 | node-id=3-360 | https://www.figma.com/design/4TEVE59QYpCzd7OB6sCnC4/8-Puja-Meaning?node-id=3-360&m=dev  |
| home   | node-id=13-228 | https://www.figma.com/design/4TEVE59QYpCzd7OB6sCnC4/8-Puja-Meaning?node-id=13-228&m=dev |

## [points].html

| Frame   | Node ID | Figma Link                                                                               |
| ------- | ------- | ---------------------------------------------------------------------------------------- |
| point 1 | node-id=13-300 | https://www.figma.com/design/4TEVE59QYpCzd7OB6sCnC4/8-Puja-Meaning?node-id=13-300&m=dev  |
| point 2 | node-id=15-1500 | https://www.figma.com/design/4TEVE59QYpCzd7OB6sCnC4/8-Puja-Meaning?node-id=15-1500&m=dev |
| point 3 | node-id=15-1585 | https://www.figma.com/design/4TEVE59QYpCzd7OB6sCnC4/8-Puja-Meaning?node-id=15-1585&m=dev |
| point 4 | node-id=15-1755 | https://www.figma.com/design/4TEVE59QYpCzd7OB6sCnC4/8-Puja-Meaning?node-id=15-1755&m=dev |
| point 5 | node-id=15-1840 | https://www.figma.com/design/4TEVE59QYpCzd7OB6sCnC4/8-Puja-Meaning?node-id=15-1840&m=dev |
| point 6 | node-id=15-1925 | https://www.figma.com/design/4TEVE59QYpCzd7OB6sCnC4/8-Puja-Meaning?node-id=15-1925&m=dev |
| point 7 | node-id=15-2010 | https://www.figma.com/design/4TEVE59QYpCzd7OB6sCnC4/8-Puja-Meaning?node-id=15-2010&m=dev |
| point 8 | node-id=15-2095 | https://www.figma.com/design/4TEVE59QYpCzd7OB6sCnC4/8-Puja-Meaning?node-id=15-2095&m=dev |

## [pranam].html

| Frame   | Node ID        | Figma Link                                                                               |
| ------- | -------------- | ---------------------------------------------------------------------------------------- |
| point 9 | node-id=15-2369 | https://www.figma.com/design/4TEVE59QYpCzd7OB6sCnC4/8-Puja-Meaning?node-id=15-2369&m=dev |

<!-- One row per frame.
     Node ID must match the node-id in the URL — e.g. a link ending
     ?node-id=82-860 means the Node ID column reads node-id=82-860.
     Several frames can map to one HTML file when they are states of the
     same page (an intro that expands on click, for example).
     Add another "## [page].html" heading per page. -->

---

## How to Read Each Frame

For every frame listed above, read ALL of the following from the Figma MCP
local server using get_design_context / get_metadata:

- Layout & spacing — exact positions, padding, margin, gap, alignment
- Layer names — use as class names and image filenames
- Layer hierarchy — parent > child order must match in the HTML DOM
- Colors & gradients — exact hex/rgba values
- Typography — font family, size, weight, letter spacing, line height
- Images — read layer name, map to /assets/images/[layer-name].png
- Prototypes & interactions — every click, tap, hover action
- Navigation targets — which frame or page each interaction leads to
- Animations & transitions — type, duration, easing
- Overlays — position, backdrop, close behavior
- Scroll behavior — fixed, sticky, overflow settings
- Component states — default, hover, pressed, disabled
- Variants — all variant properties for each component
- Auto layout — direction, spacing, padding, fill/hug/fixed sizing
- Constraints — how layers scale or pin relative to parent

Note: layers at `opacity: 0` in a frame are usually that state's start/end
position for an animation, not separate elements. Check whether two frames are
two pages or one page in two states before building.

Note: a layer positioned beyond the frame edge (e.g. `left: 2063px` in a
1920-wide frame) is parked off-canvas. Ask before building it.

---

## Interaction Map

> Fill after reading Figma. Drives click events and navigation.

| Page | Layer Name | Interaction | Target | Animation |
| ---- | ---------- | ----------- | ------ | --------- |
| index | (page load) | load | home 1 → home 2 → home | stand rises, arch rises, points grow, text fades in |
| index | Vector (point 1..8) | hover | pointhover.png | fade 0.3s, scale 1.05 |
| index | Vector (point 1..8) | click | points.html#N | none |
| points | Polygon 1 (next) | click | next slide | Swiper slide 0.6s |
| points | Polygon 2 (prev) | click | previous slide | Swiper slide 0.6s |
| points | HOME | click | index.html | none |
| points | Pranam arrow (last slide only) | click | pranam.html | pulsing scale 0.85 - 1 |
| pranam | Layer 4 (back) | click | points.html#8 | scale 1.1 on hover |
| pranam | Group 1321314363 (HOME pill) | click | index.html | scale 1.1 on hover |
| pranam | circle video | page load | plays pranam.mp4 in a loop, pranam.mp3 once | none |

---

## Sliders

> Fill when a page has a slider. Swiper.js only.

| Page | Slider Layer | Slides (node ids) | Effect | Synced with |
| ---- | ------------ | ----------------- | ------ | ----------- |
| points | gif box / video box | 13:300, 15:1500, 15:1585, 15:1755, 15:1840, 15:1925, 15:2010, 15:2095 | slide | puja name + meaning text |

---

## Translations

> Figma usually carries English only. Every visible text node needs all three.
> All text lives in `assets/js/data.js` (english / hindi / gujrati per entry) and
> is written into the page by `assets/js/text.js` — edit the text there, never in
> the HTML. Hindi and Gujarati were written for this project; have a native
> reader check them. Fonts: Hindi = ITF Devanagari, Gujarati = Noto Sans Gujarati.

| Page | English | Hindi | Gujarati |
| ---- | ------- | ----- | -------- |
|      |         |       |          |
