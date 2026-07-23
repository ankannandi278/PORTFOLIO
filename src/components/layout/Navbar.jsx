import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../constants/nav'
import { profile } from '../../data/profile'
import ThemeToggle from '../ui/ThemeToggle'
import { cn } from '../../utils/cn'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-[80] transition-all duration-300',
        scrolled ? 'py-3' : 'py-5',
      )}
    >
      <div
        className={cn(
          'mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-300',
        )}
      >
        <div
          className={cn(
            'flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300',
            scrolled && 'glass shadow-card',
          )}
        >
          <NavLink
            to="/"
            className="font-display font-semibold text-inktext tracking-tight"
            onClick={() => setOpen(false)}
          >
            <span className="text-signal">{'{'}</span>
            {profile.initials}
            <span className="text-growth">{'}'}</span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                    isActive
                      ? 'text-inktext bg-white/[0.08]'
                      : 'text-muted hover:text-inktext',
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            <button
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-full glass"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mx-4 mt-2 overflow-hidden rounded-2xl glass shadow-card"
          >
            <nav className="flex flex-col p-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                      isActive ? 'text-inktext bg-white/[0.08]' : 'text-muted',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="px-4 pt-2">
                <ThemeToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
