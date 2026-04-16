"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { bettingSites } from "@/data/bet-sites"

interface TopOffersModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TopOffersModal({ isOpen, onClose }: TopOffersModalProps) {
  const [topSite] = useState(bettingSites[0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderStars = (starsRaw: number) => {
    const step = 0.2
    const rounded = Math.round(starsRaw / step) * step
    const clamped = Math.min(5, Math.max(0, rounded))
    const full = Math.floor(clamped)
    const partial = Math.round((clamped - full) * 10) / 10
    const dim = 18

    return Array.from({ length: 5 }, (_, i) => {
      const fill = i < full ? 1 : i === full && partial > 0 ? partial : 0
      return (
        <span key={i} style={{ position: "relative", display: "inline-block", width: dim, height: dim }}>
          <svg width={dim} height={dim} viewBox="0 0 24 24" style={{ position: "absolute", inset: 0 }}>
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              fill="none"
              stroke="#e8c040"
              strokeWidth="1.5"
              opacity="0.35"
            />
          </svg>
          {fill > 0 && (
            <span style={{ position: "absolute", inset: 0, overflow: "hidden", width: `${fill * 100}%` }}>
              <svg width={dim} height={dim} viewBox="0 0 24 24">
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  fill="#e8c040"
                  stroke="#e8c040"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
          )}
        </span>
      )
    })
  }

  if (!isOpen || !mounted) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4">
      <div className="relative w-full max-w-sm">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-30 p-1.5 bg-white border border-border shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Fechar"
        >
          <X className="h-4 w-4 text-foreground" />
        </button>

        <div className="overflow-hidden bg-white border border-border shadow-2xl">
          {/* Green header */}
          <div className="bg-green-600 px-5 py-4 text-center">
            <p className="text-xs font-bold text-green-100 uppercase tracking-[0.2em] mb-1">Oferta Exclusiva</p>
            <h3 className="text-xl font-black text-white uppercase leading-tight">
              #1 em Portugal {new Date().getFullYear()}
            </h3>
          </div>

          {/* Logo — black bg */}
          <div className="flex justify-center bg-black py-5 px-8">
            <div className="relative w-48 h-16">
              <Image
                src={topSite.logo || "/placeholder.svg"}
                alt={topSite.name}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Rating + stars */}
          <div className="flex flex-col items-center pt-5 pb-3 px-6">
            <div className="flex items-baseline gap-1 mb-1.5">
              <span className="text-4xl font-black text-green-600 leading-none">
                {topSite.rating.toFixed(1)}
              </span>
              <span className="text-sm text-muted-foreground">/10</span>
            </div>
            <div className="flex gap-0.5 mb-1">{renderStars(topSite.stars)}</div>
            <p className="text-[11px] text-muted-foreground">
              {topSite.reviews.toLocaleString("pt-PT")} avaliações
            </p>
          </div>

          {/* Bonus */}
          <div className="mx-5 mb-4 px-4 py-3 bg-gray-50 border border-border">
            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-1 text-center">
              Bónus de Boas-Vindas
            </p>
            <p className="text-xl font-black text-green-800 text-center leading-snug">
              {topSite.bonus}
            </p>
          </div>

          {/* CTA */}
          <div className="px-5 pb-5">
            <Button
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-5 text-base shadow-md transition-colors"
              asChild
            >
              <Link href={topSite.url} target="_blank" rel="noopener noreferrer sponsored">
                OBTER BÓNUS AGORA
              </Link>
            </Button>
            <p className="text-[10px] text-center text-muted-foreground mt-3 leading-relaxed">
              +18 | Aplicam-se T&C | Jogue com Responsabilidade
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
