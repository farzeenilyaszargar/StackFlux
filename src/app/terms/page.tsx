import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
    title: "Terms of Service",
    description:
        "StackFlux terms of service and usage guidelines.",
    alternates: {
        canonical: "/terms",
    },
    openGraph: {
        title: "Terms of Service",
        description:
            "StackFlux terms of service and usage guidelines.",
        url: "/terms",
        siteName: "StackFlux",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "StackFlux - Terms of Service",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Terms of Service",
        description:
            "StackFlux terms of service and usage guidelines.",
        images: ["/og-image.png"],
    },
};

export default function TermsPage() {
    const lastUpdated = "February 24, 2026";

    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-foreground tracking-tighter">
                    Terms of Service
                </h1>
                <p className="text-sm text-foreground dark:text-muted uppercase tracking-widest mb-12">Last Updated: {lastUpdated}</p>

                <div className="prose prose-zinc dark:prose-invert prose-lg prose-p:text-foreground prose-headings:text-foreground prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:underline prose-a:decoration-indigo-200 dark:prose-a:decoration-indigo-900/50 hover:prose-a:decoration-indigo-500 prose-a:underline-offset-4 prose-a:transition-colors">
                    <p>
                        By using StackFlux, you agree to the following terms and conditions.
                    </p>

                    <h2 className="text-3xl font-serif font-bold mt-12 mb-6">1. Usage</h2>
                    <p>
                        StackFlux is for personal, non-commercial use. All content is protected by copyright
                        laws and may not be reproduced without explicit permission.
                    </p>

                    <h2 className="text-3xl font-serif font-bold mt-12 mb-6">2. Content Accuracy</h2>
                    <p>
                        While we strive for accuracy, our content is for informational purposes only. StackFlux
                        is not liable for decisions made based on our publications.
                    </p>

                    <h2 className="text-3xl font-serif font-bold mt-12 mb-6">3. Modifications</h2>
                    <p>
                        We reserve the right to update these terms at any time. Continued use of the site
                        constitutes acceptance of the new terms.
                    </p>
                </div>
            </main>
        </div>
    );
}
