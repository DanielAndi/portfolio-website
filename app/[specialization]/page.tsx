import { notFound } from 'next/navigation'
import { HomeLayout } from '@/components/home-layout'
import { getSpecializationById, specializations } from '@/lib/specializations'
import { getProjectsBySpecialization } from '@/lib/projects'

interface SpecializationPageProps {
  params: Promise<{
    specialization: string
  }>
}

export function generateStaticParams() {
  return specializations.map((s) => ({
    specialization: s.id,
  }))
}

export default async function SpecializationPage({ params }: SpecializationPageProps) {
  const { specialization: specId } = await params
  const specialization = getSpecializationById(specId)

  if (!specialization) {
    notFound()
  }

  const projects = getProjectsBySpecialization(specId)

  return (
    <HomeLayout
      title={specialization.label}
      resumePath={specialization.resumePath}
      projects={projects}
      specializationId={specId}
    />
  )
}
