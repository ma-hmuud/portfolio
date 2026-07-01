import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { About } from "@/components/sections/about";
import { Terminal } from "@/components/ui/terminal";
import { Projects } from "@/components/sections/projects";
import { GithubActivity } from "@/components/sections/github-activity";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground">
      <Navbar />
      <main>
        <About />
        
        <section className="py-12 bg-background">
          <div className="max-w-4xl mx-auto px-6">
            <Terminal />
          </div>
        </section>

        <Projects />
        <GithubActivity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
