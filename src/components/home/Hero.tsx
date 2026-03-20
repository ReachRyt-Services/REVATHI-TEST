"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
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
            
            <Link href="/apply" className="bg-bg-light text-primary hover:bg-accent hover:text-text-dark px-10 py-5 rounded-xl font-black uppercase tracking-widest transition-all inline-flex items-center gap-3 shadow-xl">
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
            <form className="space-y-6">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-text-dark/40 mb-2">Professional Name</label>
                <input className="w-full px-4 py-4 rounded-xl border-text-dark/10 bg-white focus:ring-primary focus:border-primary font-semibold text-text-dark" placeholder="Enter full name" type="text"/>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-text-dark/40 mb-2">Corporate Email</label>
                  <input className="w-full px-4 py-4 rounded-xl border-text-dark/10 bg-white focus:ring-primary focus:border-primary font-semibold text-text-dark" placeholder="email@domain.com" type="email"/>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-text-dark/40 mb-2">Contact Number</label>
                  <input className="w-full px-4 py-4 rounded-xl border-text-dark/10 bg-white focus:ring-primary focus:border-primary font-semibold text-text-dark" placeholder="+91" type="tel"/>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-text-dark/40 mb-2">Desired Specialization</label>
                <select className="w-full px-4 py-4 rounded-xl border-text-dark/10 bg-white focus:ring-primary focus:border-primary font-semibold text-text-dark" defaultValue="default">
                  <option value="default" disabled>Select Specialization</option>
                  <option value="nursing">Advanced Nursing</option>
                  <option value="physio">Physiotherapy & Rehab</option>
                  <option value="critical">Critical Care Tech</option>
                  <option value="nutrition">Clinical Nutrition</option>
                </select>
              </div>
              <button className="w-full bg-accent text-white font-black py-5 rounded-xl uppercase tracking-widest hover:bg-primary/90 transition-all shadow-xl">Submit Application</button>
              <p className="text-center text-[10px] font-bold text-text-dark/40 uppercase tracking-wider">Fast-track admission response within 24 hours</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
