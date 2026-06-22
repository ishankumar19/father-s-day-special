import { useState } from 'react'
import GreetingCard from './components/GreetingCard.jsx'
import Hero from './components/Hero.jsx'
import HiddenMessages from './components/HiddenMessages.jsx'
import ReasonsCards from './components/ReasonsCards.jsx'
import Timeline from './components/Timeline.jsx'
import MemoriesGallery from './components/MemoriesGallery.jsx'
import Letter from './components/Letter.jsx'
import Closing from './components/Closing.jsx'
import Footer from './components/Footer.jsx'
import MusicPlayer from './components/MusicPlayer.jsx'

export default function App() {
  // Controls the opening-envelope overlay. Once the visitor opens (or
  // skips) the card, it unmounts for good for that page visit.
  const [cardOpen, setCardOpen] = useState(false)

  return (
    <div className="min-h-screen bg-navy">
      {!cardOpen && <GreetingCard onFinished={() => setCardOpen(true)} />}

      <main>
        <Hero />
        <HiddenMessages />
        <ReasonsCards />
        <Timeline />
        <MemoriesGallery />
        <Letter />
        <Closing />
      </main>

      <Footer />
      <MusicPlayer />
    </div>
  )
}
