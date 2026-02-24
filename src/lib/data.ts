export interface Post {
    id: string;
    title: string;
    excerpt: string;
    slug: string;
    author: {
        name: string;
        avatar: string;
    };
    date: string;
    readTime: string;
    category: string;
    image: string;
    content?: string;
}

export const posts: Post[] = [
    {
        id: "1",
        title: "The 10 Best AI Tools for Developers in 2026",
        excerpt: "From intelligent IDE extensions to automated testing suites, these AI tools are revolutionizing how we write, debug, and deploy code.",
        slug: "best-ai-tools-for-devs",
        author: {
            name: "Alex River",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
        },
        date: "Feb 24, 2026",
        readTime: "8 min read",
        category: "AI & Tools",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
        content: `
      <p>The landscape of software development is undergoing a seismic shift. Artificial Intelligence is no longer just a buzzword; it's a fundamental part of the developer's toolkit. In this article, we explore the top 10 AI tools that are making developers more productive than ever before.</p>
      
      <h2>1. Cursor: The AI-Powered Code Editor</h2>
      <p>Cursor has taken the developer world by storm. Built on top of VS Code, it integrates LLMs directly into the editing experience, allowing for seamless code generation and refactoring.</p>
      
      <h2>2. v0.dev: Generative UI for React</h2>
      <p>Vercel's v0 is changing how we build interfaces. By describing your UI in plain English, you can generate high-quality React components using Tailwind CSS and shadcn/ui.</p>
      
      <h2>3. Github Copilot Workspace</h2>
      <p>Copilot has evolved from an autocomplete tool to a full-blown development partner that can plan and implement entire features based on issue descriptions.</p>
      
      <p>As we move further into 2026, the gap between developers who use AI and those who don't is widening. Embracing these tools is no longer optional—it's essential for staying competitive.</p>
    `,
    },
    {
        id: "2",
        title: "Top 5 Startups Disrupting the World Right Now",
        excerpt: "Meet the innovators who are rethinking everything from energy production to hyper-personalized education systems.",
        slug: "top-startups-around-the-world",
        author: {
            name: "Elena Chen",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
        },
        date: "Feb 20, 2026",
        readTime: "12 min read",
        category: "Startups",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2000&auto=format&fit=crop",
        content: `
      <p>Innovation is happening at a breakneck pace. From Silicon Valley to Singapore, startups are tackling some of humanity's biggest challenges with fresh perspectives and bold technology.</p>
      
      <h2>1. Helios Energy: Fusion for the Masses</h2>
      <p>Helios is making significant strides in modular fusion reactors, promising clean, limitless energy in a footprint no larger than a shipping container.</p>
      
      <h2>2. NeuralNodes: The Future of BCI</h2>
      <p>Brain-computer interfaces are moving from clinical trials to the real world. NeuralNodes is focused on non-invasive BCI for enhanced cognitive performance.</p>
      
      <h2>3. TerraForma: Automated Reforestation</h2>
      <p>Using swarms of autonomous drones, TerraForma is planting millions of trees across devastated landscapes with surgical precision and optimal survival rates.</p>
    `,
    },
    {
        id: "3",
        title: "Why Minimalist Design is Winning in 2026",
        excerpt: "In an age of information overload, the cleanest interfaces are providing the best user experiences.",
        slug: "minimalist-design-winning-2026",
        author: {
            name: "Jordan Smith",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan",
        },
        date: "Feb 18, 2026",
        readTime: "5 min read",
        category: "Design",
        image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2000&auto=format&fit=crop",
        content: "<p>Minimalism is more than just an aesthetic choice; it's a philosophy of intentionality...</p>",
    },
    {
        id: "4",
        title: "The Rise of Local LLMs",
        excerpt: "Taking privacy back: Why more developers are choosing to run their AI models locally instead of in the cloud.",
        slug: "rise-of-local-llms",
        author: {
            name: "Sam Wilson",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sam",
        },
        date: "Feb 15, 2026",
        readTime: "7 min read",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
        content: "<p>Running LLMs locally used to require a server rack. Now, it runs on your laptop...</p>",
    },
];
