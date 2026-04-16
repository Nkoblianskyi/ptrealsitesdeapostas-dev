import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. Introdução e Responsável pelo Tratamento",
      content: `O PTRealSitesDeApostas (ptrealsitesdeapostas.com) é operado pela SHOPCANARY s.r.o., com sede em Lidická 700/19, Veveří, 602 00 Brno, República Checa.\n\nEstamos empenhados em proteger a sua privacidade e os seus dados pessoais. Esta Política de Privacidade explica de forma transparente como recolhemos, utilizamos, armazenamos e protegemos as suas informações quando visita o nosso website.\n\nAo utilizar o PTRealSitesDeApostas, aceita as práticas descritas nesta política.`,
    },
    {
      title: "2. Dados que Recolhemos",
      content: `Dados que nos fornece diretamente:\n— Endereço de email (se entrar em contacto connosco)\n— Mensagens e comunicações que nos envia\n— Feedback e respostas a inquéritos opcionais\n\nDados recolhidos automaticamente:\n— Endereço IP e localização geográfica aproximada\n— Tipo de navegador, sistema operativo e dispositivo utilizado\n— Páginas visitadas, duração da visita e percurso de navegação\n— Dados de cookies e tecnologias similares de rastreamento`,
    },
    {
      title: "3. Finalidade do Tratamento dos Dados",
      content: `Utilizamos os dados recolhidos para:\n\n— Garantir o funcionamento correto e a melhoria contínua do website\n— Personalizar o conteúdo e as recomendações apresentadas\n— Analisar o desempenho do site e o comportamento dos utilizadores\n— Responder a questões e comunicações que nos envie\n— Rastrear cliques em links de afiliados para fins de comissionamento\n— Prevenir fraudes, abusos e garantir a segurança da plataforma\n— Cumprir obrigações legais e regulamentares aplicáveis`,
    },
    {
      title: "4. Partilha de Dados com Terceiros",
      content: `Não vendemos nem alugamos os seus dados pessoais a terceiros. Podemos partilhar dados nas seguintes circunstâncias limitadas:\n\n— Sites de apostas parceiros — quando clica num link de afiliado, o site de destino poderá receber informação sobre a sua visita\n— Prestadores de serviços tecnológicos — empresas que nos apoiam na operação do website (alojamento, análise de dados), sob acordos de confidencialidade\n— Autoridades legais — quando exigido por lei, decisão judicial ou autoridade competente\n— Proteção de direitos — para proteger os nossos direitos legítimos ou a segurança dos utilizadores`,
    },
    {
      title: "5. Os Seus Direitos ao Abrigo do RGPD",
      content: `Como titular de dados, tem os seguintes direitos garantidos pelo Regulamento Geral de Proteção de Dados (RGPD):\n\n— Direito de Acesso — solicitar uma cópia dos seus dados pessoais que tratamos\n— Direito de Retificação — corrigir dados incorretos ou incompletos\n— Direito ao Apagamento ("direito a ser esquecido") — solicitar a eliminação dos seus dados\n— Direito à Limitação do Tratamento — restringir o modo como tratamos os seus dados\n— Direito à Portabilidade — receber os seus dados num formato estruturado e legível por máquina\n— Direito de Oposição — opor-se ao tratamento dos seus dados para determinadas finalidades\n\nPara exercer qualquer destes direitos, contacte-nos através do email indicado abaixo.`,
    },
    {
      title: "6. Segurança, Retenção e Contacto",
      content: `Segurança dos Dados:\nImplementamos medidas técnicas e organizacionais adequadas para proteger os seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos encriptação SSL em todas as comunicações do website.\n\nPeríodo de Retenção:\nOs dados são conservados apenas pelo tempo necessário para as finalidades descritas nesta política, ou enquanto exigido por lei.\n\nAlterações à Política:\nPodemos atualizar esta política periodicamente. A data da última atualização é indicada no início do documento. Recomendamos a revisão regular desta página.\n\nContacto do Responsável pelo Tratamento:\nSHOPCANARY s.r.o.\nLidická 700/19, Veveří, 602 00 Brno, Czech Republic\nEmail: privacidade@ptrealsitesdeapostas.com`,
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
            Política de <span className="text-green-400">Privacidade</span>
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
