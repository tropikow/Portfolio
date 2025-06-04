import { X, Calendar, Tag } from "lucide-react";

type ThoughtModalProps = {
  isOpen: boolean;
  onClose: () => void;
  thought: {
    title: string;
    content: string;
    date: string;
    tags: string[];
    category: 'tech' | 'career' | 'learning' | 'opinion';
  };
};

export default function ThoughtModal({ isOpen, onClose, thought }: ThoughtModalProps) {
  if (!isOpen) return null;

  const categoryColors = {
    tech: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    career: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    learning: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    opinion: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  };

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
          <div className="flex items-center gap-2 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[thought.category]}`}>
              {thought.category}
            </span>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
              <Calendar size={16} className="mr-1" />
              {thought.date}
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            {thought.title}
          </h2>

          <div className="prose dark:prose-invert max-w-none mb-6">
            {thought.content}
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
            {thought.tags.map((tag, index) => (
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
      </div>
    </div>
  );
} 