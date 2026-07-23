import { cn } from '../../utils/cn'

const tones = {
  neutral: 'bg-white/[0.06] text-muted border-white/[0.08]',
  signal: 'bg-signal/10 text-signal-soft border-signal/20',
  growth: 'bg-growth/10 text-growth-soft border-growth/20',
  ember: 'bg-ember/10 text-ember border-ember/20',
}

export default function Badge({ children, tone = 'neutral', className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1',
        'font-mono text-[11px] tracking-wide',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
