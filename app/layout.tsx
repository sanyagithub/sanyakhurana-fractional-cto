// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Sanya Khurana • Fractional CTO",
    description:
        "Fractional CTO for non-tech founders and nonprofits. Clarity, strategy, and hands-on tech support without the jargon.",
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
        </body>
        </html>
    );
}
