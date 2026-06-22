import content from '../data/content.js'
import FloatingHearts from './FloatingHearts.jsx'

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const { hero } = content

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-navy"
    >
      {/* Soft radial glow behind the headline */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 38%, rgba(199,151,59,0.16) 0%, rgba(20,33,61,0) 70%)',
        }}
        aria-hidden="true"
      />
      <FloatingHearts count={16} />

      <div className="relative z-10 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '120ms', opacity: 0 }}>
        <span className="inline-block font-body text-xs sm:text-sm tracking-[0.3em] uppercase text-gold mb-6">
          {hero.eyebrow}
        </span>

        <h1 className="font-display text-warmwhite text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] italic">
          {hero.title.split('\n').map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>

        <div className="foil-rule w-24 mx-auto mt-8 mb-8" />

        <p className="font-body text-cream/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
          {hero.subtitle}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToId('letter')}
            className="px-8 py-3 rounded-full bg-gold text-navy font-body font-semibold text-sm tracking-wide
              shadow-gold hover:bg-gold-light hover:-translate-y-0.5 active:translate-y-0
              transition-all duration-300"
          >
            {hero.ctaPrimary}
          </button>
          <button
            onClick={() => scrollToId('gallery')}
            className="px-8 py-3 rounded-full border border-gold/60 text-cream font-body text-sm tracking-wide
              hover:bg-gold/10 hover:-translate-y-0.5 active:translate-y-0
              transition-all duration-300"
          >
            {hero.ctaSecondary}
          </button>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => scrollToId('secrets')}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-gold/70 hover:text-gold transition-colors"
      >
        <svg width="22" height="34" viewBox="0 0 22 34" fill="none" className="animate-pulse-soft">
          <rect x="1" y="1" width="20" height="32" rx="10" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="11" cy="10" r="2.5" fill="currentColor" />
        </svg>
      </button>
    </section>
  )
}
