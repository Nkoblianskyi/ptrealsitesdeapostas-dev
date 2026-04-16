import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function CookiePolicyPage() {
  const sections = [
    {
      title: "1. O Que São Cookies?",
      content: `Cookies são pequenos ficheiros de texto armazenados no seu dispositivo (computador, smartphone ou tablet) quando visita um website. São amplamente utilizados para garantir o funcionamento adequado dos sites, melhorar a experiência do utilizador e fornecer informações analíticas aos proprietários.

Os cookies podem ser "persistentes" — permanecem no dispositivo após fechar o navegador — ou "de sessão" — eliminados automaticamente quando encerra o navegador.`,
    },
    {
      title: "2. Como Utilizamos Cookies",
      content: `O PTRealSitesDeApostas utiliza cookies para os seguintes fins:\n\n— Guardar as suas preferências de navegação e configurações\n— Analisar o tráfego e o comportamento dos utilizadores no site\n— Personalizar o conteúdo apresentado com base nos seus interesses\n— Melhorar o desempenho e a funcionalidade do website\n— Rastrear cliques em links de afiliados para sites de apostas parceiros\n— Medir a eficácia das nossas campanhas de comunicação`,
    },
    {
      title: "3. Tipos de Cookies Utilizados",
      content: `Cookies Estritamente Necessários\nEssenciais para o funcionamento básico do website. Sem eles, não é possível prestar os serviços solicitados.\n\nCookies de Desempenho e Análise\nRecolhem informação anónima sobre como os visitantes utilizam o site, permitindo-nos melhorar continuamente a experiência oferecida.\n\nCookies de Funcionalidade\nPermitem ao website recordar as suas preferências (idioma, localização, configurações) para uma experiência personalizada.\n\nCookies de Marketing e Afiliados\nUtilizados para registar cliques em links de parceiros e medir a eficácia das campanhas publicitárias associadas.`,
    },
    {
      title: "4. Cookies de Terceiros",
      content: `Para além dos nossos cookies próprios, utilizamos serviços de terceiros que também podem instalar cookies no seu dispositivo:\n\n— Google Analytics — análise de tráfego e comportamento no site\n— Redes de afiliados — rastreamento de cliques e conversões em sites parceiros\n— Plataformas de publicidade — exibição de anúncios relevantes ao seu perfil`,
    },
    {
      title: "5. Cookies de Afiliados",
      content: `Como comparador independente de sites de apostas, utilizamos cookies de afiliados para registar quando clica num link para um site parceiro. Estes cookies permitem-nos receber uma comissão caso se registe numa plataforma através do nosso website.\n\nEste mecanismo não altera de forma alguma o preço dos serviços que contrata, nem a sua experiência no site de apostas escolhido. A nossa independência editorial não é afetada por estas relações comerciais.`,
    },
    {
      title: "6. Como Gerir e Desativar Cookies",
      content: `Pode controlar, limitar ou eliminar cookies a qualquer momento através das definições do seu navegador:\n\n— Google Chrome: Definições › Privacidade e segurança › Cookies e outros dados de sites\n— Mozilla Firefox: Opções › Privacidade e Segurança › Cookies e dados de sites\n— Safari: Preferências › Privacidade › Gerir dados de websites\n— Microsoft Edge: Definições › Cookies e permissões do site\n\nAtenção: desativar determinados cookies pode limitar algumas funcionalidades do PTRealSitesDeApostas.\n\nContacto para questões sobre cookies: cookies@ptrealsitesdeapostas.com`,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d1621" }}>
      <SiteHeader />

      {/* Back nav */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-12 md:py-16 max-w-3xl">
        {/* Header */}
        <div className="mb-12 pb-8 border-b border-white/10">
          <p className="text-xs font-bold text-white/30 uppercase tracking-[0.25em] mb-4">Legal — PTRealSitesDeApostas</p>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-none mb-4 text-balance">
            Política de <span className="text-green-400">Cookies</span>
          </h1>
          <p className="text-sm text-white/35">
            SHOPCANARY s.r.o. | Lidická 700/19, Veveří, 602 00 Brno, Czech Republic
            <br />
            Última atualização: {new Date().toLocaleDateString("pt-PT")}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-0 divide-y divide-white/10">
          {sections.map((section) => (
            <div key={section.title} className="py-8">
              <h2 className="text-xs font-black text-green-400 uppercase tracking-[0.2em] mb-3">
                {section.title}
              </h2>
              <div className="text-sm text-white/60 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Footer link */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider"
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
