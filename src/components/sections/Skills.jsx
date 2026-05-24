import { useState } from "react";
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
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const skills = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" }, // index 9 — desktop row 2 last
  { name: "DaisyUI", icon: SiDaisyui, color: "#FF9903" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "C", icon: SiC, color: "#00599C" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
];

const MOBILE_INITIAL = 9;
const DESKTOP_INITIAL = 10;

export default function Skills() {
  const [showAll, setShowAll] = useState(false);

  const getVisibilityClass = (index) => {
    if (showAll) return "flex";

    // 0–8 → always visible
    if (index < MOBILE_INITIAL) return "flex";

    // index 9 → desktop only (hidden on mobile)
    if (index < DESKTOP_INITIAL) return "hidden md:flex";

    // 10+ → hidden on both
    return "hidden";
  };

  return (
    <section id="skills" className="relative py-24 px-6">
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
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {skills.map(({ name, icon: Icon, color }, index) => {
            const hiddenOnDesktop = index >= DESKTOP_INITIAL;
            const hiddenOnMobile = index >= MOBILE_INITIAL;

            const isHiddenMobile = hiddenOnMobile && !showAll;
            const isHiddenDesktop = hiddenOnDesktop && !showAll;

            return (
              <div
                key={name}
                className={`
          group flex-col items-center justify-center gap-3 p-5 rounded-2xl
          bg-white/5 border border-white/10 backdrop-blur-sm cursor-default
          hover:bg-white/10 hover:border-white/25 hover:scale-105 hover:shadow-lg
          transition-all duration-500 ease-out
          ${
            isHiddenMobile
              ? "max-md:opacity-0 max-md:scale-95 max-md:pointer-events-none max-md:absolute max-md:invisible max-md:h-0 max-md:w-0 max-md:p-0 max-md:overflow-hidden"
              : "max-md:opacity-100 max-md:scale-100 max-md:relative max-md:visible max-md:flex"
          }
          ${
            isHiddenDesktop
              ? "md:opacity-0 md:scale-95 md:pointer-events-none md:absolute md:invisible md:h-0 md:w-0 md:p-0 md:overflow-hidden"
              : "md:opacity-100 md:scale-100 md:relative md:flex"
          }
        `}
                style={{
                  transitionDelay:
                    showAll && (hiddenOnDesktop || hiddenOnMobile)
                      ? `${(index - (hiddenOnDesktop ? DESKTOP_INITIAL : MOBILE_INITIAL)) * 40}ms`
                      : "0ms",
                }}
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
            );
          })}
        </div>

        {/* Show More / Show Less */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-200 text-sm font-medium"
          >
            {showAll ? (
              <>
                <FiChevronUp size={15} /> Show Less
              </>
            ) : (
              <>
                <FiChevronDown size={15} /> Show More Skills
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
