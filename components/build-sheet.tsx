'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Calendar, User, Code, Link2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Project } from '@/lib/types'

interface BuildSheetProps {
  project: Project
  className?: string
}

function normalizeExtraLinks(
  raw: Project['extraLinks']
): { label: string; url: string }[] {
  if (!raw || !Array.isArray(raw)) return []
  return raw.filter(
    (item): item is { label: string; url: string } =>
      typeof item === 'object' &&
      item !== null &&
      typeof (item as { label?: string }).label === 'string' &&
      typeof (item as { url?: string }).url === 'string'
  )
}

export function BuildSheet({ project, className }: BuildSheetProps) {
  const extraLinks = normalizeExtraLinks(project.extraLinks)
  const hasLinkUrls =
    Boolean(project.repoUrl) ||
    Boolean(project.liveUrl) ||
    extraLinks.length > 0

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

      {hasLinkUrls && (
        <div className="pt-4 border-t border-border space-y-3">
          <div className="flex items-center gap-2">
            <Link2 size={16} className="text-muted-foreground" />
            <h4 className="text-sm font-semibold text-foreground">Links</h4>
          </div>
          <dl className="space-y-3">
            {project.repoUrl && (
              <div>
                <dt className="text-xs font-medium text-muted-foreground mb-1">
                  Repository
                </dt>
                <dd>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono text-accent underline-offset-2 hover:underline break-all"
                  >
                    {project.repoUrl}
                  </a>
                </dd>
              </div>
            )}
            {project.liveUrl && (
              <div>
                <dt className="text-xs font-medium text-muted-foreground mb-1">
                  Live site
                </dt>
                <dd>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono text-accent underline-offset-2 hover:underline break-all"
                  >
                    {project.liveUrl}
                  </a>
                </dd>
              </div>
            )}
            {extraLinks.map((link) => (
              <div key={`${link.label}-${link.url}`}>
                <dt className="text-xs font-medium text-muted-foreground mb-1">
                  {link.label}
                </dt>
                <dd>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono text-accent underline-offset-2 hover:underline break-all"
                  >
                    {link.url}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}

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
