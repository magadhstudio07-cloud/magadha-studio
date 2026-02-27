import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import LogoMarquee from '@/components/sections/LogoMarquee'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import Audit from '@/components/sections/Audit'
import Testimonials from '@/components/sections/Testimonials'
import Stats from '@/components/sections/Stats'
import BookCall from '@/components/sections/BookCall'

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* I — The Awakening */}
        <Hero />

        {/* II — The Kingdom's Reach */}
        <LogoMarquee />

        {/* III — The Four Pillars */}
        <Services />

        {/* IV — The Conquests */}
        <Projects />

        {/* V — The Oracle */}
        <Audit />

        {/* VI — The Chronicles */}
        <Testimonials />

        {/* Numbers */}
        <Stats />

        {/* VII — The War Room */}
        <BookCall />
      </main>

      {/* VIII — The Legacy */}
      <Footer />
    </>
  )
}
