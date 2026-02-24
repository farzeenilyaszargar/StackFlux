import { posts } from "@/lib/data";
import { Navbar } from "@/components/navbar";
import { BlogPostHeader } from "@/components/blog-post-header";
import { BlogPostImage, BlogPostContent } from "@/components/blog-post-body";
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
            type: "article",
            publishedTime: post.date,
        },
        twitter: {
            card: "summary_large_image",
            title: `${post.title} | StackFlux`,
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

            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 mb-20">
                <BlogPostHeader post={post} />
                <BlogPostImage post={post} />
                <BlogPostContent content={post.content} />
            </article>
        </div>
    );
}

export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}
