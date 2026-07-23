import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import PageTransition from '../animations/PageTransition'
import SectionHeading from '../components/ui/SectionHeading'
import Badge from '../components/ui/Badge'
import { skillCategories } from '../data/skills'
import { profile } from '../data/profile'

const statusTone = {
  comfortable: 'growth',
  learning: 'signal',
  upcoming: 'ember',
}

const statusLabel = {
  comfortable: 'Comfortable',
  learning: 'Learning',
  upcoming: 'Upcoming',
}

export default function Skills() {
  return (
    <PageTransition>
      <Helmet>
        <title>Skills | {profile.name}</title>
      </Helmet>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading
          eyebrow="What I work with"
          title="Skills, rated honestly"
          description="Progress bars here are self-ratings, not claims of mastery — a way to track growth over time rather than impress at a glance."
        />

        <div className="space-y-14">
          {skillCategories.map((category, ci) => (
            <div key={category.title}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-faint mb-5">
                {category.title}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.items.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: (ci * 0.02) + i * 0.03 }}
                    className="group rounded-2xl glass p-5 shadow-card hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-inktext">{skill.name}</h4>
                      <Badge tone={statusTone[skill.status]}>
                        {statusLabel[skill.status]}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted mb-4 leading-relaxed">
                      {skill.description}
                    </p>
                    <div className="h-1.5 w-full rounded-full bg-white/[0.06] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-signal to-growth"
                      />
                    </div>
                    <p className="mt-2 font-mono text-[11px] text-faint">
                      {skill.progress}%
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
