import { useRef } from 'react'
import { useIsFinePointer } from '../../hooks/useIsFinePointer'

export default function MouseGlow({ className = '' }) {
  const isFine = useIsFinePointer()
  const ref = useRef(null)

  function handleMove(e) {
    if (!ref.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    ref.current.style.background = `radial-gradient(400px circle at ${x}px ${y}px, rgba(79,124,255,0.12), transparent 70%)`
  }

  if (!isFine) return null

  return (
    <div
      onMouseMove={handleMove}
      className={`absolute inset-0 pointer-events-auto ${className}`}
    >
      <div ref={ref} className="absolute inset-0 transition-[background] duration-150" />
    </div>
  )
}
