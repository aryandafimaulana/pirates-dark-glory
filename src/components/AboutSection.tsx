import { Quote, Swords } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-primary text-sm font-medium uppercase tracking-wider">About Me</span>
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Know More <span className="text-gradient-zoro">About Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image/Avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-lg rotate-3" />
              <div className="absolute -inset-4 border-2 border-accent/20 rounded-lg -rotate-3" />
              
              {/* Avatar container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden bg-secondary border-2 border-border">
                <Avatar className="w-full h-full rounded-lg">
                  <AvatarImage src="/placeholder.svg" alt="Profile" className="object-cover" />
                  <AvatarFallback className="text-6xl bg-gradient-zoro text-primary-foreground rounded-lg">
                    ZR
                  </AvatarFallback>
                </Avatar>
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Swords className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">三刀流</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Hello! I'm a passionate <span className="text-primary font-semibold">Full-Stack Developer</span> with 
                a strong foundation in building modern web applications. I believe in writing clean, 
                efficient code and continuously improving my skills.
              </p>
              <p className="leading-relaxed">
                With experience in both frontend and backend development, I enjoy tackling complex 
                challenges and turning ideas into reality. My journey in programming has taught me 
                the value of persistence, discipline, and always striving for excellence.
              </p>
              <p className="leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or watching One Piece for inspiration on never giving up.
              </p>
            </div>

            {/* Zoro Quote */}
            <div className="relative p-6 bg-secondary/30 rounded-lg border border-border">
              <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/20" />
              <blockquote className="pl-8 italic text-muted-foreground">
                "Nothing happened... I just keep moving forward."
              </blockquote>
              <p className="mt-2 pl-8 text-sm text-primary font-medium">— Roronoa Zoro</p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-card rounded-lg border border-border">
                <p className="text-2xl font-bold text-gradient-zoro">2+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="p-4 bg-card rounded-lg border border-border">
                <p className="text-2xl font-bold text-gradient-gold">10+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
