"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Building the <br />
              <span className="text-gradient-accent">Digital Future</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
              I&apos;m <span className="text-foreground font-semibold">Mahmoud Ahmed</span>, a Full Stack Developer transforming complex problems into elegant, high-performance web experiences.
            </p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 font-medium">
              <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border">
                <MapPin size={14} className="text-accent" />
                Alexandria, Egypt
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-xl h-12 px-8 text-base shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all">
                <Link href="#work">
                  View Projects
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl h-12 px-8 text-base border-border bg-background/50 backdrop-blur-sm hover:bg-secondary/80">
                <a href="/Mahmoud_Ahmed_Resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 glass-card p-3 rounded-2xl rotate-3 transition-transform duration-500 hover:rotate-0">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-muted">
                <Image
                  src="/profile.webp"
                  alt="Mahmoud Ahmed"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
