import { Post } from "@/lib/data";
import Image from "next/image";

interface BlogPostImageProps {
    post: Post;
}

export function BlogPostImage({ post }: BlogPostImageProps) {
    return (
        <div className="relative aspect-[16/9] mb-16 rounded-2xl overflow-hidden shadow-2xl">
            <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
            />
        </div>
    );
}

export function BlogPostContent({ content }: { content?: string }) {
    return (
        <div
            className="prose prose-zinc dark:prose-invert prose-xl max-w-none 
      prose-headings:font-serif prose-headings:font-bold prose-headings:tracking-tight
      prose-p:leading-relaxed prose-p:text-foreground/90
      prose-h2:text-4xl prose-h2:mt-20 prose-h2:mb-8
      prose-strong:text-foreground prose-strong:font-bold"
            dangerouslySetInnerHTML={{ __html: content || "" }}
        />
    );
}
