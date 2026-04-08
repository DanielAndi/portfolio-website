// Single source of truth for skill profile routes (URL slugs, labels, resume paths)

export type SkillProfile = {
  id: string
  label: string
  resumePath: string
}

export const skillProfiles: SkillProfile[] = [
  {
    id: 'cloud',
    label: 'Cloud / Backend Engineer',
    resumePath: '/resumes/cloud-engineer.pdf',
  },
  {
    id: 'frontend',
    label: 'Frontend Engineer',
    resumePath: '/resumes/frontend-engineer.pdf',
  },
  {
    id: 'ai-automation',
    label: 'AI / Automation',
    resumePath: '/resumes/ai-automation.pdf',
  },
  {
    id: 'iot',
    label: 'IoT / Embedded',
    resumePath: '/resumes/iot-engineer.pdf',
  },
]

export function getSkillProfileById(id: string): SkillProfile | undefined {
  return skillProfiles.find((s) => s.id === id)
}
