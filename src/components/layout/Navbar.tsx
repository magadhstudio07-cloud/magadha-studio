'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/lib/constants'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-500 via-teal-300 to-teal-400 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <nav
        className={cn(
          'fixed left-0 right-0 z-40 transition-all duration-500',
          scrolled
            ? 'top-[2px] bg-obsidian-600/95 backdrop-blur-xl border-b border-white/8 py-3'
            : 'top-[2px] bg-transparent py-5',
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2"
            aria-label="Magadha Studio home"
          >
            {/* Emblem */}
            <div className="w-8 h-8 rounded-sm border border-teal-400/30 flex items-center justify-center group-hover:border-teal-400/70 transition-colors duration-300">
              <span className="font-display text-xs font-black text-teal-400">M</span>
            </div>
            <span className="font-display text-sm font-bold tracking-[0.15em] uppercase text-stone-100 group-hover:text-teal-300 transition-colors duration-300">
              Magadha <span className="text-teal-400">Studio</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-stone-400 hover:text-stone-100 font-sans text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-teal-400 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <Button href="#bookcall" variant="outline" size="sm" className="hidden md:inline-flex">
              Enter War Room
            </Button>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden text-stone-300 hover:text-teal-300 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-obsidian-600/98 backdrop-blur-xl border-t border-white/8 px-6 py-6 flex flex-col gap-5"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-stone-300 hover:text-teal-300 font-sans text-sm tracking-widest uppercase transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button href="#bookcall" variant="outline" size="md" className="mt-2">
              Enter War Room
            </Button>
          </motion.div>
        )}
      </nav>
    </>
  )
}
