# ZENTRIX Hotels architecture — Milestone 01

## Scope

This milestone establishes the repository and service foundations. It deliberately does not implement customer authentication, availability, reservations, payments, hotel administration workflows, or AI features. Homepage hotel cards and rates are design placeholders, not live inventory or offers.

## Workspace

`apps/web` is the Next.js App Router storefront shell. Tailwind CSS 4 is wired through its PostCSS plugin. `apps/api` is the NestJS modular REST boundary under `/api/v1`. `apps/ai` is an independently run FastAPI service and is not called by the API yet. `packages/contracts` contains shared TypeScript response shapes. The database schema and migrations live with the API owner in `apps/api/prisma`.

## Data model

The initial MySQL 8.4 catalog schema contains `Tenant` and `Hotel`. IDs are UUID strings stored as `CHAR(36)`. Tenant-owned hotel rows carry a required `tenant_id`, foreign key, and compound indexes. Hotel slugs are unique per tenant. This makes ownership explicit in the schema; authorization and tenant-scoped query enforcement still need to be implemented before exposing tenant data. Financial values must use Prisma `Decimal` / SQL `DECIMAL` and API decimal strings when inventory pricing is added.

Migrations are versioned in Prisma's migration directory. Prisma 7 database URLs belong in `prisma.config.ts`; the schema only declares the MySQL provider. Prisma Client generation uses a checked-in schema and ignored generated output. Keep development changes in `prisma migrate dev`; deployment uses `prisma migrate deploy`.

## Runtime and security defaults

- Compose binds MySQL and Redis ports to loopback only and requires user-supplied passwords from an ignored root `.env` file.
- Nest enables Helmet, request DTO validation defaults (`whitelist`, reject unknown properties, transform), bounded global rate limiting, and an allowlist CORS origin from `WEB_ORIGIN` (disabled when unset).
- Environment examples contain blank secret fields; no real credentials are committed.
- `/health` in web, `/api/v1/health` in the API, and `/health` in FastAPI report process liveness only. They do not promise database or Redis readiness.
- Authentication, role authorization, request-specific tenant isolation, audit events, webhook verification, and production secret management remain future work.

## Local dependency setup

Copy the root `.env.example` to `.env`; fill unique local MySQL root/app and Redis passwords. Copy `apps/api/.env.example` to `apps/api/.env` and configure its URL to match the app database values. Use URL-encoded characters in passwords when required by a MySQL URL. Then start Compose, generate Prisma Client, and apply the initial migration as described in the root README.

## Validation

`pnpm validate` runs package lint/typecheck/tests and the dependency-free `scripts/validate_foundation.py` structural check. AI service tests use pytest and require `apps/ai` dev extras. API and web build verification requires Node/pnpm dependencies. External Unsplash imagery on the homepage requires network access in the browser.

## Milestone follow-up

1. Add readiness checks that probe MySQL and Redis without conflating them with liveness.
2. Add auth, tenant membership and authorization modules; test tenant isolation in every repository query.
3. Add hotel room/rate/availability domain tables, decimal price models, and transaction-safe booking boundaries.
4. Add migrations and integration tests against ephemeral MySQL 8.4; configure CI and dependency lockfile.
5. Replace static homepage sample content with validated API contracts and accessible search controls.
