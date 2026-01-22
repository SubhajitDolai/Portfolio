import { Metadata } from 'next';

export const siteConfig = {
  name: 'Portfolio of Subhajit Dolai',
  title: 'Subhajit Dolai - Full Stack Developer Portfolio',
  description: 'Explore the portfolio of Subhajit Dolai, a full-stack developer specializing in modern web technologies, including Next.js, React, Supabase and Node.js.',
  url: 'https://www.subhajitdolai.dev',
  image: 'https://www.subhajitdolai.dev/opengraph-image',
  author: 'Subhajit Dolai',
  keywords: [
    'Subhajit Dolai',
    'Full Stack Developer',
    'Portfolio',
    'Next.js',
    'React',
    'Supabase',
    'Node.js',
    'Web Development',
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer'
  ]
};

export function generateSEO({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  noIndex = false
}: {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  noIndex?: boolean;
}): Metadata {
  const seoTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const seoDescription = description || siteConfig.description;
  const seoImage = image ? (image.startsWith('http') ? image : `${siteConfig.url}${image}`) : siteConfig.image;
  const seoUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;
  const allKeywords = [...siteConfig.keywords, ...keywords].join(', ');

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: allKeywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    alternates: { canonical: seoUrl },
    openGraph: {
      type: type as 'website' | 'article',
      locale: 'en_US',
      url: seoUrl,
      title: seoTitle,
      description: seoDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
          alt: seoTitle
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [seoImage],
      creator: '@subhajitdolai',
      site: '@subhajitdolai'
    }
  };
} 