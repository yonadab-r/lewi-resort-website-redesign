'use client'

import dynamic from 'next/dynamic'

const HeroScene = dynamic(() => import('./hero-scene'), {
  ssr: false,
  loading: () => null,
})

export function HeroCanvas() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <HeroScene />
    </div>
  )
}
