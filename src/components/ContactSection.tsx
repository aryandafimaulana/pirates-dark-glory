import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const socialLinks = [
  { icon: Github, href: "https://github.com/aryandafimaulana", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/aryandafimaulana", label: "LinkedIn" },
  { icon: Mail, href: "mailto:aryandafimaulana89@gmail.com", label: "Email" },
];

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Display only - no actual submission
    alert("This is a display-only form. Connect a backend to enable actual submissions!");
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Contact</span>
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Get In <span className="text-gradient-zoro">Touch</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-4">
                Let's work together
              </h3>
              <p className="text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Like a true swordsman, I'm ready to face any challenge!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:aryandafimaulana89@gmail.com" className="text-foreground hover:text-primary transition-colors">
                    aryandafimaulana89@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">Bogor, Jawa Barat, Indonesia</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+6282261133415" className="text-foreground hover:text-primary transition-colors">
                    +62 822-6113-3415
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Find me on</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 border-border">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-secondary/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-zoro hover:opacity-90 transition-opacity glow-zoro"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  This form is for display purposes only
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
