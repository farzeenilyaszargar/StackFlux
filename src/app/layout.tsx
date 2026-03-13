import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stackflux.vercel.app"),
  title: {
    default: "StackFlux | Strategic Insights for Modern Developers",
    template: "%s | StackFlux",
  },
  description: "High-signal tech publication covering AI engineering, autonomous agents, hard-tech startups, and the future of software development.",
  keywords: ["Nap Editor", "AI coding agent", "OpenClaw", "Software Architecture", "India Startups", "Autonomous Development", "Tech Blog"],
  creator: "StackFlux",
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.ico",
  },
  openGraph: {
    title: "StackFlux | The Future of Engineering",
    description: "Deep-dives into the latest shifts in AI, engineering, and the global startup ecosystem.",
    url: "https://stackflux.vercel.app",
    siteName: "StackFlux",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "StackFlux - Insights for the Modern Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StackFlux | Insights for the Modern Developer",
    description: "High-signal tech publication covering the future of software development.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: "StackFlux",
    url: "https://stackflux.vercel.app",
    logo: "https://stackflux.vercel.app/logo.ico",
  };
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "StackFlux",
    url: "https://stackflux.vercel.app",
    publisher: {
      "@type": "Organization",
      name: "StackFlux",
      logo: "https://stackflux.vercel.app/logo.ico",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
