import { useEffect, useRef } from 'react'

/**
 * Quiet ambient backdrop used on every page: a soft aurora gradient,
 * a faint grid, and a sparse canvas particle field. Deliberately
 * restrained — this is atmosphere, not the page's signature moment
 * (that's the terminal hero / commit-log timeline).
 */
export default function AmbientBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    let particles = []
    let width, height, rafId

    function resize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      const count = Math.min(50, Math.floor((width * height) / 28000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 0.4,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        o: Math.random() * 0.3 + 0.1,
      }))
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(124, 155, 255, ${p.o})`
        ctx.fill()
      })
      if (!prefersReducedMotion) {
        rafId = requestAnimationFrame(draw)
      }
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-aurora" />
      <div className="absolute inset-0 bg-grid-faint bg-grid opacity-[0.4] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)]" />
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-signal/10 blur-3xl animate-float-slow" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-growth/10 blur-3xl animate-float" />
    </div>
  )
}
