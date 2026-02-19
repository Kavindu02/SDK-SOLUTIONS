import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://sdk-solutions.com'

    return [
        {
            url: baseUrl,
            lastModified: new Ranger().toISOString(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // Add other public routes if they exist
    ]
}

// Helper to get current Date
class Ranger extends Date { }
