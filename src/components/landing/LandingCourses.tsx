"use client";

import { motion } from "framer-motion";

const categories = [
  { group: "Nursing", programs: ["B.Sc Nursing (4 Years)", "Post Basic B.Sc Nursing"] },
  { group: "Paramedical", programs: ["B.Sc Medical Lab Tech", "B.Sc Operation Theatre Tech", "B.Sc Radiology & Imaging"] },
  { group: "Physiotherapy", programs: ["BPT (4.5 Years)", "MPT (Orthopaedics)", "MPT (Neurology)"] },
  { group: "Occupational Therapy", programs: ["BOT (4.5 Years)", "MOT (Pediatrics)", "MOT (Mental Health)"] }
];

export default function LandingCourses() {
  return (
    <section className="py-16 px-4 bg-neutral-50 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Programs We Offer</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Choose from a wide range of specialized healthcare programs designed for global opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden"
            >
              <div className="bg-stanford text-white text-center py-4 font-bold text-lg">
                {cat.group}
              </div>
              <ul className="p-6 space-y-3">
                {cat.programs.map((prog, i) => (
                  <li key={i} className="flex items-start text-neutral-700 text-sm font-medium">
                    <span className="text-amber-500 mr-2">•</span> {prog}
                  </li>
                ))}
              </ul>
              <div className="px-6 pb-6 mt-auto">
                <a href="#enquire" className="block text-center text-sm font-bold text-stanford bg-stanford/10 hover:bg-stanford/20 py-2 rounded transition-colors">
                  Enquire Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
