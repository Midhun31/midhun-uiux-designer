import { ArrowDown, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-black"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-parallax"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-parallax" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          {/* Main Headline */}
          <div className="space-y-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-poppins leading-none tracking-tighter">
              WELCOME TO
            </h1>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-poppins leading-none tracking-tighter gradient-text text-shadow-red">
              MY PORTFOLIO
            </h1>
          </div>

          {/* Designer Introduction */}
          <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-2xl md:text-3xl font-montserrat text-white">
              I'm <span className="text-primary font-semibold">Midhun</span> — Graphic & UI/UX Designer
            </p>
          </div>

          {/* Subheading */}
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-2xl md:text-4xl font-montserrat font-light tracking-wide text-gray-300">
              WHERE IDEAS MEET <span className="text-primary font-semibold">PIXELS</span>
            </p>
          </div>

          {/* Subtitle */}
          <div className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-xl md:text-2xl font-inter text-muted-foreground">
              Graphic Design | UI/UX Design
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <a href="#projects">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-montserrat text-lg px-8 py-6 rounded-full hover-glow-red group"
              >
                View My Work ↓
                <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </a>
            <a href="#contact">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-montserrat text-lg px-8 py-6 rounded-full transition-all duration-300"
              >
                <Mail className="mr-2" />
                Hire Me
              </Button>
            </a>
          </div>

          {/* Email */}
          <div className="animate-fade-up" style={{ animationDelay: '1s' }}>
            <a 
              href="mailto:midhunkrishna0509@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors font-inter text-sm"
            >
              midhunkrishna0509@gmail.com
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
