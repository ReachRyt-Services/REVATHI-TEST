"use client";

import { useEffect } from "react";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PreFooterCTA } from "@/components/layout/PreFooterCTA";
import { AccreditationLogos } from "@/components/shared/AccreditationLogos";

const milestones = [
  {
    year: "1998",
    title: "A Clinic With a Vision",
    body: "Dr. Revathi founded a modest 12-bed clinic in the heart of Tamil Nadu — a dream rooted in the belief that quality healthcare should be accessible to every family.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
  },
  {
    year: "2004",
    title: "The Hospital Takes Shape",
    body: "The clinic expanded into a full 80-bed multi-specialty hospital. The growing need for trained allied health professionals sparked a new idea — what if we trained them ourselves?",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=600",
  },
  {
    year: "2009",
    title: "Revathi Institutions Is Born",
    body: "The allied health college opened its doors with its inaugural B.Sc Nursing batch of 40 students. Day one clinical exposure in the attached hospital was baked in from the very start.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=600",
  },
  {
    year: "2015",
    title: "NABH Accreditation",
    body: "Revathi Medical Center received NABH accreditation, cementing its status as a premier teaching hospital in the region and unlocking deeper government partnerships.",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&q=80&w=600",
  },
  {
    year: "2019",
    title: "The 300-Bed Expansion",
    body: "A major infrastructure investment brought the hospital to 300 functional beds. New departments — Oncology, Neurology, and Neonatology — opened, expanding student training scope dramatically.",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=80&w=600",
  },
  {
    year: "Today",
    title: "3,000+ Graduates, Counting",
    body: "Over 3,000 alumni now serve in hospitals across India, the Middle East, the UK, and beyond. The mission remains unchanged: train healthcare professionals who are ready to lead from day one.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
  },
];

export default function OurStoryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1280"
        bgImageSrc="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=1920"
        title="Our Story"
        date="Since 1998"
        scrollToExpand="↓  Scroll to read our journey"
        textBlend
      >
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#003366]/10 border border-[#003366]/20 text-[#003366] font-black text-[10px] uppercase tracking-widest mb-6 rounded-full">
              Est. 1998 · Tiruppur, Tamil Nadu
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#003366] font-display tracking-tight mb-6 leading-tight">
              Leading Healthcare Education <br />
              <span className="text-[#008080]">in Tamil Nadu since 1998</span>
            </h1>
            <p className="text-xl text-[#333]/70 font-medium max-w-2xl mx-auto leading-relaxed">
              From a modest 12-bed clinic in Tiruppur to a premier institution training over 3,000 healthcare leaders worldwide.
            </p>
          </div>

          {/* Milestone timeline */}
          <div className="space-y-24 mb-24">
            {milestones.map((m, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20 items-center`}
                >
                  {/* Image */}
                  <div className="lg:w-1/2 relative">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                      <img
                        src={m.image}
                        alt={m.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/70 via-transparent to-transparent" />
                      {/* Year pill */}
                      <div className="absolute top-6 left-6">
                        <span className="bg-[#F2A007] text-[#0F3D3D] font-black text-lg px-5 py-2 rounded-full shadow-lg">
                          {m.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2">
                    {/* Connector dash */}
                    <div className="hidden lg:flex items-center gap-4 mb-6">
                      <div className="w-12 h-px bg-[#F2A007]" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#F2A007]">{m.year}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-[#003366] font-display tracking-tight mb-5 leading-snug">
                      {m.title}
                    </h3>
                    <p className="text-lg text-[#333]/70 font-medium leading-relaxed">{m.body}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quote block */}
          <div className="relative bg-[#003366] rounded-3xl overflow-hidden px-10 py-16 md:py-20 mb-20 shadow-2xl">
            <div className="absolute top-0 left-0 text-[200px] font-black text-white/5 leading-none select-none pointer-events-none">"</div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#008080] rounded-full blur-[150px] opacity-20 pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-8 italic">
                "I didn't just want to build a hospital. I wanted to build the people who would one day run hospitals better than mine."
              </p>
              <div className="w-12 h-px bg-[#F2A007] mx-auto mb-4" />
              <p className="text-[#F2A007] font-black text-sm uppercase tracking-widest">Dr. Revathi, Founder</p>
            </div>
          </div>

          {/* Accreditation Logos */}
          <AccreditationLogos className="rounded-3xl shadow-lg mb-20 border border-primary/5" />

          {/* CTA */}
          <div className="text-center">
            <p className="text-[#333]/60 font-medium mb-8 text-lg">Be part of the next chapter.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 bg-[#003366] text-white px-8 py-4 font-black uppercase tracking-widest text-sm rounded-xl hover:bg-[#008080] transition-all duration-300 shadow-lg group"
              >
                Begin Your Journey <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/campus"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#003366]/20 text-[#003366] px-8 py-4 font-black uppercase tracking-widest text-sm rounded-xl hover:border-[#003366] transition-all duration-300"
              >
                Explore Campus
              </Link>
            </div>
          </div>

        </div>
      </ScrollExpandMedia>
      <PreFooterCTA />
    </>
  );
}
