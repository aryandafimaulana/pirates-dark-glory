import { Briefcase, GraduationCap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Experience {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "work" | "education" | "achievement";
  tags?: string[];
}

const experiences: Experience[] = [
  {
    title: "Full-Stack Developer Intern",
    organization: "PT. Bintang Toedjoe (Kalbe Group) — Pulo Gadung, Jakarta",
    period: "Nov 2024 - Mar 2025",
    description:
      "Analyzed and developed the Permit to Work (E-Permit) system into a web-based application. Handled requirement analysis, tech stack selection, activity diagrams, database design, and full-stack development.",
    type: "work",
    tags: ["Laravel 11", "Tailwind CSS", "SQLite", "Full-Stack"],
  },
  {
    title: "Mobile Development Cohort",
    organization: "Bangkit Academy led by Google, GoTo & Traveloka",
    period: "Feb 2024 - Jul 2024",
    description:
      "Selected as 1 of 4,650 cohorts from 57,000+ applicants in this MBKM Flagship Program. Built Android apps with Kotlin and integrated AI models for image detection in the capstone project.",
    type: "work",
    tags: ["Kotlin", "Android Studio", "ML Integration"],
  },
  {
    title: "Vice Chairman",
    organization: "Himatif FMIPA Universitas Padjadjaran",
    period: "Jan 2023 - Dec 2023",
    description:
      "Formulated 36 work programs with the chairman and department heads. Led 14 heads of departments/bureaus, coordinated with DPA Himatif, and ensured synergistic execution across the management timeline.",
    type: "work",
    tags: ["Leadership", "Organization", "Coordination"],
  },
  {
    title: "Project Supervisor",
    organization: "Informatics Festival",
    period: "Apr 2022 - Nov 2022",
    description:
      "Successfully organized three IT competitions, a national seminar, and a technopreneur event. Led 10 divisions and collaborated with the marketing team to secure sponsorships.",
    type: "work",
    tags: ["Event Management", "Leadership"],
  },
  {
    title: "Staff of External Relations",
    organization: "Himatif FMIPA Universitas Padjadjaran",
    period: "Jan 2022 - Dec 2022",
    description:
      "Built and maintained communication with other student associations. Gathered 180+ external contacts and executed 6 comparative studies with organizations from various universities.",
    type: "work",
    tags: ["Networking", "Communication"],
  },
  {
    title: "Facilitator — Prabu 2022",
    organization: "Universitas Padjadjaran",
    period: "Jun 2022 - Aug 2022",
    description:
      "Group Leader responsible for organizing 26 new students, monitoring tasks, re-presenting materials, and introducing Padjadjaran University.",
    type: "work",
    tags: ["Leadership", "Mentoring"],
  },
  {
    title: "Bachelor of Computer Science",
    organization: "Universitas Padjadjaran — Jatinangor",
    period: "GPA: 3.59 / 4.00",
    description:
      "Undergraduate Computer Science student, focusing on software engineering, mobile development, and geographic information systems.",
    type: "education",
  },
  {
    title: "High School Diploma — Natural Science",
    organization: "SMA Negeri 3 Bogor",
    period: "Graduated",
    description: "Natural Science major at SMA Negeri 3 Bogor.",
    type: "education",
  },
  {
    title: "Learn Intermediate Android App Development",
    organization: "Dicoding.id",
    period: "2024",
    description: "Advanced Android development techniques and best practices.",
    type: "achievement",
  },
  {
    title: "Learn to Implement Machine Learning for Android",
    organization: "Dicoding.id",
    period: "2024",
    description: "Applying machine learning models inside Android applications.",
    type: "achievement",
  },
  {
    title: "Learn Basic AI",
    organization: "Dicoding.id",
    period: "2024",
    description: "Foundations of AI: data, Machine Learning, and Deep Learning.",
    type: "achievement",
  },
  {
    title: "Getting Started with Kotlin",
    organization: "Dicoding.id",
    period: "2024",
    description: "Kotlin language fundamentals and implementation.",
    type: "achievement",
  },
  {
    title: "Speaker — Sobat Jauh Goes to Campus & SMAN 3 Bogor",
    organization: "PJJ.ID / SMA Negeri 3 Bogor",
    period: "2022",
    description: "Invited to share experiences on entering university with 500+ students across two talk show sessions.",
    type: "achievement",
  },
];

const getIcon = (type: Experience["type"]) => {
  switch (type) {
    case "work":
      return <Briefcase className="w-5 h-5" />;
    case "education":
      return <GraduationCap className="w-5 h-5" />;
    case "achievement":
      return <Award className="w-5 h-5" />;
  }
};

const getIconBg = (type: Experience["type"]) => {
  switch (type) {
    case "work":
      return "bg-gradient-zoro";
    case "education":
      return "bg-gradient-to-br from-blue-500 to-blue-600";
    case "achievement":
      return "bg-gradient-to-br from-accent to-yellow-600";
  }
};

const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => (
  <div
    className="relative pl-8 pb-8 last:pb-0 animate-fade-in-left"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="absolute left-[11px] top-10 bottom-0 w-px bg-border last:hidden" />

    <div className={`absolute left-0 top-1 w-6 h-6 rounded-full ${getIconBg(experience.type)} flex items-center justify-center text-white`}>
      {getIcon(experience.type)}
    </div>

    <Card className="bg-card/50 border-border hover:border-primary/30 transition-colors ml-4">
      <CardContent className="p-5">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <h3 className="font-display font-semibold text-foreground">{experience.title}</h3>
          <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
            {experience.period}
          </span>
        </div>
        <p className="text-sm text-primary font-medium mb-2">{experience.organization}</p>
        <p className="text-sm text-muted-foreground mb-3">{experience.description}</p>
        {experience.tags && (
          <div className="flex flex-wrap gap-2">
            {experience.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs border-primary/30 text-primary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  </div>
);

const ExperienceSection = () => {
  const workExperiences = experiences.filter((e) => e.type === "work");
  const otherExperiences = experiences.filter((e) => e.type !== "work");

  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/20 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Experience</span>
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            My <span className="text-gradient-zoro">Journey</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Every step of the way has shaped me into the developer I am today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display font-semibold text-xl text-foreground mb-6 flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-primary" />
              Work & Organizations
            </h3>
            <div>
              {workExperiences.map((exp, index) => (
                <ExperienceCard key={exp.title + exp.period} experience={exp} index={index} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-xl text-foreground mb-6 flex items-center gap-3">
              <Award className="w-5 h-5 text-accent" />
              Education & Achievements
            </h3>
            <div>
              {otherExperiences.map((exp, index) => (
                <ExperienceCard key={exp.title + exp.period} experience={exp} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
