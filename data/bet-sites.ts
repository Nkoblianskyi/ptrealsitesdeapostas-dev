export interface BettingSite {
  id: number
  name: string
  logo: string
  bonus: string
  url: string
  rating: number
  stars: number
  reviews: number
  badges: string[]
  terms: string
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}

export const bettingSites: BettingSite[] = [

  {
    id: 1,
    name: "Betano",
    logo: "/betano.svg",
    bonus: "10€ Apostas + 50 Rodadas Grátis no Registo",
    url: "https://www.betano.pt/",
    rating: 9.8,
    stars: 4.6,
    reviews: 3847,
    badges: ["LINHA SUPERIOR"],
    terms: "18+ | Jogo seguro e responsável | Licença SRIJ | Aplicam-se termos e condições",
    isTopLine: true,
  },
  {
    id: 2,
    name: "BWIN",
    logo: "/bwin.png",
    bonus: "Aposta Grátis por Nossa Conta!",
    url: "https://www.bwin.pt/pt",
    rating: 9.5,
    stars: 4.6,
    reviews: 3718,
    badges: ["MARCA INTERNACIONAL"],
    terms: "18+ | Jogo seguro e responsável | Licença SRIJ | Aplicam-se termos e condições",
  },
  {
    id: 3,
    name: "Solverde",
    logo: "/solverde.svg",
    bonus: "300% até 30€ em Aposta Grátis",
    url: "https://www.solverde.pt/",
    rating: 9.4,
    stars: 4.4,
    reviews: 2495,
    badges: ["MARCA PORTUGUESA"],
    terms: "18+ | Jogo seguro e responsável | Licença SRIJ | Aplicam-se termos e condições",
  },
    {
    id: 4,
    name: "Betclic",
    logo: "/betclic.svg",
    bonus: "100% Até 20€",
    url: "https://www.betclic.pt/",
    rating: 9.3,
    stars: 4.8,
    reviews: 3075,
    badges: ["MELHOR AVALIAÇÃO", "POPULAR"],
    terms: "18+ | Jogo seguro e responsável | Licença SRIJ | Aplicam-se termos e condições",
    isTopRating: true,
    isPopular: true,
  },
  {
    id: 5,
    name: "ESC Online",
    logo: "/esc.svg",
    bonus: "Até 250€ em Freebets",
    url: "https://www.estorilsolcasinos.pt/pt",
    rating: 9.1,
    stars: 4.3,
    reviews: 2463,
    badges: ["ESTORIL SOL CASINOS"],
    terms: "18+ | Jogo seguro e responsável | Licença SRIJ | Aplicam-se termos e condições",
    isTrending: true,
  },
  {
    id: 6,
    name: "Lebull",
    logo: "/lebull.svg",
    bonus: "250% até 400€ + 50€ de Aposta Grátis",
    url: "https://www.lebull.pt/",
    rating: 9.0,
    stars: 4.2,
    reviews: 2064,
    badges: ["BÓNUS GENEROSO"],
    terms: "18+ | Jogo seguro e responsável | Licença SRIJ | Aplicam-se termos e condições",
  },
  {
    id: 7,
    name: "Casino Portugal",
    logo: "/brand-ccasino.svg",
    bonus: "Aposta Grátis de 2€ Atualmente",
    url: "https://www.casinoportugal.pt/",
    rating: 8.7,
    stars: 4.1,
    reviews: 3394,
    badges: ["APOSTAS & DESPORTO"],
    terms: "18+ | Jogo seguro e responsável | Licença SRIJ | Aplicam-se termos e condições",
  },
]
