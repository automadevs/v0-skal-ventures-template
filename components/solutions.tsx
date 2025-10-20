"use client"

import { useState } from "react"

const solutions = [
  {
    title: "Automação de Processos",
    description:
      "Transforme tarefas repetitivas em fluxos automáticos. Economize tempo e reduza erros com automações inteligentes.",
    icon: "⚙️",
  },
  {
    title: "Criação de Sites e Sistemas",
    description:
      "Desenvolvemos plataformas personalizadas que crescem com seu negócio. Desde landing pages até sistemas complexos.",
    icon: "💻",
  },
  {
    title: "Integrações Inteligentes",
    description:
      "Conecte suas ferramentas favoritas. Sincronize dados e crie fluxos de trabalho sem fricção entre plataformas.",
    icon: "🔗",
  },
  {
    title: "Coprodução com Criadores",
    description:
      "Parceria estratégica para transformar sua visão em realidade. Trabalhamos juntos do conceito ao lançamento.",
    icon: "🤝",
  },
]

export function Solutions() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="solutions" className="relative py-24 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-sentient text-foreground mb-6">Soluções</h2>
          <div className="w-12 h-1 bg-primary mb-8"></div>
          <p className="text-foreground/70 text-lg max-w-2xl">
            Oferecemos soluções completas para transformar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative p-8 rounded-lg border border-foreground/10 bg-sidebar-primary hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
