# Caching Strategy for Static Assets

This document explains the caching strategy implemented for the Ivy Technology website to improve performance scores on tools like Google Lighthouse.

## Overview

The website implements cache control headers for static assets to optimize browser caching and reduce load times for returning visitors. The strategy follows web performance best practices:

- **Static assets with content hashes**: Cache for 1 year (immutable)
- **HTML pages**: No caching (always revalidate)
- **Root assets**: Cache for 1 day with revalidation
- **Well-known files**: Cache for 1 hour with revalidation

## Implementation

### 1. Next.js Configuration (`next.config.js`)

The `next.config.js` file includes an `async headers()` function that defines Cache-Control headers for different asset types:

```javascript
{
  source: '/images/:path*',
  headers: [
    {
      key: 'Cache-Control',
      value: 'public, max-age=31536000, immutable',
    },
  ],
}
```

**Note**: These headers will only apply when deployed to platforms that support custom headers, such as:
- Vercel
- Netlify  
- Cloudflare Pages

### 2. `_headers` File (`public/_headers`)

A `_headers` file is included in the `public/` directory for Netlify and Cloudflare Pages compatibility. This file defines the same caching rules in a format these platforms understand.

### 3. GitHub Pages Limitations

**Important**: GitHub Pages does not support custom Cache-Control headers. GitHub Pages uses its own CDN (which includes Fastly) that applies default caching policies:

- HTML files: No caching or short cache
- Static assets: Moderate caching (typically controlled by GitHub)

The GitHub Pages CDN does provide some caching benefits, but it's not configurable through repository files.

**For detailed information about GitHub Pages limitations and migration options, see [GITHUB_PAGES_LIMITATIONS.md](GITHUB_PAGES_LIMITATIONS.md).**

## Cache Control Strategy

### Static Assets (Images, Fonts, etc.)
```
Cache-Control: public, max-age=31536000, immutable
```
- **Duration**: 1 year (31536000 seconds)
- **Immutable**: Tells browsers the content will never change
- **Applies to**: Images, SVG files, fonts, and other static media

### Next.js Static Files (JS, CSS)
```
Cache-Control: public, max-age=31536000, immutable
```
- **Duration**: 1 year
- **Immutable**: Safe because Next.js includes content hashes in filenames
- **Applies to**: `/_next/static/*` files

### HTML Pages
```
Cache-Control: public, max-age=0, must-revalidate
```
- **Duration**: No caching
- **Must-revalidate**: Always check for updates
- **Applies to**: All `.html` files

### Root Assets (favicon, robots.txt, etc.)
```
Cache-Control: public, max-age=86400, must-revalidate
```
- **Duration**: 1 day (86400 seconds)
- **Must-revalidate**: Check for updates after expiry
- **Applies to**: `favicon.ico`, `robots.txt`, `sitemap.xml`, `feed.xml`

### Well-known Files
```
Cache-Control: public, max-age=3600, must-revalidate
```
- **Duration**: 1 hour (3600 seconds)
- **Must-revalidate**: Check for updates after expiry
- **Applies to**: `/.well-known/*` files

## Migration Path

To fully leverage these caching improvements, consider migrating to a hosting platform that supports custom headers:

### Option 1: Vercel (Recommended for Next.js)
1. Import the GitHub repository to Vercel
2. Vercel will automatically apply the `headers()` from `next.config.js`
3. No additional configuration needed

### Option 2: Netlify
1. Connect the repository to Netlify
2. Netlify will automatically read the `public/_headers` file
3. Configure build command: `npm run build`
4. Configure publish directory: `out`

### Option 3: Cloudflare Pages
1. Connect the repository to Cloudflare Pages
2. Cloudflare will automatically read the `public/_headers` file
3. Configure build command: `npm run build`
4. Configure build output directory: `out`

## Testing Cache Headers

After deploying to a platform that supports custom headers, you can test the implementation:

### Using Browser DevTools
1. Open DevTools (F12)
2. Go to Network tab
3. Load the website
4. Click on any asset
5. Check the "Response Headers" for `Cache-Control`

### Using curl
```bash
curl -I https://ivytech.se/images/ivy-logo-black.svg
```

Look for the `Cache-Control` header in the response.

### Using Online Tools
- [WebPageTest](https://www.webpagetest.org/)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

## Expected Performance Improvements

With proper caching headers in place, you should see:

1. **Lighthouse Performance Score**: Improved "Serve static assets with an efficient cache policy" score (from 2.50 to 9.0+)
2. **Return Visit Speed**: Faster page loads for returning visitors
3. **Reduced Bandwidth**: Fewer requests to the server for cached assets
4. **Better CDN Efficiency**: CDN can cache assets more effectively

## Additional Security Headers

The `_headers` file also includes security headers:

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

These headers improve security by:
- Preventing MIME type sniffing
- Preventing clickjacking
- Enabling XSS protection
- Controlling referrer information

## Next.js Built-in Optimizations

Next.js automatically:
- Adds content hashes to static files (JS, CSS)
- Generates optimized builds with code splitting
- Creates immutable asset filenames

This makes long-term caching safe for Next.js-generated assets.

## References

- [Next.js Headers Documentation](https://nextjs.org/docs/app/api-reference/next-config-js/headers)
- [Netlify Headers Documentation](https://docs.netlify.com/routing/headers/)
- [Cloudflare Pages Headers Documentation](https://developers.cloudflare.com/pages/platform/headers/)
- [Google Lighthouse Cache Policy Audit](https://developer.chrome.com/docs/lighthouse/performance/uses-long-cache-ttl/)
- [MDN Cache-Control Documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)

## Maintenance

- **Adding new static assets**: Place them in the `public/` directory, and they'll automatically inherit the caching rules
- **Updating cache durations**: Modify both `next.config.js` and `public/_headers` to keep them in sync
- **Testing changes**: Deploy to a preview environment on Vercel/Netlify/Cloudflare before production
