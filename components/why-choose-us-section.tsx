export function WhyChooseUsSection() {
  const stats = [
    { value: "60.000+", label: "Apostadores por mês" },
    { value: "100%", label: "Sites com licença SRIJ" },
    { value: "7+", label: "Plataformas avaliadas" },
    { value: "Mensal", label: "Frequência de atualização" },
  ]

  const criteria = [
    {
      number: "01",
      title: "Licenciamento SRIJ",
      text: "Apenas plataformas com licença ativa emitida pelo Serviço de Regulação e Inspeção de Jogos (SRIJ) são incluídas nos nossos rankings.",
    },
    {
      number: "02",
      title: "Análise Independente",
      text: "As avaliações são feitas pela nossa equipa com base em testes reais. Nenhum operador pode pagar para melhorar a sua classificação.",
    },
    {
      number: "03",
      title: "Odds e Mercados",
      text: "Testamos a competitividade das cotações, a profundidade de mercados e a cobertura de desportos relevantes para o apostador português.",
    },
    {
      number: "04",
      title: "Bónus Verificados",
      text: "Cada promoção é testada e confirmada antes de ser publicada. Apresentamos os termos de forma clara e sem letra pequena escondida.",
    },
    {
      number: "05",
      title: "Segurança e Pagamentos",
      text: "Avaliamos a rapidez dos levantamentos, os métodos aceites (MB Way, Multibanco, cartão) e os protocolos de segurança de cada plataforma.",
    },
    {
      number: "06",
      title: "Experiência Mobile",
      text: "Testamos as apps nativas e a versão web mobile para garantir uma experiência fluida em smartphone e tablet.",
    },
  ]

  return (
    <section className="py-14 md:py-20 relative">
      {/* Semi-transparent background panel */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-10 md:mb-14">
          <span className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] block mb-3">
            Porquê PTRealSitesDeApostas
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight text-balance">
            Critérios de{" "}
            <span className="text-[#e8c040]">Avaliação</span>
          </h2>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 mb-12 md:mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-black/40 px-6 py-5 text-center">
              <div className="text-2xl md:text-3xl font-black text-[#e8c040] mb-1">{stat.value}</div>
              <div className="text-xs text-white/60 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Criteria grid — numbered rows, no icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {criteria.map((item) => (
            <div key={item.number} className="bg-black/40 p-6 md:p-8 hover:bg-black/50 transition-colors">
              <div className="text-4xl font-black text-white/10 mb-4 leading-none">{item.number}</div>
              <h3 className="text-base font-bold text-white mb-2 uppercase tracking-wide">{item.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
