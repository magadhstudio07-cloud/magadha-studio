'use client'

import { testimonials } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'
import GoldDivider from '@/components/ui/GoldDivider'
import ScrollReveal from '@/components/effects/ScrollReveal'

// Split into two rows
const ROW_1 = testimonials.slice(0, 4)
const ROW_2 = testimonials.slice(4)

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="glass-card gold-glow-card rounded-sm p-7 w-[340px] shrink-0 relative group">
      {/* Big quote mark */}
      <span
        className="absolute top-4 right-5 font-serif text-6xl text-teal-400/8 leading-none select-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <p className="font-serif text-base text-stone-300 leading-relaxed mb-6 italic relative z-10">
        &ldquo;{t.quote}&rdquo;
      </p>

      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full border border-teal-400/20 group-hover:border-teal-400/50 transition-colors flex items-center justify-center bg-obsidian-400 shrink-0">
          <span className="font-display text-sm font-bold text-teal-300">{t.initial}</span>
        </div>
        <div>
          <p className="font-sans text-sm font-semibold text-stone-200">{t.author}</p>
          <p className="font-mono text-[9px] tracking-wider text-stone-500 uppercase">
            {t.title}, {t.company}
          </p>
        </div>
      </div>

      {/* 5-star rating */}
      <div className="absolute bottom-5 right-5 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-teal-400/45 text-xs">
            ★
          </span>
        ))}
      </div>
    </div>
  )
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: typeof testimonials
  reverse?: boolean
}) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-wrapper overflow-hidden">
      <div className={reverse ? 'marquee-track-reverse' : 'marquee-track'}>
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} t={t} />
        ))}
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-obsidian-500 overflow-hidden relative">
      {/* Chapter indicator */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
        <div className="w-px h-20 bg-gradient-to-b from-teal-400/20 to-transparent" />
        <span className="text-vertical font-mono text-[10px] text-teal-400/30 tracking-[0.3em] uppercase">
          Chapter V — The Chronicles
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-14">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Chapter V — The Chronicles"
            title="Tales from Allied Kingdoms"
            subtitle="Eight founders, leaders, and builders who trusted the empire. In their own words."
          />
        </ScrollReveal>
        <GoldDivider className="mt-12" />
      </div>

      {/* Fade edges */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-obsidian-500 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-obsidian-500 to-transparent pointer-events-none" />

        <div className="flex flex-col gap-5">
          <MarqueeRow items={ROW_1} />
          <MarqueeRow items={ROW_2} reverse />
        </div>
      </div>
    </section>
  )
}
