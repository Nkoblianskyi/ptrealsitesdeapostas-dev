import Link from "next/link"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/70 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between h-14 md:h-16 px-4 md:px-6">

        <Link href="/" className="flex flex-col leading-none gap-0.5">
          <span className="text-sm md:text-base font-black text-white uppercase tracking-tight">
            PTREAL<span className="text-green-400">SITES</span>DEAPOSTAS
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Image src="/srij.svg" alt="18+" width={18} height={18}  />
          <span className="px-2.5 py-1 border border-white/20 text-[10px] font-black text-white/60">
            18+
          </span>
        </div>

      </div>
    </header>
  )
}
