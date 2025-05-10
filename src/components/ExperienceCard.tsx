"use client";

import { motion } from "framer-motion";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
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
