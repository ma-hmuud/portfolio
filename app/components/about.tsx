"use client";

import { motion, useInView, useSpring, useMotionValue } from "motion/react";
import { useRef, useEffect } from "react";
import { ScrollReveal } from "./ui/scroll-reveal";
import { Code2, GraduationCap, Trophy, Rocket } from "lucide-react";

const stats = [
  {
    icon: Code2,
    value: 1,
    suffix: "+",
    label: "Years Experience",
    color: "text-cyan",
  },
  {
    icon: Trophy,
    value: 100,
    suffix: "+",
    label: "Problems Solved",
    color: "text-violet",
  },
  {
    icon: GraduationCap,
    value: 3.6,
    suffix: "/4.0",
    label: "CGPA",
    color: "text-rose",
  },
  {
    icon: Rocket,
    value: 4,
    suffix: "+",
    label: "Projects Deployed",
    color: "text-amber",
  },
];

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const isDecimal = value % 1 !== 0;
        ref.current.textContent =
          (isDecimal ? latest.toFixed(1) : Math.floor(latest).toString()) +
          suffix;
      }
    });

    return () => unsubscribe();
  }, [springValue, suffix, value]);

  return <span ref={ref}>0{suffix}</span>;
}

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get to know the developer behind the code
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a{" "}
                <span className="text-foreground font-medium">
                  Junior Full Stack Developer
                </span>{" "}
                with 1+ year of hands-on experience building and deploying
                production web applications. I specialize in creating modern,
                responsive, and user-friendly interfaces using the latest
                technologies.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans across{" "}
                <span className="text-cyan">Next.js</span>,{" "}
                <span className="text-violet">React</span>,{" "}
                <span className="text-rose">TypeScript</span>, and{" "}
                <span className="text-amber">Node.js</span>. I&apos;m passionate
                about clean code, best practices, and continuous learning.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing my{" "}
                <span className="text-foreground font-medium">
                  Bachelor of Data Science
                </span>{" "}
                at Alexandria University, I combine academic knowledge with
                practical development experience to build scalable solutions.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"].map(
                  (tech) => (
                    <span key={tech} className="skill-badge">
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* Stats Grid */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 text-center"
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${stat.color} bg-current/10`}
                  >
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
