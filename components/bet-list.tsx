"use client"

import { BetCard } from "@/components/bet-card"
import { bettingSites } from "@/data/bet-sites"

export function BetList() {
  return (
    <section className="py-6 md:py-10">
      <div className="container mx-auto px-4">
        <div className="space-y-3 md:space-y-4">
          {bettingSites.map((site, index) => (
            <BetCard key={site.name} site={site} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
