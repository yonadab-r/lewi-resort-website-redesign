'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import { HeroCanvas } from './three/hero-canvas'

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Warm ambient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,oklch(0.28_0.05_60)_0%,oklch(0.17_0.012_66)_55%)]" />
      <HeroCanvas />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_55%,oklch(0.17_0.012_66)_100%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary"
          >
            <span className="h-px w-10 bg-primary/60" />
            Lakeside Ethiopia
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl font-light leading-[1.02] tracking-tight text-balance sm:text-7xl lg:text-8xl"
          >
            Stillness,
            <br />
            <span className="italic text-primary">golden</span> hour, water.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground"
          >
            A collection of lakeside sanctuaries across Ethiopia — where the art
            of hospitality was born, and the light lingers a little longer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/#reserve"
              className="rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
            >
              Begin your reservation
            </Link>
            <Link
              href="/#destinations"
              className="rounded-full border border-border px-8 py-3.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              Explore destinations
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="size-4 animate-bounce" />
      </motion.div>
    </section>
  )
}
