"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowUpRight, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Graphora",
    description: "Architected a full-stack graph visualization monorepo.",
    bullets: [
      "Engineered background workers (NetworkX, NumPy) orchestrated via BullMQ.",
      "Built a scalable PostgreSQL backend with Prisma ORM and AWS S3.",
      "Utilized Next.js, NestJS (GraphQL), and Python computation workers.",
    ],
    github: "https://github.com/your-repo/graphora",
    live: "#",
    image: "/projects/graphora.png",
    year: "2026",
    featured: true,
  },
  {
    title: "Swift Shift",
    description:
      "Employee scheduling platform facilitating role-based workflows and shift requests.",
    bullets: [
      "Built end-to-end type-safe APIs using tRPC and TanStack Query.",
      "Integrated Next.js with PostgreSQL via Drizzle ORM.",
      "Created dynamic calendar interfaces utilizing FullCalendar and Radix UI.",
    ],
    github: "https://github.com/your-repo/swiftshift",
    live: "#",
    image: "/projects/swiftshift.png",
    year: "2026",
    featured: true,
  },
  {
    title: "MA Drive",
    description:
      "Full-stack Google Drive clone with user authentication and hierarchical folders.",
    bullets: [
      "Implemented secure authentication using Clerk OAuth2.",
      "Executed database operations with Drizzle ORM.",
      "Deployed to Netlify with an automated CI/CD pipeline achieving 99% uptime.",
    ],
    github: "https://github.com/ma-hmuud/google-drive-tutorial/",
    live: "https://ma-drive-tutorial.netlify.app/",
    image: "/projects/ma-drive.webp",
    year: "2026",
    featured: true,
  },
];

export function Projects() {
  return (
    <section
      id="work"
      className="py-32 relative bg-background border-t-4 border-foreground"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-4 md:mb-6">
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter">
              Selected <span className="text-accent">Work</span>
            </h2>
            <div className="h-2 flex-1 bg-foreground hidden md:block" />
          </div>
          <p className="font-mono text-base md:text-xl text-muted-foreground uppercase tracking-widest max-w-xl bg-muted p-3 md:p-4 brutal-border">
            A curated list of my latest engineered solutions.
          </p>
        </motion.div>

        <div className="grid gap-16 md:gap-24">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <div className="grid lg:grid-cols-12 gap-0 brutal-border brutal-shadow bg-card hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200">
                {/* Content Side */}
                <div className="lg:col-span-5 p-6 sm:p-8 md:p-12 flex flex-col justify-between border-b-4 lg:border-b-0 lg:border-r-4 border-foreground">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6 md:mb-8">
                      <span className="font-mono text-xl md:text-2xl font-bold bg-foreground text-background px-3 py-1">
                        {project.year}
                      </span>
                      {project.featured && (
                        <div className="flex items-center font-bold text-accent font-mono text-xs md:text-sm uppercase tracking-widest bg-accent/10 px-2 py-1 md:px-3 md:py-1 brutal-border">
                          <Star className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 fill-current" />{" "}
                          Featured
                        </div>
                      )}
                    </div>

                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 md:mb-6">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground font-mono text-base md:text-lg font-bold mb-4 md:mb-6">
                      {project.description}
                    </p>

                    <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                      {project.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 md:gap-3 font-mono text-xs md:text-sm leading-relaxed border-l-2 border-accent pl-2 md:pl-3"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-auto">
                    {project.live !== "#" && (
                      <Button
                        asChild
                        size="lg"
                        className="w-full sm:w-auto rounded-none brutal-border brutal-shadow bg-accent text-accent-foreground hover:bg-foreground hover:text-background transition-none"
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          VISIT SITE{" "}
                          <ArrowUpRight
                            className="ml-2 h-4 w-4 md:h-5 md:w-5"
                            strokeWidth={3}
                          />
                        </a>
                      </Button>
                    )}
                    {project.github !== "#" && (
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto rounded-none brutal-border brutal-shadow bg-background text-foreground hover:bg-foreground hover:text-background transition-none"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github
                            className="mr-2 h-4 w-4 md:h-5 md:w-5"
                            strokeWidth={3}
                          />{" "}
                          SOURCE
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Image Side */}
                <div className="lg:col-span-7 relative aspect-16/10 lg:aspect-auto overflow-hidden bg-muted group-hover:bg-accent transition-colors duration-300 p-2 lg:p-4">
                  <div className="relative w-full h-full brutal-border overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
