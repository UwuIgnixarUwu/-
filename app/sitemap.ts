import { MetadataRoute } from 'next';
import { articleTeasers } from '@/data/articles';
import { enduroModels } from '@/data/models';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://endurokz-portal.example';
  const staticPages = ['', '/catalog', '/legal/privacy', '/legal/terms', '/legal/disclaimer', '/legal/cookies'];

  return [
    ...staticPages.map((path) => ({ url: `${base}${path}`, lastModified: new Date() })),
    ...enduroModels.map((m) => ({ url: `${base}/models/${m.slug}`, lastModified: new Date() })),
    ...articleTeasers.map((a) => ({ url: `${base}/articles/${a.slug}`, lastModified: new Date() }))
  ];
}
