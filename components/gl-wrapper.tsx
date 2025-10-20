'use client'

import dynamic from 'next/dynamic'
const GL = dynamic(() => import('./gl-fallback').then(mod => ({ default: mod.GL })), { ssr: false })

export function GLWrapper({ hovering }: { hovering: boolean }) {
  return <GL hovering={hovering} />
}
