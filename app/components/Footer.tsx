import Link from "next/link";

const EMAIL = "sanya@monica.in";
const emailHref = `mailto:${EMAIL}?subject=${encodeURIComponent("NorthStar CTO Inquiry")}`;
const CALENDLY_URL =
    "https://calendly.com/sanya-6/1-1-call-with-sanya?hide_event_type_details=1&hide_gdpr_banner=1";

export default function Footer() {
    return (
        <footer className="border-t border-slate-900 bg-slate-950 py-10">
            <div className="mx-auto max-w-5xl px-4">
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

                    {/* Brand + CTA */}
                    <div>
                        <p className="font-semibold text-slate-50">NorthStar CTO</p>
                        <p className="mt-1 text-sm text-slate-400">
                            Fractional CTO for growing businesses and mission-led teams.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <a
                                href={CALENDLY_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center rounded-full bg-blue-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-blue-300"
                            >
                                Book a 30-Minute Call
                            </a>
                            <a
                                href={emailHref}
                                className="inline-flex items-center rounded-full border border-slate-700 px-4 py-2 text-xs font-medium text-slate-300 hover:border-slate-500 hover:text-slate-50"
                            >
                                {EMAIL}
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex gap-12 text-sm">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                                Engagements
                            </p>
                            <div className="mt-3 space-y-2">
                                <Link href="/engagement/starter" className="footer-link">Starter CTO</Link>
                                <Link href="/engagement/growth" className="footer-link">Growth CTO</Link>
                                <Link href="/engagement/scale" className="footer-link">Scale CTO</Link>
                                <Link href="/engagement/on-demand" className="footer-link">On-Demand Advisory</Link>
                            </div>
                        </div>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                                Site
                            </p>
                            <div className="mt-3 space-y-2">
                                <Link href="/" className="footer-link">Home</Link>
                                <Link href="/blog" className="footer-link">Blog</Link>
                                <Link href="/#engage" className="footer-link">Engagement Models</Link>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-8 border-t border-slate-900 pt-5">
                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()} Sanya Khurana · Product Strategy · Architecture · Tech Leadership · Team Management
                    </p>
                </div>
            </div>
        </footer>
    );
}
