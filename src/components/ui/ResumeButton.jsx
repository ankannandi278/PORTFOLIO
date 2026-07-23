import { useState } from 'react'
import { Download } from 'lucide-react'
import Button from './Button'
import ResumeModal from './ResumeModal'
import { profile } from '../../data/profile'

export default function ResumeButton({ variant = 'secondary', className }) {
  const [open, setOpen] = useState(false)

  if (profile.resumeAvailable) {
    return (
      <Button
        href={profile.resumePath}
        external
        variant={variant}
        icon={Download}
        className={className}
      >
        Download Resume
      </Button>
    )
  }

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant={variant}
        icon={Download}
        className={className}
      >
        Download Resume
      </Button>
      <ResumeModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
