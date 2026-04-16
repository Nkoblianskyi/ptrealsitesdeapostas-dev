export function BettingInfoSection() {
  const metrics = [
    { label: "Segurança e Licenciamento SRIJ", value: 100 },
    { label: "Variedade de Mercados Desportivos", value: 95 },
    { label: "Qualidade e Competitividade das Odds", value: 90 },
    { label: "Bónus e Promoções para Novos Clientes", value: 88 },
    { label: "Experiência Mobile e App", value: 93 },
  ]

  const facts = [
    {
      title: "Odds Competitivas",
      text: "Comparamos as cotações entre plataformas para identificar quem oferece maior valor ao apostador português.",
    },
    {
      title: "Mercados Abrangentes",
      text: "Futebol, ténis, basquetebol, F1, e-sports e muito mais — avaliamos a profundidade de cada operador.",
    },
    {
      title: "Foco em Portugal",
      text: "Especialistas no mercado luso, com conhecimento atualizado da regulação SRIJ e das preferências locais.",
    },
    {
      title: "Dados Reais",
      text: "Classificações baseadas em testes independentes e no feedback genuíno da nossa comunidade de apostadores.",
    },
  ]

  return (
    <section className="py-14 md:py-20 relative">
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left — methodology */}
          <div>
            <span className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] block mb-3">
              Metodologia
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight mb-6 text-balance">
              Como <span className="text-green-400">Avaliamos</span>
            </h2>
            <p className="text-white/60 mb-8 text-sm md:text-base leading-relaxed">
              A nossa equipa testa pessoalmente cada plataforma com base em critérios objetivos e verificáveis. Apenas os sites que cumprem todos os requisitos regulatórios e de qualidade chegam ao nosso ranking.
            </p>

            <div className="space-y-5">
              {metrics.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-semibold text-white/80">{item.label}</span>
                    <span className="text-sm font-black text-green-400">{item.value}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-none overflow-hidden">
                    <div
                      className="h-full bg-green-500 rounded-none"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — fact grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {facts.map((fact, i) => (
              <div
                key={fact.title}
                className={`p-6 md:p-7 bg-black/40 ${i % 2 === 1 ? "md:mt-6" : ""}`}
              >
                <h3 className="text-sm font-black text-white uppercase tracking-wide mb-2">{fact.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{fact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
