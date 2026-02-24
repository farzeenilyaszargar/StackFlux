"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center group">
                            <span className="text-2xl font-bold font-serif tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                                StackFlux
                            </span>
                        </Link>
                        <div className="hidden md:flex items-center gap-6">
                            <Link href="#" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                                Articles
                            </Link>
                            <Link href="#" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                                AI Tools
                            </Link>
                            <Link href="#" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                                Startups
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="hidden sm:block text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                            Sign in
                        </button>
                        <button className="hidden sm:block px-4 py-2 text-sm font-medium bg-zinc-950 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-950 rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-300 transition-colors">
                            Get Started
                        </button>
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}
