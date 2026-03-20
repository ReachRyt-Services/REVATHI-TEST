"use client";

import { motion } from "motion/react";
import { TestimonialsColumn, Testimonial } from "@/components/ui/testimonials-columns-1";

const testimonials: Testimonial[] = [
  {
    text: "The day-one hospital access was unlike anything I expected. By the end of my first semester, I had already assisted in live ward rounds. Revathi gave me real confidence, not just theory.",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&q=80&w=80&h=80",
    name: "Priya Subramaniam",
    role: "B.Sc Nursing, Batch 2021 — Now at Apollo Hospitals",
  },
  {
    text: "The faculty are practising clinicians, not just academics. Every lecture felt grounded in what's actually happening in the wards. I graduated ready to work, not needing six months to 'adjust'.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=80&h=80",
    name: "Karthik Rajan",
    role: "BPT Graduate — Physiotherapist, Fortis Healthcare",
  },
  {
    text: "I chose Revathi because of the 300-bed hospital attachment. What I didn't expect was how well the hostel, library, and lab facilities would support my study routine. Absolutely no compromise.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=80&h=80",
    name: "Deepa Menon",
    role: "GNM Student, Final Year",
  },
  {
    text: "After my BPT from Revathi, I cleared my licensing exam on the first attempt and secured a role in the UK within eight months. The clinical exposure here is simply irreplaceable.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=80&h=80",
    name: "Arjun Nair",
    role: "BPT 2020 — Physiotherapist, NHS UK",
  },
  {
    text: "As a parent, I was anxious. But the campus security, structured schedule, and transparent communication from faculty gave me complete peace of mind. My daughter is thriving.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=80&h=80",
    name: "Meenakshi Iyer",
    role: "Parent of B.Sc AHS Student",
  },
  {
    text: "The simulation lab at Revathi is on par with what you'd find in a tier-1 corporate hospital. I learned ECG interpretation, IV cannulation, and catheterisation before my first clinical posting.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=80&h=80",
    name: "Ananya Krishnan",
    role: "B.Sc Nursing Student, 3rd Year",
  },
  {
    text: "Faculty went above and beyond — answering calls at 10 PM before exams, reviewing my case presentations multiple times. That mentorship is what sets Revathi apart from every other college I looked at.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=80&h=80",
    name: "Rohit Selvam",
    role: "B.Sc AHS Graduate — Working at MIOT International",
  },
  {
    text: "I was placed in Dubai within three months of graduation. The skills-first curriculum and the hospital integration meant my employer didn't have to retrain me at all.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=80&h=80",
    name: "Fathima Beevi",
    role: "GNM 2022 — Staff Nurse, Dubai Health Authority",
  },
  {
    text: "The admissions team was honest with me about placement stats, fees, and timelines. No false promises. That kind of transparency made me trust the institution even before I enrolled.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=80&h=80",
    name: "Suresh Pillai",
    role: "Parent of BPT Student",
  },
];

const firstColumn  = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn  = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="bg-[#F5F7FA] py-24 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#003366]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#003366]/10 border border-[#003366]/20 text-[#003366] font-black text-[10px] uppercase tracking-widest mb-6 rounded-full">
            Alumni & Student Voices
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#003366] font-display tracking-tight mb-4">
            Straight from Our<br />
            <span className="text-[#008080]">Students & Graduates</span>
          </h2>
          <p className="text-lg text-[#333]/65 font-medium leading-relaxed">
            Over 3,000 alumni now practise across India, the Middle East, and the UK. Here's what they say.
          </p>
        </motion.div>

        {/* Scrolling columns */}
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn}  duration={18} />
          <TestimonialsColumn testimonials={secondColumn} duration={22} className="hidden md:block" />
          <TestimonialsColumn testimonials={thirdColumn}  duration={20} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
