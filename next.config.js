/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  trailingSlash: true,
  
  // Cache control headers for static assets
  // Note: These headers won't apply to GitHub Pages (which uses its own CDN)
  // but will work if deployed to Vercel, Netlify, or Cloudflare Pages
  async headers() {
    return [
      {
        // Cache static assets (images, fonts, etc.) for 1 year with immutability
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache Next.js static files (JS, CSS) for 1 year with immutability
        // These have content hashes in filenames
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache favicon and other root assets for 1 day
        source: '/:file(favicon.ico|robots.txt|sitemap.xml|feed.xml)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, must-revalidate',
          },
        ],
      },
      {
        // HTML pages should be revalidated
        source: '/:path*.html',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
      {
        // SVG images with longer cache
        source: '/images/:path*.svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Well-known files should be cached briefly
        source: '/.well-known/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
