# Repository Guidelines

## Project Structure & Modules
- Monorepo managed by `pnpm` and `turbo`.
- Apps: `apps/web` (Next.js UI).
- Services: `packages/backend` (Express + TypeScript), `packages/syncer` (Ponder indexer/API).
- Smart contracts: `packages/contracts` (Foundry/Hardhat, Solidity + TypeChain).
- Shared library: `shared` (TypeScript types/utilities).

## Build, Test, Run
- Root (all packages via Turbo):
  - `pnpm build` — build all workspaces.
  - `pnpm dev` — run dev tasks (UI, services) in parallel.
  - `pnpm lint` — lint all workspaces.
- Per package (filter):
  - `pnpm -F web dev` — Next.js dev server.
  - `pnpm -F backend dev` — API dev mode.
  - `pnpm -F @repo/contracts run build:dev` — compile contracts + TS artifacts.
  - `pnpm -F ponder-examples-reference-erc20 dev` — run the syncer locally.
- Contracts testing: from `packages/contracts` run `forge test -vvv`.

## Coding Style & Naming
- Language: TypeScript (2-space indent, Prettier defaults) and Solidity.
- Lint: ESLint via shared configs in `packages/eslint-config`.
- Format: `pnpm format` at repo root; pre-commit, run `pnpm lint && pnpm format`.
- Naming: kebab-case for folders, PascalCase for React components, camelCase for variables/functions, UPPER_SNAKE_CASE for constants.

## Testing Guidelines
- Solidity: tests live in `packages/contracts/test`; use Foundry (`forge test`).
- JS/TS: no formal unit tests yet in app/services; prefer adding `vitest` colocated under `__tests__` with filenames `*.test.ts`.
- Strive for happy-path and critical error-path coverage on new code.

## Commits & Pull Requests
- Commit messages: imperative and concise; include scope when helpful (e.g., `backend: add seat layout API`).
- Reference issues in the body (`Closes #123`).
- PRs: clear description, screenshots for UI changes, reproduction steps for bugs, and checklist of affected packages. Link related issues.

## Security & Configuration
- Do not commit secrets. Use env files:
  - Backend: `.env` (e.g., `PORT=4000`).
  - Syncer: see `packages/syncer/.env.example` (`PONDER_RPC_URL_1`, `DATABASE_URL`).
- Prefer `.env.local` per app; Turbo watches `**/.env.*local`.

## Architecture Notes
- UI calls `packages/backend` REST endpoints and reads on-chain via `viem/ethers`.
- Indexer (`packages/syncer`) ingests chain data for derived state.
- Contracts emit events consumed by the syncer; TS artifacts are generated for the frontend/backend under `packages/contracts/ts-artifacts` and `typechain-types/`.

## Agent Session & Context Persistence

These instructions are for any agent (and humans) working in this repo to keep context across sessions.

### Read First (every session)
- Perform a quick repo-wide context scan (list workspaces, key scripts, env examples) to gain context on the whole repo at start.
- Read `AGENTS.md` (this file) to load conventions and workflow.
- Read `CONTEXT.md` for project overview, decisions, and glossary.
- Read `PLAN.md` to load the active plan; ensure exactly one item is in progress.
- Read the most recent dated section in `SESSION_LOG.md` for continuity.

If any of these files are missing, create them using the templates below and proceed.

### Work Loop (during the session)
- Mirror `PLAN.md` with the agent's `update_plan` tool:
  - Keep one `in_progress` item at a time.
  - Update statuses as work advances.
- Record notable decisions or terminology in `CONTEXT.md` under a dated "Decisions" subsection.
- Follow repo commands and conventions above (pnpm/turbo, lint/format, testing).

### Session Log Updates (after successful changes)
- After each successful change (e.g., an `apply_patch` that succeeds, a file add/update, or config edit), append a bullet to today's section in `SESSION_LOG.md`.
- If today's date section doesn't exist, create a new `## YYYY-MM-DD` heading at the top with the new bullet.
- Bullet format: `- change: <files/areas>; rationale: <why>; follow-up: <next>`.
- Keep entries concise; coalesce minor tweaks into a single bullet to avoid noise (aim for ≤4 bullets per date).
- If sandbox/approvals block writing, include the exact bullet text in the assistant output; once changes are applied, add it to `SESSION_LOG.md`.
- Never include secrets or sensitive values; reference env file locations instead.

### Close Out (end of session)
- Append a new dated entry to `SESSION_LOG.md` with:
  - What changed (files/areas), key decisions, risks/open questions.
  - Next session: 2–5 concrete bullets.
- Update `PLAN.md` so it reflects reality (in-progress, next, blocked, done).
- Do not store secrets; reference `.env(.local)` locations only.

### File Templates (use when files are missing)

`CONTEXT.md`
```
# Context

## Summary
- One or two sentences on the project goals.

## Architecture
- UI: `apps/web` (Next.js) → Backend: `packages/backend` → On-chain via viem/ethers.
- Indexer: `packages/syncer` (Ponder) for derived state.
- Contracts: `packages/contracts` emit events; TS artifacts in `packages/contracts/ts-artifacts` and `typechain-types/`.

## Decisions
- YYYY-MM-DD: Short decision and rationale.

## Glossary
- Term: short definition.
```

`PLAN.md`
```
# Plan

## In Progress
- Single, concise item describing current focus.

## Next
- 3–7 queued items, each 1 line.

## Blocked
- Item — owner — unblock condition.

## Done
- YYYY-MM-DD: short outcome bullets.
```

`SESSION_LOG.md`
```
# Session Log

## YYYY-MM-DD
- What we did: 2–5 bullets referencing files/areas.
- Key decisions: bullets.
- Risks / open questions: bullets.
- Next session: 2–5 bullets.
```

### Scope & Overrides
- This AGENTS.md applies to the entire repo unless a deeper directory provides its own `AGENTS.md`; deeper files take precedence for their subtree.
- Per-package overrides are allowed in `apps/*` or `packages/*` when behavior diverges.

### Quality Bar
- Keep changes minimal, focused, and aligned with existing style.
- Prefer root-cause fixes over superficial patches.
- Lint and format (`pnpm lint && pnpm format`) before concluding substantial work.
