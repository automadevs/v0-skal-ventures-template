'use client'

export const GL = ({ hovering }: { hovering: boolean }) => {
  return (
    <div 
      id="webgl"
      className="absolute inset-0 bg-black overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(255, 199, 0, 0.05) 0%, rgba(0, 0, 0, 1) 100%)',
      }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `linear-gradient(90deg, transparent 24%, rgba(255, 199, 0, 0.05) 25%, rgba(255, 199, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 199, 0, 0.05) 75%, rgba(255, 199, 0, 0.05) 76%, transparent 77%, transparent),
                          linear-gradient(rgba(255, 199, 0, 0.03) 0%, rgba(255, 199, 0, 0.03) 1px, transparent 1px, transparent)`,
        backgroundSize: '50px 50px',
      }} />
    </div>
  )
}
