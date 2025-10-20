'use client'

export const GL = ({ hovering }: { hovering: boolean }) => {
  return (
    <div 
      className="absolute inset-0 bg-gradient-to-b from-black via-black to-black"
      style={{
        background: 'radial-gradient(ellipse at center, #1a1a1a 0%, #000000 100%)',
      }}
      aria-hidden="true"
    />
  )
}
