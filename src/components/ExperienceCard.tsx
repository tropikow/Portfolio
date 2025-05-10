"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

type ExperienceProps = {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
};

export default function ExperienceCard({
  company,
  role,
  period,
  description,
  tech,
}: ExperienceProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Escala sutil al entrar en foco
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [0.9, 1]), {
    stiffness: 100,
    damping: 20,
  });

  // Desplazamiento vertical apilado
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [100, 0]), {
    stiffness: 100,
    damping: 20,
  });

  return (
    <motion.div
      ref={ref}
      style={{ scale, y }}
      className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/10 max-w-xl mx-auto"
    >
      <h3 className="text-xl font-bold">{company}</h3>
      <p className="text-gray-400">{role} · {period}</p>
      <p className="mt-3 text-sm text-gray-300">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="bg-gray-800 text-white px-2 py-1 text-xs rounded">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
