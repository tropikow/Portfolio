"use client";

import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Image from "next/image";
import About from '@/components/About';
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import BackgroundWaves from "@/components/BackgroundWaves";
import WaveBackground from "@/components/WaveBackground";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">      
      <WaveBackground />
      <Navbar />

      <Section id="inicio">
        <div className="text-center">
          <Image
            src="/avatar.png"
            alt="Avatar del desarrollador"
            width={160}
            height={160}
            className="rounded-full mx-auto mb-6 shadow-lg"
          />
          <h1 className="text-4xl md:text-6xl font-bold">
            Hola, soy Jovanny Ruiz
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Desarrollador frontend con experiencia en backend.
          </p>
        </div>
      </Section>

      <Section id="about">
        <About />
      </Section>      

      <ExperienceSection />

      {/* <Section id="project">
        <h2 className="text-3xl">Proyectos</h2>
      </Section> */}
      <ProjectsSection />

      <ContactSection />
    </main>
  );
}
