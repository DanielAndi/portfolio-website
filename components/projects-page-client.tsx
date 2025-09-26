'use client'

import { useState } from 'react'
import { ProjectCard } from '@/components/project-card'
import { ProjectFilters } from '@/components/project-filters'

interface Project {
  slug: string
  title: string
  summary: string
  role: string
  dates: string
  tech: string[]
  status: string
  featured?: boolean
  heroImage: string
  repoUrl?: string
  liveUrl?: string
  url: string
  body: {
    code: string
  }
}

interface ProjectsPageClientProps {
  projects: Project[]
  tags: string[]
}

export function ProjectsPageClient({ projects, tags }: ProjectsPageClientProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const filteredProjects = selectedTags.length === 0 
    ? projects 
    : projects.filter(project => 
        selectedTags.some(tag => 
          project.tech.some(tech => 
            tech.toLowerCase().includes(tag.toLowerCase())
          )
        )
      )

  return (
    <div className="space-y-8">
      {tags.length > 0 && (
        <ProjectFilters
          tags={tags}
          selectedTags={selectedTags}
          onTagsChange={setSelectedTags}
        />
      )}
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}
