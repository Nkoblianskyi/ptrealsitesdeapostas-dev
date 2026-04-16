"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "As apostas desportivas são legais em Portugal?",
    answer:
      "Sim, são legais desde que realizadas em plataformas licenciadas pelo SRIJ. Todos os sites listados no PTRealSitesDeApostas possuem licença válida e operam em total conformidade com a lei portuguesa.",
  },
  {
    question: "Como escolher o melhor site de apostas em Portugal?",
    answer:
      "Avalie: licença SRIJ ativa, variedade de mercados, qualidade das odds, valor real do bónus e respetivas condições, métodos de pagamento, suporte ao cliente e qualidade da app mobile. O nosso ranking considera todos estes fatores.",
  },
  {
    question: "Quais são os métodos de pagamento aceites?",
    answer:
      "Os principais operadores aceitam MB Way, Multibanco, transferência bancária, Visa, Mastercard, Neteller, Skrill e PayPal. Depósitos são geralmente instantâneos; levantamentos processam em 24–72 horas úteis.",
  },
  {
    question: "Os bónus têm condições especiais?",
    answer:
      "Sim. Todos os bónus estão sujeitos a requisitos de apostas (rollover), normalmente entre 3× e 10× o valor do bónus, com odds mínimas definidas. A nossa equipa resume as condições mais importantes em cada análise.",
  },
  {
    question: "É seguro depositar num site de apostas em Portugal?",
    answer:
      "Nos sites licenciados pelo SRIJ, sim. São obrigados a usar encriptação SSL, manter fundos dos clientes em contas segregadas e submeter-se a auditorias regulares. Nunca utilize plataformas sem licença SRIJ.",
  },
  {
    question: "Posso apostar pelo telemóvel?",
    answer:
      "Sim. Todos os principais operadores portugueses oferecem apps nativas para iOS e Android e versões web mobile otimizadas, incluindo apostas ao vivo e streaming em direto.",
  },
  {
    question: "Qual é a idade mínima para abrir conta?",
    answer:
      "18 anos. Todos os operadores licenciados pelo SRIJ verificam a idade através de documentação de identidade válida durante o processo de registo.",
  },
  {
    question: "Como funciona o sistema de classificação do PTRealSitesDeApostas?",
    answer:
      "Testamos cada plataforma de forma independente: licença SRIJ, registo, depósito/levantamento, mercados, odds, bónus, suporte e mobile. As pontuações são revistas mensalmente.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-14 md:py-20 relative">
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="mb-10 md:mb-14 max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] block mb-3">
            Perguntas Frequentes
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight text-balance">
            Dúvidas <span className="text-[#e8c040]">Frequentes</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-0 border border-white/15">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "border-b border-white/10 last:border-b-0 transition-colors",
                openIndex === index ? "bg-white/10" : "hover:bg-white/5",
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 md:px-7 py-4 md:py-5 flex items-center justify-between text-left gap-4"
              >
                <span
                  className={cn(
                    "font-semibold text-sm md:text-base transition-colors",
                    openIndex === index ? "text-[#e8c040]" : "text-white",
                  )}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 flex-shrink-0 transition-transform duration-300 text-white/50",
                    openIndex === index ? "rotate-180 text-[#e8c040]" : "",
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-72" : "max-h-0",
                )}
              >
                <p className="px-5 md:px-7 pb-5 text-sm text-white/60 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible gambling note */}
        <div className="max-w-3xl mx-auto mt-8">
          <div className="border border-white/15 bg-white/5 px-5 md:px-7 py-5">
            <p className="text-sm text-white/50 leading-relaxed">
              <span className="font-bold text-white/80 uppercase tracking-wide">Jogo Responsável —</span>{" "}
              As apostas devem ser uma forma de entretenimento controlado. Se sentir que o jogo está a afetar a sua vida, procure ajuda em{" "}
              <a
                href="https://jogoresponsavel.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e8c040] hover:underline font-semibold"
              >
                jogoresponsavel.pt
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
