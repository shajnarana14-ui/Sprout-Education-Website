# Sprout Education Consultancy

A responsive React redesign for Sprout Education Consultancy, built with Vite and React Router.

## Brand palette

The colors were sampled from the supplied Sprout logo:

- Primary teal — `#029297`: navigation accents, links and trust-focused brand surfaces.
- Secondary green — `#49BE8D`: supportive highlights, progress states and success elements.
- Accent raspberry — `#D31146`: high-intent actions and the logo’s “Education” color.
- Deep ink — `#123439`: headings, footer and high-contrast backgrounds.
- Soft mint — `#E9F7F1`: subtle backgrounds and selected states.
- Warm white — `#F5FAF8`: section backgrounds.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

Deploy the generated `dist` directory to Netlify, Vercel, Cloudflare Pages, or any HTTPS static host. Configure the host to serve `index.html` for unknown routes so React Router can handle `/contact`.

## Project structure

```text
src/
  components/   Reusable page sections, navigation and form
  data/         Destinations, FAQs, testimonials and navigation content
  pages/        Lazy-loaded route components
  App.jsx       Router and global layout
  main.jsx      React entry point
  styles.css    Brand system and responsive styling
public/
  sprout-logo.png
```

## Form integration

The contact form validates and sanitizes input client-side without using `dangerouslySetInnerHTML`. Before launch, connect its successful submit branch to a secure HTTPS server endpoint or a trusted form provider. Repeat validation and sanitization on the server, add rate limiting/CSRF protection where appropriate, and never place API keys in client code.

## Performance and accessibility

Routes are code-split with `React.lazy`, imagery uses native lazy loading, animations honor reduced-motion preferences, the navigation is keyboard accessible, and page structure uses semantic headings and landmarks.
