import content from '../data/content.js'
import Reveal from './Reveal.jsx'

export default function Letter() {
  const { letter } = content

  return (
    <section id="letter" className="bg-navy py-20 md:py-28 px-6 relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(50% 40% at 50% 0%, rgba(199,151,59,0.12) 0%, rgba(20,33,61,0) 70%)',
        }}
        aria-hidden="true"
      />

      <Reveal className="text-center max-w-xl mx-auto mb-12 relative">
        <span className="inline-block font-body text-xs sm:text-sm tracking-[0.25em] uppercase text-gold mb-4">
          From the Heart
        </span>
        <h2 className="font-display text-warmwhite text-3xl sm:text-4xl">{letter.heading}</h2>
      </Reveal>

      <Reveal delay={120} className="relative max-w-2xl mx-auto">
        <div className="torn-edge paper rounded-b-md shadow-card px-7 py-10 sm:px-14 sm:py-14">
          <p className="font-script text-navy text-2xl sm:text-3xl mb-6">{letter.greeting}</p>

          <div className="space-y-5">
            {letter.paragraphs.map((p, i) => (
              <p
                key={i}
                className="font-script text-navy/90 text-xl sm:text-2xl leading-relaxed sm:leading-loose"
              >
                {p}
              </p>
            ))}
          </div>

          <p className="font-script text-navy text-2xl sm:text-3xl mt-10">
            {letter.signature},
            <br />
            <span className="text-gold-dark">Your Family</span>
          </p>
        </div>

        {/* Wax seal accent on the letter */}
        <div className="wax-seal absolute -bottom-5 right-8 sm:right-12 w-12 h-12 rounded-full flex items-center justify-center text-warmwhite text-lg rotate-[8deg]">
          ❤
        </div>
      </Reveal>
    </section>
  )
}
