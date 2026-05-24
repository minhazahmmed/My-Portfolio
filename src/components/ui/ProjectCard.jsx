import { FiGithub, FiExternalLink, FiInfo } from "react-icons/fi";
import useScrollAnimation from "../../hooks/useScrollAnimation";

export default function ProjectCard({ project, index, onDetails }) {
  const { ref, visible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className="h-full transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) rotateX(0deg)" : "translateY(60px) rotateX(12deg)",
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <div className="group relative flex flex-col rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden hover:border-cyan-500/30 hover:bg-white/8 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 h-full">

       {/* Cover Image */}
<div className="relative overflow-hidden h-48">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-auto block transition-transform duration-3000 ease-in-out group-hover:-translate-y-[calc(100%-12rem)]"
  />
  <div className="absolute inset-0 bg-linear-to-t from-gray-950/80 to-transparent pointer-events-none" />

  {/* Subtitle badge */}
  <div className="absolute bottom-3 left-3">
    <span className="px-2.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-medium backdrop-blur-sm">
      {project.subtitle}
    </span>
  </div>
</div>



        {/* Card Body */}
        <div className="flex flex-col flex-1 p-5 gap-4">
          {/* Title + Description */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/60 text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-2 mt-auto pt-1">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/15 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-200 text-xs font-medium"
            >
              <FiGithub size={13} />
              GitHub
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/15 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-200 text-xs font-medium"
            >
              <FiExternalLink size={13} />
              Live Demo
            </a>
            <button
              onClick={() => onDetails(project)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/25 hover:border-cyan-500/50 transition-all duration-200 text-xs font-medium ml-auto"
            >
              <FiInfo size={13} />
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}