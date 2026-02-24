import { Navbar } from "@/components/navbar";
import { PostCard } from "@/components/post-card";
import { Newsletter } from "@/components/newsletter";
import { StaffPicks } from "@/components/staff-picks";
import { LatestStories } from "@/components/latest-stories";
import { SidebarFooter } from "@/components/sidebar-footer";
import { posts } from "@/lib/data";

export default function Home() {
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);
  const staffPicks = posts.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "StackFlux",
                "url": "https://stackflux.vercel.app",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://stackflux.vercel.app/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "StackFlux",
                "url": "https://stackflux.vercel.app",
                "logo": "https://stackflux.vercel.app/logo.ico",
                "sameAs": [
                  "https://twitter.com/stackflux",
                  "https://linkedin.com/company/stackflux"
                ]
              }
            ]),
          }}
        />
        <h1 className="sr-only">StackFlux - Strategic Insights for Modern Developers</h1>

        {/* Featured Post */}
        <section className="mb-20">
          <PostCard post={featuredPost} featured />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Feed */}
          <LatestStories posts={otherPosts} />

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            <StaffPicks posts={staffPicks} />

            <div className="sticky top-24">
              <Newsletter />
              <SidebarFooter />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
