import {
  SiVuedotjs,
  SiNuxtdotjs,
  SiReact,
  SiFirebase,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  // SiVisualstudio,
  SiMysql,
  SiPostgresql,
  SiAstro,
  SiZapier,
  SiGoogle,
  SiOpenai,
  SiTrello,
  SiNotion,
  SiGnometerminal,
  SiJavascript,
} from "react-icons/si";
import { FaTerminal } from "react-icons/fa";

const skills = [
  { name: "Vue / Nuxt.js", icon: <SiNuxtdotjs />, level: 95 },
  { name: "React / React Native", icon: <SiReact />, level: 80 },
  { name: "Astro", icon: <SiAstro />, level: 20 },
  { name: "TypeScript", icon: <SiTypescript />, level: 75 },
  {
    name: "Firebase (Auth, Functions, Firestore)",
    icon: <SiFirebase />,
    level: 80,
  },
  { name: "Mysql", icon: <SiMysql />, level: 50 },
  { name: "Postgresql", icon: <SiPostgresql />, level: 30 },
  { name: "Node.js", icon: <SiNodedotjs />, level: 70 },
  { name: "Python", icon: <SiPython />, level: 30 },
  { name: "GitHub", icon: <SiGithub />, level: 90 },
  { name: "RESTful APIs", icon: <SiJavascript />, level: 85 },
  { name: "HTML", icon: <SiHtml5 />, level: 95 },
  { name: "CSS", icon: <SiCss3 />, level: 90 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 95 },
  { name: "Responsive Design", icon: <SiHtml5 />, level: 95 },
  { name: "Command Line", icon: <FaTerminal />, level: 80 },
  { name: "VSCode / Cursor", icon: <SiGnometerminal />, level: 85 },
  { name: "Zapier / n8n", icon: <SiZapier />, level: 80 },
  { name: "Google Apps Scripts", icon: <SiGoogle />, level: 75 },
  { name: "IA (OpenAI, Hugging Face)", icon: <SiOpenai />, level: 60 },
  { name: "UX / UI", icon: <SiHtml5 />, level: 80 },
  { name: "Trello", icon: <SiTrello />, level: 70 },
  { name: "Notion", icon: <SiNotion />, level: 70 },
];

export default function TechStack() {
  return (
    <section id="stack" className="snap-start py-20 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        🛠️ Mi Stack Tecnológico
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md flex items-center space-x-4"
          >
            <div className="text-4xl text-indigo-600 dark:text-indigo-400">
              {skill.icon}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-700 dark:text-white mb-1">
                {skill.name}
              </p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="h-2 rounded-full bg-indigo-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
