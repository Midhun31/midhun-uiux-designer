import { useState } from "react";
import { X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// 3D Projects
import city3d from "@/assets/3d-city.png";
import tropicalScene from "@/assets/3d-tropical-scene.jpg";
import drone3d from "@/assets/3d-drone.jpg";
import blenderVideo1 from "@/assets/blender-video-1.mp4";
import blenderVideo2 from "@/assets/blender-video-2.mp4";

// UI/UX Projects
import appleFlow from "@/assets/ui-apple-flow.png";
import airpods from "@/assets/ui-airpods.png";
import fruitJuiceDesktop from "@/assets/ui-fruit-juice-desktop.png";
import fruitJuice from "@/assets/ui-fruit-juice.png";

// Graphic Design
import workshopPoster from "@/assets/poster-workshop.jpg";
import perfumePoster from "@/assets/poster-perfume.jpg";
import cricketPoster from "@/assets/poster-cricket.jpg";
import travelsPoster from "@/assets/poster-travels.png";
import waterManagementPoster from "@/assets/poster-water-management.png";
import pizzaPoster from "@/assets/poster-pizza.jpg";

const projectCategories = {
  "3d": [
    {
      title: "3D Animation Showreel",
      description: "Professional 3D animation showcase demonstrating advanced Blender techniques",
      media: blenderVideo1,
      type: "video",
      tags: ["Blender", "Animation", "3D Motion"],
    },
    {
      title: "Dynamic 3D Scene",
      description: "Cinematic 3D visualization with complex animations and effects",
      media: blenderVideo2,
      type: "video",
      tags: ["Blender", "Cinematics", "VFX"],
    },
    {
      title: "Urban Environment Scene",
      description: "Detailed 3D cityscape with realistic lighting and atmospheric effects",
      media: city3d,
      type: "image",
      tags: ["Blender", "3D Modeling", "Environment Design"],
    },
    {
      title: "Tropical Environment",
      description: "Photorealistic natural scene with detailed vegetation and atmospheric lighting",
      media: tropicalScene,
      type: "image",
      tags: ["Blender", "Environment", "Nature Scene"],
    },
    {
      title: "Drone Warehouse Visualization",
      description: "Complex scene showcasing industrial automation and warehouse systems",
      media: drone3d,
      type: "image",
      tags: ["Blender", "Industrial Design", "Rendering"],
    },
  ],
  "uiux": [
    {
      title: "Apple Product Flow",
      description: "User journey mapping and product ecosystem visualization",
      media: appleFlow,
      type: "image",
      tags: ["Figma", "User Flow", "Product Design"],
    },
    {
      title: "AirPods Max Landing Page",
      description: "Premium product showcase with minimalist design approach",
      media: airpods,
      type: "image",
      tags: ["Figma", "Web Design", "UI Design"],
    },
    {
      title: "Fruit Juice Desktop Concepts",
      description: "Multi-screen desktop application design system",
      media: fruitJuiceDesktop,
      type: "image",
      tags: ["Figma", "Desktop UI", "Design System"],
    },
    {
      title: "Fruit Juice Website",
      description: "Vibrant brand-focused web design with custom illustrations",
      media: fruitJuice,
      type: "image",
      tags: ["Figma", "Web Design", "Branding"],
    },
  ],
  "graphic": [
    {
      title: "Workshop Innovation Poster",
      description: "Event poster design for technology and innovation workshop",
      media: workshopPoster,
      type: "image",
      tags: ["Affinity", "Poster Design", "Typography"],
    },
    {
      title: "Arumide Perfume Ad",
      description: "Luxury product advertisement with elegant visual composition",
      media: perfumePoster,
      type: "image",
      tags: ["Canva", "Product Ad", "Luxury Branding"],
    },
    {
      title: "Cricket Typography Poster",
      description: "Bold typographic design celebrating cricket legends",
      media: cricketPoster,
      type: "image",
      tags: ["Adobe", "Typography", "Sports Design"],
    },
    {
      title: "Sri Vinayaga Travels",
      description: "Professional travel company poster with modern branding and contact information",
      media: travelsPoster,
      type: "image",
      tags: ["Canva", "Business Poster", "Branding"],
    },
    {
      title: "Waste Water Management System",
      description: "Educational infographic poster showcasing IoT-based water recycling methodology",
      media: waterManagementPoster,
      type: "image",
      tags: ["Canva", "Infographic", "Educational Design"],
    },
    {
      title: "Delicious Pizza Restaurant",
      description: "Hand-crafted food branding poster with appetizing visuals and bilingual typography",
      media: pizzaPoster,
      type: "image",
      tags: ["Canva", "Food Design", "Restaurant Branding"],
    },
  ],
};

const Projects = () => {
  const [selectedMedia, setSelectedMedia] = useState<{ src: string; type: string } | null>(null);

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my work across 3D modeling, UI/UX design, and graphic design
          </p>
        </div>

        <Tabs defaultValue="3d" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-card/50 backdrop-blur-sm border border-primary/20">
            <TabsTrigger value="3d" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              3D Projects
            </TabsTrigger>
            <TabsTrigger value="uiux" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              UI/UX
            </TabsTrigger>
            <TabsTrigger value="graphic" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Graphic Design
            </TabsTrigger>
          </TabsList>

          <TabsContent value="3d" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectCategories["3d"].map((project, index) => (
                <Card 
                  key={project.title}
                  className="group overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:glow-red bg-card/80 backdrop-blur-sm cursor-pointer animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedMedia({ src: project.media, type: project.type })}
                >
                  <div className="relative overflow-hidden aspect-video">
                    {project.type === "video" ? (
                      <video 
                        src={project.media} 
                        className="w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause();
                          e.currentTarget.currentTime = 0;
                        }}
                      />
                    ) : (
                      <img 
                        src={project.media} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">Click to {project.type === "video" ? "Play" : "View"}</span>
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
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="uiux" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8">
              {projectCategories.uiux.map((project, index) => (
                <Card 
                  key={project.title}
                  className="group overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:glow-red bg-card/80 backdrop-blur-sm cursor-pointer animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedMedia({ src: project.media, type: project.type })}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={project.media} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">Click to View</span>
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
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="graphic" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectCategories.graphic.map((project, index) => (
                <Card 
                  key={project.title}
                  className="group overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:glow-red bg-card/80 backdrop-blur-sm cursor-pointer animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedMedia({ src: project.media, type: project.type })}
                >
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img 
                      src={project.media} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">Click to View</span>
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
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Media Modal */}
      <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-primary/20">
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          {selectedMedia && (
            <div className="flex items-center justify-center w-full h-full p-4">
              {selectedMedia.type === "video" ? (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  loop
                  className="max-w-full max-h-[90vh] object-contain animate-scale-in"
                />
              ) : (
                <img 
                  src={selectedMedia.src} 
                  alt="Project preview"
                  className="max-w-full max-h-[90vh] object-contain animate-scale-in"
                />
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
