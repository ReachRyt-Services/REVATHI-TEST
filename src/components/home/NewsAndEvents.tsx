"use client";

import { motion } from "framer-motion";
import { Calendar, Bell } from "lucide-react";

const news = [
  { date: "Oct 15", title: "Admissions Open for BNYS 2026-27", type: "Admission" },
  { date: "Oct 10", title: "Annual Cultural Fest \"Aarohan\" Announced", type: "Event" },
  { date: "Oct 05", title: "Free Health Checkup Camp hosted by RMC", type: "Community" }
];

export default function NewsAndEvents() {
  return (
    <section className="py-24 bg-white px-4 sm:px-6 lg:px-8 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* News Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 flex items-center">
              <Bell className="mr-3 text-stanford" /> Latest Announcements
            </h2>
            <div className="space-y-6">
              {news.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 border border-neutral-100 rounded-xl hover:shadow-md transition-shadow bg-neutral-50/50">
                  <div className="bg-stanford text-white p-3 rounded-lg text-center min-w-[80px] flex flex-col justify-center">
                    <span className="text-sm font-semibold uppercase">{item.date.split(" ")[0]}</span>
                    <span className="text-xl font-bold">{item.date.split(" ")[1]}</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-1">{item.type}</span>
                    <h3 className="font-semibold text-lg text-neutral-900 hover:text-stanford cursor-pointer transition-colors">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Events Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 flex items-center">
              <Calendar className="mr-3 text-stanford" /> Upcoming Events
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-lg relative aspect-video bg-neutral-200">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-500">
                [AI Scrolling Events Carousel Visual]
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="text-2xl font-bold mb-2">National Conference on Paramedical Sciences</h3>
                <p className="text-sm text-gray-300">Join experts from across India. Dates: November 12-14.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
