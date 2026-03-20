"use client";

import { motion } from "framer-motion";

export default function Stats() {
  return (
    <section className="bg-primary py-20 border-b border-bg-light/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="text-accent font-black text-5xl mb-2 font-display">15+</div>
            <div className="text-bg-light text-xs font-bold uppercase tracking-widest leading-relaxed">High-Impact <br/>Degree Programs</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center md:text-left"
          >
            <div className="text-accent font-black text-5xl mb-2 font-display">100%</div>
            <div className="text-bg-light text-xs font-bold uppercase tracking-widest leading-relaxed">Placement <br/>At Top Hospitals</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left"
          >
            <div className="text-accent font-black text-5xl mb-2 font-display">14+</div>
            <div className="text-bg-light text-xs font-bold uppercase tracking-widest leading-relaxed">Years of <br/>Academic Excellence</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center md:text-left"
          >
            <div className="text-accent font-black text-5xl mb-2 font-display">3k+</div>
            <div className="text-bg-light text-xs font-bold uppercase tracking-widest leading-relaxed">Alumni <br/>Leading Globally</div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
