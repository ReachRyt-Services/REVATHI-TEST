"use client";

import React, { useState, useEffect } from 'react';

const AWARDS = [
  { id: 1, text: '🏆 Best Engineering Campus 2025', bg: 'linear-gradient(135deg, #0a1628, #1a2c4c)' },
  { id: 2, text: '🏆 Excellence in Innovation Award', bg: 'linear-gradient(135deg, #1a2c4c, #0a1628)' },
  { id: 3, text: '🏆 Green Campus of the Year', bg: 'linear-gradient(135deg, #e8a020, #0a1628)' }
];

export default function AboutView() {
  const [currentAward, setCurrentAward] = useState(0);

  // Auto-playing carousel effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAward((prev) => (prev + 1) % AWARDS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="sw-page" id="page-about" style={{ animation: 'fadeIn 0.5s ease-in' }}>
      
      {/* 1. HERO SECTION */}
      <section className="sw-hero" style={{ minHeight: '50vh', background: 'linear-gradient(135deg, #1a2c4c 0%, #0a1628 100%)' }}>
        <div style={{ zIndex: 2 }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--sw-gold)' }}>About Us</h1>
          <p className="tagline" style={{ color: 'var(--sw-cream)' }}>A Legacy of Excellence.</p>
        </div>
      </section>

      {/* 2. VISION & MISSION CARDS */}
      <section className="sw-section-alt">
        <div className="sw-bento" style={{ gridTemplateColumns: 'repeat(2, 1fr)', paddingTop: 0 }}>
          <div className="sw-bento-card" style={{ background: 'var(--sw-navy)', color: 'var(--sw-cream)', textAlign: 'center', padding: '3rem' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👁️</div>
            <h2 style={{ color: 'var(--sw-gold)' }}>Our Vision</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>To be a global center of academic excellence, nurturing future-ready professionals who redefine human limitations through innovation, ethics, and leadership.</p>
          </div>
          <div className="sw-bento-card" style={{ background: 'var(--sw-gold)', color: 'var(--sw-navy)', textAlign: 'center', padding: '3rem' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🚀</div>
            <h2 style={{ color: 'var(--sw-navy)' }}>Our Mission</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>To empower multi-disciplinary learning, cutting-edge research, and socially responsible actions that create measurable impact on society and industries.</p>
          </div>
        </div>
      </section>

      {/* 3. HISTORY TIMELINE (Vertical Alternating) */}
      <section className="sw-section">
        <h2 className="sw-section-title">Our Milestone Journey</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div style={{ display: 'flex', gap: '2rem', padding: '1rem', background: 'var(--sw-white)', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ minWidth: '100px', color: 'var(--sw-gold)', fontSize: '1.5rem', fontWeight: 'bold' }}>1998</div>
            <div style={{ borderLeft: '3px solid var(--sw-navy)', paddingLeft: '1.5rem' }}>
              <h3 style={{ margin: '0 0 0.5rem 0' }}>Foundation Laid</h3>
              <p style={{ margin: 0, color: '#555' }}>Study World Educational Trust was formed with a mission to serve rural students.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '2rem', padding: '1rem', background: 'var(--sw-white)', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ minWidth: '100px', color: 'var(--sw-gold)', fontSize: '1.5rem', fontWeight: 'bold' }}>2002</div>
            <div style={{ borderLeft: '3px solid var(--sw-navy)', paddingLeft: '1.5rem' }}>
              <h3 style={{ margin: '0 0 0.5rem 0' }}>Engineering College Established</h3>
              <p style={{ margin: 0, color: '#555' }}>Admitted the first batch of 240 engineering students.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '2rem', padding: '1rem', background: 'var(--sw-white)', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ minWidth: '100px', color: 'var(--sw-gold)', fontSize: '1.5rem', fontWeight: 'bold' }}>2010</div>
            <div style={{ borderLeft: '3px solid var(--sw-navy)', paddingLeft: '1.5rem' }}>
              <h3 style={{ margin: '0 0 0.5rem 0' }}>Arts & Science Inception</h3>
              <p style={{ margin: 0, color: '#555' }}>Expanded academic offerings with multi-disciplinary liberal arts.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '2rem', padding: '1rem', background: 'var(--sw-white)', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ minWidth: '100px', color: 'var(--sw-gold)', fontSize: '1.5rem', fontWeight: 'bold' }}>2020</div>
            <div style={{ borderLeft: '3px solid var(--sw-navy)', paddingLeft: '1.5rem' }}>
              <h3 style={{ margin: '0 0 0.5rem 0' }}>Allied Health Opening</h3>
              <p style={{ margin: 0, color: '#555' }}>Partnered with top city hospitals to flag off healthcare programs.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. LEADERSHIP & ACCREDITATIONS BENTO */}
      <section className="sw-section-alt">
        <div className="sw-bento">
          <div className="sw-bento-card span-2-col" style={{ background: 'var(--sw-navy)', color: 'white' }}>
            <h2 className="sw-section-title" style={{ textAlign: 'left', marginBottom: '1rem', color: 'var(--sw-gold)' }}>Leadership Team</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div className="sw-placeholder" style={{ height: '150px', width: '150px', borderRadius: '50%', margin: '0 auto 1rem', fontSize: '3rem' }}>👨‍💼</div>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>Dr. A. Sharma</h3>
                <span style={{ background: 'var(--sw-gold)', color: 'var(--sw-navy)', padding: '0.2rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>CHANCELLOR</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="sw-placeholder" style={{ height: '150px', width: '150px', borderRadius: '50%', margin: '0 auto 1rem', fontSize: '3rem' }}>👩‍💼</div>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>Dr. P. Menon</h3>
                <span style={{ background: 'var(--sw-gold)', color: 'var(--sw-navy)', padding: '0.2rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>VICE CHANCELLOR</span>
              </div>
            </div>
          </div>
          
          <div className="sw-bento-card">
            <h2 className="sw-section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>Rankings</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ padding: '1rem', border: '1px solid #eee', borderRadius: 'var(--radius-button)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'var(--sw-gold)', color: 'white', padding: '0.5rem', borderRadius: '5px', fontWeight: 'bold' }}>A+</div>
                <div>NAAC Accredited</div>
              </div>
              <div style={{ padding: '1rem', border: '1px solid #eee', borderRadius: 'var(--radius-button)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'var(--sw-navy)', color: 'white', padding: '0.5rem', borderRadius: '5px', fontWeight: 'bold' }}>Top 50</div>
                <div>NIRF Innovation Ranking</div>
              </div>
              <div style={{ padding: '1rem', border: '1px solid #eee', borderRadius: 'var(--radius-button)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: '#1a2c4c', color: 'white', padding: '0.5rem', borderRadius: '5px', fontWeight: 'bold' }}>QS</div>
                <div>Gold Rated University</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AWARDS CAROUSEL */}
      <section className="sw-section">
        <h2 className="sw-section-title">Awards & Recognitions</h2>
        <div className="sw-carousel-container">
          <div 
            className="sw-carousel-track" 
            style={{ transform: `translateX(-${currentAward * 33.333}%)` }}
          >
            {AWARDS.map((item, idx) => (
              <div className="sw-carousel-slide" key={item.id}>
                <div 
                  className="sw-placeholder" 
                  style={{ background: item.bg, height: '250px', fontSize: '1.5rem', textAlign: 'center', padding: '1rem' }}
                >
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
