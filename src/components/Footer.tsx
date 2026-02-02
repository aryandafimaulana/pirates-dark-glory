import { Heart, Swords } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-zoro flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">三</span>
            </div>
            <span className="font-display font-bold text-foreground">Portfolio</span>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-destructive fill-current" /> and
            </span>
            <Swords className="w-4 h-4 text-primary" />
          </div>

          {/* Zoro reference */}
          <p className="text-xs text-muted-foreground italic">
            "Nothing happened."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
