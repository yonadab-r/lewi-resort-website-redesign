'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { testimonials } from '@/lib/data'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const active = testimonials[index]

  return (
    <section id="journal" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="mb-10 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
          <span className="h-px w-10 bg-primary/60" />
          In Their Words
          <span className="h-px w-10 bg-primary/60" />
        </p>

        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-serif text-3xl font-light leading-snug text-balance sm:text-4xl">
              &ldquo;{active.quote}&rdquo;
            </p>
            <footer className="mt-8">
              <p className="text-base text-foreground">{active.name}</p>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                {active.origin}
              </p>
            </footer>
          </motion.blockquote>
        </AnimatePresence>

        <div className="mt-12 flex items-center justify-center gap-3">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Show testimonial from ${t.name}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-10 bg-primary' : 'w-4 bg-border hover:bg-muted-foreground'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
