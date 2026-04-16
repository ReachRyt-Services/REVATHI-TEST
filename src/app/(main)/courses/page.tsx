import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Users, Building2, HeartPulse, Stethoscope, Activity } from "lucide-react";
import { coursesData } from "@/lib/data/courses";
import { PreFooterCTA } from "@/components/layout/PreFooterCTA";

export default function CoursesPage() {
  // Group courses by school
  const schools = Array.from(new Set(coursesData.map(c => c.school)));
  
  const schoolConfig: Record<string, { icon: any, color: string, description: string }> = {
    "Revathi College of Nursing": {
      icon: <HeartPulse className="text-white" size={24} />,
      color: "from-[#003366] to-[#004A99]",
      description: "Premier nursing education with direct clinical integration at Revathi Medical Center."
    },
    "Revathi College of Paramedical Sciences": {
      icon: <Stethoscope className="text-white" size={24} />,
      color: "from-[#008080] to-[#00A3A3]",
      description: "Advanced technological training in 14+ specialized allied health disciplines."
    },
    "Revathi Institute of Physiotherapy": {
      icon: <Activity className="text-white" size={24} />,
      color: "from-[#F2A007] to-[#FFB733]",
      description: "Evidence-based rehabilitation and clinical physiotherapy mastery."
    },
    "Revathi Institute of Occupational Therapy": {
      icon: <Users className="text-white" size={24} />,
      color: "from-[#0F3D3D] to-[#1A6666]",
      description: "Empowering independence through comprehensive occupational therapy training."
    }
  };

  return (
    <div className="bg-[#F8FAFB] min-h-screen">
      
      {/* ── Sub-header / Filter Bar ────────────────────────────────────────── */}
      <div className="sticky top-[72px] md:top-[100px] z-40 bg-white/80 backdrop-blur-md border-b border-primary/5 py-4">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-[10px] font-black uppercase tracking-widest text-text-dark/40 mr-4">Quick Jump:</span>
            {schools.map((school, i) => (
              <a 
                key={`${school}-${i}`} 
                href={`#${school.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-primary/5 hover:bg-primary/10 text-primary font-bold text-xs rounded-full transition-all"
              >
                {school.replace('Revathi ', '')}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-20">
        
        {/* ── Heading ────────────────────────────────────────────────────────── */}
        <div className="mb-14 md:mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 border border-primary/10 text-primary font-black text-[10px] uppercase tracking-widest mb-6 rounded-full">
            <GraduationCap size={14} /> Academic Portfolio 2026
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-primary font-display mb-6 tracking-tight leading-tight">
            Specialized <span className="text-accent underline decoration-primary decoration-4 underline-offset-8">Clinical Programs.</span>
          </h1>
          <p className="text-base sm:text-lg text-text-dark/60 font-medium leading-relaxed">
            From nursing to advanced paramedical sciences, our programs are built on the foundation of the 300-bed Revathi Medical Center.
          </p>
        </div>

        {/* ── School Sections ─────────────────────────────────────────────────── */}
        <div className="space-y-32">
          {schools.map((school, idx) => {
            const config = schoolConfig[school] || { icon: <Building2 />, color: "from-primary to-primary/80", description: "" };
            const courses = coursesData.filter(c => c.school === school);

            return (
              <section key={`${school}-${idx}`} id={school.toLowerCase().replace(/\s+/g, '-')} className="scroll-mt-40">
                {/* School Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12 border-l-4 border-primary pl-5 sm:pl-8">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${config.color} shadow-lg shadow-primary/10 shrink-0`}>
                        {config.icon}
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-black text-primary font-display uppercase tracking-tight">{school}</h2>
                    </div>
                    <p className="text-text-dark/60 font-medium text-base sm:text-lg leading-relaxed italic">
                      "{config.description}"
                    </p>
                  </div>
                  <div className="shrink-0 text-left md:text-right">
                    <div className="text-4xl sm:text-5xl font-black text-primary/5 leading-none mb-1">{courses.length}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-text-dark/40">Total Programs</div>
                  </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.map((course) => (
                    <div 
                      key={course.slug} 
                      className="group bg-white rounded-2xl border border-primary/5 shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-500 overflow-hidden flex flex-col"
                    >
                      {/* Image Area */}
                      <div className="relative h-40 sm:h-48 overflow-hidden">
                        <img 
                          src={course.heroImage} 
                          alt={course.title}
                          className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60" />
                        <div className="absolute bottom-4 left-6">
                          <span className="px-3 py-1 bg-accent text-[#0F3D3D] font-black text-[9px] uppercase tracking-widest rounded-full">
                            {course.courseCode}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 sm:p-8 flex-grow flex flex-col">
                        <h3 className="text-lg sm:text-xl font-black text-primary mb-4 leading-snug group-hover:text-accent transition-colors">
                          {course.title}
                        </h3>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center gap-2">
                             <Clock className="text-primary/40" size={14} />
                             <span className="text-[10px] font-bold text-text-dark/60">{course.format.split(',')[0]}</span>
                          </div>
                          <div className="flex items-center gap-2">
                             <Users className="text-primary/40" size={14} />
                             <span className="text-[10px] font-bold text-text-dark/60">{course.units}</span>
                          </div>
                        </div>

                        <p className="text-sm text-text-dark/70 font-medium line-clamp-2 mb-8 flex-grow">
                          {course.whoShouldTake[0]}
                        </p>
                        
                        <div className="flex items-center justify-between pt-6 border-t border-primary/5 mt-auto">
                          <Link href={`/courses/${course.slug}`} className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest hover:text-accent transition-colors">
                            Details <ArrowRight size={14} />
                          </Link>
                          <Link href="https://apply.revathiinstitutions.com/" className="px-4 py-2 bg-primary/5 hover:bg-primary text-primary hover:text-white font-bold text-[10px] uppercase tracking-widest rounded-lg transition-all">
                            Apply
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* ── Counselling CTA ────────────────────────────────────────────────── */}
        <div className="mt-20 sm:mt-32 relative overflow-hidden bg-primary rounded-3xl p-8 sm:p-12 lg:p-20 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[150px] opacity-10 pointer-events-none" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white font-display mb-6 tracking-tight">Need Career <br/><span className="text-accent underline decoration-white/20 underline-offset-8">Insight?</span></h2>
              <p className="text-white/70 text-base sm:text-lg font-medium leading-relaxed">
                Our academic counsellors in <span className="text-white font-bold">Tiruppur</span> have guided over 5,000 students to find their perfect clinical specialisation. Let's find yours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link href="/contact" className="px-6 py-4 sm:px-8 sm:py-5 bg-accent text-[#0F3D3D] font-black uppercase tracking-widest text-xs sm:text-sm rounded-xl hover:bg-white transition-all text-center shadow-lg">
                Schedule Counselling
              </Link>
              <Link href="https://apply.revathiinstitutions.com/" className="px-6 py-4 sm:px-8 sm:py-5 border-2 border-white/20 text-white font-black uppercase tracking-widest text-xs sm:text-sm rounded-xl hover:bg-white/10 transition-all text-center">
                Fast Track Application
              </Link>
            </div>
          </div>
        </div>

        {/* SEO Footer Text */}
        <div className="mt-12 text-center max-w-2xl mx-auto px-4">
          <p className="text-[10px] text-text-dark/40 font-semibold uppercase tracking-widest leading-relaxed">
            Revathi Institutions is recognized as the leading destination for Nursing and Paramedical education in Tiruppur and across Tamil Nadu. Established in 1998, we provide recognized diplomas and degrees in Physiotherapy, Occupational Therapy, and specialized Allied Health Sciences.
          </p>
        </div>

      </div>
      <PreFooterCTA />
    </div>
  );
}

function GraduationCap({ size }: { size: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}
