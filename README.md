# Spotify Clone - Astro, React JS y TailwindCSS

## 📚 Description

This repository holds a clone of the popular Spotify music service built using Astro, a modern front-end site generator that provides incredibly fast performance. This project has been carried out to learn how modern web applications are built using Astro.

## ✨ Features

- User interface similar to Spotify.
- Music playback functionality.
- Search, playlists, and user profile features.
- Responsive design adaptable to different devices.

## 🚀 Project Structure

Inside of this Astro project, you'll see the following folders and files:

```text
/
├── public/
│   ├── fonts/
│   ├── music/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── AsideMenu.astro
│   │   ├── CardPlayButton.jsx
│   │   ├── Greeting.tsx
│   │   ├── Player.jsx
│   │   ├── PlaylistItemCard.astro
│   │   ├── SideMenuCard.astro
│   │   ├── SideMenuItem.astro
│   │   ├── Slider.tsx
│   │   └── SongsTable.astro
│   ├── icons/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── lib/
│   │   ├── colors.ts
│   │   └── data.ts
│   └── pages/
│       ├── playlist/
│       │   └── [id].astro
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |
