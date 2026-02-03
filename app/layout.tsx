import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mahmoud Ahmed | Full Stack Developer",
  description:
    "Junior Full Stack Developer with 1+ year of hands-on experience building and deploying production web applications using Next.js, React, TypeScript, and Tailwind CSS.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Mahmoud Ahmed" }],
  openGraph: {
    title: "Mahmoud Ahmed | Full Stack Developer",
    description:
      "Junior Full Stack Developer specializing in Next.js, React, and TypeScript",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
