// Single source of truth for skill profile routes (URL slugs, labels, resume paths)

export type SkillProfile = {
  id: string
  label: string
  /** Compact label for tight UI (e.g. filter chips on small screens). */
  shortLabel: string
  /** Null until a reviewed, non-placeholder PDF is available. */
  resumePath: string | null
}

export const skillProfiles: SkillProfile[] = [
  {
    id: 'cloud',
    label: 'Cloud / Backend Engineer',
    shortLabel: 'Cloud',
    resumePath: null,
  },
  {
    id: 'frontend',
    label: 'Frontend Engineer',
    shortLabel: 'Frontend',
    resumePath: null,
  },
  {
    id: 'ai-automation',
    label: 'AI / Automation',
    shortLabel: 'AI',
    resumePath: null,
  },
  {
    id: 'iot',
    label: 'IoT / Embedded',
    shortLabel: 'IoT',
    resumePath: null,
  },
]

export function getSkillProfileById(id: string): SkillProfile | undefined {
  return skillProfiles.find((s) => s.id === id)
}
