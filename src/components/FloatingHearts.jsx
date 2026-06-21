import { useMemo } from 'react'

const SYMBOLS = ['❤️', '✨', '⭐']

// Ambient, decorative particles that drift slowly upward. Used behind the
// hero and again briefly as a "confetti burst" when the envelope opens.
// Purely CSS-driven (the floatUp keyframe lives in tailwind.config.js) so
// it stays cheap even with quite a few particles on screen.
export default function FloatingHearts({ count = 18, className = '' }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      symbol: SYMBOLS[i % SYMBOLS.length],
      left: Math.random() * 100,
      size: 0.9 + Math.random() * 1.1,
      duration: 9 + Math.random() * 8,
      delay: Math.random() * 10,
      opacity: 0.35 + Math.random() * 0.4,
    }))
  }, [count])

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 animate-float select-none"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}rem`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  )
}
