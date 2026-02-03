"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "React Specialist",
  "TypeScript Enthusiast",
  "Problem Solver",
];

const techIcons = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#339933" },
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        {techIcons.map((tech, index) => {
          const positions = [
            { top: "20%", left: "10%" },
            { top: "30%", right: "15%" },
            { bottom: "30%", left: "15%" },
            { bottom: "25%", right: "10%" },
          ];
          return (
            <motion.div
              key={tech.name}
              className="absolute text-2xl font-mono font-bold"
              style={{ color: tech.color, ...positions[index] }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 0.2,
                x: [0, 20, 0, -20, 0],
                y: [0, -20, 0, 20, 0],
              }}
              transition={{
                delay: index * 0.5,
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {tech.name}
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Profile Photo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          className="relative mx-auto mb-8 w-80 h-80"
        >
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-cyan via-violet to-rose animate-spin-slow" style={{ padding: "3px" }}>
            <div className="w-full h-full rounded-full bg-background" />
          </div>
          <div className="absolute inset-1 rounded-full overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Mahmoud Ahmed"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-cyan/30 via-violet/30 to-rose/30 blur-xl -z-10" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text-animated">Mahmoud Ahmed</span>
        </motion.h1>

        {/* Typewriter Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 h-10"
        >
          <span className="font-mono">
            {displayText}
            <span className="typewriter-cursor" />
          </span>
        </motion.div>

        {/* Brief Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Building modern web applications with{" "}
          <span className="text-cyan">Next.js</span>,{" "}
          <span className="text-violet">React</span>, and{" "}
          <span className="text-rose">TypeScript</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>View My Work</span>
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>Get In Touch</span>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: Github, href: "https://github.com/ma-hmuud", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/mahmuud", label: "LinkedIn" },
            { icon: Mail, href: "mailto:mahmoud.ahmed.25.9.24@gmail.com", label: "Email" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.2, y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-muted/50 text-muted-foreground hover:text-cyan hover:bg-cyan/10 transition-colors"
              aria-label={social.label}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-cyan transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ChevronDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
}
