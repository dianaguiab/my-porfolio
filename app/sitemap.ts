import { baseUrl } from 'app/sitemap'

export const baseUrl = 'https://dianaguiab-portfolio.vercel.app'

export default async function sitemap() {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ]
}