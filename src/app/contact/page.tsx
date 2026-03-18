import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
    title: "Contact StackFlux",
    description:
        "Contact the StackFlux editorial team for tips, story ideas, and partnerships.",
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact StackFlux",
        description:
            "Contact the StackFlux editorial team for tips, story ideas, and partnerships.",
        url: "/contact",
        siteName: "StackFlux",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "StackFlux - Contact",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact StackFlux",
        description:
            "Contact the StackFlux editorial team for tips, story ideas, and partnerships.",
        images: ["/og-image.png"],
    },
};

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-foreground tracking-tighter">
                    Contact
                </h1>
                <div className="prose prose-zinc dark:prose-invert prose-lg prose-p:text-foreground prose-headings:text-foreground prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:underline prose-a:decoration-indigo-200 dark:prose-a:decoration-indigo-900/50 hover:prose-a:decoration-indigo-500 prose-a:underline-offset-4 prose-a:transition-colors">
                    <p className="text-xl text-foreground dark:text-muted leading-relaxed mb-8">
                        We welcome tips, story ideas, and partnerships related to AI, startups,
                        and modern software engineering.
                    </p>
                    <h2 className="text-3xl font-serif font-bold mt-12 mb-6">Reach the Team</h2>
                    <p>
                        For editorial inquiries, include relevant links, primary sources, and a short
                        summary. We respond to high-signal submissions as quickly as possible.
                    </p>
                    <p>
                        Email: <strong>editorial@stackflux.com</strong>
                    </p>
                </div>
            </main>
        </div>
    );
}
