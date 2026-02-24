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
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-8 border-b border-zinc-100 dark:border-zinc-800 pb-2">
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
              <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-6">
                Staff Picks
              </h2>
              <div className="space-y-6">
                {posts.slice(0, 3).map((post) => (
                  <div key={post.id} className="group cursor-pointer">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-4 h-4 relative rounded-full overflow-hidden">
                        <Image src={post.author.avatar} alt="" fill className="object-cover" />
                      </div>
                      <span className="text-xs font-medium">{post.author.name}</span>
                    </div>
                    <h3 className="font-serif font-bold group-hover:text-zinc-500 transition-colors">
                      {post.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="sticky top-24">
              <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
                <h2 className="text-xl font-serif font-bold mb-2">Subscribe to our newsletter</h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                  Get the latest AI insights and startup news directly in your inbox.
                </p>
                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full px-4 py-2 text-sm rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                  />
                  <button className="w-full px-4 py-2 text-sm font-medium bg-zinc-950 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-950 rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-300 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>

              <footer className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-xs text-zinc-500">
                <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">Help</a>
                <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">Status</a>
                <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">About</a>
                <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">Careers</a>
                <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">Privacy</a>
                <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">Terms</a>
              </footer>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
