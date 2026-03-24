import Link from "next/link";
import { getSortedPosts } from "./posts";

const CALENDLY_URL =
    "https://calendly.com/sanya-6/1-1-call-with-sanya?hide_event_type_details=1&hide_gdpr_banner=1";

export const metadata = {
    title: "Fractional CTO Insights: Technical Leadership for Founders",
    description:
        "Practical articles on fractional CTO services, technical leadership, vendor accountability, product strategy, and architecture decisions — for non-technical founders and growing teams.",
    alternates: {
        canonical: "/blog",
    },
    openGraph: {
        title: "Fractional CTO Insights: Technical Leadership for Founders | NorthStar CTO",
        description:
            "Practical thinking on fractional CTO services, technical leadership, vendor oversight, and building technology that serves your business.",
        url: "/blog",
        type: "website",
    },
    twitter: {
        title: "Fractional CTO Insights: Technical Leadership for Founders | NorthStar CTO",
        description:
            "Practical thinking on fractional CTO services, technical leadership, vendor oversight, and building technology that serves your business.",
    },
};

export default function BlogIndexPage() {
    const posts = getSortedPosts();

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
                    <Link href="/" className="text-sm text-slate-300 hover:text-slate-50">
                        ← Back to Home
                    </Link>
                </div>
            </header>

            <main className="mx-auto max-w-5xl px-4 py-20">
                <h1 className="text-3xl font-semibold leading-tight text-slate-50 md:text-4xl">
                    Insights for founders and growing teams
                </h1>
                <p className="mt-4 max-w-xl text-sm text-slate-300">
                    Practical thinking on technical leadership, product strategy, vendor oversight,
                    and building technology that actually serves your business.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="engagement-card rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
                        >
                            <div className="flex items-center gap-2 flex-wrap">
                                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                                    {post.kind === "video" ? "Video" : "Article"} · {post.publishedAt}
                                </p>
                                {post.audioUrl && (
                                    <span className="tier-badge tier-starter">
                                        🎧 Audio
                                    </span>
                                )}
                            </div>
                            <h2 className="mt-2 text-lg font-semibold text-slate-50">{post.title}</h2>
                            <p className="mt-3 text-sm text-slate-300">{post.excerpt}</p>
                            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-blue-300">
                                Read or listen →
                            </p>
                        </Link>
                    ))}
                </div>
            </main>

            {/* Bottom CTA */}
            <section className="border-t border-slate-900 bg-slate-950 py-16">
                <div className="mx-auto max-w-5xl px-4">
                    <h2 className="text-xl font-semibold text-slate-50">
                        Ready to talk about your technology?
                    </h2>
                    <p className="mt-3 max-w-xl text-sm text-slate-300">
                        Book a 30-minute call to align on priorities and find the right engagement model.
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
