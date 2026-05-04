"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { ThemeToggle } from "./theme-toggle";

const Search = dynamic(() => import("./search").then((mod) => mod.Search), {
    ssr: false,
    loading: () => null,
});

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between sm:justify-center h-16 sm:h-20">
                    {/* Logo container */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center group">
                            <span className="text-3xl sm:text-4xl md:text-5xl font-serif italic tracking-tighter text-foreground group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-all duration-300 drop-shadow-[0_0_45px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_0_50px_rgba(255,255,255,0.35)]">
                                StackFlux
                            </span>
                        </Link>
                    </div>

                    {/* Right side controls */}
                    <div className="flex items-center gap-1 sm:gap-2 sm:absolute sm:right-0">
                        <Search />
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}
