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
  {
    company: "Capacitador de personal / Interfaz Móvil POS",
    role: "Capacitator",
    period: "jun/2021 - oct/2021",
    description: "Capacitador de personal y cliente en el uso de una WebApp para una de las mas grandes StartUp de Colombia.",
    tech: ["Comunicación", "Capacitación"],
  },
];

export default function ExperienceSection() {
  return (
    <Section id="experiencia">
      <div className="flex flex-col py-12 px-4 sm:gap-8 sm:py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Experiencia</h2>
        </div>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </Section>
  );
}
