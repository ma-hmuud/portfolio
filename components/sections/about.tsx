"use client";

import { motion } from "motion/react";
import { Briefcase, Code2, GraduationCap, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const experience = [
  {
    role: "Software Developer (Freelance)",
    company: "Shafei Vehicle Management",
    period: "Apr 2025 – Aug 2025",
    type: "Freelance",
    description:
      "Architected RESTful APIs with Express.js, PostgreSQL, Redis, and Drizzle ORM handling 500+ daily requests. Designed 10+ schemas and integrated AWS S3/SendGrid. Collaborated on Next.js frontend, improving load time by 40%.",
  },
  {
    role: ".NET Web Trainee",
    company: "Digital Egypt Pioneers Initiative",
    period: "Apr 2024 – Oct 2024",
    type: "Training",
    description:
      "Developed ASP.NET Core full-stack apps. Co-led a 3-person team building an educational platform for 200+ users. Optimized SQL Server queries, reducing load times by 30%.",
  },
];

const education = {
  degree: "Bachelor of Data Science",
  institution: "Alexandria University",
  period: "Oct 2022 – Jul 2026",
  details: "Faculty of Computer and Data Science • CGPA: 3.6/4.0",
};

const volunteer = {
  role: "Instructor & Content Writer",
  organization: "HackerRank Campus Club",
  period: "Feb 2024 – Dec 2025",
  description:
    "Mentored 50+ students in Java and problem-solving. Authored 5+ Java OOP workshops.",
};

const skillCategories = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TanStack Query", "Tailwind CSS", "shadcn/ui"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "NestJS", "Express.js", "ASP.NET Core", "GraphQL"],
  },
  {
    name: "Database & ORM",
    skills: ["PostgreSQL", "SQL Server", "Redis", "Drizzle ORM", "Prisma"],
  },
  {
    name: "Languages & Tools",
    skills: ["TypeScript", "Python", "C#", "Git", "Docker", "AWS S3", "Vercel"],
  },
];

export function About() {
  return (
    <section id="about" className="pt-40 pb-24 relative bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Bio Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center rounded-none border border-border/50 bg-background/50 px-3 py-1.5 text-sm font-medium text-muted-foreground mb-6">
              Hi, I&#39;m
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
              Mahmoud Ahmed.
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-8 text-muted-foreground">
              Passionate about{" "}
              <span className="bg-linear-to-r from-accent to-blue-500 bg-clip-text text-transparent font-bold">
                Solving Problems.
              </span>
            </h2>

            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Results-driven Junior Full Stack Developer with 1+ year of
                experience in building scalable web applications. Proficient in
                Next.js, Node.js, and TypeScript.
              </p>
              <p>
                Currently completing my Bachelor of Data Science (CGPA: 3.6) at
                Alexandria University.
              </p>

              <div className="mt-8">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto rounded-none h-14 px-8 text-base border-border/50 hover:bg-muted/50 hover:text-primary transition-all hover:-translate-y-1"
                >
                  <a href="/Mahmoud_Ahmed_Resume.pdf" download>
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </div>

              <div className="glass-panel p-6 rounded-none mt-12">
                <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                  Volunteer Work
                </h4>
                <p className="font-medium text-foreground mb-1">
                  {volunteer.role}{" "}
                  <span className="text-muted-foreground">
                    @ {volunteer.organization}
                  </span>
                </p>
                <p className="text-sm opacity-80">{volunteer.description}</p>
              </div>
            </div>
          </motion.div>

          {/* Timeline & Skills Side */}
          <div className="lg:col-span-7 space-y-16">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-2.5 rounded-none bg-accent/10 text-accent">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>

              <div className="space-y-6">
                {experience.map((exp, i) => (
                  <div
                    key={i}
                    className="glass-panel p-6 sm:p-8 rounded-none hover:bg-muted/30 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-2">
                      <div>
                        <h4 className="text-lg font-bold">{exp.role}</h4>
                        <p className="text-accent text-sm font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-xs font-medium px-2.5 py-1 bg-foreground/5 text-foreground rounded-none border border-border/50">
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-4 font-medium">
                      {exp.period}
                    </div>
                    <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-2.5 rounded-none bg-accent/10 text-accent">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>

              <div className="glass-panel p-8 rounded-none">
                <h4 className="text-xl font-bold mb-1">{education.degree}</h4>
                <p className="text-accent text-sm font-medium mb-4">
                  {education.institution}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm">
                  <span className="bg-background px-3 py-1.5 rounded-none border border-border/50 font-medium">
                    {education.details}
                  </span>
                  <span className="text-muted-foreground font-medium">
                    {education.period}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-2.5 rounded-none bg-accent/10 text-accent">
                  <Code2 size={24} />
                </div>
                <h3 className="text-2xl font-bold">Skills & Technologies</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {skillCategories.map((category) => (
                  <div key={category.name}>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                      {category.name}
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-sm font-medium bg-background px-3 py-1.5 rounded-none border border-border/50 hover:border-accent/50 hover:text-accent transition-colors cursor-default shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
