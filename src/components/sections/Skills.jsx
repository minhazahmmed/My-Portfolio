import {
  SiHtml5,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiDaisyui,
  SiC,
  SiCplusplus,
  SiPython,
  SiPostman,
  SiVercel,
} from "react-icons/si";

import { FaCss3Alt } from "react-icons/fa";

const skills = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "DaisyUI", icon: SiDaisyui, color: "#FF9903" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "C", icon: SiC, color: "#00599C" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      {/* Background blob */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">
            What I work with
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My Skills
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-linear-to-r from-cyan-400 to-purple-500" />
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {skills.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="group flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm cursor-default transition-all duration-300 hover:bg-white/10 hover:border-white/25 hover:scale-105 hover:shadow-lg"
              style={{ "--skill-color": color }}
            >
              <Icon
                size={40}
                style={{ color }}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-white/60 text-xs font-medium text-center group-hover:text-white transition-colors duration-300">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
