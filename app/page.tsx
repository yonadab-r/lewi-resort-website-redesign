import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Destinations } from '@/components/destinations'
import { Suites } from '@/components/suites'
import { Experiences } from '@/components/experiences'
import { Events } from '@/components/events'
import { Testimonials } from '@/components/testimonials'
import { Reserve } from '@/components/reserve'
import { SiteFooter } from '@/components/site-footer'

export default function HomePage() {
  return (
    <main className="relative">
      <SiteHeader />
      <Hero />
      <Destinations />
      <Suites />
      <Experiences />
      <Events />
      <Testimonials />
      <Reserve />
      <SiteFooter />
    </main>
  )
}
