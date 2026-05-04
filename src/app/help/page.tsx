import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
    title: "Help Center",
    description:
        "Get help with StackFlux subscriptions, contributions, and support.",
    keywords: [
        "StackFlux help center",
        "subscription support",
        "contributor questions",
        "contact support",
    ],
    alternates: {
        canonical: "/help",
    },
    openGraph: {
        title: "Help Center",
        description:
            "Get help with StackFlux subscriptions, contributions, and support.",
        url: "/help",
        siteName: "StackFlux",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "StackFlux - Help Center",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Help Center",
        description:
            "Get help with StackFlux subscriptions, contributions, and support.",
        images: ["/og-image.png"],
    },
};

export default function HelpPage() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-foreground tracking-tighter">
                    Help Center
                </h1>
                <div className="prose prose-zinc dark:prose-invert prose-lg prose-p:text-foreground prose-headings:text-foreground prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:underline prose-a:decoration-indigo-200 dark:prose-a:decoration-indigo-900/50 hover:prose-a:decoration-indigo-500 prose-a:underline-offset-4 prose-a:transition-colors">
                    <p className="text-xl text-foreground dark:text-muted leading-relaxed mb-8">
                        Need assistance with StackFlux? You've come to the right place.
                    </p>

                    <h2 className="text-3xl font-serif font-bold mt-12 mb-6">Common Questions</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold mb-2">How do I subscribe?</h3>
                            <p>You can subscribe to our newsletter by entering your email in the sidebar on our homepage.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Can I contribute an article?</h3>
                            <p>We are currently invite-only, but we're looking to open up submissions in the near future.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">How do I contact support?</h3>
                            <p>For any direct inquiries, please reach out to hello@stackflux.tech.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
