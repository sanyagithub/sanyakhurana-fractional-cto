// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import Footer from "./components/Footer";

export const metadata: Metadata = {
    metadataBase: new URL("https://northstarcto.com"),
    title: "Sanya Khurana • Fractional CTO",
    description:
        "Fractional CTO for non-tech founders and nonprofits. Clarity, strategy, and hands-on tech support without the jargon.",
    openGraph: {
        siteName: "NorthStar CTO",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/sanya.jpeg",
                width: 1200,
                height: 630,
                alt: "Sanya Khurana — NorthStar CTO",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        images: ["/sanya.jpeg"],
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
