<div align="center">

# 🥘 MGC — Make Grace Cooker
### Premium Cookware Store · Personal Demo Project

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-View_Site-CC2200?style=for-the-badge)](https://vuunderkind.github.io/mgc-cookware-demo/)
[![Made by Vuunderkind](https://img.shields.io/badge/Made_by-Vuunderkind-C9841A?style=for-the-badge)](https://github.com/Vuunderkind)
[![Status](https://img.shields.io/badge/Status-Demo-555555?style=for-the-badge)]()

---

> **Personal demo project** — built entirely by me, from scratch, as a creative and technical experiment.  
> Not affiliated with any real company. A playground to push what a single-file HTML site can do.

---

</div>

## ✦ What is this?

A fully self-contained **premium e-commerce storefront** for a fictional cookware brand **MGC (Make Grace Cooker)** — built as a pure front-end challenge with zero frameworks, zero build tools, and zero server.

Everything — HTML, CSS, and JS — lives in a **single `index.html`** that opens directly in any browser.

---

## ✦ Features

| Feature | Details |
|---|---|
| 🌍 **5 Languages** | Russian · English · German · French · Chinese |
| 🌓 **Dark / Light theme** | Smooth CSS variable switching |
| 🍳 **Canvas 2D Cooking Scene** | Animated pot with flame particles, boiling liquid, steam, lid animation |
| 🫙 **Interactive Lid** | Hover → lid opens with 3D perspective tilt, steam bursts out |
| 🖱️ **Custom Cursor** | Branded red cursor with magnetic snap, replaces system cursor on desktop |
| 📱 **Full-Page Mobile Catalog** | Native-app slide-in page with 27 products, photos, search, filters, sort |
| 🃏 **3D Card Tilt** | Product cards tilt in 3D with radial shine on mouse position |
| ⏱️ **Deal of the Day** | Live countdown timer section with floating product animation |
| 🍜 **Recipe Inspiration** | Horizontal drag-scroll recipe cards with difficulty badges |
| 📜 **Marquee Ticker** | Top promo bar with scrolling messages |
| 🔥 **Text Scramble** | Hero title scrambles on load then resolves |
| 🛒 **Flying Cart** | Emoji flies from product card to cart icon on add |
| ⚖️ **Product Compare** | Select 2 products → comparison table slides up |
| 🌡️ **Heat Map** | Radial heat glow follows cursor on feature cards |
| 🔍 **Live Search** | Real-time product filtering with overlay |
| 🛍️ **Shopping Cart** | Add / remove / quantity · persists in localStorage |
| 📦 **27 Products** | Woks · Pans · Pots · Sets · Accessories — with real photos |
| ❤️ **Favourites** | Per-product heart toggle in mobile catalog |
| 📱 **Bottom Nav Bar** | 5-tab mobile navigation with active tracking & cart badge |
| ⭐ **Testimonials** | Auto-rotating review slider |
| 📱 **Fully Responsive** | Mobile · tablet · desktop — 3-tier breakpoint system |
| ⚡ **Zero dependencies** | No React, no Vue, no build step — pure HTML/CSS/JS |

---

## ✦ Hero Animation

Hand-crafted **Canvas 2D** cooking scene — no libraries:

- **Pot body** — bezier-curve casserole silhouette with 9-stop metallic gradient
- **Boiling liquid** — dual sine-wave surface with animated color cycling and rising bubbles
- **Flame system** — particle pool with `screen` blend mode
- **Steam** — soft wobbling puffs; on hover: massive burst of clouds from open pot
- **Lid animation** — rotates ~75° on hover via `translate + rotate + scaleY` (perspective foreshortening)

---

## ✦ Mobile Catalog

Full-screen catalog page with native app feel:

- Slides in from right with spring easing
- **27 products** with real photos (Unsplash) + graceful emoji fallback
- Instant search + 5 category chips + sort bottom sheet
- Swipe right or tap ← to go back
- Android hardware back button support via History API
- All bottom nav buttons work from inside catalog

---

## ✦ Tech stack

```
HTML5 · CSS3 (custom properties, grid, clamp, animations)
Vanilla JavaScript — no frameworks, no bundler
Canvas 2D API — all animations from scratch
IntersectionObserver — scroll tracking
History API — native-style navigation
Google Fonts (Playfair Display · Inter)
```

---

## ✦ How to run

**Option 1 — Live:** click the [Live Demo](https://vuunderkind.github.io/mgc-cookware-demo/) badge above

**Option 2 — Local:** download `index.html` → open in any modern browser. No server needed.

---

## ✦ Auto-deploy

GitHub Pages from `master` branch. Every push to `index.html` goes live in ~1 minute.

---

<div align="center">

**Built entirely by [Vuunderkind](https://github.com/Vuunderkind)**  
*Design · Development · Animations · Canvas Art · Mobile UX — all mine*

---

*Demo project · Not for commercial use*

</div>
