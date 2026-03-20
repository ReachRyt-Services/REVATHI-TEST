"use client";

import { useEffect } from "react";
import { Logos3 } from "@/components/campus/Logos3";
import { PreFooterCTA } from "@/components/layout/PreFooterCTA";
import Link from "next/link";
import { ArrowRight, Trophy, Briefcase, HeartPulse } from "lucide-react";

export default function PlacementsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-bg-light min-h-screen">
      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#003366] clip-diagonal" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#008080] rounded-full blur-[150px] opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 text-[#008080] font-black text-[10px] uppercase tracking-widest mb-6 rounded-full">
            Clinical Careers · Tiruppur & Beyond
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white font-display tracking-tight mb-6">
            Your Medical Career, <br />
            <span className="text-[#F2A007]">Guaranteed.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed mb-10">
            Backed by our 300-bed Revathi Medical Center, we provide 100% placement assistance, integrating our alumni into the finest hospitals in Tamil Nadu and across India.
          </p>
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────────────────────────────── */}
      <section className="-mt-12 relative z-20 max-w-5xl mx-auto px-4 mb-24">
        <div className="bg-white rounded-2xl shadow-2xl border border-primary/5 p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-primary/10">
          <div className="flex flex-col items-center p-4">
            <Trophy className="w-10 h-10 text-[#F2A007] mb-4" />
            <span className="text-4xl font-black text-primary font-display mb-2">3000+</span>
            <span className="text-text-dark/60 font-medium text-sm">Alumni in Top Hospitals</span>
          </div>
          <div className="flex flex-col items-center p-4">
            <Briefcase className="w-10 h-10 text-[#008080] mb-4" />
            <span className="text-4xl font-black text-primary font-display mb-2">100%</span>
            <span className="text-text-dark/60 font-medium text-sm">Placement Assistance</span>
          </div>
          <div className="flex flex-col items-center p-4">
            <HeartPulse className="w-10 h-10 text-primary mb-4" />
            <span className="text-4xl font-black text-primary font-display mb-2">50+</span>
            <span className="text-text-dark/60 font-medium text-sm">Corporate Hospital Partners</span>
          </div>
        </div>
      </section>

      {/* ── Partners / Logos ───────────────────────────────────────────────── */}
      <div className="mb-24">
        <Logos3 heading="Our Graduates Are Recruited By" />
      </div>

      {/* ── Placement Process ──────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#008080]/10 border border-[#008080]/20 text-[#008080] font-black text-[10px] uppercase tracking-widest rounded-full">
              The Revathi Advantage
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-text-dark font-display tracking-tight leading-tight mb-6">
              Why Our Students <br />Are <span className="text-primary italic">Preferred Hires</span>
            </h2>
            <div className="space-y-6">
              {[
                { title: "Direct Hospital Integration", desc: "Unlike standard colleges, our students complete their clinical postings natively at the Revathi Medical Center in Tiruppur, mastering real-world, high-pressure environments before graduation." },
                { title: "Rigorous Interview Prep", desc: "Our dedicated placement cell conducts mock interviews, technical exams, and soft-skill workshops tailored for major corporate hospitals in Coimbatore, Chennai, and Bangalore." },
                { title: "Global Opportunities", desc: "With INC and WFOT accreditations, our B.Sc Nursing and Allied Health graduates frequently secure lucrative clinical roles in the Middle East, UK, and Australia." }
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-dark mb-2">{feature.title}</h3>
                    <p className="text-text-dark/70 font-medium leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160501-bbe57469278b?auto=format&fit=crop&q=80&w=1200" 
                alt="Revathi Nursing Graduates at a clinical placement interview in Tamil Nadu" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-8">
                <p className="text-white font-bold text-lg border-l-4 border-[#F2A007] pl-4">
                  "Revathi graduates enter our wards already knowing how to run them."<br/>
                  <span className="text-sm text-white/70 font-medium block mt-2">— Chief Medical Officer, Corporate Hospital Partner</span>
                </p>
              </div>
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#F2A007] rounded-3xl -z-10 blur-2xl opacity-40" />
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-[#008080] rounded-full -z-10 blur-[100px] opacity-20" />
          </div>
        </div>
      </section>

      {/* ── SEO Block ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-12 border-t border-primary/5">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xs text-text-dark/50 font-medium leading-relaxed">
            The Revathi Institutions Placement Cell in Tiruppur actively partners with premier healthcare organizations across Tamil Nadu. Our comprehensive clinical training ensures our B.Sc Nursing, Physiotherapy, and Allied Health Sciences alumni secure top-tier nursing and technologist jobs in critical care, diagnostics, and surgical units nationwide.
          </p>
        </div>
      </section>

      <PreFooterCTA />
    </div>
  );
}
