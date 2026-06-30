"use client";

import { motion } from "motion/react";
import { Briefcase, Code2, GraduationCap } from "lucide-react";

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
    <section
      id="about"
      className="py-32 relative bg-background border-t-4 border-foreground overflow-hidden"
    >
      {/* Background Decor */}
      <div
        className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(var(--foreground) 2px, transparent 2px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* Bio Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <div className="inline-block bg-accent text-accent-foreground px-3 py-1.5 md:px-4 md:py-2 font-mono font-bold uppercase text-xs md:text-sm mb-6 md:mb-8 brutal-border brutal-shadow">
              SYSTEM_INFO // ABOUT_ME
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase mb-8 md:mb-10 leading-[1] md:leading-[0.9]">
              PASSIONATE ABOUT <br className="hidden sm:block" /> <span className="text-stroke">SOLVING</span> PROBLEMS.
            </h2>
            
            <div className="space-y-4 md:space-y-6 font-mono text-base md:text-lg text-muted-foreground leading-relaxed border-l-4 border-foreground pl-4 md:pl-6">
              <p>
                Adept at working in agile teams and committed to continuous learning. I enjoy developing intuitive user interfaces and architecting robust backends.
              </p>
              <p>
                Currently completing my Bachelor of Data Science (CGPA: 3.6) at Alexandria University.
              </p>
              <div className="bg-foreground text-background p-4 md:p-6 brutal-shadow brutal-border mt-6 md:mt-8">
                <h4 className="font-black text-xl mb-2 text-accent">
                  VOLUNTEER COMMAND
                </h4>
                <p className="font-bold">
                  {volunteer.role} @ {volunteer.organization}
                </p>
                <p className="text-sm mt-2 opacity-80">
                  {volunteer.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Timeline & Skills Side */}
          <div className="space-y-16 md:space-y-24 mt-12 lg:mt-0">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
                <div className="p-2 md:p-3 bg-foreground text-background brutal-border">
                  <Briefcase className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
                  Experience
                </h3>
              </div>

              <div className="space-y-6 md:space-y-8">
                {experience.map((exp, i) => (
                  <div
                    key={i}
                    className="brutal-card p-5 sm:p-6 md:p-8 bg-card hover:bg-muted transition-colors brutal-shadow"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 md:mb-6 gap-3 md:gap-4">
                      <div>
                        <h4 className="font-black text-xl md:text-2xl uppercase">
                          {exp.role}
                        </h4>
                        <p className="font-mono font-bold text-accent text-sm md:text-base">
                          {exp.company}
                        </p>
                      </div>
                      <div className="font-mono font-bold bg-foreground text-background px-2 py-1 md:px-3 md:py-1 brutal-border text-xs md:text-sm">
                        {exp.type}
                      </div>
                    </div>
                    <div className="font-mono text-xs md:text-sm text-foreground mb-3 md:mb-4 border-b-2 border-foreground/20 pb-1 md:pb-2 inline-block">
                      {exp.period}
                    </div>
                    <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
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
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-foreground text-background brutal-border">
                  <GraduationCap size={32} />
                </div>
                <h3 className="text-4xl font-black uppercase tracking-tighter">
                  Education
                </h3>
              </div>

              <div className="brutal-card p-8 bg-card brutal-shadow">
                <h4 className="font-black text-2xl uppercase">
                  {education.degree}
                </h4>
                <p className="font-mono font-bold text-accent mt-2">
                  {education.institution}
                </p>
                <div className="flex flex-col gap-2 mt-4 font-mono text-sm">
                  <span className="bg-muted inline-block px-3 py-1 brutal-border w-fit">
                    {education.details}
                  </span>
                  <span className="text-muted-foreground font-bold">
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
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-foreground text-background brutal-border">
                  <Code2 size={32} />
                </div>
                <h3 className="text-4xl font-black uppercase tracking-tighter">
                  Arsenal
                </h3>
              </div>

              <div className="space-y-8">
                {skillCategories.map((category) => (
                  <div
                    key={category.name}
                    className="border-l-4 border-accent pl-4"
                  >
                    <h4 className="font-black text-xl uppercase mb-4">
                      {category.name}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="font-mono font-bold text-sm bg-background text-foreground px-3 py-1.5 brutal-border brutal-shadow hover:bg-accent hover:text-accent-foreground transition-none cursor-default"
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
