import { Post } from "@/lib/data";

interface StaffPicksProps {
    posts: Array<Omit<Post, "content">>;
}

export function StaffPicks({ posts }: StaffPicksProps) {
    return (
        <div>
            <h2 className="text-xl font-bold uppercase tracking-widest text-muted mb-6 border-b border-zinc-100 dark:border-zinc-800 pb-2">
                Staff Picks
            </h2>
            <div className="space-y-6">
                {posts.map((post) => (
                    <div key={post.id} className="group cursor-pointer">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold uppercase tracking-wider text-muted">{post.category}</span>
                        </div>
                        <h3 className="text-lg font-serif font-bold text-foreground group-hover:text-muted transition-colors leading-snug">
                            {post.title}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
