"use client";

import { useEffect } from "react";
import CampusVideoHero from "@/components/campus/CampusVideoHero";
import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout";
import { Logos3 } from "@/components/campus/Logos3";
import { MapPin } from "lucide-react";
import Link from "next/link";

const campusFrames = [
  { id: 1, image: "/gallery/rev.png", label: "Teaching Hospital", defaultPos: { x: 0, y: 0, w: 4, h: 4 }, mediaSize: 1, isHovered: false },
  { id: 2, image: "/gallery/rev 2.jpg", label: "ICU Training", defaultPos: { x: 4, y: 0, w: 4, h: 4 }, mediaSize: 1, isHovered: false },
  { id: 3, image: "/gallery/rev 3.jpg", label: "Clinical Labs", defaultPos: { x: 8, y: 0, w: 4, h: 4 }, mediaSize: 1, isHovered: false },
  { id: 4, image: "/gallery/rev 5.jpg", label: "Digital Library", defaultPos: { x: 0, y: 4, w: 4, h: 4 }, mediaSize: 1, isHovered: false },
  { id: 5, image: "/gallery/rev 6.jpg", label: "Main Campus", defaultPos: { x: 4, y: 4, w: 4, h: 4 }, mediaSize: 1, isHovered: false },
  { id: 6, image: "/gallery/rev7.png", label: "Seminar Halls", defaultPos: { x: 8, y: 4, w: 4, h: 4 }, mediaSize: 1, isHovered: false },
  { id: 7, image: "/gallery/rev 8.png", label: "Sports & Fitness", defaultPos: { x: 0, y: 8, w: 4, h: 4 }, mediaSize: 1, isHovered: false },
  { id: 8, image: "/gallery/rev 9.jpg", label: "Student Hostel", defaultPos: { x: 4, y: 8, w: 4, h: 4 }, mediaSize: 1, isHovered: false },
  { id: 9, image: "/gallery/rev.png", label: "EV Parking", defaultPos: { x: 8, y: 8, w: 4, h: 4 }, mediaSize: 1, isHovered: false },
];

export default function CampusPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <CampusVideoHero />
      <div className="bg-bg-light pt-8">
        {/* Full-bleed bento gallery */}
        <div className="w-full -mt-10" style={{ height: "90vh" }}>
          <DynamicFrameLayout
            frames={campusFrames}
            className="w-full h-full"
            hoverSize={6}
            gapSize={3}
            showFrames={false}
          />
        </div>

        <Logos3 className="my-16" />

        {/* SEO Rich Campus Description */}
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 text-center">
          <h2 className="text-3xl font-black text-[#003366] font-display mb-6">World-Class Healthcare Infrastructure in Tiruppur</h2>
          <div className="space-y-6 text-[#333]/70 leading-relaxed font-medium">
            <p>
              Located in the heart of Tiruppur, Tamil Nadu, the Revathi Institutions campus is a dedicated ecosystem designed exclusively for advanced medical and healthcare education. Centered around a fully functional, NABH-accredited 300-bed multi-specialty teaching hospital, students do not just learn in classrooms—they are immersed in real-world clinical environments from day one.
            </p>
            <p>
              Our infrastructure boasts state-of-the-art simulation laboratories, comprehensive digital libraries with access to global medical journals, and specialized departments including Intensive Care Units (ICU), advanced surgical theaters, and diagnostic imaging centers. This direct integration of academic theory with active hospital practice ensures that our B.Sc Nursing and Paramedical graduates are experienced healthcare professionals ready to serve in the top hospitals of Coimbatore, Erode, Salem, and beyond.
            </p>
            <p>
              Beyond academics, the campus supports holistic student development with modern hostels, expansive sports facilities, and sustainable green spaces, providing a rigorous yet nurturing home for students from all across South India.
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-[#333]/40 font-medium uppercase tracking-widest pb-8">
          Hover over any tile to expand · 9 campus spaces
        </p>

        {/* CTA */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-20">
          <div className="relative bg-[#003366] rounded-3xl overflow-hidden px-10 py-14 text-center shadow-2xl">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#008080] rounded-full blur-[120px] opacity-25 pointer-events-none" />
            <div className="relative z-10">
              <p className="text-[#F2A007] font-black text-xs uppercase tracking-widest mb-4">Experience it live</p>
              <h2 className="text-3xl md:text-4xl font-black text-white font-display tracking-tight mb-4">Come See It for Yourself</h2>
              <p className="text-white/70 font-medium max-w-lg mx-auto mb-8 leading-relaxed">A virtual tour can only show so much. Book a free campus visit and walk through the wards, labs, and library in person.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F2A007] text-[#0F3D3D] px-8 py-4 font-black uppercase tracking-widest text-sm rounded-xl hover:bg-white transition-all duration-300 shadow-lg">
                <MapPin size={16} /> Schedule a Free Campus Tour
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
