# Context

## Summary
- Monorepo for an on-chain ticketing system with a Next.js UI, Express backend, Ponder indexer, and Solidity contracts. Shared TS types/utilities live in `shared`.

## Architecture
- UI: `apps/web` (Next.js) calls backend REST and reads on-chain via `viem/ethers`.
- Backend: `packages/backend` (Express + TypeScript) exposes REST endpoints.
- Indexer: `packages/syncer` (Ponder) ingests chain data for derived state.
- Contracts: `packages/contracts` (Foundry/Hardhat) emit events; TS artifacts in `packages/contracts/ts-artifacts` and `typechain-types/`.

## Tooling
- Package manager: `pnpm` (pinned via root `package.json` `packageManager: pnpm@8.14.3`).
- Task runner: Turborepo; use `pnpm build`, `pnpm dev`, `pnpm lint` at the root.
- Per-package tasks: use `pnpm -F <workspace>` (e.g., `pnpm -F shared build`).

## Decisions
- YYYY-MM-DD: (Add important decisions with short rationale.)

## Glossary
- (Add key domain terms and brief definitions.)
