import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-dark" />

      <div className="absolute top-1/4 right-10 w-1 h-32 bg-gradient-to-b from-primary/20 to-transparent rotate-45 animate-float" />
      <div className="absolute bottom-1/4 left-10 w-1 h-24 bg-gradient-to-b from-primary/15 to-transparent -rotate-45 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/4 w-0.5 h-20 bg-gradient-to-b from-accent/20 to-transparent rotate-12 animate-float" style={{ animationDelay: "0.5s" }} />

      <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Open for opportunities</span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient-zoro">Aryan Dafi Maulana</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="text-primary font-semibold">Software Engineer</span>
            <span className="text-muted-foreground"> · Full-Stack & Mobile Developer</span>
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            "Coding with the spirit of a swordsman —
            <span className="text-gradient-gold"> precise, determined, unstoppable.</span>"
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-gradient-zoro hover:opacity-90 transition-opacity glow-zoro" onClick={() => handleScroll("#projects")}>
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 hover:border-primary" onClick={() => handleScroll("#contact")}>
              Contact Me
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <a href="https://github.com/aryandafimaulana" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary/50 border border-border hover:border-primary hover:bg-primary/10 transition-all group">
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="https://linkedin.com/in/aryandafimaulana" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary/50 border border-border hover:border-primary hover:bg-primary/10 transition-all group">
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="mailto:aryandafimaulana89@gmail.com" className="p-3 rounded-full bg-secondary/50 border border-border hover:border-primary hover:bg-primary/10 transition-all group">
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button onClick={() => handleScroll("#about")} className="p-2 rounded-full text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
