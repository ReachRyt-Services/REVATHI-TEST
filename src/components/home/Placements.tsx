"use client";

import { motion } from "framer-motion";
import { Link2 } from "lucide-react";

export default function Placements() {
  return (
    <section id="placements" className="py-24 bg-stanford text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">100% Placement Assistance</h2>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-16">
          Our dedicated placement cell works tirelessly to ensure our graduates find their footing in top-tier healthcare institutions across the globe.
        </p>

        {/* Mockup of company logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-80">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="w-32 h-16 bg-white/10 rounded flex items-center justify-center font-bold text-sm tracking-widest"
            >
              HOSPITAL {i}
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <a href="https://apply.revathiinstitutions.com/" className="btn btn-warning bg-amber-400 hover:bg-amber-500 text-stanford-dark font-bold border-none px-8">
            Start Your Journey <Link2 size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
