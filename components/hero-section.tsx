"use client"

import type { Dispatch, SetStateAction } from "react"
import { useEffect, useState } from "react"

interface HeroSectionProps {
  setIsAgeModalOpen: Dispatch<SetStateAction<boolean>>
  setIsAdvertiserModalOpen: Dispatch<SetStateAction<boolean>>
  setIsTopOffersModalOpen?: Dispatch<SetStateAction<boolean>>
}

export function HeroSection({ setIsAgeModalOpen, setIsAdvertiserModalOpen }: HeroSectionProps) {
  const [lastUpdated, setLastUpdated] = useState("")
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const date = new Date()
    const month = date.toLocaleString("pt-PT", { month: "long" })
    const year = date.getFullYear()
    setLastUpdated(`${month} ${year}`)
  }, [])

  return (
    <section className="relative h-[280px] md:h-[380px] flex items-center">
      {/* Mobile only: stadium image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: 'url("/dark-stadium-night-football-sports-atmosphere-prem.jpg")' }}
      />
      {/* All screens: black semi-transparent overlay */}
      <div className="absolute inset-0 z-0 bg-black/60" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6">
        {/* Info buttons row */}
        <div className="flex items-center justify-between mb-5 md:mb-6">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-xs font-bold text-white/80 border border-white/25 rounded-sm uppercase tracking-widest">
              Ranking {currentYear}
            </span>
            {lastUpdated && (
              <span className="hidden sm:inline px-2 py-1 text-[10px] text-white/60 border border-white/15 rounded-sm uppercase tracking-wider">
                Atualizado: {lastUpdated}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAgeModalOpen(true)}
              className="px-2 py-1 text-xs font-bold text-white/80 border border-white/25 rounded-sm hover:bg-white/10 transition-colors"
            >
              +18
            </button>
            <button
              onClick={() => setIsAdvertiserModalOpen(true)}
              className="px-2 py-1 text-xs text-white/50 border border-white/15 rounded-sm hover:bg-white/10 transition-colors"
            >
              Publicidade
            </button>
          </div>
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-balance text-white uppercase">
            Melhores Sites de{" "}
            <span className="text-[#e8c040]">Apostas</span>{" "}
            em Portugal
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/65 max-w-2xl mx-auto leading-relaxed">
            Guia independente dos sites de apostas desportivas licenciados pelo SRIJ. Compare bónus, odds e avaliações reais para {currentYear}.
          </p>
        </div>

        {/* Trust strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-6 md:mt-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-xs font-bold text-white/80 uppercase tracking-wider">SRIJ Licenciado</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#e8c040]" />
            <span className="text-xs font-bold text-white/80 uppercase tracking-wider">100% Seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white/60" />
            <span className="text-xs font-bold text-white/80 uppercase tracking-wider">Verificado Mensalmente</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <span className="text-xs font-bold text-white/80 uppercase tracking-wider">Portugal</span>
          </div>
        </div>
      </div>
    </section>
  )
}
