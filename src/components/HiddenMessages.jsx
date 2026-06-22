import { useState } from 'react'
import content from '../data/content.js'
import Reveal from './Reveal.jsx'

// A row of small "tap to reveal" cards. Clicking flips the card open to
// show a short hidden note instead of navigating anywhere — a light,
// playful interactive moment between the hero and the heavier sections.
function SecretCard({ label, message, delay }) {
  const [open, setOpen] = useState(false)

  return (
    <Reveal delay={delay} className="w-full sm:w-72">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group relative w-full h-36 sm:h-40 rounded-xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        style={{ perspective: '1000px' }}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${open ? '[transform:rotateY(180deg)]' : ''}`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 rounded-xl bg-navy-light border border-gold/30 flex flex-col items-center justify-center gap-2 px-4
              group-hover:border-gold/70 transition-colors"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <span className="text-2xl">💌</span>
            <span className="font-body text-cream/80 text-sm tracking-wide">{label}</span>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 rounded-xl paper border border-gold/40 flex items-center justify-center px-5"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <p className="font-script text-navy text-lg sm:text-xl text-center leading-snug">
              {message}
            </p>
          </div>
        </div>
      </button>
    </Reveal>
  )
}

export default function HiddenMessages() {
  const { secrets } = content

  return (
    <section id="secrets" className="bg-navy py-20 md:py-28 px-6">
      <Reveal className="text-center max-w-xl mx-auto mb-12">
        <span className="inline-block font-body text-xs sm:text-sm tracking-[0.25em] uppercase text-gold mb-4">
          One More Thing
        </span>
        <h2 className="font-display text-warmwhite text-2xl sm:text-3xl">
          A few things we never said out loud
        </h2>
      </Reveal>

      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 max-w-4xl mx-auto">
        {secrets.map((s, i) => (
          <SecretCard key={s.label} label={s.label} message={s.message} delay={i * 120} />
        ))}
      </div>
    </section>
  )
}
