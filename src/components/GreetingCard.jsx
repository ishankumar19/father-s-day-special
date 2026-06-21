import { useState } from 'react'
import content from '../data/content.js'
import FloatingHearts from './FloatingHearts.jsx'

const STAGE = {
  CLOSED: 'closed',
  OPENING: 'opening',
  DONE: 'done',
}

// The site's signature moment: a wax-sealed envelope sits over everything
// on first load. Clicking the seal cracks it open, the flap folds back,
// and a small card slides up and out before the whole overlay dissolves
// to reveal the page underneath.
export default function GreetingCard({ onFinished }) {
  const [stage, setStage] = useState(STAGE.CLOSED)
  const { envelope } = content

  const handleOpen = () => {
    if (stage !== STAGE.CLOSED) return
    setStage(STAGE.OPENING)
    setTimeout(() => setStage(STAGE.DONE), 1500)
    setTimeout(() => onFinished?.(), 2300)
  }

  // Lets keyboard / impatient visitors skip straight to the site.
  const handleSkip = () => {
    setStage(STAGE.DONE)
    setTimeout(() => onFinished?.(), 700)
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-navy px-6 overflow-hidden
        transition-opacity duration-700 ease-out
        ${stage === STAGE.DONE ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      role="dialog"
      aria-label="Father's Day greeting card"
    >
      <FloatingHearts count={10} />

      <button
        onClick={handleSkip}
        className="absolute bottom-6 right-6 text-cream/50 hover:text-gold text-xs sm:text-sm font-body tracking-wide transition-colors"
      >
        Skip intro →
      </button>

      <div className="relative flex flex-col items-center">
        <p className="font-script text-gold text-2xl sm:text-3xl mb-6 animate-fade-in">
          {envelope.label}
        </p>

        {/* Envelope */}
        <div className="relative w-[260px] h-[180px] sm:w-[340px] sm:h-[230px]">
          {/* Body */}
          <div className="absolute inset-0 rounded-md paper shadow-card overflow-hidden">
            <div
              className="absolute inset-0 bg-navy/[0.06]"
              style={{ clipPath: 'polygon(0 0, 50% 38%, 0 100%)' }}
            />
            <div
              className="absolute inset-0 bg-navy/[0.06]"
              style={{ clipPath: 'polygon(100% 0, 50% 38%, 100% 100%)' }}
            />
            <div
              className="absolute inset-0 bg-navy/[0.03]"
              style={{ clipPath: 'polygon(0 100%, 50% 55%, 100% 100%)' }}
            />
          </div>

          {/* Card sliding out from inside the envelope */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-[84%] h-[78%] bg-warmwhite rounded-sm shadow-xl
              flex flex-col items-center justify-center text-center px-4
              transition-[top] ease-[cubic-bezier(0.22,1,0.36,1)] duration-[1100ms]
              ${stage === STAGE.CLOSED ? 'top-[52%] z-10' : '-top-[58%] z-30'}`}
          >
            <span className="text-2xl sm:text-3xl mb-2">💌</span>
            <p className="font-display italic text-navy text-base sm:text-xl">
              Happy Father&rsquo;s Day
            </p>
            <p className="font-body text-brown text-[11px] sm:text-xs mt-2">
              {envelope.fromText}
            </p>
          </div>

          {/* Flap, folds back like a hinge when opened */}
          <div
            className="absolute inset-x-0 top-0 h-[58%] z-20"
            style={{ perspective: '900px' }}
          >
            <div
              className={`w-full h-full origin-top transition-transform duration-700 ease-in-out
                ${stage !== STAGE.CLOSED ? '[transform:rotateX(180deg)]' : ''}`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div
                className="w-full h-full bg-gold-dark"
                style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
              />
            </div>
          </div>

          {/* Wax seal */}
          {stage === STAGE.CLOSED && (
            <>
              <span className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gold/40 animate-pulse-soft z-30" />
              <button
                onClick={handleOpen}
                aria-label="Open your card"
                className="wax-seal absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 z-30
                  w-16 h-16 rounded-full flex items-center justify-center
                  text-warmwhite font-display text-sm tracking-wide
                  hover:scale-110 active:scale-95 transition-transform duration-300"
              >
                {envelope.sealText}
              </button>
            </>
          )}
        </div>

        {stage === STAGE.CLOSED && (
          <p className="text-cream/60 text-sm mt-8 font-body tracking-wide animate-fade-in">
            Tap the seal to open
          </p>
        )}
      </div>
    </div>
  )
}
