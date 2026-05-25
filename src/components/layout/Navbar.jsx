import { useState, useEffect } from "react";
import { FiDownload } from "react-icons/fi";
import resumePDF from "../../assets/resume/resume.pdf";

const navLinks = [
  { label: "Home",         href: "hero" },
  { label: "Skills",       href: "skills" },
  { label: "Projects",     href: "projects" },
  { label: "Education",    href: "education" },
  { label: "Certificates", href: "certificates" },
  { label: "Contact",      href: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => document.getElementById(l.href));
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        if (!section) return;
        if (
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="text-white font-bold text-xl tracking-wide hover:text-cyan-400 transition-colors"
        >
          &lt;Minhaz /&gt;
        </button>

        {/* Desktop Links + Resume Button */}
        <div className="hidden md:flex items-center gap-1">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    active === link.href
                      ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Resume Button — Navbar end */}
          <a
            href={resumePDF}
            download="Minhaz_Ahmmed_Resume.pdf"
            className="ml-3 flex items-center gap-2 px-5 py-2 rounded-full bg-linear-to-r from-cyan-600 to-blue-700 text-white text-md font-semibold hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-200"
          >
            <FiDownload size={14} />
            Resume
          </a>
        </div>


        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/60 backdrop-blur-xl border-t border-white/10 px-6 py-4">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    active === link.href
                      ? "bg-cyan-500/20 text-cyan-400"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            {/* Mobile Resume Button */}
            <li>
              <a
                href={resumePDF}
                download="Minhaz_Ahmmed_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-cyan-400 hover:bg-cyan-500/10 transition-all"
              >
                <FiDownload size={14} />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}