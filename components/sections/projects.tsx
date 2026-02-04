"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowUpRight, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "MA Drive",
    description: "A full-stack Google Drive clone with authentication, hierarchical folder management, and file uploads using Shadcn UI components.",
    technologies: ["Next.js", "TypeScript", "Drizzle ORM", "Clerk", "UploadThing"],
    github: "https://github.com/ma-hmuud/google-drive-tutorial/",
    live: "https://ma-drive-tutorial.netlify.app/",
    image: "/projects/ma-drive.webp",
    year: "2026",
    featured: true,
  },
  {
    title: "Shafei Vehicle Management",
    description: "Enterprise vehicle management system with real-time tracking, automated notifications, and comprehensive reporting dashboards.",
    technologies: ["Express.js", "PostgreSQL", "Redis", "AWS S3", "SendGrid"],
    github: "#",
    live: "https://shafei.vercel.app/",
    image: "/projects/shafei.webp",
    year: "2025",
    featured: true,
  },
  {
    title: "Learning World",
    description: "Educational platform serving 200+ users with course enrollment, progress tracking, and interactive learning materials.",
    technologies: ["ASP.NET Core", "SQL Server", "Entity Framework", "Bootstrap"],
    github: "https://github.com/ma-hmuud/learning-world",
    live: "http://learningworld.runasp.net/",
    image: "/projects/learning-world.webp",
    year: "2024",
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="work" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-border" />
            <span className="text-sm font-bold text-accent uppercase tracking-widest">Selected Work</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center">Featured Projects</h2>
        </motion.div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden p-2 group hover:border-accent/50 transition-colors"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center bg-background/50 rounded-2xl p-6 md:p-8">
                {/* Content */}
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-sm text-accent">{project.year}</span>
                    {project.featured && (
                      <Badge variant="secondary" className="bg-amber-500/10 text-amber-500 border-amber-500/20">
                        <Star className="w-3 h-3 mr-1 fill-current" /> Featured
                      </Badge>
                    )}
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="px-3 py-1 bg-background/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    {project.live !== "#" && (
                      <Button asChild size="sm" className="rounded-lg">
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          Visit Site <ArrowUpRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                     {project.github !== "#" && (
                      <Button asChild variant="ghost" size="sm" className="rounded-lg hover:bg-background/80">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Image */}
                <div className="order-1 lg:order-2 relative aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-border group-hover:shadow-accent/10 transition-all duration-500">
                   <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
