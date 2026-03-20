"use client";

import { useEffect } from "react";
import CampusVideoHero from "@/components/campus/CampusVideoHero";
import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout";
import { Logos3 } from "@/components/campus/Logos3";
import { MapPin } from "lucide-react";
import Link from "next/link";

const campusFrames = [
  { id: 1, image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=1200", label: "Teaching Hospital", defaultPos: { x: 0, y: 0, w: 4, h: 4 }, mediaSize: 1, isHovered: false },
  { id: 2, image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200", label: "ICU Training", defaultPos: { x: 4, y: 0, w: 4, h: 4 }, mediaSize: 1, isHovered: false },
  { id: 3, image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200", label: "Clinical Labs", defaultPos: { x: 8, y: 0, w: 4, h: 4 }, mediaSize: 1, isHovered: false },
  { id: 4, image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1200", label: "Digital Library", defaultPos: { x: 0, y: 4, w: 4, h: 4 }, mediaSize: 1, isHovered: false },
  { id: 5, image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200", label: "Main Campus", defaultPos: { x: 4, y: 4, w: 4, h: 4 }, mediaSize: 1, isHovered: false },
  { id: 6, image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200", label: "Seminar Halls", defaultPos: { x: 8, y: 4, w: 4, h: 4 }, mediaSize: 1, isHovered: false },
  { id: 7, image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200", label: "Sports & Fitness", defaultPos: { x: 0, y: 8, w: 4, h: 4 }, mediaSize: 1, isHovered: false },
  { id: 8, image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=1200", label: "Student Hostel", defaultPos: { x: 4, y: 8, w: 4, h: 4 }, mediaSize: 1, isHovered: false },
  { id: 9, image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200", label: "EV Parking", defaultPos: { x: 8, y: 8, w: 4, h: 4 }, mediaSize: 1, isHovered: false },
];

export default function CampusPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <CampusVideoHero />
      <div className="bg-bg-light pt-8">
        {/* Full-bleed bento gallery */}
        <div className="-mx-4 md:-mx-16 -mt-10" style={{ height: "90vh" }}>
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
