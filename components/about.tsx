"use client"

export function About() {
  return (
    <section id="about" className="relative py-24 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-sentient text-foreground mb-6">Sobre a Automa</h2>
          <div className="w-12 h-1 bg-primary mb-8"></div>
        </div>

        <div className="space-y-6 text-foreground/80">
          <p className="text-lg leading-relaxed">
            A Automa é uma agência focada em desenvolvimento de automações, sistemas e soluções digitais para criadores
            e empresas que querem crescer sem complicar.
          </p>
          <p className="text-lg leading-relaxed">
            Enquanto você cria, a gente estrutura. Da estratégia à automação — nós cuidamos de tudo por trás do seu
            negócio. Transformamos processos manuais em fluxos inteligentes, criamos sistemas que trabalham por você e
            desenvolvemos soluções digitais personalizadas.
          </p>
          <p className="text-lg leading-relaxed">
            Com uma abordagem moderna e confiante, ajudamos criadores de conteúdo, academias, lojas, startups e empresas
            a automatizar seus processos e escalar seus negócios.
          </p>
        </div>
      </div>
    </section>
  )
}
