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

            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <header className="space-y-8 mb-12">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight balance">
                            {post.title}
                        </h1>
                        <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                            {post.excerpt}
                        </p>
                    </div>

                    <div className="flex items-center gap-4 py-6 border-y border-zinc-100 dark:border-zinc-800">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                            <Image src={post.author.avatar} alt={post.author.name} fill />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-medium text-zinc-900 dark:text-zinc-100">{post.author.name}</span>
                            <div className="flex items-center gap-2 text-sm text-zinc-500">
                                <span>{post.readTime}</span>
                                <span>•</span>
                                <span>{post.date}</span>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="relative aspect-[16/9] mb-12 rounded-xl overflow-hidden">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div
                    className="prose prose-zinc dark:prose-invert prose-lg max-w-none 
          prose-headings:font-serif prose-headings:font-bold prose-headings:tracking-tight
          prose-p:leading-relaxed prose-p:text-zinc-800 dark:prose-p:text-zinc-300
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6"
                    dangerouslySetInnerHTML={{ __html: post.content || "" }}
                />

                <footer className="mt-16 pt-8 border-t border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-4">
                        <div className="flex-1">
                            <p className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-2">Written by</p>
                            <h3 className="text-xl font-serif font-bold">{post.author.name}</h3>
                            <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">
                                Tech enthusiast, developer, and writer exploring the intersection of AI and human creativity.
                            </p>
                        </div>
                    </div>
                </footer>
            </article>
        </div>
    );
}

export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}
