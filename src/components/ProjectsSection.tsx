import { ExternalLink, Github, Folder } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with cart, checkout, and payment integration. Built with React, Node.js, and PostgreSQL.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "A Kanban-style task management application with drag-and-drop, team collaboration, and real-time updates.",
    tags: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website with dark theme and One Piece inspired design. You're looking at it!",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description: "A weather application that displays current and forecasted weather data with beautiful visualizations.",
    tags: ["React", "Chart.js", "Weather API"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Blog Platform",
    description: "A markdown-based blog platform with categories, tags, and full-text search functionality.",
    tags: ["Next.js", "MDX", "Tailwind"],
    github: "https://github.com",
  },
  {
    title: "Chat Application",
    description: "Real-time chat application with rooms, direct messages, and file sharing capabilities.",
    tags: ["React", "Socket.io", "Node.js"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <Card 
    className={`group bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:glow-zoro overflow-hidden ${
      project.featured ? "md:col-span-1" : ""
    } animate-fade-in`}
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <CardContent className="p-6 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Folder className="w-6 h-6 text-primary" />
        </div>
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <Badge 
            key={tag} 
            variant="secondary" 
            className="text-xs bg-secondary/50 hover:bg-primary/20 transition-colors"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Projects</span>
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Featured <span className="text-gradient-zoro">Work</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 hover:bg-primary/10 hover:border-primary"
          >
            <Github className="w-4 h-4 mr-2" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
