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
    github: "https://github.com/ma-hmuud/graphora",
    live: "https://graphora-visualizer.vercel.app",
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
    github: "https://github.com/ma-hmuud/swiftshift-scheduler",
    live: "https://swiftshift-scheduler.vercel.app/",
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
  {
    title: "Shafei Vehicle Management",
    description:
      "Enterprise vehicle management system with real-time tracking, automated notifications, and comprehensive reporting dashboards.",
    bullets: [
      "Architected RESTful APIs with Express.js, PostgreSQL, Redis, and Drizzle ORM.",
      "Integrated AWS S3 for file storage and SendGrid for transactional emails.",
      "Collaborated on Next.js frontend, improving page load time by 40%.",
    ],
    github: "#",
    live: "https://shafei.vercel.app/",
    image: "/projects/shafei.webp",
    year: "2025",
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="work" className="py-32 relative bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Selected{" "}
            <span className="bg-linear-to-r from-accent to-blue-500 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A curated list of my latest engineered solutions, built with modern
            web technologies.
          </p>
        </motion.div>

        <div className="grid gap-12 md:gap-16">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="group glass-panel rounded-none-none overflow-hidden flex flex-col lg:flex-row hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                {/* Content Side */}
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center order-2 lg:order-1">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="text-sm font-medium px-3 py-1 bg-muted rounded-none-none">
                      {project.year}
                    </span>
                    {project.featured && (
                      <span className="flex items-center text-sm font-medium px-3 py-1 bg-accent/10 text-accent rounded-none-none border border-accent/20">
                        <Star className="w-3.5 h-3.5 mr-1.5 fill-current" />
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-base md:text-lg text-foreground/80 mb-6">
                    {project.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {project.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm md:text-base text-muted-foreground"
                      >
                        <span className="text-accent mr-3 mt-1">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-border/50">
                    {project.live !== "#" && (
                      <Button
                        asChild
                        className="rounded-none-none px-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Site <ArrowUpRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.github !== "#" && (
                      <Button
                        asChild
                        variant="outline"
                        className="rounded-none-none px-6 bg-transparent border-border hover:bg-muted transition-all hover:-translate-y-0.5"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" /> Source
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Image Side */}
                <div className="w-full lg:w-[50%] relative aspect-16/10 lg:aspect-auto overflow-hidden order-1 lg:order-2 bg-muted/30">
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
