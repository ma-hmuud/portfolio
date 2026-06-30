export function Footer() {
  return (
    <footer className="py-8 bg-foreground text-background border-t-4 border-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-mono font-bold text-lg uppercase">
          © {new Date().getFullYear()} MAHMOUD AHMED
        </div>
        <div className="flex flex-wrap items-center gap-4 font-mono font-bold text-sm uppercase">
          <span>BUILT WITH</span>
          <span className="bg-background text-foreground px-2 py-1">NEXT.JS</span>
          <span className="bg-background text-foreground px-2 py-1">TAILWIND</span>
          <span className="bg-background text-foreground px-2 py-1">SHADCN</span>
        </div>
      </div>
    </footer>
  );
}
