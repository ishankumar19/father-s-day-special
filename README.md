# Happy Father's Day 💌

A small, personal Father's Day tribute site — an animated greeting card that
opens into a hero message, a gallery of memories, flip cards, a timeline,
and a handwritten-style letter. Built with React, Vite, and Tailwind CSS.
No backend, no database, nothing to configure — just edit a few values and
deploy.

## Quick start

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## Make it yours

Everything personal lives in **one file**: `src/data/content.js`. Open it
and edit the text for the hero message, the reasons cards, the timeline,
the gallery captions, and the letter. Every section reads from this file,
so you never need to touch the component code just to change words.

**Photos:** drop image files into `public/images/` and update the matching
paths in `content.js`. Any photo that isn't there yet shows a soft
placeholder automatically, so the site never looks broken while you're
still collecting pictures.

**Music (optional):** drop an mp3 at `public/music/background-music.mp3`
(or change the path in `content.js`). The play/pause button in the
bottom-right corner picks it up automatically, and quietly disables itself
if no file is found.

**Colors & fonts:** the whole palette (navy, gold, cream, brown, white) and
type families live in `tailwind.config.js` and the `<link>` tags in
`index.html`, in case you want to retint or restyle things.

## Project structure

```
src/
  data/content.js        ← all editable text, image paths, and music path
  hooks/useReveal.js      ← scroll-entrance-animation hook
  components/
    GreetingCard.jsx      ← the opening envelope/card animation
    FloatingHearts.jsx    ← ambient floating hearts/stars
    Hero.jsx              ← hero section
    HiddenMessages.jsx    ← tap-to-reveal hidden notes
    ReasonsCards.jsx      ← "Reasons Why You're the Best Dad" flip cards
    Timeline.jsx          ← memorable moments timeline
    MemoriesGallery.jsx   ← polaroid-style photo gallery
    PhotoFrame.jsx        ← image component with graceful placeholder fallback
    Letter.jsx            ← handwritten-style letter
    Closing.jsx           ← closing message
    Footer.jsx            ← "Happy Father's Day ❤️" footer
    MusicPlayer.jsx        ← floating play/pause button
  App.jsx                  ← wires all the sections together
public/
  images/                  ← put your photos here
  music/                   ← put your mp3 here (optional)
```

## Deploying to Vercel

1. Push this folder to a GitHub repo (or use the Vercel CLI directly).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects this as a Vite project — no configuration needed.
   Build command: `npm run build`, output directory: `dist`.
4. Click Deploy.

Or from the command line, inside this folder:

```bash
npm i -g vercel
vercel
```

## Notes

- Built with plain CSS animations and the IntersectionObserver API — no
  animation library required, so the project stays small and fast.
- Respects `prefers-reduced-motion` for visitors who've turned down motion
  in their OS settings.
- Fully responsive, from small phones up through large desktop screens.
