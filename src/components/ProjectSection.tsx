// components/ProjectsSection.tsx

import ProjectCard from "./ProjectCard";
import Section from "./Section";

const projects = [
  {
    title: "Station B2B",    
    image: "/projects/app.png",
  },
  {
    title: "Backoffice B2B",
    image: "/projects/dashboard.png",
  },
  {
    title: "OCR Facturas",
    image: "/projects/ocr.svg",
  },
  {
    title: "Bot WhatsApp",
    image: "/projects/bot.webp",
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
