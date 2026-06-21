import { useState } from 'react'
import content from '../data/content.js'
import Reveal from './Reveal.jsx'
import FloatingHearts from './FloatingHearts.jsx'

export default function Closing() {
  const { closing } = content
  const [burstKey, setBurstKey] = useState(0)
  const [bursting, setBursting] = useState(false)

  const sendLove = () => {
    setBurstKey((k) => k + 1)
    setBursting(true)
    setTimeout(() => setBursting(false), 4200)
  }

  return (
    <section className="relative bg-navy-dark py-24 md:py-32 px-6 text-center overflow-hidden">
      {bursting && <FloatingHearts key={burstKey} count={26} />}

      <Reveal className="relative max-w-xl mx-auto">
        <span className="text-4xl inline-block animate-pulse-soft" aria-hidden="true">
          ❤️
        </span>
        <h2 className="font-display text-warmwhite text-3xl sm:text-4xl mt-6 italic">
          {closing.heading}
        </h2>
        <p className="font-body text-cream/75 text-base sm:text-lg leading-relaxed mt-4">
          {closing.message}
        </p>

        <button
          onClick={sendLove}
          className="mt-10 px-8 py-3 rounded-full bg-gold text-navy font-body font-semibold text-sm tracking-wide
            shadow-gold hover:bg-gold-light hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
        >
          Send Dad Some Love
        </button>
      </Reveal>
    </section>
  )
}
