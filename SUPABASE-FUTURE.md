# Future Upgrade Guide — Supabase, Auth, CMS

This portfolio is built so its content layer (`src/data/`) can later be
swapped for a real backend **without touching the page components**.
Every page imports data from `src/data/*.js` — as long as those files
keep exporting the same shapes, the pages don't need to change.

## Planned upgrade path

1. **Add Supabase**
   ```bash
   npm install @supabase/supabase-js
   ```
   Create `src/utils/supabaseClient.js`:
   ```js
   import { createClient } from '@supabase/supabase-js'

   export const supabase = createClient(
     import.meta.env.VITE_SUPABASE_URL,
     import.meta.env.VITE_SUPABASE_ANON_KEY,
   )
   ```

2. **Move data to tables**
   Create tables that mirror the current shapes:
   - `projects` (id, title, description, tech, image_url, github, live_demo, status)
   - `skills` (id, category, name, progress, status, description)
   - `journey_entries` (id, hash, title, description, state, order)

3. **Replace static exports with fetch calls**
   Instead of exporting a static array, export an async function or a
   hook, e.g. in `src/data/projects.js`:
   ```js
   import { supabase } from '../utils/supabaseClient'

   export async function fetchProjects() {
     const { data, error } = await supabase.from('projects').select('*')
     if (error) throw error
     return data
   }
   ```
   Then update `src/pages/Projects.jsx` to load data with `useEffect` +
   `useState` (or React Query, if you adopt it) instead of importing the
   static array directly.

4. **Authentication (for an admin dashboard)**
   Supabase Auth supports email/password or magic links out of the box.
   A minimal admin route could live at `/admin`, gated by a check against
   `supabase.auth.getSession()`.

5. **Admin Dashboard + CMS**
   Once auth is in place, build simple forms that write to the
   `projects`, `skills`, and `journey_entries` tables — this becomes your
   Project CMS, Experience CMS, and (if added) Blog/Gallery CMS, all
   without redeploying the frontend for every content change.

## Why this order works

Because every page already reads from `src/data/`, none of the visual
components (`Card`, `Badge`, `SectionHeading`, etc.) need to know or
care whether their data came from a static file or a live database
query. This is the same separation of concerns that makes headless CMS
architectures maintainable — you're just starting from the static end
of that spectrum, which is the right call while there's no real content
yet.
