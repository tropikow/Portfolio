// components/ProjectCard.tsx

import Image from "next/image";

type ProjectCardProps = {
  title: string;
  image: string;
  link?: string;
};

export default function ProjectCard({ title, image, link }: ProjectCardProps) {
  return (
    <a
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
    >
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
      <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold z-10">
        {title}
      </h3>
    </a>
  );
}
