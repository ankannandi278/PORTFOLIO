import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { GitCommit } from 'lucide-react'
import PageTransition from '../animations/PageTransition'
import SectionHeading from '../components/ui/SectionHeading'
import { journey } from '../data/journey'
import { profile } from '../data/profile'

const dotStyles = {
  done: 'bg-growth border-growth',
  active: 'bg-signal border-signal shadow-glow',
  upcoming: 'bg-transparent border-faint',
}

const textStyles = {
  done: 'text-inktext',
  active: 'text-inktext',
  upcoming: 'text-faint',
}

export default function Journey() {
  return (
    <PageTransition>
      <Helmet>
        <title>Journey | {profile.name}</title>
      </Helmet>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <SectionHeading
          eyebrow="git log --learning"
          title="The Learning Journey"
          description="Every stage below is a real commit in the process — done, in progress, or queued up next. Nothing here is skipped ahead."
        />

        <div className="relative pl-8">
          <div className="absolute left-[9px] top-2 bottom-2 w-px bg-white/[0.08]" />

          <ul className="space-y-10">
            {journey.map((entry, i) => (
              <motion.li
                key={entry.hash}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative"
              >
                <span
                  className={`absolute -left-8 top-1 h-4 w-4 rounded-full border-2 ${dotStyles[entry.state]}`}
                />
                <div className="flex items-center gap-2 mb-1">
                  <GitCommit size={13} className="text-faint" />
                  <span className="font-mono text-xs text-faint">{entry.hash}</span>
                  {entry.state === 'active' && (
                    <span className="font-mono text-[10px] uppercase tracking-wider text-signal bg-signal/10 rounded-full px-2 py-0.5">
                      current
                    </span>
                  )}
                </div>
                <h3 className={`font-semibold ${textStyles[entry.state]}`}>
                  {entry.title}
                </h3>
                <p className="text-sm text-muted mt-1 leading-relaxed max-w-xl">
                  {entry.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </PageTransition>
  )
}
