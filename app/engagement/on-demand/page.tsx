const EMAIL = "sanya@monica.in";
const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    "NorthStar CTO Inquiry: On-Demand Advisory"
)}`;

export const metadata = {
    title: "On-Demand CTO Advisory | Technical Audits & Strategic Support",
    description:
        "On-demand CTO advisory for audits, vendor validation, architecture reviews, and high-stakes technical decisions.",
};

export default function OnDemandPage() {
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
                            On-Demand Advisory
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
                                    CTO Advisory
                                </p>

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

                                <div className="mt-8">
                                    <a
                                        href={mailtoHref}
                                        className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-blue-300"
                                    >
                                        Request Advisory Session
                                    </a>
                                </div>

                                <p className="mt-4 text-xs text-slate-500">
                                    Defined scope · Independent review · No recurring commitment
                                </p>
                            </div>

                            {/* Snapshot */}
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

                {/* Included */}
                <section className="bg-slate-950 py-16 border-t border-slate-900">
                    <div className="mx-auto max-w-5xl px-4">
                        <h2 className="text-2xl font-semibold text-slate-50">
                            Typical Advisory Scopes
                        </h2>

                        <div className="mt-8 grid gap-6 md:grid-cols-2">

                            {[
                                "Codebase and architecture audits",
                                "Vendor second-opinion reviews",
                                "Scalability and risk assessments",
                                "Due diligence before major investments",
                                "Crisis or recovery advisory",
                                "Technology modernization validation",
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

                {/* Final CTA */}
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
                                href={mailtoHref}
                                className="rounded-full bg-blue-500 px-8 py-3 text-sm font-semibold text-slate-950 hover:bg-blue-300"
                            >
                                Schedule Advisory Call
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
