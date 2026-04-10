// Single source of truth for skill profile routes (URL slugs, labels, resume paths)

export type SkillProfile = {
  id: string
  label: string
  /** Compact label for tight UI (e.g. filter chips on small screens). */
  shortLabel: string
  resumePath: string
}

export const skillProfiles: SkillProfile[] = [
  {
    id: 'cloud',
    label: 'Cloud / Backend Engineer',
    shortLabel: 'Cloud',
    resumePath: '/resumes/cloud-engineer.pdf',
  },
  {
    id: 'frontend',
    label: 'Frontend Engineer',
    shortLabel: 'Frontend',
    resumePath: '/resumes/frontend-engineer.pdf',
  },
  {
    id: 'ai-automation',
    label: 'AI / Automation',
    shortLabel: 'AI',
    resumePath: '/resumes/ai-automation.pdf',
  },
  {
    id: 'iot',
    label: 'IoT / Embedded',
    shortLabel: 'IoT',
    resumePath: '/resumes/iot-engineer.pdf',
  },
]

export function getSkillProfileById(id: string): SkillProfile | undefined {
  return skillProfiles.find((s) => s.id === id)
}
