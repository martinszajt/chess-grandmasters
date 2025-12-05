# Chess Grandmasters — Quick Bootstrap

## Quick start

1. Install dependencies
```sh
npm install
```

2. Run dev server
```sh
npm run dev
```

3. Build for production
```sh
npm run build
```

## What this app does

A small Next.js app that lists titled chess grandmasters and shows a player profile. It uses:
- Client-side data fetching with React Query.
- Internal Next API routes that proxy the external chess API.
- Robohash avatars for users.

## Key scripts

- `npm run dev` — start Next.js in development.
- `npm run build` — production build.
- `npm run start` — start production server.

## Notes / Tips

- Images domain is configured in `next.config.js` for `robohash.org`.
- React Query is configured with infinite stale time by default in [`Providers`](src/components/Providers/index.tsx) (so list caching persists).
- Internal API routes proxy the Chess.com public API to avoid CORS and keep fetch logic server-side.

## Project structure

Top-level source: [`src/`](src)

Main folders:
- [`src/app/`](src/app) — Next.js app routes and API
- [`src/components/`](src/components) — UI components
- [`src/hooks/`](src/hooks) — react-query hooks
- [`src/api/`](src/api) — HTTP client wrapper
- [`src/config/`](src/config) — endpoints & constants
- [`src/utils/`](src/utils) — helpers
