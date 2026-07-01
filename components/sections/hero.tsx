"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Terminal } from "@/components/ui/terminal";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-20 relative bg-background overflow-hidden">
      {/* Ambient Glows */}
      <div className="glow-orb w-[40vw] h-[40vw] bg-accent/20 top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
      <div className="glow-orb w-[50vw] h-[50vw] bg-blue-500/10 bottom-0 right-0 translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center rounded-none border border-border/50 bg-muted/30 backdrop-blur-md px-4 py-2 text-sm font-medium text-muted-foreground mb-8">
              <span className="flex h-2 w-2 rounded-none bg-accent mr-3 animate-pulse"></span>
              Alexandria, Egypt
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.1] mb-6">
              Hi, I&#39;m <br />
              <span className="bg-linear-to-r from-accent to-blue-500 bg-clip-text text-transparent">
                Mahmoud Ahmed.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
              Results-driven Junior Full Stack Developer with 1+ year of
              experience in building scalable web applications. Proficient in
              Next.js, Node.js, and TypeScript, focusing on optimized
              performance and intuitive user interfaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto rounded-none h-14 px-8 text-base shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all hover:-translate-y-1"
              >
                <Link href="#work">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-none h-14 px-8 text-base border-border/50 hover:bg-muted/50 transition-all hover:-translate-y-1"
              >
                <a href="/Mahmoud_Ahmed_Resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-6 relative mt-12 lg:mt-0 group"
          >
            <div className="absolute -inset-1 bg-linear-to-r from-accent to-blue-500 rounded-none blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <Terminal />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
