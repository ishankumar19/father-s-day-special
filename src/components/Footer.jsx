import content from '../data/content.js'

export default function Footer() {
  const { closing } = content
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-dark border-t border-gold/20 py-12 px-6 text-center">
      <p className="font-script text-gold text-3xl sm:text-4xl">Happy Father&rsquo;s Day ❤️</p>
      <p className="font-body text-cream/50 text-xs sm:text-sm mt-4 tracking-wide">
        {closing.footerNote}
      </p>
      <p className="font-body text-cream/30 text-[11px] mt-2">{year}</p>
    </footer>
  )
}
