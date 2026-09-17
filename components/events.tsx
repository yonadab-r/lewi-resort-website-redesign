import { events } from '@/lib/data'
import { Reveal } from './reveal'

export function Events() {
  return (
    <section
      id="events"
      className="relative border-y border-border/50 bg-card/40 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-14 text-center">
            <p className="mb-4 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
              <span className="h-px w-10 bg-primary/60" />
              What&apos;s On
              <span className="h-px w-10 bg-primary/60" />
            </p>
            <h2 className="mx-auto max-w-xl font-serif text-4xl font-light leading-tight text-balance sm:text-5xl">
              Gatherings across the seasons
            </h2>
          </div>
        </Reveal>

        <div className="divide-y divide-border/60 border-y border-border/60">
          {events.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.08}>
              <div className="group grid grid-cols-1 items-center gap-4 py-7 transition-colors hover:bg-background/40 sm:grid-cols-[7rem_1fr_auto] sm:px-4">
                <div className="font-serif text-3xl font-light text-primary">
                  {e.date}
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-light">{e.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {e.description}
                  </p>
                </div>
                <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground sm:text-right">
                  {e.location}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
