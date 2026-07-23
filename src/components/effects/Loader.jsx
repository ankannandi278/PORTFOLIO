import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Shows once per browser session (not on every route change).
 * Simulates a short boot sequence that matches the terminal
 * motif used in the Hero section.
 */
export default function Loader() {
  const [visible, setVisible] = useState(() => {
    return !sessionStorage.getItem('portfolio-loaded')
  })

  useEffect(() => {
    if (!visible) return
    const timer = setTimeout(() => {
      setVisible(false)
      sessionStorage.setItem('portfolio-loaded', 'true')
    }, 1400)
    return () => clearTimeout(timer)
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ink"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-mono text-sm text-signal">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 'auto' }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="inline-block overflow-hidden whitespace-nowrap align-bottom"
            >
              booting portfolio.exe
            </motion.span>
            <span className="animate-blink">▌</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
