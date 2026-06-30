import type { Metadata } from "next";
import { Syne, Space_Mono, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const syne = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mahmoud Ahmed — Full Stack Developer",
  description:
    "Results-driven Junior Full Stack Developer building scalable web applications. Based in Alexandria, Egypt.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Alexandria",
  ],
  authors: [{ name: "Mahmoud Ahmed" }],
  openGraph: {
    title: "Mahmoud Ahmed — Full Stack Developer",
    description: "Crafting modern web experiences with precision and care",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${syne.variable} ${inter.variable} ${spaceMono.variable} antialiased selection:bg-accent selection:text-accent-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="bg-noise mix-blend-overlay fixed inset-0 z-50 pointer-events-none" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
