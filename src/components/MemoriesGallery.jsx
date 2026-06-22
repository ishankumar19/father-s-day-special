import { useMemo } from 'react'
import content from '../data/content.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import PhotoFrame from './PhotoFrame.jsx'

// Small fixed rotation pattern so polaroids look hand-placed without
// shifting on every re-render (no Math.random in the render body).
const ROTATIONS = ['-rotate-3', 'rotate-2', '-rotate-1', 'rotate-3', '-rotate-2', 'rotate-1']
const TAPE_COLORS = ['bg-gold/70', 'bg-heart/60', 'bg-brown/50']

function Polaroid({ src, caption, index }) {
  const rotation = ROTATIONS[index % ROTATIONS.length]
  const tape = TAPE_COLORS[index % TAPE_COLORS.length]

  return (
    <Reveal delay={(index % 6) * 90} className="break-inside-avoid mb-6">
      <div
        className={`group relative bg-warmwhite p-3 pb-9 shadow-card ${rotation}
          hover:rotate-0 hover:-translate-y-1.5 hover:shadow-gold
          transition-all duration-400 ease-out`}
      >
        {/* Washi tape accent */}
        <span
          className={`absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 ${tape} rotate-[-4deg] opacity-90 shadow-sm`}
          aria-hidden="true"
        />

        <div className="overflow-hidden">
          <PhotoFrame
            src={src}
            alt={caption}
            className="w-full h-44 sm:h-52 transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <p className="font-script text-navy text-lg text-center mt-3 leading-none">
          {caption}
        </p>
      </div>
    </Reveal>
  )
}

export default function MemoriesGallery() {
  const { memories } = content
  // Memoized purely to avoid recalculating on unrelated parent re-renders.
  const items = useMemo(() => memories, [memories])

  return (
    <section id="gallery" className="paper py-20 md:py-28 px-6">
      <SectionHeading
        eyebrow="Keepsakes"
        title="Memories Gallery"
        subtitle="A few snapshots worth keeping. Add your own in /public/images — the layout takes care of the rest."
        tone="navy"
      />

      <div className="columns-2 sm:columns-3 gap-6 max-w-5xl mx-auto">
        {items.map((m, i) => (
          <Polaroid key={m.src} src={m.src} caption={m.caption} index={i} />
        ))}
      </div>
    </section>
  )
}
