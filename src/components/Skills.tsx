import { Figma, Palette, Brain, Code2, Target, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Design & 3D Modeling",
    icon: Palette,
    skills: [
      { name: "Figma", level: 95 },
      { name: "Blender", level: 85 },
      { name: "Adobe Photoshop", level: 90 },
      { name: "Adobe Illustrator", level: 88 },
    ],
    color: "from-primary to-red-600"
  },
  {
    title: "AI & Data Science",
    icon: Brain,
    skills: [
      { name: "Python", level: 85 },
      { name: "TensorFlow", level: 80 },
      { name: "OpenCV", level: 75 },
      { name: "Data Visualization", level: 82 },
    ],
    color: "from-red-500 to-orange-600"
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      { name: "Problem-Solving", level: 92 },
      { name: "Team Collaboration", level: 90 },
      { name: "Adaptability", level: 88 },
      { name: "Time Management", level: 85 },
    ],
    color: "from-orange-500 to-red-700"
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-5xl md:text-7xl font-black font-poppins mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-inter">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={catIndex}
                className="glass-card-red p-8 rounded-3xl hover-glow-red animate-fade-up"
                style={{ animationDelay: `${catIndex * 0.15}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold font-poppins text-white mb-6">
                  {category.title}
                </h3>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-inter">{skill.name}</span>
                        <span className="text-primary font-semibold text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000`}
                          style={{ 
                            width: `${skill.level}%`,
                            transitionDelay: `${(catIndex * 0.15) + (skillIndex * 0.1)}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
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
