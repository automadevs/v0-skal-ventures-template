'use client'

import { GL } from './gl'

export function GLWrapper({ hovering }: { hovering: boolean }) {
  return <GL hovering={hovering} />
}
