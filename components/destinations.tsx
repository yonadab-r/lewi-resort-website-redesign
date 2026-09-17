import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { destinations } from '@/lib/data'
import { Reveal } from './reveal'

export function Destinations() {
  return (
    <section id="destinations" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
              <span className="h-px w-10 bg-primary/60" />
              The Collection
            </p>
            <h2 className="max-w-xl font-serif text-4xl font-light leading-tight text-balance sm:text-5xl">
              Four sanctuaries, one horizon of Ethiopian light
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-muted-foreground">
              From rift-valley lakeshores to the cloud forests where coffee
              began, each Lewi is rooted in the character of its landscape.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {destinations.map((d, i) => (
            <Reveal key={d.slug} delay={i * 0.08}>
              <Link
                href={`/destinations/${d.slug}`}
                className="group relative block overflow-hidden rounded-3xl border border-border/60"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={d.image || '/placeholder.svg'}
                    alt={`${d.name} — ${d.region}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-7">
                  <div>
                    <p className="mb-1 text-xs uppercase tracking-[0.3em] text-primary">
                      {d.region}
                    </p>
                    <h3 className="font-serif text-3xl font-light">{d.name}</h3>
                    <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                      {d.tagline}
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-border/80 bg-background/40 text-foreground backdrop-blur transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
