'use client'

import { useMDXComponent } from 'next-contentlayer2/hooks'
import type { ProjectContentProps } from '@/lib/types'

export function ProjectContent({ content }: ProjectContentProps) {
  const MDXContent = useMDXComponent(content)
  
  return (
    <div className="prose prose-lg max-w-none">
      <MDXContent />
    </div>
  )
}

