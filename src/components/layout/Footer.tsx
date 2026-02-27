import Link from 'next/link'
import GoldDivider from '@/components/ui/GoldDivider'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-obsidian-600 border-t border-white/7 relative overflow-hidden">
      {/* Background mandala */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 800 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <g stroke="#33C4B6" fill="none" strokeWidth="0.5">
            {Array.from({ length: 8 }).map((_, i) => (
              <circle key={i} cx="400" cy="200" r={30 + i * 25} />
            ))}
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-sm border border-teal-400/30 flex items-center justify-center">
                <span className="font-display text-sm font-black text-teal-400">M</span>
              </div>
              <span className="font-display text-base font-bold tracking-[0.15em] uppercase text-stone-100">
                Magadha <span className="text-teal-400">Studio</span>
              </span>
            </div>
            <p className="font-serif text-stone-400 text-lg leading-relaxed max-w-sm italic">
              &ldquo;Just as the Magadha Empire rose through superior strategy and ambition — we
              build digital dynasties that endure.&rdquo;
            </p>
            <div className="flex items-center gap-4 mt-6">
              {['Twitter / X', 'LinkedIn', 'GitHub'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs font-mono tracking-wider text-stone-500 hover:text-teal-400 transition-colors uppercase"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-teal-400/60 mb-5">
              The Empire
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'The Pillars', href: '#services' },
                { label: 'Conquests', href: '#projects' },
                { label: 'The Oracle', href: '#audit' },
                { label: 'Chronicles', href: '#testimonials' },
                { label: 'The War Room', href: '#bookcall' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-stone-100 font-sans text-sm transition-colors group inline-flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-teal-400 transition-all duration-300 inline-block" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-teal-400/60 mb-5">
              The Scrolls
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'hello@magadha.studio', href: 'mailto:hello@magadha.studio' },
                { label: 'Book a Strategy Call', href: '#bookcall' },
                { label: 'Free Website Audit', href: '#audit' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-stone-400 hover:text-teal-300 font-sans text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <GoldDivider />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
          <p className="font-mono text-xs text-stone-500 tracking-wider">
            © {year} Magadha Studio. All territories claimed.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service'].map((label) => (
              <a
                key={label}
                href="#"
                className="font-mono text-xs text-stone-500 hover:text-stone-300 tracking-wider transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="ornament font-mono text-xs text-teal-400/40 tracking-widest">
            THE LEGACY ENDURES
          </div>
        </div>
      </div>
    </footer>
  )
}
