/** @type {import('@lhci/cli').LighthouseConfig} */
module.exports = {
  ci: {
    collect: {
      staticDistDir: './out',
      numberOfRuns: 3,
      autodiscoverUrlBlocklist: [/\/404\.html$/, /\/404\/index\.html$/],
    },
    assert: {
      assertions: {
        'categories:performance':    ['error', { minScore: 0.85 }],
        'categories:accessibility':  ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.90 }],
        'categories:seo':            ['error', { minScore: 0.90 }],
      },
    },
  },
};
