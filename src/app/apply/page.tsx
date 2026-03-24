"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Phone, Mail, MapPin, Building2, TrendingUp, Users, BookOpen, GraduationCap, Star, ShieldCheck, Zap, Facebook, Instagram, Linkedin, Youtube, Award, Stethoscope, Microscope, HeartPulse, UserPlus, FileText, CreditCard, CheckSquare, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Logos3 } from "@/components/campus/Logos3";

const placementStats = [
  { value: "98%", label: "Placement Rate", icon: <TrendingUp className="text-accent" size={24} /> },
  { value: "45+", label: "Elite Partners", icon: <Building2 className="text-accent" size={24} /> },
  { value: "2500+", label: "Global Alumni", icon: <Users className="text-accent" size={24} /> },
  { value: "100%", label: "Clinical Exposure", icon: <CheckCircle2 className="text-accent" size={24} /> },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1538108197017-c1346673919e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
];

const applySteps = [
  { step: "STEP 1", title: "Register Yourself", icon: <UserPlus size={40} /> },
  { step: "STEP 2", title: "Verify Email", icon: <Mail size={40} /> },
  { step: "STEP 3", title: "Fill Application Form Online", icon: <FileText size={40} /> },
  { step: "STEP 4", title: "Pay Application Fee", icon: <CreditCard size={40} /> },
  { step: "STEP 5", title: "Submit Application", icon: <CheckSquare size={40} /> },
];

