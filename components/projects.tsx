"use client"

import { useState } from "react"

const projects = [
  {
    name: "TechStartup Co.",
    category: "Startup",
    description: "Automação de processos de vendas e CRM integrado",
  },
  {
    name: "Academia FitLife",
    category: "Academia",
    description: "Sistema de gestão de alunos e agendamento automático",
  },
  {
    name: "Loja Online Premium",
    category: "E-commerce",
    description: "Integração de estoque, pagamentos e logística",
  },
  {
    name: "Criador Digital Pro",
    category: "Criador",
    description: "Automação de conteúdo e gestão de comunidade",
  },
  {
    name: "Consultoria Empresarial",
    category: "Empresa",
    description: "Sistema de gestão de projetos e relatórios automáticos",
  },
  {
    name: "Agência de Marketing",
    category: "Agência",
    description: "Automação de campanhas e análise de dados em tempo real",
  },
]

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="relative py-24 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-sentient text-foreground mb-6">Projetos e Parcerias</h2>
          <div className="w-12 h-1 bg-primary mb-8"></div>
          <p className="text-foreground/70 text-lg max-w-2xl">Alguns projetos que ajudamos a tirar do papel</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative p-6 rounded-lg border border-foreground/10 bg-sidebar-primary hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-primary/70 bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
