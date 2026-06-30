"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "motion/react";

export function Navbar() {
  return (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed top-0 left-0 right-0 z-50 bg-background border-b-4 border-foreground"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
            <Link href="/" className="font-sans text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tighter hover:text-accent transition-colors">
              MAHMOUD<span className="text-accent">_</span>AHMED
            </Link>
            <div className="flex items-center gap-4 md:gap-8">
              <Link href="#work" className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background px-2 py-1 md:px-3 md:py-1 brutal-border transition-none hidden md:block">
                WORK
              </Link>
              <Link href="#about" className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background px-2 py-1 md:px-3 md:py-1 brutal-border transition-none hidden md:block">
                ABOUT
              </Link>
              <Link href="#contact" className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background px-2 py-1 md:px-3 md:py-1 brutal-border transition-none hidden md:block">
                CONTACT
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </motion.div>
  );
}
