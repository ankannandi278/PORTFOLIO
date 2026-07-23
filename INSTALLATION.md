# Installation Guide

## Prerequisites

- **Node.js 18+** installed ([download here](https://nodejs.org))
- A code editor (VS Code recommended)
- (Optional) Git, if you want version control from day one

Check your Node version:

```bash
node -v
```

## 1. Get the project onto your machine

If you received this as a folder, just open it in your editor. If you're
starting a fresh Git repo:

```bash
cd ankan-nandi-portfolio
git init
git add .
git commit -m "Initial commit: portfolio scaffold"
```

## 2. Install dependencies

```bash
npm install
```

This reads `package.json` and installs React, Vite, Tailwind, Framer
Motion, and everything else listed there into `node_modules/`.

## 3. Set up environment variables (optional, for the contact form)

```bash
cp .env.example .env
```

Then open `.env` and fill in your EmailJS credentials (see
`CUSTOMIZATION.md` → "Making the contact form work"). The site runs fine
without this — the form will just show a friendly "not connected yet"
message instead of sending.

## 4. Run the dev server

```bash
npm run dev
```

Vite will print a local URL (typically `http://localhost:5173`). Open it
in your browser — the site hot-reloads as you edit files.

## 5. Build for production

```bash
npm run build
```

This creates an optimized `dist/` folder. Preview it locally with:

```bash
npm run preview
```

## Troubleshooting

- **`npm install` fails with permission errors** → avoid `sudo npm
  install`; instead fix npm's default directory permissions, or use a
  Node version manager like `nvm`.
- **Port 5173 already in use** → stop whatever else is using it, or run
  `npm run dev -- --port 5174`.
- **Blank page after build** → check the browser console for errors;
  most often this is a typo in a file path referenced from `src/data/`.
- **Tailwind classes not applying** → make sure the file you're editing
  is inside `src/` (see `content` in `tailwind.config.js`).
