# Deployment Guide

This is a static Vite build — it can be hosted anywhere that serves
static files. Below are the three most common free options.

---

## Option A — Vercel (recommended, easiest)

1. Push your project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo
3. Vercel auto-detects Vite. Confirm:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Add your environment variables (from `.env`) under
   **Project Settings → Environment Variables** if using the contact form
5. Click **Deploy** — you'll get a free `your-project.vercel.app` URL

### Custom domain on Vercel
Project Settings → Domains → add your domain and follow the DNS
instructions shown. Free subdomains like `.vercel.app` work immediately
with no setup.

---

## Option B — Netlify

1. Push your project to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import an existing project**
3. Set:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
4. Add environment variables under **Site configuration → Environment variables**
5. Deploy — you'll get a free `your-project.netlify.app` URL

### SPA routing on Netlify
Since this app uses React Router, add a `public/_redirects` file so
deep links (e.g. `/projects`) don't 404 on refresh:

```
/*    /index.html   200
```

(Vercel and most modern hosts handle this automatically for Vite/React
apps; Netlify needs this file explicitly.)

---

## Option C — GitHub Pages

GitHub Pages serves from a subpath by default, so it needs one extra
config step.

1. In `vite.config.js`, add a `base` matching your repo name:
   ```js
   export default defineConfig({
     base: '/your-repo-name/',
     // ...rest of config
   })
   ```
2. Install the deploy helper:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Add scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run:
   ```bash
   npm run deploy
   ```
5. In your GitHub repo → Settings → Pages, set the source to the
   `gh-pages` branch.

Note: React Router's client-side routing needs a small workaround on
GitHub Pages (a `404.html` that redirects to `index.html`) since it has
no server-side rewrite support. Search "React Router GitHub Pages SPA
404 workaround" if you go this route — Vercel/Netlify don't need this.

---

## Free domain options

- Vercel/Netlify subdomains (`.vercel.app` / `.netlify.app`) are free forever
- For a real custom domain, free options include a `.tech`, `.me`, or
  student-verified `.dev` domain via [GitHub Student Developer Pack](https://education.github.com/pack)
  (if you're eligible as a student)

---

## Pre-deploy checklist

- [ ] Update `og:url` in `index.html` to your real domain
- [ ] Add a real `public/og-cover.png` (1200×630) for social share previews
- [ ] Set `resumeAvailable: true` once `public/resume.pdf` exists
- [ ] Double-check all contact links in `src/data/profile.js`
- [ ] Run `npm run build` locally once to catch any errors before pushing
