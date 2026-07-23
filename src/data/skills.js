/**
 * ============================================================
 *  SKILLS DATA
 *  status: 'learning' | 'comfortable' | 'upcoming'
 *  progress: 0–100, an honest self-rating, not a claim of mastery.
 *  Add or remove entries freely — the Skills page renders
 *  whatever is in this array.
 * ============================================================
 */

export const skillCategories = [
  {
    title: 'Core Web',
    items: [
      { name: 'HTML5', progress: 85, status: 'comfortable', description: 'Semantic, accessible markup.' },
      { name: 'CSS3', progress: 80, status: 'comfortable', description: 'Layout, responsive design, animations.' },
      { name: 'JavaScript', progress: 70, status: 'comfortable', description: 'ES6+, async, DOM.' },
      { name: 'TypeScript', progress: 15, status: 'upcoming', description: 'Learning soon — typed JS.' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React.js', progress: 60, status: 'learning', description: 'Components, hooks, state.' },
      { name: 'Redux', progress: 30, status: 'learning', description: 'Global state management.' },
      { name: 'Next.js', progress: 10, status: 'upcoming', description: 'Learning soon — SSR/SSG React.' },
      { name: 'Tailwind CSS', progress: 65, status: 'learning', description: 'Utility-first styling.' },
      { name: 'Bootstrap', progress: 55, status: 'comfortable', description: 'Component-based CSS framework.' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', progress: 45, status: 'learning', description: 'JS runtime for the server.' },
      { name: 'Express.js', progress: 40, status: 'learning', description: 'REST APIs and routing.' },
      { name: 'MongoDB', progress: 35, status: 'learning', description: 'NoSQL document database.' },
      { name: 'REST API', progress: 50, status: 'learning', description: 'Designing and consuming APIs.' },
      { name: 'JWT', progress: 20, status: 'learning', description: 'Auth tokens — currently learning.' },
    ],
  },
  {
    title: 'Tools & Workflow',
    items: [
      { name: 'Git', progress: 65, status: 'comfortable', description: 'Version control fundamentals.' },
      { name: 'GitHub', progress: 65, status: 'comfortable', description: 'Repos, PRs, collaboration.' },
      { name: 'VS Code', progress: 90, status: 'comfortable', description: 'Daily driver editor.' },
      { name: 'Postman', progress: 50, status: 'learning', description: 'API testing and debugging.' },
    ],
  },
  {
    title: 'On the Radar',
    items: [
      { name: 'Firebase', progress: 15, status: 'learning', description: 'Auth, hosting, realtime DB.' },
      { name: 'Supabase', progress: 0, status: 'upcoming', description: 'Future — Postgres backend-as-a-service.' },
      { name: 'Cloudinary', progress: 0, status: 'upcoming', description: 'Future — media storage & delivery.' },
      { name: 'Render', progress: 20, status: 'learning', description: 'Backend deployment.' },
      { name: 'Vercel', progress: 40, status: 'comfortable', description: 'Frontend deployment.' },
      { name: 'Netlify', progress: 35, status: 'comfortable', description: 'Frontend deployment.' },
    ],
  },
  {
    title: 'Fundamentals',
    items: [
      { name: 'Responsive Design', progress: 75, status: 'comfortable', description: 'Mobile-first layouts.' },
      { name: 'Problem Solving', progress: 60, status: 'learning', description: 'DSA and logic building.' },
    ],
  },
]
