'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Calendar, User, Code } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Project } from '@/lib/types'

interface BuildSheetProps {
  project: Project
  className?: string
}

export function BuildSheet({ project, className }: BuildSheetProps) {
  return (
    <div className={cn('card p-6 space-y-6', className)}>
      <div className="flex items-center gap-2 mb-4">
        <Code size={20} className="text-accent" />
        <h3 className="text-lg font-semibold text-foreground">Project Details</h3>
      </div>

      <dl className="space-y-4">
        <div>
          <dt className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-1">
            <User size={16} />
            Role
          </dt>
          <dd className="text-foreground">{project.role}</dd>
        </div>

        <div>
          <dt className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-1">
            <Calendar size={16} />
            Timeline
          </dt>
          <dd className="text-foreground">{project.dates}</dd>
        </div>

        <div>
          <dt className="text-sm font-medium text-muted-foreground mb-2">Status</dt>
          <dd>
            <Badge
              variant={
                project.status.toLowerCase() === 'completed'
                  ? 'default'
                  : project.status.toLowerCase() === 'in progress'
                  ? 'secondary'
                  : 'outline'
              }
            >
              {project.status}
            </Badge>
          </dd>
        </div>

        <div>
          <dt className="text-sm font-medium text-muted-foreground mb-2">
            Technologies
          </dt>
          <dd>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </dd>
        </div>

      </dl>

      <div className="pt-4 border-t border-border space-y-3">
        {project.repoUrl && (
          <Button asChild variant="outline" className="w-full">
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Github size={16} className="mr-2" />
              View Source
            </a>
          </Button>
        )}
        
        {project.liveUrl && (
          <Button asChild className="w-full">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} className="mr-2" />
              Live Demo
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}
