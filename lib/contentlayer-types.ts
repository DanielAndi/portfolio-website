// Temporary types for contentlayer until it's properly built
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
  featured?: boolean
  tags?: string[]
  metrics?: Array<{ label: string; value: string }>
  screenshots?: Array<{ src: string; alt: string; caption: string }>
  url: string
  body: {
    code: string
  }
}

export const allProjects: Project[] = []