export default function ApplyPage() {
  return (
    <div className="bg-bg-light min-h-screen font-sans selection:bg-accent selection:text-white">
      
      {/* ── Navbar ────────────────────────────────────────────────────────── */}
      <nav className="bg-white/80 backdrop-blur-md py-4 px-6 border-b border-primary/10 sticky top-0 z-[100] flex items-center justify-between shadow-sm">
        <Link href="/" className="font-black text-2xl text-primary font-display uppercase tracking-tighter">
          Revathi <span className="text-accent">Institutions</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-[10px] font-black uppercase tracking-widest text-primary/60 hover:text-primary transition-colors">Our Ethos</a>
            <a href="#placements" className="text-[10px] font-black uppercase tracking-widest text-primary/60 hover:text-primary transition-colors">Careers</a>
            <a href="#gallery" className="text-[10px] font-black uppercase tracking-widest text-primary/60 hover:text-primary transition-colors">Campus</a>
        </div>
        <a href="tel:+919842202288" className="flex items-center gap-2 text-text-dark font-black text-xs uppercase tracking-widest bg-accent px-4 py-2 rounded-lg hover:shadow-lg transition-all">
          <Phone size={16} className="text-[#0F3D3D]" /> <span className="hidden sm:inline">Admission Team: 9842202288</span>
        </a>
      </nav>

      {/* ── Hero + Application Section ─────────────────────────────────────── */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-white rounded-full blur-[200px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent rounded-full blur-[200px] translate-y-1/3 -translate-x-1/4"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-[55%] text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-[#0F3D3D] font-black text-[10px] uppercase tracking-widest mb-8 shadow-xl rounded-full"
            >
              <Zap size={14} /> Official Admissions Portal 2026
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-8xl font-black text-white font-display mb-8 tracking-tight leading-[1]"
            >
              CRAFT YOUR <span className="text-accent underline decoration-white/20 underline-offset-8">DESTINY</span> IN HEALTHCARE.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/70 font-medium mb-10 max-w-xl leading-relaxed"
            >
              Join a legacy of excellence. At Revathi, your education is forged in the fires of real-world clinical practice within our own 300-bed multi-specialty hospital.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
               <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
                  <div className="p-3 bg-accent/20 rounded-xl text-accent"><ShieldCheck size={28} /></div>
                  <div>
                    <h4 className="text-white font-black text-xs uppercase tracking-widest">Accredited by</h4>
                    <p className="text-white/60 font-bold text-sm">INC, TNNMC & Govt. of TN</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
                  <div className="p-3 bg-accent/20 rounded-xl text-accent"><Star size={28} /></div>
                  <div>
                    <h4 className="text-white font-black text-xs uppercase tracking-widest">Global Reach</h4>
                    <p className="text-white/60 font-bold text-sm">Alumni in 12+ Countries</p>
                  </div>
               </div>
            </motion.div>
          </div>

          <div className="lg:w-[45%] w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl shadow-[0_50px_100px_rgba(0,0,0,0.3)] p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100px] -z-0"></div>
              <h3 className="text-3xl font-black text-primary font-display uppercase tracking-tight mb-8">Begin Application</h3>
              
              <form className="space-y-6 relative z-10">
                <div className="group">
                  <label className="block text-[10px] font-black text-primary/40 uppercase tracking-widest mb-2 group-focus-within:text-accent transition-colors">Aspirant Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl bg-primary/5 border-2 border-transparent focus:border-accent focus:bg-white focus:ring-0 font-bold text-primary transition-all placeholder:text-primary/20" required placeholder="Ex: Rahul Kumar" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-primary/40 uppercase tracking-widest mb-2">WhatsApp Contact</label>
                    <input type="tel" className="w-full px-5 py-4 rounded-xl bg-primary/5 border-2 border-transparent focus:border-accent focus:bg-white focus:ring-0 font-bold text-primary transition-all placeholder:text-primary/20" required placeholder="+91" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-primary/40 uppercase tracking-widest mb-2">Email Identity</label>
                    <input type="email" className="w-full px-5 py-4 rounded-xl bg-primary/5 border-2 border-transparent focus:border-accent focus:bg-white focus:ring-0 font-bold text-primary transition-all placeholder:text-primary/20" required placeholder="r@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-primary/40 uppercase tracking-widest mb-2">Choose Your Pathway</label>
                  <select className="w-full px-5 py-4 rounded-xl bg-primary/5 border-2 border-transparent focus:border-accent focus:bg-white focus:ring-0 font-bold text-primary transition-all appearance-none cursor-pointer">
                    <option value="" disabled>Select Target College</option>
                    <option>College of Nursing</option>
                    <option>College of Paramedical Sciences</option>
                    <option>Institute of Physiotherapy</option>
                    <option>Institute of Occupational Therapy</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-primary text-white font-black py-6 rounded-2xl uppercase tracking-[0.2em] text-sm hover:bg-accent hover:text-[#0F3D3D] transition-all flex items-center justify-center gap-4 group shadow-xl">
                  Process Application <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Application Steps ──────────────────────────────────────────────── */}
      <section className="py-16 bg-[#F8FAFB]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {applySteps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl shadow-sm border border-primary/5 overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="bg-accent py-4 text-center border-b-4 border-accent shadow-sm">
                  <span className="text-[#0F3D3D] font-black uppercase text-xs tracking-[0.2em]">{step.step}</span>
                </div>
                <div className="p-6 md:p-8 flex flex-col items-center justify-center flex-1 gap-6 text-center transform transition-all duration-300">
                  <div className="text-primary group-hover:scale-110 group-hover:text-accent transition-all duration-300">
                    {step.icon}
                  </div>
                  <h4 className="font-bold text-sm md:text-base text-primary leading-snug font-display">
                    {step.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Steps to Follow ──────────────────────────────────────────────── */} 
      <section className="py-16 bg-[#F8FAFB]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-4">Application Guide</h2>
            <h3 className="text-3xl lg:text-4xl font-black text-primary uppercase font-display tracking-tight drop-shadow-sm">
              STEPS TO <span className="text-accent underline decoration-primary/10">FOLLOW</span>
            </h3>
          </div>
          <div className="flex flex-col lg:flex-row bg-primary text-white rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.15)] overflow-hidden relative">
            
            {/* Steps To Follow Content */}
            <div className="p-8 md:p-14 lg:w-4/5 text-sm md:text-base space-y-6 lg:pr-32 relative z-10 font-medium">
              <ul className="list-disc list-outside ml-6 space-y-6 text-white/80 items-start marker:text-accent">
                <li className="pl-2 leading-relaxed">The online application is for admission to programmes offered in <strong className="text-white">Revathi Institutions</strong>.</li>
                <li className="pl-2 leading-relaxed">Application Form Fee is Non-Refundable.</li>
                <li className="pl-2 leading-relaxed">Email ID submitted at the time of registration will be used for all correspondences until enrolment is completed. Change in Email ID will NOT be permitted under any circumstances.</li>
                <li className="pl-2 leading-relaxed">
                   <strong className="text-white block mb-4 text-lg font-display uppercase tracking-tight">Revathi Institutions Query Management System</strong>
                   Applicants are strongly advised to use Revathi Institutions Query Management System (Revathi Institutions-QMS), rather than emailing, to get a quick response.
                   <ol className="list-decimal list-outside ml-6 md:ml-10 mt-5 space-y-4 marker:text-white/60 font-medium">
                      <li className="pl-2">Register and verify your email ID</li>
                      <li className="pl-2">Click on <strong className="text-accent">[Any Queries? Ask US]</strong> in your dashboard</li>
                      <li className="pl-2">Select query category and submit your query</li>
                   </ol>
                </li>
              </ul>
            </div>

            {/* Graphic Silhouette / Steps pattern - decorative overlay */}
            <div className="hidden lg:block absolute bottom-0 right-32 w-96 h-96 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent rounded-full blur-[100px] opacity-20"></div>
            </div>

            {/* Download Brochure Side Bar (Desktop) */}
            <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-28 bg-white/5 border-l border-white/10 flex-col items-center py-12 cursor-pointer hover:bg-accent group transition-all z-20 backdrop-blur-md">
               <Download size={32} className="text-accent group-hover:text-[#0F3D3D] group-hover:-translate-y-2 transition-all mb-12" />
               <div className="flex-1 relative w-full group-hover:text-[#0F3D3D]">
                  <span className="-rotate-90 text-[12px] font-black uppercase tracking-[0.3em] whitespace-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/50 group-hover:text-[#0F3D3D] transition-colors">Download Brochure</span>
               </div>
            </div>
            
            {/* Download Brochure Button (Mobile) */}
            <div className="lg:hidden bg-white/5 border-t border-white/10 p-6 flex items-center justify-center gap-4 cursor-pointer hover:bg-accent group transition-all relative z-20">
                <Download size={24} className="text-accent group-hover:text-[#0F3D3D] transition-colors" />
                <span className="text-sm font-black uppercase tracking-[0.2em] text-white/70 group-hover:text-[#0F3D3D] transition-colors">Download Brochure</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Placement Statistics ───────────────────────────────────────────── */}
      <section id="placements" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-4">Placement Excellence</h2>
            <h3 className="text-4xl md:text-5xl font-black text-primary font-display tracking-tight">Your Launchpad to <span className="text-accent underline decoration-primary/10">Global Careers.</span></h3>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {placementStats.map((stat, idx) => (
              <div key={idx} className="p-8 bg-primary/5 rounded-3xl border border-primary/5 hover:-translate-y-2 transition-transform duration-500 text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-primary mb-2 font-display">{stat.value}</div>
                <div className="text-[10px] font-black text-primary/40 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <Link href="/placements" className="inline-flex items-center gap-3 bg-accent text-[#0F3D3D] font-black px-8 py-4 rounded-xl uppercase tracking-widest hover:-translate-y-1 transition-transform shadow-lg shadow-accent/20">
                Explore Placement Records <ArrowRight size={18} />
             </Link>
          </div>
        </div>
      </section>

      {/* ── Recruitment Partners ───────────────────────────────────────────── */}
      <Logos3 heading="Preferred Recruiter Network" className="border-y border-primary/10 bg-[#F8FAFB]" />

      {/* ── The Revathi Story ──────────────────────────────────────────────── */}
      <section id="story" className="py-24 md:py-32 scroll-mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 relative">
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-[80px]"></div>
             <div className="relative rounded-[30px] sm:rounded-[40px] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border-4 sm:border-8 border-white aspect-video lg:aspect-auto">
                <img src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=80&w=1000" alt="Revathi Campus" className="w-full h-full lg:h-auto object-cover scale-110" />
                <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
                <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/90 backdrop-blur-md rounded-2xl">
                   <p className="text-primary font-bold italic text-lg leading-relaxed mb-4">"I didn't just want to build a hospital. I wanted to build the people who would one day run hospitals better than mine."</p>
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent"></div>
                      <div>
                        <h5 className="font-black text-primary text-xs uppercase tracking-widest">Dr. Revathi</h5>
                        <p className="text-primary/40 text-[10px] font-bold uppercase tracking-widest">Founder & Chief Visionary</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          <div className="lg:w-1/2">
             <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-4">The Revathi Story</h2>
             <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary font-display leading-[1.1] mb-8">Bridging the Gap Between <span className="text-accent underline decoration-primary/10">Theory & Reality.</span></h3>
             <div className="space-y-6 text-primary/70 font-medium text-lg leading-relaxed">
                <p>Founded in 2009, Revathi Institutions was born from a singular vision: to eliminate the gap between medical education and clinical reality.</p>
                <p>We saw that graduates entering the workforce were academically brilliant but clinically hesitant. To solve this, we built a college explicitly attached to a fully functional 300-bed multi-specialty hospital.</p>
                <p>Every student here spends 60% of their learning time inside the Revathi Medical Center, training under real stress, with real patients, and real-time guidance from senior medical consultants.</p>
                <Link href="/about" className="flex items-center gap-2 text-accent font-black text-xs uppercase tracking-widest hover:translate-x-2 transition-transform pt-4 w-fit">Read Our Full History <ArrowRight size={14} /></Link>
             </div>
          </div>
        </div>
      </section>

      {/* ── Why Revathi ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none"></div>
         <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center mb-16">
               <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-4">The Revathi Advantage</h2>
               <h3 className="text-4xl md:text-5xl font-black font-display tracking-tight">Why Choose Us?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="w-14 h-14 bg-accent text-[#0F3D3D] rounded-2xl flex items-center justify-center mb-6">
                     <Building2 size={28} />
                  </div>
                  <h4 className="text-xl font-black font-display mb-4">300-Bed Parent Hospital</h4>
                  <p className="text-white/60 font-medium leading-relaxed">Immediate clinical exposure from your first year inside our NABH-accredited multi-specialty medical center.</p>
               </div>
               <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="w-14 h-14 bg-accent text-[#0F3D3D] rounded-2xl flex items-center justify-center mb-6">
                     <TrendingUp size={28} />
                  </div>
                  <h4 className="text-xl font-black font-display mb-4">100% Placement Support</h4>
                  <p className="text-white/60 font-medium leading-relaxed">Dedicated career cell ensuring seamless transitions into top corporate hospitals in Chennai, Coimbatore, and Bangalore.</p>
               </div>
               <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="w-14 h-14 bg-accent text-[#0F3D3D] rounded-2xl flex items-center justify-center mb-6">
                     <Users size={28} />
                  </div>
                  <h4 className="text-xl font-black font-display mb-4">Global Network</h4>
                  <p className="text-white/60 font-medium leading-relaxed">Join an elite alumni association of 2500+ professionals serving in healthcare facilities across 12+ countries.</p>
               </div>
            </div>
         </div>
      </section>

      {/* ── Specialisations ────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8FAFB] scroll-mt-20">
         <div className="max-w-7xl mx-auto px-4 lg:px-8">
             <div className="text-center mb-16">
               <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-4">Academic Depth</h2>
               <h3 className="text-4xl md:text-5xl font-black text-primary font-display tracking-tight">Centers of <span className="text-accent underline decoration-primary/10">Excellence.</span></h3>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/courses/bsc-nursing" className="group bg-white p-8 rounded-3xl shadow-sm border border-primary/5 hover:shadow-xl hover:-translate-y-1 transition-all flex items-start gap-6">
                   <div className="p-4 bg-primary/5 text-primary rounded-2xl flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <HeartPulse size={32} />
                   </div>
                   <div>
                      <h4 className="text-2xl font-black text-primary font-display mb-2">College of Nursing</h4>
                      <p className="text-primary/60 font-medium leading-relaxed mb-4">B.Sc Nursing, Post Basic B.Sc, and specialized diploma programs focusing on intensive patient care.</p>
                      <span className="text-[10px] font-black uppercase tracking-widest text-accent flex items-center gap-2">Explore Programs <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></span>
                   </div>
                </Link>
                <Link href="/courses/b-pharm" className="group bg-white p-8 rounded-3xl shadow-sm border border-primary/5 hover:shadow-xl hover:-translate-y-1 transition-all flex items-start gap-6">
                   <div className="p-4 bg-primary/5 text-primary rounded-2xl flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Microscope size={32} />
                   </div>
                   <div>
                      <h4 className="text-2xl font-black text-primary font-display mb-2">College of Paramedical</h4>
                      <p className="text-primary/60 font-medium leading-relaxed mb-4">Advanced degrees in Pharmacy, Optometry, Radiology, and MLT providing crucial diagnostic support.</p>
                      <span className="text-[10px] font-black uppercase tracking-widest text-accent flex items-center gap-2">Explore Programs <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></span>
                   </div>
                </Link>
                <Link href="/courses/bpt" className="group bg-white p-8 rounded-3xl shadow-sm border border-primary/5 hover:shadow-xl hover:-translate-y-1 transition-all flex items-start gap-6">
                   <div className="p-4 bg-primary/5 text-primary rounded-2xl flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Stethoscope size={32} />
                   </div>
                   <div>
                      <h4 className="text-2xl font-black text-primary font-display mb-2">Institute of Physiotherapy</h4>
                      <p className="text-primary/60 font-medium leading-relaxed mb-4">BPT degrees blending biomechanics, neurology, and orthopedics to restore human mobility.</p>
                      <span className="text-[10px] font-black uppercase tracking-widest text-accent flex items-center gap-2">Explore Programs <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></span>
                   </div>
                </Link>
                <Link href="/courses/bot" className="group bg-white p-8 rounded-3xl shadow-sm border border-primary/5 hover:shadow-xl hover:-translate-y-1 transition-all flex items-start gap-6">
                   <div className="p-4 bg-primary/5 text-primary rounded-2xl flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <CheckCircle2 size={32} />
                   </div>
                   <div>
                      <h4 className="text-2xl font-black text-primary font-display mb-2">Occupational Therapy</h4>
                      <p className="text-primary/60 font-medium leading-relaxed mb-4">Specialized BOT program enabling patients to overcome physical and cognitive barriers in daily life.</p>
                      <span className="text-[10px] font-black uppercase tracking-widest text-accent flex items-center gap-2">Explore Programs <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></span>
                   </div>
                </Link>
             </div>
         </div>
      </section>

      {/* ── Gallery Grid ──────────────────────────────────────────────────── */}
      <section id="gallery" className="py-24 bg-primary text-white scroll-mt-20">
         <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-4">Campus & Infrastructure</h2>
              <h3 className="text-4xl md:text-5xl font-black font-display tracking-tight">World-Class <span className="text-accent underline decoration-white/10">Clinical Environment.</span></h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
               {galleryImages.map((img, idx) => (
                 <div key={idx} className={`relative overflow-hidden group rounded-3xl ${idx === 0 || idx === 3 ? "lg:col-span-2" : ""}`}>
                    <img src={img} className="w-full h-80 object-cover group-hover:scale-125 transition-all duration-1000 grayscale group-hover:grayscale-0" alt="Campus" />
                    <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <Link href="/gallery" className="px-6 py-3 bg-accent text-[#0F3D3D] font-black text-xs uppercase tracking-widest rounded-xl hover:scale-105 transition-transform">View High-Res</Link>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* ── Contact / Admissions Info ─────────────────────────────────────── */}
      <section id="contact" className="py-24 bg-white scroll-mt-20">
         <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="bg-[#F8FAFB] rounded-[40px] p-8 md:p-20 flex flex-col lg:flex-row gap-20">
               <div className="lg:w-1/2">
                  <h3 className="text-3xl font-black text-primary font-display uppercase tracking-tight mb-10">Visit Our Campus</h3>
                  <div className="space-y-10">
                     <div className="flex gap-6">
                        <div className="p-4 bg-white rounded-2xl shadow-sm h-fit text-accent"><MapPin size={28} /></div>
                        <div>
                           <h4 className="font-black text-primary text-xs uppercase tracking-widest mb-2">Main Campus Address</h4>
                           <p className="text-primary/60 font-medium text-lg leading-relaxed">Ganani Bus Stop, Coimbatore Bypass, <br/>Avinashi (TK), Tirupur – 641654</p>
                        </div>
                     </div>
                     <div className="flex gap-6">
                        <div className="p-4 bg-white rounded-2xl shadow-sm h-fit text-accent"><Mail size={28} /></div>
                        <div>
                           <h4 className="font-black text-primary text-xs uppercase tracking-widest mb-2">Electronic Enquiries</h4>
                           <p className="text-primary/60 font-medium text-sm lg:text-base leading-snug">counsellor1@revathiinstitutions.com <br/>counsellor2@revathiinstitutions.com</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="lg:w-1/2 bg-primary rounded-3xl p-10 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-full"></div>
                  <h4 className="text-2xl font-black font-display uppercase tracking-tight mb-6">Need Immediate Help?</h4>
                  <p className="text-white/60 font-medium leading-relaxed mb-10">Our academic counsellors are available Monday to Saturday, 9:00 AM to 6:00 PM to help you with the selection process.</p>
                  <a href="tel:+919842202288" className="flex items-center gap-4 bg-accent text-[#0F3D3D] p-6 rounded-2xl justify-center font-black text-xl uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-transform">
                     <Phone size={24} /> Admission Team: 9842202288
                  </a>
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="bg-primary text-white/40 py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="font-black text-3xl text-white font-display uppercase tracking-tighter mb-8">
            Revathi <span className="text-accent">Institutions</span>
          </div>

          <div className="flex items-center justify-center gap-6 mb-8">
             <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-accent hover:text-[#0F3D3D] hover:scale-110 transition-all">
                <Facebook size={18} />
             </a>
             <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-accent hover:text-[#0F3D3D] hover:scale-110 transition-all">
                <Instagram size={18} />
             </a>
             <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-accent hover:text-[#0F3D3D] hover:scale-110 transition-all">
                <Linkedin size={18} />
             </a>
             <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-accent hover:text-[#0F3D3D] hover:scale-110 transition-all">
                <Youtube size={18} />
             </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-12 text-[10px] font-black uppercase tracking-[0.2em]">
             <Link href="/about" className="hover:text-accent transition-colors">Our Story</Link>
             <Link href="/courses" className="hover:text-accent transition-colors">Academic Programs</Link>
             <Link href="/placements" className="hover:text-accent transition-colors">Placement Cell</Link>
             <Link href="/gallery" className="hover:text-accent transition-colors">Campus Life</Link>
             <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Lexicon</Link>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest">&copy; 2026 Revathi Institutions. Empowering Healthcare Leaders.</p>
        </div>
      </footer>

    </div>
  );
}
