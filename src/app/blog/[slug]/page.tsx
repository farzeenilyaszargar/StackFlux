import { posts } from "@/lib/data";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) return { title: "Post Not Found" };

    return {
        title: `${post.title} | StackFlux`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    };
}

export default async function BlogPost({ params }: PageProps) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen">
            <Navbar />

            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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

                <div className="relative aspect-[16/9] mb-16 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div
                    className="prose prose-zinc dark:prose-invert prose-xl max-w-none 
          prose-headings:font-serif prose-headings:font-bold prose-headings:tracking-tight
          prose-p:leading-relaxed prose-p:text-foreground/90
          prose-h2:text-4xl prose-h2:mt-20 prose-h2:mb-8
          prose-strong:text-foreground prose-strong:font-bold"
                    dangerouslySetInnerHTML={{ __html: post.content || "" }}
                />
            </article>
        </div>
    );
}

export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}
