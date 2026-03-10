// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import Footer from "./components/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://main.d1ga8qx66iqcsz.amplifyapp.com";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        template: "%s | NorthStar CTO",
        default: "Fractional CTO for Founders | NorthStar CTO — Sanya Khurana",
    },
    description:
        "NorthStar CTO provides Fractional CTO services for non-technical founders and growing teams. Senior technical strategy, vendor accountability, and delivery leadership — without the full-time cost.",
    openGraph: {
        siteName: "NorthStar CTO",
        type: "website",
        locale: "en_GB",
        alternateLocale: ["en_US"],
    },
    twitter: {
        card: "summary_large_image",
        site: "@northstarcto",
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="bg-slate-950 text-slate-50 antialiased">
        {children}
        <Footer />
        </body>
        </html>
    );
}
