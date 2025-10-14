import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border/50 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            © {currentYear} Midhun K. Crafted with <Heart className="h-4 w-4 text-primary fill-primary" /> and creativity
          </p>
          <div className="flex gap-6">
            <a 
              href="#about" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
