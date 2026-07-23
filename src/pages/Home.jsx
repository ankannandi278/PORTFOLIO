import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ChevronDown, MessageSquare } from 'lucide-react'
import PageTransition from '../animations/PageTransition'
import TerminalIntro from '../components/effects/TerminalIntro'
import MouseGlow from '../components/effects/MouseGlow'
import Button from '../components/ui/Button'
import ResumeButton from '../components/ui/ResumeButton'
import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import { profile } from '../data/profile'

const previewCards = [
  { to: '/skills', title: 'Skills', copy: 'What I already use, and what I\'m picking up next.' },
  { to: '/projects', title: 'Projects', copy: 'Placeholders now, real builds as the stack solidifies.' },
  { to: '/journey', title: 'Journey', copy: 'A commit-log of the path from first line of code to full stack.' },
]

export default function Home() {
  return (
    <PageTransition>
      <Helmet>
        <title>Ankan Nandi | Aspiring Full Stack Developer</title>
      </Helmet>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <MouseGlow />
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-xs uppercase tracking-[0.2em] text-signal mb-5"
            >
              {profile.education.year} · {profile.education.college}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl font-semibold leading-[1.05] text-inktext"
            >
              Building toward a
              <br />
              career as a{' '}
              <span className="text-gradient">Full Stack Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-md text-muted leading-relaxed"
            >
              I'm {profile.name}, a {profile.education.degree} student
              currently learning the MERN stack — sharing the process
              openly instead of pretending I've already arrived.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <ResumeButton />
              <Button href="/contact" variant="secondary" icon={MessageSquare}>
                Let's Talk
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <TerminalIntro />
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden sm:flex justify-center pb-10 text-faint"
        >
          <ChevronDown size={20} />
        </motion.div>
      </section>

      {/* QUICK PREVIEWS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Where to look next"
          title="A work in progress, shown honestly"
          description="No fake case studies, no invented internships — just where things stand right now, and where they're headed."
        />
        <div className="grid sm:grid-cols-3 gap-6">
          {previewCards.map((card, i) => (
            <Card key={card.to} delay={i * 0.1}>
              <a href={card.to} className="block group">
                <h3 className="text-lg font-semibold text-inktext mb-2 group-hover:text-signal-soft transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{card.copy}</p>
              </a>
            </Card>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
