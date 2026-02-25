// app/page.tsx
import Link from "next/link";

const EMAIL = "sanya@monica.in";
const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    "NorthStar CTO Inquiry: Fractional CTO for Founders"
)}`;

export const metadata = {
    title: "Fractional CTO for Growing Businesses | NorthStar CTO — Sanya Khurana",
    description:
        "NorthStar CTO provides Fractional CTO services for growing businesses, small teams, and mission-led organizations. Bring clarity, structure, and reliable technical leadership to your product and operations.",
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
              Fractional CTO for Growing Businesses
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
                                    Build technology your business can depend on.
                                    <br />
                                    With a CTO who brings structure and clarity.
                                </h1>

                                <p className="mt-5 max-w-xl text-sm text-slate-300">
                                    Growing businesses and mission-driven teams succeed when technology supports operations — not complicates them. NorthStar CTO provides senior technical leadership that brings structure, accountability, and steady execution.
                                </p>

                                <ul className="mt-6 grid max-w-md gap-2 text-sm text-slate-300">
                                    <li>Technology strategy aligned to business goals</li>
                                    <li>Scalable and maintainable architecture</li>
                                    <li>Team and vendor oversight</li>
                                    <li>Process clarity and delivery accountability</li>
                                    <li>Flexible monthly or ongoing engagement</li>
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

                {/* Engagement Models */}
                <section id="engage" className="border-t border-slate-900 bg-slate-950 py-16">
                    <div className="mx-auto max-w-5xl px-4">
                        <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                            Engagement models
                        </h2>
                        <h3 className="mt-3 text-2xl font-semibold text-slate-50 md:text-3xl">
                            Choose the working model that fits your stage
                        </h3>
                        <p className="mt-3 max-w-xl text-sm text-slate-300">
                            Each card opens a dedicated page with scope, outcomes, and who it is best for.
                        </p>

                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                            <Link href="/engagement/starter" className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 hover:border-slate-500">
                                <h4 className="text-base font-semibold text-slate-50">Starter CTO</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    8 hours per month. Oversight, review, and structured guidance.
                                </p>
                                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                                    View engagement details →
                                </p>
                            </Link>

                            <Link href="/engagement/growth" className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 hover:border-slate-500">
                                <h4 className="text-base font-semibold text-slate-50">Growth CTO</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    20 hours per month. Active team leadership and delivery management.
                                </p>
                                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                                    View engagement details →
                                </p>
                            </Link>

                            <Link href="/engagement/scale" className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 hover:border-slate-500">
                                <h4 className="text-base font-semibold text-slate-50">Scale CTO</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    40 hours per month. Full technical ownership and cross-team coordination.
                                </p>
                                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                                    View engagement details →
                                </p>
                            </Link>

                            <Link href="/engagement/on-demand" className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 hover:border-slate-500">
                                <h4 className="text-base font-semibold text-slate-50">On-Demand</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    Targeted audits, vendor reviews, or strategic technical consultations.
                                </p>
                                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                                    View engagement details →
                                </p>
                            </Link>
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
                            Growing teams bring ambition. Technology needs direction.
                        </h3>

                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <p className="text-sm text-slate-200">
                                    Clear business goals, unclear technical roadmap
                                </p>
                                <p className="mt-3 text-sm text-slate-300">
                                    Small teams often rely on developers without structured technical leadership.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <p className="text-sm text-slate-200">
                                    Vendors deliver features, not long-term thinking
                                </p>
                                <p className="mt-3 text-sm text-slate-300">
                                    Without oversight, systems become harder to maintain and more expensive over time.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                The result
                            </h4>
                            <p className="mt-3 text-sm text-slate-300">
                                A Fractional CTO aligns business priorities with practical execution — ensuring systems, teams, and budgets move in the same direction.
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
                            Six focused areas that strengthen your technology foundation
                        </h3>

                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">Product Strategy</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    Align business goals with practical, phased technical execution.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">Architecture Design</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    Build systems that remain stable as operations grow.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">Team Leadership</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    Guide internal teams and external vendors with clear accountability.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">Cost Optimization</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    Reduce waste, improve efficiency, and prevent expensive rework.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">Engineering Process</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    Introduce structure, documentation, and delivery discipline.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">Tech Due Diligence</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    Evaluate systems, risks, and scalability before key decisions.
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
                                <h4 className="text-base font-semibold text-slate-50">Business Owners</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    You run a growing company and need technology to become more reliable and scalable.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">Small and Medium Teams</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    You have developers or vendors but need technical leadership and structure.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">Established Digital Products</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    Your systems work — but they need cleanup, optimization, or scaling.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">Mission-Driven Organizations</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    You rely on technology to deliver impact and need steady, accountable oversight.
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
                                    We evaluate operations, workflows, and goals to define clear technical priorities.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">2. Design the Roadmap</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    We create phased, realistic plans aligned with budget and capacity.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">3. Lead the Build</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    I coordinate teams and vendors to ensure consistent delivery and communication.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">4. Review and Scale</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    We refine systems, reduce inefficiencies, and prepare for long-term sustainability.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Teams Trust NorthStar */}
                <section id="trust" className="border-slate-900 bg-slate-950 py-16">
                    <div className="mx-auto max-w-5xl px-4">
                        <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                            Why teams trust NorthStar
                        </h2>

                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <ul className="list-inside list-disc space-y-2 text-sm text-slate-300">
                                    <li>Clear, structured technical decision-making</li>
                                    <li>Business-first thinking</li>
                                    <li>Transparent communication and documentation</li>
                                </ul>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <ul className="list-inside list-disc space-y-2 text-sm text-slate-300">
                                    <li>Experience across SaaS, platforms, and operational systems</li>
                                    <li>Vendor and distributed team management</li>
                                    <li>Long-term sustainability over short-term experimentation</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                            <p className="text-sm text-slate-200">
                                Fractional investment. Long-term clarity and ownership.
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
                            <p>Fractional CTO services for growing businesses and mission-led teams.</p>
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
