import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/about', '/projects', '/blog', '/blog/*'],
        disallow: ['/admin/*', '/api/*', '/drafts/*'],
        crawlDelay: 1
      }
    ],
    sitemap: 'https://www.subhajitdolai.dev/sitemap.xml',
    host: 'https://www.subhajitdolai.dev'
  };
}