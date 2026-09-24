# High Click Studio — Vite + React

Cinematic wedding photography studio website (Adyar, Chennai).

## Setup

1. Unzip this folder
2. Drop your **media** folder into `public/media/`
3. Run:

```bash
npm install
npm run dev
```

Open the URL shown (usually http://localhost:5173).

## Structure

```
high-click-studio/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── media/          ← put images, videos, logos here
└── src/
    ├── main.jsx
    ├── App.jsx                 ← composes all sections
    ├── styles.css              ← global styles + responsive breakpoints
    ├── siteEffects.js          ← vanilla interactions (cursor, scroll, carousels…)
    └── components/
        ├── Decor.jsx           ← custom cursor, particles, page dots
        ├── Nav.jsx             ← desktop + mobile navigation
        ├── Hero.jsx
        ├── About.jsx
        ├── Films.jsx           ← portfolio / cinematic films
        ├── Services.jsx
        ├── Destination.jsx
        ├── Testimonial.jsx     ← stories / journal
        ├── Contact.jsx         ← final CTA + form
        ├── Footer.jsx
        ├── Lightbox.jsx
        └── VideoModal.jsx
```

All asset paths use `media/...` so they load from `public/media/`.

## Notes

- The original single-file `App.jsx` (giant HTML string) has been split into focused React components.
- Interactions still live in `siteEffects.js` and are initialized once after mount.
- Existing responsive CSS (multiple `@media` breakpoints from 400px–1200px) is preserved. Further mobile polish can be added in `styles.css`.
