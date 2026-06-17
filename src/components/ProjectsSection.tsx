import { ExternalLink, Github, Folder } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  role: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "AnimalPedia",
    description:
      "Educational interactive mobile app for children to learn about animals in a fun way. Final project from Bangkit Academy 2024 cohort, integrated with ML models for animal image detection.",
    role: "Mobile Developer (Kotlin)",
    tags: ["Kotlin", "Android Studio", "Machine Learning", "Bangkit 2024"],
  },
  {
    title: "E-Permit Website",
    description:
      "Digitized a previously manual Permit-to-Work system at PT. Bintang Toedjoe into a flexible web-based application to manage vendor work permits. Built end-to-end from requirement analysis to deployment.",
    role: "Full-Stack Developer (Internship)",
    tags: ["Laravel 11", "Tailwind CSS", "SQLite", "PHP"],
  },
  {
    title: "KerjaStat.id — GIS Web (Thesis)",
    description:
      "Geographic Information System visualizing open unemployment data across 38 Indonesian provinces, with multiple linear regression analysis of employment indicators (UMP, IPM, RLS, TPAK).",
    role: "Full-Stack Developer",
    tags: ["GIS", "Web Mapping", "Data Visualization", "Regression Analysis"],
  },
  {
    title: "Poultry GIS",
    description:
      "Web-based Geographic Information System for managing and monitoring poultry farm locations through interactive maps. Features farm database management, district-based filtering, Excel export, satellite imagery with AI-generated building measurement visualization, and dashboard analytics with Leaflet.js and Tailwind CSS.",
    role: "Full-Stack Developer",
    tags: ["Laravel", "SQLite", "Tailwind CSS", "Leaflet.js", "GIS"],
  },
  {
    title: "Software Project I",
    description:
      "Final project from Software Project I class at Teknik Informatika Universitas Padjadjaran. Built the front-end of a collaborative application.",
    role: "Front-end Engineer",
    tags: ["Vue.js", "Node.js"],
  },
  {
    title: "Restaurant Website",
    description:
      "Final project from Website Programming class — a fully responsive restaurant website with menu and reservation features.",
    role: "Web Developer",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "SASIndonesia Export — Company Profile",
    description:
      "Designed the UI for the company profile website of SASIndonesia Export using Figma, focusing on clean and professional presentation.",
    role: "UI Designer",
    tags: ["Figma", "UI/UX"],
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <Card
    className="group bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:glow-zoro overflow-hidden animate-fade-in"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <CardContent className="p-6 h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Folder className="w-6 h-6 text-primary" />
        </div>
        <div className="flex gap-2">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <div className="flex-1">
        <h3 className="font-display font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-accent font-medium mb-3 uppercase tracking-wider">{project.role}</p>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-4">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs bg-secondary/50 hover:bg-primary/20 transition-colors">
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
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4">
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
            A collection of projects focused on mobile app and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 hover:bg-primary/10 hover:border-primary"
            asChild
          >
            <a href="https://github.com/aryandafimaulana" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
