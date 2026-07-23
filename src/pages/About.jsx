import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { GraduationCap, Compass, Target } from 'lucide-react'
import PageTransition from '../animations/PageTransition'
import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import { profile } from '../data/profile'

const pillars = [
  {
    icon: GraduationCap,
    title: 'My Story',
    copy: `I'm a ${profile.education.year} ${profile.education.degree} student at ${profile.education.college}. Like most CS students, I started with curiosity about how software actually works, and that curiosity turned into building things by hand.`,
  },
  {
    icon: Compass,
    title: 'Current Journey',
    copy: `Right now I'm deep in the MERN stack — front to back. I'm building small projects, breaking them, and fixing them, which has taught me more than any tutorial alone.`,
  },
  {
    icon: Target,
    title: 'Future Goals',
    copy: `The near-term goal is to become a confident Full Stack Developer. Longer-term, I want to grow into a Software Engineer role where I can work on real products with a real team.`,
  },
]

export default function About() {
  return (
    <PageTransition>
      <Helmet>
        <title>About | {profile.name}</title>
      </Helmet>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-[240px_1fr] gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative mx-auto md:mx-0"
          >
            <div className="relative h-56 w-56 rounded-3xl glass shadow-glow flex items-center justify-center overflow-hidden">
              {profile.photo ? (
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="font-display text-5xl font-semibold text-gradient">
                  {profile.initials}
                </span>
              )}
            </div>
            <p className="mt-4 text-center md:text-left font-mono text-[11px] text-faint max-w-[224px]">
              PHOTO PLACEHOLDER — add yours at
              public/profile.jpg, then set `photo: '/profile.jpg'`
              in src/data/profile.js
            </p>
          </motion.div>

          <div>
            <SectionHeading
              eyebrow="About"
              title={`Hi, I'm ${profile.name}`}
              description={`${profile.tagline} I believe in showing real progress rather than a polished but hollow front.`}
              className="mb-8"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map(({ icon: Icon, title, copy }, i) => (
            <Card key={title} delay={i * 0.1}>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-signal/10 text-signal">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-inktext mb-2">{title}</h3>
              <p className="text-sm text-muted leading-relaxed">{copy}</p>
            </Card>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
