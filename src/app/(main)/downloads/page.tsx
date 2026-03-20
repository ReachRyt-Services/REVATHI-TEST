import { FileDown, FileText, CheckCircle2 } from "lucide-react";

export default function DownloadsPage() {
  const downloadCategories = [
    {
      title: "Brochures & Prospectus",
      files: [
        { name: "Revathi Institutions Primary Brochure 2026", size: "4.2 MB", type: "PDF" },
        { name: "B.Sc. Nursing Detailed Syllabus & Scope", size: "2.1 MB", type: "PDF" },
        { name: "Allied Health Sciences Department Overview", size: "3.5 MB", type: "PDF" }
      ]
    },
    {
      title: "Admission Forms",
      files: [
        { name: "Offline Application Form - Undergraduate", size: "1.1 MB", type: "PDF" },
        { name: "Hostel Admission Request Form", size: "0.8 MB", type: "PDF" },
        { name: "Medical Fitness Certificate Template", size: "0.5 MB", type: "PDF" }
      ]
    },
    {
      title: "Academic Calendars",
      files: [
        { name: "Academic Calendar 2025-2026", size: "1.5 MB", type: "PDF" },
        { name: "Examination Schedule Term 1", size: "0.9 MB", type: "PDF" }
      ]
    }
  ];

  return (
    <div className="bg-bg-light min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-block py-1 px-4 bg-accent text-text-dark font-black text-xs uppercase tracking-widest mb-4 rounded-sm shadow-sm">
            Resources
          </div>
          <h1 className="text-5xl font-black text-primary font-display mb-6 tracking-tight">Downloads</h1>
          <p className="text-lg text-text-dark/70 font-semibold leading-relaxed">
            Access essential documents, brochures, and application forms instantly.
          </p>
        </div>

        <div className="space-y-12">
          {downloadCategories.map((category, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] border border-primary/10 overflow-hidden">
              <div className="bg-primary px-8 py-5 border-b border-primary/20 flex items-center justify-between">
                <h2 className="text-xl font-black text-bg-light uppercase tracking-tight font-display">{category.title}</h2>
                <FileText className="text-accent" />
              </div>
              
              <ul className="divide-y divide-primary/5">
                {category.files.map((file, fileIdx) => (
                  <li key={fileIdx} className="p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-bg-light/50 transition-colors group">
                    <div className="flex items-start gap-4 mb-4 sm:mb-0">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0 group-hover:bg-primary group-hover:text-bg-light transition-all">
                        <FileDown size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-text-dark text-lg group-hover:text-primary transition-colors">{file.name}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-xs font-black uppercase tracking-widest text-accent bg-accent/10 px-2 py-0.5 rounded">{file.type}</span>
                          <span className="text-sm font-semibold text-text-dark/50">{file.size}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="flex items-center justify-center gap-2 border-2 border-primary text-primary font-black px-6 py-3 uppercase tracking-widest text-xs rounded-lg hover:bg-primary hover:text-bg-light transition-all sm:w-auto w-full">
                      Download
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Instruction block */}
        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-6 flex items-start gap-4">
          <CheckCircle2 className="text-primary shrink-0 mt-1" />
          <p className="text-sm font-semibold text-text-dark/80 leading-relaxed">
            Note: All forms should be printed on A4 size paper. Offline applications must be physically mailed or submitted directly at the main campus admissions office along with necessary demand drafts.
          </p>
        </div>

      </div>
    </div>
  );
}
