import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border/50 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://github.com/ma-hmuud"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-muted rounded-none-none text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/mahmoud-ahmed-3b8584285"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-muted rounded-none-none text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:mahmoud.ahmed.25.9.24@gmail.com"
            className="p-3 bg-muted rounded-none-none text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
        
        <p className="text-muted-foreground text-sm font-medium">
          &copy; {currentYear} Mahmoud Ahmed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
