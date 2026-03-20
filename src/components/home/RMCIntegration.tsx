"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function RMCIntegration() {
  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="bg-primary text-bg-light flex flex-col lg:flex-row overflow-hidden shadow-2xl">
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative h-96 lg:h-auto"
          >
            <img 
              className="w-full h-full object-cover grayscale opacity-80" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAccHpkNuTlr4VhCW86j1wk3hNc2yEkcKKeDZi3hT79ckgnwfnpgOHxNaUN-kX--Q8RyivZUkJVmtANlEdzdioVXvfhYm_2ZpaHwbnaAZcGSipTByOEqVWIho4QjXCzFoQmOcMC85v3RVNPC0drtKS_1oK1Nr9IxVrsaYdkZMO2N1iYUJjJ04JDvJc3Pul_QkGou1LLruHv7Gj621bd3GxmbdOu30HSu8bpYv8q469wXhwpGTFqRUrBhu0P3gfDSnTIT4ql--WWB-kH" 
              alt="Medical Center"
            />
            <div className="absolute inset-0 bg-primary/40"></div>
            <div className="absolute bottom-10 left-10">
              <div className="bg-accent text-text-dark text-[10px] font-black uppercase tracking-widest px-4 py-2 mb-4 inline-block">Real-World Command</div>
              <h3 className="text-3xl font-black uppercase tracking-tight font-display">Revathi Medical Center</h3>
            </div>
          </motion.div>
          
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
            <h2 className="text-4xl font-black uppercase tracking-tight mb-6 leading-tight font-display">Zero-Gap <br/>Clinical Integration</h2>
            <p className="text-bg-light/80 font-semibold mb-10 text-lg leading-relaxed">Bridge the divide between theory and practice. Our 300-bed super-specialty hospital serves as your primary training ground from Day 1, ensuring zero transition time when you enter the global workforce.</p>
            
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <div className="text-accent font-black text-3xl mb-1 font-display">15+</div>
                <div className="text-[10px] font-black uppercase tracking-widest opacity-70">Medical Specialties</div>
              </div>
              <div>
                <div className="text-accent font-black text-3xl mb-1 font-display">24/7</div>
                <div className="text-[10px] font-black uppercase tracking-widest opacity-70">ICU & Emergency Care</div>
              </div>
            </div>
            
            <Link className="font-black uppercase tracking-widest text-xs text-accent hover:text-bg-light transition-colors flex items-center gap-2 underline underline-offset-8" href="/campus">
              Explore RMC Facilities <span className="material-symbols-outlined text-sm">north_east</span>
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
