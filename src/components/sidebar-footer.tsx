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
        <footer className="mt-12 flex flex-wrap gap-x-2 gap-y-3 text-xs text-muted font-medium justify-center items-center">
            {links.map((link, index) => (
                <div key={link.name} className="flex items-center gap-2">
                    <Link href={link.href} className="hover:text-foreground transition-colors">
                        {link.name}
                    </Link>
                    {index < links.length - 1 && <span className="text-zinc-300 dark:text-zinc-700">•</span>}
                </div>
            ))}
        </footer>
    );
}
