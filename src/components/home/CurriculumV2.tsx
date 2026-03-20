"use client";

import { motion } from "framer-motion";

export default function CurriculumV2() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 lg:px-8 light-section">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-black text-text-dark mb-4 uppercase tracking-tight font-display">Command Your Career</h2>
          <p className="text-text-dark/70 font-semibold text-lg">Rigorous training designed for those who demand professional mastery and global mobility.</p>
        </div>
        <a className="inline-flex items-center gap-2 font-black text-primary uppercase tracking-widest text-sm hover:gap-4 transition-all" href="#">
          View Full Curriculum <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="group bg-white border-b-4 border-primary/20 hover:border-accent transition-all shadow-md"
        >
          <div className="h-64 overflow-hidden relative">
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmxULUH5EMhyblGO7hMKk0qGIWyejQFIRCFcC38KG8CRO8NWOktsV8jEbexM6W5pNji72w9ThwpLu14RJK8m5lTk4_ml-tbeNDqoHxztOQC5gmupF6omUfpb-9tuG1pcH0APNYON91Gr62q2VbGHB5cdiLXBgrVCyTYJYKsH6ExAMao0P9ThYmQKnUTndzwZlAQoLp9G_-6cNcDk8JZgHiY6bhF-QqAw521Z6tUhGoAaMqwl_dQczypSqe03oR8GZo335_A-foc5aV"
              alt="Clinical Nutrition Student"
            />
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all"></div>
            <div className="absolute top-0 left-0 bg-primary text-bg-light text-[10px] font-black px-4 py-2 uppercase tracking-widest">B.Sc. Program</div>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-black text-text-dark mb-4 uppercase tracking-tight font-display">Clinical Nutrition</h3>
            <p className="text-sm font-semibold text-text-dark/60 mb-8 leading-relaxed">Execute data-driven dietetic interventions in complex disease management environments.</p>
            <button className="w-full border-2 border-primary text-primary font-black py-3 uppercase tracking-widest text-xs hover:bg-accent hover:text-text-dark hover:border-accent transition-all">Enroll Now</button>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="group bg-white border-b-4 border-primary/20 hover:border-accent transition-all shadow-md"
        >
          <div className="h-64 overflow-hidden relative">
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcsPZJoD-6e1-Z-ds4WwmYRnfji_HWftGCRjZaFzd7iDUKQsZGvRkORVQm2BHx0tT4FbD6rtwKfbTGl2uk4uV_4aAs5hWWhoRBqQbFHOtrmczO24A2ddEMqGL6BYLdLXfxZ4nwmSr8y7lc44nGNQblyiBaDaIuzLOSgyaIr2QnP0YGPB-MdevEj2GXv7fB01Zusk_j9iFzdghGqFuzCb-1EwSZ5064k9JaAYiFJZlw4OBUcjTBbC8wW5Pk2qI2-qLNKzcjsvm55Sv5"
              alt="Physiotherapy Student"
            />
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all"></div>
            <div className="absolute top-0 left-0 bg-primary text-bg-light text-[10px] font-black px-4 py-2 uppercase tracking-widest">BPT Program</div>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-black text-text-dark mb-4 uppercase tracking-tight font-display">Physiotherapy</h3>
            <p className="text-sm font-semibold text-text-dark/60 mb-8 leading-relaxed">Master advanced physical rehabilitation techniques for elite athletic and clinical recovery.</p>
            <button className="w-full border-2 border-primary text-primary font-black py-3 uppercase tracking-widest text-xs hover:bg-accent hover:text-text-dark hover:border-accent transition-all">Enroll Now</button>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="group bg-white border-b-4 border-primary/20 hover:border-accent transition-all shadow-md"
        >
          <div className="h-64 overflow-hidden relative">
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGkztpOfrzkktR3qMd4D3b39Puk2zwJua1Ras7RGObGnXFqqyXRBCgbWGfwH0FY0sR5eBzFU5hVrZX6qQo_hvNYb10bVppJM7lwAgOj0VZbwMB9gN6da1L9nTpL4HWtGl7VrNipCpD5tIVCKGCxcSVaFhfMh-lfCXJ5fnoIn5SjyJ6ynNGRh0SmiLdJTdxSuC7jZIPtjCpDfLD2ZhR7uHTIN05Fec_HQ1jiAjwzLpSYLAd9YYrDa5uHbYzDnWP3ojRziB5nnFw7yWi"
              alt="Critical Care Student"
            />
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all"></div>
            <div className="absolute top-0 left-0 bg-primary text-bg-light text-[10px] font-black px-4 py-2 uppercase tracking-widest">B.Sc. Program</div>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-black text-text-dark mb-4 uppercase tracking-tight font-display">Critical Care</h3>
            <p className="text-sm font-semibold text-text-dark/60 mb-8 leading-relaxed">Operate life-saving technologies in high-pressure intensive care environments with precision.</p>
            <button className="w-full border-2 border-primary text-primary font-black py-3 uppercase tracking-widest text-xs hover:bg-accent hover:text-text-dark hover:border-accent transition-all">Enroll Now</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
