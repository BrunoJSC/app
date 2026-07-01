# CI/CD

GitHub Actions pipelines for the monorepo (Bun + Turborepo).

## Workflows

| Workflow | File | Trigger | What it does |
| --- | --- | --- | --- |
| **CI** | `ci.yml` | every PR + push to `main` | Biome lint on **changed files only** (`biome check --changed`) + `turbo run check-types build` |
| **Deploy Web** | `deploy-web.yml` | PR (preview) + push to `main` (prod) | Deploys `apps/web` to Vercel |
| **Deploy Server** | `deploy-server.yml` | push to `main` (server/packages) + manual | Builds `apps/server` Docker image, pushes to GHCR |
| **EAS Build** | `eas-build.yml` | manual (`workflow_dispatch`) | Runs `eas build` for the Expo app |

## Required repository secrets

Set these under **Settings → Secrets and variables → Actions**.

### Web (Vercel) — `deploy-web.yml`

| Secret | How to get it |
| --- | --- |
| `VERCEL_TOKEN` | Vercel → Account Settings → Tokens |
| `VERCEL_ORG_ID` | `.vercel/project.json` after `vercel link`, or Vercel project settings |
| `VERCEL_PROJECT_ID` | same as above |

Also set the Vercel project's **Root Directory** to `apps/web`, and configure the
app's runtime env vars (e.g. `NEXT_PUBLIC_SERVER_URL`) in the Vercel dashboard.

### Server (Docker → GHCR) — `deploy-server.yml`

No extra secret: uses the built-in `GITHUB_TOKEN`. The image is published to
`ghcr.io/<owner>/<repo>-server`. Provide runtime env (`DATABASE_URL`,
`BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`, `CORS_ORIGIN`) when you run the
container. The server listens on port `3000`.

### Mobile (Expo EAS) — `eas-build.yml`

| Secret | How to get it |
| --- | --- |
| `EXPO_TOKEN` | Expo → Account Settings → Access Tokens |

Run `bun x eas init` once inside `apps/native` to create the EAS project and
write `extra.eas.projectId` into `app.json`.

## Notes

- CI lints **only changed files** (`biome check --changed`) so pre-existing
  lint debt in untouched files doesn't block PRs; new/edited code is still
  held to the standard. Run `bun run check` / `bun run fix` locally for a
  full-repo pass. The workflow enables Biome's VCS integration via CLI flags,
  so `biome.json` is left untouched.
- CI sets `SKIP_ENV_VALIDATION=1` so the build runs without real secrets
  (see `packages/env`). Real values come from Vercel / the container runtime.
- Native has no `build`/`check-types` task, so CI validates it via lint only;
  full validation happens through EAS.
