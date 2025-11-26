// app/page.tsx

const EMAIL = "sanya@monica.in";
const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    "Fractional CTO for Founders: Inquiry"
)}`;

export const metadata = {
    title: "Fractional CTO for Founders | Sanya Khurana",
    description:
        "Fractional CTO for Founders. Part-time technical leadership for non-technical founders and mission-driven teams. Clear technical strategy, practical roadmaps, and hands-on delivery.",
};

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Top Navigation */}
            <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/85 backdrop-blur">
                <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
                    <div className="flex flex-col leading-tight">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-400">
              Fractional CTO
            </span>
                        <span className="text-lg font-semibold text-slate-50">
              Sanya Khurana
            </span>
                    </div>

                    <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
                        <a href="#home" className="hover:text-slate-50">
                            Home
                        </a>
                        <a href="#about" className="hover:text-slate-50">
                            About
                        </a>
                        <a href="#services" className="hover:text-slate-50">
                            Services
                        </a>
                        <a href="#why" className="hover:text-slate-50">
                            Why work with me
                        </a>
                        <a href="#contact" className="hover:text-slate-50">
                            Contact
                        </a>
                    </nav>

                    <a
                        href={mailtoHref}
                        className="ml-4 inline-flex items-center rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-md shadow-blue-500/30 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                    >
                        Request a consultation
                    </a>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1">
                {/* HERO / HOME */}
                <section
                    id="home"
                    className="border-b border-slate-900 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
                >
                    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-16 pt-12 md:flex-row md:items-center md:pb-24 md:pt-16">
                        {/* Left – Hero Text */}
                        <div className="md:w-3/5">
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                                Fractional CTO for Founders
                            </p>

                            <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl md:text-5xl">
                                Fractional CTO for Founders: clear technical strategy and practical roadmaps
                            </h1>

                            <p className="mt-5 max-w-xl text-sm text-slate-300">
                                I partner with founders and mission-driven teams to define technical priorities, align engineering to product outcomes, and deliver concrete steps that create momentum.
                            </p>

                            <div className="mt-6 flex flex-wrap items-center gap-3">
                                <a
                                    href={mailtoHref}
                                    className="inline-flex items-center rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-blue-500/30 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                                >
                                    Request a consultation
                                </a>
                                <a
                                    href="#about"
                                    className="inline-flex items-center rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:border-slate-500 hover:text-slate-50"
                                >
                                    How I work
                                </a>
                            </div>
                        </div>

                        {/* Right – Pain & Relief */}
                        <div className="md:w-2/5">
                            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 shadow-lg shadow-slate-900/60">
                                <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                                    Common situations
                                </h2>
                                <p className="mt-2 text-sm text-slate-200">
                                    You have a product vision and need clear technical direction to reach it.
                                </p>

                                <div className="mt-4 space-y-3 text-sm text-slate-300">
                                    <ul className="space-y-1.5">
                                        <li>Which technology fits our goals and budget</li>
                                        <li>How to deliver predictable, regular releases</li>
                                        <li>How to design systems that scale with growth</li>
                                    </ul>

                                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                                        The outcome
                                    </p>
                                    <p>Clear recommendations and a practical plan you can act on today.</p>

                                    <p className="mt-2 font-medium text-blue-200">
                                        Calm technical leadership, aligned to your mission and timeline.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* What I bring */}
                    <div className="mx-auto max-w-5xl px-4 pb-16">
                        <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                            What I bring
                        </h2>
                        <div className="mt-5 grid gap-5 md:grid-cols-2">
                            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                                <p className="text-slate-50">Strategic clarity</p>
                                <p className="mt-1 text-sm text-slate-300">
                                    A concise shared view of product goals, priorities, and next steps.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                                <p className="text-slate-50">Purposeful trade-offs</p>
                                <p className="mt-1 text-sm text-slate-300">
                                    Decisions that balance cost, risk, and impact with real constraints in mind.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                                <p className="text-slate-50">Human-centered product thinking</p>
                                <p className="mt-1 text-sm text-slate-300">
                                    Experiences that feel intuitive for the people you serve.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                                <p className="text-slate-50">Hands-on delivery</p>
                                <p className="mt-1 text-sm text-slate-300">
                                    Prototypes and focused builds that validate choices and unlock progress.
                                </p>
                            </div>
                        </div>

                        <p className="mt-4 text-sm text-slate-300">
                            You keep the vision. I translate it into systems, teams, and decisions that deliver results.
                        </p>

                        <div className="mt-5">
                            <a
                                href={mailtoHref}
                                className="inline-flex items-center rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-blue-500/30 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                            >
                                Request a consultation
                            </a>
                        </div>
                    </div>
                </section>

                {/* ABOUT */}
                <section
                    id="about"
                    className="border-b border-slate-900 bg-slate-950 py-16"
                >
                    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 md:flex-row md:items-start">
                        {/* Text */}
                        <div className="md:w-3/5">
                            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                                About
                            </h2>
                            <h3 className="mt-3 text-2xl font-semibold text-slate-50 md:text-3xl">
                                I am Sanya. I translate vision into reliable engineering.
                            </h3>

                            <p className="mt-5 text-sm text-slate-300">
                                I spent five years at Adobe as a Computer Scientist on the{" "}
                                <span className="font-medium text-slate-100">Document Cloud</span>{" "}
                                team, building systems for documents and automation at scale.
                            </p>

                            <p className="mt-3 text-sm text-slate-300">
                                I build an{" "}
                                <span className="font-medium text-slate-100">AI tool that helps poets scan meter</span>{" "}
                                because technology should amplify creativity.
                            </p>

                            <p className="mt-3 text-sm text-slate-300">
                                I work with founders who want steady technical leadership and clear decisions. I explain what matters and show the next practical steps.
                            </p>

                            <div className="mt-5 space-y-2 text-sm text-slate-200">
                                <p>I help you move from:</p>
                                <ul className="space-y-1 text-slate-300">
                                    <li>
                                        <span className="font-medium text-slate-100">“I have an idea.”</span>{" "}
                                        →{" "}
                                        <span className="font-medium text-slate-100">“We are building the right thing.”</span>
                                    </li>
                                    <li>
                                        <span className="font-medium text-slate-100">“I feel overwhelmed.”</span>{" "}
                                        →{" "}
                                        <span className="font-medium text-slate-100">“I know the next three steps.”</span>
                                    </li>
                                    <li>
                                        <span className="font-medium text-slate-100">“Can tech help?”</span>{" "}
                                        →{" "}
                                        <span className="font-medium text-slate-100">“Here is the plan.”</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Side Card */}
                        <div className="md:w-2/5">
                            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                    In one line
                                </p>
                                <p className="mt-2 text-sm text-slate-100">
                                    Fractional CTO for founders and mission-driven teams who want clear technical leadership.
                                </p>

                                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                    How I think
                                </p>
                                <p className="mt-2 text-sm text-slate-200 italic">
                                    Technology should be purposeful and human. When systems fit people, teams perform at their best.
                                </p>

                                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                    Ideal partners
                                </p>
                                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                                    <li>Non-technical startup founders</li>
                                    <li>Impact-driven organizations</li>
                                    <li>Early teams investing in durable foundations</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICES */}
                <section
                    id="services"
                    className="border-b border-slate-900 bg-slate-950 py-16"
                >
                    <div className="mx-auto max-w-5xl px-4">
                        <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                            Services
                        </h2>
                        <h3 className="mt-3 text-2xl font-semibold text-slate-50 md:text-3xl">
                            Practical outcomes that advance your mission
                        </h3>
                        <p className="mt-3 text-sm text-slate-300">
                            Systems, product decisions, and technical leadership that move your work forward.
                        </p>

                        <div className="mt-8 grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">
                                    Fractional CTO leadership
                                </h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    Part-time technical leadership, architecture, and decision-making that keep momentum and manage technical risk.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">
                                    Product and UX guidance
                                </h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    Clear product priorities and UX trade-offs that improve adoption and retention.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">
                                    Technical architecture
                                </h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    Data, integrations, and infrastructure designed to scale without unnecessary rework.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">
                                    Hands-on AI and full-stack development
                                </h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    Focused prototypes and features that validate ideas and unlock decisions.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                Outcomes you can expect
                            </h4>
                            <ul className="mt-3 grid gap-2 text-sm text-slate-200 md:grid-cols-2">
                                <li>Clear, explained technical decisions</li>
                                <li>A roadmap that endures reality</li>
                                <li>Fluent communication between product and engineering</li>
                                <li>Confidence that progress is intentional</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* WHY ME */}
                <section
                    id="why"
                    className="border-b border-slate-900 bg-slate-950 py-16"
                >
                    <div className="mx-auto max-w-5xl px-4">
                        <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                            Why work with me
                        </h2>
                        <h3 className="mt-3 text-2xl font-semibold text-slate-50 md:text-3xl">
                            Make technology a reliable lever for your mission
                        </h3>

                        <p className="mt-4 text-sm text-slate-300">
                            I remove jargon and focus conversations on the outcomes that matter to your users and stakeholders.
                        </p>

                        <div className="mt-8 grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">
                                    Shield from developer drama
                                </h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    Clear scope and expectations make technical work predictable and manageable.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">
                                    Spend with intention
                                </h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    We prioritize work so every rupee and hour delivers measurable value.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">
                                    Confidence in technical rooms
                                </h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    I translate technical conversations into clear, business-aligned recommendations.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <h4 className="text-base font-semibold text-slate-50">
                                    Fast, steady progress
                                </h4>
                                <p className="mt-2 text-sm text-slate-300">
                                    Clarity first, disciplined execution second, consistent results over time.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONTACT */}
                <section id="contact" className="bg-slate-950 py-16">
                    <div className="mx-auto max-w-5xl px-4">
                        <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                            Contact
                        </h2>
                        <h3 className="mt-3 text-2xl font-semibold text-slate-50 md:text-3xl">
                            Start the conversation
                        </h3>

                        <p className="mt-4 max-w-xl text-sm text-slate-300">
                            Share what you are building, the current priorities, and the outcome you need. I will propose the highest-impact next steps.
                        </p>

                        <div className="mt-6">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                Email prompt
                            </p>
                            <p className="mt-2 text-sm text-slate-200">
                                Briefly: what you are building, the obstacle you face, and the impact you need.
                            </p>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <a
                                href={mailtoHref}
                                className="inline-flex items-center rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-blue-500/30 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                            >
                                Request a consultation
                            </a>
                            <p className="text-xs text-slate-400">
                                Or email me at{" "}
                                <a
                                    href={mailtoHref}
                                    className="font-medium text-blue-300 underline-offset-2 hover:underline"
                                >
                                    {EMAIL}
                                </a>
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-slate-900 bg-slate-950 py-6">
                <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 text-xs text-slate-500 md:flex-row">
                    <p>© {new Date().getFullYear()} Sanya Khurana. All rights reserved.</p>
                    <p className="text-[0.7rem]">
                        Technology as a lever for human-centered results.
                    </p>
                </div>
            </footer>
        </div>
    );
}
