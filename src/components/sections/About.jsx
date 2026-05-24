import { FiDownload, FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsCalendar3 } from "react-icons/bs";
import resumePDF from "../../assets/resume/resume.pdf";
import aboutImage from "../../assets/images/about_me_image.jpg"

const stats = [
  { value: "3.50", label: "CGPA out of 4.00" },
  { value: "10+", label: "Projects Completed" },
  { value: "5+", label: "Technologies Used" },
  { value: "100%", label: "Dedication" },
];

const info = [
  { icon: HiOutlineLocationMarker, label: "Location", value: "Chittagong, Bangladesh" },
  { icon: BsCalendar3, label: "Available", value: "Open to Opportunities" },
  { icon: FiMail, label: "Email", value: "minhazahmmed231@email.com" },
];

export default function About() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="about" className="relative py-24 px-6">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">
            Get to know me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
          <div className="mt-4 mx-auto w-16 h-px bg-linear-to-r from-cyan-400 to-purple-500" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Image + Info */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-cyan-400/30 to-purple-600/30 blur-xl" />
              <div className="relative w-full h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
                <img
                  src={aboutImage}
                  alt="Minhaz Ahmmed"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full max-w-xs">
              {info.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/15 flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs">{label}</p>
                    <p className="text-white text-sm font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Text */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                I build things for the web
              </h3>
              <div className="flex flex-col gap-4 text-white/60 text-base leading-relaxed">
                <p>
                  I'm <span className="text-white font-medium">Minhaz Ahmmed</span>, a
                  Computer Science & Engineering student at{" "}
                  <span className="text-cyan-400 font-medium">
                    International Islamic University Chittagong (IIUC)
                  </span>
                  , maintaining a CGPA of 3.50/4.00.
                </p>
                <p>
                  I specialize in building full-stack web applications using React,
                  Node.js, and MongoDB. My recent projects include{" "}
                  <span className="text-white/80">Paw Mart</span> — a full-stack pet care
                  platform, and a{" "}
                  <span className="text-white/80">Blood Donation System</span> featuring
                  role-based authentication (Admin, User, Volunteer) with JWT — all fully
                  responsive.
                </p>
                <p>
                  I'm passionate about writing clean, maintainable code and crafting
                  user interfaces that are both visually appealing and highly functional.
                  I'm actively looking for opportunities to grow and contribute.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="px-4 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
                    {value}
                  </p>
                  <p className="text-white/50 text-sm mt-1">{label}</p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={resumePDF}
                download="Minhaz_Ahmmed_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-200 text-sm"
              >
                <FiDownload size={15} />
                Download Resume
              </a>
              <button
                onClick={() => scrollTo("projects")}
                className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white/80 rounded-full hover:bg-white/10 hover:text-white hover:border-white/40 transition-all duration-200 text-sm"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}