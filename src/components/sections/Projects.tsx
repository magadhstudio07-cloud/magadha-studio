'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, TrendingUp } from 'lucide-react'
import { projects } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'
import GoldDivider from '@/components/ui/GoldDivider'
import ScrollReveal from '@/components/effects/ScrollReveal'
import Button from '@/components/ui/Button'

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const isEven = index % 2 === 0

  return (
    <ScrollReveal delay={index * 0.15} direction={isEven ? 'left' : 'right'}>
      <motion.div
        className="glass-card gold-glow-card rounded-sm relative overflow-hidden group"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Ornate top border */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`,
          }}
        />

        {/* Corner ornament */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div
            className="absolute -top-8 -right-8 w-16 h-16 rotate-45 opacity-20"
            style={{ background: project.accentColor }}
          />
        </div>

        <div className="p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            {/* Left: Project "screenshot" placeholder */}
            <div className="md:w-2/5 shrink-0">
              <div
                className="w-full aspect-[4/3] rounded-sm relative overflow-hidden border border-white/7 group-hover:border-teal-400/20 transition-colors duration-400"
                style={{
                  background: `linear-gradient(135deg, ${project.accentColor}15, #0A0A18, ${project.accentColor}08)`,
                }}
              >
                {/* Decorative frame */}
                <div className="absolute inset-2 border border-dashed border-white/6 rounded-sm" />

                {/* Project icon / title */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <span
                    className="font-display text-4xl font-black opacity-20"
                    style={{ color: project.accentColor }}
                  >
                    {project.title.slice(0, 1)}
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.3em] text-stone-500 uppercase">
                    {project.subtitle}
                  </span>
                </div>

                {/* Metric badge */}
                <div
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-sm font-mono text-[9px] tracking-widest uppercase border"
                  style={{
                    background: `${project.accentColor}18`,
                    borderColor: `${project.accentColor}30`,
                    color: project.accentColor,
                  }}
                >
                  {project.metric}
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex-1 flex flex-col justify-between gap-5">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-stone-500 uppercase">
                    {project.year} — Conquest
                  </span>
                  <div className="flex items-center gap-1.5 text-teal-400 font-mono text-[10px] tracking-widest">
                    <TrendingUp size={11} />
                    {project.result}
                  </div>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-bold text-stone-100 group-hover:text-stone-100 transition-colors duration-300 mb-1">
                  {project.title}
                </h3>
                <p className="font-mono text-xs tracking-[0.15em] uppercase text-teal-400/55 mb-4">
                  {project.subtitle}
                </p>

                <p className="font-sans text-stone-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] tracking-wider text-stone-500 border border-white/8 hover:border-teal-400/25 hover:text-stone-300 transition-colors px-2.5 py-1 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-stone-500 hover:text-teal-300 transition-colors duration-300 font-sans text-xs tracking-widest uppercase group/link w-fit"
              >
                <span>Explore the Conquest</span>
                <ArrowUpRight
                  size={13}
                  className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"
                />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-obsidian-600 relative overflow-hidden">
      {/* Chapter indicator */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
        <div className="w-px h-20 bg-gradient-to-b from-teal-400/20 to-transparent" />
        <span className="text-vertical font-mono text-[10px] text-teal-400/35 tracking-[0.3em] uppercase">
          Chapter III — The Conquests
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Chapter III — The Conquests"
            title="Territories Won"
            subtitle="Every project is a new territory claimed. Proof that strategy, craft, and AI-velocity produce digital empires that perform."
          />
        </ScrollReveal>

        <GoldDivider className="mt-12 mb-16" />

        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <ScrollReveal delay={0.3} className="mt-16 text-center">
          <Button href="#" variant="outline" size="lg">
            View All Conquests
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
