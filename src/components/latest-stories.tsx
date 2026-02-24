import { PostCard } from "./post-card";
import { Post } from "@/lib/data";

interface LatestStoriesProps {
    posts: Post[];
}

export function LatestStories({ posts }: LatestStoriesProps) {
    return (
        <div className="lg:col-span-8">
            <h2 className="text-xl font-bold uppercase tracking-widest text-muted mb-8 border-b border-zinc-100 dark:border-zinc-800 pb-2">
                Latest Stories
            </h2>
            <div className="flex flex-col">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}
