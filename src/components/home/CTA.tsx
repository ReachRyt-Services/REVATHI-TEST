"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-bg-light mb-8 uppercase tracking-tight font-display"
        >
          Demand Excellence. <br/>Apply Today.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-bg-light/80 font-semibold text-xl mb-12"
        >
          Your trajectory to the top of the healthcare industry begins here. Don't just work in healthcare—lead it.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a href="#apply" className="bg-accent text-text-dark px-12 py-5 font-black uppercase tracking-widest hover:bg-bg-light transition-all shadow-2xl inline-block">
            Start Online Application
          </a>
          <a href="/contact" className="bg-white/10 text-bg-light border-2 border-bg-light/30 px-12 py-5 font-black uppercase tracking-widest hover:bg-white/20 transition-all inline-block">
            Visit Campus
          </a>
        </motion.div>
      </div>
    </section>
  );
}
