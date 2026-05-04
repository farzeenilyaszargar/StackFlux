import { posts } from "@/lib/data";
import { Navbar } from "@/components/navbar";
import { BlogPostHeader } from "@/components/blog-post-header";
import { BlogPostImage, BlogPostContent } from "@/components/blog-post-body";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";

interface PageProps {
    params: Promise<{ slug: string }>;
}

const napsterSeoSlug = "napster-cli-secure-local-multi-agent-development";
const napsterSeoTerms = [
    "nap code",
    "napster cli",
    "nap coding",
    "nap",
    "napster code",
    "secure ai generated code",
    "multi-agent workflows locally",
    "ai code security",
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) return { title: "Post Not Found" };

    const canonicalUrl = `https://www.stackflux.online/blog/${slug}`;
    const imageUrl = post.image.startsWith("http")
        ? post.image
        : `https://www.stackflux.online${post.image}`;
    const publishedIso = new Date(post.date).toISOString();
    const keywords =
        post.slug === napsterSeoSlug
            ? napsterSeoTerms
            : Array.from(new Set(post.title.replace(/[^\w\s-]/g, " ").split(/\s+/).filter(Boolean))).slice(0, 12);

    return {
        title: post.title,
        description: post.excerpt,
        keywords,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: canonicalUrl,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
            type: "article",
            publishedTime: publishedIso,
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [imageUrl],
        },
    };
}

export default async function BlogPost({ params }: PageProps) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const imageUrl = post.image.startsWith("http")
        ? post.image
        : `https://www.stackflux.online${post.image}`;
    const publishedIso = new Date(post.date).toISOString();
    const plainTextContent = post.content
        ? post.content.replace(/<[^>]*>/g, " ")
        : "";
    const wordCount = plainTextContent.trim()
        ? plainTextContent.trim().split(/\s+/).length
        : undefined;
    const keywordSeed = post.title.replace(/[^\w\s-]/g, " ").split(/\s+/).filter(Boolean);
    const keywords =
        post.slug === napsterSeoSlug
            ? Array.from(new Set([post.category, ...napsterSeoTerms]))
            : Array.from(new Set([post.category, ...keywordSeed])).slice(0, 12);

    return (
        <div className="min-h-screen">
            <Navbar />

            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 mb-20">
                <Breadcrumbs
                    items={[
                        { name: post.category, href: `/?category=${post.category.toLowerCase()}` },
                        { name: post.title, href: `/blog/${post.slug}` }
                    ]}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([
                            {
                                "@context": "https://schema.org",
                                "@type": "NewsArticle",
                                "headline": post.title,
                                "description": post.excerpt,
                                "image": [imageUrl],
                                "datePublished": publishedIso,
                                "dateModified": publishedIso,
                                "articleSection": post.category,
                                "keywords": keywords,
                                "isAccessibleForFree": true,
                                ...(wordCount ? { "wordCount": wordCount } : {}),
                                "publisher": {
                                    "@type": "NewsMediaOrganization",
                                    "name": "StackFlux",
                                    "logo": {
                                        "@type": "ImageObject",
                                        "url": "https://www.stackflux.online/logo.ico"
                                    }
                                },
                                "mainEntityOfPage": {
                                    "@type": "WebPage",
                                    "@id": `https://www.stackflux.online/blog/${post.slug}`
                                }
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    {
                                        "@type": "ListItem",
                                        "position": 1,
                                        "name": "Home",
                                        "item": "https://www.stackflux.online"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 2,
                                        "name": post.category,
                                        "item": `https://www.stackflux.online/?category=${encodeURIComponent(post.category.toLowerCase())}`
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 3,
                                        "name": post.title,
                                        "item": `https://www.stackflux.online/blog/${post.slug}`
                                    }
                                ]
                            }
                        ]),
                    }}
                />
                <BlogPostHeader post={post} />
                <BlogPostImage post={post} />
                <BlogPostContent content={post.content} />

                <div className="mt-20 pt-12 border-t border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-3xl font-serif font-bold italic tracking-tight text-foreground">
                            Keep Reading
                        </h2>
                        <Link href="/" className="text-sm font-bold uppercase tracking-widest text-muted hover:text-foreground transition-colors">
                            View all →
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {posts
                            .filter(p => p.slug !== post.slug)
                            .slice(0, 2)
                            .map(p => (
                                <Link key={p.id} href={`/blog/${p.slug}`} className="group space-y-4">
                                    <div className="space-y-2">
                                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">{p.category}</div>
                                        <h3 className="text-2xl font-serif font-bold group-hover:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors leading-tight">
                                            {p.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-muted line-clamp-2 leading-relaxed">
                                        {p.excerpt}
                                    </p>
                                    <div className="text-[10px] text-muted/60 uppercase tracking-widest pt-1">
                                        {p.readTime}
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </article>
        </div>
    );
}

export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}
