import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { PostCard } from "@/components/post-card";
import { posts } from "@/lib/data";

export default function Home() {
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post */}
        <section className="mb-20">
          <PostCard post={featuredPost} featured />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Feed */}
          <div className="lg:col-span-8">
            <h2 className="text-sm font-bold uppercase tracking-widest text-muted mb-8 border-b border-zinc-100 dark:border-zinc-800 pb-2">
              Latest Stories
            </h2>
            <div className="flex flex-col">
              {otherPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-muted mb-6">
                Staff Picks
              </h2>
              <div className="space-y-6">
                {posts.slice(0, 3).map((post) => (
                  <div key={post.id} className="group cursor-pointer">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted">{post.category}</span>
                    </div>
                    <h3 className="text-lg font-serif font-bold text-foreground group-hover:text-muted transition-colors leading-snug">
                      {post.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="sticky top-24">
              <div className="p-8 bg-zinc-50 dark:bg-white/5 rounded-3xl border border-zinc-100 dark:border-white/10">
                <h2 className="text-2xl font-serif font-bold mb-3 text-foreground">Subscribe to our newsletter</h2>
                <p className="text-sm text-muted mb-6 leading-relaxed">
                  Get the latest AI insights and startup news directly in your inbox.
                </p>
                <div className="flex flex-col gap-3">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full px-5 py-3 text-sm rounded-full border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-950 text-foreground focus:outline-none focus:ring-2 focus:ring-zinc-500 transition-all"
                  />
                  <button className="w-full px-5 py-3 text-sm font-medium bg-foreground text-background rounded-full hover:opacity-90 transition-all shadow-lg active:scale-[0.98]">
                    Subscribe
                  </button>
                </div>
              </div>

              <footer className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-xs text-muted font-medium">
                <a href="#" className="hover:text-foreground transition-colors">Help</a>
                <a href="#" className="hover:text-foreground transition-colors">Status</a>
                <a href="#" className="hover:text-foreground transition-colors">About</a>
                <a href="#" className="hover:text-foreground transition-colors">Careers</a>
                <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
                <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              </footer>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
