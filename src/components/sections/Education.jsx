import { useEffect, useState } from "react";
import { PiGraduationCapBold } from "react-icons/pi";
import { BsBookHalf, BsPatchCheckFill } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import useScrollAnimation from "../../hooks/useScrollAnimation";

function EducationCard({ item, index }) {
  const { ref, visible } = useScrollAnimation(0.15);
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`
        flex w-full items-center justify-start md:justify-normal gap-0
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* LEFT CARD — desktop only, even index */}
      <div className={`hidden md:flex flex-1 justify-end pr-10 ${isLeft ? "" : "invisible"}`}>
        {isLeft && <Card item={item} />}
      </div>

      {/* CENTER LINE + DOT */}
      <div className="flex flex-col items-center shrink-0">
        {/* Timeline dot */}
        <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 border-2 border-cyan-500/60 shadow-lg shadow-cyan-500/20 z-10">
          <PiGraduationCapBold size={18} className="text-cyan-400" />
        </div>
        {/* Year badge */}
        <div className="mt-2 px-3 py-0.5 rounded-full bg-white/5 border border-white/10">
          <span className="text-white/60 text-xs font-medium">{item.timeline}</span>
        </div>
        {/* Status icon */}
        <div className="mt-1.5">
          {item.status === "ongoing" ? (
            <MdOutlineWatchLater size={14} className="text-cyan-400" />
          ) : (
            <BsPatchCheckFill size={13} className="text-green-400" />
          )}
        </div>
      </div>

      {/* RIGHT CARD — desktop: odd index | mobile: always */}
      <div className={`flex flex-1 pl-6 md:pl-10 ${!isLeft ? "md:flex" : "md:invisible md:pointer-events-none"}`}>
        {/* Mobile: show all cards on right */}
        <div className="md:hidden w-full">
          <Card item={item} />
        </div>
        {/* Desktop: show only odd-index cards on right */}
        {!isLeft && (
          <div className="hidden md:block">
            <Card item={item} />
          </div>
        )}
      </div>
    </div>
  );
}

function Card({ item }) {
  return (
    <div className="w-full max-w-sm p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan-500/30 hover:bg-white/8 transition-all duration-300">
      {/* Institution */}
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-8 h-8 rounded-lg bg-cyan-500/15 flex items-center justify-center shrink-0">
          <PiGraduationCapBold size={16} className="text-cyan-400" />
        </div>
        <p className="text-cyan-400 text-sm font-semibold leading-tight">
          {item.institution}
        </p>
      </div>

      {/* Degree */}
      <div className="flex items-start gap-2 mb-2">
        <BsBookHalf size={13} className="text-white/40 mt-0.5 shrink-0" />
        <p className="text-white text-sm font-medium leading-snug">
          {item.degree}
        </p>
      </div>

      {/* Result */}
      <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
        <span className="text-cyan-400 text-xs font-semibold">{item.result}</span>
      </div>

      {/* Details */}
      <p className="text-white/40 text-xs leading-relaxed mt-2.5">
        {item.details}
      </p>
    </div>
  );
}

export default function Education() {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    fetch("/data/education.json")
      .then((res) => res.json())
      .then((data) => setEducationData(data));
  }, []);

  return (
    <section id="education" className="relative py-24 px-6">
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-cyan-500/8 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-500/8 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">
            My academic background
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
          <div className="mt-4 mx-auto w-16 h-px bg-linear-to-r from-cyan-400 to-purple-500" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line — desktop only */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-5 bottom-5 w-px bg-linear-to-b from-cyan-500/40 via-purple-500/30 to-transparent" />

          {/* Mobile left line */}
          <div className="md:hidden absolute left-5 top-5 bottom-5 w-px bg-linear-to-b from-cyan-500/40 via-purple-500/30 to-transparent" />

          <div className="flex flex-col gap-12">
            {educationData.map((item, index) => (
              <EducationCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}