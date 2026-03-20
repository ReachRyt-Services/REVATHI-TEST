"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Infrastructure() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 md:order-1 relative"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img 
              className="w-full aspect-video sm:h-80 object-cover rounded-2xl md:rounded-none grayscale" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZf1hE4lYKdYYTc89LJdwOEFZ0l4GsWqIVZzqlKBx9WcCaE4kyoZvS53FrWYTHCknVT-T-AEXANcTeOclPLx_6yBkH2vaeQFrKD6AFalx9lYrRQe8Frvi4v2e56BxOkFo5xQDQvr6p8n9Rj2-7XQKswuBx6foYp8B9nbflPe9D4gulfHMbNHmUTI3MDTdAJjJUsrZjELp1yOh2EADk4nbxYMSyZ6ci6bbf7XqT_CXpAvwlby2Rlqp0jUAEe-ZBGVBUZ25bGPygbr5l" 
              alt="Elite medical laboratories at Revathi Institutions Tiruppur"
            />
            <img 
              className="w-full aspect-video sm:h-80 object-cover rounded-2xl md:rounded-none grayscale sm:mt-12" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCayiUriIwioB-gZ_N-f6BXwPQE7wm9YuVeKo4G_JnNohxcAfuzVqHkjhTF0inJp2sCzX4U2xkZNVKbQGrQVc2XCtC9gal2Sr1gZDiNIoiLe5p4HPpEHUfqnqXEaTDzsRrRMROc7xFr1uauK9ImcK-JioYr3WcL11bzETyViI939RNCaJ_sd8_5RgBbjJrhm8DnMLxYKrDtMaLuL4RbyIvm0PbjPDL8S6_m_PulUM7Ad251sYRpHcu9FVPnUyhf7TX76uRs_nUsIMoF" 
              alt="Modern medical library and research center at Revathi Campus Tamil Nadu"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 bg-accent p-10 hidden xl:block shadow-2xl">
            <div className="text-text-dark font-black text-4xl leading-none font-display">300k+</div>
            <div className="text-text-dark text-[10px] font-black uppercase tracking-widest mt-2">Sq. Ft. Medical Campus</div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 md:order-2"
        >
          <div className="w-12 h-2 bg-accent mb-8"></div>
          <h2 className="text-4xl font-black text-text-dark mb-6 uppercase tracking-tight font-display">Elite Clinical <br/>Infrastructure</h2>
          <p className="text-text-dark/70 font-semibold mb-10 text-lg leading-relaxed">Our Tiruppur campus is engineered for professional immersion. From high-fidelity simulation labs to interactive digital theatres, every square foot accelerates your learning curve to prepare you for top corporate hospitals in Coimbatore, Chennai, and beyond.</p>
          
          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary font-bold">verified</span>
              <div>
                <h4 className="font-black text-sm uppercase tracking-widest text-text-dark">Precision Learning Spaces</h4>
                <p className="text-xs font-semibold text-text-dark/50 mt-1">Simulate real-world medical scenarios in controlled, high-tech environments.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary font-bold">rocket_launch</span>
              <div>
                <h4 className="font-black text-sm uppercase tracking-widest text-text-dark">Gigabit Connectivity</h4>
                <p className="text-xs font-semibold text-text-dark/50 mt-1">24/7 access to global medical databases and digital research journals.</p>
              </div>
            </div>
          </div>
          
          <Link href="/campus" className="bg-primary text-bg-light px-8 py-4 font-black uppercase tracking-widest text-xs hover:bg-accent hover:text-text-dark transition-all flex items-center gap-2 shadow-lg">
            Visit Campus Facilities <span className="material-symbols-outlined">chevron_right</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
