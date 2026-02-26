// app/engagement/starter/page.tsx
import Link from "next/link";

const calendlyHref =
    "https://calendly.com/sanya-6/1-1-call-with-sanya?hide_event_type_details=1&hide_gdpr_banner=1";

export const metadata = {
    title: "Starter Fractional CTO | NorthStar CTO",
    description:
        "Starter CTO engagement for growing businesses that need structured technical oversight and vendor accountability without full-time cost.",
};

export default function StarterCTOPage() {
    return (
        <div className="min-h-screen flex flex-col">

            {/* Header (MATCH HOME EXACTLY) */}
            <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/85 backdrop-blur">
                <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
                    <div className="flex flex-col leading-tight">
                        <span className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-400">
                            NorthStar CTO
                        </span>
                        <span className="text-lg font-semibold text-slate-50">
                            Starter CTO Engagement
                        </span>
                    </div>

                    <Link href="/" className="text-sm text-slate-300 hover:text-slate-50">
                        ← Back to Home
                    </Link>
                </div>
            </header>

            <main className="flex-1">

                {/* HERO — MATCH HOMEPAGE STRUCTURE */}
                <section className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
                    <div className="mx-auto max-w-5xl px-4 py-16">
                        <div className="flex flex-col gap-10 md:flex-row md:items-start">

                            {/* Left Content */}
                            <div className="md:w-3/5">

                                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                                    Fractional CTO
                                </p>

                                <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-50 md:text-4xl">
                                    Structured oversight for growing teams.
                                    <br />
                                    Without full-time executive cost.
                                </h1>

                                <p className="mt-5 max-w-xl text-sm text-slate-300">
                                    Designed for businesses that have developers or vendors in place
                                    but need senior-level validation, roadmap clarity, and
                                    consistent technical direction.
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
                                    Month-to-month flexibility · No long-term commitment
                                </p>
                            </div>

                            {/* Right Summary Card */}
                            <div className="md:w-2/5">
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">

                                    <h2 className="text-xs uppercase tracking-[0.22em] text-slate-400">
                                        Engagement Snapshot
                                    </h2>

                                    <div className="mt-4 space-y-3 text-sm text-slate-300">
                                        <p><span className="text-slate-200 font-medium">Commitment:</span> ~8 hours/month</p>
                                        <p><span className="text-slate-200 font-medium">Focus:</span> Oversight & validation</p>
                                        <p><span className="text-slate-200 font-medium">Best For:</span> Small teams needing structure</p>
                                        <p><span className="text-slate-200 font-medium">Structure:</span> Executive-level review</p>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-slate-800">
                                        <p className="text-xs text-slate-500">
                                            A full-time CTO often costs 3–5× annually.
                                            This model delivers strategic coverage at a fractional investment.
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

                        <h2 className="text-2xl font-semibold text-slate-50">
                            What’s Included
                        </h2>

                        <div className="mt-8 grid gap-6 md:grid-cols-2">

                            {[
                                "Monthly roadmap review and priority alignment",
                                "Architecture validation and scalability review",
                                "Vendor and agency performance oversight",
                                "Risk identification and cost exposure analysis",
                                "Technical decision validation before major investments",
                                "Executive check-ins and strategic guidance",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-sm text-slate-300"
                                >
                                    {item}
                                </div>
                            ))}

                        </div>
                    </div>
                </section>

                {/* IDEAL FOR */}
                <section className="bg-slate-950 py-16 border-t border-slate-900">
                    <div className="mx-auto max-w-5xl px-4">

                        <h2 className="text-2xl font-semibold text-slate-50">
                            Ideal For
                        </h2>

                        <div className="mt-8 grid gap-6 md:grid-cols-2">

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                                <p className="text-sm text-slate-300">
                                    Businesses with developers but no technical executive oversight.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                                <p className="text-sm text-slate-300">
                                    Organizations preparing for system upgrades or vendor transitions.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                                <p className="text-sm text-slate-300">
                                    Leaders who want clarity before increasing technology spend.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="bg-slate-950 py-20 border-t border-slate-900">
                    <div className="mx-auto max-w-3xl px-4 text-center">

                        <h2 className="text-2xl font-semibold text-slate-50">
                            Gain clarity before committing to bigger investments.
                        </h2>

                        <p className="mt-4 text-sm text-slate-300">
                            A focused 30-minute conversation to assess risks, priorities, and next steps.
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
                            Confidential discussion · Direct access · No obligation
                        </p>

                    </div>
                </section>

            </main>
        </div>
    );
}
