"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Contact</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mt-3 mb-8">Let&apos;s Connect</h2>
          <p className="text-muted-foreground text-xl leading-relaxed mb-12">
            I&apos;m always interested in hearing about new projects and opportunities. 
            Feel free to reach out directly via email or connect on social media.
          </p>
          
          <div className="mb-12">
            <a 
              href="mailto:mahmoud.ahmed.25.9.24@gmail.com"
              className="inline-flex items-center gap-4 text-2xl md:text-3xl font-serif hover:text-accent transition-colors group"
            >
              <Mail className="h-6 w-6 md:h-8 md:w-8 group-hover:scale-110 transition-transform duration-300" />
              <span className="link-subtle">mahmoud.ahmed.25.9.24@gmail.com</span>
            </a>
          </div>

          <Separator className="my-12 opacity-50" />

          <div className="flex items-center gap-8">
            <a
              href="https://github.com/ma-hmuud"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Github className="h-5 w-5 group-hover:text-accent transition-colors" />
              <span className="text-base font-medium">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/mahmuud"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Linkedin className="h-5 w-5 group-hover:text-accent transition-colors" />
              <span className="text-base font-medium">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
