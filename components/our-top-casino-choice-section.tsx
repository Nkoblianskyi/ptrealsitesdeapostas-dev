"use client"

import { bettingSites } from "@/data/bet-sites"
import { BetCard } from "@/components/bet-card"

export function OurTopCasinoChoiceSection() {
  const site = bettingSites[0]
  if (!site) return null

  return (
    <section className="py-14 md:py-20 relative">
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative container mx-auto px-4">
        <div className="mb-8">
          <span className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] block mb-3">
            Escolha dos Editores
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight text-balance">
            A Nossa <span className="text-green-400">Melhor Escolha</span>
          </h2>
          <p className="text-white/60 text-sm md:text-base mt-3 max-w-xl leading-relaxed">
            Após análise independente de todos os critérios, este é o site que recomendamos para apostadores portugueses em {new Date().getFullYear()}.
          </p>
        </div>

        <BetCard site={site} rank={1} />
      </div>
    </section>
  )
}
