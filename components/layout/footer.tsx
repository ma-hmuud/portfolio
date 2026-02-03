export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-muted/20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mahmoud Ahmed
        </p>
        <p className="text-sm text-muted-foreground">
          Built with Next.js, Tailwind CSS & shadcn/ui
        </p>
      </div>
    </footer>
  );
}
