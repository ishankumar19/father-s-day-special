// ============================================================================
// SITE CONTENT — edit everything here. None of the components below contain
// hard-coded personal text, so this is the only file you need to touch to
// make the site yours.
// ============================================================================

const content = {
  // --- Envelope / opening card -------------------------------------------
  envelope: {
    label: "A Card For You",
    sealText: "Open",
    fromText: "From all of us, to the best Dad",
  },

  // --- Hero ----------------------------------------------------------------
  hero: {
    eyebrow: "Happy Father's Day",
    // Use \n where you'd like a manual line break in the headline.
    title: "To the man who taught us\nhow to be brave.",
    subtitle:
      "Some people get a hero in storybooks. We got one in real life — and he's ours. Today is for you, Dad.",
    ctaPrimary: "Read Your Letter",
    ctaSecondary: "See Our Memories",
  },

  // --- Hidden messages — small buttons that reveal a surprise note ---------
  // Shown as a row of tap-to-reveal cards between the hero and the reasons
  // section. Add or remove as many as you like.
  secrets: [
    {
      label: "Tap for a secret",
      message: "You don't say it often, but we know you're proud of us. We can tell.",
    },
    {
      label: "Tap for a memory",
      message: "Remember teaching us to ride a bike, running behind us the whole street, refusing to let go until we asked you to?",
    },
    {
      label: "Tap for a confession",
      message: "We used to think you knew everything. Now we just think you tried harder than anyone else we know.",
    },
  ],

  // --- "Reasons Why You're the Best Dad" — flip cards ----------------------
  // Add, remove, or reorder as many as you like.
  reasons: [
    {
      icon: "🛠️",
      title: "You fix everything",
      back: "Bikes, hearts, bad days — there was never a problem you couldn't make a little less scary just by showing up.",
    },
    {
      icon: "📞",
      title: "You always pick up",
      back: "Any hour, any reason, any mood. The phone rings twice and you're already there.",
    },
    {
      icon: "💪",
      title: "You make hard look easy",
      back: "We never saw how much you carried — you made sure of that. We see it now.",
    },
    {
      icon: "😂",
      title: "Your jokes are still terrible",
      back: "And we still laugh every time. Some things just don't get old, Dad.",
    },
    {
      icon: "🌱",
      title: "You let us grow",
      back: "You held on tight when we needed it, and let go just enough for us to find our own way.",
    },
    {
      icon: "❤️",
      title: "You love quietly",
      back: "Not in big speeches, but in the small, constant ways. We noticed every single one.",
    },
  ],

  // --- Timeline --------------------------------------------------------------
  // image: path to a photo in /public/images — falls back to a soft icon
  // card automatically if the file isn't there yet.
  timeline: [
    {
      year: "The Beginning",
      title: "The day everything changed",
      text: "You held us for the first time and somehow already knew exactly what to do.",
      image: "/images/timeline-1.jpg",
    },
    {
      year: "First Steps",
      title: "Right behind us, every time",
      text: "Arms out, ready to catch us — that never really stopped, did it?",
      image: "/images/timeline-2.jpg",
    },
    {
      year: "Growing Up",
      title: "Lessons we didn't know we needed",
      text: "How to ride a bike, how to lose gracefully, how to keep trying anyway.",
      image: "/images/timeline-3.jpg",
    },
    {
      year: "Today",
      title: "Still our person",
      text: "Different season, same Dad. Still the first call, still the safest place.",
      image: "/images/timeline-4.jpg",
    },
  ],

  // --- Memories gallery --------------------------------------------------
  // Drop your photos into /public/images and update the src + caption below.
  // The polaroid card will automatically show a placeholder until then.
  memories: [
    { src: "/images/memory-1.jpg", caption: "Summer, a long time ago" },
    { src: "/images/memory-2.jpg", caption: "Your favorite chair" },
    { src: "/images/memory-3.jpg", caption: "That trip we never forgot" },
    { src: "/images/memory-4.jpg", caption: "Sunday mornings" },
    { src: "/images/memory-5.jpg", caption: "Birthdays, always candles" },
    { src: "/images/memory-6.jpg", caption: "Just us" },
  ],

  // --- Handwritten letter ---------------------------------------------------
  letter: {
    heading: "A Letter to You",
    greeting: "Dear Dad,",
    // Each array item becomes its own paragraph.
    paragraphs: [
      "There's no card big enough to hold everything we mean to say, so we're just going to keep it simple: thank you.",
      "Thank you for the early mornings, the late nights, the patience you didn't always show but always had. Thank you for teaching us, without ever really sitting us down to do it, what it means to show up for the people you love.",
      "We don't say it enough, so we're saying it today — we see everything you've done for us, even the things you never mentioned.",
      "We love you more than we know how to say. Happy Father's Day.",
    ],
    signature: "With all our love",
  },

  // --- Background music ----------------------------------------------------
  // Drop an mp3 into /public/music and point this at it. The player hides
  // itself gracefully if the file can't be found.
  music: {
    src: "/music/background-music.mp3",
    title: "Our Song for You",
  },

  // --- Closing / footer ------------------------------------------------------
  closing: {
    heading: "However you celebrate today —",
    message:
      "we hope it's filled with everything you've given us, all year, every year.",
    footerNote: "Made with love, for the best Dad there is.",
  },
}

export default content
