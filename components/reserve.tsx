'use client'

import { useState } from 'react'
import { Calendar, MapPin, Users, Check } from 'lucide-react'
import { destinations } from '@/lib/data'
import { Reveal } from './reveal'

export function Reserve() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="reserve" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-12 text-center">
            <p className="mb-4 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
              <span className="h-px w-10 bg-primary/60" />
              Reserve
              <span className="h-px w-10 bg-primary/60" />
            </p>
            <h2 className="mx-auto max-w-2xl font-serif text-4xl font-light leading-tight text-balance sm:text-5xl">
              Begin your journey to the lakeside
            </h2>
            <p className="mx-auto mt-5 max-w-md text-muted-foreground">
              Check availability across the collection. Our concierge will
              confirm your stay within the day.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSubmitted(true)
            }}
            className="rounded-3xl border border-border/60 bg-card/60 p-6 sm:p-8"
          >
            <div className="grid gap-5 md:grid-cols-4">
              <Field label="Destination" icon={<MapPin className="size-4" />}>
                <select
                  required
                  className="w-full bg-transparent text-foreground outline-none [&>option]:bg-card"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {destinations.map((d) => (
                    <option key={d.slug} value={d.slug}>
                      {d.name}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Arrival" icon={<Calendar className="size-4" />}>
                <input
                  type="date"
                  required
                  className="w-full bg-transparent text-foreground outline-none"
                />
              </Field>
              <Field label="Departure" icon={<Calendar className="size-4" />}>
                <input
                  type="date"
                  required
                  className="w-full bg-transparent text-foreground outline-none"
                />
              </Field>
              <Field label="Guests" icon={<Users className="size-4" />}>
                <select
                  className="w-full bg-transparent text-foreground outline-none [&>option]:bg-card"
                  defaultValue="2"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'guest' : 'guests'}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:scale-[1.01] disabled:opacity-80"
            >
              {submitted ? (
                <>
                  <Check className="size-4" /> Request received — we&apos;ll be in touch
                </>
              ) : (
                'Check availability'
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  icon,
  children,
}: {
  label: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <label className="flex flex-col gap-2 rounded-2xl border border-border/60 bg-background/50 px-4 py-3 transition-colors focus-within:border-primary">
      <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {icon}
        {label}
      </span>
      {children}
    </label>
  )
}
