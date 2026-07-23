# Customization Guide

Everything below assumes you're editing files inside `src/data/` —
almost nothing requires touching a component.

## 1. Your identity & contact info

**File: `src/data/profile.js`**

- `profile.name`, `profile.role`, `profile.tagline` — shown on Home & About
- `profile.education` — degree, year, college
- `profile.status`, `currentGoal`, `careerGoal` — used in the hero terminal
- `profile.photo` — set to `'/profile.jpg'` after adding the file to `public/`
- `profile.resumeAvailable` / `resumePath` — see "Adding your resume" below
- `contact.*` — phone, email, GitHub, LinkedIn, WhatsApp links

## 2. Adding your profile photo

1. Add a square image (800×800px+) to `public/profile.jpg`
2. In `src/data/profile.js`, set:
   ```js
   photo: '/profile.jpg',
   ```
   The About page will automatically swap the placeholder monogram for
   your photo.

## 3. Adding your resume

1. Export your resume as `resume.pdf`
2. Place it at `public/resume.pdf`
3. In `src/data/profile.js`, set:
   ```js
   resumeAvailable: true,
   ```
   The "Download Resume" button will now link directly to the PDF instead
   of opening the "Coming Soon" modal.

## 4. Editing skills

**File: `src/data/skills.js`**

Each category is an array of `{ name, progress, status, description }`.

- `progress` — 0 to 100, your own honest self-rating
- `status` — `'comfortable'`, `'learning'`, or `'upcoming'` (controls the badge color)

Add a new skill by copying an existing object inside the right category
array. Add a new category by adding a new `{ title, items }` object to
the `skillCategories` array.

## 5. Adding real projects

**File: `src/data/projects.js`**

Each project is an object like:

```js
{
  id: 'proj-5',
  title: 'Your Project Name',
  description: 'One to three honest sentences about what it does.',
  tech: ['React', 'Node', 'MongoDB'],
  image: '/projects/your-screenshot.png', // or null for the placeholder cover
  github: 'https://github.com/you/repo',
  liveDemo: 'https://your-deployed-app.vercel.app', // or null
  status: 'completed', // 'coming-soon' | 'in-progress' | 'completed'
}
```

Add the screenshot file to `public/projects/` first if you're using one.
Leaving `github` or `liveDemo` as `null` automatically disables that
button instead of linking nowhere.

## 6. Updating the Learning Journey timeline

**File: `src/data/journey.js`**

Each entry is a "commit": `{ hash, title, description, state }` where
`state` is `'done'`, `'active'` (exactly one of these — your current
stage), or `'upcoming'`. Add new stages as you progress, and flip
`state` values forward over time.

## 7. Making the contact form work

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Add an Email Service (e.g. Gmail) and create an Email Template with
   `from_name`, `from_email`, and `message` variables
3. Copy your Service ID, Template ID, and Public Key
4. In your `.env` file (copy `.env.example` if you haven't):
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
5. Restart `npm run dev` so Vite picks up the new env vars

## 8. Changing colors / fonts

**File: `tailwind.config.js`**

The design tokens live under `theme.extend.colors` (`signal` = primary
blue accent, `growth` = secondary green accent, `ink`/`paper` = dark/light
backgrounds) and `theme.extend.fontFamily`. Change the hex values or swap
the Google Fonts link in `index.html` to restyle the whole site from one
place.

## 9. Adding a project carousel with Swiper (optional)

If you later want a swipeable project carousel instead of (or alongside)
the grid:

```bash
npm install swiper
```

```jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
```

Wrap your project `Card` components in `<SwiperSlide>` inside a
`<Swiper>`. This is intentionally left out of the base build to avoid
bundling a library you may not need.
