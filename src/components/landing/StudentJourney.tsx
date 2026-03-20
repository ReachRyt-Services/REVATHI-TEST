"use client";

import { motion } from "framer-motion";

const journeySteps = [
  { step: "1", title: "Enquiry", desc: "Submit your details or call us." },
  { step: "2", title: "Counselling", desc: "Expert guidance on course selection." },
  { step: "3", title: "Guidance", desc: "Help with documents and eligibility." },
  { step: "4", title: "Enrollment", desc: "Secure your seat and join the family." },
  { step: "5", title: "Training", desc: "Rigorous academic & clinical training." },
  { step: "6", title: "Placement", desc: "100% placement support on graduation." },
];

export default function StudentJourney() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-neutral-900 mb-12">Your Admission Journey</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-6 left-[8%] right-[8%] h-0.5 bg-neutral-200 z-0"></div>

          {journeySteps.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative z-10 flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full bg-stanford text-white flex items-center justify-center font-bold text-xl mb-4 shadow-md ring-4 ring-white">
                {item.step}
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">{item.title}</h3>
              <p className="text-xs text-neutral-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
