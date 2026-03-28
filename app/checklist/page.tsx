"use client";

import { useState } from "react";
import Link from "next/link";

const calendlyHref =
    "https://calendly.com/sanya-6/1-1-call-with-sanya?hide_event_type_details=1&hide_gdpr_banner=1";

type CheckItem = { label: string; hint: string };
type Section = { title: string; items: CheckItem[] };

const sections: Section[] = [
    {
        title: "Section 1 · Technology Strategy & Vision",
        items: [
            { label: "We have no clear multi-year technology roadmap.", hint: "You're building sprint-to-sprint without a strategic north star." },
            { label: "Stakeholders / board members ask tech questions we can't confidently answer.", hint: "Investor or donor credibility suffers when tech leadership is absent." },
            { label: "We're unsure which tech stack, platform, or architecture to choose.", hint: "Early decisions lock you in — wrong choices cost years to undo." },
            { label: "We struggle to translate business goals into technical requirements.", hint: "Product and engineering speak different languages internally." },
            { label: "Our technology strategy was last reviewed more than 12 months ago.", hint: "Markets and tools evolve fast; stale strategy = stale product." },
        ],
    },
    {
        title: "Section 2 · Technical Team & Hiring",
        items: [
            { label: "We don't have a technical co-founder or full-time CTO.", hint: "Someone needs to own technology decisions at the leadership level." },
            { label: "We're struggling to hire or vet senior engineers.", hint: "Without a technical leader, you can't assess candidate quality." },
            { label: "We have developers but no one to manage, mentor, or hold them accountable.", hint: "Unmanaged engineers produce inconsistent, unmaintainable code." },
            { label: "Team velocity has dropped and we can't identify the root cause.", hint: "A fCTO can diagnose delivery problems quickly." },
            { label: "We've experienced key-person risk — knowledge lives in one developer's head.", hint: "If they leave, so does institutional knowledge about your systems." },
            { label: "Our engineering team and product team are often misaligned.", hint: "Poor handoffs and unclear specs slow everyone down." },
        ],
    },
    {
        title: "Section 3 · Product Development & Delivery",
        items: [
            { label: "Our product launches are consistently late or over budget.", hint: "Delivery problems usually have structural causes a fCTO can fix." },
            { label: "We have significant technical debt slowing down new features.", hint: "Unmanaged debt compounds — someone needs to prioritise paydown." },
            { label: "We've shipped a product but struggle to scale it as users grow.", hint: "Scaling is a different skill set than building the MVP." },
            { label: "We're evaluating a major build vs. buy vs. integrate decision.", hint: "Wrong choice here wastes months of runway." },
            { label: "Our QA process is informal or non-existent.", hint: "Quality problems erode user trust and donor confidence." },
            { label: "We're about to start a major new product or platform initiative.", hint: "Big initiatives need architecture oversight from day one." },
        ],
    },
    {
        title: "Section 4 · Infrastructure, Security & Compliance",
        items: [
            { label: "We've never had a formal security audit or penetration test.", hint: "Every product handling user data needs a baseline security review." },
            { label: "We handle sensitive data (health, financial, donor/PII) without a clear security policy.", hint: "A breach can end a startup or devastate a non-profit's reputation." },
            { label: "We need to achieve compliance (SOC 2, HIPAA, GDPR, etc.) but don't know where to start.", hint: "Compliance frameworks require technical leadership to implement properly." },
            { label: "We've experienced downtime or data incidents in the past 12 months.", hint: "Repeated incidents signal infrastructure or process debt." },
            { label: "Our cloud costs are growing faster than our usage.", hint: "Cost optimisation requires architectural oversight." },
            { label: "We have no documented disaster-recovery or business-continuity plan.", hint: "One unrecoverable outage can end your organisation." },
        ],
    },
    {
        title: "Section 5 · Vendor, Partner & Stakeholder Management",
        items: [
            { label: "We rely on an agency or outsourced team and struggle to evaluate their work.", hint: "Without technical leadership, you can't assess quality or hold vendors accountable." },
            { label: "Investors, donors, or board members have asked about our tech leadership.", hint: "Credibility gaps here can stall funding rounds or grant applications." },
            { label: "We're in or about to enter a technical due diligence process.", hint: "A fCTO can prepare you and represent you credibly." },
            { label: "We need to integrate with third-party platforms, APIs, or data partners.", hint: "Integration strategy requires senior technical judgement." },
        ],
    },
    {
        title: "Section 6 · Budget & Timing Reality Check",
        items: [
            { label: "We cannot afford a full-time CTO salary right now (typically $200K–$350K+).", hint: "A fractional engagement typically runs $5K–$20K/month — a fraction of the cost." },
            { label: "We need senior tech leadership for a defined period or project, not permanently.", hint: "Fractional is ideal for specific phases: fundraise prep, MVP, scaling." },
            { label: "We're pre-revenue or grant-funded and need to be lean.", hint: "Non-profits especially benefit from fractional models to stretch budgets." },
        ],
    },
];

