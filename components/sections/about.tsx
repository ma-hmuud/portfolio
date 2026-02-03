"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

const experience = [
  {
    role: "Backend Developer",
    company: "Shafei Vehicle Management",
    period: "Apr – Aug 2025",
    type: "Freelance",
  },
  {
    role: ".NET Web Trainee",
    company: "Digital Egypt Pioneers Initiative",
    period: "Apr – Oct 2024",
    type: "Training",
  },
];

const skills = [
  "TypeScript", "React", "Next.js", "Node.js", "Express.js",
  "PostgreSQL", "Redis", "Drizzle ORM", "Tailwind CSS", "Git",
  "ASP.NET Core", "SQL Server"
];

export function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">About</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mt-3 mb-8">Background</h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I&apos;m a Full Stack Developer with over a year of experience building production web applications. 
                My focus is on creating clean, efficient, and user-centered digital products.
              </p>
              <p>
                Currently pursuing my Bachelor&apos;s in Data Science at Alexandria University with a 3.6 GPA, 
                I combine academic rigor with practical development experience.
              </p>
              <p>
                Beyond building applications, I have a strong foundation in problem-solving, having solved 
                100+ algorithmic challenges on platforms like Codeforces and LeetCode.
              </p>
            </div>
          </motion.div>

          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-serif font-medium mb-8">Experience</h3>
              <div className="space-y-8">
                {experience.map((exp) => (
                  <div key={exp.role + exp.company} className="group">
                    <div className="flex justify-between items-baseline mb-1">
                      <p className="font-medium text-lg group-hover:text-accent transition-colors">{exp.role}</p>
                      <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <p className="text-muted-foreground">{exp.company}</p>
                       <Badge variant="outline" className="text-xs font-normal text-muted-foreground">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-serif font-medium mb-8">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm font-normal">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
