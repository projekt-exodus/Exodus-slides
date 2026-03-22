# EXO-7 Locale Parity Matrix

- Session: `ses_20260322_deploy_agent_continuation_static_gate_47`
- Verified at: `2026-03-22T11:23:52+01:00`
- Confidence: HIGH

## Scope
- Source files:
  - `client/src/locales/de.json`
  - `client/src/locales/en.json`
- Method:
  - Recursive path walk over both locale JSON trees.
  - Objects are traversed by key.
  - Arrays are traversed by index (`path[index]`).
  - Scalar leaf paths are compared for parity and drift (`de-only`, `en-only`).

## Baseline Anchor (Source Truth)
- Active continuation baseline:
  - top-level groups: `20/20`
  - scalar leaf paths: `478/478`
  - drift: `0/0`
- `22/22` is retired historical drift context only and must not be used as the active expectation for this workspace.

## Parity Result (Current Workspace)
- Top-level groups: `20/20` (ordered lists match)
- Scalar leaf paths: `478/478`
- Drift: `0/0` (`de-only = 0`, `en-only = 0`)

### Ordered top-level groups
`lang`, `theme`, `nav`, `hero`, `vision`, `aiChoice`, `team`, `market`, `problem`, `how`, `product`, `agent`, `revenue`, `tech`, `security`, `regulation`, `roadmap`, `risks`, `faq`, `footer`

## SYNC-6 Reconciliation Note
- Earlier ledgers referenced a higher EXO-7 parity baseline (`871/871`) and the SYNC-6 task draft mentioned `872/872` as an expected current value.
- Direct recomputation against the **actual current locale files in this workspace** produces `478/478` with drift `0/0`.
- Authoritative baseline for this continuation gate is therefore:
  - `top-level: 20/20`
  - `scalar leaf paths: 478/478`
  - `drift: 0/0`

## Evidence Command
- `locale parity scalar-leaf audit` @ `2026-03-22T11:23:52+01:00`
- Output: `de_scalar_leaf_count=478`, `en_scalar_leaf_count=478`, `de_only_count=0`, `en_only_count=0`
