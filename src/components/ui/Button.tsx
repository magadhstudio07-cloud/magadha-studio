'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { type ReactNode } from 'react'

interface ButtonProps {
  href?: string
  variant?: 'primary' | 'gold' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  external?: boolean
}

const variants = {
  primary:
    'bg-teal-400 hover:bg-teal-300 text-obsidian-600 border border-teal-400 hover:border-teal-300 font-semibold shadow-lg hover:shadow-teal-400/25',
  gold: 'bg-gold-400 hover:bg-gold-300 text-obsidian-600 border border-gold-400 hover:border-gold-300 font-semibold shadow-lg hover:shadow-gold-400/20',
  outline:
    'border border-white/15 hover:border-teal-400/50 text-stone-300 hover:text-teal-300 bg-transparent hover:bg-teal-400/6',
  ghost: 'border-0 text-stone-400 hover:text-stone-100 bg-transparent hover:bg-white/5',
}

const sizes = {
  sm: 'px-4 py-2 text-xs tracking-wider',
  md: 'px-6 py-3 text-sm tracking-wider',
  lg: 'px-8 py-4 text-base tracking-wider',
}

export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  children,
  className,
  onClick,
  type = 'button',
  external = false,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-sans font-medium uppercase transition-all duration-300 relative overflow-hidden group cursor-pointer',
    variants[variant],
    sizes[size],
    className,
  )

  const shimmer = (
    <span
      className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-in-out pointer-events-none"
      aria-hidden="true"
    />
  )

  if (href) {
    return external ? (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {shimmer}
        <span className="relative z-10">{children}</span>
      </a>
    ) : (
      <Link href={href} className={classes}>
        {shimmer}
        <span className="relative z-10">{children}</span>
      </Link>
    )
  }

  return (
    <button onClick={onClick} type={type} className={classes}>
      {shimmer}
      <span className="relative z-10">{children}</span>
    </button>
  )
}
