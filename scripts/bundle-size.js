#!/usr/bin/env node

'use strict';

/**
 * Bundle size measurement and reporting script.
 *
 * Usage:
 *   # Measure current build and save sizes:
 *   node scripts/bundle-size.js --output /tmp/sizes.json
 *
 *   # Measure and compare against a saved baseline, fail on violations:
 *   node scripts/bundle-size.js --baseline /tmp/main-sizes.json --report /tmp/report.md --strict
 *
 * Options:
 *   --dir <path>        Path to Next.js export output directory (default: ./out)
 *   --output <file>     Write measured sizes JSON to this file
 *   --baseline <file>   Compare against sizes JSON from a previous run
 *   --report <file>     Write the markdown report to this file
 *   --strict            Exit with code 1 when budget violations are found
 */

const fs = require('fs');
const path = require('path');

// ---------------------------------------------------------------------------
// Argument parsing
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);

function getArg(flag) {
  const idx = args.indexOf(flag);
  return idx !== -1 && idx + 1 < args.length ? args[idx + 1] : null;
}

const outDir = path.resolve(getArg('--dir') || 'out');
const outputFile = getArg('--output');
const baselineFile = getArg('--baseline');
const reportFile = getArg('--report');
const strict = args.includes('--strict');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatSize(bytes) {
  if (bytes === 0) return '0 B';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} kB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

// Deltas above this threshold (5 kB) are highlighted in red; smaller positive
// deltas use yellow to indicate a notable but non-alarming increase.
const SIGNIFICANT_DELTA_THRESHOLD = 5 * 1024;

function formatDelta(delta) {
  if (delta === 0) return '±0 B ⚪';
  const sign = delta > 0 ? '+' : '-';
  const emoji = delta > SIGNIFICANT_DELTA_THRESHOLD ? '🔴' : delta > 0 ? '🟡' : '🟢';
  return `${sign}${formatSize(Math.abs(delta))} ${emoji}`;
}

function scanDir(dir, extensions) {
  const results = [];
  if (!fs.existsSync(dir)) return results;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...scanDir(fullPath, extensions));
    } else if (extensions.some((ext) => entry.name.endsWith(ext))) {
      results.push({
        name: entry.name,
        size: fs.statSync(fullPath).size,
      });
    }
  }

  return results;
}

// ---------------------------------------------------------------------------
// Measure current build
// ---------------------------------------------------------------------------

const staticDir = path.join(outDir, '_next', 'static');
const jsFiles = scanDir(path.join(staticDir, 'chunks'), ['.js']).sort(
  (a, b) => b.size - a.size,
);
const cssFiles = scanDir(path.join(staticDir, 'css'), ['.css']).sort(
  (a, b) => b.size - a.size,
);

if (jsFiles.length === 0 && cssFiles.length === 0) {
  console.error(
    `No JS/CSS assets found under ${staticDir}. Did the build succeed?`,
  );
  process.exit(1);
}

const totalJS = jsFiles.reduce((sum, f) => sum + f.size, 0);
const totalCSS = cssFiles.reduce((sum, f) => sum + f.size, 0);
const totalAssets = totalJS + totalCSS;

const sizes = {
  timestamp: new Date().toISOString(),
  totalJS,
  totalCSS,
  totalAssets,
  jsFiles,
  cssFiles,
};

// ---------------------------------------------------------------------------
// Load baseline
// ---------------------------------------------------------------------------

let baseline = null;
if (baselineFile) {
  if (!fs.existsSync(baselineFile)) {
    console.warn(`Warning: Baseline file not found: ${baselineFile} – skipping comparison.`);
  } else {
    baseline = JSON.parse(fs.readFileSync(baselineFile, 'utf8'));
  }
}

// ---------------------------------------------------------------------------
// Load budgets
// ---------------------------------------------------------------------------

const budgetsPath = path.join(__dirname, '..', '.github', 'bundle-size-budgets.json');
let budgets = null;
if (fs.existsSync(budgetsPath)) {
  budgets = JSON.parse(fs.readFileSync(budgetsPath, 'utf8'));
}

// ---------------------------------------------------------------------------
// Check violations
// ---------------------------------------------------------------------------

const violations = [];

