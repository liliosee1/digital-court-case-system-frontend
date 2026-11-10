# Digital Court Case Tracking and Scheduling System

Frontend for Gasabo Primary Court, built with Next.js App Router, TypeScript strict mode and Tailwind CSS. It uses the supplied Rwanda flag colours and the court dashboard design tokens.

## Run locally

1. Install Node.js 18.17 or newer.
2. Copy `.env.example` to `.env.local`.
3. Run `npm install`, then `npm run dev`.
4. Open `http://localhost:3000`.

Use `npm run lint`, `npm run type-check` and `npm run build` for checks and production build.

Development and production builds use separate Next.js output folders to prevent stale Webpack chunks when switching between `npm run dev` and `npm run build`. If the dev server is already running, stop it with `Ctrl+C` and restart `npm run dev` after pulling configuration changes.

## Demo roles

Sign in at `/login` with one of these emails and the password `password`:

- `admin@gasabo.gov.rw` — administrator
- `registrar@gasabo.gov.rw` — registrar
- `judge@gasabo.gov.rw` — judge
- `advocate@gasabo.gov.rw` — advocate

The demo session uses a role cookie. Role menus and route permissions are defined in `src/lib/nav.ts` and `src/middleware.ts`; `/track` remains public. Sign out and sign back in with a different role email to review the role-specific screens.

## Mock data and backend

Mock data is enabled by default. Set `NEXT_PUBLIC_USE_MOCKS=true` to use the in-memory services in `src/lib/api/mocks`. To use Django REST, set `NEXT_PUBLIC_USE_MOCKS=false` and set `NEXT_PUBLIC_API_URL` to the API root. All HTTP requests are routed through `src/lib/api/client.ts`; service endpoints and expected response shapes are documented in [docs/API_CONTRACT.md](docs/API_CONTRACT.md).

Mock changes are held in memory and reset on refresh. Sample names and contact details are placeholders. Screens use the simplest available controls where the brief did not define a full workflow.
