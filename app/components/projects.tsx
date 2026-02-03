"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/scroll-reveal";
import { ExternalLink, Github, Star, Layers } from "lucide-react";

const projects = [
  {
    title: "MA Drive",
    description:
      "A full-stack Google Drive clone with user authentication, hierarchical folder management, and file upload functionality. Features secure authentication using Clerk OAuth2, file uploads via UploadThing, and database operations with Drizzle ORM.",
    technologies: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Drizzle ORM", "Clerk", "UploadThing"],
    github: "https://github.com/ma-hmuud/google-drive-tutorial/",
    live: "https://ma-drive-tutorial.netlify.app/",
    image: "/projects/ma-drive.png",
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
    image: "/projects/shafei.png",
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
    image: "/projects/learning-world.png",
    featured: false,
    gradient: "from-rose to-amber",
    period: "Apr 2024 – Oct 2024",
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [imageError, setImageError] = useState(false);
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

        <div className="relative h-full flex flex-col">
          {/* Project Image Preview */}
          <div className="relative h-48 overflow-hidden rounded-t-2xl">
            <div
              className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-30`}
            />
            {!imageError ? (
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Layers className="w-12 h-12 text-foreground/40 mb-2" />
                <span className="text-sm text-muted-foreground font-mono">{project.title}</span>
              </div>
            )}
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              {project.github !== "#" && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-muted/80 text-foreground hover:text-cyan transition-colors"
                >
                  <Github size={22} />
                </motion.a>
              )}
              {project.live !== "#" && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-muted/80 text-foreground hover:text-cyan transition-colors"
                >
                  <ExternalLink size={22} />
                </motion.a>
              )}
            </div>
            {/* Featured badge */}
            {project.featured && (
              <div className="absolute top-3 right-3">
                <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber/20 text-amber text-xs font-medium backdrop-blur-sm">
                  <Star size={12} fill="currentColor" />
                  Featured
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col grow">
            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-cyan transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-muted-foreground mb-3 font-mono">
              {project.period}
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-mono bg-linear-to-r from-cyan/10 to-violet/10 border border-cyan/20 rounded-md text-cyan"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-1 text-xs font-mono text-muted-foreground">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>
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
          {projects.map((project) => (
            <StaggerItem key={project.title} className="h-full">
              <ProjectCard project={project} />
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
