'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { groupFilterTags } from '@/lib/tech-filter-categories'
import { skillProfiles } from '@/lib/skills'
import type { ProjectsRefineToolbarProps } from '@/lib/types'

function tagsDependencyKey(tags: string[]) {
  return [...tags].sort().join('\0')
}

export function ProjectsRefineToolbar({
  activeSkillId,
  tags,
  selectedTags,
  onTagsChange,
  className,
}: ProjectsRefineToolbarProps) {
  const [localSelectedTags, setLocalSelectedTags] = useState<string[]>(selectedTags)
  const tagsKey = useMemo(() => tagsDependencyKey(tags), [tags])
  const tagGroups = useMemo(() => groupFilterTags(tags), [tags])

  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({})

  useEffect(() => {
    setLocalSelectedTags(selectedTags)
  }, [selectedTags])

  useEffect(() => {
    const groups = groupFilterTags(tags)
    const desktop = window.matchMedia('(min-width: 768px)').matches
    setOpenCategories(() => {
      const next: Record<string, boolean> = {}
      for (const g of groups) {
        next[g.id] = false
      }
      if (groups[0] && desktop) {
        next[groups[0].id] = true
      }
      return next
    })
  }, [tagsKey, tags])

  const toggleTag = (tag: string) => {
    const newTags = localSelectedTags.includes(tag)
      ? localSelectedTags.filter((t) => t !== tag)
      : [...localSelectedTags, tag]
    setLocalSelectedTags(newTags)
    onTagsChange(newTags)
  }

  const clearTagFilters = () => {
    setLocalSelectedTags([])
    onTagsChange([])
  }

  return (
    <section
      className={cn(
        'rounded-lg border border-border/60 bg-muted/20 p-4 space-y-4',
        className
      )}
      aria-label="Refine projects"
    >
      <div className="space-y-1">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h3 className="text-lg font-medium text-foreground">Refine projects</h3>
          {localSelectedTags.length > 0 && (
            <button
              type="button"
              onClick={clearTagFilters}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 shrink-0"
            >
              Clear stack filters
            </button>
          )}
        </div>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Pick a role and optional technology tags.{' '}
          <span className="text-muted-foreground/90">
            <span className="font-medium text-foreground/80">All projects</span> clears the role
            filter.
          </span>
        </p>
      </div>

      <div className="rounded-md border border-border/40 bg-background/40 p-3 space-y-3">
        <div
          className="flex flex-wrap gap-1.5"
          role="group"
          aria-label="Filter by role focus"
        >
          <Link
            href="/projects"
            className={cn(
              'transition-all duration-200 focus-ring rounded-full',
              !activeSkillId
                ? 'bg-accent text-accent-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            )}
            aria-current={!activeSkillId ? 'page' : undefined}
            title="Show all projects"
          >
            <Badge
              variant={!activeSkillId ? 'default' : 'secondary'}
              className={cn(
                'cursor-pointer px-2 py-0 text-[11px] font-semibold transition-all duration-200',
                !activeSkillId && 'bg-accent text-accent-foreground'
              )}
            >
              <span className="sm:hidden">All</span>
              <span className="hidden sm:inline">All projects</span>
            </Badge>
          </Link>
          {skillProfiles.map((profile) => {
            const isActive = activeSkillId === profile.id
            return (
              <Link
                key={profile.id}
                href={`/projects?skill=${profile.id}`}
                className={cn(
                  'transition-all duration-200 focus-ring rounded-full',
                  isActive
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                )}
                aria-current={isActive ? 'page' : undefined}
                aria-label={profile.label}
                title={profile.label}
              >
                <Badge
                  variant={isActive ? 'default' : 'secondary'}
                  className={cn(
                    'cursor-pointer px-2 py-0 text-[11px] font-semibold transition-all duration-200',
                    isActive && 'bg-accent text-accent-foreground'
                  )}
                >
                  <span className="sm:hidden">{profile.shortLabel}</span>
                  <span className="hidden sm:inline">{profile.label}</span>
                </Badge>
              </Link>
            )
          })}
        </div>

        {tagGroups.length > 0 && (
          <div className="space-y-1" role="group" aria-label="Filter by technology category">
            {tagGroups.map((group) => (
              <details
                key={group.id}
                className="group rounded-md border border-border/50 bg-muted/30"
                open={openCategories[group.id] ?? false}
                onToggle={(e) => {
                  const el = e.currentTarget
                  setOpenCategories((prev) => ({
                    ...prev,
                    [group.id]: el.open,
                  }))
                }}
              >
                <summary
                  className={cn(
                    'flex cursor-pointer list-none items-center justify-between gap-2 px-3 py-2 text-sm font-medium text-foreground',
                    'select-none [&::-webkit-details-marker]:hidden'
                  )}
                >
                  <span>{group.label}</span>
                  <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="flex flex-wrap gap-1.5 border-t border-border/40 px-3 py-2">
                  {group.tags.map((tag) => {
                    const isSelected = localSelectedTags.includes(tag)
                    return (
                      <button
                        key={tag}
                        type="button"
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
                            'cursor-pointer px-2 py-0 text-[11px] font-semibold transition-all duration-200',
                            isSelected && 'bg-accent text-accent-foreground'
                          )}
                        >
                          {tag}
                        </Badge>
                      </button>
                    )
                  })}
                </div>
              </details>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
