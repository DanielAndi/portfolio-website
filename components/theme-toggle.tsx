'use client'

import { useEffect, useMemo, useState } from 'react'
import { Monitor, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

type ThemePreference = 'system' | 'light' | 'dark'

const STORAGE_KEY = 'theme'

function getSystemTheme(): Exclude<ThemePreference, 'system'> {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light'
}

function applyThemeToRoot(preference: ThemePreference) {
  const root = document.documentElement
  root.classList.remove('light', 'dark')

  if (preference === 'light' || preference === 'dark') {
    root.classList.add(preference)
  }
}

function readStoredPreference(): ThemePreference {
  if (typeof window === 'undefined') return 'system'
  const raw = window.localStorage.getItem(STORAGE_KEY)
  if (raw === 'light' || raw === 'dark' || raw === 'system') return raw
  return 'system'
}

function writeStoredPreference(pref: ThemePreference) {
  window.localStorage.setItem(STORAGE_KEY, pref)
}

export function ThemeToggle() {
  const [preference, setPreference] = useState<ThemePreference>('system')
  const [systemTheme, setSystemTheme] = useState<Exclude<ThemePreference, 'system'>>('light')

  useEffect(() => {
    setPreference(readStoredPreference())
    setSystemTheme(getSystemTheme())
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mql = window.matchMedia?.('(prefers-color-scheme: dark)')
    if (!mql) return

    const handler = () => setSystemTheme(getSystemTheme())
    handler()

    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    applyThemeToRoot(preference)
    writeStoredPreference(preference)
  }, [preference])

  const effectiveTheme = useMemo(() => {
    if (preference === 'system') return systemTheme
    return preference
  }, [preference, systemTheme])

  const Icon = preference === 'system' ? Monitor : effectiveTheme === 'dark' ? Moon : Sun

  const label =
    preference === 'system'
      ? `Theme: system (${systemTheme})`
      : `Theme: ${preference}`

  const cycle = () => {
    setPreference((prev) => (prev === 'system' ? 'light' : prev === 'light' ? 'dark' : 'system'))
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={cycle}
      aria-label={label}
      title={label}
      className="focus-ring"
    >
      <Icon size={18} />
    </Button>
  )
}

