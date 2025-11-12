import { Briefcase, Code, Palette } from "lucide-react";

const experiences = [
  {
    title: "Portfolio & Prototypes",
    subtitle: "Figma + Blender",
    description: "Designed and developed a comprehensive personal portfolio with reusable component libraries and modern, responsive layouts. Integrated 3D elements using Blender for enhanced visual storytelling.",
    icon: Palette,
    color: "from-primary to-red-600"
  },
  {
    title: "2D to 3D Visual Converter",
    subtitle: "Computer Vision Project",
    description: "Engineered an innovative tool that transforms 2D images into interactive 3D meshes. Achieved 25% improvement in rendering speed through optimized algorithms and efficient data processing.",
    icon: Code,
    color: "from-red-500 to-orange-600"
  },
  {
    title: "Product Review Generator",
    subtitle: "Flask + AI Integration",
    description: "Developed an automated review generation system using Flask backend and AI models. Streamlined the review process with natural language processing and sentiment analysis capabilities.",
    icon: Briefcase,
    color: "from-orange-500 to-red-700"
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-5xl md:text-7xl font-black font-poppins mb-4">
            Academic <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-inter">
            Hands-on learning experiences showcasing design and technical skills
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-3xl hover-glow-red group animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${exp.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold font-poppins text-white mb-2">
                  {exp.title}
                </h3>
                
                <p className="text-primary font-semibold font-montserrat mb-4 text-sm">
                  {exp.subtitle}
                </p>

                <p className="text-gray-300 font-inter leading-relaxed">
                  {exp.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
