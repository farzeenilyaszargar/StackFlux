import { Post } from "@/lib/data";

interface BlogPostHeaderProps {
    post: Post;
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
    return (
        <header className="space-y-8 mb-12">
            <div className="space-y-6 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight tracking-tighter text-foreground">
                    {post.title}
                </h1>
                <p className="text-xl md:text-2xl text-muted leading-relaxed font-sans max-w-3xl mx-auto">
                    {post.excerpt}
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted uppercase tracking-widest pt-4">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                </div>
            </div>
        </header>
    );
}
