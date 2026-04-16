"use client"

import { useCookieConsent } from "@/context/cookie-consent-context"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"
import Link from "next/link"

export function CookieBanner() {
  const { showBanner, acceptAll, declineAll } = useCookieConsent()

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 md:p-5">
      <div className="container mx-auto max-w-5xl">
        <div className="rounded-xl bg-white border border-border shadow-2xl p-4 md:p-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-md gradient-navy flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-base font-bold text-foreground">Política de Cookies</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Utilizamos cookies para melhorar a sua experiência no PTRealSitesDeApostas e analisar o tráfego do site. Ao continuar, concorda com a nossa{" "}
                <Link href="/cookie-policy" className="text-primary hover:underline font-medium">
                  Política de Cookies
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto md:min-w-[240px]">
              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-secondary font-semibold flex-1"
                onClick={declineAll}
              >
                Recusar
              </Button>
              <Button
                className="gradient-navy text-white font-bold hover:opacity-90 transition-opacity flex-1"
                onClick={acceptAll}
              >
                Aceitar Todos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
