import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Home as HomeIcon } from 'lucide-react'
import PageTransition from '../animations/PageTransition'
import Button from '../components/ui/Button'
import { profile } from '../data/profile'

export default function NotFound() {
  return (
    <PageTransition>
      <Helmet>
        <title>404 — Page Not Found | {profile.name}</title>
      </Helmet>

      <section className="mx-auto max-w-2xl px-6 py-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-sm text-signal mb-4"
        >
          $ cd /this-page
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="text-6xl sm:text-8xl font-display font-semibold text-gradient mb-4"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted mb-10"
        >
          bash: cd: no such directory. This route doesn't exist — the rest
          of the site does.
        </motion.p>
        <Button href="/" icon={HomeIcon}>
          Back to Home
        </Button>
      </section>
    </PageTransition>
  )
}
