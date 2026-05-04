import { Post } from "@/lib/data";
import Image from "next/image";

interface BlogPostImageProps {
    post: Post;
}

export function BlogPostImage({ post }: BlogPostImageProps) {
    return (
        <div className="relative aspect-[16/9] mb-8 sm:mb-16 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl mx-1 sm:mx-0">
            <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(min-width: 1280px) 1200px, (min-width: 768px) 90vw, 96vw"
                className="object-cover"
                priority
            />
        </div>
    );
}

export function BlogPostContent({ content }: { content?: string }) {
    return (
        <div
            className="prose prose-zinc dark:prose-invert prose-base sm:prose-lg md:prose-xl max-w-none px-2 sm:px-0
      prose-headings:font-serif prose-headings:font-bold prose-headings:tracking-tight
      prose-p:leading-relaxed prose-p:text-foreground/90
      prose-h2:text-2xl sm:prose-h2:text-4xl prose-h2:mt-12 sm:prose-h2:mt-20 prose-h2:mb-6 sm:prose-h2:mb-8
      prose-strong:text-foreground prose-strong:font-bold
      prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:underline prose-a:decoration-indigo-200 dark:prose-a:decoration-indigo-900/50 hover:prose-a:decoration-indigo-500 prose-a:underline-offset-4 prose-a:transition-colors"
            dangerouslySetInnerHTML={{ __html: content || "" }}
        />
    );
}
