import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
    items: {
        name: string;
        href: string;
    }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav className="flex items-center space-x-2 text-[10px] sm:text-xs text-muted uppercase tracking-widest mb-8 overflow-x-auto whitespace-nowrap pb-2 sm:pb-0 scrollbar-hide">
            <Link
                href="/"
                className="hover:text-foreground transition-colors flex items-center gap-1"
                aria-label="Home"
            >
                <Home className="w-3 h-3" />
                <span className="hidden sm:inline">Home</span>
            </Link>

            {items.map((item, index) => (
                <div key={item.href} className="flex items-center space-x-2">
                    <ChevronRight className="w-3 h-3 opacity-30" />
                    <Link
                        href={item.href}
                        className={`hover:text-foreground transition-colors ${index === items.length - 1 ? "text-foreground font-bold pointer-events-none" : ""
                            }`}
                        aria-current={index === items.length - 1 ? "page" : undefined}
                    >
                        {item.name}
                    </Link>
                </div>
            ))}
        </nav>
    );
}
