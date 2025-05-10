import ExperienceCard from "./ExperienceCard";
import Section from "./Section";

const experiences = [
  {
    company: "GetLavado / Laundryheap Perú",
    role: "Desarrollador B2B Principal",
    period: "2023 - Actualidad",
    description: "Automatización y mantenimiento de operaciones para empresas aliadas. Integraciones con OCR, bots de WhatsApp, y manejo de servicios en tiempo real.",
    tech: ["React Native", "Firebase", "MySQL", "Node.js"],
  },
  {
    company: "JAPI",
    role: "Desarrollador Fullstack",
    period: "2023",
    description: "Desarrollo de soluciones logísticas para clientes B2B, integraciones con Slack, automatizaciones con Zapier, y analítica avanzada.",
    tech: ["Nuxt", "Zapier", "Google Apps Script", "PostgreSQL"],
  },
  {
    company: "Proyectos varios",
    role: "Freelancer",
    period: "2022 - 2023",
    description: "Portafolios, backoffices, SaaS, webapps, bots de WhatsApp y refactorización de legacy code.",
    tech: ["Astro", "React", "Firebase", "Python"],
  },
];

export default function ExperienceSection() {
  return (
    <Section id="experiencia">
      <div className="flex flex-col gap-10 py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Experiencia</h2>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </Section>
  );
}
