"use client";

import Link from "next/link";
import type { BlogPost } from "../blog/posts";

type Props = {
    posts: Pick<BlogPost, "slug" | "title" | "publishedAt" | "kind">[];
};

export default function BlogStrip({ posts }: Props) {
    return (
        <div className="blog-strip-bar">
            {posts.map((post, i) => (
                <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="blog-strip-item"
                >
                    <span className="blog-strip-kind">
                        {post.kind === "video" ? "Video" : "Article"}
                    </span>
                    <span className="blog-strip-title-text">{post.title}</span>
                    {i < posts.length - 1 && (
                        <span className="blog-strip-divider" aria-hidden>·</span>
                    )}
                </Link>
            ))}
        </div>
    );
}
