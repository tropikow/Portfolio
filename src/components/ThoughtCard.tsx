"use client";

import { useState } from "react";
import { Calendar, Tag } from "lucide-react";
import ThoughtModal from "./ThoughtModal";

type ThoughtCardProps = {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  content: string;
  category: 'tech' | 'career' | 'learning' | 'opinion';
};

export default function ThoughtCard({
  title,
  excerpt,
  date,
  tags,
  content,
  category,
}: ThoughtCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categoryColors = {
    tech: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    career: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    learning: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    opinion: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  };

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[category]}`}>
            {category}
          </span>
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
            <Calendar size={16} className="mr-1" />
            {date}
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {excerpt}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="flex items-center text-sm text-gray-500 dark:text-gray-400"
            >
              <Tag size={14} className="mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      <ThoughtModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        thought={{
          title,
          content,
          date,
          tags,
          category,
        }}
      />
    </>
  );
} 