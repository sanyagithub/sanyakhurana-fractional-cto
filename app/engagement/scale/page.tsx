const EMAIL = "sanya@monica.in";
const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    "NorthStar CTO Inquiry: Scale Engagement"
)}`;

export const metadata = {
    title: "Scale Fractional CTO | Executive Technical Leadership",
    description:
        "Scale CTO engagement for organizations where technology is central to operations, revenue, and long-term growth.",
};

export default function ScaleCTOPage() {
    return (
        <div className="min-h-screen flex flex-col">

            {/* Header */}
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

                    <a href="/" className="text-sm text-slate-300 hover:text-slate-50">
                        ← Back to Home
                    </a>
                </div>
            </header>

            <main className="flex-1">

                {/* Hero */}
                <section className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
                    <div className="mx-auto max-w-5xl px-4 py-16">
                        <div className="flex flex-col gap-10 md:flex-row md:items-start">

                            {/* Left */}
                            <div className="md:w-3/5">

                                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                                    Executive-Level Fractional CTO
                                </p>

                                <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-50 md:text-4xl">
                                    Executive technical ownership.
                                    <br />
                                    Fully integrated into your operations.
                                </h1>

                                <p className="mt-5 max-w-xl text-sm text-slate-300">
                                    Designed for organizations where technology directly impacts revenue,
                                    delivery, and long-term scalability. This model provides deep involvement,
                                    strategic governance, and executive-level coordination.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-3">
                                    <a
                                        href={mailtoHref}
                                        className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-blue-300"
                                    >
                                        Explore Scale Engagement
                                    </a>

                                    <a
                                        href="/engagement/growth"
                                        className="rounded-full border border-slate-700 px-5 py-3 text-sm text-slate-200 hover:border-slate-500"
                                    >
                                        Compare With Growth Model
                                    </a>
                                </div>

                                <p className="mt-4 text-xs text-slate-500">
                                    Flexible monthly structure · Executive-level continuity
                                </p>
                            </div>

                            {/* Right Snapshot Card */}
                            <div className="md:w-2/5">
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">

                                    <h2 className="text-xs uppercase tracking-[0.22em] text-slate-400">
                                        Engagement Snapshot
                                    </h2>

                                    <div className="mt-4 space-y-3 text-sm text-slate-300">
                                        <p><span className="font-medium text-slate-200">Commitment:</span> ~40 hours/month</p>
                                        <p><span className="font-medium text-slate-200">Focus:</span> Full technical ownership</p>
                                        <p><span className="font-medium text-slate-200">Best For:</span> Operationally complex teams</p>
                                        <p><span className="font-medium text-slate-200">Involvement:</span> Executive collaboration</p>
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

                {/* What's Included */}
                <section className="bg-slate-950 py-16 border-t border-slate-900">
                    <div className="mx-auto max-w-5xl px-4">
                        <h2 className="text-2xl font-semibold text-slate-50">
                            What’s Included
                        </h2>

                        <div className="mt-8 grid gap-6 md:grid-cols-2">

                            {[
                                "Strategic technology roadmap ownership",
                                "Architecture governance and modernization planning",
                                "Hiring support and team structuring",
                                "Multi-vendor coordination and accountability",
                                "Executive reporting and board-level clarity",
                                "Long-term scalability and risk management",
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

                {/* Ideal For */}
                <section className="bg-slate-950 py-16 border-t border-slate-900">
                    <div className="mx-auto max-w-5xl px-4">
                        <h2 className="text-2xl font-semibold text-slate-50">
                            Ideal For
                        </h2>

                        <div className="mt-8 grid gap-6 md:grid-cols-2">

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                                <p className="text-sm text-slate-300">
                                    Businesses where software directly impacts revenue and customer experience.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                                <p className="text-sm text-slate-300">
                                    Organizations coordinating multiple teams or vendors.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                                <p className="text-sm text-slate-300">
                                    Leadership teams preparing for scale, modernization, or structural growth.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Final CTA */}
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
                                href={mailtoHref}
                                className="rounded-full bg-blue-500 px-8 py-3 text-sm font-semibold text-slate-950 hover:bg-blue-300"
                            >
                                Schedule Executive Consultation
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
