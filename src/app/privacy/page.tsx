import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "StackFlux privacy policy and how we handle data, cookies, and subscriber information.",
    keywords: [
        "StackFlux privacy policy",
        "data handling",
        "cookie policy",
        "subscriber privacy",
    ],
    alternates: {
        canonical: "/privacy",
    },
    openGraph: {
        title: "Privacy Policy",
        description:
            "StackFlux privacy policy and how we handle data, cookies, and subscriber information.",
        url: "/privacy",
        siteName: "StackFlux",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "StackFlux - Privacy Policy",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy",
        description:
            "StackFlux privacy policy and how we handle data, cookies, and subscriber information.",
        images: ["/og-image.png"],
    },
};

export default function PrivacyPage() {
    const lastUpdated = "February 24, 2026";

    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-foreground tracking-tighter">
                    Privacy Policy
                </h1>
                <p className="text-sm text-foreground dark:text-muted uppercase tracking-widest mb-12">Last Updated: {lastUpdated}</p>

                <div className="prose prose-zinc dark:prose-invert prose-lg prose-p:text-foreground prose-headings:text-foreground prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:underline prose-a:decoration-indigo-200 dark:prose-a:decoration-indigo-900/50 hover:prose-a:decoration-indigo-500 prose-a:underline-offset-4 prose-a:transition-colors">
                    <p>
                        At StackFlux, we take your privacy seriously. This policy outlines how we handle your data.
                    </p>

                    <h2 className="text-3xl font-serif font-bold mt-12 mb-6">1. Data Collection</h2>
                    <p>
                        We only collect your email address when you explicitly subscribe to our newsletter. We do not
                        sell or share your data with third parties for marketing purposes.
                    </p>

                    <h2 className="text-3xl font-serif font-bold mt-12 mb-6">2. Cookies</h2>
                    <p>
                        We use minimal cookies to remember your theme preference (light vs dark) and to analyze
                        anonymized traffic data to improve our content.
                    </p>

                    <h2 className="text-3xl font-serif font-bold mt-12 mb-6">3. Your Rights</h2>
                    <p>
                        You can unsubscribe from our newsletter at any time by clicking the "Unsubscribe" link
                        at the bottom of our emails.
                    </p>
                </div>
            </main>
        </div>
    );
}
