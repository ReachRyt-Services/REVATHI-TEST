"use client";

import { useEffect } from "react";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { Clock, Stethoscope, Microscope, BookOpen, HeartPulse, Moon } from "lucide-react";

const wardSchedule = [
  {
    time: "6:00 AM",
    icon: Moon,
    event: "Pre-Ward Prep",
    detail: "Students review overnight notes, vital charts, and prepare for morning rounds with senior residents.",
    tag: "Ward",
  },
  {
    time: "7:30 AM",
    icon: Stethoscope,
    event: "Ward Rounds",
    detail: "Accompany consultants on live patient rounds across General Medicine, Surgery, and Orthopaedics wards.",
    tag: "Clinical",
  },
  {
    time: "10:00 AM",
    icon: Microscope,
    event: "Lab Diagnostics",
    detail: "Hands-on specimen processing, ECG interpretation, and diagnostic imaging review in the path & radiology labs.",
    tag: "Diagnostics",
  },
  {
    time: "1:00 PM",
    icon: BookOpen,
    event: "Case Presentations",
    detail: "Students present assigned cases to faculty in the seminar hall — building confidence and clinical reasoning.",
    tag: "Academic",
  },
  {
    time: "3:30 PM",
    icon: HeartPulse,
    event: "Emergency Shadowing",
    detail: "Rotation through the 24/7 Emergency & ICU unit observing triage protocols and life-support procedures.",
    tag: "Emergency",
  },
  {
    time: "5:30 PM",
    icon: Clock,
    event: "Debrief & Self Study",
    detail: "Structured debrief session with mentors, followed by access to the digital library and simulation lab.",
    tag: "Review",
  },
];

export default function DayInTheWard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=1280"
      bgImageSrc="https://images.unsplash.com/photo-1538108149393-cebb92144607?auto=format&fit=crop&q=80&w=1920"
      title="A Day In The Ward"
      date="Revathi Medical Center"
      scrollToExpand="↓  Scroll to step inside the ward"
      textBlend
    >
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#003366]/10 border border-[#003366]/20 text-[#003366] font-black text-[10px] uppercase tracking-widest mb-6 rounded-full">
            Zero-Gap Clinical Training
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#003366] font-display tracking-tight mb-6">
            From Lecture Hall to<br />
            <span className="text-[#008080]">Live Patient Bedside</span>
          </h2>
          <p className="text-lg text-[#333]/70 font-medium max-w-2xl mx-auto leading-relaxed">
            At Revathi Institutions, every single day begins and ends in the attached 300-bed hospital.
            Here's what a typical student's clinical day looks like — from dawn to dusk.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#003366]/10 -translate-x-px hidden md:block" />

          <div className="space-y-8">
            {wardSchedule.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`relative flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-6 md:gap-12`}>

                  {/* Content card */}
                  <div className={`md:w-5/12 ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white rounded-2xl border border-[#003366]/10 p-6 shadow-sm hover:shadow-lg hover:border-[#008080]/30 transition-all duration-300 group text-left">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-xl bg-[#003366]/5 flex items-center justify-center group-hover:bg-[#008080]/10 transition-colors shrink-0">
                          <item.icon size={18} className="text-[#003366] group-hover:text-[#008080] transition-colors" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#F2A007] bg-[#F2A007]/10 px-3 py-1 rounded-full">
                          {item.tag}
                        </span>
                      </div>
                      <h3 className="text-lg font-black text-[#003366] mb-2 font-display">{item.event}</h3>
                      <p className="text-sm text-[#333]/70 font-medium leading-relaxed">{item.detail}</p>
                    </div>
                  </div>

                  {/* Centre time bubble */}
                  <div className="hidden md:flex w-2/12 justify-center relative z-10">
                    <div className="bg-[#003366] text-white text-xs font-black px-4 py-2 rounded-full shadow-lg tracking-wide whitespace-nowrap">
                      {item.time}
                    </div>
                  </div>

                  {/* Mobile time tag */}
                  <div className="md:hidden flex items-center gap-2 self-start">
                    <div className="bg-[#003366] text-white text-xs font-black px-3 py-1.5 rounded-full">{item.time}</div>
                  </div>

                  {/* Spacer on opposite side */}
                  <div className="hidden md:block md:w-5/12" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "300+", label: "Beds in Teaching Hospital" },
            { val: "15+", label: "Medical Specialties" },
            { val: "24/7", label: "ICU & Emergency Access" },
            { val: "Day 1", label: "Clinical Exposure Starts" },
          ].map((s, i) => (
            <div key={i} className="bg-[#003366] text-white rounded-2xl p-6 text-center">
              <div className="text-3xl font-black text-[#F2A007] mb-1 font-display">{s.val}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/70">{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </ScrollExpandMedia>
  );
}
