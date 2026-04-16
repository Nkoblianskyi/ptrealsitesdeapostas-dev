import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "PTRealSitesDeApostas | Melhores Sites de Apostas Licenciados em Portugal 2025",
  description:
    "Guia independente dos melhores sites de apostas desportivas em Portugal. Comparação rigorosa de plataformas licenciadas pelo SRIJ. Bónus verificados, análises detalhadas e apostas seguras.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "PTRealSitesDeApostas | Top Sites de Apostas em Portugal 2025",
    description: "Descubra os melhores sites de apostas licenciados em Portugal. Comparações independentes, bónus e guias completos.",
    siteName: "PTRealSitesDeApostas",
    locale: "pt_PT",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT" className={`${inter.variable} ${playfair.variable} antialiased`} style={{ background: "#0d1621" }}>
      <head>
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#f5f7fa" />
        <meta name="author" content="PTRealSitesDeApostas" />
        <meta property="og:site_name" content="PTRealSitesDeApostas - Comparador de Apostas" />
        <meta name="classification" content="Comparison Website" />
        <meta name="category" content="Sports Betting Comparison" />
        <meta
          name="disclaimer"
          content="Site de comparação independente. Não somos um site de apostas. Links para sites licenciados pelo SRIJ."
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
