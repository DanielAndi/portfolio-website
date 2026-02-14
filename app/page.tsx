import { HomeLayout } from '@/components/home-layout'
import type { Project } from '@/lib/types'

export default function Home() {
  // Fallback for development when contentlayer isn't built yet
  let featuredProjects: Project[] = []
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { getFeaturedProjects } = require('@/lib/projects')
    featuredProjects = getFeaturedProjects()
  } catch {
    // Contentlayer not built yet, use empty array
  }

  return (
    <HomeLayout
      title="Hi, I'm Daniel"
      titleAccent="Daniel"
      subtitle={'"Knowledge is power, information is liberating, and education is the premise of progress"'}
      resumePath="/resume.pdf"
      projects={featuredProjects}
    />
  )
}