'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  maxOpacity: number
  color: string
  pulse: number
  pulseSpeed: number
}

const COLORS = ['#33C4B6', '#55D5CA', '#229E92', '#B8860B', '#D4B04A', '#4EEADB']

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const particles: Particle[] = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      // Reinitialize particles on resize
      particles.length = 0
      init()
    }

    const init = () => {
      const count = Math.floor((canvas.width * canvas.height) / 14000)
      for (let i = 0; i < count; i++) {
        const maxOpacity = Math.random() * 0.55 + 0.05
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: -(Math.random() * 0.45 + 0.05),
          size: Math.random() * 1.8 + 0.4,
          opacity: Math.random() * maxOpacity,
          maxOpacity,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.005,
        })
      }
    }

    const hexToRgba = (hex: string, alpha: number) => {
      const r = parseInt(hex.slice(1, 3), 16)
      const g = parseInt(hex.slice(3, 5), 16)
      const b = parseInt(hex.slice(5, 7), 16)
      return `rgba(${r},${g},${b},${alpha})`
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        p.pulse += p.pulseSpeed
        p.opacity = p.maxOpacity * (0.5 + 0.5 * Math.sin(p.pulse))

        if (p.y < -10) {
          p.y = canvas.height + 10
          p.x = Math.random() * canvas.width
        }
        if (p.x < -10) p.x = canvas.width + 10
        if (p.x > canvas.width + 10) p.x = -10

        // Glow halo for larger particles
        if (p.size > 1.2) {
          const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 5)
          grd.addColorStop(0, hexToRgba(p.color, p.opacity * 0.6))
          grd.addColorStop(1, 'transparent')
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size * 5, 0, Math.PI * 2)
          ctx.fillStyle = grd
          ctx.fill()
        }

        // Core dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = hexToRgba(p.color, p.opacity)
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
