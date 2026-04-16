import Link from "next/link";
import { CheckCircle2, HelpCircle, FileText, ClipboardList } from "lucide-react";
import { AdmissionsFeatureSteps } from "@/components/admissions/AdmissionsFeatureSteps";

export default function AdmissionsPage() {
  const processSteps = [
    { title: "Application Submission", desc: "Submit your online application form with personal details.", icon: <ClipboardList size={20}/> },
    { title: "Document Verification", desc: "Upload or physical verification of 10th & 12th marksheets and ID proofs.", icon: <FileText size={20}/> },
    { title: "Entrance/Counseling", desc: "Attend the mandatory counseling session for course allocation.", icon: <HelpCircle size={20}/> },
    { title: "Fee Payment & Enrollment", desc: "Secure your seat by paying the admission fee.", icon: <CheckCircle2 size={20}/> }
  ];

  return (
    <div className="bg-bg-light min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-4 bg-accent text-text-dark font-black text-xs uppercase tracking-widest mb-4 rounded-sm shadow-sm">
            Enrollment 2026
          </div>
          <h1 className="text-5xl font-black text-primary font-display mb-6 tracking-tight">Admissions Process</h1>
          <p className="text-lg text-text-dark/70 font-semibold leading-relaxed max-w-2xl mx-auto">
            Take the first step towards an elite healthcare career. Our admission process is transparent, merit-based, and straightforward.
          </p>
        </div>

        {/* Admission Process Steps */}
        <AdmissionsFeatureSteps />

        {/* Required Documents */}
        <div className="bg-primary text-bg-light rounded-xl shadow-2xl p-8 md:p-12 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-black mb-6 font-display uppercase tracking-tight flex items-center gap-3">
              <span className="material-symbols-outlined text-accent">folder_open</span> Required Documents
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-4 font-semibold text-sm text-bg-light/90">
                <li className="flex gap-3"><CheckCircle2 className="text-accent shrink-0" size={20} /> SSLC / 10th Marksheet (Original & Photocopy)</li>
                <li className="flex gap-3"><CheckCircle2 className="text-accent shrink-0" size={20} /> HSC / 12th Marksheet (Original & Photocopy)</li>
                <li className="flex gap-3"><CheckCircle2 className="text-accent shrink-0" size={20} /> Transfer Certificate (TC)</li>
              </ul>
              <ul className="space-y-4 font-semibold text-sm text-bg-light/90">
                <li className="flex gap-3"><CheckCircle2 className="text-accent shrink-0" size={20} /> Community Certificate</li>
                <li className="flex gap-3"><CheckCircle2 className="text-accent shrink-0" size={20} /> Aadhar Card Copy</li>
                <li className="flex gap-3"><CheckCircle2 className="text-accent shrink-0" size={20} /> 5 Passport Size Photographs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-black text-text-dark mb-6 font-display uppercase tracking-tight">Ready to Command Your Future?</h3>
          <Link href="https://apply.revathiinstitutions.com/" className="inline-block bg-accent text-text-dark px-12 py-5 font-black uppercase tracking-widest hover:bg-primary hover:text-bg-light transition-all shadow-xl rounded-lg">
            Start the Application
          </Link>
        </div>

      </div>
    </div>
  );
}
