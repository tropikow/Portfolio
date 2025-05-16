// components/ProjectsSection.tsx

import ProjectCard from "./ProjectCard";
import Section from "./Section";

const projects = [
  {
    title: "GetLavado App",    
    image: "/projects/app.png",
  },
  {
    title: "Dashboard B2B",
    image: "/projects/dashboard.png",
  },
  {
    title: "OCR Facturas",
    image: "/projects/ocr.png",
  },
  {
    title: "Bot WhatsApp",
    image: "/projects/bot.png",
  },
];

export default function ProjectsSection() {
  return (
    <Section id="proyectos">
      <div className="px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </Section>
  );
}
