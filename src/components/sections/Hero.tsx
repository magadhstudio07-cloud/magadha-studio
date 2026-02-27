'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import ParticleField from '@/components/effects/ParticleField'
import Button from '@/components/ui/Button'

const HEADLINE = 'Building Digital Empires That Endure'

// Staggered fade-in variants
const EASE = [0.22, 1, 0.36, 1] as const
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
})

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const [headlineDone, setHeadlineDone] = useState(false)

  // Typewriter effect
  useEffect(() => {
    let i = 0
    const delay = setTimeout(() => {
      const timer = setInterval(() => {
        i++
        setDisplayedText(HEADLINE.slice(0, i))
        if (i >= HEADLINE.length) {
          clearInterval(timer)
          setTimeout(() => setHeadlineDone(true), 200)
        }
      }, 38)
      return () => clearInterval(timer)
    }, 600)
    return () => clearTimeout(delay)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-obsidian-600">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-radial from-obsidian-500/40 via-obsidian-600 to-obsidian-600" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-obsidian-600/80" />

      {/* Geometric mandala SVG */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.055] pointer-events-none">
        <svg
          viewBox="0 0 700 700"
          className="w-[900px] h-[900px] animate-spin-slow"
          fill="none"
          stroke="#33C4B6"
          strokeWidth="0.5"
        >
          {Array.from({ length: 14 }).map((_, i) => (
            <circle key={i} cx="350" cy="350" r={30 + i * 22} />
          ))}
          {Array.from({ length: 24 }).map((_, i) => (
            <line
              key={`l${i}`}
              x1="350"
              y1="0"
              x2="350"
              y2="700"
              transform={`rotate(${i * 15} 350 350)`}
            />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <polygon
              key={`p${i}`}
              points="350,50 400,170 530,170 430,250 470,380 350,300 230,380 270,250 170,170 300,170"
              transform={`rotate(${i * 45} 350 350) scale(${0.3 + i * 0.1}) translate(${350 - 350 * (0.3 + i * 0.1)} ${350 - 350 * (0.3 + i * 0.1)})`}
            />
          ))}
        </svg>
      </div>

      {/* Particles */}
      <ParticleField />

      {/* Chapter indicator — desktop only */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
        <span className="text-vertical font-mono text-[10px] text-teal-400/40 tracking-[0.3em] uppercase">
          Chapter I — The Awakening
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-teal-400/30 to-transparent mt-2" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-24">
        {/* Eyebrow */}
        <motion.div
          {...fadeUp(0.4)}
          className="ornament font-mono text-[10px] tracking-[0.4em] text-teal-400/60 uppercase mb-10 inline-flex"
        >
          The Empire Awakens
        </motion.div>

        {/* Headline — typewriter */}
        <h1
          className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-black uppercase tracking-[0.04em] text-stone-100 leading-[1.0] mb-8"
          style={{ minHeight: '1.1em' }}
        >
          <span>{displayedText}</span>
          <span
            className={`inline-block w-[3px] h-[0.75em] bg-teal-400 ml-1.5 align-middle transition-opacity duration-300 ${headlineDone ? 'opacity-0' : 'opacity-100 animate-pulse'}`}
          />
        </h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: headlineDone ? 1 : 0, y: headlineDone ? 0 : 20 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-xl md:text-2xl text-stone-300 max-w-2xl mx-auto leading-[1.7] mb-12"
        >
          Just as the Magadha Empire rose through superior strategy and relentless ambition — we
          build <em className="text-teal-300 not-italic">digital dynasties</em> that outlast trends
          and outperform competitors.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: headlineDone ? 1 : 0, y: headlineDone ? 0 : 16 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <Button href="#bookcall" variant="primary" size="lg">
            Begin Your Legacy
          </Button>
          <Button href="#projects" variant="outline" size="lg">
            View Our Conquests
          </Button>
        </motion.div>

        {/* Mini stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: headlineDone ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center items-center gap-0 border-t border-white/7 pt-8"
        >
          {[
            { value: '50+', label: 'Projects Conquered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '3×', label: 'Faster Delivery' },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              <div className="text-center px-8 md:px-12">
                <div className="font-display text-2xl md:text-3xl text-teal-300 font-bold leading-none">
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] text-stone-500 tracking-[0.2em] uppercase mt-1.5">
                  {stat.label}
                </div>
              </div>
              {i < 2 && <div className="w-px h-10 bg-teal-400/10" />}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        onClick={() => document.getElementById('logos')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="font-mono text-[9px] text-stone-500 tracking-[0.3em] uppercase">
          Scroll to Conquer
        </span>
        <ChevronDown className="w-4 h-4 text-teal-400/55" />
      </motion.div>
    </section>
  )
}
