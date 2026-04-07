<div align="center">

# 🥘 MGC — Make Grace Cooker
### Premium Cookware Store · Personal Demo Project

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-View_Site-CC2200?style=for-the-badge)](https://vuunderkind.github.io/mgc-cookware-demo/)
[![Made by Vuunderkind](https://img.shields.io/badge/Made_by-Vuunderkind-C9841A?style=for-the-badge)](https://github.com/Vuunderkind)
[![Status](https://img.shields.io/badge/Status-Demo-555555?style=for-the-badge)]()

---

> **This is a personal demo project** — built entirely by me, from scratch, as a creative and technical experiment.  
> Not affiliated with any real company. Just a playground to push what a single-file HTML site can do.

---

</div>

## ✦ What is this?

A fully self-contained **premium e-commerce storefront** for a fictional cookware brand **MGC (Make Grace Cooker)** — built as a pure front-end challenge with zero frameworks, zero build tools, and zero server.

Everything — HTML, CSS, and JS — lives in a **single `index.html` file** that opens directly in any browser.

---

## ✦ What I built

| Feature | Details |
|---|---|
| 🌍 **5 Languages** | Russian · English · German · French · Chinese |
| 🌓 **Dark / Light theme** | Smooth CSS variable switching |
| 🍳 **Canvas 2D Cooking Scene** | Animated pot with flames, boiling liquid, steam burst, lid animation |
| 🔥 **Interactive Lid** | Hover to lift the lid — steam pours out from the open pot |
| 🛒 **Shopping Cart** | Add / remove / quantity · persists in session |
| 🔍 **Live Search** | Real-time product filtering |
| ✉️ **Newsletter + Contact** | Animated forms with validation |
| 📦 **Product Catalog** | Filter by category · animated cards |
| ⭐ **Testimonials** | Auto-rotating review slider |
| 🎯 **Micro-animations** | Scroll reveal · counters · particles · parallax |
| 📱 **Fully Responsive** | Mobile · tablet · desktop |
| ⚡ **Zero dependencies** | No React, no Vue, no build step — pure HTML/CSS/JS |

---

## ✦ Hero Animation

The hero section features a hand-crafted **Canvas 2D cooking scene** — no external libraries:

- **Pot body** — bezier-curve casserole silhouette with 9-stop metallic gradient and rim highlight
- **Boiling liquid** — dual sine-wave surface with animated color cycling (orange → deep red → gold) and rising bubbles
- **Flame system** — particle pool with `screen` blend mode, each flame unique in size, hue and speed
- **Steam** — soft wobbling puffs with radial gradients; when lid opens: massive burst of large fast clouds
- **Lid animation** — on hover, lid smoothly rotates ~75° and lifts via `translate + rotate + scaleY` (perspective foreshortening), then returns on mouse-leave
- **Handles** — D-ring bezier strokes with metallic gradient and specular highlight line

---

## ✦ Tech stack

```
HTML5 · CSS3 (custom properties, grid, animations)
Vanilla JavaScript (ES5 compatible)
Canvas 2D API (no libraries — all drawing from scratch)
Google Fonts (Playfair Display · Inter)
```

---

## ✦ How to run

**Option 1 — Live:** click the [Live Demo](https://vuunderkind.github.io/mgc-cookware-demo/) badge above

**Option 2 — Local:** download `index.html` and open it in any modern browser. No server needed.

---

## ✦ How updates work

This site is deployed via **GitHub Pages** from the `master` branch.  
Every time I push a change to `index.html`, the live link updates automatically within ~1 minute.

---

<div align="center">

**Built entirely by [Vuunderkind](https://github.com/Vuunderkind)**  
*Design · Development · Animations · Canvas Art — all mine*

---

*Demo project · Not for commercial use*

</div>
