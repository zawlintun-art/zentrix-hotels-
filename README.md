# ZENTRIX Hotels

Global hotel marketplace and hotel management SaaS foundation.

## Stack

- pnpm workspace: Next.js + Tailwind web, NestJS REST API, standalone FastAPI service
- MySQL 8.4 + Prisma ORM 7, Redis for future cache/queue use
- Shared TypeScript API contracts in `packages/contracts`

## Prerequisites

- Node.js 22.12+ and pnpm 10.12+
- Python 3.11–3.13
- Docker Compose v2

## Start locally

1. Copy `.env.example` to `.env`; set unique local `MYSQL_ROOT_PASSWORD`, `MYSQL_PASSWORD`, and `REDIS_PASSWORD` values.
2. Copy `apps/api/.env.example` to `apps/api/.env`, set a `DATABASE_URL` using the same database username/password, and keep the host as `localhost` when running the API on the host.
3. Run `corepack enable` if pnpm is not available, then `pnpm install`.
4. Run `pnpm infra:up` and wait for MySQL health to pass.
5. Run `pnpm db:generate` and `pnpm db:migrate`.
6. Run `pnpm dev` for the web app (`http://localhost:3000`) and API (`http://localhost:4000/api/v1/health`).
7. For the AI service, create and activate a virtual environment with `python -m venv apps/ai/.venv` and `apps/ai/.venv/Scripts/Activate.ps1` (Windows PowerShell), install with `python -m pip install -r apps/ai/requirements.txt`, then run `pnpm dev:ai` (`http://localhost:8001/health`). On macOS/Linux activate `apps/ai/.venv/bin/activate` instead.

For deployed migration jobs, use `pnpm db:deploy`. Never use local example settings as production credentials.

## Validation

Run `pnpm validate` for lint, type checks, unit tests, and structural checks. Python tests require the optional dev dependencies from `apps/ai/requirements.txt`.

See [architecture and setup](docs/architecture.md) for service boundaries, data model scope, security defaults, and known milestone gaps.
