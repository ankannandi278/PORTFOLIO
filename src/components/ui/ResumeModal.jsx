import { AnimatePresence, motion } from 'framer-motion'
import { FileText, X } from 'lucide-react'
import Button from './Button'

export default function ResumeModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-modal-title"
            className="relative w-full max-w-sm rounded-2xl glass p-8 text-center shadow-glow"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 text-muted hover:text-inktext transition-colors"
            >
              <X size={18} />
            </button>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-signal/10 text-signal">
              <FileText size={24} />
            </div>
            <h3 id="resume-modal-title" className="text-lg font-semibold text-inktext mb-2">
              Resume Coming Soon
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-6">
              The resume hasn't been uploaded yet. In the meantime, feel free
              to reach out directly — every question gets a reply.
            </p>
            <Button href="/contact" onClick={onClose} className="w-full">
              Contact Me Instead
            </Button>
            <p className="mt-4 font-mono text-[11px] text-faint">
              Editor note: drop resume.pdf into /public, then set
              resumeAvailable to true in src/data/profile.js
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
