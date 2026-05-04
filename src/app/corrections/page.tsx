import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
    title: "Corrections",
    description:
        "Request a correction or review updated stories at StackFlux.",
    keywords: [
        "StackFlux corrections",
        "request a correction",
        "fact-check updates",
        "editorial transparency",
    ],
    alternates: {
        canonical: "/corrections",
    },
    openGraph: {
        title: "Corrections",
        description:
            "Request a correction or review updated stories at StackFlux.",
        url: "/corrections",
        siteName: "StackFlux",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "StackFlux - Corrections",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Corrections",
        description:
            "Request a correction or review updated stories at StackFlux.",
        images: ["/og-image.png"],
    },
};

export default function CorrectionsPage() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-foreground tracking-tighter">
                    Corrections
                </h1>
                <div className="prose prose-zinc dark:prose-invert prose-lg prose-p:text-foreground prose-headings:text-foreground prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:underline prose-a:decoration-indigo-200 dark:prose-a:decoration-indigo-900/50 hover:prose-a:decoration-indigo-500 prose-a:underline-offset-4 prose-a:transition-colors">
                    <p className="text-xl text-foreground dark:text-muted leading-relaxed mb-8">
                        We take accuracy seriously. If you spot an error, please notify us and we will
                        review it promptly.
                    </p>
                    <h2 className="text-3xl font-serif font-bold mt-12 mb-6">How to Request a Correction</h2>
                    <p>
                        Send a concise note with the article URL, the incorrect information, and the
                        source that verifies the correction. We will update the article and note the
                        change on the page.
                    </p>
                    <h2 className="text-3xl font-serif font-bold mt-12 mb-6">Transparency</h2>
                    <p>
                        Material corrections are appended to the story with a timestamp to ensure
                        readers understand what changed and why.
                    </p>
                </div>
            </main>
        </div>
    );
}
