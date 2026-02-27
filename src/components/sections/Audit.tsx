import { CheckCircle, Zap, BarChart3, Globe } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import GoldDivider from '@/components/ui/GoldDivider'
import ScrollReveal from '@/components/effects/ScrollReveal'

const FEATURES = [
  { icon: Zap, label: 'Performance Score', sub: 'Core Web Vitals analysis' },
  { icon: BarChart3, label: 'Conversion Audit', sub: 'UX friction points mapped' },
  { icon: Globe, label: 'SEO Assessment', sub: 'Technical SEO deep-dive' },
  { icon: CheckCircle, label: 'Actionable Roadmap', sub: 'Prioritised recommendations' },
]

export default function Audit() {
  return (
    <section id="audit" className="py-32 parchment-bg relative overflow-hidden">
      {/* Top ornamental border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-400/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-400/40 to-transparent" />

      {/* Decorative scroll pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 1200 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="parchment-dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="0.8" fill="#5C5448" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#parchment-dots)" />
        </svg>
      </div>

      {/* Chapter indicator */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
        <span className="text-vertical font-mono text-[10px] text-stone-500/60 tracking-[0.3em] uppercase">
          Chapter IV — The Oracle
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-stone-500/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Chapter IV — The Oracle"
            title="The Empire's Wisdom, Freely Given"
            subtitle="We will analyse your website and reveal exactly what is holding you back — no charge, no commitment. The Oracle speaks truth."
            align="center"
            light
          />
        </ScrollReveal>

        <GoldDivider className="mt-12 mb-14 opacity-40" />

        {/* Feature grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {FEATURES.map((f, i) => (
            <ScrollReveal key={f.label} delay={i * 0.1}>
              <div className="text-center group">
                <div className="w-12 h-12 mx-auto mb-3 rounded-sm border border-stone-400/30 group-hover:border-stone-500/60 flex items-center justify-center transition-colors duration-300 bg-white/50">
                  <f.icon className="w-5 h-5 text-stone-500 group-hover:text-stone-700 transition-colors" />
                </div>
                <p className="font-sans text-xs font-semibold text-stone-600 mb-1">{f.label}</p>
                <p className="font-mono text-[9px] text-stone-400 tracking-wide">{f.sub}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Parchment scroll CTA box */}
        <ScrollReveal delay={0.2}>
          <div className="relative border border-stone-400/25 bg-white/40 backdrop-blur-sm p-10 text-center rounded-sm shadow-lg shadow-stone-400/10">
            {/* Corner ornaments */}
            {['top-3 left-3', 'top-3 right-3', 'bottom-3 left-3', 'bottom-3 right-3'].map((pos) => (
              <div
                key={pos}
                className={`absolute ${pos} w-4 h-4 border-stone-400/30`}
                style={{
                  borderTop: pos.includes('top') ? '1px solid' : undefined,
                  borderBottom: pos.includes('bottom') ? '1px solid' : undefined,
                  borderLeft: pos.includes('left') ? '1px solid' : undefined,
                  borderRight: pos.includes('right') ? '1px solid' : undefined,
                }}
              />
            ))}

            <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-4">
              Free — No Obligation — 48hr Delivery
            </p>

            <h3 className="font-display text-2xl md:text-3xl font-bold text-stone-700 mb-3">
              Claim Your Free Website Audit
            </h3>

            <p className="font-serif text-lg text-stone-500 max-w-md mx-auto mb-8 italic">
              &ldquo;Know your enemy and know yourself and you need not fear the result of a hundred
              battles.&rdquo;
            </p>

            <Button href="mailto:hello@magadha.studio?subject=Free Website Audit Request" variant="gold" size="lg">
              Request the Oracle&apos;s Wisdom
            </Button>

            <p className="font-mono text-[9px] text-stone-400 tracking-wider mt-5 uppercase">
              ✦ Delivered within 48 hours ✦ No agency jargon ✦ Actionable insights only
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
