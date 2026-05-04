"use client";

import { useState, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { Search as SearchIcon, X } from "lucide-react";
import { posts, Post } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export function Search() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Post[]>([]);
    const [mounted, setMounted] = useState(false);
    const normalizedQuery = query.trim().toLowerCase();
    const searchablePosts = useMemo(
        () =>
            posts.map((post) => ({
                ...post,
                searchText: `${post.title} ${post.excerpt} ${post.category}`.toLowerCase(),
            })),
        []
    );

    useEffect(() => {
        setMounted(true);
    }, []);

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
        if (normalizedQuery.length > 2) {
            const filtered = searchablePosts
                .filter((post) => post.searchText.includes(normalizedQuery))
                .slice(0, 5)
                .map(({ searchText: _searchText, ...post }) => post);
            setResults(filtered);
        } else {
            setResults([]);
        }
    }, [normalizedQuery, searchablePosts]);

    // Prevent scrolling when search is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const searchModal = isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 backdrop-blur-sm bg-black/10 dark:bg-black/40 p-4">
            <div
                className="w-full max-w-2xl bg-background border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-6 border-b border-zinc-100 dark:border-zinc-800 flex items-center gap-4">
                    <SearchIcon className="h-6 w-6 text-muted" />
                    <input
                        autoFocus
                        type="text"
                        placeholder="Search posts, categories..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="flex-1 bg-transparent border-none outline-none text-xl text-foreground placeholder:text-muted"
                    />
                    <button
                        onClick={toggleSearch}
                        className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-muted transition-colors"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <div className="max-h-[60vh] overflow-y-auto">
                    {query.length > 0 && results.length === 0 && query.length > 2 && (
                        <div className="p-16 text-center">
                            <p className="text-muted text-lg font-medium">No results found for "{query}"</p>
                        </div>
                    )}

                    {query.length <= 2 && query.length > 0 && (
                        <div className="p-6 text-center text-xs text-muted uppercase tracking-widest font-bold">
                            Type at least 3 characters...
                        </div>
                    )}

                    {results.length > 0 && (
                        <div className="p-3">
                            <div className="px-4 py-3 text-xs font-bold text-muted uppercase tracking-widest border-b border-zinc-50 dark:border-zinc-800/50 mb-3">
                                Top Matches
                            </div>
                            {results.map((post) => (
                                <Link
                                    key={post.id}
                                    href={`/blog/${post.slug}`}
                                    onClick={toggleSearch}
                                    className="flex items-center gap-5 p-4 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all group"
                                >
                                    <div className="relative h-20 w-20 rounded-xl overflow-hidden flex-shrink-0 border border-zinc-100 dark:border-zinc-800 shadow-sm">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            sizes="80px"
                                            className="object-cover transition-transform group-hover:scale-105 duration-500"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-serif font-bold text-xl text-foreground group-hover:text-muted transition-colors leading-tight mb-1">
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
                        <div className="p-6">
                            <div className="px-4 py-3 text-xs font-bold text-muted uppercase tracking-widest border-b border-zinc-50 dark:border-zinc-800/50 mb-4">
                                Explore Categories
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {['Engineering', 'AI & Tools', 'Design', 'Business'].map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setQuery(cat)}
                                        className="text-left px-5 py-4 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-800 text-foreground font-semibold transition-all hover:translate-x-1 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700"
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                            <div className="mt-10 pt-6 border-t border-zinc-100 dark:border-zinc-800 flex justify-between text-[11px] text-muted uppercase tracking-widest font-bold">
                                <span className="flex items-center gap-2">
                                    <kbd className="font-sans border border-zinc-200 dark:border-zinc-700 px-2 py-1 rounded-lg bg-zinc-50 dark:bg-zinc-800 shadow-sm">ESC</kbd> to close
                                </span>
                                <span className="flex items-center gap-2">
                                    <kbd className="font-sans border border-zinc-200 dark:border-zinc-700 px-2 py-1 rounded-lg bg-zinc-50 dark:bg-zinc-800 shadow-sm">⌘</kbd>
                                    <kbd className="font-sans border border-zinc-200 dark:border-zinc-700 px-2 py-1 rounded-lg bg-zinc-50 dark:bg-zinc-800 shadow-sm">K</kbd> to search
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <>
            <button
                onClick={toggleSearch}
                className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-muted hover:text-foreground"
                aria-label="Search"
            >
                <SearchIcon className="h-[1.2rem] w-[1.2rem]" />
            </button>

            {mounted && isOpen && createPortal(
                <div onClick={toggleSearch} className="fixed inset-0 z-[9998]">
                    {searchModal}
                </div>,
                document.body
            )}
        </>
    );
}
