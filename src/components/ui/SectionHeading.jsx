import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

/**
 * eyebrow: small mono label above the heading (e.g. "02 — skills")
 * Only use a numbered eyebrow where order is real information (see Journey).
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}) {
  return (
    <div
      className={cn(
        'mb-12',
        align === 'center' && 'text-center mx-auto max-w-2xl',
        className,
      )}
    >
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-signal mb-3"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="text-3xl sm:text-4xl font-semibold text-inktext"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-muted leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
