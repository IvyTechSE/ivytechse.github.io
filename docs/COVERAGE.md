# Test Coverage Policy

This document defines the test coverage thresholds enforced in CI and explains how to work with them.

## Current thresholds

| Metric     | Minimum |
|------------|---------|
| Statements | 50 %    |
| Branches   | 30 %    |
| Functions  | 40 %    |
| Lines      | 50 %    |

These thresholds are set pragmatically so that incremental adoption is not blocked. They are expected to increase as the test suite grows.

## Where thresholds are configured

Thresholds live in [`jest.config.js`](../jest.config.js) under `coverageThreshold.global`.

```js
coverageThreshold: {
  global: {
    statements: 50,
    branches: 30,
    functions: 40,
    lines: 50,
  },
},
```

## CI behaviour

The **Test & Coverage** workflow (`.github/workflows/test.yml`) runs on every push and pull request:

1. Executes `npm run test:coverage` (Jest with `--coverage`).
2. Uploads the full coverage report as a workflow artifact (`coverage-report`, retained 14 days).
3. Posts (or updates) a coverage summary comment on the PR.
4. **Fails** the workflow if any threshold is not met, blocking the merge.

## Running coverage locally

```bash
# Run tests and generate a coverage report in ./coverage/
npm run test:coverage

# Open the HTML report in your browser
open coverage/lcov-report/index.html
```

## Raising thresholds

When overall coverage improves, raise the numbers in `jest.config.js` and update the table above. Keep changes small and incremental — a 5–10 percentage-point increase per PR is a good target.

## Excluding files from coverage

Files that should not count toward coverage (e.g., generated code, config files) can be excluded via `collectCoverageFrom` in `jest.config.js`:

```js
collectCoverageFrom: [
  'app/**/*.{ts,tsx}',
  '!app/**/*.d.ts',
  '!app/styles/**',
  // add more exclusions here
],
```
