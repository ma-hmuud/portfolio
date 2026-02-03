"use client";

import { motion } from "motion/react";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function GradientText({
  children,
  className = "",
  animated = false,
  as: Component = "span",
}: GradientTextProps) {
  const baseClass = animated ? "gradient-text-animated" : "gradient-text";

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Component className={`${baseClass} ${className}`}>{children}</Component>
    </motion.span>
  );
}
