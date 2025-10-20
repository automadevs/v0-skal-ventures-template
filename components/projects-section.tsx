'use client'

import { useState } from 'react'

const projects = [
  {
    id: 1,
    name: 'Academia FitPro',
    type: 'Academia de Fitness',
    description: 'Sistema de agendamento automático, gestão de membros e integração com pagamentos.',
    icon: '💪'
  },
  {
    id: 2,
    name: 'E-commerce CreativeShop',
    type: 'Loja Online',
    description: 'Plataforma de vendas com automação de estoque, cupons inteligentes e análise em tempo real.',
    icon: '🛍️'
  },
  {
    id: 3,
    name: 'Marketing Automation Suite',
    type: 'Agência de Marketing',
    description: 'Sistema de automação de campanhas, segmentação de leads e relatórios preditivos.',
    icon: '📊'
  },
  {
    id: 4,
    name: 'SaaS Produtividade',
    type: 'Startup',
    description: 'Aplicação web colaborativa com sincronização em tempo real e dashboards customizáveis.',
    icon: '🚀'
  },
  {
    id: 5,
    name: 'Gestão de Conteúdo',
    type: 'Criador Digital',
    description: 'Plataforma centralizada para gerenciar calendário, publicações e análises de audiência.',
    icon: '✨'
  },
  {
    id: 6,
    name: 'Integração ERP',
    type: 'Empresa B2B',
    description: 'Conectamos múltiplos sistemas de gestão com automação de fluxos financeiros e operacionais.',
    icon: '⚙️'
  }
]

export function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projetos" className="relative w-full py-20 md:py-32 bg-background border-t border-border">
      <div className="container">
        <div className="mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <h2 className="text-4xl md:text-5xl font-sentient text-foreground mb-2">
            Alguns projetos que ajudamos a tirar do <span className="text-primary">papel</span>
          </h2>
          <p className="text-foreground/60 mt-4 text-lg">
            De criadores a grandes empresas, transformamos ideias em realidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-[#0a0a0a] border border-border rounded-none overflow-hidden transition-all duration-300 ease-out hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="p-8 relative z-10">
                <div className="text-5xl mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {project.icon}
                </div>

                <h3 className="text-xl font-sentient text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                  {project.name}
                </h3>

                <p className="text-sm text-primary/70 font-mono mb-4">
                  {project.type}
                </p>

                <p className="text-foreground/70 text-sm leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
