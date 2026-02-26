export type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    publishedAt: string;
    kind: "article" | "video";
    tags: string[];
    body: string[];
    youtubeEmbedUrl?: string;
    localVideoUrl?: string;
};

// Copy this object into BLOG_POSTS to publish new content.
// Readers can only view content; posting is done by editing this file directly.
export const BLOG_POST_TEMPLATE: BlogPost = {
    slug: "replace-with-url-slug",
    title: "Replace with title",
    excerpt: "One sentence summary for the blog listing page.",
    publishedAt: "2026-02-26",
    kind: "article",
    tags: ["strategy"],
    body: [
        "First paragraph goes here.",
        "Second paragraph goes here.",
    ],
    // For videos, set kind: \"video\" and add one of these:
    // youtubeEmbedUrl: \"https://www.youtube.com/embed/VIDEO_ID\",
    // localVideoUrl: \"/videos/your-file.mp4\",
};

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: "why-growing-startups-dont-need-a-full-time-cto-yet",
        title: "Why Most Growing Startups Don’t Need a Full-Time CTO (Yet)",
        excerpt:
            "Growing startups often need structured technical leadership, not necessarily a full-time CTO, until scale and complexity truly demand it.",
        publishedAt: "2026-02-26",
        kind: "article",
        tags: ["fractional cto", "startup growth", "technical leadership"],
        body: [
            "There is a particular phase in the life of a growing startup when ambition begins to outpace structure, when product momentum starts to create technical strain, and when the word CTO begins to surface in strategy conversations as though it were the obvious next step toward maturity and stability. The instinct is understandable, because as complexity increases and decisions carry heavier consequences, founders naturally look for senior leadership to contain that complexity and convert uncertainty into direction. However, in many cases, the impulse to hire a full-time Chief Technology Officer arises not from true organizational readiness, but from a feeling of discomfort that has not yet been properly diagnosed.",
            "A full-time CTO is not merely an experienced engineer with a broader job description, but a long-term architectural decision for the company itself, because this role influences infrastructure choices, hiring philosophy, engineering culture, technical debt tolerance, and the strategic alignment between product ambition and technical execution. When a startup is still refining its product-market fit, experimenting with revenue models, iterating on user experience, or even redefining its core value proposition, locking in permanent executive technical leadership can introduce rigidity at a moment when flexibility is still the company’s greatest advantage. In such stages, the real issue is rarely a lack of technical capability within the team, but rather a lack of structured decision-making frameworks that connect day-to-day engineering work to long-term business outcomes.",
            "Growing startups often possess talented developers who are shipping features at impressive speed, yet speed without direction can quietly accumulate fragility, because infrastructure decisions made for convenience today can become expensive constraints tomorrow. What these companies frequently need is not another permanent title added to the organizational chart, but a layer of strategic clarity that examines architecture with foresight, aligns product priorities with scalable systems, and creates processes that reduce dependency on individual contributors. This kind of leadership does not always require full-time presence; it requires perspective, experience, and the ability to design structure intentionally.",
            "Fractional technical leadership exists precisely for this transitional stage, offering startups access to senior strategic guidance without prematurely committing to the financial, cultural, and structural permanence of a full-time executive hire. Instead of embedding into every operational detail, this approach focuses on auditing existing systems, defining technical roadmaps, establishing documentation standards, guiding hiring plans, and ensuring that infrastructure decisions are proportionate to the company’s current stage of growth. The objective is not to create reliance, but to strengthen the internal system so that it can scale with resilience and coherence.",
            "There absolutely comes a point when a full-time CTO becomes essential, particularly when engineering teams expand significantly, product complexity compounds rapidly, and daily technical decisions carry profound strategic weight. Yet hiring for that stage before arriving at it can burden a young organization with commitments it does not yet need. The more powerful question for founders to ask is not whether they need a CTO, but what kind of technical leadership aligns with their present reality. In many cases, thoughtful, flexible, and stage-appropriate guidance is not a compromise, but the wiser and more sustainable path forward.",
        ],
    },
    // {
    //     slug: "cto-advisory-vendor-review-walkthrough",
    //     title: "Video: How to Evaluate a Vendor Proposal Before You Sign",
    //     excerpt:
    //         "A checklist-led walkthrough you can use to validate architecture claims, cost assumptions, and delivery timelines.",
    //     publishedAt: "2026-02-20",
    //     kind: "video",
    //     tags: ["vendor management", "due diligence", "video"],
    //     body: [
    //         "This video breaks down how to review vendor proposals with technical and commercial rigor.",
    //         "It covers architecture validation, pricing red flags, and contract points that affect long-term maintainability.",
    //     ],
    //     youtubeEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    // },
];

export function getSortedPosts() {
    return [...BLOG_POSTS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPostBySlug(slug: string) {
    return BLOG_POSTS.find((post) => post.slug === slug);
}
