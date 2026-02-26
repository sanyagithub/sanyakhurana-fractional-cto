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
                            Fractional CTO for Growing Businesses
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
                                    Build reliable technology.
                                    <br />
                                    Scale with clarity.
                                </h1>

                                <p className="mt-5 max-w-xl text-sm text-slate-300">
                                    Fractional CTO leadership for teams that need senior technical direction,
                                    stronger execution discipline, and dependable delivery without full-time overhead.
                                </p>

                                <ul className="mt-6 grid max-w-md gap-2 text-sm text-slate-300">
                                    <li>Business-aligned product and technical roadmap</li>
                                    <li>Team and vendor accountability</li>
                                    <li>Architecture decisions that scale cleanly</li>
                                    <li>Delivery rhythm and risk visibility</li>
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

                            <div className="md:w-2/5">
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                    <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                                        Core offerings
                                    </h2>
                                    <div className="mt-3 space-y-2 text-sm text-slate-300">
                                        <p>Product strategy for the next stage of growth</p>
                                        <p>Architecture governance and modernization planning</p>
                                        <p>Leadership for teams and delivery operations</p>
                                        <p>Vendor oversight with measurable accountability</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                Trusted outcomes
                            </p>
                            <div className="mt-3 grid gap-3 md:grid-cols-2">
                                <p className="text-sm text-slate-200">Reduce technical drift with structured CTO oversight</p>
                                <p className="text-sm text-slate-200">Improve delivery confidence before major investments</p>
                                <p className="text-sm text-slate-200">Turn vendor output into business-aligned execution</p>
                                <p className="text-sm text-slate-200">Maintain senior leadership without full-time cost</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="engage" className="border-t border-slate-900 bg-slate-950 py-20">
                    <div className="mx-auto max-w-5xl px-4">
                        <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                            Engagement models
                        </h2>
                        <h3 className="mt-3 text-2xl font-semibold text-slate-50 md:text-3xl">
                            Choose the model that matches your stage
                        </h3>
                        <p className="mt-4 max-w-xl text-sm text-slate-300">
                            Every card is clickable and opens a detailed engagement page.
                        </p>

                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                            <Link href="/engagement/starter" className="engagement-card rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">Starter CTO</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    8 hours per month. Oversight, review, and structured guidance.
                                </p>
                                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                                    View engagement details -&gt;
                                </p>
                            </Link>

                            <Link href="/engagement/growth" className="engagement-card rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">Growth CTO</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    20 hours per month. Active team leadership and delivery management.
                                </p>
                                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                                    View engagement details -&gt;
                                </p>
                            </Link>

                            <Link href="/engagement/scale" className="engagement-card rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">Scale CTO</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    40 hours per month. Executive-level ownership across systems and teams.
                                </p>
                                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                                    View engagement details -&gt;
                                </p>
                            </Link>

                            <Link href="/engagement/on-demand" className="engagement-card rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">On-Demand Advisory</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    Audits, vendor reviews, and strategic decisions with independent judgment.
                                </p>
                                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                                    View engagement details -&gt;
                                </p>
                            </Link>
                        </div>
                    </div>
                </section>

                <section id="why" className="border-t border-slate-900 bg-slate-950 py-20">
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
                                    Vendors ship features, not long-term technical stability
                                </p>
                                <p className="mt-3 text-sm text-slate-300">
                                    Without oversight, systems become harder to maintain and more expensive over time.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="what" className="border-t border-slate-900 bg-slate-950 py-20">
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

                <section id="method" className="border-t border-slate-900 bg-slate-950 py-20">
                    <div className="mx-auto max-w-5xl px-4">
                        <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                            The NorthStar Method
                        </h2>
                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">1. Understand the Vision</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    Evaluate operations, workflows, and goals to define technical priorities.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">2. Design the Roadmap</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    Create phased plans aligned with budget, team capacity, and timing.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">3. Lead the Build</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    Coordinate teams and vendors to keep delivery consistent and predictable.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">4. Review and Scale</h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    Refine systems, reduce inefficiencies, and prepare for long-term scale.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/*<section id="blog" className="border-t border-slate-900 bg-slate-950 py-20">*/}
                {/*    <div className="mx-auto max-w-5xl px-4">*/}
                {/*        <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">*/}
                {/*            Insights*/}
                {/*        </h2>*/}
                {/*        <h3 className="mt-3 text-2xl font-semibold text-slate-50 md:text-3xl">*/}
                {/*            Blog and video library*/}
                {/*        </h3>*/}
                {/*        <p className="mt-4 max-w-xl text-sm text-slate-300">*/}
                {/*            Publish written posts and video content from one place. Add new entries by updating the posts file in the codebase.*/}
                {/*        </p>*/}

                {/*        <div className="mt-6 grid gap-6 md:grid-cols-2">*/}
                {/*            <Link href="/blog" className="engagement-card rounded-2xl border border-slate-800 bg-slate-900/70 p-5">*/}
                {/*                <h4 className="text-base font-semibold text-slate-50">Open Blog</h4>*/}
                {/*                <p className="mt-2 text-sm text-slate-300">*/}
                {/*                    Read articles and watch published videos.*/}
                {/*                </p>*/}
                {/*                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">*/}
                {/*                    Browse all posts -&gt;*/}
                {/*                </p>*/}
                {/*            </Link>*/}

                {/*            /!*<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">*!/*/}
                {/*            /!*    <h4 className="text-base font-semibold text-slate-50">Content workflow</h4>*!/*/}
                {/*            /!*    <p className="mt-2 text-sm text-slate-300">*!/*/}
                {/*            /!*        Add a new post or video in one file, then deploy. No extra CMS needed.*!/*/}
                {/*            /!*    </p>*!/*/}
                {/*            /!*    <p className="mt-3 text-xs text-slate-400">*!/*/}
                {/*            /!*        Supports text posts, YouTube embeds, and local video links.*!/*/}
                {/*            /!*    </p>*!/*/}
                {/*            /!*</div>*!/*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}

                <section id="contact" className="border-t border-slate-900 bg-slate-950 py-20">
                    <div className="mx-auto max-w-5xl px-4">
                        <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                            Start building your North Star
                        </h2>
                        <h3 className="mt-3 text-2xl font-semibold text-slate-50 md:text-3xl">
                            Clarity first. Investment second.
                        </h3>

                        <p className="mt-4 max-w-xl text-sm text-slate-300">
                            Book a focused 30-minute call to align priorities, identify risks, and decide the right engagement model.
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

                            <p className="mt-3 text-xs text-slate-400">
                                Or email directly at{" "}
                                <a href={emailHref} className="font-medium text-blue-300 underline-offset-2 hover:underline">
                                    {EMAIL}
                                </a>
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-800 bg-slate-950/85 backdrop-blur px-4 py-3 md:hidden">
                <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-blue-500/30"
                    style={{ width: "100%" }}
                >
                    Book a 30-Minute Call
                </a>
            </div>

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
