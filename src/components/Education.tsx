import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-5xl md:text-7xl font-black font-poppins mb-4">
            Educational <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-inter">
            Academic foundation powering innovation in design and technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card-red p-10 rounded-3xl hover-glow-red animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center shadow-red">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow space-y-4">
                <div>
                  <h3 className="text-3xl font-bold font-poppins text-white mb-2">
                    Bachelor of Technology
                  </h3>
                  <p className="text-xl text-primary font-semibold font-montserrat">
                    Artificial Intelligence and Data Science
                  </p>
                </div>

                <div className="text-gray-300 font-inter">
                  <p className="text-lg">K Ramakrishnan College of Technology</p>
                  <p className="text-gray-400">Trichy, Tamil Nadu, India</p>
                </div>

                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-300">2022 - 2026</span>
                  </div>
                </div>
              </div>

              {/* CGPA Badge */}
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-br from-primary/20 to-red-600/20 border-2 border-primary/40 px-8 py-6 rounded-2xl text-center">
                  <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-sm text-gray-400 mb-2 font-inter">CGPA</p>
                  <p className="text-4xl font-bold text-white font-poppins">7.02</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