const triggers: CheckItem[] = [
    { label: "You're 60–90 days from a funding round or major grant application.", hint: "Investors will scrutinise your tech leadership and architecture." },
    { label: "A data breach, security incident, or major outage has already occurred.", hint: "You need senior ownership of the remediation and prevention plan." },
    { label: "You're about to sign a contract that has technology-delivery obligations.", hint: "Contractual tech commitments need someone accountable to own delivery." },
    { label: "Your lead developer has just quit or given notice.", hint: "Knowledge transfer and continuity require immediate senior oversight." },
    { label: "You're entering a regulated industry (health, finance, legal, education).", hint: "Compliance in regulated sectors demands a technically credible leader." },
];

const sectionMaxes = sections.map((s) => s.items.length);
const totalMax = sectionMaxes.reduce((a, b) => a + b, 0); // 30

type Band = "green" | "amber" | "red";

function getBand(score: number): Band {
    if (score <= 7) return "green";
    if (score <= 17) return "amber";
    return "red";
}

const bandConfig: Record<Band, { label: string; headline: string; body: string; color: string }> = {
    green: {
        label: "0 – 7 points",
        headline: "You're in good shape — for now.",
        body: "Your tech function is solid. Consider a one-time advisory engagement to validate your direction.",
        color: "#22c55e",
    },
    amber: {
        label: "8 – 17 points",
        headline: "Strong signal — explore fractional options.",
        body: "You have meaningful gaps. A part-time fCTO 1–2 days/week could unlock significant value.",
        color: "#f59e0b",
    },
    red: {
        label: "18 – 30 points",
        headline: "High priority — act soon.",
        body: "Technology risk is likely slowing your growth or increasing your exposure. Engage a fCTO now.",
        color: "#ef4444",
    },
};

