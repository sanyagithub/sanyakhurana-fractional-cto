// app/page.tsx
import Link from "next/link";

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
                            className="ml-4 inline-flex items-center rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-md shadow-blue-500/30 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                        >
                            Book a 30-Minute Call
                        </a>
                    </div>
                </div>
            </header>

            <main className="flex-1 pb-28">

                {/* ── HERO ── */}
                <section
                    id="home"
                    className="border-slate-900 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
                >
                    <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
                        <div className="flex flex-col gap-10 md:flex-row md:items-center">

                            {/* Left — headline + bullets + CTAs */}
                            <div className="md:w-3/5">
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

                                <ul className="mt-6 grid max-w-md gap-2 text-sm text-slate-300">
                                    <li>Technical roadmap tied to your business goals</li>
                                    <li>Vendor and team accountability with measurable outcomes</li>
                                    <li>Architecture decisions that scale without breaking</li>
                                    <li>Delivery rhythm and risk visibility across all work</li>
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

                            {/* Right — Why NorthStar CTO */}
                            <div className="md:w-2/5">
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
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

                {/* ── ENGAGEMENT MODELS ── */}
                <section id="engage" className="border-t border-slate-900 bg-slate-950 py-20">
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
                <section className="border-t border-slate-900 bg-slate-950 py-20">
                    <div className="mx-auto max-w-5xl px-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                            What I do
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold text-slate-50 md:text-3xl">
                            Six areas that strengthen your technology foundation
                        </h2>

                        <div className="mt-8 grid gap-5 md:grid-cols-2">
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
                <section className="border-t border-slate-900 bg-slate-950 py-20">
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

                {/* ── HOW IT WORKS ── */}
                <section className="border-t border-slate-900 bg-slate-950 py-20">
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
                <section id="contact" className="border-t border-slate-900 bg-slate-950 py-20">
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
                    className="inline-flex items-center justify-between rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-blue-500/30"
                    style={{ width: "100%" }}
                >
                    Book a 30-Minute Call →
                </a>
            </div>
        </div>
    );
}
