import { X } from "lucide-react";

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    image: string;
    description?: string;
    challenges?: string[];
    currentStatus?: string;
    technologies?: string[];
  };
};

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            {project.title}
          </h2>

          {project.description && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                Descripción
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
            </div>
          )}

          {project.challenges && project.challenges.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                Retos
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                Tecnologías
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.currentStatus && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                Estado Actual
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {project.currentStatus}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 