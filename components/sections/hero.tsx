"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1fr,350px] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="accent-line mb-8" />
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight mb-6 text-balance">
              Mahmoud Ahmed
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-lg font-light">
              Full Stack Developer crafting thoughtful digital experiences with modern technologies.
            </p>
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-10">
              <MapPin size={16} />
              <span>Alexandria, Egypt</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="#work">
                  View Work
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <a href="/Mahmoud_Ahmed_Resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative aspect-[3/4] hidden lg:block"
          >
            <div className="absolute inset-0 bg-muted rounded-xl overflow-hidden shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-500">
              <Image
                src="/profile.webp"
                alt="Mahmoud Ahmed"
                fill
                className="object-cover img-editorial"
                priority
                sizes="(max-width: 768px) 100vw, 400px"
                quality={90}
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-accent/20 rounded-full -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
