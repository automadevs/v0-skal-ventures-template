'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const solutions = [
  {
    id: 1,
    title: 'Automação de Processos',
    description: 'Elimine tarefas repetitivas e ganhe tempo. Criamos fluxos automatizados que deixam seu negócio rodando sozinho, 24/7.'
  },
  {
    id: 2,
    title: 'Criação de Sites e Sistemas',
    description: 'De landing pages à plataformas complexas. Desenvolvemos soluções web modernas, rápidas e que convertem.'
  },
  {
    id: 3,
    title: 'Integrações Inteligentes',
    description: 'Conecte suas ferramentas favoritas. APIs, webhooks e sincronizações que fazem tudo funcionar como um único sistema.'
  },
  {
    id: 4,
    title: 'Coprodução com Criadores',
    description: 'Transforme sua visão em produto. Trabalhamos lado a lado para estruturar, validar e escalar suas ideias.'
  }
]

export function SolutionsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="soluções" className="relative w-full py-20 md:py-32 bg-background border-t border-border">
      <div className="container">
        <div className="mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <h2 className="text-4xl md:text-5xl font-sentient text-foreground">
            Nossas <span className="text-primary">Soluções</span>
          </h2>
          <p className="text-foreground/60 mt-4 text-lg max-w-2xl">
            Tudo que você precisa para transformar suas ideias em sistemas que trabalham por você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              onMouseEnter={() => setHoveredId(solution.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={cn(
                'group relative p-8 border rounded-none transition-all duration-300 ease-out',
                'bg-[#0a0a0a] border-border hover:border-primary/50',
                'hover:bg-[#1a1a1a] hover:shadow-lg hover:shadow-primary/10',
                hoveredId === solution.id ? 'md:scale-105' : ''
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-none border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    <span className="text-primary font-mono text-sm font-bold">{index + 1}</span>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-sentient text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {solution.title}
                </h3>

                <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  {solution.description}
                </p>

                <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Saiba mais</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
