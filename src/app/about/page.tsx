import { Navbar } from "@/components/navbar";

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-foreground tracking-tighter">
                    About StackFlux
                </h1>
                <div className="prose prose-zinc dark:prose-invert prose-lg prose-p:text-foreground prose-headings:text-foreground prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:underline prose-a:decoration-indigo-200 dark:prose-a:decoration-indigo-900/50 hover:prose-a:decoration-indigo-500 prose-a:underline-offset-4 prose-a:transition-colors">
                    <p className="text-xl text-foreground dark:text-muted leading-relaxed mb-8">
                        StackFlux is a next-generation tech publication dedicated to uncovering the stories behind the code.
                        We focus on the intersection of artificial intelligence, high-growth startups, and the future of engineering.
                    </p>
                    <h2 className="text-3xl font-serif font-bold mt-12 mb-6">Our Mission</h2>
                    <p>
                        In a world overwhelmed by noise, we aim to provide signal. Our goal is to empower developers,
                        founders, and tech enthusiasts with deep-dive analysis and thought-provoking insights.
                    </p>
                    <h2 className="text-3xl font-serif font-bold mt-12 mb-6">Why Signal over Noise?</h2>
                    <p>
                        We believe that the best software is built with intention. Similarly, the best information is
                        curated with care. StackFlux is built for those who want to understand the *why* behind the *how*.
                    </p>
                </div>
            </main>
        </div>
    );
}
