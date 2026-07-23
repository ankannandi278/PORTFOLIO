import { useEffect, useRef } from 'react'
import { useIsFinePointer } from '../../hooks/useIsFinePointer'

/**
 * Lightweight custom cursor. Uses refs + direct style writes (not React
 * state) so it can update every animation frame without re-rendering.
 * Automatically disabled on touch devices via useIsFinePointer.
 */
export default function CustomCursor() {
  const isFine = useIsFinePointer()
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!isFine) return

    function onMove(e) {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
      }
    }

    function onOver(e) {
      const interactive = e.target.closest('a, button, input, textarea, [role="button"]')
      if (ringRef.current) {
        ringRef.current.style.width = interactive ? '48px' : '32px'
        ringRef.current.style.height = interactive ? '48px' : '32px'
        ringRef.current.style.borderColor = interactive
          ? 'rgba(52,211,153,0.7)'
          : 'rgba(79,124,255,0.5)'
      }
    }

    let rafId
    function animateRing() {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.18
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`
      }
      rafId = requestAnimationFrame(animateRing)
    }
    rafId = requestAnimationFrame(animateRing)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(rafId)
    }
  }, [isFine])

  if (!isFine) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
