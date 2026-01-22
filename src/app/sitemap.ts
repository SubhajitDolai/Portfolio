import { MetadataRoute } from 'next';
import { allPosts } from "content-collections";

export default async function Sitemap() {
  const baseUrl = "https://subhajit-dolai.vercel.app";

  const staticPages = ["", "/blog", "/resume"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
  }));

  const blogPages = allPosts.map((post) => ({
    url: `${baseUrl}/blog/${post._meta.path.replace(/\.mdx$/, "")}`,
    lastModified: new Date(post.updatedAt || post.publishedAt).toISOString(),
  }));

  return [...staticPages, ...blogPages];
}