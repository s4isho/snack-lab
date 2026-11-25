# Promotional Snack Showcase — Documentation

A static, GitHub-Pages-ready promotional website for **Churfries**, **Shawburg**, and **Ubena-chee**. Built with pure HTML, CSS, and JavaScript. No backend, no frameworks, no build step.

---

## 1. File Overview

| File | Purpose |
|------|---------|
| `index.html` | Semantic markup, content, and structure. |
| `styles.css` | All visual styling, responsive breakpoints, custom properties. |
| `script.js` | Mobile menu, carousel dots, smooth scrolling, back-to-top. |
| `wireframe.txt` | Visual layout reference (this file is not loaded by the browser). |
| `README.md` | This documentation. |

---

## 2. Main HTML Tags & Their Roles

- `<header class="site-header">` — Sticky top navigation.
- `<nav>` — Primary and footer link groups.
- `<main>` — Wraps all page content (hero, products, story, contact).
- `<section>` — Each major content block (`#hero`, `#products`, `#story`, `#contact`).
- `<article class="product-card">` — Individual product card inside the carousel.
- `<div class="media-placeholder">` — **Replace these with your own `<img>` or `<video>` tags.** Each has a clear label.
- `<footer>` — Copyright and secondary navigation.
- `<button>` — Hamburger toggle, carousel dots, back-to-top.

---

## 3. CSS Custom Properties (Design Tokens)

All colours and spacing are controlled from `:root` in `styles.css`.

| Variable | Value | Use |
|----------|-------|-----|
| `--wine` | `#260212` | Page background |
| `--burgundy` | `#4f0423` | Card backgrounds, story section |
| `--red` | `#e10600` | Primary CTA, display type, active dots |
| `--blush` | `#ffc7c6` | Secondary text, placeholder borders |
| `--black` | `#000000` | Header/footer bars |
| `--white` | `#ffffff` | Body text on dark surfaces |
| `--font-display` | `'Anton', Impact` | Headlines, buttons |
| `--font-body` | `'Inter', system-ui` | Paragraphs, labels |

To rebrand, change these variables once and the whole site updates.

---

## 4. JavaScript Functions — Logical Flow

All functions run after `DOMContentLoaded`.

| Function | What it does | When it runs |
|----------|--------------|--------------|
| `initMobileNav()` | Toggles `.open` on `#nav-links`; updates `aria-expanded`. Closes menu when a link is clicked. | On page load; listens for click on hamburger. |
| `initCarouselDots()` | Clicking a dot scrolls the matching card into view. Scrolling the track updates the active dot. | On page load; listens for dot clicks and carousel scroll. |
| `initSmoothScroll()` | Intercepts anchor clicks, calculates sticky-header offset, and smooth-scrolls to the target. | On page load; listens for clicks on `a[href^="#"]`. |
| `initBackToTop()` | Shows the red button after 400 px of scroll; clicking scrolls to top. | On page load; listens for window scroll and button click. |

**Logical flow at runtime:**
1. Browser loads `index.html` → CSS and fonts load.
2. `script.js` executes after DOM is ready.
3. Navigation, carousel, smooth scroll, and back-to-top are initialised.
4. User interactions trigger the relevant function (menu toggle, dot click, anchor click, scroll).

---
  <span class="placeholder-label">IMAGE PLACEHOLDER<br />Churfries Product Photo</span>
</div>
