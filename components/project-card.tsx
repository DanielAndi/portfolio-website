'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { Project } from '@/lib/contentlayer-types'

interface ProjectCardProps {
  project: Project
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={project.url} className="block">
        <div className="card overflow-hidden transition-all duration-300 hover:shadow-lg">
          {/* Image */}
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className={cn(
                'object-cover transition-transform duration-300',
                isHovered && 'scale-105'
              )}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
                {project.title}
              </h3>
              <div className="flex space-x-2 ml-4">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                    aria-label="View repository"
                  >
                    <Github size={16} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                    aria-label="View live demo"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-muted-foreground mb-4 line-clamp-2">
              {project.summary}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.tech.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{project.tech.length - 4} more
                </Badge>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
