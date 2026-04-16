"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    // Inject the NoPaperForms widget script if it's not already present
    if (!document.querySelector('script[src="https://widgets.in6.nopaperforms.com/emwgts.js"]')) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://widgets.in6.nopaperforms.com/emwgts.js";
      document.body.appendChild(script);
    }
  }, []);
  return (
    <section className="relative min-h-[600px] lg:min-h-[750px] flex items-center overflow-hidden bg-text-dark">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg.jpg"
          alt="Dynamic healthcare professional in advanced clinical setting" 
          fill
          priority
          className="object-cover grayscale opacity-60" 
        />
      </div>
      <div className="absolute inset-0 hero-overlay z-10"></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-bg-light"
          >
            <span className="inline-block py-1 px-4 bg-accent text-text-dark font-black text-xs uppercase tracking-widest mb-6 shadow-md rounded-sm">
              Career Acceleration 2026
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black leading-tight mb-6 tracking-tight font-display text-white">
              Elevate Your <br/><span className="text-[#F2A007] italic">Impact.</span>
            </h1>
            <p className="text-base sm:text-xl text-bg-light/90 mb-8 max-w-xl font-semibold leading-relaxed">
              Master elite healthcare skills at Revathi Institutions in <span className="text-accent underline decoration-white/20">Tiruppur, Tamil Nadu.</span> We fast-track your journey from student to top-tier professional with intensive clinical exposure at our 300-bed super-specialty hospital.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-12">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#F2A007] text-3xl sm:text-4xl">trending_up</span>
                <div>
                  <div className="font-black text-2xl sm:text-3xl text-[#F2A007] font-display">100%</div>
                  <div className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest opacity-80">Placement Rate</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#F2A007] text-3xl sm:text-4xl">local_hospital</span>
                <div>
                  <div className="font-black text-2xl sm:text-3xl text-[#F2A007] font-display">300+</div>
                  <div className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest opacity-80">Bed Super-Specialty</div>
                </div>
              </div>
            </div>
            
            <Link href="https://apply.revathiinstitutions.com/" className="bg-bg-light text-primary hover:bg-accent hover:text-text-dark px-10 py-5 rounded-xl font-black uppercase tracking-widest transition-all inline-flex items-center gap-3 shadow-xl">
              Start Online Application <span className="material-symbols-outlined">chevron_right</span>
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-bg-light p-8 lg:p-10 shadow-2xl rounded-xl border-t-8 border-accent"
          >
            <h3 className="text-xl sm:text-2xl font-black text-primary mb-2 uppercase tracking-tight font-display">Secure Your Future</h3>
            <p className="text-sm sm:text-base text-text-dark/70 mb-8 font-semibold">Initiate your professional breakthrough today.</p>
            <div className="npf_wgts" data-height="400px" data-w="4fcc68647ab9e6fa64da088911e4430a"></div>
            <p className="text-center text-[10px] font-bold text-text-dark/40 uppercase tracking-wider mt-4">Fast-track admission response within 24 hours</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
