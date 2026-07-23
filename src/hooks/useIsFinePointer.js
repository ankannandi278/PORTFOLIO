import { useEffect, useState } from 'react'

/**
 * Returns true only for devices with a precise pointer (mouse/trackpad).
 * Used to skip the custom cursor and mouse-glow on touch devices.
 */
export function useIsFinePointer() {
  const [isFine, setIsFine] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    setIsFine(mq.matches)
    const handler = (e) => setIsFine(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return isFine
}
