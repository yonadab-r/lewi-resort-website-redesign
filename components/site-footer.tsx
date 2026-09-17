import Link from 'next/link'
import { destinations } from '@/lib/data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-serif text-3xl font-medium tracking-wide">
                Lewi
              </span>
              <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                Hotels & Resorts
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Lakeside sanctuaries across Ethiopia, born of the land where
              hospitality — and coffee — began.
            </p>
          </div>

          <FooterCol title="Destinations">
            {destinations.map((d) => (
              <Link key={d.slug} href={`/destinations/${d.slug}`} className="footer-link">
                {d.name}
              </Link>
            ))}
          </FooterCol>

          <FooterCol title="Discover">
            <Link href="/#suites" className="footer-link">Suites</Link>
            <Link href="/#experiences" className="footer-link">Experiences</Link>
            <Link href="/#events" className="footer-link">Events</Link>
            <Link href="/#reserve" className="footer-link">Reserve</Link>
          </FooterCol>

          <FooterCol title="Contact">
            <a href="mailto:stay@lewiresorts.com" className="footer-link">
              stay@lewiresorts.com
            </a>
            <a href="tel:+251000000000" className="footer-link">
              +251 00 000 0000
            </a>
            <span className="text-sm text-muted-foreground">Hawassa, Ethiopia</span>
          </FooterCol>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Lewi Hotels & Resorts. All rights reserved.</p>
          <p className="uppercase tracking-[0.2em]">Lakeside · Ethiopia</p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xs uppercase tracking-[0.3em] text-primary">{title}</h3>
      {children}
    </div>
  )
}
