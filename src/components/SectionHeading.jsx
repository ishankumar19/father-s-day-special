import Reveal from './Reveal.jsx'

// Shared heading treatment used at the top of every section — keeps the
// "eyebrow label + serif title + gold rule" rhythm consistent throughout.
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = 'navy', // 'navy' text on cream sections, 'cream' text on navy sections
}) {
  const textColor = tone === 'navy' ? 'text-navy' : 'text-warmwhite'
  const subColor = tone === 'navy' ? 'text-brown' : 'text-cream/70'

  return (
    <Reveal className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
      {eyebrow && (
        <span className="inline-block font-body text-xs md:text-sm tracking-[0.25em] uppercase text-gold mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display ${textColor} text-3xl sm:text-4xl md:text-5xl leading-tight`}>
        {title}
      </h2>
      <div className="foil-rule w-20 mx-auto mt-6 mb-6" />
      {subtitle && (
        <p className={`font-body ${subColor} text-base md:text-lg leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
