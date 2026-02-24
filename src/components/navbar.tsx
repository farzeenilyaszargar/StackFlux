"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-100 dark:border-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex justify-center items-center h-24">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center group">
                            <span className="text-5xl font-serif italic tracking-tighter text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-all duration-300">
                                StackFlux
                            </span>
                        </Link>
                    </div>
                    <div className="absolute right-0 flex items-center pr-4 sm:pr-0">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}
