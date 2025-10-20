'use client'

import dynamic from 'next/dynamic'

const GLComponent = dynamic(() => import('./gl').then(mod => ({ default: mod.GL })), {
  ssr: false,
})

export function GLWrapper({ hovering }: { hovering: boolean }) {
  return <GLComponent hovering={hovering} />
}
