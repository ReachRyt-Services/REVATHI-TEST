"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";

// ──────────────────────────────────────────────
//  Small inline SVG icons
// ──────────────────────────────────────────────
const InfoIcon = ({ type }: { type: "website" | "phone" | "address" }) => {
  const icons: Record<typeof type, React.ReactNode> = {
    website: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    phone: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    address: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  };
  return (
    <span className="mr-2 flex-shrink-0 opacity-70">{icons[type]}</span>
  );
};

// ──────────────────────────────────────────────
//  Component prop types
// ──────────────────────────────────────────────
export interface CourseHeroProps {
  className?: string;
  logo?: { url: string; alt: string; text?: string };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction: { text: string; href: string };
  backgroundImage: string;
  contactInfo: { website: string; phone: string; address: string };
}

// ──────────────────────────────────────────────
//  Main component  (client-only because of framer-motion)
// ──────────────────────────────────────────────
export const CourseHeroSection = React.forwardRef<HTMLElement, CourseHeroProps>(
  (
    {
      className,
      logo,
      slogan,
      title,
      subtitle,
      callToAction,
      backgroundImage,
      contactInfo,
    },
    ref
  ) => {
    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.15 },
      },
    };

    const itemVariants: Variants = {
      hidden: { y: 24, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
      },
    };

    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative flex w-full min-h-[90vh] flex-col overflow-hidden md:flex-row",
          className
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* ── Left panel ── */}
        <div
          className="relative z-10 flex w-full flex-col justify-between
                      bg-[#003366] px-8 py-20 md:w-[55%] md:px-14 md:py-24 lg:px-20"
        >
          {/* Subtle dot-grid texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          {/* Teal accent glow top-right */}
          <div className="pointer-events-none absolute top-0 right-0 h-80 w-80 rounded-full bg-[#008080]/30 blur-[120px]" />

          {/* Logo / institution badge */}
          <motion.header variants={itemVariants} className="relative mb-12 flex items-center gap-3">
            {logo && (
              <>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md">
                  <img src={logo.url} alt={logo.alt} className="h-7 w-7 object-contain" />
                </div>
                <div>
                  {logo.text && (
                    <p className="text-base font-black text-white tracking-wide">
                      {logo.text}
                    </p>
                  )}
                  {slogan && (
                    <p className="text-[10px] font-bold tracking-[0.2em] text-[#008080] uppercase">
                      {slogan}
                    </p>
                  )}
                </div>
              </>
            )}
          </motion.header>

          {/* Main copy */}
          <motion.div variants={containerVariants} className="relative flex-1">
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl font-black leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              {title}
            </motion.h1>

            {/* Accent underline bar */}
            <motion.div
              variants={itemVariants}
              className="my-7 h-[3px] w-16 rounded-full bg-[#F2A007]"
            />

            <motion.p
              variants={itemVariants}
              className="mb-10 max-w-lg text-base font-medium leading-relaxed text-white/75 md:text-lg"
            >
              {subtitle}
            </motion.p>

            <motion.a
              variants={itemVariants}
              href={callToAction.href}
              className="inline-flex items-center gap-3 rounded-xl bg-[#F2A007] px-8 py-4
                         font-black text-sm uppercase tracking-widest text-[#0F3D3D]
                         shadow-lg shadow-[#F2A007]/25 transition-all duration-300
                         hover:bg-white hover:shadow-white/20"
            >
              {callToAction.text}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Footer contact bar */}
          <motion.footer
            variants={itemVariants}
            className="relative mt-14 border-t border-white/10 pt-8"
          >
            <div className="grid grid-cols-1 gap-4 text-xs font-semibold text-white/60 sm:grid-cols-3">
              <div className="flex items-center gap-1.5">
                <InfoIcon type="website" />
                <span>{contactInfo.website}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <InfoIcon type="phone" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <InfoIcon type="address" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </motion.footer>
        </div>

        {/* ── Right panel — image with clip-path reveal ── */}
        <motion.div
          className="relative w-full min-h-[320px] bg-cover bg-center md:w-[45%]"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          initial={{ clipPath: "polygon(100% 0,100% 0,100% 100%,100% 100%)" }}
          animate={{ clipPath: "polygon(8% 0,100% 0,100% 100%,0% 100%)" }}
          transition={{ duration: 1.3, ease: [0.77, 0, 0.18, 1] }}
        >
          {/* Teal gradient overlay for brand consistency */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/40 via-transparent to-[#008080]/20" />
          {/* Course code badge */}
          {slogan && (
            <div className="absolute bottom-8 left-8 right-8 hidden md:block">
              <span className="inline-block rounded-full border border-white/30 bg-black/40 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
                {slogan}
              </span>
            </div>
          )}
        </motion.div>
      </motion.section>
    );
  }
);

CourseHeroSection.displayName = "CourseHeroSection";
