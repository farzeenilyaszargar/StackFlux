import { Navbar } from "@/components/navbar";

export default function PrivacyPage() {
    const lastUpdated = "February 24, 2026";

    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-foreground tracking-tighter">
                    Privacy Policy
                </h1>
                <p className="text-sm text-muted uppercase tracking-widest mb-12">Last Updated: {lastUpdated}</p>

                <div className="prose prose-zinc dark:prose-invert prose-lg">
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
