// components/ProjectCard.tsx

"use client";

import Image from "next/image";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

type ProjectCardProps = {
  title: string;
  image: string;
  description?: string;
  challenges?: string[];
  currentStatus?: string;
  technologies?: string[];
};

export default function ProjectCard({
  title,
  image,
  description,
  challenges,
  currentStatus,
  technologies,
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="relative group rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
        style={{ width: 320, height: 200 }}
      >
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
          <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold z-10">
            {title}
          </h3>
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={{
          title,
          image,
          description,
          challenges,
          currentStatus,
          technologies,
        }}
      />
    </>
  );
}
