"use client";

import { motion } from "motion/react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/scroll-reveal";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Backend Developer",
    company: "Shafei Vehicle Management App",
    type: "Freelance Project",
    period: "Apr 2025 – Aug 2025",
    location: "Remote",
    description: [
      "Architected and developed RESTful APIs using Express.js 5, PostgreSQL, Redis, and Drizzle ORM, handling 500+ daily API requests.",
      "Designed and optimized 10+ database schemas for vehicle tracking, user management, and automated notifications.",
      "Integrated third-party services: AWS S3 for file storage, SendGrid for emails, and Wasender for WhatsApp notifications.",
      "Collaborated on frontend development using Next.js 15, React 19, Tailwind CSS, and Radix UI, improving page load time by 40%.",
    ],
    technologies: ["Express.js", "PostgreSQL", "Redis", "Drizzle ORM", "AWS S3", "Next.js"],
    color: "cyan",
  },
  {
    title: ".NET Web Trainee",
    company: "Digital Egypt Pioneers Initiative",
    type: "Training Program",
    period: "Apr 2024 – Oct 2024",
    location: "Egypt",
    description: [
      "Developed and deployed 2+ full-stack web applications using ASP.NET Core MVC, Web API, and Entity Framework Core.",
      "Co-led a team of 3 developers building 'Learning World' educational platform serving 200+ users with course enrollment features.",
      "Built responsive, mobile-first UI components using Bootstrap 5, jQuery, and CSS3, achieving 100% cross-browser compatibility.",
      "Optimized SQL Server database queries reducing page load times by 30% through indexing and query refactoring.",
    ],
    technologies: ["ASP.NET Core", "Entity Framework", "SQL Server", "Bootstrap", "jQuery"],
    color: "violet",
  },
];

const volunteerWork = [
  {
    title: "Instructor",
    organization: "Project Engine by HackerRank Campus Club",
    period: "Sep 2025 – Dec 2025",
    description: "Mentored 50+ first-year computer science students in Java programming fundamentals and problem-solving techniques.",
    color: "rose",
  },
  {
    title: "Workshop Content Writer",
    organization: "HackerRank Campus Club",
    period: "Feb 2024 – Jun 2024",
    description: "Authored and delivered 5+ Java OOP workshops covering inheritance, polymorphism, encapsulation, and design patterns.",
    color: "amber",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey and contributions
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan via-violet to-rose transform -translate-x-1/2" />

          <StaggerContainer staggerDelay={0.2} className="space-y-12">
            {experiences.map((exp, index) => (
              <StaggerItem key={exp.title + exp.company}>
                <div
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 top-8 transform -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className={`w-4 h-4 rounded-full bg-${exp.color} shadow-lg shadow-${exp.color}/50`}
                      style={{
                        backgroundColor: exp.color === "cyan" ? "#06b6d4" : "#8b5cf6",
                        boxShadow: `0 0 20px ${exp.color === "cyan" ? "rgba(6, 182, 212, 0.5)" : "rgba(139, 92, 246, 0.5)"}`,
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-card p-6 md:p-8"
                    >
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span
                          className="px-3 py-1 text-xs font-medium rounded-full"
                          style={{
                            backgroundColor: exp.color === "cyan" ? "rgba(6, 182, 212, 0.1)" : "rgba(139, 92, 246, 0.1)",
                            color: exp.color === "cyan" ? "#06b6d4" : "#8b5cf6",
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p
                        className="text-lg font-medium mb-3"
                        style={{ color: exp.color === "cyan" ? "#06b6d4" : "#8b5cf6" }}
                      >
                        {exp.company}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                            <span className="text-cyan mt-1.5">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs font-mono bg-muted rounded-md text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty space for timeline alignment */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Volunteer Work */}
        <div className="mt-24">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Volunteer <span className="gradient-text">Work</span>
              </h3>
              <p className="text-muted-foreground">Giving back to the community</p>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-2 gap-6">
            {volunteerWork.map((work) => (
              <StaggerItem key={work.title + work.organization}>
                <motion.div whileHover={{ scale: 1.02 }} className="glass-card p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor:
                          work.color === "rose"
                            ? "rgba(244, 63, 94, 0.1)"
                            : "rgba(245, 158, 11, 0.1)",
                      }}
                    >
                      <Briefcase
                        size={20}
                        style={{
                          color: work.color === "rose" ? "#f43f5e" : "#f59e0b",
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">{work.title}</h4>
                      <p
                        className="text-sm font-medium mb-2"
                        style={{
                          color: work.color === "rose" ? "#f43f5e" : "#f59e0b",
                        }}
                      >
                        {work.organization}
                      </p>
                      <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1">
                        <Calendar size={12} />
                        {work.period}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {work.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
