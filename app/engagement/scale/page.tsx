// app/engagement/scale/page.tsx
import Link from "next/link";

const calendlyHref =
    "https://calendly.com/sanya-6/1-1-call-with-sanya?hide_event_type_details=1&hide_gdpr_banner=1";

export const metadata = {
    title: "Scale CTO — Fractional Executive Technical Leadership",
    description:
        "Executive-level fractional CTO for organizations where technology drives revenue and operations. Strategic roadmap ownership, architecture governance, and multi-vendor coordination.",
    alternates: {
        canonical: "/engagement/scale",
    },
    openGraph: {
        title: "Scale CTO — Fractional Executive Technical Leadership | NorthStar CTO",
        description:
            "Strategic roadmap ownership, architecture governance, and executive technical leadership for complex, technology-led organizations.",
        url: "/engagement/scale",
        type: "website",
    },
    twitter: {
        title: "Scale CTO — Fractional Executive Technical Leadership | NorthStar CTO",
        description:
            "Strategic roadmap ownership, architecture governance, and executive technical leadership for complex, technology-led organizations.",
    },
};

const included = [
    "Strategic technology roadmap ownership",
    "Architecture governance and modernization planning",
    "Hiring support and team structuring",
    "Multi-vendor coordination and accountability",
    "Executive reporting and board-level clarity",
    "Long-term scalability and risk management",
];

const idealFor = [
    "Businesses where software directly impacts revenue and customer experience.",
    "Organizations coordinating multiple teams or vendors across complex delivery.",
    "Leadership teams preparing for scale, modernization, or structural growth.",
];

export default function ScaleCTOPage() {
    return (
        <div className="min-h-screen flex flex-col">

            <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/85 backdrop-blur">
                <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
                    <div className="flex flex-col leading-tight">
                        <span className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-400">
                            NorthStar CTO
                        </span>
                        <span className="text-lg font-semibold text-slate-50">
                            Scale CTO Engagement
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
                                        Executive-Level Fractional CTO
                                    </p>
                                    <span className="tier-badge tier-scale">40 hrs / mo</span>
                                </div>

                                <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-50 md:text-4xl">
                                    Executive technical ownership.
                                    <br />
                                    Fully integrated into your operations.
                                </h1>

                                <p className="mt-5 max-w-xl text-sm text-slate-300">
                                    Designed for organizations where technology directly impacts revenue,
                                    delivery, and long-term scalability. This model provides deep
                                    involvement, strategic governance, and executive-level coordination.
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
                                        href="/engagement/growth"
                                        className="rounded-full border border-slate-700 px-5 py-3 text-sm text-slate-200 hover:border-slate-500"
                                    >
                                        Compare With Growth Model
                                    </Link>
                                </div>

                                <p className="mt-4 text-xs text-slate-500">
                                    Flexible monthly structure · Executive-level continuity
                                </p>
                            </div>

                            <div className="md:w-2/5">
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                                    <h2 className="text-xs uppercase tracking-[0.22em] text-slate-400">
                                        Engagement Snapshot
                                    </h2>
                                    <div className="mt-4 space-y-3 text-sm text-slate-300">
                                        <p><span className="font-medium text-slate-200">Commitment:</span> ~40 hours/month</p>
                                        <p><span className="font-medium text-slate-200">Focus:</span> Full technical ownership</p>
                                        <p><span className="font-medium text-slate-200">Best For:</span> Operationally complex teams</p>
                                        <p><span className="font-medium text-slate-200">Cadence:</span> Executive collaboration</p>
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-slate-800">
                                        <p className="text-xs text-slate-500">
                                            For many organizations, this replaces or bridges the need
                                            for a full-time CTO while maintaining strategic authority.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* WHAT'S INCLUDED */}
                <section className="bg-slate-950 py-16 border-t border-slate-900">
                    <div className="mx-auto max-w-5xl px-4">
                        <h2 className="text-2xl font-semibold text-slate-50">What's Included</h2>
                        <div className="check-list mt-6">
                            {included.map((item) => (
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
                            Not sure this is the right fit?{" "}
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
                            Establish long-term technical clarity and ownership.
                        </h2>
                        <p className="mt-4 text-sm text-slate-300">
                            A focused consultation to assess complexity, risks, and next steps.
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
                            Confidential · Direct access · No obligation
                        </p>
                    </div>
                </section>

            </main>
        </div>
    );
}
