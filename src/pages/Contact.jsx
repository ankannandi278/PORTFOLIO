import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'
import { Phone, Mail, Github, Linkedin, MessageCircle, Send } from 'lucide-react'
import PageTransition from '../animations/PageTransition'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import { contact, emailjsConfig, profile } from '../data/profile'

const channels = [
  { icon: Phone, label: 'Call', value: contact.phone, href: contact.phoneHref, external: false },
  { icon: Mail, label: 'Email', value: contact.email, href: contact.emailHref, external: false },
  { icon: Github, label: 'GitHub', value: '@ankannandi278', href: contact.github, external: true },
  { icon: Linkedin, label: 'LinkedIn', value: 'Ankan Nandi', href: contact.linkedin, external: true },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Scan / Chat', href: contact.whatsapp, external: true },
]

const initialForm = { name: '', email: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Please enter your name.'
  if (!form.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email.'
  }
  if (!form.message.trim()) errors.message = 'Please write a short message.'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)

  const isConfigured = Boolean(
    emailjsConfig.serviceId && emailjsConfig.templateId && emailjsConfig.publicKey,
  )

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    if (!isConfigured) {
      toast.error('Contact form isn\'t connected yet — email directly for now.')
      return
    }

    setSending(true)
    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        emailjsConfig.publicKey,
      )
      toast.success('Message sent — thanks for reaching out!')
      setForm(initialForm)
    } catch (err) {
      toast.error('Something went wrong sending that. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <PageTransition>
      <Helmet>
        <title>Contact | {profile.name}</title>
      </Helmet>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's talk"
          description="Whether it's feedback, an opportunity, or just to say hi — every message gets a reply."
        />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">
          <div className="space-y-3">
            {channels.map(({ icon: Icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 rounded-2xl glass p-4 hover:-translate-y-0.5 hover:shadow-glow transition-all duration-300"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-signal/10 text-signal">
                  <Icon size={18} />
                </span>
                <span>
                  <span className="block text-xs text-faint">{label}</span>
                  <span className="block text-sm text-inktext font-medium">{value}</span>
                </span>
              </a>
            ))}
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl glass p-6 sm:p-8 shadow-card space-y-5"
            noValidate
          >
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-faint mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-3 text-sm text-inktext placeholder:text-faint focus:border-signal outline-none transition-colors"
              />
              {errors.name && <p className="mt-1.5 text-xs text-ember">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono text-faint mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-3 text-sm text-inktext placeholder:text-faint focus:border-signal outline-none transition-colors"
              />
              {errors.email && <p className="mt-1.5 text-xs text-ember">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono text-faint mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                className="w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-3 text-sm text-inktext placeholder:text-faint focus:border-signal outline-none transition-colors resize-none"
              />
              {errors.message && <p className="mt-1.5 text-xs text-ember">{errors.message}</p>}
            </div>

            <Button type="submit" icon={Send} disabled={sending} className="w-full">
              {sending ? 'Sending…' : 'Send Message'}
            </Button>

            {!isConfigured && (
              <p className="font-mono text-[11px] text-faint text-center">
                Editor note: add your EmailJS keys to a .env file (see README)
                to make this form functional.
              </p>
            )}
          </motion.form>
        </div>
      </section>
    </PageTransition>
  )
}
