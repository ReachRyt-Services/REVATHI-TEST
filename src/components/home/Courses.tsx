"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const courses = [
  { title: "B.Sc Nursing", duration: "4 Years", description: "Comprehensive nursing education blending theory with extensive hospital practice." },
  { title: "BPT Physiotherapy", duration: "4.5 Years", description: "Advanced musculoskeletal and neurological rehabilitation training." },
  { title: "B.Sc Allied Health", duration: "3+1 Years", description: "Specialized training in Medical Lab Tech, Operation Theatre Tech, etc." },
];

export default function Courses() {
  return (
    <section className="py-24 bg-neutral-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">Academic Programs</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Discover our industry-aligned programs designed to forge the next generation of healthcare pioneers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-neutral-100 overflow-hidden flex flex-col"
            >
              <div className="h-48 bg-neutral-200 flex items-center justify-center text-neutral-400">
                [AI Image - {course.title}]
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="text-xs font-bold text-stanford mb-2 uppercase tracking-wide">{course.duration}</div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900">{course.title}</h3>
                <p className="text-neutral-600 mb-6 flex-grow">{course.description}</p>
                <div className="mt-auto">
                  <Link href={`/courses`} className="text-stanford font-semibold hover:text-stanford-dark inline-flex items-center transition-colors">
                    Explore Program <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
