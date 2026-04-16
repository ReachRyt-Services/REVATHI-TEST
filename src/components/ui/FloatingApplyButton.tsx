"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export function FloatingApplyButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed bottom-10 right-10 z-[100] hidden md:block"
        >
          <Link href="https://apply.revathiinstitutions.com/">
            <div className="group relative flex items-center">
              {/* Tooltip-like background */}
              <div className="absolute right-full mr-4 bg-primary text-white px-6 py-3 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-10 group-hover:translate-x-0 whitespace-nowrap border border-white/10">
                <p className="font-black text-xs uppercase tracking-widest">Start Your Application</p>
              </div>
              
              {/* Main Button */}
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-[0_20px_50px_rgba(242,160,7,0.3)] hover:scale-110 hover:-rotate-3 transition-all duration-300 border-2 border-white/20">
                <GraduationCap className="text-[#0F3D3D]" size={32} />
                
                {/* Pulse Effect */}
                <div className="absolute inset-0 bg-accent rounded-2xl animate-ping opacity-20 -z-10"></div>
              </div>
            </div>
          </Link>
        </motion.div>
      )}
      
    </AnimatePresence>
  );
}
