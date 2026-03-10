/** @type {import('@lhci/cli').LighthouseConfig} */
module.exports = {
  ci: {
    collect: {
      staticDistDir: './out',
      numberOfRuns: 3,
      url: [
        'http://localhost/index.html',
        'http://localhost/om-ivy/index.html',
        'http://localhost/tjanster/index.html',
      ],
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
