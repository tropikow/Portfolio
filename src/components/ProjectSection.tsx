// components/ProjectsSection.tsx

import ProjectCard from "./ProjectCard";
import Section from "./Section";

const projects = [
  {
    title: "Station B2B",
    image: "/projects/app.png",
    description: "Aplicación móvil para empresas aliadas de GetLavado, permitiendo la gestión de logistica por parte de los aliados.",
    challenges: [
      "Implementar un sistema de notificaciones en tiempo real para actualizaciones de estado",
      "Optimizar el rendimiento de la aplicación para funcionar en dispositivos de gama baja",
      "Manejar la sincronización offline-online de datos"
    ],
    currentStatus: "En producción, liderando la logistica de recojo y entrega por parte de los aliados de la red de GetLavado.",
    technologies: ["React Native", "Firebase", "Redux", "Node.js"]
  },
  {
    title: "Backoffice B2B",
    image: "/projects/dashboard.png",
    description: "Panel de administración para gestionar operaciones B2B, incluyendo gestión de usuarios, pedidos y reportes.",
    challenges: [
      "Crear un sistema de roles y permisos flexible",
      "Implementar reportes personalizados y exportables",
      "Mantener la consistencia de datos en tiempo real"
    ],
    currentStatus: "En uso activo, procesando más de 700 pedidos al mes.",
    technologies: ["Vue.js", "Firebase", "Document Ai Vision", "Tailwind CSS"]
  },
  {
    title: "OCR Facturas",
    image: "/projects/ocr.svg",
    description: "Sistema de procesamiento automático de facturas utilizando OCR y machine learning para extraer información relevante.",
    challenges: [
      "Manejar diferentes formatos y layouts de facturas",
      "Alcanzar alta precisión en la extracción de datos",
      "Procesar grandes volúmenes de documentos eficientemente"
    ],
    currentStatus: "En producción, procesando más de 500 facturas mensuales con 95% de precisión.",
    technologies: ["Document AI Vision", "Nuxt js", "Node js", "Python"]
  },
  {
    title: "Bot WhatsApp",
    image: "/projects/bot.webp",
    description: "Bot de WhatsApp para automatizar la atención al cliente y gestión de pedidos.",
    challenges: [
      "Manejar múltiples conversaciones simultáneas",
      "Implementar un sistema de respuestas contextuales",
      "Integrar con sistemas de gestión existentes"
    ],
    currentStatus: "Activo, atendiendo más de 200 conversaciones diarias.",
    technologies: ["Node.js", "WhatsApp Business API", "N8N", "Express"]
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
