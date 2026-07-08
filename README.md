# Shivam Parashar — Portfolio

Personal portfolio, built with vanilla **HTML/CSS/JS** and deployed on **GitHub Pages**.

🔗 Live: [spador.github.io/Shivam](https://spador.github.io/Shivam/)

## Design

- Dark, minimal, single accent color — near-black canvas, off-white type, emerald highlights
- Static, semantic HTML (no framework, no build step)
- Staggered scroll-reveal animations via `IntersectionObserver`, with `prefers-reduced-motion`
  and no-JS fallbacks
- Fully responsive; relative asset paths so it works under the `/Shivam/` subpath

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | All content — hero, about, experience, projects, skills, certifications, education, contact |
| `styles.css` | Design system + layout |
| `script.js` | Scroll reveals, mobile nav, copy-email button |
| `assets/` | Résumé PDF, favicon, images |

## Develop

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

Deployed automatically by GitHub Pages from `main` (`.nojekyll`, no build).
