import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0d1621" }}>
      <SiteHeader />

      {/* Back nav */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-14 md:py-20 border-b border-white/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] block mb-4">Sobre Nós</span>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight text-balance mb-6">
            O Guia Independente de <span className="text-green-400">Apostas Desportivas</span> em Portugal
          </h1>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
            O PTRealSitesDeApostas é operado pela SHOPCANARY s.r.o. e tem como missão ajudar os apostadores portugueses a escolher plataformas seguras, licenciadas e com as melhores condições disponíveis no mercado.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 max-w-4xl pb-20">

        {/* Mission */}
        <section className="py-14 border-b border-white/10">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase mb-6">A Nossa Missão</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                No PTRealSitesDeApostas, acreditamos que todos os apostadores merecem acesso a informação transparente, imparcial e atualizada sobre os sites de apostas disponíveis em Portugal.
              </p>
              <p className="text-white/60 leading-relaxed mb-4">
                A nossa equipa de especialistas dedica-se a testar e avaliar cada plataforma de forma rigorosa e independente, garantindo que apenas os melhores sites chegam à nossa lista de recomendados.
              </p>
              <p className="text-white/60 leading-relaxed">
                Somos operados pela SHOPCANARY s.r.o., com sede em Brno, República Checa, e atuamos exclusivamente como comparador independente — sem nunca aceitar pagamentos para alterar as nossas classificações.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
              {[
                { label: "Licença SRIJ", value: "100%" },
                { label: "Utilizadores/Mês", value: "60K+" },
                { label: "Precisão", value: "99%" },
                { label: "Anos de Análises", value: "5+" },
              ].map((stat) => (
                <div key={stat.label} className="p-6 bg-black/40 text-center">
                  <p className="text-3xl font-black text-green-400 mb-1">{stat.value}</p>
                  <p className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-14 border-b border-white/10">
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase mb-10">Os Nossos Valores</h2>
          <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              {
                title: "Transparência Total",
                description: "Divulgamos claramente como geramos receita (comissões de afiliados) e os critérios objetivos de todas as nossas avaliações.",
              },
              {
                title: "Independência Editorial",
                description: "As nossas classificações são baseadas exclusivamente em testes reais e dados objetivos. Nenhum parceiro paga para melhorar a sua posição.",
              },
              {
                title: "Jogo Responsável",
                description: "Promovemos ativamente o jogo responsável e fornecemos recursos de apoio a todos os utilizadores que necessitem de ajuda.",
              },
            ].map((value) => (
              <div key={value.title} className="p-6 md:p-8 bg-black/40">
                <h3 className="text-sm font-black text-white uppercase tracking-wide mb-3">{value.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How We Work */}
        <section className="py-14 border-b border-white/10">
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase mb-10">Como Avaliamos os Sites</h2>
          <div className="space-y-0 border border-white/10">
            {[
              "Verificamos a licença SRIJ ativa e a legitimidade do operador",
              "Testamos pessoalmente o processo de registo, verificação de identidade, depósitos e levantamentos",
              "Avaliamos a profundidade e variedade dos mercados desportivos disponíveis",
              "Analisamos o valor real dos bónus, promoções e requisitos de apostas associados",
              "Testamos a qualidade do suporte ao cliente e os tempos de resposta",
              "Avaliamos a experiência mobile — site responsivo e apps nativas",
              "Atualizamos regularmente todas as avaliações para refletir mudanças nas plataformas",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-5 p-5 border-b border-white/10 last:border-b-0 bg-black/20">
                <span className="text-green-400 font-black text-sm w-6 shrink-0 pt-0.5">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-white/70 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Company Info */}
        <section className="py-14 border-b border-white/10">
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase mb-8">Informação da Empresa</h2>
          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            <div className="p-6 md:p-8 bg-black/40">
              <p className="text-xs font-bold text-white/40 uppercase tracking-wider mb-3">Operador</p>
              <p className="text-white font-bold mb-1">SHOPCANARY s.r.o.</p>
              <p className="text-white/60 text-sm">Lidická 700/19, Veveří</p>
              <p className="text-white/60 text-sm">602 00 Brno, Czech Republic</p>
            </div>
            <div className="p-6 md:p-8 bg-black/40">
              <p className="text-xs font-bold text-white/40 uppercase tracking-wider mb-3">Contacto</p>
              <p className="text-white font-bold mb-1">ptrealsitesdeapostas.com</p>
              <p className="text-white/60 text-sm">info@ptrealsitesdeapostas.com</p>
            </div>
          </div>
        </section>

        {/* Back */}
        <div className="pt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors font-semibold text-sm uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para a Página Inicial
          </Link>
        </div>

      </main>

      <SiteFooter />
    </div>
  )
}
