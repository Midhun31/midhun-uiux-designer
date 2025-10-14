import { GraduationCap, Award } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    college: "National Institute of Technology, Trichy",
    duration: "2020 - 2024",
    cgpa: "8.5",
  },
  {
    degree: "Higher Secondary Education (12th)",
    college: "Bharathidasan Matriculation Higher Secondary School",
    duration: "2018 - 2020",
    cgpa: "92%",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Educational <span className="gradient-text">Background</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic foundation that shaped my design and technical expertise
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <div className="flex-grow space-y-3">
                  <div>
                    <h3 className="text-2xl font-semibold font-poppins mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-primary font-medium">
                      {edu.college}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <div className="bg-primary/10 px-6 py-4 rounded-xl text-center">
                    <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">CGPA/Score</p>
                    <p className="text-2xl font-bold text-primary">{edu.cgpa}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
