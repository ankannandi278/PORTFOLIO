import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

const variants = {
  primary:
    'bg-signal text-white shadow-glow hover:bg-signal-soft',
  secondary:
    'glass text-inktext hover:bg-white/[0.08]',
  ghost:
    'text-muted hover:text-inktext',
}

/**
 * Universal button. Renders an <a> when `href` is passed, otherwise a <button>.
 * external → adds target="_blank" rel="noopener noreferrer"
 */
export default function Button({
  children,
  href,
  external = false,
  onClick,
  variant = 'primary',
  icon: Icon,
  className,
  type = 'button',
  disabled = false,
  ...rest
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3',
    'text-sm font-medium tracking-wide transition-all duration-300',
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent',
    variants[variant],
    className,
  )

  const content = (
    <>
      {Icon && <Icon size={16} />}
      <span>{children}</span>
    </>
  )

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.03 },
    whileTap: disabled ? {} : { scale: 0.97 },
  }

  if (href && !disabled) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
        {...motionProps}
        {...rest}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...motionProps}
      {...rest}
    >
      {content}
    </motion.button>
  )
}
