import Section from "./Section";
// import ThoughtCard from "./ThoughtCard";
// import { getLatestThought } from "@/lib/thoughts";
// import { Thought } from "@/types/thought";

export default async function ThoughtsSection() {
  // const latestThought = await getLatestThought();

  return (
    <Section id="pensamientos">
      <div className="px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">Pensamientos</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Reflexiones y aprendizajes sobre desarrollo de software, tecnología y crecimiento profesional.
        </p>
        
        <div className="max-w-3xl mx-auto">
          {/* <ThoughtCard {...latestThought} /> */}
        </div>
      </div>
    </Section>
  );
} 