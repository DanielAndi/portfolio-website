import { notFound } from 'next/navigation'
import { HomeLayout } from '@/components/home-layout'
import { getSkillProfileById, skillProfiles } from '@/lib/skills'
import { getProjectsBySkillProfile } from '@/lib/projects'

interface SkillProfilePageProps {
  params: Promise<{
    skill: string
  }>
}

export function generateStaticParams() {
  return skillProfiles.map((s) => ({
    skill: s.id,
  }))
}

export default async function SkillProfilePage({ params }: SkillProfilePageProps) {
  const { skill: skillId } = await params
  const profile = getSkillProfileById(skillId)

  if (!profile) {
    notFound()
  }

  const projects = getProjectsBySkillProfile(skillId)

  return (
    <HomeLayout
      title={profile.label}
      resumePath={profile.resumePath}
      projects={projects}
      skillProfileId={skillId}
    />
  )
}
