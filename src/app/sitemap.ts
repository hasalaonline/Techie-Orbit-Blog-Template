import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch(
    'https://techie-orbit-blog-template.vercel.app/api/posts',
  );
  const data = await response.json();

  const sitemap: MetadataRoute.Sitemap = [
    {
      url: 'https://techie-orbit-blog-template.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://techie-orbit-blog-template.vercel.app/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://techie-orbit-blog-template.vercel.app/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://techie-orbit-blog-template.vercel.app/authors',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...data.posts.map((post: { slug: string }) => ({
      url: `https://techie-orbit-blog-template.vercel.app/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.5,
    })),
  ];

  return sitemap;
}
