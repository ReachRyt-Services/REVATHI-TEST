import React from 'react';
import './tailwind-overrides.css';

export default function StudyWorldRathinamPage() {
  return (
    <div className="bg-background font-body text-on-background selection:bg-secondary selection:text-white">
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex flex-col bg-white dark:bg-slate-900">
        
        {/* Utility Row */}
        <div className="bg-slate-50 dark:bg-slate-800 py-2 px-8 flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <div className="flex items-center gap-2 text-primary font-label text-xs uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">call</span>
              <span>+91 844 844 8909</span>
            </div>
            <div className="flex items-center gap-2 text-primary font-label text-xs uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">mail</span>
              <span>admission@rathinam.in</span>
            </div>
            <div className="flex items-center gap-2 text-primary font-label text-xs uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">location_on</span>
              <span>Coimbatore</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img alt="Partner Logo 1" className="h-6 opacity-80" src="/rathinam/partner1.png" />
            <img alt="Partner Logo 2" className="h-6 opacity-80" src="/rathinam/partner2.png" />
          </div>
        </div>

        {/* Main Navigation Row */}
        <nav className="bg-primary-container text-on-primary-container h-16 flex items-center justify-between px-8">
          <div className="text-2xl font-black text-white tracking-tighter uppercase font-headline">
            Rathinam Group
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-pink-600 dark:text-pink-400 font-bold border-b-2 border-pink-600 pb-1 font-label text-xs uppercase tracking-widest" href="#">Overview</a>
            <a className="text-white/90 dark:text-slate-300 font-medium hover:text-white transition-colors font-label text-xs uppercase tracking-widest" href="#">Why Rathinam</a>
            <a className="text-white/90 dark:text-slate-300 font-medium hover:text-white transition-colors font-label text-xs uppercase tracking-widest" href="#">Courses</a>
            <a className="text-white/90 dark:text-slate-300 font-medium hover:text-white transition-colors font-label text-xs uppercase tracking-widest" href="#">How to Apply</a>
            <a className="text-white/90 dark:text-slate-300 font-medium hover:text-white transition-colors font-label text-xs uppercase tracking-widest" href="#">Campus Life</a>
            <a className="text-white/90 dark:text-slate-300 font-medium hover:text-white transition-colors font-label text-xs uppercase tracking-widest" href="#">Contact</a>
          </div>
          <button className="bg-secondary text-white px-6 py-2 font-bold text-xs uppercase tracking-widest hover:bg-secondary-container transition-all hover:-translate-y-0.5 active:scale-95">
            Apply Now
          </button>
        </nav>
      </header>

      <main className="mt-28">
        {/* Hero Section */}
        <section className="relative min-h-[870px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover brightness-75" alt="Campus Hero" src="/rathinam/hero.jpg" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
          </div>
          <div className="container mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-white">
              <h4 className="font-label text-secondary font-bold tracking-[0.3em] uppercase mb-4">Empowering Generations</h4>
              <h1 className="font-headline font-black text-5xl md:text-7xl leading-none tracking-tighter mb-8 uppercase">
                Welcome to a<br />
                <span className="text-secondary-fixed">whole new</span><br />
                learning experience
              </h1>
              <p className="text-lg text-white/80 max-w-lg font-body leading-relaxed mb-8">
                Rathinam Group of Institutions offers a unique ecosystem where education meets industry requirements through innovation, research, and experiential learning.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all">Explore Campus</button>
                <button className="border-2 border-white text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all">Virtual Tour</button>
              </div>
            </div>

            {/* Right Content (Programs Box) */}
            <div className="bg-white/95 backdrop-blur-md p-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>
              <h2 className="font-headline font-black text-3xl text-primary-container mb-8 uppercase tracking-tighter">Programs Offered</h2>
              <div className="flex flex-col gap-3">
                <a className="flex justify-between items-center p-4 bg-surface-container-low hover:bg-secondary hover:text-white transition-all group/item" href="#">
                  <span className="font-bold tracking-tight text-primary group-hover/item:text-white">ARTS AND SCIENCE</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
                <a className="flex justify-between items-center p-4 bg-surface-container-low hover:bg-secondary hover:text-white transition-all group/item" href="#">
                  <span className="font-bold tracking-tight text-primary group-hover/item:text-white">ENGINEERING</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
                <a className="flex justify-between items-center p-4 bg-surface-container-low hover:bg-secondary hover:text-white transition-all group/item" href="#">
                  <span className="font-bold tracking-tight text-primary group-hover/item:text-white">PHARMACY</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
                <a className="flex justify-between items-center p-4 bg-surface-container-low hover:bg-secondary hover:text-white transition-all group/item" href="#">
                  <span className="font-bold tracking-tight text-primary group-hover/item:text-white">MBA</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
                <a className="flex justify-between items-center p-4 bg-secondary text-white hover:bg-primary-container transition-all group/item" href="#">
                  <span className="font-bold tracking-tight">INTERNATIONAL ADMISSIONS</span>
                  <span className="material-symbols-outlined">public</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-surface-container-low py-20 px-8">
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl font-black text-primary font-headline tracking-tighter">40+</div>
              <div className="text-on-surface-variant font-label text-xs uppercase tracking-widest mt-2">Years of Excellence</div>
            </div>
            <div>
              <div className="text-5xl font-black text-primary font-headline tracking-tighter">50+</div>
              <div className="text-on-surface-variant font-label text-xs uppercase tracking-widest mt-2">Courses Offered</div>
            </div>
            <div>
              <div className="text-5xl font-black text-primary font-headline tracking-tighter">15k+</div>
              <div className="text-on-surface-variant font-label text-xs uppercase tracking-widest mt-2">Success Stories</div>
            </div>
            <div>
              <div className="text-5xl font-black text-primary font-headline tracking-tighter">500+</div>
              <div className="text-on-surface-variant font-label text-xs uppercase tracking-widest mt-2">Global Placements</div>
            </div>
          </div>
        </section>

        {/* Four Pillars Section */}
        <section className="py-24 px-8 container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline font-black text-4xl text-primary uppercase tracking-tighter mb-4">Why Choose Rathinam</h2>
            <div className="h-1 w-24 bg-secondary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface-container-lowest p-8 flex flex-col items-center text-center transition-all duration-300 hover:translate-y-[-8px]">
              <div className="w-16 h-16 bg-primary-container/10 flex items-center justify-center text-primary-container mb-6">
                <span className="material-symbols-outlined text-4xl">school</span>
              </div>
              <h3 className="font-headline font-bold text-lg text-primary uppercase tracking-tight mb-4">Top Notch Faculty</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Experienced academicians and industry practitioners dedicated to mentoring the next generation of leaders.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 flex flex-col items-center text-center transition-all duration-300 hover:translate-y-[-8px]">
              <div className="w-16 h-16 bg-primary-container/10 flex items-center justify-center text-primary-container mb-6">
                <span className="material-symbols-outlined text-4xl">domain</span>
              </div>
              <h3 className="font-headline font-bold text-lg text-primary uppercase tracking-tight mb-4">State of the Art Facilities</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">High-tech labs, expansive libraries, and modern sports complexes providing a comprehensive campus experience.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 flex flex-col items-center text-center transition-all duration-300 hover:translate-y-[-8px]">
              <div className="w-16 h-16 bg-primary-container/10 flex items-center justify-center text-primary-container mb-6">
                <span className="material-symbols-outlined text-4xl">groups</span>
              </div>
              <h3 className="font-headline font-bold text-lg text-primary uppercase tracking-tight mb-4">Strong Community</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">A vibrant alumni network and industry partnerships that open doors to global opportunities for every student.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 flex flex-col items-center text-center transition-all duration-300 hover:translate-y-[-8px]">
              <div className="w-16 h-16 bg-primary-container/10 flex items-center justify-center text-primary-container mb-6">
                <span className="material-symbols-outlined text-4xl">lightbulb</span>
              </div>
              <h3 className="font-headline font-bold text-lg text-primary uppercase tracking-tight mb-4">Experiential Learning</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Hands-on projects, internships, and research-led education ensuring practical expertise from day one.</p>
            </div>
          </div>
        </section>

        {/* Asymmetric CTA Section */}
        <section className="mt-24 px-8 overflow-hidden">
          <div className="container mx-auto bg-primary-container text-white p-0 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
              <h2 className="font-headline font-black text-4xl md:text-5xl uppercase tracking-tighter mb-6 leading-tight">Your future begins at<br />Rathinam campus.</h2>
              <p className="text-white/80 mb-10 text-lg">Join a community of 15,000+ students and shape your career with world-class education and industry-aligned training.</p>
              <div>
                <button className="bg-secondary text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all">Start Application</button>
              </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
              <img className="w-full h-full object-cover" alt="CTA Images" src="/rathinam/campus.jpg" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-purple-950 dark:bg-black w-full py-12 px-8 mt-24">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="md:col-span-1">
            <div className="text-xl font-bold text-white mb-4 uppercase font-headline tracking-tighter">Rathinam Group</div>
            <p className="text-slate-300 text-sm font-body leading-relaxed">
              Evolving education through technology, research, and a commitment to institutional excellence since 1979.
            </p>
            <div className="flex gap-4 mt-6">
              <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary cursor-pointer transition-colors">
                <span className="material-symbols-outlined text-white text-lg">share</span>
              </span>
              <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary cursor-pointer transition-colors">
                <span className="material-symbols-outlined text-white text-lg">hub</span>
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-pink-600 font-headline font-semibold tracking-wide uppercase text-sm mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><a className="text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block" href="#">Academic Calendar</a></li>
              <li><a className="text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block" href="#">Alumni Network</a></li>
              <li><a className="text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block" href="#">Careers</a></li>
              <li><a className="text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block" href="#">Privacy Policy</a></li>
              <li><a className="text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block" href="#">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-pink-600 font-headline font-semibold tracking-wide uppercase text-sm mb-6">Institutions</h4>
            <ul className="flex flex-col gap-3">
              <li><a className="text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block" href="#">College of Arts and Science</a></li>
              <li><a className="text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block" href="#">Technical Campus (Engineering)</a></li>
              <li><a className="text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block" href="#">School of Management</a></li>
              <li><a className="text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block" href="#">International Public School</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-pink-600 font-headline font-semibold tracking-wide uppercase text-sm mb-6">Contact Us</h4>
            <div className="text-slate-300 text-sm flex flex-col gap-4">
              <p className="flex gap-3">
                <span className="material-symbols-outlined text-pink-600 shrink-0">pin_drop</span>
                Rathinam Techzone Campus, Pollachi Main Road, Eachanari, Coimbatore, Tamil Nadu - 641021
              </p>
              <p className="flex gap-3">
                <span className="material-symbols-outlined text-pink-600 shrink-0">call</span>
                +91 844 844 8909
              </p>
              <p className="flex gap-3">
                <span className="material-symbols-outlined text-pink-600 shrink-0">mail</span>
                admission@rathinam.in
              </p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs">
          <p>© 2024 Rathinam Group of Institutions. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a className="hover:text-white" href="#">Facebook</a>
            <a className="hover:text-white" href="#">Instagram</a>
            <a className="hover:text-white" href="#">LinkedIn</a>
            <a className="hover:text-white" href="#">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
