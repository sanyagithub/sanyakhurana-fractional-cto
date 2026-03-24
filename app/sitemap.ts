import { MetadataRoute } from "next";
import { getSortedPosts } from "./blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getSortedPosts();

    return [
        { url: "https://northstarcto.com", changeFrequency: "monthly", priority: 1.0 },
        { url: "https://northstarcto.com/blog", changeFrequency: "weekly", priority: 0.9 },
        ...posts.map((post) => ({
            url: `https://northstarcto.com/blog/${post.slug}`,
            lastModified: post.publishedAt,
            changeFrequency: "monthly" as const,
            priority: 0.8,
        })),
        { url: "https://northstarcto.com/engagement/starter", changeFrequency: "monthly" as const, priority: 0.7 },
        { url: "https://northstarcto.com/engagement/growth", changeFrequency: "monthly" as const, priority: 0.7 },
        { url: "https://northstarcto.com/engagement/scale", changeFrequency: "monthly" as const, priority: 0.7 },
        { url: "https://northstarcto.com/engagement/on-demand", changeFrequency: "monthly" as const, priority: 0.7 },
    ];
}
