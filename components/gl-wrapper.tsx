'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const GLComponent = dynamic(() => import('./gl').then(mod => ({ default: mod.GL })), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" aria-hidden="true" />,
})

export function GLWrapper({ hovering }: { hovering: boolean }) {
  return (
    <Suspense fallback={<div className="absolute inset-0 bg-black" aria-hidden="true" />}>
      <GLComponent hovering={hovering} />
    </Suspense>
  )
}
