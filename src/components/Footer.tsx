import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-900 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-poppins gradient-text mb-2">
              Midhun K
            </h3>
            <p className="text-gray-400 font-inter text-sm">
              UI/UX & Graphic Designer
            </p>
          </div>

          {/* Center */}
          <div className="flex items-center gap-2 text-gray-400 font-inter text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
            <span>in Trichy, Tamil Nadu</span>
          </div>

          {/* Right */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 font-inter text-sm">
              © 2025 Midhun K. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
