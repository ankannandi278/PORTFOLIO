# Ankan Nandi — Developer Portfolio

A premium, animated, fully responsive developer portfolio built with React,
Vite, and Tailwind CSS — designed for a CS student currently learning the
MERN stack, and built so it grows honestly as real projects and experience
come in.

**No fake data.** Every "project," "experience," or "achievement" that
isn't real yet is a clearly labeled, easy-to-edit placeholder — never an
invented claim.

---

## ✨ What's inside

- **7 pages**: Home, About, Skills, Projects, Journey, Contact, 404
- **Signature design motif**: a terminal / git-commit-log theme that ties
  directly into the developer identity (typing hero, commit-log timeline)
- **Dark + light mode**, custom cursor, animated scroll progress bar,
  ambient particle background, loading screen, page transitions
- **Working contact form** via EmailJS, with validation and toast feedback
- **Everything editable from `src/data/`** — no need to touch components
  to update your info, skills, projects, or journey

---

## 🧱 Tech Stack

| Purpose            | Library                          |
|---------------------|----------------------------------|
| Framework            | React 18 + Vite                  |
| Styling               | Tailwind CSS                     |
| Animation             | Framer Motion                    |
| Smooth scroll         | Lenis (`@studio-freight/lenis`)  |
| Routing               | React Router                     |
| Icons                 | Lucide React + React Icons       |
| Contact form           | EmailJS                          |
| Notifications          | React Hot Toast                  |
| SEO / meta tags        | React Helmet Async               |

### A deliberate note on the animation stack

The original spec listed Framer Motion, GSAP, AOS, Swiper, and Lenis
together. Running four animation/scroll libraries at once is a common
beginner-portfolio mistake — they fight over the scroll event, bloat the
bundle, and produce inconsistent easing. This build uses **Framer Motion**
for all component animation/reveals and **Lenis** for smooth scroll, which
covers 100% of the effects requested (reveals, hover states, page
transitions, marquees, floating shapes, custom cursor). `react-icons` is
still included alongside `lucide-react` so you have both icon sets
available. If you later want a project carousel, Swiper is a clean single
addition — see the Customization Guide.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the printed local URL (usually http://localhost:5173)
```

To build for production:

```bash
npm run build   # outputs to /dist
npm run preview # preview the production build locally
```

See **[INSTALLATION.md](./INSTALLATION.md)** for full setup details,
**[CUSTOMIZATION.md](./CUSTOMIZATION.md)** for how to edit content, and
**[DEPLOYMENT.md](./DEPLOYMENT.md)** for shipping to Vercel/Netlify/GitHub
Pages.

---

## 📁 Project Structure

```
src/
  assets/images/       → local images (profile photo, project shots)
  components/
    ui/                 → Button, Card, Badge, ThemeToggle, ResumeButton...
    layout/              → Navbar, Footer, ScrollToTop
    effects/              → Loader, CustomCursor, AmbientBackground, etc.
    sections/              → (reserved for page-specific section components)
  pages/                    → Home, About, Skills, Projects, Journey, Contact, NotFound
  layouts/                   → MainLayout (navbar + footer wrapper)
  animations/                 → PageTransition wrapper
  hooks/                        → useLenis, useIsFinePointer, useScrollProgress
  data/                          → profile.js, skills.js, projects.js, journey.js  ← EDIT THESE
  constants/                      → nav.js
  context/                         → ThemeContext (dark/light mode)
  utils/                            → cn.js (classname helper)
  styles/                            → index.css (Tailwind + global styles)
public/                                → static files served as-is (resume.pdf, profile.jpg, favicon)
```

**The one file that matters most:** `src/data/*.js`. Nearly every piece
of visible content — your name, contact links, skills, projects, and
learning timeline — lives there, not scattered across components.

---

## 🔮 Future-proofing (Supabase, CMS, Auth)

The data layer is already isolated in `src/data/`, which is exactly what
makes a later migration to Supabase painless: you'd swap the static
arrays for `fetch`/Supabase-client calls inside the same files, and every
page that imports from `src/data/` keeps working unchanged. See
[SUPABASE-FUTURE.md](./SUPABASE-FUTURE.md) for the planned upgrade path.

---

## ♿ Accessibility & Performance notes

- All interactive elements are keyboard-reachable with visible focus rings
- `prefers-reduced-motion` disables the custom cursor animation loop,
  particle canvas, and shortens all transitions site-wide
- Pages are code-split with `React.lazy` so each route only loads what it needs
- Images are expected to be placed in `public/` and referenced with plain
  paths — no build step required for a beginner to swap them in
