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
    title: "Software Developer Intern",
    organization: "Tech Company XYZ",
    period: "Jan 2024 - Present",
    description: "Developing and maintaining web applications using React and Node.js. Collaborated with senior developers on key features.",
    type: "work",
    tags: ["React", "Node.js", "Agile"],
  },
  {
    title: "Lead Developer",
    organization: "Campus IT Organization",
    period: "Aug 2023 - Dec 2023",
    description: "Led a team of 5 developers in building the organization's internal management system. Implemented CI/CD pipelines.",
    type: "work",
    tags: ["Leadership", "Full-Stack", "CI/CD"],
  },
  {
    title: "Web Development Lead",
    organization: "Student Developer Club",
    period: "Mar 2023 - Jul 2023",
    description: "Organized workshops and mentored junior members in web development fundamentals and best practices.",
    type: "work",
    tags: ["Mentoring", "Web Dev", "Community"],
  },
  {
    title: "Bachelor of Computer Science",
    organization: "University Name",
    period: "2021 - Present",
    description: "Studying Computer Science with focus on Software Engineering. GPA: 3.8/4.0",
    type: "education",
  },
  {
    title: "Best Project Award",
    organization: "Hackathon 2023",
    period: "November 2023",
    description: "Won first place for developing an innovative solution for sustainable transportation using IoT.",
    type: "achievement",
  },
  {
    title: "AWS Certified Developer",
    organization: "Amazon Web Services",
    period: "October 2023",
    description: "Earned certification demonstrating proficiency in developing applications on AWS platform.",
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
    {/* Timeline line */}
    <div className="absolute left-[11px] top-10 bottom-0 w-px bg-border last:hidden" />
    
    {/* Timeline dot */}
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
              <Badge 
                key={tag} 
                variant="outline" 
                className="text-xs border-primary/30 text-primary"
              >
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
      {/* Decorative */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
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
          {/* Work Experience */}
          <div>
            <h3 className="font-display font-semibold text-xl text-foreground mb-6 flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-primary" />
              Work & Organizations
            </h3>
            <div>
              {workExperiences.map((exp, index) => (
                <ExperienceCard key={exp.title} experience={exp} index={index} />
              ))}
            </div>
          </div>

          {/* Education & Achievements */}
          <div>
            <h3 className="font-display font-semibold text-xl text-foreground mb-6 flex items-center gap-3">
              <Award className="w-5 h-5 text-accent" />
              Education & Achievements
            </h3>
            <div>
              {otherExperiences.map((exp, index) => (
                <ExperienceCard key={exp.title} experience={exp} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
