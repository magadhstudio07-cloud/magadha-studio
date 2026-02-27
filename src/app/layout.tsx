import type { Metadata } from 'next'
import { Cinzel, Cormorant_Garamond, JetBrains_Mono, Inter } from 'next/font/google'
import './globals.css'
import NoiseOverlay from '@/components/layout/NoiseOverlay'

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
  weight: ['400', '700', '900'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Magadha Studio — Building Digital Empires That Endure',
  description:
    'AI-accelerated web development agency. We build digital empires through superior strategy, innovation, and relentless ambition. Next.js, React Native, AI integrations — 3× faster.',
  keywords: ['web development', 'AI', 'Next.js', 'React Native', 'digital agency', 'mobile apps'],
  authors: [{ name: 'Magadha Studio' }],
  openGraph: {
    title: 'Magadha Studio — Building Digital Empires That Endure',
    description:
      'AI-accelerated web development. From concept to launch 3× faster. 50+ projects, 98% satisfaction.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Magadha Studio — Digital Empires',
    description: 'AI-accelerated web development. 3× faster. 98% satisfaction.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${cinzel.variable} ${cormorant.variable} ${jetbrains.variable} ${inter.variable} bg-obsidian-600 text-stone-100 antialiased`}
      >
        <NoiseOverlay />
        {children}
      </body>
    </html>
  )
}
