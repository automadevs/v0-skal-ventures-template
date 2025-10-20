'use client'

export function AboutSection() {
  return (
    <section id="sobre" className="relative w-full py-20 md:py-32 bg-background border-t border-border">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <h2 className="text-4xl md:text-5xl font-sentient text-foreground mb-6">
              Sobre a <span className="text-primary">Automa</span>
            </h2>
          </div>

          <div className="space-y-6 text-foreground/80 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <p className="text-lg md:text-xl leading-relaxed">
              A Automa é uma agência focada em transformar ideias em realidade através de <span className="text-primary font-medium">automações inteligentes, sistemas robustos e soluções digitais</span> feitas sob medida.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              Trabalhamos com criadores, empreendedores e empresas que querem crescer sem complicar. Nosso foco é simples: <span className="text-primary font-medium">enquanto você cria e inovade o negócio, nós cuidamos de toda a estrutura por trás</span> — desde a estratégia até a implementação.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              Acreditamos que a tecnologia deve ser um aliado, não um problema. Por isso, nossos projetos são pensados para serem escaláveis, eficientes e alinhados com seus objetivos reais.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
