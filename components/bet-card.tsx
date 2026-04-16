"use client"

import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { BettingSite } from "@/data/bet-sites"

interface BetCardProps {
  site: BettingSite
  rank: number
}

export function BetCard({ site, rank }: BetCardProps) {
  const isTop = rank === 1

  const formatReviews = (n: number) =>
    n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

  const getRankLabel = (r: number) => {
    if (r === 1) return "MELHOR ESCOLHA"
    if (r === 2) return "RECOMENDADO"
    if (r === 3) return "POPULAR"
    return "VERIFICADO"
  }

  // stars: value 0–5, step 0.2
  // renders 5 gold stars with partial fill via SVG clip
  const renderStars = (value: number, sizePx = 16) => {
    const step = 0.2
    const clamped = Math.min(5, Math.max(0, Math.round(value / step) * step))
    const full = Math.floor(clamped)
    const partial = parseFloat((clamped - full).toFixed(1)) // 0 | 0.2 | 0.4 | 0.6 | 0.8

    return Array.from({ length: 5 }, (_, i) => {
      const isFull = i < full
      const isPartial = i === full && partial > 0
      const fillPct = isFull ? 100 : isPartial ? partial * 100 : 0

      return (
        <span
          key={i}
          style={{ position: "relative", display: "inline-block", width: sizePx, height: sizePx, flexShrink: 0 }}
        >
          {/* Background (empty) star */}
          <svg width={sizePx} height={sizePx} viewBox="0 0 24 24" style={{ position: "absolute", inset: 0 }}>
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              fill="none"
              stroke="#d1a800"
              strokeWidth="1.5"
            />
          </svg>
          {/* Foreground (filled) star — clipped to fillPct width */}
          {fillPct > 0 && (
            <span
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                overflow: "hidden",
                width: `${fillPct}%`,
                height: "100%",
              }}
            >
              <svg width={sizePx} height={sizePx} viewBox="0 0 24 24">
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

  return (
    <div
      className={cn(
        "group relative overflow-hidden transition-all duration-200",
        isTop
          ? "bg-white border-2 border-green-500 shadow-lg"
          : "bg-white border border-border hover:border-gray-400 shadow-sm",
      )}
    >
      {/* Rank header bar */}
      <div className="flex items-stretch">
        <div
          className={cn(
            "px-3 py-1.5 font-black text-[11px] tracking-wider whitespace-nowrap",
            isTop
              ? "bg-green-600 text-white"
              : rank <= 3
                ? "bg-[#0d1621] text-white"
                : "bg-gray-200 text-gray-700",
          )}
        >
          #{rank} {getRankLabel(rank)}
        </div>
      </div>

      <Link href={site.url} target="_blank" rel="noopener noreferrer sponsored" className="block">

        {/* ── DESKTOP (lg+) ── */}
        <div className="hidden lg:grid lg:grid-cols-12 items-stretch">

          {/* Logo — black bg */}
          <div className="col-span-2 flex items-center justify-center bg-black px-4 py-5">
            <div className="relative w-full h-12">
              <Image
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Bonus */}
          <div className="col-span-5 flex flex-col items-center justify-center text-center px-6 py-4 border-r border-border">
            <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">
              Bónus de Boas-Vindas
            </span>
            <p className={cn("text-xl font-black leading-snug", isTop ? "text-green-800" : "text-gray-900")}>
              {site.bonus}
            </p>
          </div>

          {/* Rating */}
          <div className="col-span-3 flex flex-col items-center justify-center text-center px-4 py-4 border-r border-border">
            <div className="flex items-baseline gap-1 mb-1">
              <span className={cn("text-4xl font-black leading-none", isTop ? "text-green-600" : "text-[#0d1621]")}>
                {site.rating.toFixed(1)}
              </span>
              <span className="text-sm text-gray-400">/10</span>
            </div>
            <div className="flex gap-0.5 mb-1">{renderStars(site.stars, 16)}</div>
            <p className="text-[11px] text-gray-400">
              {formatReviews(site.reviews)} avaliações
            </p>
          </div>

          {/* CTA */}
          <div className="col-span-2 flex items-center justify-center px-4 py-4">
            <Button
              className={cn(
                "w-full font-bold transition-all group-hover:scale-105 rounded-none",
                isTop
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-[#0d1621] hover:bg-[#1a2a3a] text-white",
              )}
            >
              Obter
              <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
            </Button>
          </div>
        </div>

        {/* ── TABLET (md–lg) ── */}
        <div className="hidden md:grid lg:hidden grid-cols-12 items-stretch">

          <div className="col-span-2 flex items-center justify-center bg-black px-3 py-4">
            <div className="relative w-full h-10">
              <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
            </div>
          </div>

          <div className="col-span-5 flex flex-col items-center justify-center text-center px-4 py-3 border-r border-border">
            <span className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Bónus</span>
            <p className={cn("text-base font-black leading-snug", isTop ? "text-green-800" : "text-gray-900")}>
              {site.bonus}
            </p>
          </div>

          <div className="col-span-3 flex flex-col items-center justify-center text-center px-3 py-3 border-r border-border">
            <div className="flex items-baseline gap-0.5 mb-1">
              <span className={cn("text-2xl font-black", isTop ? "text-green-600" : "text-[#0d1621]")}>
                {site.rating.toFixed(1)}
              </span>
              <span className="text-xs text-gray-400">/10</span>
            </div>
            <div className="flex gap-0.5 mb-1">{renderStars(site.stars, 12)}</div>
            <p className="text-[10px] text-gray-400">{formatReviews(site.reviews)} aval.</p>
          </div>

          <div className="col-span-2 flex items-center justify-center px-3 py-3">
            <Button
              size="sm"
              className={cn(
                "w-full font-bold text-xs rounded-none",
                isTop ? "bg-green-600 hover:bg-green-700 text-white" : "bg-[#0d1621] hover:bg-[#1a2a3a] text-white",
              )}
            >
              Obter
              <ExternalLink className="ml-1 w-3 h-3" />
            </Button>
          </div>
        </div>

        {/* ── MOBILE ── */}
        <div className="md:hidden">
          <div className="flex items-stretch ">
            <div className="w-37 shrink-0 flex items-center justify-center bg-black p-3">
              <div className="relative w-full h-20">
                <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
              </div>
            </div>
            <div className="flex-1  flex flex-col items-center  px-3 py-2 gap-0.5">
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Bónus</span>
              <p className={cn("text-base text-center font-black leading-tight", isTop ? "text-green-800" : "text-gray-900")}>
                {site.bonus}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between px-3 py-2 border-t border-border">
            <div className="flex items-center gap-2">
              <div className="flex items-baseline gap-0.5">
                <span className={cn("text-xl font-black", isTop ? "text-green-600" : "text-[#0d1621]")}>
                  {site.rating.toFixed(1)}
                </span>
                <span className="text-[10px] text-gray-400">/10</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="flex gap-0.5">{renderStars(site.stars, 12)}</div>
                <span className="text-[8px] text-gray-400">{formatReviews(site.reviews)} aval.</span>
              </div>
            </div>
            <Button
              size="sm"
              className={cn(
                "font-bold text-xs rounded-none",
                isTop ? "bg-green-600 hover:bg-green-700 text-white" : "bg-[#0d1621] hover:bg-[#1a2a3a] text-white",
              )}
            >
              Obter <ExternalLink className="ml-1 w-3 h-3" />
            </Button>
          </div>
        </div>
      </Link>

      {/* Disclaimer bar */}
      <div className="px-4 py-1.5 border-t border-border bg-gray-50">
        <p className="text-[10px] text-center text-gray-400">
          +18 | Jogo Responsável |{" "}
          <a
            href="https://jogoresponsavel.pt/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="underline hover:text-gray-600"
          >
            jogoresponsavel.pt
          </a>
        </p>
      </div>
    </div>
  )
}
