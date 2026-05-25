import { FiGithub, FiLinkedin } from "react-icons/fi";


const footerLinks = [
  { label: "GitHub", url: "https://github.com/minhazahmmed", icon: FiGithub },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/minhaz-ahmmed",
    icon: FiLinkedin,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/8 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left — Logo */}
        <p className="text-white/40 text-sm font-medium">&lt;Minhaz /&gt;</p>

        {/* Center — Copyright */}
        <p className="text-white/30 text-xs text-center">
          © {year} Minhaz Ahmmed. All rights reserved.
        </p>

        {/* Right — Social icons */}
        <div className="flex items-center gap-3">
          {footerLinks.map(({ label, url, icon: Icon }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-200"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
