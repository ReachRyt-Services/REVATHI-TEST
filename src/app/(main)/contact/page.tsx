import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-bg-light min-h-screen py-16">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Revathi Institutions",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Ganani Bus Stop, Coimbatore Bypass",
              "addressLocality": "Avinashi (TK), Tirupur",
              "addressRegion": "Tamil Nadu",
              "postalCode": "641654",
              "addressCountry": "IN"
            },
            "telephone": "+91 9842202288",
            "email": "counsellor1@revathiinstitutions.com",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "11.1085",
              "longitude": "77.3411"
            },
            "openingHours": "Mo-Sa 09:00-17:00"
          }) }}
        />
      </head>
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-block py-1 px-4 bg-accent text-text-dark font-black text-xs uppercase tracking-widest mb-4 rounded-sm shadow-sm">
            Reach Out
          </div>
          <h1 className="text-5xl font-black text-primary font-display mb-6 tracking-tight">Connect With Us</h1>
          <p className="text-lg text-text-dark/70 font-semibold leading-relaxed">
            Have questions about our programs, admissions, or campus in <span className="text-primary underline decoration-accent/30 underline-offset-4">Tirupur</span>? Our administrative team is ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] border border-primary/10 flex items-start gap-6 group hover:border-accent transition-colors">
              <div className="bg-primary/10 p-4 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="font-black text-xl text-text-dark mb-2 font-display uppercase tracking-tight">Main Campus Address</h3>
                <p className="text-text-dark/70 font-semibold leading-relaxed">
                  Revathi Institutions,<br />
                  Ganani Bus Stop, Coimbatore Bypass,<br />
                  Avinashi (TK), Tirupur – 641654
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] border border-primary/10 flex items-start gap-6 group hover:border-accent transition-colors">
              <div className="bg-primary/10 p-4 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Phone size={28} />
              </div>
              <div>
                <h3 className="font-black text-xl text-text-dark mb-2 font-display uppercase tracking-tight">Phone Inquiries</h3>
                <p className="text-text-dark/70 font-semibold leading-relaxed">
                  Admission Team: 9842202288<br />
                  Admission Team: 8489968555
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] border border-primary/10 flex items-start gap-6 group hover:border-accent transition-colors">
              <div className="bg-primary/10 p-4 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Mail size={28} />
              </div>
              <div>
                <h3 className="font-black text-xl text-text-dark mb-2 font-display uppercase tracking-tight">Email Addresses</h3>
                <p className="text-text-dark/70 font-semibold leading-relaxed">
                  counsellor1@revathiinstitutions.com<br />
                  counsellor2@revathiinstitutions.com
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] border border-primary/10 flex items-start gap-6 group hover:border-accent transition-colors">
              <div className="bg-primary/10 p-4 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Clock size={28} />
              </div>
              <div>
                <h3 className="font-black text-xl text-text-dark mb-2 font-display uppercase tracking-tight">Office Timings</h3>
                <p className="text-text-dark/70 font-semibold leading-relaxed">
                  Monday to Saturday: 9:00 AM - 5:00 PM<br />
                  Sunday: Holiday
                </p>
              </div>
            </div>
          </div>

          {/* Map/Contact Form Area */}
          <div className="bg-white rounded-xl shadow-2xl border border-primary/10 overflow-hidden flex flex-col">
            {/* Map Placeholder */}
            <div className="h-64 bg-neutral-200 relative w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31329.67889244239!2d77.3194883554199!3d11.109152399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907abceacac9b%3A0x6b80261ca784013!2sTiruppur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 mix-blend-multiply hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>

            {/* Quick Enquiry Form */}
            <div className="p-8 flex-grow">
               <h3 className="text-2xl font-black text-text-dark mb-6 font-display uppercase tracking-tight">Quick Request</h3>
               <form className="space-y-5">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-4 rounded-lg border-text-dark/10 bg-bg-light focus:ring-primary focus:border-primary font-semibold text-text-dark" required />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-4 rounded-lg border-text-dark/10 bg-bg-light focus:ring-primary focus:border-primary font-semibold text-text-dark" required />
                 </div>
                 <input type="email" placeholder="Email Address" className="w-full px-4 py-4 rounded-lg border-text-dark/10 bg-bg-light focus:ring-primary focus:border-primary font-semibold text-text-dark" required />
                 <textarea placeholder="Tell us which course you are interested in..." rows={3} className="w-full px-4 py-4 rounded-lg border-text-dark/10 bg-bg-light focus:ring-primary focus:border-primary font-semibold text-text-dark" required></textarea>
                 <button className="w-full bg-primary text-bg-light font-black py-4 uppercase tracking-widest text-xs hover:bg-accent hover:text-text-dark transition-all rounded-lg shadow-md group">
                   Submit Inquiry <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                 </button>
               </form>
            </div>
          </div>

        </div>


        {/* WhatsApp Floating Hint (Static on page) */}
        <div className="mt-16 bg-gradient-to-r from-[#25D366] to-[#1DA851] rounded-xl p-8 text-white flex flex-col md:flex-row items-center justify-between shadow-lg">
          <div>
            <h3 className="text-2xl font-black mb-2 font-display uppercase tracking-tight">Want an immediate reply?</h3>
            <p className="font-semibold text-white/90">Chat directly with our admission counsellors on WhatsApp.</p>
          </div>
          <a href="https://wa.me/919842202288" target="_blank" rel="noreferrer" className="mt-6 md:mt-0 bg-white text-[#25D366] px-8 py-4 rounded-lg font-black uppercase tracking-widest shadow-md hover:scale-105 transition-transform">
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}
