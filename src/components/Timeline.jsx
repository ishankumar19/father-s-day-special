import content from '../data/content.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import PhotoFrame from './PhotoFrame.jsx'

export default function Timeline() {
  const { timeline } = content

  return (
    <section id="timeline" className="bg-navy py-20 md:py-28 px-6 relative overflow-hidden">
      <SectionHeading
        eyebrow="Our Story"
        title="Memorable Moments With Dad"
        subtitle="A few of the chapters we'll never forget."
        tone="cream"
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Center line on desktop, left line on mobile */}
        <div className="absolute top-0 bottom-0 left-5 sm:left-1/2 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent sm:-translate-x-1/2" />

        <div className="flex flex-col gap-12 sm:gap-16">
          {timeline.map((item, i) => {
            const isEven = i % 2 === 0
            return (
              <div key={item.title} className="relative">
                {/* Dot */}
                <span className="absolute left-5 sm:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold shadow-gold z-10" />

                <div
                  className={`flex flex-col sm:flex-row items-start gap-6 pl-14 sm:pl-0
                    ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                >
                  <Reveal
                    delay={100}
                    className={`w-full sm:w-1/2 ${isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}
                  >
                    <span className="font-body text-gold text-xs tracking-[0.2em] uppercase">
                      {item.year}
                    </span>
                    <h3 className="font-display text-warmwhite text-xl sm:text-2xl mt-2 mb-3">
                      {item.title}
                    </h3>
                    <p className="font-body text-cream/75 text-sm sm:text-base leading-relaxed">
                      {item.text}
                    </p>
                  </Reveal>

                  <Reveal delay={220} className="w-full sm:w-1/2">
                    <div className="rounded-xl overflow-hidden shadow-card border border-gold/20 group">
                      <PhotoFrame
                        src={item.image}
                        alt={item.title}
                        className="w-full h-44 sm:h-52 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </Reveal>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
