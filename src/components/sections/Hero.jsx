import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiArrowDown } from "react-icons/fi";
import { BsBriefcaseFill } from "react-icons/bs";
import profileImage from "../../assets/images/profile.webp";

const roles = [
  "MERN Stack Developer",
  "React Enthusiast",
  "Full Stack Developer",
  "Problem Solver",
];

const socialLinks = [
  {
    label: "GitHub",
    url: "https://github.com/minhazahmmed",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/minhaz-ahmmed",
    icon: FiLinkedin,
  },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

   if (typing) {
  if (displayed.length < current.length) {
    timeout = setTimeout(() => {
      setDisplayed(current.slice(0, displayed.length + 1));
    }, 80);
  } else {
    timeout = setTimeout(() => setTyping(false), 2000);
  }
} else {
  if (displayed.length > 0) {
    timeout = setTimeout(() => {
      setDisplayed(displayed.slice(0, -1));
    }, 40);
  } else {
    timeout = setTimeout(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setTyping(true);
    }, 100);
  }
}
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Side */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
              Minhaz Ahmmed
            </span>
          </h1>

          {/* Typewriter */}
          <div className="h-10 mb-6">
            <p className="text-xl md:text-2xl text-white/70 font-light">
              {displayed}
              <span className="animate-pulse text-cyan-400">|</span>
            </p>
          </div>

          <p className="text-white/50 text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
           I'm a passionate full-stack developer who loves building clean, efficient code and crafting beautiful, highly functional user interfaces. Let's create something amazing together!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={() => scrollTo("projects")}
              className="px-7 py-3 bg-linear-to-r from-cyan-600 to-blue-700 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-200"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="px-7 py-3 border border-white/20 text-white/80 rounded-full backdrop-blur-sm hover:bg-white/10 hover:text-white hover:border-white/40 transition-all duration-200"
            >
              About Me
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-10 justify-center md:justify-start">
            {socialLinks.map(({ label, url, icon: Icon }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-white/50 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-200 text-sm font-medium"
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Profile Image Side */}
        <div className="shrink-0">
          <div className="relative w-56 h-56 md:w-72 md:h-72">
            {/* Glowing ring */}
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-cyan-400 to-purple-600 p-0.5 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-gray-950" />
            </div>
            {/* Profile image */}
            <img
              src={profileImage}
              alt="Minhaz Ahmmed"
              className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover"
            />

            {/* Badge */}
            <div className="absolute -bottom-2 -right-2 flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-3 py-2 shadow-lg">
              <BsBriefcaseFill size={11} className="text-green-400" />
              <p className="text-white text-xs font-semibold">Open to work</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-0 md:bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
      >
        <p className="text-xs tracking-widest uppercase">Scroll</p>
        <FiArrowDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}