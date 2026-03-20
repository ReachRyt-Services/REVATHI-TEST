"use client";

import { motion } from "framer-motion";

export default function CampusLife() {
  return (
    <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">Vibrant Campus Life</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Experience holistic development through cultural events, sports, and a thriving student community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all aspect-square bg-neutral-100"
            >
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                [AI Image - Event/Campus Life {item}]
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-stanford-dark/80 via-stanford-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-bold text-lg">Student Activities</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
