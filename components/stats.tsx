export const Stats = () => {
  return (
    <section className="w-full py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Processos Automatizados */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">500+</div>
            <div className="text-sm md:text-base text-muted-foreground">Processos Automatizados</div>
          </div>

          {/* Clientes Satisfeitos */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">98%</div>
            <div className="text-sm md:text-base text-muted-foreground">Clientes Satisfeitos</div>
          </div>

          {/* Redução de Tempo */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">70%</div>
            <div className="text-sm md:text-base text-muted-foreground">Redução de Tempo</div>
          </div>
        </div>
      </div>
    </section>
  )
}
