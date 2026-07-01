"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-40 bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link 
          href="#home" 
          className="font-bold text-xl tracking-tighter hover:text-accent transition-colors"
        >
          MAHMOUD<span className="text-accent">.</span>
        </Link>

        <div className="flex items-center gap-6 md:gap-8">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="#work" className="hover:text-foreground transition-colors">Work</Link>
            <Link href="#about" className="hover:text-foreground transition-colors">About</Link>
            <Link href="#contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
          <div className="w-px h-6 bg-border hidden md:block" />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
