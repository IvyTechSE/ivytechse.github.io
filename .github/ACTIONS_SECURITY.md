# GitHub Actions Security

This document describes the security practices used in this repository's GitHub Actions workflows.

## Pinned Actions

All third-party actions are pinned to a specific commit SHA rather than a mutable version tag.
This prevents a compromised or modified action tag from silently running untrusted code in CI.

### Current Pins

| Action | Pinned SHA | Tag | Used In |
|--------|-----------|-----|---------|
| `actions/checkout` | `34e114876b0b11c390a56381ad16ebd13914f8d5` | v4.3.1 | `deploy.yml`, `preview.yml`, `.github/actions/build` |
| `actions/setup-node` | `49933ea5288caeca8642d1e84afbd3f7d6820020` | v4.4.0 | `.github/actions/build` |
| `actions/github-script` | `f28e40c7f34bde8b3046d885e986cb6290c5673b` | v7.1.0 | `preview.yml` |
| `JamesIves/github-pages-deploy-action` | `d92aa235d04922e8f08b40ce78cc5442fcfbfa2f` | v4.8.0 | `deploy.yml`, `preview.yml` |

### Updating a Pin

When a new release of an action is available and you want to update the pin:

1. Find the new release tag on the action's GitHub Releases page (e.g. `v4.4.1`).
2. Get the commit SHA that the tag points to:
   ```
   git ls-remote https://github.com/<owner>/<repo>.git refs/tags/<tag>
   ```
   If the result is a tag object SHA (annotated tag), dereference it with `^{}`:
   ```
   git ls-remote https://github.com/<owner>/<repo>.git refs/tags/<tag>^{}
   ```
3. Update the `uses:` line in the relevant workflow or composite action file:
   ```yaml
   uses: owner/repo@<new-commit-sha> # vX.Y.Z
   ```
4. Update the table in this file to reflect the new SHA and tag.
5. Open a PR with the change and ensure CI passes before merging.

## Least-Privilege Permissions

Workflows explicitly declare only the GitHub token permissions they need.

| Workflow | Permissions Granted |
|----------|-------------------|
| `deploy.yml` | `contents: write` (push to gh-pages branch) |
| `preview.yml` | `contents: write` (push to gh-pages), `pull-requests: write` (post PR comments) |
