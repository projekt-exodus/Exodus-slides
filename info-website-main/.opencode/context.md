# Project Context

## Environment
- Language: TypeScript (frontend + backend)
- Project runtime target: Node.js 20 (`.replit` module `nodejs-20`)
- Local execution runtime: Node.js v25.6.0 (`node -v`)
- Build: `npm run build` (`tsx script/build.ts`)
- Type Check: `npm run check` (`tsc`)
- Test: `npm run smoke:test` (`tsx script/smoke-test.ts`) is available; generic `npm run test` remains undefined in `package.json`
- Package Manager: npm (`package-lock.json` present; `bun.lock` also present)

## Project Type
- [x] Application (Web)
- [ ] Library/Package
- [ ] Microservice
- [ ] Monorepo
- [ ] Other

## Infrastructure
- Container: None detected (no Dockerfile / docker-compose)
- Orchestration: None detected (no k8s/helm)
- CI/CD: None detected (no GitHub/GitLab/Circle/Jenkins config)
- Cloud/IaC: None detected (no terraform/cloudformation/pulumi/serverless)

## Structure
- Source: `client/src/`, `server/`, `shared/`
- Build Scripts: `script/build.ts`, `vite.config.ts`
- Tests: `script/smoke-test.ts` provides the active smoke gate; current glob still returns no source-managed `test/spec` files and no `__tests__` tree
- Docs: `replit.md`
- Entry Points:
  - Frontend: `client/src/main.tsx`
  - Backend: `server/index.ts`

## Conventions (Observed)
- Naming: PascalCase for React component files, camelCase for variables/functions
- Imports: Path aliases `@/*` and `@shared/*` in frontend/shared, relative imports in server
- Error Handling: Zod `safeParse` for request validation + centralized Express error middleware
- Testing Pattern: `npm run smoke:test` boots the app on an isolated port and validates `/` plus `/api/contact`; generic `npm run test` and in-repo `test/spec` suites remain absent

## Paperclip Heartbeat Snapshot
- Agent: `Replit Swarm CEO` (`308eb0f2-27b0-4c2f-8be5-61875bab11ae`)
- Run ID: `f72e4b0c-9399-4c5e-a763-bca04f8965d6`
- Wake reason: `CPU aktuell bei 59% (<90%). Bitte mehr Agenten parallel starten/delegieren und aktive Umsetzung aufrechterhalten, bis Last stabil im Zielbereich ist.`
- Assigned inbox (`todo,in_progress,blocked`):
  - `EXO-2` (blocked at wake) — Master stabilization mission
- Completed in this heartbeat:
  - `EXO-12` closed as done using production-runtime mobile validation evidence (`ui-validate.mjs mobile` against `:5105`)
  - `EXO-13` probe closed as done after confirming manual checkout works for unassigned issues
  - `EXO-10` detached from `EXO-2` as a separate board-owned platform incident and later closed as done after lock-remediation verification
  - `EXO-2` closed as done with full stabilization deliverables summarized in issue comment
- Active orchestration under `EXO-2`:
  - Final state reached: all EXO-2 child lanes are either `done` or `cancelled`, and mission closure was executed
- Current blocker state:
  - `EXO-2`: no remaining blocker (status `done`)
  - `EXO-10`: detached lane now `done`; active EXO backlog is clear

## Notes
- Current continuation anchor: `ses_20260322_deploy_agent_continuation_static_gate_47` @ `2026-03-22T11:23:57+01:00`.
- Verified technical gates: `lsp_diagnostics(file="*", include_warnings=true)` clean (`2026-03-22T11:23:30+01:00`), `npm run check` pass (`2026-03-22T11:23:26+01:00`), `npm run build` pass (`2026-03-22T11:23:30+01:00`, existing chunk-size warning non-blocking), and `npm run smoke:test` pass with clean exit on `http://127.0.0.1:43115` (`2026-03-22T11:23:40+01:00`; `/api/contact` assertions `201/400`).
- Smoke-gate inventory: `package.json` exposes `scripts["smoke:test"] = "tsx script/smoke-test.ts"`; `script/smoke-test.ts` exists. `npm run test` remains absent and is treated as non-blocking inventory evidence under `.opencode/docs/no-test-policy.md`.
- Continuation expectation: `npm run smoke:test` must start the app, confirm homepage HTML readiness, assert `/api/contact` returns `201` for a valid payload and `400` for an invalid payload, and exit non-zero on failure.
- Locale parity baseline is reconciled to source truth: top-level groups `20/20`, scalar leaf paths `478/478`, drift `0/0` (`2026-03-22T11:23:52+01:00`) and remains documented in `.opencode/docs/exo-7-locale-parity-matrix.md`.
- Continuation expectation: EXO-7 parity stays anchored to source truth (`20/20` top-level groups, `478/478` scalar leaves, drift `0/0`); `22/22` remains retired historical drift only.
- TODO audit: `.opencode/todo.md` is `37/37` checked with `0` unchecked leaf tasks.
- SYNC state: `SYNC-7` and `SYNC-8` closed; `.opencode/sync-issues.md` reports no unresolved blockers.
- Reconciliation evidence at `2026-03-22T05:04:27+01:00` still confirms `PrivacyNotice` and the contact form mount in runtime; no new runtime regression detected.
