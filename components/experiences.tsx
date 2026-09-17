import Image from 'next/image'
import { experiences } from '@/lib/data'
import { Reveal } from './reveal'

export function Experiences() {
  return (
    <section id="experiences" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
              <span className="h-px w-10 bg-primary/60" />
              Experiences
            </p>
            <h2 className="max-w-xl font-serif text-4xl font-light leading-tight text-balance sm:text-5xl">
              The rituals that make a stay unforgettable
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {experiences.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.1}>
              <article className="group relative h-[30rem] overflow-hidden rounded-3xl border border-border/60">
                <Image
                  src={e.image || '/placeholder.svg'}
                  alt={e.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary">
                    {e.category}
                  </p>
                  <h3 className="font-serif text-2xl font-light">{e.title}</h3>
                  <p className="mt-3 max-w-xs translate-y-1 text-sm text-muted-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {e.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
