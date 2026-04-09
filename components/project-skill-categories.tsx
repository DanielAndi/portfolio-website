import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { skillProfiles } from '@/lib/skills'

interface ProjectSkillCategoriesProps {
  activeSkillId?: string | null
  className?: string
}

export function ProjectSkillCategories({
  activeSkillId,
  className,
}: ProjectSkillCategoriesProps) {
  return (
    <div className={cn('space-y-4', className)}>
      <h3 className="text-lg font-medium text-foreground">Browse by focus</h3>
      <div className="flex flex-wrap gap-2">
        <Link
          href="/projects"
          className={cn(
            'transition-all duration-200 focus-ring rounded-full',
            !activeSkillId
              ? 'bg-accent text-accent-foreground'
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          )}
          aria-current={!activeSkillId ? 'page' : undefined}
        >
          <Badge
            variant={!activeSkillId ? 'default' : 'secondary'}
            className={cn(
              'cursor-pointer transition-all duration-200',
              !activeSkillId && 'bg-accent text-accent-foreground'
            )}
          >
            All projects
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
            >
              <Badge
                variant={isActive ? 'default' : 'secondary'}
                className={cn(
                  'cursor-pointer transition-all duration-200',
                  isActive && 'bg-accent text-accent-foreground'
                )}
              >
                {profile.label}
              </Badge>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
