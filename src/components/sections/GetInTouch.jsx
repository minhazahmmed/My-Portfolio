import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FiGithub,
  FiLinkedin,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { FaFacebookF, FaYoutube } from "react-icons/fa";

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
  {
    label: "Facebook",
    url: "https://facebook.com/minhaz.ahmmed.98",
    icon: FaFacebookF,
  },
  {
    label: "YouTube",
    url: "https://youtube.com/@foundationofscience9952",
    icon: FaYoutube,
  },
];
const STATUS = {
  idle: "idle",
  loading: "loading",
  success: "success",
  error: "error",
};

export default function GetInTouch() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(STATUS.idle);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus(STATUS.loading);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus(STATUS.success);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(STATUS.idle), 4000);
    } catch {
      setStatus(STATUS.error);
      setTimeout(() => setStatus(STATUS.idle), 4000);
    }
  };

  return (
    <section id="contact" className="relative py-12 md:py-22 scroll-mt-14 md:scroll-mt-6 px-6">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-cyan-500/8 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">
            Let's work together
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Get In Touch
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-linear-to-r from-cyan-400 to-purple-500" />
        </div>

        {/* items-stretch — same height for both columns */}
        <div className="grid md:grid-cols-5 gap-6 items-stretch">
          {/* Left — Social Links */}
          <div className="md:col-span-2 flex flex-col gap-3 h-full">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-white font-semibold text-base mb-1">
                Let's Connect
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Have a project in mind or just want to say hi? Feel free to
                reach out — I'm always open to new opportunities and
                conversations.
              </p>
            </div>

            {/* Social buttons — flex-1 to fill remaining height equally */}
            <div className="flex flex-col gap-3 flex-1">
              {socialLinks.map(({ label, url, icon: Icon }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 px-4 rounded-2xl flex-1
      bg-white/5 border border-white/10 backdrop-blur-sm text-white/50
      hover:bg-white/10 hover:border-white/25 hover:text-white
      transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10
      flex items-center justify-center shrink-0
      transition-all duration-300 group-hover:bg-white/15 group-hover:border-white/20"
                  >
                    <Icon size={18} />
                  </div>
                  <span className="text-sm font-medium">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="md:col-span-3 h-full">
            <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm h-full flex flex-col">
              <h3 className="text-white font-semibold text-lg mb-6">
                Send Me a Message
              </h3>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 flex-1"
              >
                <input
                  type="text"
                  name="from_name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all duration-200"
                />

                <input
                  type="email"
                  name="from_email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all duration-200"
                />

                {/* textarea flex-1 to fill remaining space */}
                <textarea
                  name="message"
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  placeholder="Your Message"
                  required
                  className="w-full flex-1 min-h-32 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all duration-200 resize-none"
                />

                {status === STATUS.success && (
                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/25 text-green-400 text-sm">
                    <FiCheckCircle size={15} />
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {status === STATUS.error && (
                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/25 text-red-400 text-sm">
                    <FiAlertCircle size={15} />
                    Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === STATUS.loading}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.01] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === STATUS.loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
