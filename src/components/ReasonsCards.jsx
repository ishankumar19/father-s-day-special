import { useState } from 'react'
import content from '../data/content.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

function ReasonCard({ icon, title, back, delay }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <Reveal delay={delay}>
      <button
        onClick={() => setFlipped((v) => !v)}
        aria-expanded={flipped}
        className="block w-full h-52 sm:h-56 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-2xl"
        style={{ perspective: '1200px' }}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform
            ${flipped ? '[transform:rotateY(180deg)]' : ''}`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front face */}
          <div
            className="absolute inset-0 rounded-2xl bg-navy shadow-card flex flex-col items-center justify-center gap-3 px-6
              hover:-translate-y-1 hover:shadow-gold transition-[transform,box-shadow] duration-300"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <span className="text-4xl">{icon}</span>
            <h3 className="font-display text-warmwhite text-lg sm:text-xl text-center leading-snug">
              {title}
            </h3>
            <span className="text-gold/70 text-xs font-body tracking-wide mt-1">tap to reveal</span>
          </div>

          {/* Back face */}
          <div
            className="absolute inset-0 rounded-2xl paper border border-gold/40 shadow-card flex items-center justify-center px-6"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <p className="font-body text-navy text-sm sm:text-base text-center leading-relaxed">
              {back}
            </p>
          </div>
        </div>
      </button>
    </Reveal>
  )
}

export default function ReasonsCards() {
  const { reasons } = content

  return (
    <section id="reasons" className="paper py-20 md:py-28 px-6">
      <SectionHeading
        eyebrow="Why You're the Best"
        title="Reasons Why You're the Best Dad"
        subtitle="Tap a card to flip it over — there's a little more to each one."
        tone="navy"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reasons.map((r, i) => (
          <ReasonCard key={r.title} {...r} delay={(i % 3) * 100} />
        ))}
      </div>
    </section>
  )
}
