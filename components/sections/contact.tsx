"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-32 relative bg-accent text-accent-foreground border-t-4 border-foreground overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMTBoNDBNMTAgMHY0ME0wIDIwaDQwTTIwIDB2NDBNMCAzMGg0ME0zMCAwdjQwIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')]" />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-foreground text-background px-4 py-2 font-mono font-bold uppercase text-sm mb-12 brutal-border">
            INITIATE_CONTACT.EXE
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 md:mb-12 uppercase tracking-tighter leading-none md:leading-[0.9]">
            READY TO BUILD SOMETHING <br />
            <span
              className="text-background"
              style={{ WebkitTextStroke: "2px var(--foreground)" }}
            >
              EXTRAORDINARY?
            </span>
          </h2>

          <p className="font-mono text-base sm:text-xl md:text-2xl font-bold mb-10 md:mb-16 max-w-3xl mx-auto bg-background text-foreground p-4 md:p-6 brutal-border brutal-shadow">
            I&apos;m currently available for freelance work and full-time
            opportunities. Let&apos;s discuss how I can help your team succeed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 mb-16 md:mb-24 w-full px-4 sm:px-0">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto rounded-none h-14 md:h-16 px-6 md:px-8 text-lg md:text-xl brutal-border brutal-shadow bg-foreground text-background hover:bg-background hover:text-foreground transition-none"
            >
              <a href="mailto:mahmoud.ahmed.25.9.24@gmail.com">
                <Mail
                  className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6"
                  strokeWidth={3}
                />
                EMAIL ME
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-none h-14 md:h-16 px-6 md:px-8 text-lg md:text-xl brutal-border brutal-shadow bg-background text-foreground hover:bg-foreground hover:text-background transition-none"
            >
              <a href="tel:+201096389518">
                <Phone
                  className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6"
                  strokeWidth={3}
                />
                +20 109 638 9518
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-12 border-t-4 border-foreground pt-12 flex-wrap">
            <a
              href="https://github.com/ma-hmuud"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-mono font-bold text-2xl hover:text-background transition-colors p-2"
            >
              <Github className="h-8 w-8" strokeWidth={2.5} />
              <span>GITHUB</span>
            </a>
            <a
              href="https://linkedin.com/in/mahmuud"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-mono font-bold text-2xl hover:text-background transition-colors p-2"
            >
              <Linkedin className="h-8 w-8" strokeWidth={2.5} />
              <span>LINKEDIN</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
