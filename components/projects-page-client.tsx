'use client'

import { useState } from 'react'
import { ProjectCard } from '@/components/project-card'
import { ProjectsRefineToolbar } from '@/components/projects-refine-toolbar'
import type { Project } from '@/lib/types'

interface ProjectsPageClientProps {
  pageTitle: string
  pageDescription: string
  projects: Project[]
  tags: string[]
  activeSkillId: string | null
}

export function ProjectsPageClient({
  pageTitle,
  pageDescription,
  projects,
  tags,
  activeSkillId,
}: ProjectsPageClientProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const filteredProjects =
    selectedTags.length === 0
      ? projects
      : projects.filter((project) => {
          const projectTags = new Set(
            (project.tags ?? []).map((t) => t.toLowerCase())
          )
          return selectedTags.some((tag) => projectTags.has(tag.toLowerCase()))
        })

  return (
    <div className="space-y-6 lg:space-y-8">
      <div className="flex flex-col gap-5 lg:grid lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] xl:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:items-start lg:gap-x-8 xl:gap-x-10">
        <header className="min-w-0 lg:pt-0.5">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-3 lg:mb-4">
            {pageTitle}
          </h1>
          <p className="text-lg text-muted-foreground max-w-prose">
            {pageDescription}
          </p>
        </header>
        <ProjectsRefineToolbar
          className="min-w-0 w-full"
          activeSkillId={activeSkillId}
          tags={tags}
          selectedTags={selectedTags}
          onTagsChange={setSelectedTags}
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}
