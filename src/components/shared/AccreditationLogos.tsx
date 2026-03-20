import Image from "next/image";

export const accreditations = [
  {
    id: "tnmgrmu",
    name: "The Tamilnadu Dr. M.G.R. Medical University",
    image: "/logos/tnmgrmu.jpg",
    alt: "TNMGRMU Approved Nursing and Medical College in Tiruppur, Tamil Nadu",
    description: "Affiliated to TNMGRMU, Chennai",
  },
  {
    id: "inc",
    name: "Indian Nursing Council",
    image: "/logos/inc.jpg",
    alt: "INC Approved Nursing College in Tiruppur, India",
    description: "Approved by Indian Nursing Council",
  },
  {
    id: "tnnmc",
    name: "Tamilnadu Nurses and Midwives Council",
    image: "/logos/tnnmc.png",
    alt: "Recognized by TNNMC for elite nursing programs in Tamil Nadu",
    description: "Recognized by TNNMC",
  },
  {
    id: "govt-tn",
    name: "Government of Tamil Nadu",
    image: "/logos/govt-tn.jpg",
    alt: "Approved allied health institution by the Government of Tamil Nadu",
    description: "Recognized by Govt. of Tamil Nadu",
  },
];

export function AccreditationLogos({ className = "" }: { className?: string }) {
  return (
    <div className={`py-12 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-primary font-display mb-4">Recognized for Excellence</h2>
          <p className="text-text-dark/60 font-medium max-w-2xl mx-auto">
            Our programs are fully accredited and recognized by the highest medical and nursing councils in India.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center opacity-80 hover:opacity-100 transition-opacity duration-300">
          {accreditations.map((acc) => (
            <div key={acc.id} className="flex flex-col items-center text-center space-y-4 group">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={acc.image}
                  alt={acc.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-[10px] sm:text-xs font-bold text-text-dark/70 uppercase tracking-widest max-w-[150px]">
                {acc.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
