import { Helmet } from 'react-helmet-async'
import { Github, ExternalLink, Sparkles } from 'lucide-react'
import PageTransition from '../animations/PageTransition'
import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { projects, statusLabels } from '../data/projects'
import { profile } from '../data/profile'

const statusTone = {
  'coming-soon': 'ember',
  'in-progress': 'signal',
  completed: 'growth',
}

function ProjectCover({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover"
      />
    )
  }
  // Animated gradient placeholder cover — swap for a real screenshot later
  return (
    <div className="relative h-full w-full flex items-center justify-center bg-gradient-to-br from-signal/15 via-transparent to-growth/15">
      <div className="absolute inset-0 bg-grid-faint bg-grid opacity-30" />
      <Sparkles className="text-muted" size={28} />
    </div>
  )
}

export default function Projects() {
  return (
    <PageTransition>
      <Helmet>
        <title>Projects | {profile.name}</title>
      </Helmet>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading
          eyebrow="Building in public"
          title="Projects — real ones are on the way"
          description="No invented case studies here. These cards are placeholders for real work, structured so a finished project can drop straight in."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Card key={project.id} delay={i * 0.08} hover={false} className="p-0 overflow-hidden">
              <div className="h-44 w-full">
                <ProjectCover project={project} />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-inktext">{project.title}</h3>
                  <Badge tone={statusTone[project.status]}>
                    {statusLabels[project.status]}
                  </Badge>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    href={project.github || undefined}
                    external
                    variant="secondary"
                    icon={Github}
                    disabled={!project.github}
                    className="flex-1"
                  >
                    Code
                  </Button>
                  <Button
                    href={project.liveDemo || undefined}
                    external
                    variant="secondary"
                    icon={ExternalLink}
                    disabled={!project.liveDemo}
                    className="flex-1"
                  >
                    Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
