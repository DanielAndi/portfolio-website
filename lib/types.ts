// Type definitions for the portfolio website

export interface Project {
  slug: string
  title: string
  summary: string
  role: string
  dates: string
  tech: string[]
  status: string
  heroImage: string
  repoUrl?: string
  liveUrl?: string
  featured: boolean
  tags: string[]
  url: string
  body: {
    code: string
  }
}

export interface ProjectFiltersProps {
  tags: string[]
  selectedTags: string[]
  onTagsChange: (tags: string[]) => void
  className?: string
}

export interface ProjectContentProps {
  content: string
}
