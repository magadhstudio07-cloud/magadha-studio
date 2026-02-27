import { clientLogos } from '@/lib/constants'

// Doubled for seamless loop
const LOGOS_DOUBLE = [...clientLogos, ...clientLogos]

function LogoItem({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-3 text-stone-500 hover:text-stone-300 transition-colors duration-300 font-sans text-sm font-medium tracking-[0.12em] uppercase whitespace-nowrap cursor-default select-none">
      <span className="w-1 h-1 rounded-full bg-teal-400/40 shrink-0" />
      {name}
    </span>
  )
}

export default function LogoMarquee() {
  return (
    <section id="logos" className="py-14 bg-obsidian-600 border-y border-white/6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="ornament font-mono text-[10px] tracking-[0.35em] text-stone-500 uppercase inline-flex">
          Trusted by Ambitious Builders
        </p>
      </div>

      {/* Row 1 — left to right */}
      <div className="marquee-wrapper overflow-hidden mb-4">
        <div className="marquee-track">
          {LOGOS_DOUBLE.map((logo, i) => (
            <LogoItem key={`r1-${i}`} name={logo} />
          ))}
        </div>
      </div>

      {/* Row 2 — right to left */}
      <div className="marquee-wrapper overflow-hidden">
        <div className="marquee-track-reverse">
          {[...LOGOS_DOUBLE].reverse().map((logo, i) => (
            <LogoItem key={`r2-${i}`} name={logo} />
          ))}
        </div>
      </div>
    </section>
  )
}
