"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/scroll-reveal";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  FileText,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mahmoud.ahmed.25.9.24@gmail.com",
    href: "mailto:mahmoud.ahmed.25.9.24@gmail.com",
    color: "cyan",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+201096389518",
    href: "tel:+201096389518",
    color: "violet",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Alexandria, Egypt",
    href: "#",
    color: "rose",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/ma-hmuud",
    username: "@ma-hmuud",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/mahmuud",
    username: "@mahmuud",
  },
];

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="space-y-8">
              {/* Contact Cards */}
              <StaggerContainer staggerDelay={0.1} className="space-y-4">
                {contactInfo.map((info) => (
                  <StaggerItem key={info.label}>
                    <motion.a
                      href={info.href}
                      whileHover={{ scale: 1.02, x: 8 }}
                      className="glass-card p-4 flex items-center gap-4 group"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${info.color}/10`}
                      >
                        <info.icon className={`w-5 h-5 text-${info.color}`} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {info.label}
                        </p>
                        <p className={`font-medium text-foreground group-hover:text-${info.color} transition-colors`}>
                          {info.value}
                        </p>
                      </div>
                      <ArrowRight
                        className={`w-5 h-5 ml-auto text-muted-foreground group-hover:text-${info.color} opacity-0 group-hover:opacity-100 transition-all`}
                      />
                    </motion.a>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Social Links */}
              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="glass-card p-4 flex-1 text-center group"
                    >
                      <social.icon className="w-6 h-6 mx-auto mb-2 text-muted-foreground group-hover:text-cyan transition-colors" />
                      <p className="text-sm font-medium">{social.label}</p>
                      <p className="text-xs text-muted-foreground">
                        {social.username}
                      </p>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Resume Download */}
              <motion.a
                href="/Mahmoud_Ahmed_Resume.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full flex items-center justify-center gap-3 py-4"
              >
                <FileText className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.a>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={0.2}>
            <motion.form
              onSubmit={handleSubmit}
              className="glass-card p-6 md:p-8"
            >
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-muted-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-muted-foreground mb-2"
                  >
                    Your Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-muted-foreground mb-2"
                  >
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
                  className={`btn-primary w-full flex items-center justify-center gap-2 py-4 ${
                    isSubmitted
                      ? "!bg-green-500/20 !border-green-500"
                      : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-green-500">Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>
          </ScrollReveal>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground"
        >
          <p className="mb-2">
            Designed & Built by{" "}
            <span className="gradient-text font-medium">Mahmoud Ahmed</span>
          </p>
          <p className="text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
