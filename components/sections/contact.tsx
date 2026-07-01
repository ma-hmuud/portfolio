"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-muted/20">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-10 md:p-16 rounded-none-none"
        >
          <div className="inline-flex items-center justify-center p-4 bg-accent/10 text-accent rounded-none-none mb-8">
            <Mail size={32} />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Let&#39;s{" "}
            <span className="bg-linear-to-r from-accent to-blue-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            I&#39;m currently looking for new opportunities. Whether you have a
            question or just want to say hi, my inbox is always open.
          </p>

          <Button
            asChild
            size="lg"
            className="rounded-none-none h-14 px-8 text-base shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all hover:-translate-y-1"
          >
            <a href="mailto:mahmoud.ahmed.25.9.24@gmail.com">
              Get In Touch
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
