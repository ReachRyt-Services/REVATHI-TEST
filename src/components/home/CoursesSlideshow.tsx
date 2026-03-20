"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/ui/animated-slideshow";
import { coursesData } from "@/lib/data/courses";

// Map each course slug to a relevant Unsplash medical image
const courseImages: Record<string, string> = {
  "bsc-nursing":
    "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80&w=900",
  bpt:
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=900",
  "bsc-ahs":
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=900",
  gnm:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=900",
};

// Fallback for any future courses without a specific image
const FALLBACK =
  "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&q=80&w=900";

export default function CoursesSlideshow() {
  const slides = coursesData.slice(0, 4).map((c) => ({
    slug: c.slug,
    title: c.title,
    shortTitle: c.shortTitle,
    school: c.school,
    units: c.units,
    imageUrl: courseImages[c.slug] ?? FALLBACK,
  }));

  return (
    <section className="bg-[#F5F7FA] py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#003366]/10 border border-[#003366]/20 text-[#003366] font-black text-[10px] uppercase tracking-widest mb-5 rounded-full">
              Academic Programs
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#003366] font-display tracking-tight leading-tight">
              Hover to Explore<br />
              <span className="text-[#008080]">Our Programs</span>
            </h2>
          </div>
          <Link
            href="/courses"
            className="hidden md:flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#003366] hover:text-[#008080] transition-colors group"
          >
            View All Programs
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <HoverSlider className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Left: staggered course titles */}
          <div className="flex flex-col space-y-2 lg:space-y-3 lg:w-1/2">
            {slides.map((slide, i) => (
              <div key={`${slide.slug}-${i}`} className="group flex items-baseline gap-4">
                <span className="text-[10px] font-black text-[#003366]/30 tracking-widest w-6 shrink-0 mt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                   <Link href={`/courses/${slide.slug}`}>
                    <TextStaggerHover
                      index={i}
                      text={slide.shortTitle}
                      className="cursor-pointer text-2xl sm:text-3xl lg:text-5xl font-black uppercase tracking-tight text-[#003366] hover:text-[#008080] transition-colors"
                    />
                  </Link>
                  <p className="text-xs font-semibold text-[#333]/50 mt-1 uppercase tracking-widest">{slide.school}</p>
                </div>
                <Link
                  href={`/courses/${slide.slug}`}
                  className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-[#F2A007]"
                >
                  <ArrowRight size={20} />
                </Link>
              </div>
            ))}

            <div className="pt-6 sm:pt-8">
               <Link href="/courses" className="inline-flex items-center gap-3 bg-[#003366] text-white px-6 py-4 sm:px-8 sm:py-4 rounded-xl font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] hover:bg-[#008080] transition-all shadow-xl group">
                 Explore 18+ Courses <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
               </Link>
            </div>
          </div>

          {/* Right: stacked image reveal panel */}
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <HoverSliderImageWrap className="rounded-3xl overflow-hidden shadow-2xl aspect-video sm:aspect-[4/3]">
              {slides.map((slide, i) => (
                <div key={`${slide.slug}-${i}`}>
                  <HoverSliderImage
                    index={i}
                    imageUrl={slide.imageUrl}
                    src={slide.imageUrl}
                    alt={slide.shortTitle}
                    className="size-full max-h-[480px] object-cover"
                  />
                </div>
              ))}
            </HoverSliderImageWrap>

            {/* Units badge overlay-style label */}
            <div className="mt-4 flex items-center justify-between px-1">
              <p className="text-xs font-black uppercase tracking-widest text-[#003366]/40">
                Integrated with 300-Bed Hospital
              </p>
              <Link
                href="/apply"
                className="text-xs font-black uppercase tracking-widest text-[#F2A007] hover:text-[#003366] transition-colors flex items-center gap-1"
              >
                Apply <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </HoverSlider>
    </section>
  );
}
