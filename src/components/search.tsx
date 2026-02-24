"use client";

import { useState, useEffect, useCallback } from "react";
import { Search as SearchIcon, X } from "lucide-react";
import { posts, Post } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export function Search() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Post[]>([]);

    const toggleSearch = () => {
        setIsOpen(!isOpen);
        setQuery("");
        setResults([]);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsOpen(true);
            }
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        if (query.length > 2) {
            const filtered = posts.filter(
                (post) =>
                    post.title.toLowerCase().includes(query.toLowerCase()) ||
                    post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
                    post.category.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filtered.slice(0, 5));
        } else {
            setResults([]);
        }
    }, [query]);

    return (
        <>
            <button
                onClick={toggleSearch}
                className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-muted hover:text-foreground"
                aria-label="Search"
            >
                <SearchIcon className="h-[1.2rem] w-[1.2rem]" />
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4 ">
                    <div className="w-full max-w-2xl bg-background border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="p-4 border-b border-zinc-100 dark:border-zinc-800 flex items-center gap-3">
                            <SearchIcon className="h-5 w-5 text-muted" />
                            <input
                                autoFocus
                                type="text"
                                placeholder="Search posts, categories..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="flex-1 bg-transparent border-none outline-none text-lg text-foreground placeholder:text-muted"
                            />
                            <button
                                onClick={toggleSearch}
                                className="p-1 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 text-muted transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="max-h-[60vh] overflow-y-auto">
                            {query.length > 0 && results.length === 0 && query.length > 2 && (
                                <div className="p-12 text-center">
                                    <p className="text-muted text-lg">No results found for "{query}"</p>
                                </div>
                            )}

                            {query.length <= 2 && query.length > 0 && (
                                <div className="p-4 text-center text-xs text-muted uppercase tracking-widest">
                                    Type at least 3 characters...
                                </div>
                            )}

                            {results.length > 0 && (
                                <div className="p-2">
                                    <div className="px-3 py-2 text-xs font-bold text-muted uppercase tracking-widest border-b border-zinc-50 dark:border-zinc-800/50 mb-2">
                                        Posts
                                    </div>
                                    {results.map((post) => (
                                        <Link
                                            key={post.id}
                                            href={`/blog/${post.slug}`}
                                            onClick={toggleSearch}
                                            className="flex items-center gap-4 p-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group"
                                        >
                                            <div className="relative h-16 w-16 rounded-lg overflow-hidden flex-shrink-0 border border-zinc-100 dark:border-zinc-800">
                                                <Image
                                                    src={post.image}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover transition-transform group-hover:scale-105 duration-500"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-serif font-bold text-lg text-foreground group-hover:text-muted transition-colors truncate">
                                                    {post.title}
                                                </h4>
                                                <p className="text-sm text-muted">
                                                    {post.category} • {post.date}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}

                            {query.length === 0 && (
                                <div className="p-4">
                                    <div className="px-3 py-2 text-xs font-bold text-muted uppercase tracking-widest border-b border-zinc-50 dark:border-zinc-800/50 mb-4">
                                        Quick Links
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 text-sm">
                                        {['Engineering', 'AI & Tools', 'Design', 'Business'].map(cat => (
                                            <button
                                                key={cat}
                                                onClick={() => setQuery(cat)}
                                                className="text-left px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 text-foreground font-medium transition-all hover:translate-x-1"
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex justify-between text-[10px] text-muted uppercase tracking-widest font-bold">
                                        <span>Press <kbd className="font-sans border border-zinc-200 dark:border-zinc-700 px-1.5 py-0.5 rounded-md bg-zinc-50 dark:bg-zinc-800">ESC</kbd> to close</span>
                                        <span><kbd className="font-sans border border-zinc-200 dark:border-zinc-700 px-1.5 py-0.5 rounded-md bg-zinc-50 dark:bg-zinc-800">⌘</kbd> <kbd className="font-sans border border-zinc-200 dark:border-zinc-700 px-1.5 py-0.5 rounded-md bg-zinc-50 dark:bg-zinc-800">K</kbd> to open anytime</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
