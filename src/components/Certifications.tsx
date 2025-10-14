import { Award, CheckCircle2 } from "lucide-react";

const certifications = [
  {
    title: "Data Visualization",
    organization: "Accenture",
    year: "2024",
    type: "Certification"
  },
  {
    title: "UI/UX Design Certification",
    organization: "Udemy",
    year: "2024",
    type: "Certification"
  },
  {
    title: "AWS Cloud Practitioner",
    organization: "Amazon Web Services",
    year: "2025",
    type: "Certification"
  },
  {
    title: "Cybersecurity Awareness",
    organization: "HP LIFE",
    year: "2025",
    type: "Certification"
  },
];

const workshops = [
  {
    title: "Data Science Workshop",
    organization: "Guvi",
    year: "2024"
  },
  {
    title: "UI/UX Design Workshop",
    organization: "Guvi",
    year: "2024"
  },
  {
    title: "Advanced Ethical Hacking",
    organization: "National Level Workshop",
    year: "2025"
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-32 px-6 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-5xl md:text-7xl font-black font-poppins mb-4">
            Certifications & <span className="gradient-text">Workshops</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-inter">
            Continuous learning and professional development journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Certifications */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold font-poppins text-white">
                Certifications
              </h3>
            </div>

            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl border-l-4 border-primary hover-glow-red group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold font-poppins text-white mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-gray-400 font-inter mb-1">{cert.organization}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-primary font-semibold">{cert.year}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Workshops */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold font-poppins text-white">
                Workshops
              </h3>
            </div>

            {workshops.map((workshop, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl border-l-4 border-red-600 hover-glow-red group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold font-poppins text-white mb-2 group-hover:text-primary transition-colors">
                      {workshop.title}
                    </h4>
                    <p className="text-gray-400 font-inter mb-1">{workshop.organization}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-red-500" />
                      <span className="text-red-500 font-semibold">{workshop.year}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-red-500" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
