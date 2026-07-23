/**
 * ============================================================
 *  PROFILE DATA
 *  This is the single source of truth for your identity,
 *  contact info, and social links. Edit this file and the
 *  whole site updates — no need to touch any component.
 * ============================================================
 */

export const profile = {
  name: 'Ankan Nandi',
  initials: 'AN',
  role: 'Aspiring Full Stack Developer',
  tagline: 'Currently learning the MERN stack, in public.',
  education: {
    degree: 'B.Tech in Computer Science & Engineering',
    year: '4th Year',
    college: 'NSHM Knowledge Campus, Durgapur',
  },
  status: 'Learning MERN Stack Development',
  currentGoal: 'Become a Full Stack Developer',
  careerGoal: 'Software Engineer',
  location: 'Durgapur, West Bengal, India',

  
  photo: '/profile.jpg',

  // RESUME PLACEHOLDER
  // Drop your resume at: public/resume.pdf
  // Once the file exists, set resumeAvailable to true — the Resume button
  // will then download it. Until then it shows a "Resume Coming Soon" modal.
  resumeAvailable: false,
  resumePath: '/resume.pdf',
}

export const contact = {
  phone: '+91 9382546973',
  phoneHref: 'tel:+919382546973',
  email: 'ankannandi81@gmail.com',
  emailHref: 'mailto:ankannandi81@gmail.com',
  github: 'https://github.com/ankannandi278',
  linkedin: 'https://www.linkedin.com/in/ankan-nandi-742121317/',
  whatsapp: 'https://wa.me/qr/JGW5Q7N5EZY6K1',
  instagram: 'https://www.instagram.com/_ankannandi_/',
  facebook: 'https://www.facebook.com/ankan.nandi.315',
  x: 'https://x.com/ankan_nandi2003',
}

// EmailJS credentials — used by the Contact page.
// Get these from https://www.emailjs.com/ after creating a free account,
// a service, and an email template. Never commit real keys to a public repo —
// use a .env file instead (see README "Environment Variables").
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
}
