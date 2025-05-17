// src/components/About.tsx
import React from 'react';

const About = () => {
  return (
    <section id="sobremi" className="snap-start py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre mí</h2>
      <p className="text-gray-800 dark:text-gray-400 text-lg leading-relaxed">
        Soy un desarrollador frontend con enfoque en la creación de experiencias web modernas, rápidas y elegantes.
        Tengo más de 2 años de experiencia trabajando con tecnologías como <strong className="text-gray-500 dark:text-white">Nuxt.js, React, TypeScript</strong> y soluciones backend como <strong className="text-gray-500 dark:text-white">Node.js, Firebase y PostgreSQL</strong>.
      </p>
      <p className="mt-6 text-gray-800 dark:text-gray-400 text-lg leading-relaxed">
        He contribuido en proyectos de automatización, SaaS, bots de WhatsApp, dashboards internos y soluciones B2B para empresas en LATAM. Me gusta resolver problemas complejos con interfaces simples.
      </p>
      <p className="mt-6 text-gray-800 dark:text-gray-400 text-lg leading-relaxed">
        Actualmente lidero el desarrollo técnico en operaciones B2B de GetLavado en Perú, ayudando a escalar y automatizar procesos claves del negocio.
      </p>
    </section>
  );
};

export default About;
