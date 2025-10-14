import { Award, Calendar } from "lucide-react";

const certifications = [
  {
    title: "Advanced UI/UX Design",
    organization: "Design Institute",
    year: "2025",
    type: "Certification"
  },
  {
    title: "3D Modeling & Animation Workshop",
    organization: "Blender Foundation",
    year: "2025",
    type: "Workshop"
  },
  {
    title: "Machine Learning Fundamentals",
    organization: "TensorFlow Academy",
    year: "2024",
    type: "Certification"
  },
  {
    title: "Creative Design Masterclass",
    organization: "Adobe Education",
    year: "2024",
    type: "Workshop"
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Certifications & <span className="gradient-text">Workshops</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

          <div className="space-y-12">
            {certifications.map((cert, index) => (
              <div 
                key={cert.title}
                className={`relative flex items-center gap-8 animate-fade-up ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10" />

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} pl-16 md:pl-0`}>
                  <div className="glass-card p-6 rounded-2xl shadow-elegant hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="h-5 w-5 text-primary" />
                          <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                            {cert.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold font-poppins mb-2">
                          {cert.title}
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          {cert.organization}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{cert.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
