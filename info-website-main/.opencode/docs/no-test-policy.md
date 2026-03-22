# No-Test / Smoke-Script Policy

- Continuation anchor: `03fa38cb-7581-43f9-aa47-d6afd98cc11c`
- Last updated: `2026-03-22T11:10:46+01:00`
- Scope: reviewer verification requirements for the current workspace.

## Current script inventory
- `npm run check`: available
- `npm run build`: available
- `npm run smoke:test`: available (`tsx script/smoke-test.ts`)
- `npm run test`: **not defined** in `package.json`

## Policy
- `npm run smoke:test` is a required passing gate for reviewer closure.
- `npm run test` remains the only package-script gap and is treated as **non-blocking N/A inventory evidence** for this mission.
- Reviewer closure also requires:
  - `lsp_diagnostics(file="*", include_warnings=true)`
  - `npm run check`
  - `npm run build`
  - locale parity recomputation
  - shared-ledger synchronization

## Fresh evidence
- `npm run smoke:test` passed during the fresh reviewer rerun (`2026-03-22T11:05:15+01:00` start), serving `http://127.0.0.1:43115`, validating homepage HTML, and asserting `/api/contact` responses `201` (valid payload) and `400` (invalid payload).
- `npm run test` still returned `Missing script: "test"` at `2026-03-22T11:07:39+01:00` and therefore remains inventory-only, not a blocking gate.

## Smoke gate contract
- Entry point: `script/smoke-test.ts`
- Package command: `npm run smoke:test`
- Required assertions:
  - start the local app server on `SMOKE_PORT` (default `43115`)
  - wait for homepage readiness at `GET /`
  - require homepage HTML to return `200`
  - require `POST /api/contact` to return `201` for a valid payload and `400` for an invalid payload
  - exit non-zero when startup, homepage, or contact assertions fail

## Rationale
- This continuation now relies on a concrete smoke gate rather than a missing-script exception for `SYNC-7`, while keeping truthful documentation for the still-absent `npm run test` script.
