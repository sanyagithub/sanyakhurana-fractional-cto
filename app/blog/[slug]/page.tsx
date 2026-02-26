import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getSortedPosts } from "../posts";

type BlogPostPageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return getSortedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return { title: "Post not found | NorthStar CTO" };
    }

    return {
        title: `${post.title} | NorthStar CTO`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50">
            <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/85 backdrop-blur">
                <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
                    <div className="flex flex-col leading-tight">
                        <span className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-400">
                            NorthStar CTO
                        </span>
                        <span className="text-lg font-semibold text-slate-50">Blog & Videos</span>
                    </div>
                    <Link href="/blog" className="text-sm text-slate-300 hover:text-slate-50">
                        ← Back to Blog
                    </Link>
                </div>
            </header>

            <main className="mx-auto max-w-3xl px-4 py-20">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {post.kind === "video" ? "Video" : "Article"} · {post.publishedAt}
                </p>
                <h1 className="mt-3 text-3xl font-semibold leading-tight text-slate-50 md:text-4xl">
                    {post.title}
                </h1>
                <p className="mt-4 text-sm text-slate-300">{post.excerpt}</p>

                {post.youtubeEmbedUrl && (
                    <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                        <iframe
                            width="100%"
                            height="360"
                            src={post.youtubeEmbedUrl}
                            title={post.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            style={{ border: 0, borderRadius: "0.75rem" }}
                        />
                    </div>
                )}

                {post.localVideoUrl && (
                    <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                        <video controls style={{ width: "100%", borderRadius: "0.75rem" }}>
                            <source src={post.localVideoUrl} />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}

                <article className="mt-8 space-y-3 text-sm text-slate-300">
                    {post.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </article>

                <div className="mt-10">
                    <Link
                        href="/blog"
                        className="inline-flex items-center rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:border-slate-500 hover:text-slate-50"
                    >
                        Back to all posts
                    </Link>
                </div>
            </main>
        </div>
    );
}