if (budgets) {
  if (budgets.maxTotalJS && totalJS > budgets.maxTotalJS) {
    violations.push(
      `Total JS (${formatSize(totalJS)}) exceeds budget of ${formatSize(budgets.maxTotalJS)}`,
    );
  }
  if (budgets.maxTotalCSS && totalCSS > budgets.maxTotalCSS) {
    violations.push(
      `Total CSS (${formatSize(totalCSS)}) exceeds budget of ${formatSize(budgets.maxTotalCSS)}`,
    );
  }
  if (budgets.maxTotalAssets && totalAssets > budgets.maxTotalAssets) {
    violations.push(
      `Total assets (${formatSize(totalAssets)}) exceeds budget of ${formatSize(budgets.maxTotalAssets)}`,
    );
  }

  if (baseline) {
    if (budgets.maxJSDelta != null) {
      const delta = totalJS - baseline.totalJS;
      if (delta > budgets.maxJSDelta) {
        violations.push(
          `JS grew by ${formatSize(delta)}, exceeds max delta of ${formatSize(budgets.maxJSDelta)}`,
        );
      }
    }
    if (budgets.maxCSSDelta != null) {
      const delta = totalCSS - baseline.totalCSS;
      if (delta > budgets.maxCSSDelta) {
        violations.push(
          `CSS grew by ${formatSize(delta)}, exceeds max delta of ${formatSize(budgets.maxCSSDelta)}`,
        );
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Generate markdown report
// ---------------------------------------------------------------------------

function generateReport() {
  const lines = ['## 📦 Bundle Size Report', ''];

  if (baseline) {
    const jsDelta = totalJS - baseline.totalJS;
    const cssDelta = totalCSS - baseline.totalCSS;
    const totalDelta = totalAssets - baseline.totalAssets;

    lines.push('| Category | PR | main | Delta |');
    lines.push('|----------|----|------|-------|');
    lines.push(
      `| **JavaScript** | ${formatSize(totalJS)} | ${formatSize(baseline.totalJS)} | ${formatDelta(jsDelta)} |`,
    );
    lines.push(
      `| **CSS** | ${formatSize(totalCSS)} | ${formatSize(baseline.totalCSS)} | ${formatDelta(cssDelta)} |`,
    );
    lines.push(
      `| **Total** | ${formatSize(totalAssets)} | ${formatSize(baseline.totalAssets)} | ${formatDelta(totalDelta)} |`,
    );
  } else {
    lines.push('| Category | Size |');
    lines.push('|----------|------|');
    lines.push(`| **JavaScript** | ${formatSize(totalJS)} |`);
    lines.push(`| **CSS** | ${formatSize(totalCSS)} |`);
    lines.push(`| **Total** | ${formatSize(totalAssets)} |`);
  }

  lines.push('');

  if (violations.length > 0) {
    lines.push('### ❌ Budget Violations', '');
    for (const v of violations) {
      lines.push(`- ${v}`);
    }
  } else {
    lines.push('✅ **All bundle size budgets are within limits.**');
  }

  if (budgets) {
    lines.push('');
    lines.push('<details>');
    lines.push('<summary>Budget thresholds</summary>');
    lines.push('');
    lines.push('| Budget | Limit |');
    lines.push('|--------|-------|');
    if (budgets.maxTotalJS != null)
      lines.push(`| Max total JS | ${formatSize(budgets.maxTotalJS)} |`);
    if (budgets.maxTotalCSS != null)
      lines.push(`| Max total CSS | ${formatSize(budgets.maxTotalCSS)} |`);
    if (budgets.maxTotalAssets != null)
      lines.push(`| Max total assets | ${formatSize(budgets.maxTotalAssets)} |`);
    if (budgets.maxJSDelta != null)
      lines.push(`| Max JS delta per PR | ${formatSize(budgets.maxJSDelta)} |`);
    if (budgets.maxCSSDelta != null)
      lines.push(`| Max CSS delta per PR | ${formatSize(budgets.maxCSSDelta)} |`);
    lines.push('');
    lines.push('</details>');
  }

  if (jsFiles.length > 0) {
    lines.push('');
    lines.push('<details>');
    lines.push('<summary>JS files</summary>');
    lines.push('');
    lines.push('| File | Size |');
    lines.push('|------|------|');
    for (const f of jsFiles) {
      lines.push(`| \`${f.name}\` | ${formatSize(f.size)} |`);
    }
    lines.push('');
    lines.push('</details>');
  }

  if (cssFiles.length > 0) {
    lines.push('');
    lines.push('<details>');
    lines.push('<summary>CSS files</summary>');
    lines.push('');
    lines.push('| File | Size |');
    lines.push('|------|------|');
    for (const f of cssFiles) {
      lines.push(`| \`${f.name}\` | ${formatSize(f.size)} |`);
    }
    lines.push('');
    lines.push('</details>');
  }

  return lines.join('\n');
}

const report = generateReport();

// ---------------------------------------------------------------------------
// Output
// ---------------------------------------------------------------------------

console.log(report);

if (reportFile) {
  fs.writeFileSync(reportFile, report, 'utf8');
}

if (outputFile) {
  fs.writeFileSync(outputFile, JSON.stringify(sizes, null, 2), 'utf8');
}

if (strict && violations.length > 0) {
  process.exit(1);
}
