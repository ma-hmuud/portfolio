"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 relative overflow-hidden bg-background">
      {/* Marquee Background */}
      <div className="absolute top-1/4 left-0 w-full overflow-hidden opacity-5 pointer-events-none -rotate-2">
        <div className="animate-marquee font-sans text-[8rem] md:text-[15rem] font-black leading-none whitespace-nowrap text-foreground">
          FULL STACK DEVELOPER • JUNIOR ENGINEER • 
        </div>
      </div>
      <div className="absolute bottom-1/4 left-0 w-full overflow-hidden opacity-5 pointer-events-none rotate-3">
        <div className="animate-marquee font-sans text-[8rem] md:text-[15rem] font-black leading-none whitespace-nowrap text-foreground" style={{ animationDirection: "reverse" }}>
          SCALABLE SYSTEMS • DATA SCIENCE • 
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-8"
          >
            <div className="inline-block border-4 border-foreground px-3 py-1.5 md:px-4 md:py-2 bg-accent text-accent-foreground font-mono font-bold text-xs md:text-sm lg:text-base uppercase mb-6 md:mb-8 brutal-shadow">
              SIDI-BISHR // ALEXANDRIA
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter mb-4 md:mb-6 uppercase">
              Building The <br/>
              <span className="text-stroke">Digital</span> Future.
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl font-mono text-muted-foreground leading-snug mb-8 md:mb-12 max-w-3xl border-l-4 border-accent pl-4 md:pl-6 bg-foreground/5 p-3 md:p-4">
              I&apos;m Mahmoud Ahmed. A results-driven Junior Full Stack Developer with 1+ year of experience engineering unapologetically bold, scalable web applications that demand attention.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6">
              <Button asChild size="lg" className="w-full sm:w-auto rounded-none h-14 md:h-16 px-6 md:px-10 text-lg md:text-xl brutal-border brutal-shadow bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-none">
                <Link href="#work">
                  VIEW PROJECTS
                  <ArrowUpRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" strokeWidth={3} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-none h-14 md:h-16 px-6 md:px-10 text-lg md:text-xl brutal-border brutal-shadow bg-background text-foreground hover:bg-foreground hover:text-background transition-none">
                <a href="/Mahmoud_Ahmed_Resume.pdf" download>
                  <Download className="mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5" strokeWidth={3} />
                  RESUME
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:block lg:col-span-4"
          >
            <div className="relative aspect-[3/4] brutal-border brutal-shadow bg-accent p-2">
              <div className="relative w-full h-full border-4 border-foreground overflow-hidden bg-muted filter grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src="/profile.webp"
                  alt="Mahmoud Ahmed"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-0.5 h-16 bg-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-[bounce_2s_infinite]" />
        </div>
      </div>
    </section>
  );
}
