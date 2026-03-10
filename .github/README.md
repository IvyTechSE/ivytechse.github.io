# GitHub Actions — Workflows & Composite Actions

This directory contains the CI/CD automation for the IvyTech SE website.

---

## Composite Actions

### `.github/actions/build`

Installs dependencies, lints, and builds the Next.js site.

> **Note:** The repository must already be checked out before calling this action.
> This is automatically satisfied when using the [reusable `build` workflow](#githubworkflowsbuildyml)
> or when a local checkout step precedes the action call.

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `base-path` | No | `''` | Base path for the site (e.g. `/pr-preview/pr-42`). Leave empty for production builds. Sets `NEXT_PUBLIC_BASE_PATH`. |

**Example (direct usage):**
```yaml
steps:
  - uses: actions/checkout@v4
  - uses: ./.github/actions/build
    with:
      base-path: /my-subpath
```

---

## Reusable Workflows

### `.github/workflows/build.yml`

Reusable `workflow_call` workflow. Checks out the repository, runs the
[`build` composite action](#githubactionsbuild), and uploads the compiled
site to a workflow artifact named **`site-build`**.

**Trigger:** `workflow_call` only.

| Input | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| `base-path` | `string` | No | `''` | Base path passed to the composite action. |

**Artifact produced:** `site-build` — the contents of `out/` after a successful build (retained for 1 day).

**Example (calling workflow):**
```yaml
jobs:
  build:
    uses: ./.github/workflows/build.yml
    with:
      base-path: /pr-preview/pr-42

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/download-artifact@v4
        with:
          name: site-build
          path: out/
      # … deploy steps
```

---

## Caller Workflows

### `.github/workflows/deploy.yml`

Deploys the production site to GitHub Pages on every push to `main`
(and on manual dispatch).

**Jobs:**
1. **`build`** — calls `.github/workflows/build.yml` (no base-path).
2. **`deploy`** — downloads the `site-build` artifact and pushes it to the
   `gh-pages` branch via `JamesIves/github-pages-deploy-action`.

### `.github/workflows/preview.yml`

Manages pull-request preview deployments.

**Jobs:**
| Job | Condition | Description |
|-----|-----------|-------------|
| `build` | PR not closed | Calls `.github/workflows/build.yml` with `base-path: /pr-preview/pr-<N>`. |
| `deploy-preview` | PR not closed | Downloads artifact, deploys to `gh-pages` under `pr-preview/pr-<N>/`, and posts/updates a preview URL comment. |
| `cleanup-preview` | PR closed | Removes the preview directory from `gh-pages` and comments on the PR. |

---

## Architecture Diagram

```
push to main / workflow_dispatch
  └─► deploy.yml
        ├─► build.yml (reusable)
        │     └─► .github/actions/build (composite)
        │           checkout → setup-node → npm install → lint → build → upload artifact
        └─► deploy job
              download artifact → push to gh-pages

pull_request (open/sync/reopen)
  └─► preview.yml
        ├─► build.yml (reusable, with base-path)
        │     └─► .github/actions/build (composite)
        └─► deploy-preview job
              download artifact → push preview to gh-pages → comment URL

pull_request (closed)
  └─► preview.yml
        └─► cleanup-preview job
              remove preview dir from gh-pages → comment cleanup
```
