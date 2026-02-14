import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/about',
          '/projects',
          '/blog',
          '/blog/*',
          '/resume',
          '/contact',
        ],
        disallow: ['/admin/*', '/api/*', '/drafts/*', '/private/*'],
        crawlDelay: 1,
      },
    ],
    sitemap: 'https://www.subhajitdolai.dev/sitemap.xml',
    host: 'https://www.subhajitdolai.dev',
  };
}