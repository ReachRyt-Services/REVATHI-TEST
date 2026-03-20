"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What is the eligibility for B.Sc Nursing?", a: "Candidates must have passed 10+2 with Physics, Chemistry, Biology and English with a minimum of 50% aggregate marks." },
  { q: "Is there a hostel facility?", a: "Yes, we provide safe, separate hostel accommodations for boys and girls with hygienic mess facilities." },
  { q: "Do you offer placement support?", a: "We have a dedicated placement cell that ensures 100% placement assistance in top hospitals in India and abroad." },
  { q: "Where does clinical training take place?", a: "Clinical training starts early and takes place at Revathi Medical Centre (RMC), our own 500+ bed multi-specialty hospital." }
];

export default function LandingFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-16 px-4 bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-neutral-200 rounded-lg overflow-hidden transition-all duration-300">
              <button 
                className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-neutral-50 text-left font-bold text-neutral-900"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span>{faq.q}</span>
                <ChevronDown className={`transform transition-transform ${openIdx === idx ? 'rotate-180 text-amber-500' : 'text-neutral-400'}`} size={20} />
              </button>
              
              <div className={`px-6 overflow-hidden transition-all duration-300 bg-neutral-50 ${openIdx === idx ? 'max-h-40 py-4 opacity-100 border-t border-neutral-100' : 'max-h-0 py-0 opacity-0'}`}>
                <p className="text-neutral-600">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
