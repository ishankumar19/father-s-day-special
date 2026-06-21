import { useEffect, useRef, useState } from 'react'
import content from '../data/content.js'

// Floating play/pause control for optional background music. Drop an mp3
// at /public/music/background-music.mp3 (or update content.js to point
// elsewhere) to enable it — if the file isn't found, the button quietly
// disables itself instead of breaking anything.
export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [unavailable, setUnavailable] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const handleError = () => setUnavailable(true)
    audio.addEventListener('error', handleError)
    return () => audio.removeEventListener('error', handleError)
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio || unavailable) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setUnavailable(true))
    }
  }

  return (
    <>
      {/* Swap the src in src/data/content.js, not here */}
      <audio ref={audioRef} src={content.music.src} loop preload="none" />

      <button
        onClick={toggle}
        disabled={unavailable}
        aria-label={playing ? 'Pause background music' : 'Play background music'}
        title={
          unavailable
            ? 'Add a music file to /public/music to enable this'
            : content.music.title
        }
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center
          border-2 border-gold bg-navy shadow-card transition-all duration-300
          ${unavailable ? 'opacity-40 cursor-not-allowed' : 'hover:scale-110 active:scale-95'}`}
      >
        <span className={`text-xl ${playing ? 'animate-spin-slow' : ''}`} aria-hidden="true">
          {playing ? '🎵' : '🎶'}
        </span>
      </button>
    </>
  )
}
