'use client'

import { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { ProjectFiltersProps } from '@/lib/types'


export function ProjectFilters({
  tags,
  selectedTags,
  onTagsChange,
  className,
}: ProjectFiltersProps) {
  const [localSelectedTags, setLocalSelectedTags] = useState<string[]>(selectedTags)

  useEffect(() => {
    setLocalSelectedTags(selectedTags)
  }, [selectedTags])

  const toggleTag = (tag: string) => {
    const newTags = localSelectedTags.includes(tag)
      ? localSelectedTags.filter((t) => t !== tag)
      : [...localSelectedTags, tag]
    
    setLocalSelectedTags(newTags)
    onTagsChange(newTags)
  }

  const clearFilters = () => {
    setLocalSelectedTags([])
    onTagsChange([])
  }

  if (tags.length === 0) return null

  return (
    <div className={cn('space-y-4', className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-foreground">Filter by technology</h3>
        {localSelectedTags.length > 0 && (
          <button
            onClick={clearFilters}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Clear filters
          </button>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => {
          const isSelected = localSelectedTags.includes(tag)
          return (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={cn(
                'transition-all duration-200 focus-ring rounded-full',
                isSelected
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              )}
              aria-pressed={isSelected}
              aria-label={`Filter by ${tag}`}
            >
              <Badge
                variant={isSelected ? 'default' : 'secondary'}
                className={cn(
                  'cursor-pointer transition-all duration-200',
                  isSelected && 'bg-accent text-accent-foreground'
                )}
              >
                {tag}
              </Badge>
            </button>
          )
        })}
      </div>
    </div>
  )
}
