import { useState, useEffect } from "react";
import { FiX, FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from "react-icons/fi";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);
const INITIAL_SHOW = 3;

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedProject]);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute bottom-1/3 left-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">
            What I have built
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My Projects
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-linear-to-r from-cyan-400 to-purple-500" />
        </div>

        {/* Projects Grid */}
  {/* Projects Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {projects.map((project, index) => {
    const isHidden = index >= INITIAL_SHOW && !showAll;

    return (
      <div
        key={project.id}
        className={`
          h-full transition-all duration-500 ease-out
          ${isHidden
            ? "opacity-0 scale-95 pointer-events-none absolute invisible h-0 w-0 p-0 overflow-hidden"
            : "opacity-100 scale-100 relative visible"}
        `}
        style={{
          transitionDelay:
            showAll && index >= INITIAL_SHOW
              ? `${(index - INITIAL_SHOW) * 80}ms`
              : "0ms",
        }}
      >
        <ProjectCard
          project={project}
          index={index}
          onDetails={setSelectedProject}
        />
      </div>
    );
  })}
</div>

{/* Show More / Show Less */}
{projects.length > INITIAL_SHOW && (
  <div className="flex justify-center mt-10">
    <button
      onClick={() => setShowAll((prev) => !prev)}
      className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-200 text-sm font-medium"
    >
      {showAll ? (
        <><FiChevronUp size={15} /> Show Less</>
      ) : (
        <><FiChevronDown size={15} /> Show More Projects</>
      )}
    </button>
  </div>
)}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4 bg-black/70 backdrop-blur-sm overflow-x-hidden"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-[94%] sm:w-full max-w-2xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto rounded-2xl bg-gray-900 border border-white/15 shadow-2xl shadow-black/50 mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
           {/* Modal Image */}
<div className="relative h-52 overflow-hidden rounded-t-2xl">
  <img
    src={selectedProject.image}
    alt={selectedProject.title}
    className="w-full h-auto block animate-image-scroll"
  />
  <div className="absolute inset-0 bg-linear-to-t from-gray-900/90 to-transparent pointer-events-none" />

              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all"
              >
                <FiX size={16} />
              </button>

              <div className="absolute bottom-4 left-5">
                <span className="px-2.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-medium">
                  {selectedProject.subtitle}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 flex flex-col gap-5">
              <h3 className="text-white text-2xl font-bold">
                {selectedProject.title}
              </h3>

              {/* Problem Solved */}
              <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/15">
                <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-2">
                  Problem Solved
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  {selectedProject.problemSolved}
                </p>
              </div>

              {/* Description */}
              <div>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-2">
                  About the Project
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/70 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-1">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/15 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200 text-sm font-medium"
                >
                  <FiGithub size={15} />
                  View on GitHub
                </a>
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-200 text-sm font-semibold"
                >
                  <FiExternalLink size={15} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}