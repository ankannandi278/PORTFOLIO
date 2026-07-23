import { Github, Linkedin, Mail, MessageCircle, ArrowUp } from 'lucide-react'
import { navLinks } from '../../constants/nav'
import { contact, profile } from '../../data/profile'

const socials = [
  { icon: Github, href: contact.github, label: 'GitHub' },
  { icon: Linkedin, href: contact.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: contact.emailHref, label: 'Email' },
  { icon: MessageCircle, href: contact.whatsapp, label: 'WhatsApp' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative mt-32 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 sm:grid-cols-3">
        <div>
          <p className="font-display font-semibold text-inktext mb-2">
            {profile.name}
          </p>
          <p className="text-sm text-muted leading-relaxed max-w-xs">
            {profile.tagline}
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-faint mb-4">
            Quick Links
          </p>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <a
                  href={link.path}
                  className="text-sm text-muted hover:text-inktext transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-faint mb-4">
            Elsewhere
          </p>
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full glass text-muted hover:text-signal hover:-translate-y-0.5 transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
          <p className="text-xs text-faint">
            © {year} {profile.name}. Built with React & Tailwind CSS.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full glass text-muted hover:text-inktext transition-colors"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
