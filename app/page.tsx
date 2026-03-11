// app/page.tsx
import Link from "next/link";
import BlogStrip from "./components/BlogStrip";
import { getSortedPosts } from "./blog/posts";

const EMAIL = "sanya@monica.in";
const emailHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    "NorthStar CTO Inquiry: Fractional CTO for Founders"
)}`;
const CALENDLY_URL =
    "https://calendly.com/sanya-6/1-1-call-with-sanya?hide_event_type_details=1&hide_gdpr_banner=1";

export const metadata = {
    title: "Fractional CTO for Growing Businesses | NorthStar CTO — Sanya Khurana",
    description:
        "NorthStar CTO provides Fractional CTO services for growing businesses, small teams, and mission-led organizations. Bring clarity, structure, and reliable technical leadership to your product and operations.",
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Fractional CTO for Growing Businesses | NorthStar CTO",
        description:
            "Senior technical strategy, vendor accountability, and delivery leadership for non-technical founders — without the full-time CTO cost.",
        url: "/",
        type: "website",
    },
    twitter: {
        title: "Fractional CTO for Growing Businesses | NorthStar CTO",
        description:
            "Senior technical strategy, vendor accountability, and delivery leadership for non-technical founders — without the full-time CTO cost.",
    },
};

export default function HomePage() {
    const posts = getSortedPosts();
    return (
        <div className="min-h-screen flex flex-col">
            <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/85 backdrop-blur">
                <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
                    <div className="flex flex-col leading-tight">
                        <span className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-400">
                            NorthStar CTO
                        </span>
                        <span className="text-lg font-semibold text-slate-50">
                            Fractional CTO for Founders
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link href="/blog" className="text-sm text-slate-300 hover:text-slate-50">
                            Blog
                        </Link>
                        <a
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 inline-flex items-center rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-md shadow-blue-500/30 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950 whitespace-nowrap"
                        >
                            <span className="sm:hidden">Book a Call</span>
                            <span className="hidden sm:inline">Book a 30-Minute Call</span>
                        </a>
                    </div>
                </div>
            </header>

            <main className="flex-1 pb-20 md:pb-0">

                {/* ── HERO ── */}
                <section
                    id="home"
                    className="border-slate-900 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
                >
                    <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
                        <div className="hero-layout">

                            {/* Left — headline + bullets + CTAs */}
                            <div>

                                {/* Mobile-only: photo + name inline at top */}
                                <div className="mb-5 flex items-center gap-4 md:hidden">
                                    <img
                                        src="/sanya.jpeg"
                                        alt="Sanya Khurana"
                                        style={{ width: "56px", height: "56px", borderRadius: "50%", objectFit: "cover", border: "2px solid #334155", flexShrink: 0 }}
                                    />
                                    <div>
                                        <p className="font-semibold text-slate-50 text-sm">Sanya Khurana</p>
                                        <a
                                            href="https://www.linkedin.com/in/sanyakhurana/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-xs text-blue-300 hover:text-blue-200"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                                <rect x="2" y="9" width="4" height="12" />
                                                <circle cx="4" cy="4" r="2" />
                                            </svg>
                                            LinkedIn
                                        </a>
                                    </div>
                                </div>

                                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                                    NorthStar CTO
                                </p>

                                <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl md:text-4xl">
                                    The technical leadership
                                    <br />
                                    your business needs.
                                </h1>

                                <p className="mt-5 max-w-xl text-sm text-slate-300">
                                    Senior technical strategy, vendor accountability, and delivery leadership —
                                    for non-technical founders and growing teams, without the cost of a
                                    full-time CTO.
                                </p>

                                <ul className="mt-6 grid max-w-md gap-2.5 text-sm text-slate-300">
                                    {[
                                        "Technical roadmap tied to your business goals",
                                        "Vendor and team accountability with measurable outcomes",
                                        "Architecture decisions that scale without breaking",
                                        "Delivery rhythm and risk visibility across all work",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-2.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 mt-0.5 shrink-0">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6 flex flex-wrap items-center gap-3">
                                    <a
                                        href={CALENDLY_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-blue-500/30 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                                    >
                                        Book a 30-Minute Call
                                    </a>

                                    <a
                                        href="#engage"
                                        className="inline-flex items-center rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:border-slate-500 hover:text-slate-50"
                                    >
                                        View Engagement Models
                                    </a>
                                </div>
                            </div>

                            {/* Right — Photo + Why NorthStar CTO */}
                            <div className="flex flex-col items-center gap-5">

                                {/* Profile photo — desktop only */}
                                <div className="hidden md:flex flex-col items-center gap-3">
                                    <img
                                        src="/sanya.jpeg"
                                        alt="Sanya Khurana"
                                        style={{ width: "144px", height: "144px", borderRadius: "50%", objectFit: "cover", border: "2px solid #334155", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.5)" }}
                                    />
                                    <div className="text-center">
                                        <p className="font-semibold text-slate-50">Sanya Khurana</p>
                                        <a
                                            href="https://www.linkedin.com/in/sanyakhurana/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-1 inline-flex items-center gap-1 text-xs text-blue-300 hover:text-blue-200"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                                <rect x="2" y="9" width="4" height="12" />
                                                <circle cx="4" cy="4" r="2" />
                                            </svg>
                                            LinkedIn
                                        </a>
                                    </div>
                                </div>

                                <div className="w-full rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                    <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                                        Why NorthStar CTO
                                    </h2>
                                    <div className="mt-4 space-y-3">
                                        {[
                                            { label: "No jargon.", detail: "Every conversation in plain language your team can act on." },
                                            { label: "Month-to-month.", detail: "No contracts or lock-in. Adjust your engagement as you grow." },
                                            { label: "Direct access.", detail: "You always work with Sanya — no account managers or intermediaries." },
                                            { label: "8+ years.", detail: "Adobe, SaaS startups, and mission-led nonprofits." },
                                        ].map(({ label, detail }) => (
                                            <div key={label} className="text-sm">
                                                <span className="font-semibold text-slate-200">{label}</span>{" "}
                                                <span className="text-slate-400">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>

                {/* ── RECENT INSIGHTS ── */}
                {posts.length > 0 && (
                    <div className="border-t border-slate-900 bg-slate-950 py-3">
                        <div className="mx-auto max-w-5xl px-4">
                            {/* Mobile: label + "All posts" on one row, strip below */}
                            <div className="flex items-center justify-between gap-2 md:hidden">
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                    From the blog
                                </span>
                                <Link href="/blog" className="text-xs font-medium text-blue-400 hover:text-blue-300">
                                    All posts →
                                </Link>
                            </div>
                            <div className="mt-2 md:hidden">
                                <BlogStrip posts={posts} />
                            </div>
                            {/* Desktop: single row */}
                            <div className="hidden md:flex items-center gap-3">
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 shrink-0">
                                    From the blog
                                </span>
                                <div className="flex-1 min-w-0">
                                    <BlogStrip posts={posts} />
                                </div>
                                <Link href="/blog" className="shrink-0 text-xs font-medium text-blue-400 hover:text-blue-300">
                                    All posts →
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* ── ENGAGEMENT MODELS ── */}
                <section id="engage" className="border-t border-slate-900 bg-slate-950" style={{ paddingTop: "2.75rem", paddingBottom: "5rem" }}>
                    <div className="mx-auto max-w-5xl px-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                            Engagement models
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold text-slate-50 md:text-3xl">
                            Choose the model that matches your stage
                        </h2>

                        <div className="mt-8 grid gap-6 md:grid-cols-2">
                            <Link href="/engagement/starter" className="engagement-card rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <div className="flex items-center justify-between gap-3">
                                    <h3 className="text-base font-semibold text-slate-50">Starter CTO</h3>
                                    <span className="tier-badge tier-starter">8 hrs / mo</span>
                                </div>
                                <p className="mt-2 text-sm text-slate-300">
                                    Oversight, roadmap review, and structured guidance. For teams with
                                    developers in place who need senior-level validation and direction.
                                </p>
                                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                                    View details →
                                </p>
                            </Link>

                            <Link href="/engagement/growth" className="engagement-card rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <div className="flex items-center justify-between gap-3">
                                    <h3 className="text-base font-semibold text-slate-50">Growth CTO</h3>
                                    <span className="tier-badge tier-growth">20 hrs / mo</span>
                                </div>
                                <p className="mt-2 text-sm text-slate-300">
                                    Active team leadership and delivery management. For teams in build mode
                                    where execution discipline and sprint oversight are critical.
                                </p>
                                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                                    View details →
                                </p>
                            </Link>

                            <Link href="/engagement/scale" className="engagement-card rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <div className="flex items-center justify-between gap-3">
                                    <h3 className="text-base font-semibold text-slate-50">Scale CTO</h3>
                                    <span className="tier-badge tier-scale">40 hrs / mo</span>
                                </div>
                                <p className="mt-2 text-sm text-slate-300">
                                    Executive-level ownership across systems, teams, and strategy. For
                                    organizations where technology directly impacts operations and revenue.
                                </p>
                                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                                    View details →
                                </p>
                            </Link>

                            <Link href="/engagement/on-demand" className="engagement-card rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <div className="flex items-center justify-between gap-3">
                                    <h3 className="text-base font-semibold text-slate-50">On-Demand Advisory</h3>
                                    <span className="tier-badge tier-ondemand">Project scope</span>
                                </div>
                                <p className="mt-2 text-sm text-slate-300">
                                    Audits, vendor reviews, and strategic decisions with independent
                                    executive judgment. No recurring commitment required.
                                </p>
                                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                                    View details →
                                </p>
                            </Link>
                        </div>

                        {/* Comparison table */}
                        <div className="mt-10">
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                                Compare models at a glance
                            </p>
                            <div className="comparison-table-wrap mt-4">
                                <table className="comparison-table">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Starter</th>
                                            <th>Growth</th>
                                            <th>Scale</th>
                                            <th>On-Demand</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Hours / month</td>
                                            <td>~8 hrs</td>
                                            <td>~20 hrs</td>
                                            <td>~40 hrs</td>
                                            <td>Project-based</td>
                                        </tr>
                                        <tr>
                                            <td>Cadence</td>
                                            <td>Monthly check-in</td>
                                            <td>Weekly oversight</td>
                                            <td>Executive collaboration</td>
                                            <td>As needed</td>
                                        </tr>
                                        <tr>
                                            <td>Focus</td>
                                            <td>Oversight & validation</td>
                                            <td>Execution & leadership</td>
                                            <td>Full ownership</td>
                                            <td>Single decision or audit</td>
                                        </tr>
                                        <tr>
                                            <td>Best for</td>
                                            <td>Teams with devs, no CTO</td>
                                            <td>Active build / expansion</td>
                                            <td>Complex operations</td>
                                            <td>One-time need</td>
                                        </tr>
                                        <tr>
                                            <td>Commitment</td>
                                            <td>Month-to-month</td>
                                            <td>Month-to-month</td>
                                            <td>Month-to-month</td>
                                            <td>Fixed scope</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── WHAT I DO ── */}
                <section className="border-t border-slate-900 bg-slate-950 py-16">
                    <div className="mx-auto max-w-5xl px-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                            What I do
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold text-slate-50 md:text-3xl">
                            Six areas that strengthen your technology foundation
                        </h2>

                        <div className="mt-8 service-grid">
                            {[
                                {
                                    title: "Product Strategy",
                                    desc: "Align your business goals with a practical, phased technical roadmap your team can actually execute.",
                                },
                                {
                                    title: "Architecture Design",
                                    desc: "Build systems that remain stable, maintainable, and cost-effective as your product and team grow.",
                                },
                                {
                                    title: "Team & Vendor Leadership",
                                    desc: "Hold internal developers and external agencies to clear, measurable standards — with accountability built in.",
                                },
                                {
                                    title: "Cost Optimization",
                                    desc: "Identify waste, reduce rework, and prevent the expensive technical debt that compounds quietly over time.",
                                },
                                {
                                    title: "Engineering Process",
                                    desc: "Introduce delivery discipline, documentation, and consistent structure so your team builds with predictability.",
                                },
                                {
                                    title: "Tech Due Diligence",
                                    desc: "Evaluate systems, risks, and scalability before key decisions, major investments, or vendor commitments.",
                                },
                            ].map(({ title, desc }) => (
                                <div
                                    key={title}
                                    className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
                                >
                                    <h3 className="text-base font-semibold text-slate-50">{title}</h3>
                                    <p className="mt-2 text-sm text-slate-300">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── ABOUT SANYA ── */}
                <section className="border-t border-slate-900 bg-slate-950 py-16">
                    <div className="mx-auto max-w-5xl px-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                            About
                        </p>
                        <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-start">

                            <div className="md:w-3/5">
                                <h2 className="text-2xl font-semibold text-slate-50">Sanya Khurana</h2>
                                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                                    Computer Scientist · CTO · Fractional CTO
                                </p>
                                <p className="mt-5 text-sm text-slate-300">
                                    8+ years building and leading engineering and product teams across
                                    creative technology, SaaS startups, and nonprofits. Previously a
                                    Computer Scientist at Adobe for five years, then CTO and Co-Founder
                                    of her own technology venture.
                                </p>
                                <p className="mt-3 text-sm text-slate-300">
                                    Now she brings that executive-level technical leadership to growing
                                    teams as a Fractional CTO — in clear language, without the jargon,
                                    and without the full-time cost.
                                </p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {[
                                        { icon: "🎤", label: "TEDx Speaker" },
                                        { icon: "🏛️", label: "Co-Founder, Lean In India" },
                                        { icon: "📚", label: "Author of Two Books" },
                                        { icon: "✍️", label: "Poet" },
                                    ].map(({ icon, label }) => (
                                        <span
                                            key={label}
                                            className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 text-xs text-slate-300"
                                            style={{ padding: "5px 14px", gap: "6px" }}
                                        >
                                            <span>{icon}</span>
                                            {label}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={CALENDLY_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex items-center rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:border-slate-500 hover:text-slate-50"
                                >
                                    Book a 30-minute intro call →
                                </a>
                            </div>

                            <div className="md:w-2/5">
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                                        Background
                                    </p>
                                    <div className="mt-4">
                                        <div className="cred-row">
                                            <p className="text-sm font-medium text-slate-200">Computer Scientist</p>
                                            <p className="mt-0.5 text-xs text-slate-500">Adobe · 5 years</p>
                                        </div>
                                        <div className="cred-row">
                                            <p className="text-sm font-medium text-slate-200">CTO & Co-Founder</p>
                                            <p className="mt-0.5 text-xs text-slate-500">Technology startup</p>
                                        </div>
                                        <div className="cred-row">
                                            <p className="text-sm font-medium text-slate-200">Fractional CTO</p>
                                            <p className="mt-0.5 text-xs text-slate-500">Creative Tech · SaaS · Nonprofits</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ── TESTIMONIALS ── */}
                <section className="border-t border-slate-900 bg-slate-950 py-16">
                    <div className="mx-auto max-w-5xl px-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                            What people say
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold text-slate-50 md:text-3xl">
                            Trusted by those who've worked with her
                        </h2>
                        <div className="mt-8 grid gap-5 md:grid-cols-2">

                            {/* Annie Finch */}
                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 flex flex-col gap-4">
                                <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-500/50" aria-hidden="true">
                                    <path d="M0 18V11.04C0 9.12 0.4 7.32 1.2 5.64C2.04 3.96 3.32 2.44 5.04 1.08L7.2 2.76C5.96 3.76 5.04 4.84 4.44 6C3.84 7.12 3.56 8.32 3.6 9.6H7.2V18H0ZM13.2 18V11.04C13.2 9.12 13.6 7.32 14.4 5.64C15.24 3.96 16.52 2.44 18.24 1.08L20.4 2.76C19.16 3.76 18.24 4.84 17.64 6C17.04 7.12 16.76 8.32 16.8 9.6H20.4V18H13.2Z" fill="currentColor"/>
                                </svg>
                                <p className="text-sm leading-relaxed text-slate-300">
                                    Sanya Khurana is a dream to work with. She is highly skilled, professional, and efficient, yet also kind, responsible, and adept at thinking outside the box. Her communication and follow-through are unsurpassed. I couldn&apos;t recommend her more highly!
                                </p>
                                <div className="mt-auto pt-4 border-t border-slate-800">
                                    <p className="text-sm font-semibold text-slate-200">Annie Finch</p>
                                    <p className="text-xs text-slate-500">Poet, Writer, Performer</p>
                                </div>
                            </div>

                            {/* Michelle Kae Celine */}
                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 flex flex-col gap-4">
                                <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-500/50" aria-hidden="true">
                                    <path d="M0 18V11.04C0 9.12 0.4 7.32 1.2 5.64C2.04 3.96 3.32 2.44 5.04 1.08L7.2 2.76C5.96 3.76 5.04 4.84 4.44 6C3.84 7.12 3.56 8.32 3.6 9.6H7.2V18H0ZM13.2 18V11.04C13.2 9.12 13.6 7.32 14.4 5.64C15.24 3.96 16.52 2.44 18.24 1.08L20.4 2.76C19.16 3.76 18.24 4.84 17.64 6C17.04 7.12 16.76 8.32 16.8 9.6H20.4V18H13.2Z" fill="currentColor"/>
                                </svg>
                                <p className="text-sm leading-relaxed text-slate-300">
                                    Her technical skills significantly contributed to our project&apos;s success. Her ability to generate exciting ideas in a short timeframe was impressive — she has the potential to be an outstanding leader and collaborator in any setting.
                                </p>
                                <div className="mt-auto pt-4 border-t border-slate-800">
                                    <p className="text-sm font-semibold text-slate-200">Michelle Kae Celine</p>
                                    <p className="text-xs text-slate-500">Data Analyst · SF Tech Week Hackathon</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ── HOW IT WORKS ── */}
                <section className="border-t border-slate-900 bg-slate-950 py-16">
                    <div className="mx-auto max-w-5xl px-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                            How it works
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold text-slate-50 md:text-3xl">
                            Clear process, predictable results
                        </h2>

                        <div className="process-grid mt-8 md:grid-cols-2">
                            {[
                                {
                                    step: "01",
                                    title: "Understand Your Vision",
                                    desc: "Evaluate your operations, goals, and current technical state. Identify what's working and what's in the way.",
                                },
                                {
                                    step: "02",
                                    title: "Design the Roadmap",
                                    desc: "Create a phased plan tied to your budget, team capacity, and business timing — nothing theoretical.",
                                },
                                {
                                    step: "03",
                                    title: "Lead the Build",
                                    desc: "Coordinate teams and vendors to deliver consistently and predictably, with visible progress throughout.",
                                },
                                {
                                    step: "04",
                                    title: "Review and Scale",
                                    desc: "Refine systems, reduce inefficiencies, and build the foundation for long-term growth without fragility.",
                                },
                            ].map(({ step, title, desc }) => (
                                <div key={step} className="process-step">
                                    <span className="process-number">{step}</span>
                                    <div>
                                        <p className="text-base font-semibold text-slate-50">{title}</p>
                                        <p className="mt-1 text-sm text-slate-300">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CONTACT ── */}
                <section id="contact" className="border-t border-slate-900 bg-slate-950 pt-14 pb-6">
                    <div className="mx-auto max-w-5xl px-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                            Get started
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold text-slate-50 md:text-3xl">
                            Clarity first. Commitment second.
                        </h2>

                        <p className="mt-4 max-w-xl text-sm text-slate-300">
                            Book a focused 30-minute call to align on priorities, identify risks, and
                            decide the right engagement model together.
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <a
                                href={CALENDLY_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-blue-500/30 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                            >
                                Book a 30-Minute Call
                            </a>

                            <Link
                                href="/blog"
                                className="inline-flex items-center rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:border-slate-500 hover:text-slate-50"
                            >
                                Read the Blog
                            </Link>
                        </div>

                        <p className="mt-4 text-xs text-slate-400">
                            Or email directly at{" "}
                            <a href={emailHref} className="font-medium text-blue-300 underline-offset-2 hover:underline">
                                {EMAIL}
                            </a>
                        </p>

                        {/* What happens after you book */}
                        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                What happens after you book
                            </p>
                            <div className="mt-4 flex flex-col gap-4 md:flex-row">
                                {[
                                    { num: "1", text: "Calendar confirmation sent immediately after booking." },
                                    { num: "2", text: "30-minute call — priorities, current risks, and engagement fit." },
                                    { num: "3", text: "You leave with a clear next step. No obligation to continue." },
                                ].map(({ num, text }) => (
                                    <div key={num} className="flex items-start gap-3 text-sm text-slate-300">
                                        <span
                                            style={{
                                                flexShrink: 0,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                width: "1.25rem",
                                                height: "1.25rem",
                                                borderRadius: "9999px",
                                                backgroundColor: "var(--blue-500)",
                                                color: "var(--slate-950)",
                                                fontWeight: 600,
                                                fontSize: "0.7rem",
                                                marginTop: "0.1rem",
                                                lineHeight: 1,
                                            }}
                                        >
                                            {num}
                                        </span>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            {/* Mobile CTA bar */}
            <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-800 bg-slate-950/85 backdrop-blur px-4 py-3 md:hidden">
                <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-blue-500/30"
                    style={{ width: "100%" }}
                >
                    Book a 30-Minute Call
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                </a>
            </div>
        </div>
    );
}