export default function ChecklistPage() {
    // checked[sectionIndex][itemIndex]
    const [checked, setChecked] = useState<boolean[][]>(
        sections.map((s) => Array(s.items.length).fill(false))
    );
    const [triggersChecked, setTriggersChecked] = useState<boolean[]>(
        Array(triggers.length).fill(false)
    );

    const toggle = (si: number, ii: number) => {
        setChecked((prev) => {
            const next = prev.map((row) => [...row]);
            next[si][ii] = !next[si][ii];
            return next;
        });
    };

    const toggleTrigger = (i: number) => {
        setTriggersChecked((prev) => {
            const next = [...prev];
            next[i] = !next[i];
            return next;
        });
    };

    const sectionScores = sections.map((_, si) =>
        checked[si].filter(Boolean).length
    );
    const totalScore = sectionScores.reduce((a, b) => a + b, 0);
    const anyTrigger = triggersChecked.some(Boolean);
    const band = getBand(totalScore);
    const bc = bandConfig[band];
    const showCTA = totalScore >= 8 || anyTrigger;

    return (
        <div className="min-h-screen flex flex-col">

            <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/85 backdrop-blur">
                <div className="mx-auto max-w-3xl px-4 py-3 flex items-center justify-between">
                    <div className="flex flex-col leading-tight">
                        <span className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-400">
                            NorthStar CTO
                        </span>
                        <span className="text-lg font-semibold text-slate-50">
                            Self-Assessment Checklist
                        </span>
                    </div>
                    <Link href="/" className="text-sm text-slate-300 hover:text-slate-50">
                        ← Back to Home
                    </Link>
                </div>
            </header>

            <main className="flex-1">

                {/* HERO */}
                <section className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 py-16 border-b border-slate-900">
                    <div className="mx-auto max-w-3xl px-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                            Fractional CTO
                        </p>
                        <h1 className="mt-3 text-3xl font-semibold leading-tight text-slate-50 md:text-4xl">
                            Do You Need a Fractional CTO?
                        </h1>
                        <p className="mt-4 text-sm text-slate-300 max-w-xl">
                            The Founder &amp; Non-Profit Self-Assessment Checklist. A fractional CTO provides
                            senior technology leadership on a part-time basis — giving early-stage startups
                            and non-profits access to strategic tech expertise without the cost of a full-time
                            executive.
                        </p>
                        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-sm text-slate-300">
                            <span className="font-semibold text-slate-50">How to score: </span>
                            Check every box that is true for your organisation today. Each checked box = 1 point.
                            Your total score and result update live as you go.
                        </div>
                    </div>
                </section>

                {/* SECTIONS */}
                <div className="mx-auto max-w-3xl px-4 py-10 flex flex-col gap-8">
                    {sections.map((section, si) => (
                        <div key={si} className="checklist-section">
                            <div className="checklist-section-header">
                                <span>{section.title}</span>
                                <span className="checklist-score-badge">
                                    {sectionScores[si]} / {sectionMaxes[si]}
                                </span>
                            </div>
                            <div className="checklist-items">
                                {section.items.map((item, ii) => (
                                    <label key={ii} className={`checklist-item${checked[si][ii] ? " checked" : ""}`}>
                                        <input
                                            type="checkbox"
                                            checked={checked[si][ii]}
                                            onChange={() => toggle(si, ii)}
                                        />
                                        <div className="checklist-item-text">
                                            <span className="checklist-item-label">{item.label}</span>
                                            <span className="checklist-item-hint">{item.hint}</span>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* INSTANT YES TRIGGERS */}
                    <div className="checklist-section">
                        <div className="checklist-section-header trigger-header">
                            <span>Instant &lsquo;Yes&rsquo; Triggers — Engage a fCTO Regardless of Score</span>
                        </div>
                        {anyTrigger && (
                            <div className="trigger-banner">
                                You&apos;ve checked an instant trigger. Consider engaging a fractional CTO regardless of your total score.
                            </div>
                        )}
                        <div className="checklist-items">
                            {triggers.map((item, i) => (
                                <label key={i} className={`checklist-item trigger-item${triggersChecked[i] ? " checked" : ""}`}>
                                    <input
                                        type="checkbox"
                                        checked={triggersChecked[i]}
                                        onChange={() => toggleTrigger(i)}
                                    />
                                    <div className="checklist-item-text">
                                        <span className="checklist-item-label">{item.label}</span>
                                        <span className="checklist-item-hint">{item.hint}</span>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* RESULT */}
                    <div className="result-panel" style={{ borderColor: bc.color }}>
                        <div className="result-score">
                            <span className="result-number" style={{ color: bc.color }}>{totalScore}</span>
                            <span className="result-denom">/ {totalMax}</span>
                        </div>
                        <div className="result-body">
                            <p className="result-band" style={{ color: bc.color }}>{bc.label}</p>
                            <p className="result-headline">{bc.headline}</p>
                            <p className="result-text">{bc.body}</p>
                            {showCTA && (
                                <div className="mt-6">
                                    <a
                                        href={calendlyHref}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-blue-300 inline-block"
                                    >
                                        Book a Free 30-Minute Call
                                    </a>
                                    <p className="mt-3 text-xs text-slate-500">
                                        Confidential discussion · Direct access · No obligation
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* DISCLAIMER */}
                    <p className="text-xs text-slate-600 text-center pb-4">
                        This checklist is a self-assessment tool, not professional advice. Results depend on honest self-evaluation.
                        Consult a qualified advisor before making engagement decisions.
                    </p>
                </div>

            </main>
        </div>
    );
}
