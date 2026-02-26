import Link from "next/link";
import { getSortedPosts } from "./posts";

export const metadata = {
    title: "Blog | NorthStar CTO",
    description:
        "Articles and videos on product strategy, architecture decisions, vendor oversight, and scalable technical leadership.",
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
                    You publish by editing <code>app/blog/posts.ts</code>. There is no
                    public posting form, so visitors can only read.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="engagement-card rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
                        >
                            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                                {post.kind === "video" ? "Video" : "Article"} · {post.publishedAt}
                            </p>
                            <h2 className="mt-2 text-lg font-semibold text-slate-50">{post.title}</h2>
                            <p className="mt-3 text-sm text-slate-300">{post.excerpt}</p>
                            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-blue-300">
                                Read or watch -&gt;
                            </p>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}
