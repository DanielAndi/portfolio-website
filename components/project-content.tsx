'use client'

import { useMDXComponent } from 'next-contentlayer2/hooks'
import type { ProjectContentProps } from '@/lib/types'
import { useMDXComponents } from '@/lib/mdx'

export function ProjectContent({ content }: ProjectContentProps) {
  const MDXContent = useMDXComponent(content)
  const components = useMDXComponents({})

  return (
    <div className="project-mdx">
      <MDXContent components={components} />
    </div>
  )
}

