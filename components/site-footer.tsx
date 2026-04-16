import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="relative bg-black/80 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pb-12 border-b border-white/10 mb-12">

          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <span className="text-base font-black text-white uppercase tracking-tight">
                PTREAL<span className="text-green-400">SITES</span>DEAPOSTAS
              </span>
            </Link>
            <p className="text-white/50 text-sm max-w-md leading-relaxed mb-5">
              Guia independente dos melhores sites de apostas desportivas licenciados pelo SRIJ em Portugal.
              Comparações rigorosas, bónus verificados e análises detalhadas para apostadores portugueses.
            </p>
            <div className="text-xs text-white/35 leading-loose">
              <p className="font-bold text-white/60 mb-1 uppercase tracking-wider">SHOPCANARY s.r.o.</p>
              <p>Lidická 700/19, Veveří</p>
              <p>602 00 Brno, Czech Republic</p>
              <p className="mt-1">info@ptrealsitesdeapostas.com</p>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold mb-5 text-white/30 uppercase tracking-[0.25em]">Navegação</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Página Inicial" },
                { href: "/#betting-sites", label: "Sites de Apostas" },
                { href: "/about", label: "Sobre Nós" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold mb-5 text-white/30 uppercase tracking-[0.25em]">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-sm text-white/50 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-sm text-white/50 hover:text-white transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <a
                  href="https://jogoresponsavel.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  Jogo Responsável
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners */}
        <div className="pb-12 border-b border-white/10 mb-12">
          <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.25em] text-center mb-6">
            Parceiros de Jogo Responsável
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {[
              { href: "https://www.srij.turismodeportugal.pt/", src: "/srij-new.svg", alt: "SRIJ", light: false },
              { href: "https://www.icad.pt/", src: "/icad.png", alt: "SICAD", light: true },
              { href: "https://www.gamcare.org.uk/", src: "/gamecare-new.svg", alt: "GamCare", light: true },
              { href: "https://www.gambleaware.org/", src: "/gamble-aware.webp", alt: "GambleAware", light: true },
              { href: "https://www.jogoresponsavel.pt/", src: "/jogo2.png", alt: "Jogo Responsável", light: false },
            ].map((p) => (
              <Link
                key={p.alt}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 border transition-colors ${p.light ? "bg-white border-white/30 hover:border-white" : "bg-white/5 border-white/10 hover:border-white/25"}`}
              >
                <div className="relative w-[80px] h-[38px]">
                  <Image src={p.src || "/placeholder.svg"} alt={p.alt} fill className="object-contain" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="px-3 py-1 border border-white/20 text-white font-black text-sm">18+</span>
            <span className="text-sm text-white/50">Apenas para maiores de 18 anos</span>
          </div>

          <p className="text-xs text-white/30 max-w-3xl mx-auto leading-relaxed">
            PTRealSitesDeApostas é um site de comparação independente operado pela SHOPCANARY s.r.o. Não somos um site de apostas.
            Todo o conteúdo é destinado a maiores de 18 anos residentes em Portugal. Os links externos direcionam para sites licenciados pelo SRIJ.
          </p>

          <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
            O jogo pode causar dependência. Jogue com responsabilidade.
          </p>

          <p className="text-xs text-white/20 pt-4 border-t border-white/10">
            © {new Date().getFullYear()} PTRealSitesDeApostas. Todos os direitos reservados. SHOPCANARY s.r.o.
          </p>
        </div>

      </div>
    </footer>
  )
}
