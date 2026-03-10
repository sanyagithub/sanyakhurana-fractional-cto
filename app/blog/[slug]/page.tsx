import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getSortedPosts } from "../posts";
import AudioPlayer from "../../components/AudioPlayer";

const CALENDLY_URL =
    "https://calendly.com/sanya-6/1-1-call-with-sanya?hide_event_type_details=1&hide_gdpr_banner=1";

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

                {post.audioUrl && (
                    <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-2">
                            🎧 Listen to this article
                        </p>
                        <AudioPlayer src={post.audioUrl} />
                    </div>
                )}

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
                        ← Back to all posts
                    </Link>
                </div>
            </main>

            {/* Post-read CTA */}
            <section className="border-t border-slate-900 bg-slate-950 py-16">
                <div className="mx-auto max-w-3xl px-4">
                    <h2 className="text-xl font-semibold text-slate-50">
                        Found this useful?
                    </h2>
                    <p className="mt-3 text-sm text-slate-300">
                        Book a 30-minute call to discuss your specific technical situation —
                        no obligation, just clarity.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                        <a
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-blue-500/30 hover:bg-blue-300"
                        >
                            Book a 30-Minute Call
                        </a>
                        <Link
                            href="/#engage"
                            className="inline-flex items-center rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:border-slate-500 hover:text-slate-50"
                        >
                            View Engagement Models
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
