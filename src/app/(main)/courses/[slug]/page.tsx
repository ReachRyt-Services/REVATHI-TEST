import { notFound } from "next/navigation";
import { getCourseBySlug, coursesData } from "@/lib/data/courses";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CourseHeroSection } from "@/components/ui/hero-section-2";

// ── Static paths ──────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return coursesData.map((course) => ({ slug: course.slug }));
}

// ── SEO metadata ──────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) {
    return {
      title: "Course Not Found | Revathi Institutions",
      description: "The requested course could not be found.",
    };
  }
  return {
    title: course.seoTitle,
    description: course.seoDescription,
    openGraph: {
      title: course.seoTitle,
      description: course.seoDescription,
      images: [{ url: course.heroImage, width: 1200, height: 630, alt: course.title }],
    },
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  // Split long titles elegantly: first chunk is the "headline"
  const titleParts = course.title.split(":");
  const headline = titleParts[0].trim();
  const tagline  = titleParts[1]?.trim() ?? "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.overview,
    "provider": {
      "@type": "CollegeOrUniversity",
      "name": "Revathi Institutions",
      "sameAs": "https://revathi.edu.in"
    },
    "courseCode": course.courseCode,
    "educationalCredentialAwarded": course.title.includes("B.Sc.") || course.title.includes("Bachelor") || course.title.includes("M.Sc.") || course.title.includes("Master") ? "Degree" : "Diploma",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Onsite",
      "location": {
        "@type": "Place",
        "name": "Revathi Medical Center Campus",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Tirupur",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        }
      }
    }
  };

  return (
    <div className="bg-bg-light min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


      {/* ── Animated hero (Client Component, full-bleed) ── */}
      <CourseHeroSection
        logo={{
          url: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&q=80&w=80&h=80",
          alt: "Revathi Institutions",
          text: course.school,
        }}

        slogan={`COURSE CODE: ${course.courseCode}`}
        title={
          <>
            {headline}
            {tagline && (
              <>
                <br />
                <span className="text-[#F2A007]">{tagline}</span>
              </>
            )}
          </>
        }
        subtitle="Empowering the next generation of healthcare leaders through rigorous clinical mastery and direct 300-bed hospital integration."
        callToAction={{ text: "APPLY ONLINE NOW", href: "https://apply.revathiinstitutions.com/" }}
        backgroundImage={course.heroImage}
        contactInfo={{
          website: "revathiinstitutions.com",
          phone: "Admission Team: 9842202288",
          address: "Ganani Bus Stop, Coimbatore Bypass, Tirupur",
        }}
      />

      {/* ── Stats band ───────────────────────────────────────────────────────── */}
      <div className="border-b border-primary/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-5 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 sm:gap-10">
            {[
              { label: "Format",  value: course.format },
              { label: "Tuition", value: course.tuition },
              { label: "Units",   value: course.units  },
            ].map((s, i) => (
              <div key={i} className="text-center md:text-left">
                <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-text-dark/40 mb-0.5">{s.label}</p>
                <p className="font-bold text-primary text-base sm:text-lg leading-tight">{s.value}</p>
              </div>
            ))}
          </div>
          <Link
            href="https://apply.revathiinstitutions.com/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 shrink-0 bg-[#F2A007] text-[#0F3D3D] px-8 py-3.5 font-black uppercase tracking-widest text-xs sm:text-sm rounded-xl hover:bg-[#003366] hover:text-white transition-all duration-300 shadow-md group"
          >
            Enroll Now <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
          </Link>
        </div>
      </div>

      {/* ── Body ─────────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24 mb-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* ─ Left: content ─ */}
          <div className="lg:w-2/3 space-y-16">

            {/* Program note */}
            <div className="relative bg-blue-50 border border-blue-100 rounded-xl p-6 pl-8 text-sm text-text-dark/80 font-medium leading-relaxed overflow-hidden">
              <div className="absolute left-0 inset-y-0 w-1 bg-[#008080] rounded-l-xl" />
              <strong className="block text-[#008080] font-black mb-1 uppercase text-[10px] tracking-widest">Program Note</strong>
              {course.notes}
            </div>

            {/* Overview */}
            <div>
              <h2 className="text-3xl font-display font-black text-[#003366] mb-6 tracking-tight">Program Overview</h2>
              <p className="text-lg text-text-dark/70 font-medium leading-relaxed">{course.overview}</p>
            </div>

            {/* Who should take */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-text-dark mb-6 tracking-tight">Who Should Take This Course</h2>
              <ul className="space-y-3">
                {course.whoShouldTake.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-primary/5 hover:border-[#008080]/30 transition-colors shadow-sm">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#F2A007] shrink-0" />
                    <span className="text-sm sm:text-base text-text-dark/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What you'll learn */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-text-dark mb-6 tracking-tight">What You'll Learn</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.whatYoullLearn.map((item, i) => (
                  <div key={i} className="bg-white border border-primary/10 rounded-xl p-5 sm:p-6 shadow-sm flex flex-col">
                    <div className="text-4xl sm:text-5xl font-black text-[#003366]/10 mb-3 leading-none">{`0${i + 1}`}</div>
                    <p className="text-sm sm:text-base text-text-dark/80 font-semibold leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Accreditation */}
            <div className="relative bg-[#003366] text-white rounded-2xl p-10 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#008080] rounded-full blur-[120px] opacity-25 pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-3xl font-display font-black mb-4 tracking-tight">Accreditation &amp; Approvals</h2>
                <p className="mb-8 text-white/70 font-medium leading-relaxed text-lg">{course.accreditationText}</p>
                {course.counselingCode && (
                  <div className="mb-8 inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/10 shadow-inner">
                    <div className="flex flex-col">
                      <span className="text-[#F2A007] font-black text-[10px] tracking-[0.2em] uppercase mb-1">Counseling Code</span>
                      <span className="text-3xl font-black text-white tracking-tighter">{course.counselingCode}</span>
                    </div>
                  </div>
                )}
                <p className="mb-4 text-[#F2A007] font-black text-xs uppercase tracking-widest">Recognized By</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {course.accreditationList.map((item, i) => {
                    const lItem = item.toLowerCase();
                    let logoUrl = null;
                    if (lItem.includes("mgr") || lItem.includes("tnmgrmu")) logoUrl = "/logos/tnmgrmu.jpg";
                    else if (lItem.includes("indian nursing council") || lItem.includes("inc")) logoUrl = "/logos/inc.jpg";
                    else if (lItem.includes("nurses and midwives") || lItem.includes("tnnmc")) logoUrl = "/logos/tnnmc.png";
                    else if (lItem.includes("government of tamil nadu")) logoUrl = "/logos/govt-tn.jpg";

                    return (
                      <div key={i} className="bg-white/10 hover:bg-white/20 transition-colors border border-white/20 p-4 rounded-xl flex items-center gap-4">
                        {logoUrl ? (
                          <div className="relative w-12 h-12 shrink-0 bg-white rounded-lg p-1.5 shadow-inner">
                            <img src={logoUrl} alt={`${item} Accreditation`} className="w-full h-full object-contain mix-blend-multiply" />
                          </div>
                        ) : (
                          <div className="w-2 h-2 rounded-full bg-[#F2A007] shrink-0" />
                        )}
                        <span className="text-white/90 font-semibold text-sm leading-snug">{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

          {/* ─ Right: sticky sidebar ─ */}
          <div className="lg:w-1/3">
            <div className="sticky top-28 space-y-6">

              {/* Course image card */}
              <div className="rounded-2xl overflow-hidden shadow-2xl relative group">
                <img
                  src={course.heroImage}
                  alt={`${course.title}`}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-black font-display text-xl leading-snug border-l-4 border-[#F2A007] pl-4">
                    {course.shortTitle}
                  </p>
                </div>
              </div>

               {/* Syllabus CTA */}
              <div className="bg-white border border-primary/10 rounded-2xl p-6 sm:p-8 text-center shadow-md">
                <div className="w-12 h-12 bg-bg-light text-[#003366] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <line x1="10" y1="9" x2="8" y2="9" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-black text-text-dark mb-2 font-display">Download Syllabus</h3>
                <p className="text-xs sm:text-sm text-text-dark/60 mb-6 font-medium">Full curriculum breakdown &amp; fee structure.</p>
                <a
                  href="/downloads"
                  className="block w-full py-3 bg-bg-light text-[#003366] font-bold uppercase tracking-widest text-[10px] sm:text-xs rounded-xl hover:bg-[#003366] hover:text-white transition-colors"
                >
                  Get PDF
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
