"use client";

import { useState } from "react";
import { PostCard } from "./post-card";
import { Post } from "@/lib/data";
import { Plus } from "lucide-react";

interface LatestStoriesProps {
    posts: Array<Omit<Post, "content">>;
}

export function LatestStories({ posts }: LatestStoriesProps) {
    const INITIAL_COUNT = 5;
    const INCREMENT = 5;
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

    const showMore = () => {
        setVisibleCount((prev) => prev + INCREMENT);
    };

    const hasMore = visibleCount < posts.length;

    return (
        <div className="lg:col-span-8">
            <h2 className="text-xl font-bold uppercase tracking-widest text-muted border-b border-zinc-100 dark:border-zinc-800 pb-2 mb-4">
                Latest Stories
            </h2>
            <div className="flex flex-col">
                {posts.slice(0, visibleCount).map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>

            {hasMore && (
                <div className="mt-12 flex justify-center">
                    <button
                        onClick={showMore}
                        className="group flex items-center gap-2 px-8 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-foreground hover:text-background transition-all font-semibold text-foreground active:scale-95 shadow-sm"
                    >
                        <Plus className="h-5 w-5 text-muted transition-transform group-hover:rotate-90 group-hover:text-background" />
                        <span>Read More</span>
                    </button>
                </div>
            )}
        </div>
    );
}
