import { useEffect, useState } from 'react'

const lines = [
  { prompt: 'whoami', output: 'Ankan Nandi' },
  { prompt: 'status --current', output: '4th Year B.Tech CSE @ NSHM Knowledge Campus' },
  { prompt: 'learning --stack', output: 'MERN (MongoDB, Express, React, Node)' },
  { prompt: 'goal --next', output: 'Full Stack Developer' },
]

/**
 * Types out a small boot sequence, one line at a time, then loops the
 * blinking cursor on the last line. Respects prefers-reduced-motion by
 * rendering everything immediately.
 */
export default function TerminalIntro() {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const [visibleLines, setVisibleLines] = useState(prefersReducedMotion ? lines.length : 0)
  const [charCount, setCharCount] = useState(prefersReducedMotion ? 999 : 0)

  useEffect(() => {
    if (prefersReducedMotion) return
    if (visibleLines >= lines.length) return

    const current = lines[visibleLines].output
    if (charCount < current.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), 18)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setVisibleLines((v) => v + 1)
      setCharCount(0)
    }, 350)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charCount, visibleLines])

  return (
    <div className="w-full max-w-lg rounded-2xl glass p-5 font-mono text-sm shadow-card">
      <div className="flex items-center gap-1.5 mb-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[11px] text-faint">portfolio — zsh</span>
      </div>
      <div className="space-y-2.5">
        {lines.map((line, i) => {
          if (i > visibleLines) return null
          const isCurrent = i === visibleLines
          const output = isCurrent && !prefersReducedMotion
            ? line.output.slice(0, charCount)
            : line.output
          return (
            <div key={line.prompt}>
              <p className="text-muted">
                <span className="text-growth">➜</span>{' '}
                <span className="text-signal-soft">{line.prompt}</span>
              </p>
              <p className="text-inktext pl-4">
                {output}
                {isCurrent && <span className="animate-blink">▌</span>}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
