Put your photos in this folder, then point to them from src/data/content.js.

Expected filenames (already wired up in content.js):

  memory-1.jpg ... memory-6.jpg   → Memories Gallery polaroids
  timeline-1.jpg ... timeline-4.jpg → Timeline section photos

You can use any filenames you like — just update the matching "src" /
"image" paths in src/data/content.js to match. Any photo missing or not
yet added will automatically show a soft placeholder instead of a broken
image, so it's safe to deploy before all photos are ready.

Recommended: JPG or PNG, roughly 800–1200px on the longest side, so the
site stays fast to load.
