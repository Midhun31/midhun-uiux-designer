const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I'm a passionate designer dedicated to crafting intuitive and user-centered experiences 
                that blend aesthetics with functionality. With a keen eye for detail and a love for 
                visual storytelling, I transform ideas into compelling digital experiences.
              </p>
              <p className="text-lg">
                My design philosophy centers around understanding users deeply and creating solutions 
                that not only look beautiful but solve real problems. I believe great design is invisible—
                it just works.
              </p>
              <p className="text-lg">
                Working with industry-leading tools like <span className="text-primary font-medium">Figma</span>, 
                <span className="text-primary font-medium"> Blender</span>, and the 
                <span className="text-primary font-medium"> Adobe Creative Suite</span>, I bring concepts 
                to life through thoughtful design and attention to every pixel.
              </p>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-8 rounded-3xl shadow-elegant">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold font-poppins">Design Philosophy</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>User-centered design that prioritizes intuitive experiences</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Balance between aesthetic appeal and functional excellence</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Continuous iteration based on user feedback and data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Attention to micro-interactions and delightful details</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Trichy, Tamil Nadu</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Specialization</p>
                      <p className="font-medium">UI/UX Design</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
