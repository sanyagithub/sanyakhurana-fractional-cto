const calendlyHref =
    "https://calendly.com/sanya-6/1-1-call-with-sanya?hide_event_type_details=1&hide_gdpr_banner=1";

export const metadata = {
    title: "Growth Fractional CTO | Active Technical Leadership",
    description:
        "Growth CTO engagement for businesses needing active team leadership, sprint oversight, and structured execution management.",
};

export default function GrowthCTOPage() {
    return (
        <div className="min-h-screen flex flex-col">

            {/* Header */}
            <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/85 backdrop-blur">
                <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
                    <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">NorthStar CTO</p>
                        <p className="text-lg font-semibold text-slate-50">Growth CTO Engagement</p>
                    </div>
                    <a href="/" className="text-sm text-slate-300 hover:text-slate-50">← Back to Home</a>
                </div>
            </header>

            <main className="flex-1">

                {/* Hero */}
                <section className="bg-gradient-to-b from-slate-950 to-slate-900 py-16">
                    <div className="mx-auto max-w-5xl px-4">
                        <div className="flex flex-col gap-10 md:flex-row">

                            <div className="md:w-3/5">
                                <p className="text-xs uppercase tracking-[0.25em] text-blue-300">Fractional CTO</p>

                                <h1 className="mt-4 text-3xl font-semibold text-slate-50 md:text-4xl">
                                    Active technical leadership.
                                    <br />
                                    Structured execution.
                                </h1>

                                <p className="mt-5 text-sm text-slate-300 max-w-xl">
                                    Designed for teams in active build or expansion mode,
                                    where consistent oversight, sprint management, and
                                    delivery discipline are critical.
                                </p>

                                <div className="mt-8">
                                    <a href={calendlyHref}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-blue-300">
                                        Discuss Growth Engagement
                                    </a>
                                    <p className="mt-3 text-xs text-slate-500">
                                        Flexible monthly structure · Scale up or down anytime
                                    </p>
                                </div>
                            </div>

                            <div className="md:w-2/5">
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                                    <h2 className="text-xs uppercase tracking-[0.22em] text-slate-400">
                                        Engagement Snapshot
                                    </h2>
                                    <div className="mt-4 space-y-3 text-sm text-slate-300">
                                        <p><span className="font-medium text-slate-200">Commitment:</span> ~20 hours/month</p>
                                        <p><span className="font-medium text-slate-200">Focus:</span> Execution & leadership</p>
                                        <p><span className="font-medium text-slate-200">Best For:</span> Growing product teams</p>
                                        <p><span className="font-medium text-slate-200">Involvement:</span> Weekly oversight</p>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-slate-800">
                                        <p className="text-xs text-slate-500">
                                            Ideal when technology directly impacts revenue and delivery timelines.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Included */}
                <section className="bg-slate-950 py-16 border-t border-slate-900">
                    <div className="mx-auto max-w-5xl px-4">
                        <h2 className="text-2xl font-semibold text-slate-50">What’s Included</h2>

                        <div className="mt-8 grid gap-6 md:grid-cols-2">
                            {[
                                "Weekly sprint oversight and delivery tracking",
                                "Roadmap ownership and milestone management",
                                "Vendor and internal team coordination",
                                "Process documentation and improvement",
                                "Cost visibility and performance alignment",
                                "Executive reporting and decision support",
                            ].map(item => (
                                <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-sm text-slate-300">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
