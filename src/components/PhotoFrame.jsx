import { useState } from 'react'

// Renders a photo, or a soft placeholder if the file doesn't exist yet —
// so the gallery and timeline look intentional even before you've added
// your own pictures to /public/images.
export default function PhotoFrame({ src, alt = '', className = '' }) {
  const [errored, setErrored] = useState(false)

  if (errored || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-brown/15 via-gold/10 to-navy/10 ${className}`}
      >
        <span className="text-3xl opacity-50">🖼️</span>
        <span className="font-body text-[11px] text-brown/70 tracking-wide px-3 text-center">
          Add a photo here
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setErrored(true)}
      className={`object-cover ${className}`}
    />
  )
}
