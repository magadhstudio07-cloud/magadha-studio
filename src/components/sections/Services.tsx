'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { services } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'
import GoldDivider from '@/components/ui/GoldDivider'
import ScrollReveal from '@/components/effects/ScrollReveal'
import { cn } from '@/lib/utils'

const SERVICE_ICONS: Record<number, React.ReactNode> = {
  1: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12" y2="18.01" strokeLinecap="round" strokeWidth="2" />
    </svg>
  ),
  2: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="18" x2="12" y2="21" />
    </svg>
  ),
  3: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  4: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  ),
  5: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46L4.5 7a2.5 2.5 0 0 1 5-0.5Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46L19.5 7a2.5 2.5 0 0 0-5-.5Z" />
    </svg>
  ),
}

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className={cn(
        'glass-card gold-glow-card rounded-sm p-8 flex flex-col h-full group cursor-default relative overflow-hidden',
      )}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background gradient on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={cn('absolute inset-0 bg-gradient-to-br', service.color)}
          />
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Top row: numeral + icon */}
        <div className="flex items-start justify-between mb-6">
          <span className="font-mono text-[10px] text-teal-400/40 tracking-[0.3em] uppercase">
            Pillar {service.romanNumeral}
          </span>
          <div className="text-teal-400/60 group-hover:text-teal-300 transition-colors duration-300">
            {SERVICE_ICONS[service.id]}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-bold text-stone-100 group-hover:text-stone-100 transition-colors duration-300 leading-tight mb-1.5">
          {service.title}
        </h3>

        {/* Subtitle */}
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-teal-400/60 mb-4">
          {service.subtitle}
        </p>

        {/* Description */}
        <p className="font-sans text-stone-400 text-sm leading-relaxed mb-6 flex-1">
          {service.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[9px] tracking-wider text-stone-500 border border-white/8 px-2.5 py-1 group-hover:border-teal-400/25 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 text-stone-500 group-hover:text-teal-400 transition-colors duration-300 font-sans text-xs tracking-widest uppercase">
          <span>Explore Capability</span>
          <ArrowRight
            size={12}
            className="group-hover:translate-x-1.5 transition-transform duration-300"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-32 bg-obsidian-500 relative overflow-hidden">
      {/* Subtle top pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <svg viewBox="0 0 1200 800" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#33C4B6" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Chapter indicator */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
        <div className="w-px h-20 bg-gradient-to-t from-teal-400/25 to-transparent" />
        <span className="text-vertical font-mono text-[10px] text-teal-400/35 tracking-[0.3em] uppercase">
          Chapter II — The Pillars
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Chapter II — The Four Pillars"
            title="The Architecture of Empire"
            subtitle="Five disciplines that form the unshakeable foundation of digital dominance. Each pillar engineered to elevate, accelerate, and endure."
          />
        </ScrollReveal>

        <GoldDivider className="mt-12 mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.slice(0, 3).map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.1} direction="up">
              <ServiceCard service={service} index={i} />
            </ScrollReveal>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 max-w-3xl mx-auto lg:max-w-none lg:grid-cols-2 lg:mx-auto">
          {services.slice(3).map((service, i) => (
            <ScrollReveal key={service.id} delay={0.3 + i * 0.1} direction="up">
              <ServiceCard service={service} index={3 + i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
