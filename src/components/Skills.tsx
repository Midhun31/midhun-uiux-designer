import { Figma, Box, Code2, Palette, BarChart3, Layers } from "lucide-react";

const skills = [
  {
    name: "Figma",
    icon: Figma,
    description: "UI/UX Design & Prototyping",
    color: "text-[#F24E1E]"
  },
  {
    name: "Blender",
    icon: Box,
    description: "3D Modeling & Animation",
    color: "text-[#F5792A]"
  },
  {
    name: "Python",
    icon: Code2,
    description: "Automation & Data Analysis",
    color: "text-[#3776AB]"
  },
  {
    name: "Adobe Suite",
    icon: Palette,
    description: "Photoshop, Illustrator & XD",
    color: "text-[#FF0000]"
  },
  {
    name: "TensorFlow",
    icon: BarChart3,
    description: "Machine Learning Models",
    color: "text-[#FF6F00]"
  },
  {
    name: "Data Visualization",
    icon: Layers,
    description: "Charts, Graphs & Infographics",
    color: "text-primary"
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A blend of creative design tools and technical capabilities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 hover:glow-soft group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`${skill.color} p-4 rounded-xl bg-background/50 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold font-poppins text-lg">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
