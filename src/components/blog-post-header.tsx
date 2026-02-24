import { Post } from "@/lib/data";

interface BlogPostHeaderProps {
    post: Post;
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
    return (
        <header className="space-y-6 sm:space-y-8 mb-12 px-2 sm:px-0">
            <div className="space-y-4 sm:space-y-6 text-center">
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-serif font-bold leading-tight tracking-tighter text-foreground">
                    {post.title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-muted leading-relaxed font-sans max-w-3xl mx-auto">
                    {post.excerpt}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-[10px] sm:text-sm text-muted uppercase tracking-widest pt-4">
                    <span className="font-bold text-foreground">{post.category}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{post.date}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{post.readTime}</span>
                </div>
            </div>
        </header>
    );
}
