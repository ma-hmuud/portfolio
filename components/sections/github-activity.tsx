"use client";

import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function GithubActivity() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <section id="github" className="py-32 relative bg-background border-t-4 border-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-4 md:mb-6">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter">
              Recent <span className="text-accent">Activity</span>
            </h2>
            <div className="h-2 flex-1 bg-foreground hidden md:block" />
          </div>
          <p className="font-mono text-base md:text-xl text-muted-foreground uppercase tracking-widest max-w-xl bg-muted p-3 md:p-4 brutal-border">
            My open source contributions over the last year
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="brutal-card p-6 sm:p-10 bg-card brutal-shadow overflow-x-auto"
        >
          <div className="min-w-[800px] flex justify-center">
            {mounted && (
              <img 
                src="https://ghchart.rshah.org/40c463/ma-hmuud" 
                alt="Mahmoud Ahmed's Github Chart" 
                className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
                style={{
                  filter: isDark ? "invert(1) hue-rotate(180deg) brightness(1.2)" : "none",
                }}
              />
            )}
          </div>
        </motion.div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/ma-hmuud" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center font-mono font-bold text-lg border-b-4 border-foreground hover:text-accent hover:border-accent transition-colors pb-1"
          >
            VIEW FULL PROFILE ON GITHUB
          </a>
        </div>
      </div>
    </section>
  );
}
