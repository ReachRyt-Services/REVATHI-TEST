"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function TrainingRMC() {
  return (
    <section className="py-24 bg-neutral-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            {/* Visual Placeholder */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-neutral-200 border-8 border-white">
              <div className="w-full h-full flex flex-col items-center justify-center text-neutral-400 p-8 text-center bg-gray-100">
                [AI Generated Facility Image]
                <span className="mt-4 text-sm font-semibold max-w-xs">Revathi Medical Centre (RMC) Hands-on Training Facilities</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-stanford text-white p-6 rounded-xl shadow-xl hidden md:block">
              <div className="text-4xl font-extrabold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-200">
                500+
              </div>
              <div className="font-semibold text-sm uppercase tracking-wide">Beds Hospital</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block bg-amber-100 text-stanford-dark font-bold px-4 py-1 rounded-full text-sm mb-6">
              Exclusive Clinical Exposure
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              Training at <span className="text-stanford">RMC</span>
            </h2>
            <p className="text-neutral-600 mb-8 text-lg leading-relaxed">
              Our students gain unparalleled clinical experience at Revathi Medical Centre, a multi-specialty 
              hospital offering real-world training under the guidance of expert medical practitioners.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Hands-on patient care from year one",
                "Exposure to diverse medical cases and specialties",
                "Advanced ICUs and Operation Theatres",
                "Guidance by senior doctors and nurses"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="text-amber-500 mr-3 shrink-0 mt-0.5" size={24} />
                  <span className="text-neutral-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a href="/about-rmc" className="text-stanford font-bold hover:text-stanford-dark underline underline-offset-4 decoration-2">
              Learn more about RMC facilities &rarr;
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
