import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mahmoud Ahmed — Full Stack Developer",
  description:
    "Full Stack Developer crafting modern web applications with Next.js, React, TypeScript, and Node.js. Based in Alexandria, Egypt.",
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
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {/* Animated Gradient Background */}
          <div className="fixed inset-0 -z-10 bg-background" />
          <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-background to-background opacity-50" />
          <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-50" />
          
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
