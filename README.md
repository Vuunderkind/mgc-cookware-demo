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
| 🧊 **3D Interactive Pot** | Three.js r128 · PBR materials · Free rotation |
| 🐊 **Procedural Croc Texture** | Canvas-generated Voronoi scale pattern + Sobel normal map |
| 🛒 **Shopping Cart** | Add / remove / quantity · persists in session |
| 🔍 **Live Search** | Real-time product filtering |
| ✉️ **Newsletter + Contact** | Animated forms with validation |
| 📦 **Product Catalog** | Filter by category · animated cards |
| ⭐ **Testimonials** | Auto-rotating review slider |
| 🎯 **Micro-animations** | Scroll reveal · counters · particles · parallax |
| 📱 **Fully Responsive** | Mobile · tablet · desktop |
| ⚡ **Zero dependencies** | No React, no Vue, no build step — pure HTML/CSS/JS |

---

## ✦ 3D Hero Object

The hero section features an interactive **3D MGC cookware pot** rendered with [Three.js](https://threejs.org/):

- **Geometry** — `LatheGeometry` casserole body, domed lid, `TubeGeometry` D-ring handles, CylinderGeometry induction base
- **Materials** — `MeshPhysicalMaterial` with clearcoat, brushed metal, transparent glass lid, wood handles
- **Texture** — procedural crocodile-skin using seeded PRNG + canvas polygon scales + Sobel-filter normal map
- **Lighting** — 5-light studio rig: key · fill · rim · top · front
- **Controls** — free drag rotation · smooth damping · hover highlights · click-to-focus · multilingual info panels

---

## ✦ Tech stack

```
HTML5 · CSS3 (custom properties, grid, animations)
Vanilla JavaScript (ES5 compatible)
Three.js r128 (loaded async — never blocks page)
Google Fonts (Playfair Display · Inter)
```

---

## ✦ How to run

**Option 1 — Live:** click the [Live Demo](https://vuunderkind.github.io/mgc-cookware-demo/) badge above

**Option 2 — Local:** download `index.html` and open it in any modern browser. No server needed.

---

## ✦ How updates work

This site is deployed via **GitHub Pages** from the `main` branch.  
Every time I push a change to `index.html`, the live link updates automatically within ~1 minute.

---

<div align="center">

**Built entirely by [Vuunderkind](https://github.com/Vuunderkind)**  
*Design · Development · 3D · Textures · Animations — all mine*

---

*Demo project · Not for commercial use*

</div>
