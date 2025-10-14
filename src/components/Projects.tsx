import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Portfolio & Prototypes",
    description: "Interactive prototypes and design systems crafted in Figma, enhanced with 3D elements from Blender for immersive user experiences.",
    image: project1,
    tags: ["Figma", "Blender", "UI/UX"],
  },
  {
    title: "2D to 3D Visual Converter",
    description: "Innovative tool that transforms flat 2D designs into dynamic 3D models, bridging the gap between traditional and dimensional design.",
    image: project2,
    tags: ["Blender", "Python", "3D Modeling"],
  },
  {
    title: "Product Review Generator",
    description: "AI-powered platform leveraging machine learning to generate insightful product reviews with data visualization and sentiment analysis.",
    image: project3,
    tags: ["TensorFlow", "Python", "Data Viz"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated selection of my recent work, showcasing design thinking and technical execution
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:glow-soft bg-card animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <ExternalLink className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold font-poppins group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
