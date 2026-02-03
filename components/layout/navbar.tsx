"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "motion/react";

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity">
          MA
        </Link>
        <div className="flex items-center gap-6">
          <Link href="#work" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            Work
          </Link>
          <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            About
          </Link>
          <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
