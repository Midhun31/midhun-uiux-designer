const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-gradient-to-b from-black via-gray-950 to-black relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div>
              <h2 className="text-5xl md:text-7xl font-black font-poppins mb-4">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-24 h-1 bg-primary"></div>
            </div>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-inter">
              <p>
                I'm <span className="text-white font-semibold">Midhun K</span>, a creative and detail-oriented designer passionate about crafting 
                <span className="text-primary font-medium"> visually stunning</span> and 
                <span className="text-primary font-medium"> user-centered digital experiences</span>.
              </p>
              <p>
                My design philosophy centers around understanding users deeply and creating solutions 
                that not only look beautiful but solve real problems. Every pixel matters, every interaction counts.
              </p>
              <p>
                I'm seeking to join an innovative creative company where I can contribute 
                <span className="text-primary font-medium"> cutting-edge design solutions</span> and grow alongside 
                talented teams pushing the boundaries of digital design.
              </p>
            </div>

            {/* Quote */}
            <div className="border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-lg">
              <p className="text-xl font-montserrat italic text-gray-200">
                "Every design tells a story — shaped by growth, driven by passion."
              </p>
            </div>
          </div>

          {/* Right Content - Stats & Info */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {/* Skills Grid */}
            <div className="glass-card-red p-8 rounded-2xl space-y-6 hover-glow-red">
              <h3 className="text-2xl font-bold font-poppins text-white">Core Expertise</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">UI/UX Design</span>
                    <span className="text-primary font-semibold">95%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-red-600 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Graphic Design</span>
                    <span className="text-primary font-semibold">90%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-red-600 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">3D Modeling</span>
                    <span className="text-primary font-semibold">85%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-red-600 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Prototyping</span>
                    <span className="text-primary font-semibold">92%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-red-600 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 rounded-xl text-center border-l-4 border-primary">
                <p className="text-gray-400 text-sm mb-1">Location</p>
                <p className="text-white font-semibold font-montserrat">Trichy, TN</p>
              </div>
              <div className="glass-card p-6 rounded-xl text-center border-l-4 border-primary">
                <p className="text-gray-400 text-sm mb-1">Experience</p>
                <p className="text-white font-semibold font-montserrat">2+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
