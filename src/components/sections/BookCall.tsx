import { Clock, Video, Shield } from 'lucide-react'
import Button from '@/components/ui/Button'
import GoldDivider from '@/components/ui/GoldDivider'
import ScrollReveal from '@/components/effects/ScrollReveal'

const FEATURES = [
  { icon: Clock, label: '30-Minute Strategy Session', sub: 'No fluff, all signal' },
  { icon: Video, label: 'Video Call', sub: 'Meet the strategists' },
  { icon: Shield, label: 'Zero Obligation', sub: 'Pure value, your call' },
]

export default function BookCall() {
  return (
    <section
      id="bookcall"
      className="py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #0D0D12 0%, #13131C 40%, #0D0D12 100%)',
      }}
    >
      {/* Top ornamental border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/20 to-transparent" />

      {/* Radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(51,196,182,0.05) 0%, transparent 70%)',
        }}
      />

      {/* Geometric backdrop */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <svg viewBox="0 0 1200 700" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <g stroke="#33C4B6" fill="none" strokeWidth="0.4">
            {Array.from({ length: 10 }).map((_, i) => (
              <circle key={i} cx="600" cy="350" r={50 + i * 50} />
            ))}
            {Array.from({ length: 16 }).map((_, i) => (
              <line
                key={`l${i}`}
                x1="600"
                y1="0"
                x2="600"
                y2="700"
                transform={`rotate(${i * 22.5} 600 350)`}
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Chapter indicator */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
        <span className="text-vertical font-mono text-[10px] text-teal-400/30 tracking-[0.3em] uppercase">
          Chapter VII — The War Room
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-teal-400/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <ScrollReveal>
          <div className="ornament font-mono text-[10px] tracking-[0.4em] text-teal-400/55 uppercase mb-8 inline-flex">
            Chapter VII — The War Room
          </div>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wide text-stone-100 leading-tight mb-6">
            Enter the{' '}
            <span className="text-teal-gradient">Emperor's Council</span>
          </h2>
        </ScrollReveal>

        {/* Sub-text */}
        <ScrollReveal delay={0.2}>
          <p className="font-serif text-xl text-stone-300 leading-relaxed mb-12 max-w-2xl mx-auto">
            A 30-minute strategy session with our architects. We will map your digital empire,
            identify the gaps, and reveal exactly how we would build your next victory — at no cost.
          </p>
        </ScrollReveal>

        {/* Feature pills */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {FEATURES.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-3 px-5 py-3 border border-white/9 bg-teal-400/5 backdrop-blur-sm rounded-sm"
              >
                <f.icon className="w-4 h-4 text-teal-400/60 shrink-0" />
                <div className="text-left">
                  <p className="font-sans text-xs font-medium text-stone-200 leading-none mb-0.5">
                    {f.label}
                  </p>
                  <p className="font-mono text-[9px] tracking-wide text-stone-500">{f.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.4}>
          <Button
            href="mailto:hello@magadha.studio?subject=Strategy Call Request"
            variant="primary"
            size="lg"
            className="text-base px-12 py-5"
          >
            Book Your Strategy Call
          </Button>

          <p className="font-mono text-[9px] text-stone-500 tracking-[0.2em] uppercase mt-5">
            ✦ Free forever ✦ No pitch deck ✦ Honest counsel only ✦
          </p>
        </ScrollReveal>

        <GoldDivider className="mt-16 opacity-30" />

        {/* Final quote */}
        <ScrollReveal delay={0.5}>
          <blockquote className="mt-10">
            <p className="font-serif text-lg text-stone-500 italic max-w-xl mx-auto">
              &ldquo;Strategy without tactics is the slowest route to victory. Tactics without
              strategy is the noise before defeat.&rdquo;
            </p>
            <footer className="font-mono text-[9px] text-teal-400/40 tracking-[0.3em] uppercase mt-3">
              — Sun Tzu, adapted for the digital age
            </footer>
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  )
}
