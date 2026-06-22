import { useEffect, useRef, useState } from 'react'

// Lightweight scroll-reveal hook — no animation library required.
// Returns a ref to attach to an element and a boolean that flips to
// true once the element has scrolled into view (and stays true).
export default function useReveal(options = {}) {
  const { threshold = 0.18, rootMargin = '0px 0px -60px 0px' } = options
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // If the browser can't do IntersectionObserver for some reason,
    // just show the content immediately rather than hiding it forever.
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, isVisible]
}
