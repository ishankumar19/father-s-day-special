import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config — no special setup needed for Vercel.
// Vercel auto-detects this as a Vite app and runs `npm run build`,
// then serves the generated `dist` folder.
export default defineConfig({
  plugins: [react()],
})
