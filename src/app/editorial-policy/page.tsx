import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
    title: "Editorial Policy",
    description:
        "How StackFlux reports, sources, and corrects stories.",
    alternates: {
        canonical: "/editorial-policy",
    },
    openGraph: {
        title: "Editorial Policy",
        description:
            "How StackFlux reports, sources, and corrects stories.",
        url: "/editorial-policy",
        siteName: "StackFlux",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "StackFlux - Editorial Policy",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Editorial Policy",
        description:
            "How StackFlux reports, sources, and corrects stories.",
        images: ["/og-image.png"],
    },
};

export default function EditorialPolicyPage() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-foreground tracking-tighter">
                    Editorial Policy
                </h1>
                <div className="prose prose-zinc dark:prose-invert prose-lg prose-p:text-foreground prose-headings:text-foreground prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:underline prose-a:decoration-indigo-200 dark:prose-a:decoration-indigo-900/50 hover:prose-a:decoration-indigo-500 prose-a:underline-offset-4 prose-a:transition-colors">
                    <p className="text-xl text-foreground dark:text-muted leading-relaxed mb-8">
                        StackFlux is committed to accurate, independent reporting. We separate news,
                        analysis, and opinion to help readers understand the difference between facts
                        and interpretation.
                    </p>
                    <h2 className="text-3xl font-serif font-bold mt-12 mb-6">Sourcing</h2>
                    <p>
                        We prioritize primary sources such as filings, official statements, technical
                        documentation, and first-hand interviews. When we rely on secondary sources,
                        we verify details with additional references.
                    </p>
                    <h2 className="text-3xl font-serif font-bold mt-12 mb-6">Corrections</h2>
                    <p>
                        If we make an error, we correct it promptly and note the update on the story
                        page. Readers can flag issues through our corrections page.
                    </p>
                    <h2 className="text-3xl font-serif font-bold mt-12 mb-6">Independence</h2>
                    <p>
                        Editorial decisions are made independently of business interests. Sponsored
                        content is clearly labeled and never mixed with newsroom reporting.
                    </p>
                    <h2 className="text-3xl font-serif font-bold mt-12 mb-6">Updates</h2>
                    <p>
                        We update stories when new information emerges and timestamp those updates
                        to preserve transparency.
                    </p>
                </div>
            </main>
        </div>
    );
}
