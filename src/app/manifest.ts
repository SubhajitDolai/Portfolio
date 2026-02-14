import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Subhajit Dolai Portfolio',
    short_name: 'Subhajit Dolai',
    description: 'Portfolio and CV of Subhajit Dolai, Full Stack Developer specializing in Next.js, React, TypeScript, Supabase, and scalable web applications.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    orientation: 'portrait',
    scope: '/',
    lang: 'en',
    categories: ['portfolio', 'web development', 'software engineering', 'personal brand', 'resume'],
    icons: [
      {
        src: '/me.webp',
        sizes: '192x192',
        type: 'image/webp'
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  };
}