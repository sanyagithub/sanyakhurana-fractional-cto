// app/engagement/on-demand/page.tsx
import Link from "next/link";

const calendlyHref =
    "https://calendly.com/sanya-6/1-1-call-with-sanya?hide_event_type_details=1&hide_gdpr_banner=1";

export const metadata = {
    title: "On-Demand CTO Advisory — Tech Audits & Vendor Reviews",
    description:
        "Independent CTO advisory for one-time technical decisions. Codebase audits, vendor proposal reviews, tech due diligence, and architecture assessments — no recurring commitment required.",
    alternates: {
        canonical: "/engagement/on-demand",
    },
    openGraph: {
        title: "On-Demand CTO Advisory — Tech Audits & Vendor Reviews | NorthStar CTO",
        description:
            "Independent CTO advisory for codebase audits, vendor reviews, and tech due diligence. Fixed scope, no recurring commitment.",
        url: "/engagement/on-demand",
        type: "website",
    },
    twitter: {
        title: "On-Demand CTO Advisory — Tech Audits & Vendor Reviews | NorthStar CTO",
        description:
            "Independent CTO advisory for codebase audits, vendor reviews, and tech due diligence. Fixed scope, no recurring commitment.",
    },
};

const scopes = [
    "Codebase and architecture audits",
    "Vendor second-opinion reviews",
    "Scalability and risk assessments",
    "Due diligence before major investments",
    "Crisis or recovery advisory",
    "Technology modernization validation",
];

const idealFor = [
    "Founders who need a second opinion before a major technical decision.",
    "Organizations evaluating vendors, agencies, or technical proposals.",
    "Teams preparing for investment rounds, audits, or system modernization.",
];

export default function OnDemandPage() {
    return (
        <div className="min-h-screen flex flex-col">

            <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/85 backdrop-blur">
                <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
                    <div className="flex flex-col leading-tight">
                        <span className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-400">
                            NorthStar CTO
                        </span>
                        <span className="text-lg font-semibold text-slate-50">
                            On-Demand Advisory
                        </span>
                    </div>
                    <Link href="/" className="text-sm text-slate-300 hover:text-slate-50">
                        ← Back to Home
                    </Link>
                </div>
            </header>

            <main className="flex-1">

                {/* HERO */}
                <section className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
                    <div className="mx-auto max-w-5xl px-4 py-16">
                        <div className="flex flex-col gap-10 md:flex-row md:items-start">

                            <div className="md:w-3/5">
                                <div className="flex items-center gap-3">
                                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                                        CTO Advisory
                                    </p>
                                    <span className="tier-badge tier-ondemand">Project scope</span>
                                </div>

                                <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-50 md:text-4xl">
                                    Targeted technical clarity.
                                    <br />
                                    Independent judgment.
                                </h1>

                                <p className="mt-5 max-w-xl text-sm text-slate-300">
                                    Engage for a defined scope — audits, vendor validation,
                                    architecture reviews, or high-stakes technical decisions
                                    requiring objective executive input.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-3">
                                    <a
                                        href={calendlyHref}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-blue-300"
                                    >
                                        Book a 30-Minute Call
                                    </a>
                                    <Link
                                        href="/engagement/starter"
                                        className="rounded-full border border-slate-700 px-5 py-3 text-sm text-slate-200 hover:border-slate-500"
                                    >
                                        Compare With Starter Model
                                    </Link>
                                </div>

                                <p className="mt-4 text-xs text-slate-500">
                                    Defined scope · Independent review · No recurring commitment
                                </p>
                            </div>

                            <div className="md:w-2/5">
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                                    <h2 className="text-xs uppercase tracking-[0.22em] text-slate-400">
                                        Engagement Snapshot
                                    </h2>
                                    <div className="mt-4 space-y-3 text-sm text-slate-300">
                                        <p><span className="font-medium text-slate-200">Structure:</span> Fixed scope or hourly</p>
                                        <p><span className="font-medium text-slate-200">Focus:</span> Validation & risk clarity</p>
                                        <p><span className="font-medium text-slate-200">Best For:</span> Single decisions or audits</p>
                                        <p><span className="font-medium text-slate-200">Speed:</span> Fast engagement setup</p>
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-slate-800">
                                        <p className="text-xs text-slate-500">
                                            Ideal when you need experienced judgment
                                            without long-term engagement.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* TYPICAL SCOPES */}
                <section className="bg-slate-950 py-16 border-t border-slate-900">
                    <div className="mx-auto max-w-5xl px-4">
                        <h2 className="text-2xl font-semibold text-slate-50">Typical Advisory Scopes</h2>
                        <div className="check-list mt-6">
                            {scopes.map((item) => (
                                <div key={item} className="check-list-item">
                                    <svg className="check-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <circle cx="8" cy="8" r="7" stroke="rgba(102,184,255,0.35)" strokeWidth="1" />
                                        <path d="M5.5 8L7.5 10L10.5 6" stroke="#66b8ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* IDEAL FOR */}
                <section className="bg-slate-950 py-16 border-t border-slate-900">
                    <div className="mx-auto max-w-5xl px-4">
                        <h2 className="text-2xl font-semibold text-slate-50">Ideal For</h2>
                        <div className="mt-8 grid gap-6 md:grid-cols-3">
                            {idealFor.map((item) => (
                                <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                    <p className="text-sm text-slate-300">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* NOT SURE? COMPARE */}
                <section className="bg-slate-950 py-8 border-t border-slate-900">
                    <div className="mx-auto max-w-5xl px-4">
                        <p className="text-sm text-slate-400">
                            Need ongoing support instead?{" "}
                            <Link href="/#engage" className="text-blue-300 hover:underline underline-offset-2">
                                Compare all engagement models →
                            </Link>
                        </p>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="bg-slate-950 py-20 border-t border-slate-900">
                    <div className="mx-auto max-w-3xl px-4 text-center">
                        <h2 className="text-2xl font-semibold text-slate-50">
                            Make confident technical decisions.
                        </h2>
                        <p className="mt-4 text-sm text-slate-300">
                            A focused consultation to define scope and next steps.
                        </p>
                        <div className="mt-8">
                            <a
                                href={calendlyHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-blue-500 px-8 py-3 text-sm font-semibold text-slate-950 hover:bg-blue-300"
                            >
                                Book a 30-Minute Call
                            </a>
                        </div>
                        <p className="mt-4 text-xs text-slate-500">
                            Confidential · Independent · No obligation
                        </p>
                    </div>
                </section>

            </main>
        </div>
    );
}
