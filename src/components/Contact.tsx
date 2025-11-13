import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import profilePhoto from "@/assets/profile-photo.jpg";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-5xl md:text-7xl font-black font-poppins mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-inter">
            Ready to create something amazing together? Get in touch!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {/* Profile Photo */}
            <div className="glass-card p-8 rounded-3xl flex justify-center">
              <div className="relative w-72 h-72 rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl hover-glow-red">
                <img 
                  src={profilePhoto} 
                  alt="Midhun Krishna - UI/UX Designer" 
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
            </div>

            <div className="glass-card-red p-8 rounded-3xl">
              <h3 className="text-2xl font-bold font-poppins text-white mb-6">
                Open to Opportunities
              </h3>
              <p className="text-gray-300 font-inter leading-relaxed mb-6">
                I'm actively seeking full-time opportunities in UI/UX design and graphic design roles. 
                Passionate about creating user-centered designs and contributing to innovative teams. 
                Let's discuss how I can add value to your organization.
              </p>

              {/* Social Links */}
              <div className="space-y-4">
                <a 
                  href="mailto:midhunkrishna0509@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-black/20 hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-semibold">midhunkrishna0509@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/in/midhun-k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-black/20 hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <p className="text-white font-semibold">linkedin.com/in/midhun-k</p>
                  </div>
                </a>

                <a 
                  href="https://github.com/Midhun31"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-black/20 hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <p className="text-white font-semibold">github.com/Midhun31</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <form className="glass-card p-8 rounded-3xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2 font-inter">
                  Your Name
                </label>
                <Input 
                  id="name"
                  type="text" 
                  placeholder="John Doe"
                  className="bg-black/40 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2 font-inter">
                  Your Email
                </label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="john@example.com"
                  className="bg-black/40 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2 font-inter">
                  Message
                </label>
                <Textarea 
                  id="message"
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  className="bg-black/40 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white font-montserrat text-lg py-6 rounded-full hover-glow-red group"
              >
                Send Message
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
