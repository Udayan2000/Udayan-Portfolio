import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AiChatWidget } from "@/components/ai-chat-widget";

export const metadata: Metadata = {
  title: "Udayan Ghosh | Senior Full-Stack Developer & Freelance Consultant (4+ Years)",
  description:
    "Professional portfolio of Udayan Ghosh, a 4+ years experienced full-stack freelance engineer specializing in high-performance Next.js apps, scalable microservices, and modern cloud architectures.",
  keywords: [
    "Full-Stack Developer",
    "Next.js Freelancer",
    "React 19 Engineer",
    "Senior Web Developer",
    "TypeScript Architect",
    "MVP Builder",
    "PostgreSQL",
    "Tailwind CSS",
  ],
  authors: [{ name: "Udayan Ghosh" }],
  openGraph: {
    title: "Udayan Ghosh | Senior Full-Stack Freelance Engineer",
    description:
      "Engineering scalable web apps, rapid MVPs, and modern cloud systems with 4+ years of professional impact.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#090b0e" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* Anti-flash inline script for flawless dark/light mode hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('portfolio-theme');
                  const supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (storedTheme === 'dark' || (!storedTheme && supportDarkMode) || storedTheme === 'system' && supportDarkMode) {
                    document.documentElement.classList.add('dark');
                  } else if (storedTheme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <ThemeProvider>
          {children}
          <AiChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
