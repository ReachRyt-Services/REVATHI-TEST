"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Years of Excellence", value: "25+" },
  { label: "Alumni Worldwide", value: "10,000+" },
  { label: "Placement Assistance", value: "100%" },
  { label: "Expert Faculty", value: "150+" },
];

export default function StatsStrip() {
  return (
    <div className="bg-amber-500 text-neutral-900 py-12 relative z-20 shadow-lg -mt-8 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-xl">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-y divide-neutral-900/10 md:divide-y-0 md:divide-x divide-neutral-900/20 text-center">
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-4"
          >
            <div className="text-3xl md:text-4xl font-extrabold mb-1">{stat.value}</div>
            <div className="text-sm font-semibold text-neutral-800 uppercase tracking-wider">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
