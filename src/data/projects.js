/**
 * ============================================================
 *  PROJECTS DATA
 *  This is the ONLY file you need to edit to add real projects
 *  later. Every project card on the Projects page is generated
 *  from this array.
 *
 *  HOW TO ADD A REAL PROJECT
 *  --------------------------------------------------------
 *  image        → Put your screenshot in public/projects/
 *                 then set image: '/projects/your-file.png'
 *                 Leave as null to keep the animated placeholder cover.
 *  github       → Your repo URL, e.g. 'https://github.com/ankannandi278/repo-name'
 *  liveDemo     → Your deployed URL, e.g. 'https://your-project.vercel.app'
 *                 Leave as null while a field is not ready — the button
 *                 will show as disabled instead of linking nowhere.
 *  description  → 1–3 honest sentences. Don't oversell — describe what
 *                 it actually does and what you used it to practice.
 *  status       → 'coming-soon' | 'in-progress' | 'completed'
 * ============================================================
 */

export const projects = [
  {
    id: 'proj-1',
    title: 'Project One',
    description:
      'Reserved for the first MERN project — a full end-to-end app once the stack is further along.',
    tech: ['MongoDB', 'Express', 'React', 'Node'],
    image: null,
    github: null,
    liveDemo: null,
    status: 'completed',
  },
  {
    id: 'proj-2',
    title: 'Resturant Management System (RMS)',
    description:
      'A future full-stack build — CRUD app with authentication, planned once backend fundamentals are solid.',
    tech: ['MongoDB', 'Express', 'React', 'Node', 'JWT'],
    image: '/projects/RMS.png',
    github: 'https://github.com/ankannandi278',
    liveDemo: 'https://restaurantka.netlify.app',
    status: 'coming-soon',
  },
  {
    id: 'proj-3',
    title: 'This Portfolio',
    description:
      'The site you are looking at right now — built with React, Vite, Tailwind CSS, and Framer Motion.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    image: '/projects/portfolio.png',
    github: 'https://github.com/ankannandi278',
    liveDemo: 'https://ankannandi.netlify.app',
    status: 'completed',
  },
  {
    id: 'proj-4',
    title: 'Learning Project',
    description:
      'A small practice build for whatever concept is currently being learned — HTML/CSS/JS fundamentals.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: null,
    github: null,
    liveDemo: null,
    status: 'coming-soon',
  },
]

export const statusLabels = {
  'coming-soon': 'Coming Soon',
  'in-progress': 'In Progress',
  completed: 'Completed',
}
