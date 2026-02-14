// Single source of truth for specializations (URL slugs, labels, resume paths)

export type Specialization = {
  id: string
  label: string
  resumePath: string
}

export const specializations: Specialization[] = [
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

export function getSpecializationById(id: string): Specialization | undefined {
  return specializations.find((s) => s.id === id)
}
