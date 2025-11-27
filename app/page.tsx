// app/page.tsx

const EMAIL = "sanya@monica.in";
const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    "NorthStar CTO Inquiry: Fractional CTO for Founders"
)}`;

export const metadata = {
    title: "Fractional CTO for Founders | NorthStar CTO — Sanya Khurana",
    description:
        "NorthStar CTO provides Fractional CTO services for founders and early-stage startups. Gain clarity, speed, and founder confidence through product strategy, architecture, and hands-on technical leadership.",
};

export default function HomePage() {
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
              Fractional CTO for Founders
            </span>
                    </div>

                    <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
                        <a href="#home" className="hover:text-slate-50">Home</a>
                        <a href="#why" className="hover:text-slate-50">Why a CTO</a>
                        <a href="#what" className="hover:text-slate-50">What I do</a>
                        <a href="#method" className="hover:text-slate-50">Method</a>
                        <a href="#engage" className="hover:text-slate-50">Engagements</a>
                        <a href="#contact" className="hover:text-slate-50">Contact</a>
                    </nav>

                    <a
                        href={mailtoHref}
                        className="ml-4 inline-flex items-center rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-md shadow-blue-500/30 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                    >
                        Work with me
                    </a>
                </div>
            </header>

            <main className="flex-1">
                {/* Hero / Home */}
                <section
                    id="home"
                    className="border-slate-900 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
                >
                    <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
                        <div className="flex flex-col gap-10 md:flex-row md:items-center">
                            <div className="md:w-3/5">
                                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                                    NorthStar CTO
                                </p>

                                <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl md:text-4xl">
                                    Build the product you dreamt of.
                                    <br />
                                    With a CTO you can finally rely on.
                                </h1>

                                <p className="mt-5 max-w-xl text-sm text-slate-300">
                                    Early-stage founders succeed when execution matches the idea. NorthStar CTO provides senior technical leadership that brings clarity, speed, and founder confidence.
                                </p>

                                <ul className="mt-6 grid max-w-md gap-2 text-sm text-slate-300">
                                    <li>Product strategy</li>
                                    <li>Tech architecture</li>
                                    <li>Engineering leadership</li>
                                    <li>Vendor and team management</li>
                                    <li>Monthly, weekly, or on-demand engagement</li>
                                </ul>

                                <p className="mt-6 text-sm font-medium text-blue-200">
                                    Your North Star is clarity. My job is to light it.
                                </p>

                                <div className="mt-6 flex flex-wrap items-center gap-3">
                                    <a
                                        href={mailtoHref}
                                        className="inline-flex items-center rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-blue-500/30 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                                    >
                                        Work With Me
                                    </a>

                                    <a
                                        href="#contact"
                                        className="inline-flex items-center rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:border-slate-500 hover:text-slate-50"
                                    >
                                        Book a 30-Minute Call
                                    </a>
                                </div>
                            </div>

                            <div className="md:w-2/5">
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                    <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                                        Core offerings
                                    </h2>
                                    <div className="mt-3 space-y-2 text-sm text-slate-300">
                                        <p>Product strategy that clarifies what to build next</p>
                                        <p>Architecture that supports growth and change</p>
                                        <p>Leadership that keeps teams aligned and accountable</p>
                                        <p>Vendor and partner management with clear expectations</p>
                                        <p>Flexible cadence to match your stage</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why a Fractional CTO */}
                <section id="why" className="border-slate-900 bg-slate-950 py-16">
                    <div className="mx-auto max-w-5xl px-4">
                        <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                            Why a Fractional CTO
                        </h2>
                        <h3 className="mt-3 text-2xl font-semibold text-slate-50 md:text-3xl">
                            Founders bring passion. Common gaps arise in execution and coordination.
                        </h3>

                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <p className="text-sm text-slate-200">
                                    Translating an idea into a technical roadmap
                                </p>
                                <p className="mt-3 text-sm text-slate-300">
                                    Developers overbuild or under-deliver when objectives remain unclear.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <p className="text-sm text-slate-200">
                                    Agencies stretch timelines and budgets
                                </p>
                                <p className="mt-3 text-sm text-slate-300">
                                    Technical decisions often become expensive experiments when teams lack a clear owner.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                The result
                            </h4>
                            <p className="mt-3 text-sm text-slate-300">
                                A Fractional CTO closes the gap between strategy and delivery by guiding product, team, and long-term scalability.
                            </p>
                        </div>
                    </div>
                </section>

                {/* What I Do */}
                <section id="what" className="border-slate-900 bg-slate-950 py-16">
                    <div className="mx-auto max-w-5xl px-4">
                        <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                            What I do
                        </h2>
                        <h3 className="mt-3 text-2xl font-semibold text-slate-50 md:text-3xl">
                            Six focused specialties, ten words each
                        </h3>

                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">Product Strategy</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    Shape vague ideas into sharp, buildable product directions.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">Architecture Design</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    Plan technology that grows with your startup.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">Team Leadership</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    Manage developers, agencies, and freelancers so you focus on vision.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">Cost Optimization</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    Reduce burn while preserving development velocity.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">Engineering Process</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    Set sprints, structure, accountability, and quality.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">Tech Due Diligence</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    Audit codebase, team, risks, and roadmap to clarify decisions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who I Work With */}
                <section id="who" className="border-slate-900 bg-slate-950 py-16">
                    <div className="mx-auto max-w-5xl px-4">
                        <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                            Who I work with
                        </h2>

                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">Early-Stage Founders</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    You have an idea, deck, or prototype and you need execution discipline.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">Bootstrapped Entrepreneurs</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    You seek predictable costs, focused delivery, and high accountability.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">VC and Angel-Backed Startups</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    You want faster product cycles, stronger team coordination, and clean architecture.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">Non-Technical Founders</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    You want clear guidance and confidence while building with technology.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The NorthStar Method */}
                <section id="method" className="border-slate-900 bg-slate-950 py-16">
                    <div className="mx-auto max-w-5xl px-4">
                        <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                            The NorthStar Method
                        </h2>
                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">1. Understand the Vision</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    We analyze your business, customers, and value proposition to set clear technical goals.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">2. Design the Roadmap</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    We create milestones, prioritize features, and set realistic execution plans.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">3. Lead the Build</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    I align your development team and vendors to deliver predictable outcomes.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">4. Review and Scale</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    We improve velocity, ship better versions, optimize costs, and prepare for the next stage.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Engagement Models */}
                <section id="engage" className="border-slate-900 bg-slate-950 py-16">
                    <div className="mx-auto max-w-5xl px-4">
                        <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                            Engagement models
                        </h2>
                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">Starter CTO</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    8 hours per month. Clarity, review, and technical direction for early founders.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">Growth CTO</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    20 hours per month. Active builds, team management, and weekly sprints.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">Scale CTO</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    40 hours per month. Support for growing teams, complex architecture, and investor interactions.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">On-Demand</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    Fast audits, targeted fixes, or technical due diligence calls.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Founders Trust NorthStar */}
                <section id="trust" className="border-slate-900 bg-slate-950 py-16">
                    <div className="mx-auto max-w-5xl px-4">
                        <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                            Why founders trust NorthStar
                        </h2>

                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <ul className="list-inside list-disc space-y-2 text-sm text-slate-300">
                                    <li>Pragmatic, straightforward technical guidance</li>
                                    <li>Founder-friendly language and clear expectations</li>
                                    <li>Decisions that focus on outcomes</li>
                                </ul>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <ul className="list-inside list-disc space-y-2 text-sm text-slate-300">
                                    <li>Years of experience scaling digital products</li>
                                    <li>Work with startups, SMBs, and scale-ups</li>
                                    <li>Deep experience in apps, SaaS, portals, and ecosystems</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                            <p className="text-sm text-slate-200">
                                Fractional cost, full authority. Clear ownership across product and engineering.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section id="contact" className="bg-slate-950 py-16">
                    <div className="mx-auto max-w-5xl px-4">
                        <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                            Start building your North Star
                        </h2>
                        <h3 className="mt-3 text-2xl font-semibold text-slate-50 md:text-3xl">
                            You do not need a full-time CTO.
                            <br />
                            You need the right CTO exactly when the journey demands it.
                        </h3>

                        <p className="mt-4 max-w-xl text-sm text-slate-300">
                            Schedule a 30-minute call to clarify priorities, identify the highest-impact next step, and see how an engagement can fit your stage.
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <a
                                href={mailtoHref}
                                className="inline-flex items-center rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-blue-500/30 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                            >
                                Book a 30-Minute Call
                            </a>

                            <a
                                href={mailtoHref}
                                className="inline-flex items-center rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:border-slate-500 hover:text-slate-50"
                            >
                                Work With Me
                            </a>

                            <p className="mt-3 text-xs text-slate-400">
                                Or email directly at{" "}
                                <a href={mailtoHref} className="font-medium text-blue-300 underline-offset-2 hover:underline">
                                    {EMAIL}
                                </a>
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-slate-900 bg-slate-950 py-6">
                <div className="mx-auto max-w-5xl px-4 text-sm text-slate-400">
                    <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
                        <div>
                            <p className="text-slate-50 font-semibold">NorthStar CTO</p>
                            <p>Fractional CTO services for founders and early-stage startups.</p>
                        </div>

                        <div className="mt-3 md:mt-0">
                            <p className="text-xs text-slate-300">
                                Product Strategy | Architecture | Tech Leadership | Team Management
                            </p>
                            <p className="mt-2 text-xs text-slate-500">© {new Date().getFullYear()} Sanya Khurana</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
