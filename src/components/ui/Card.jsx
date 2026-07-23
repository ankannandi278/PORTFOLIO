import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

export default function Card({ children, className, hover = true, delay = 0, ...rest }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        'glass rounded-2xl p-6 shadow-card',
        hover && 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow',
        className,
      )}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
