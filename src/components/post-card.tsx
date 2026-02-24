import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/data";

interface PostCardProps {
    post: Post;
    featured?: boolean;
}

export function PostCard({ post, featured = false }: PostCardProps) {
    if (featured) {
        return (
            <Link href={`/blog/${post.slug}`} className="group block mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-sm text-muted">
                            <span className="font-semibold text-foreground">{post.category}</span>
                            <span>•</span>
                            <span>{post.date}</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight text-foreground group-hover:text-muted transition-colors">
                            {post.title}
                        </h2>
                        <p className="text-lg text-muted line-clamp-3">
                            {post.excerpt}
                        </p>
                        <div className="flex items-center gap-2 pt-2 text-sm text-muted">
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <Link href={`/blog/${post.slug}`} className="group grid grid-cols-1 sm:grid-cols-4 gap-6 py-8 border-b border-zinc-100 dark:border-zinc-800 last:border-0">
            <div className="sm:col-span-3 space-y-3">
                <div className="flex items-center gap-2 text-xs text-muted">
                    <span className="font-medium text-foreground">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold font-serif leading-snug text-foreground group-hover:text-muted transition-colors">
                    {post.title}
                </h3>
                <p className="text-muted line-clamp-2 text-sm hidden sm:block">
                    {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                </div>
            </div>
            <div className="hidden sm:block sm:col-span-1">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            </div>
        </Link>
    );
}
