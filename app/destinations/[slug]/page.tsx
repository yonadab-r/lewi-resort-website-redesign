import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Calendar } from 'lucide-react'
import { destinations, suites } from '@/lib/data'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const d = destinations.find((x) => x.slug === slug)
  if (!d) return {}
  return {
    title: `${d.name} — Lewi Hotels & Resorts`,
    description: d.tagline,
  }
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const dest = destinations.find((d) => d.slug === slug)
  if (!dest) notFound()

  const others = destinations.filter((d) => d.slug !== slug)

  return (
    <main className="relative">
      <SiteHeader />

      <section className="relative flex min-h-[85vh] items-end overflow-hidden">
        <Image
          src={dest.image || '/placeholder.svg'}
          alt={dest.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8">
          <Reveal>
            <Link
              href="/#destinations"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" /> All destinations
            </Link>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary">
              {dest.region}
            </p>
            <h1 className="max-w-3xl font-serif text-5xl font-light leading-[1.02] text-balance sm:text-7xl">
              {dest.name}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" /> {dest.lat}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="size-4 text-primary" /> {dest.established}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <h2 className="font-serif text-3xl font-light leading-snug text-balance sm:text-4xl">
              {dest.tagline}
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              {dest.description}
            </p>
            <Link
              href="/#reserve"
              className="mt-10 inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
            >
              Reserve this destination
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border/60 bg-card/50 p-8">
              <h3 className="text-xs uppercase tracking-[0.3em] text-primary">
                Signature highlights
              </h3>
              <ul className="mt-6 space-y-4">
                {dest.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Suites at this destination */}
      <section className="border-t border-border/50 bg-card/40 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <h2 className="mb-12 font-serif text-3xl font-light sm:text-4xl">
              Stay at {dest.name}
            </h2>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {suites.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.1}>
                <article className="group overflow-hidden rounded-3xl border border-border/60 bg-background/60">
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <Image
                      src={s.image || '/placeholder.svg'}
                      alt={s.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary">
                      {s.category}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-light">{s.name}</h3>
                    <p className="mt-4 text-sm text-muted-foreground">
                      from{' '}
                      <span className="font-serif text-xl text-foreground">
                        ${s.price}
                      </span>{' '}
                      / night
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other destinations */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <h2 className="mb-12 font-serif text-3xl font-light sm:text-4xl">
              Explore the collection
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {others.map((d, i) => (
              <Reveal key={d.slug} delay={i * 0.08}>
                <Link
                  href={`/destinations/${d.slug}`}
                  className="group relative block overflow-hidden rounded-3xl border border-border/60"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={d.image || '/placeholder.svg'}
                      alt={d.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-primary">
                      {d.region}
                    </p>
                    <h3 className="mt-1 font-serif text-2xl font-light">{d.name}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
