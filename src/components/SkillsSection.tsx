import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools";
}

const skills: Skill[] = [
  // Mobile & Frontend
  { name: "Kotlin / Android Studio", level: 85, category: "frontend" },
  { name: "Vue.js", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "HTML / CSS / JavaScript", level: 90, category: "frontend" },
  // Backend
  { name: "Laravel / PHP", level: 85, category: "backend" },
  { name: "Node.js", level: 75, category: "backend" },
  { name: "SQLite / MySQL", level: 80, category: "backend" },
  { name: "REST APIs", level: 80, category: "backend" },
  // Tools & Soft Skills
  { name: "Git / GitHub", level: 85, category: "tools" },
  { name: "Figma (UI/UX)", level: 85, category: "tools" },
  { name: "Project Management", level: 90, category: "tools" },
  { name: "Leadership & Public Speaking", level: 90, category: "tools" },
];

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => (
  <div
    className="space-y-2 animate-fade-in"
    style={{ animationDelay: `${index * 0.05}s` }}
  >
    <div className="flex justify-between items-center">
      <span className="text-sm font-medium text-foreground">{skill.name}</span>
      <span className="text-xs text-muted-foreground">{skill.level}%</span>
    </div>
    <Progress value={skill.level} className="h-2" />
  </div>
);

const techIcons = [
  { name: "Kotlin", icon: "🤖" },
  { name: "Laravel", icon: "🔺" },
  { name: "Vue.js", icon: "💚" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Figma", icon: "🖌️" },
  { name: "SQLite", icon: "🗄️" },
  { name: "Git", icon: "📦" },
  { name: "Android", icon: "📱" },
];

const SkillsSection = () => {
  const frontendSkills = skills.filter((s) => s.category === "frontend");
  const backendSkills = skills.filter((s) => s.category === "backend");
  const toolsSkills = skills.filter((s) => s.category === "tools");

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Skills</span>
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            My <span className="text-gradient-zoro">Technical Arsenal</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Like Zoro's three-sword style, I wield multiple technologies to tackle any challenge
          </p>
        </div>

        {/* Tech Icons Row */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {techIcons.map((tech, index) => (
            <div
              key={tech.name}
              className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full hover:border-primary hover:glow-zoro transition-all duration-300 cursor-default animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-xl">{tech.icon}</span>
              <span className="text-sm font-medium text-foreground">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <Card className="bg-card/50 border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-zoro flex items-center justify-center">
                  <span className="text-lg">🗡️</span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">Frontend</h3>
                  <p className="text-xs text-muted-foreground">First Sword</p>
                </div>
              </div>
              <div className="space-y-4">
                {frontendSkills.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Backend */}
          <Card className="bg-card/50 border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-zoro flex items-center justify-center">
                  <span className="text-lg">⚔️</span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">Backend</h3>
                  <p className="text-xs text-muted-foreground">Second Sword</p>
                </div>
              </div>
              <div className="space-y-4">
                {backendSkills.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tools */}
          <Card className="bg-card/50 border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-zoro flex items-center justify-center">
                  <span className="text-lg">🔪</span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">Tools</h3>
                  <p className="text-xs text-muted-foreground">Third Sword</p>
                </div>
              </div>
              <div className="space-y-4">
                {toolsSkills.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
