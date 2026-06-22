import useReveal from '../hooks/useReveal.js'

// Wraps any content and fades/slides it up into place the first time it
// scrolls into the viewport. `delay` is in milliseconds and lets sibling
// elements stagger nicely (see ReasonsCards / Timeline for examples).
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const [ref, isVisible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`${className} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } transition-all duration-700 ease-out`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
