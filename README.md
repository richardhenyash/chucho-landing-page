
# React + Redux Toolkit + MDX + Vite Starter

A minimal starter using React (TypeScript), Redux Toolkit for state, MDX for content, Vite for bundling, and a centered Bootstrap navbar implemented with Reactstrap.

## Prerequisites
- Node.js 18+
- npm or yarn

## Install & Run
```bash
npm install
npm run dev
# open http://localhost:5173
```

## Build & Preview
```bash
npm run build
npm run preview
```

## Structure
```
src/
  components/NavBar.tsx       # Centered Reactstrap navbar
  content/*.mdx               # MDX pages (Home, About, Contact)
  store/contentSlice.ts       # MDX pages imported via Redux Toolkit
  store/index.ts, hooks.ts    # Typed store and hooks
  App.tsx                     # Renders current MDX page
  main.tsx                    # Entry, Redux Provider, Bootstrap CSS
```

## Notes
- MDX files are imported directly as React components via `@mdx-js/rollup`.
- Redux serializable checks are disabled for the content slice because MDX components are non-serializable.
- The navbar is centered using Bootstrap utility classes with Reactstrap components.
