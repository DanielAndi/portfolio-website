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
  /** Extra slides after heroImage (screens, GIFs, alternate views). */
  heroGallery?: string[]
  /** Ordered hero slides with captions; overrides heroImage + heroGallery when present. */
  heroSlides?: { src: string; caption: string }[]
  repoUrl?: string
  liveUrl?: string
  extraLinks?: { label: string; url: string }[]
  featured: boolean
  tags?: string[]
  skills?: string[]
  url: string
  body: {
    code: string
  }
}

export interface ProjectsRefineToolbarProps {
  activeSkillId: string | null
  tags: string[]
  selectedTags: string[]
  onTagsChange: (tags: string[]) => void
  className?: string
}

export interface ProjectContentProps {
  content: string
}
