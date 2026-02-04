"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Ready to build something <br />
            <span className="text-gradient-accent">extraordinary?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I&apos;m currently available for freelance work and full-time opportunities. 
            Let&apos;s discuss how I can help your team succeed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <Button asChild size="lg" className="h-14 px-8 rounded-full text-lg shadow-xl shadow-accent/20 hover:shadow-accent/40">
              <a href="mailto:mahmoud.ahmed.25.9.24@gmail.com">
                <Mail className="mr-3 h-5 w-5" />
                mahmoud.ahmed.25.9.24@gmail.com
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-full text-lg border-2">
              <a href="https://linkedin.com/in/mahmuud" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-muted-foreground">
            <a
              href="https://github.com/ma-hmuud"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors p-2"
            >
              <Github className="h-8 w-8" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/mahmuud"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors p-2"
            >
              <Linkedin className="h-8 w-8" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
