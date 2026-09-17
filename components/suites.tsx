import Image from 'next/image'
import Link from 'next/link'
import { Users, Maximize, BedDouble } from 'lucide-react'
import { suites } from '@/lib/data'
import { Reveal } from './reveal'

export function Suites() {
  return (
    <section id="suites" className="relative border-y border-border/50 bg-card/40 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-16 text-center">
            <p className="mb-4 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
              <span className="h-px w-10 bg-primary/60" />
              Rooms & Suites
              <span className="h-px w-10 bg-primary/60" />
            </p>
            <h2 className="mx-auto max-w-2xl font-serif text-4xl font-light leading-tight text-balance sm:text-5xl">
              Spaces shaped by light, water and quiet craft
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {suites.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-background/60">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={s.image || '/placeholder.svg'}
                    alt={s.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary backdrop-blur">
                    {s.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-serif text-2xl font-light">{s.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <div className="mt-6 flex items-center gap-5 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Maximize className="size-4 text-primary" />
                      {s.size}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="size-4 text-primary" />
                      {s.guests} guests
                    </span>
                    <span className="flex items-center gap-1.5">
                      <BedDouble className="size-4 text-primary" />
                      {s.beds}
                    </span>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-5">
                    <p className="text-sm text-muted-foreground">
                      from{' '}
                      <span className="font-serif text-2xl text-foreground">
                        ${s.price}
                      </span>{' '}
                      / night
                    </p>
                    <Link
                      href="/#reserve"
                      className="text-sm font-medium text-primary transition-colors hover:text-accent"
                    >
                      Reserve →
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
