"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, type MouseEvent } from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/scroll-reveal";
import { ExternalLink, Github, Folder, Star } from "lucide-react";

const projects = [
  {
    title: "MA Drive",
    description:
      "A full-stack Google Drive clone with user authentication, hierarchical folder management, and file upload functionality. Features secure authentication using Clerk OAuth2, file uploads via UploadThing, and database operations with Drizzle ORM.",
    technologies: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Drizzle ORM", "Clerk", "UploadThing"],
    github: "https://github.com/ma-hmuud/google-drive-tutorial/",
    live: "https://ma-drive-tutorial.netlify.app/",
    featured: true,
    gradient: "from-cyan to-violet",
    period: "Jan 2026 – Feb 2026",
  },
  {
    title: "Shafei Vehicle Management",
    description:
      "Comprehensive vehicle management system with RESTful APIs handling 500+ daily requests. Includes vehicle tracking, user management, automated notifications via WhatsApp and email, with AWS S3 file storage integration.",
    technologies: ["Express.js 5", "PostgreSQL", "Redis", "Next.js 15", "AWS S3", "SendGrid"],
    github: "#",
    live: "https://shafei.vercel.app/",
    featured: true,
    gradient: "from-violet to-rose",
    period: "Apr 2025 – Aug 2025",
  },
  {
    title: "Learning World",
    description:
      "Educational platform serving 200+ users with course enrollment features. Built with ASP.NET Core MVC, featuring responsive mobile-first UI and optimized SQL Server queries with 30% improved load times.",
    technologies: ["ASP.NET Core", "Entity Framework", "SQL Server", "Bootstrap 5", "jQuery"],
    github: "https://github.com/ma-hmuud/learning-world",
    live: "http://learningworld.runasp.net/",
    featured: false,
    gradient: "from-rose to-amber",
    period: "Apr 2024 – Oct 2024",
  },
];

function ProjectCard({ project }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="h-full"
    >
      <div
        className="h-full glass-card overflow-hidden group relative"
        style={{ transform: "translateZ(50px)" }}
      >
        {/* Gradient border effect on hover */}
        <div
          className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          style={{ padding: "1px" }}
        >
          <div className="w-full h-full bg-muted rounded-[15px]" />
        </div>

        <div className="relative p-6 md:p-8 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div
              className={`w-12 h-12 rounded-xl bg-linear-to-br ${project.gradient} flex items-center justify-center`}
            >
              <Folder className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center gap-3">
              {project.featured && (
                <span className="flex items-center gap-1 text-amber text-sm">
                  <Star size={14} fill="currentColor" />
                  Featured
                </span>
              )}
              {project.github !== "#" && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={18} />
                </motion.a>
              )}
              {project.live !== "#" && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-cyan transition-colors"
                >
                  <ExternalLink size={18} />
                </motion.a>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="grow">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-cyan transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-muted-foreground mb-3 font-mono">
              {project.period}
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-mono bg-linear-to-r from-cyan/10 to-violet/10 border border-cyan/20 rounded-md text-cyan"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work and side projects
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <StaggerItem key={project.title} className="h-full">
              <ProjectCard project={project} index={index} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View More CTA */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <motion.a
              href="https://github.com/ma-hmuud"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 btn-secondary"
            >
              <Github size={18} />
              <span>View More on GitHub</span>
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
