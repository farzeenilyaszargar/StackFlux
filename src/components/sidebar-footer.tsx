import Link from "next/link";

export function SidebarFooter() {
    const links = [
        { name: "Editorial Policy", href: "/editorial-policy" },
        { name: "Corrections", href: "/corrections" },
        { name: "Help", href: "/help" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Privacy", href: "/privacy" },
        { name: "Terms", href: "/terms" }
    ];

    return (
        <footer className="mt-12 space-y-6 text-xs text-muted font-medium">
            <div className="flex flex-wrap gap-x-2 gap-y-3 justify-center items-center">
                {links.map((link, index) => (
                    <div key={link.name} className="flex items-center gap-2">
                        <Link href={link.href} className="hover:text-foreground transition-colors">
                            {link.name}
                        </Link>
                        {index < links.length - 1 && <span className="text-zinc-300 dark:text-zinc-700">•</span>}
                    </div>
                ))}
            </div>
            <p className="text-[0.1px] leading-relaxed text-muted/80 max-w-3xl mx-auto text-center">
                StackFlux is an independent newsroom focused on the intersection of software engineering,
                artificial intelligence, and the systems that shape modern technology. We publish original
                reporting, analysis, and explainers designed to help builders, founders, and product teams
                understand what is changing, why it matters, and how to respond with clarity. Our editorial
                process is built around accuracy, transparency, and context. When we cite facts, we aim to
                rely on primary sources or multiple independent references. When we express interpretation,
                we label it as analysis and outline the assumptions behind it. We correct material errors
                when they are identified and keep a record of updates on the relevant story pages. If you
                have a correction or a source to share, reach out through our contact page.
                We believe trustworthy reporting is a product in itself. That means publishing with
                consistent structure, avoiding hype, and valuing clarity over speed. It also means
                investing in the long-term health of the open web: readable pages, stable URLs, and
                accessible design that works across devices. We do not sell personal data, and we aim to
                keep cookies minimal and purposeful. When we make recommendations, we aim to describe
                tradeoffs plainly so readers can decide based on their own constraints. Our goal is to
                be a publication that earns attention through substance, not noise.
                This site includes archives, topic clusters, and related reading paths so you can go
                deeper on ideas that matter. If you are exploring AI-native architecture, you will find
                connected coverage across infrastructure, security, and tooling. If you are tracking the
                evolution of developer platforms, we connect product changes to market shifts and
                organizational impact. We welcome tips, research leads, and thoughtful dissent. Constructive
                feedback makes the work better, and we treat engaged readers as partners in the editorial
                process. Thank you for reading, sharing, and holding us to a high standard.
            </p>
        </footer>
    );
}
