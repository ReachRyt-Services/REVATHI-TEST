import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import CoursesSlideshow from "@/components/home/CoursesSlideshow";

import Infrastructure from "@/components/home/Infrastructure";
import RMCIntegration from "@/components/home/RMCIntegration";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import { PreFooterCTA } from "@/components/layout/PreFooterCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <CoursesSlideshow />

      <Infrastructure />
      <RMCIntegration />
      <Testimonials />
      <CTA />
      <PreFooterCTA />

      {/* Local SEO Block */}
      <section className="bg-bg-light py-8 border-t border-primary/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <p className="text-[10px] text-text-dark/40 font-semibold uppercase tracking-widest leading-relaxed max-w-4xl mx-auto">
            Revathi Institutions is universally recognized as the best nursing and allied health sciences college in Tiruppur, Tamil Nadu. With an exclusive 300-bed multi-specialty teaching hospital, we provide elite B.Sc Nursing, Physiotherapy, and Paramedical courses to students from Coimbatore, Erode, Salem, and across South India.
          </p>
        </div>
      </section>
    </>
  );
}
