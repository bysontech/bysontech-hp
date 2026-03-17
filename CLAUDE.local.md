# Project-local Rules

## Project identity
- Project: template-a-poc-dev
- Repo: https://github.com/bysontech/template-a-poc-dev
- Owner/Brand: BysonTech

## Tech stack (brief)
- Cloudflare Pages + Astro + TailwindCSS + TypeScript

## Allowed change areas
- Safe paths: src/, public/, docs/, .github/, scripts/
- Avoid paths (touch only if asked): (none)

## Commands (must be accurate)
- Install: npm ci
- Lint: npm run lint
- Typecheck: npm run typecheck
- Test: npm test
- Build: npm run build

## Definition of Done
- CI passes
- No secrets added
- PR includes summary + how-to-test
- Docs updated if behavior changes

## Notes
- This is Template A: Static Content type (Cloudflare Pages + Astro + TailwindCSS)
- Tests are not configured yet; `npm test` returns success with a message
- Use `npm run dev` for local development
