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
        content: `
      <p>Minimalism is more than just an aesthetic choice; it's a philosophy of intentionality. In 2026, as we are bombarded with notifications and infinite feeds, the most successful products are those that respect the user's attention.</p>
      <h2>The Burden of Choice</h2>
      <p>Complexity often masquerades as power. However, true power lies in clarity. By removing the non-essential, designers allow users to focus on what truly matters.</p>
      <h2>Typography as Interface</h2>
      <p>When you remove the clutter, typography takes center stage. Choosing the right typeface, like high-contrast serifs, can convey brand personality more effectively than a thousand icons.</p>
    `,
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
        content: `
      <p>Running LLMs locally used to require a server rack. Now, it runs on your laptop. This shift is driven by three main factors: privacy, latency, and cost.</p>
      <h2>Privacy First</h2>
      <p>For many developers, sending proprietary code to a third-party cloud is a non-starter. Local LLMs ensure that your data never leaves your machine.</p>
      <h2>The Role of Apple Silicon</h2>
      <p>Apple's unified memory architecture has been a game-changer for local AI, allowing consumer-grade machines to handle models with billions of parameters with ease.</p>
    `,
    },
    {
        id: "5",
        title: "The Death of the Search Engine?",
        excerpt: "How generative AI is fundamentally changing our relationship with information retrieval.",
        slug: "death-of-search-engine",
        author: {
            name: "Maya Patel",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya",
        },
        date: "Feb 12, 2026",
        readTime: "10 min read",
        category: "Future",
        image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2000&auto=format&fit=crop",
        content: "<p>We don't search anymore; we ask. Generative search engines are replacing the list of blue links with synthesized answers...</p>",
    },
    {
        id: "6",
        title: "Sustainable Tech: Green Coding Practices",
        excerpt: "Efficient code isn't just fast—it's environmentally friendly. Understanding the carbon footprint of your software.",
        slug: "green-coding-practices",
        author: {
            name: "Leo Green",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leo",
        },
        date: "Feb 10, 2026",
        readTime: "6 min read",
        category: "Sustainability",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2000&auto=format&fit=crop",
        content: "<p>The digital world has a physical cost. Data centers consume vast amounts of energy, and as developers, we have a responsibility to optimize our resource usage...</p>",
    },
    {
        id: "7",
        title: "The Solopreneur's Guide to AI Automation",
        excerpt: "How a single developer can run a million-dollar business using the power of autonomous agents.",
        slug: "solopreneur-guide-ai-automation",
        author: {
            name: "Alex River",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
        },
        date: "Feb 5, 2026",
        readTime: "15 min read",
        category: "Business",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop",
        content: "<p>The era of the 'one-person unicorn' is upon us. With AI agents handling everything from customer support to complex devops tasks...</p>",
    },
    {
        id: "8",
        title: "Quantum Computing: Beyond the Hype",
        excerpt: "What developers actually need to know about qubits, superposition, and the specialized languages of the future.",
        slug: "quantum-computing-beyond-hype",
        author: {
            name: "Dr. Sarah Voget",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        },
        date: "Feb 1, 2026",
        readTime: "20 min read",
        category: "Science",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2000&auto=format&fit=crop",
        content: "<p>Quantum computing is no longer purely theoretical. Companies are already using quantum algorithms for logistics optimization...</p>",
    },
    {
        id: "9",
        title: "The Ethics of Synthetic Media",
        excerpt: "Navigating a world where we can no longer trust our eyes and ears. The developer's role in fraud prevention.",
        slug: "ethics-synthetic-media",
        author: {
            name: "Elena Chen",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
        },
        date: "Jan 28, 2026",
        readTime: "9 min read",
        category: "Ethics",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2000&auto=format&fit=crop",
        content: "<p>As synthetic media becomes indistinguishable from reality, the responsibility of verification falls on the architectural level...</p>",
    },
    {
        id: "10",
        title: "The Architecture of a Modern AI Native App",
        excerpt: "Why we need to rethink our stack from the database up for the age of inference.",
        slug: "architecture-ai-native-app",
        author: {
            name: "Sam Wilson",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sam",
        },
        date: "Jan 22, 2026",
        readTime: "11 min read",
        category: "Engineering",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
        content: "<p>Inference is the new compute. As we move away from static code to dynamic probabilistic outputs, our architecture must adapt...</p>",
    },
    {
        id: "11",
        title: "Why Silicon Valley is Moving to the Cloud (Literally)",
        excerpt: "The rise of decentralized compute clusters and the death of the traditional tech hub.",
        slug: "silicon-valley-moving-to-cloud",
        author: {
            name: "Maya Patel",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya",
        },
        date: "Jan 15, 2026",
        readTime: "8 min read",
        category: "Geopolitics",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
        content: "<p>The geographical constraints of the tech industry are dissolving. High-speed satellites and global edge compute mean your team can be anywhere...</p>",
    },
    {
        id: "12",
        title: "The Art of Slow Software",
        excerpt: "Why the fastest growing companies are actually shipping more slowly.",
        slug: "art-of-slow-software",
        author: {
            name: "Jordan Smith",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan",
        },
        date: "Jan 10, 2026",
        readTime: "14 min read",
        category: "Philosophy",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2000&auto=format&fit=crop",
        content: "<p>In an industry obsessed with speed, quality has become a rare commodity. Software that lasts is software that was built with intention...</p>",
    },
];
