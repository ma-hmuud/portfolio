"use client";

import { motion } from "motion/react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/scroll-reveal";
import {
  Code2,
  Palette,
  Server,
  Database,
  Cloud,
  GitBranch,
  Brain,
  Users,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    color: "cyan",
    skills: ["TypeScript", "JavaScript", "C#", "SQL"],
  },
  {
    title: "Frontend",
    icon: Palette,
    color: "violet",
    skills: ["React", "Next.js", "TanStack Query", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Backend",
    icon: Server,
    color: "rose",
    skills: ["Node.js", "Express.js", "Hono", "ASP.NET Core", "RESTful APIs", "Webhooks"],
  },
  {
    title: "Databases",
    icon: Database,
    color: "amber",
    skills: ["PostgreSQL", "MySQL", "SQL Server", "Drizzle ORM", "Entity Framework", "Redis"],
  },
  {
    title: "Auth & Cloud",
    icon: Cloud,
    color: "cyan",
    skills: ["OAuth2 (Clerk, BetterAuth)", "AWS S3", "UploadThing", "Vercel", "Netlify"],
  },
  {
    title: "DevOps",
    icon: GitBranch,
    color: "violet",
    skills: ["Git", "GitHub Actions", "Docker", "Inngest", "BullMQ", "CI/CD"],
  },
  {
    title: "Practices",
    icon: Brain,
    color: "rose",
    skills: ["OOP", "SOLID Principles", "Design Patterns", "Clean Architecture", "Agile", "Unit Testing"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    color: "amber",
    skills: ["Communication", "Fast Learner", "Team Player", "Problem Solving", "Dependable"],
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "cyan":
      return {
        bg: "bg-cyan/10",
        border: "border-cyan/20",
        text: "text-cyan",
        hover: "hover:bg-cyan/20 hover:border-cyan/40",
        iconBg: "bg-cyan/20",
      };
    case "violet":
      return {
        bg: "bg-violet/10",
        border: "border-violet/20",
        text: "text-violet",
        hover: "hover:bg-violet/20 hover:border-violet/40",
        iconBg: "bg-violet/20",
      };
    case "rose":
      return {
        bg: "bg-rose/10",
        border: "border-rose/20",
        text: "text-rose",
        hover: "hover:bg-rose/20 hover:border-rose/40",
        iconBg: "bg-rose/20",
      };
    case "amber":
      return {
        bg: "bg-amber/10",
        border: "border-amber/20",
        text: "text-amber",
        hover: "hover:bg-amber/20 hover:border-amber/40",
        iconBg: "bg-amber/20",
      };
    default:
      return {
        bg: "bg-muted",
        border: "border-border",
        text: "text-foreground",
        hover: "hover:bg-muted/80",
        iconBg: "bg-muted",
      };
  }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The tools and technologies I work with
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            return (
              <StaggerItem key={category.title}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="glass-card p-6 h-full"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`w-10 h-10 rounded-xl ${colors.iconBg} flex items-center justify-center`}
                    >
                      <category.icon className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <h3 className={`font-bold text-lg ${colors.text}`}>
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: categoryIndex * 0.05 + skillIndex * 0.03,
                          duration: 0.3,
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`px-3 py-1.5 text-sm font-medium rounded-lg border transition-all cursor-default ${colors.bg} ${colors.border} ${colors.hover}`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Problem Solving Stats */}
        <ScrollReveal delay={0.3}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="mt-12 glass-card p-8 text-center"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  100+
                </div>
                <p className="text-muted-foreground">
                  Problems Solved on{" "}
                  <span className="text-cyan">Codeforces</span> &{" "}
                  <span className="text-amber">LeetCode</span>
                </p>
              </div>
              <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent" />
              <div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  DSA
                </div>
                <p className="text-muted-foreground">
                  Algorithms & Data Structures
                </p>
              </div>
              <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent" />
              <div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  SQL
                </div>
                <p className="text-muted-foreground">
                  Database Query Optimization
                </p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
