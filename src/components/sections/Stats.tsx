import { stats } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'
import GoldDivider from '@/components/ui/GoldDivider'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import ScrollReveal from '@/components/effects/ScrollReveal'

export default function Stats() {
  return (
    <section className="py-28 bg-obsidian-600 relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(51,196,182,0.04) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow="By the Numbers"
            title="The Empire's Record"
            subtitle="Five years of conquest, measured and accountable."
          />
        </ScrollReveal>

        <GoldDivider className="mt-12 mb-16" />

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="relative text-center py-10 px-6 group">
                {/* Vertical separator */}
                {i < stats.length - 1 && (
                  <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-teal-400/15 to-transparent hidden md:block" />
                )}

                {/* Number */}
                <div className="font-display text-5xl md:text-6xl font-black text-teal-gradient mb-2 leading-none tabular-nums">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <p className="font-sans text-sm font-medium text-stone-200 tracking-wide mb-1.5">
                  {stat.label}
                </p>

                {/* Sub-label */}
                <p className="font-mono text-[9px] tracking-[0.2em] text-stone-500 uppercase">
                  {stat.sublabel}
                </p>

                {/* Hover glow dot */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-px bg-gradient-to-r from-transparent via-teal-400/0 to-transparent group-hover:via-teal-400/40 transition-all duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <GoldDivider className="mt-8" />
      </div>
    </section>
  )
}
