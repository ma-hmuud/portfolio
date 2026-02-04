"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Code2 } from "lucide-react";

const experience = [
  {
    role: "Backend Developer",
    company: "Shafei Vehicle Management",
    period: "Apr – Aug 2025",
    type: "Freelance",
    description: "Architected scalable RESTful APIs handling 500+ daily requests using Express.js and PostgreSQL."
  },
  {
    role: ".NET Web Trainee",
    company: "Digital Egypt Pioneers Initiative",
    period: "Apr – Oct 2024",
    type: "Training",
    description: "Developed full-stack applications with ASP.NET Core and optimized SQL queries."
  },
];

const skills = [
  "TypeScript", "React", "Next.js", "Node.js", "Express.js",
  "PostgreSQL", "Redis", "Drizzle ORM", "Tailwind CSS", "Git",
  "ASP.NET Core", "SQL Server"
];

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-secondary/30 rounded-full blur-[120px] -z-10 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Bio Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sticky top-32"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              About Me
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Crafting code with <span className="text-gradient-accent">precision</span> and purpose.
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a Full Stack Developer passionate about building software that feels right. I don&apos;t just write code; I engineer solutions that are scalable, maintainable, and delightful to use.
              </p>
              <p>
                Currently finishing my degree in Data Science at Alexandria University (3.6 GPA), I blend academic theory with messy, real-world practice.
              </p>
              <p>
                When I&apos;m not building web apps, I&apos;m sharpening my problem-solving skills on LeetCode (100+ solved) or exploring new tech stacks.
              </p>
            </div>
          </motion.div>

          {/* Timeline & Skills Side */}
          <div className="space-y-16">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>

              <div className="space-y-6">
                {experience.map((exp, i) => (
                  <div key={i} className="glass-card p-6 rounded-2xl bg-background/40 hover:bg-background/60 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-lg">{exp.role}</h4>
                        <p className="text-muted-foreground font-medium">{exp.company}</p>
                      </div>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 font-mono">{exp.period}</p>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Code2 size={24} />
                </div>
                <h3 className="text-2xl font-bold">Technical Arsenal</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <Badge 
                    key={skill} 
                    variant="outline" 
                    className="px-4 py-2 text-sm bg-background/50 hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
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
