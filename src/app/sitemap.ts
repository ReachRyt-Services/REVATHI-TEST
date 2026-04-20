import { MetadataRoute } from 'next';
import { coursesData } from '@/lib/data/courses';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://revathi.edu.in';

  // Base pages
  const basePages = [
    '',
    '/about',
    '/courses',
    '/campus',
    '/placements',
    '/gallery',
    '/contact',
    '/downloads',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Course pages
  const coursePages = coursesData.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...basePages, ...coursePages];
}
