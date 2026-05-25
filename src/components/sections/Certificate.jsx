import { useState, useEffect } from "react";
import {
  FiX,
  FiExternalLink,
  FiChevronDown,
  FiChevronUp,
  
} from "react-icons/fi";
import { BsBuilding, BsCalendar3 } from "react-icons/bs";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { PiGraduationCapBold } from "react-icons/pi";
import { BsTrophyFill } from "react-icons/bs";
import { FaRocket, FaBook } from "react-icons/fa";

const INITIAL_SHOW = 3;

function CertificateCard({ item, index, onImageClick }) {
  const { ref, visible } = useScrollAnimation(0.1);

  const titleIconConfig = {
    course: { icon: PiGraduationCapBold, className: "text-cyan-400" },
    achievement: { icon: BsTrophyFill, className: "text-amber-400" },
    participation: { icon: FaRocket, className: "text-purple-400" },
    workshop: { icon: FaBook, className: "text-green-400" },
  };

  const titleIcon = titleIconConfig[item.type] ?? titleIconConfig.course;
  const TitleIcon = titleIcon.icon;

  return (
    <div
      ref={ref}
      className="h-full transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(50px)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="group flex flex-col h-full rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden hover:border-white/20 hover:bg-white/8 transition-all duration-300 hover:shadow-xl hover:shadow-black/20">
        {/* Certificate Image — clean, no overlays */}
        <div
          className="relative overflow-hidden h-52 cursor-pointer"
          onClick={() => onImageClick(item)}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Subtle hover hint */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <FiExternalLink size={13} className="text-white" />
              <span className="text-white text-xs font-medium">
                View Certificate
              </span>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="flex flex-col flex-1 p-5 gap-3">
          {/* Title with emoji */}
          <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-cyan-400 transition-colors duration-200">
            <span className="flex items-start gap-2">
              <TitleIcon
                size={15}
                className={`${titleIcon.className} mt-0.5 shrink-0`}
              />
              {item.title}
            </span>
          </h3>

          {/* Organizer */}
          <div className="flex items-center gap-2">
            <BsBuilding size={13} className="text-white/40 mt-0.5 shrink-0" />
            <div>
              <span className="text-white/40 text-xs">Organizer: </span>
              <span className="text-white/70 text-xs font-medium">
                {item.organization}
              </span>
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center gap-2">
            <BsCalendar3 size={12} className="text-white/40 shrink-0" />
            <div>
              <span className="text-white/40 text-xs">Date: </span>
              <span className="text-white/70 text-xs font-medium">
                {item.issueDate}
              </span>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default function Certificate() {
  const [certificates, setCertificates] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch("/data/certificate.json")
      .then((res) => res.json())
      .then((data) => setCertificates(data));
  }, []);

  // Lock body scroll when modal open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <section id="certificates" className="relative py-9 md:py-22 scroll-mt-14 md:scroll-mt-6 px-6">
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-amber-500/8 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">
            Achievements & credentials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Certificates
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-linear-to-r from-cyan-400 to-purple-500" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((item, index) => {
            const isHidden = index >= INITIAL_SHOW && !showAll;

            return (
              <div
                key={item.id}
                className={`
                  h-full transition-all duration-500 ease-out
                  ${
                    isHidden
                      ? "opacity-0 scale-95 pointer-events-none absolute invisible h-0 w-0 p-0 overflow-hidden"
                      : "opacity-100 scale-100 relative visible"
                  }
                `}
                style={{
                  transitionDelay:
                    showAll && index >= INITIAL_SHOW
                      ? `${(index - INITIAL_SHOW) * 80}ms`
                      : "0ms",
                }}
              >
                <CertificateCard
                  item={item}
                  index={index}
                  onImageClick={setSelectedImage}
                />
              </div>
            );
          })}
        </div>

        {/* Show More / Less */}
        {certificates.length > INITIAL_SHOW && (
          <div className="flex justify-center mt-10">
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
                  <FiChevronDown size={15} /> Show More
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4 bg-black/80 backdrop-blur-sm overflow-x-hidden"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-[92%] sm:w-full max-w-2xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 z-10 w-9 h-9 rounded-full bg-gray-900 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-gray-800 transition-all shadow-lg"
            >
              <FiX size={16} />
            </button>

            {/* Certificate Image */}
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[70vh] object-contain rounded-2xl border border-white/10 shadow-2xl shadow-black/50"
            />

            {/* Image Caption */}
            <div className="mt-3 text-center">
              <p className="text-white/60 text-sm">{selectedImage.title}</p>
              <p className="text-white/30 text-xs mt-0.5">
                {selectedImage.organization} · {selectedImage.issueDate}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
