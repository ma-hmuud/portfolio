"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const projects = [
  {
    title: "MA Drive",
    description: "A full-stack Google Drive clone with authentication, hierarchical folder management, and file uploads using Shadcn UI components.",
    technologies: ["Next.js", "TypeScript", "Drizzle ORM", "Clerk", "UploadThing"],
    github: "https://github.com/ma-hmuud/google-drive-tutorial/",
    live: "https://ma-drive-tutorial.netlify.app/",
    image: "/projects/ma-drive.webp",
    year: "2026",
  },
  {
    title: "Shafei Vehicle Management",
    description: "Enterprise vehicle management system with real-time tracking, automated notifications, and comprehensive reporting dashboards.",
    technologies: ["Express.js", "PostgreSQL", "Redis", "AWS S3", "SendGrid"],
    github: "#",
    live: "https://shafei.vercel.app/",
    image: "/projects/shafei.webp",
    year: "2025",
  },
  {
    title: "Learning World",
    description: "Educational platform serving 200+ users with course enrollment, progress tracking, and interactive learning materials.",
    technologies: ["ASP.NET Core", "SQL Server", "Entity Framework", "Bootstrap"],
    github: "https://github.com/ma-hmuud/learning-world",
    live: "http://learningworld.runasp.net/",
    image: "/projects/learning-world.webp",
    year: "2024",
  },
];

export function Projects() {
  return (
    <section id="work" className="py-32 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Selected Work</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mt-3">Featured Projects</h2>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="grid lg:grid-cols-[1.5fr,1fr] gap-10 items-start group">
                {/* Image Side */}
                <div className="order-2 lg:order-1 relative rounded-xl overflow-hidden shadow-sm border border-border/50 bg-muted/50 aspect-video lg:aspect-[16/10]">
                   <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl" />
                </div>

                {/* Content Side */}
                <div className="order-1 lg:order-2 flex flex-col h-full justify-center">
                  <div className="flex items-baseline justify-between mb-4">
                     <h3 className="text-3xl font-serif font-medium group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <span className="font-mono text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="px-3 py-1 text-xs font-normal bg-background border-border/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    {project.live !== "#" && (
                      <Button asChild className="rounded-full">
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          Visit Site
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                     {project.github !== "#" && (
                      <Button asChild variant="outline" className="rounded-full">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              {index !== projects.length - 1 && <Separator className="mt-24 opacity-50" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
