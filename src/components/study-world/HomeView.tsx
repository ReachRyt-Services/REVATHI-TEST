"use client";

import React, { useEffect, useState } from 'react';

const carouselItems = [
  { id: 1, text: '🎓 State-of-the-Art Classrooms', bg: 'linear-gradient(135deg, #0a1628, #e8a020)' },
  { id: 2, text: '🔬 Advanced Research Labs', bg: 'linear-gradient(135deg, #1a2c4c, #0a1628)' },
  { id: 3, text: '⚽ Olympic Standard Sports Complex', bg: 'linear-gradient(135deg, #e8a020, #0a1628)' },
  { id: 4, text: '📚 24/7 Digital Library', bg: 'linear-gradient(135deg, #0a1628, #1a2c4c)' },
  { id: 5, text: '🌳 100-Acre Green Campus', bg: 'linear-gradient(135deg, #e8a020, #1a2c4c)' }
];

export default function HomeView() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-playing carousel effect (every 4s)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="sw-page" id="page-home" style={{ animation: 'fadeIn 0.5s ease-in' }}>
      
      {/* 1. HERO SECTION */}
      <section className="sw-hero">
        <div style={{ zIndex: 2 }}>
          <h1 style={{ animation: 'slideUp 0.8s ease-out' }}>Study World Institutions</h1>
          <p className="tagline" style={{ animation: 'slideUp 1s ease-out' }}>Empowering Minds, Shaping the Future.</p>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="sw-stats-bar">
        <div className="sw-stat-item">
          <div className="sw-stat-number">10,000+</div>
          <div>Students Enrolled</div>
        </div>
        <div className="sw-stat-item">
          <div className="sw-stat-number">50+</div>
          <div>Courses Offered</div>
        </div>
        <div className="sw-stat-item">
          <div className="sw-stat-number">25</div>
          <div>Years of Excellence</div>
        </div>
        <div className="sw-stat-item">
          <div className="sw-stat-number">98%</div>
          <div>Placement Rate</div>
        </div>
      </section>

      {/* 3. CAROUSEL SECTION */}
      <section className="sw-section-alt">
        <h2 className="sw-section-title">Campus Life Highlights</h2>
        <div className="sw-carousel-container">
          <div 
            className="sw-carousel-track" 
            style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
          >
            {carouselItems.map((item, idx) => (
              <div className="sw-carousel-slide" key={item.id}>
                <div 
                  className="sw-placeholder" 
                  style={{ background: item.bg, height: '300px', fontSize: '1.5rem', textAlign: 'center', padding: '1rem' }}
                >
                  {item.text}
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
            {carouselItems.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentSlide(idx)}
                style={{ 
                  width: '12px', height: '12px', borderRadius: '50%', border: 'none', 
                  background: currentSlide === idx ? 'var(--sw-gold)' : '#ccc', cursor: 'pointer', transition: '0.3s' 
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. BENTO GRID */}
      <section className="sw-section">
        <h2 className="sw-section-title">Why Study World?</h2>
        <div className="sw-bento">
          <div className="sw-bento-card span-2-col span-2-row" style={{ background: 'var(--sw-navy)', color: 'white' }}>
            <h3 style={{ color: 'var(--sw-gold)', fontSize: '2rem' }}>🌍 Global Partnerships</h3>
            <p>We tie up with Fortune 500 companies and top-tier global universities to provide exchange programs and dual degrees.</p>
            <div className="sw-placeholder" style={{ marginTop: 'auto', height: '150px', fontSize: '3rem' }}>🤝</div>
          </div>
          
          <div className="sw-bento-card">
            <h3>🔬 Research Centers</h3>
            <p>Over 10 dedicated centers of excellence.</p>
          </div>
          
          <div className="sw-bento-card">
            <h3>⚽ Sports Complex</h3>
            <p>Indoor stadiums and olympic tracks.</p>
          </div>
          
          <div className="sw-bento-card span-2-col">
            <h3>💼 Dedicated Placement Cell</h3>
            <p>Training students from Day 1 for top MNC recruiters.</p>
            <div className="sw-placeholder" style={{ height: '100px', fontSize: '2rem', marginTop: '1rem' }}>📈</div>
          </div>
          
          <div className="sw-bento-card">
            <h3>🏢 Modern Hostels</h3>
            <p>AC and Non-AC rooms with Wi-Fi.</p>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS & NEWS (Mini Bento Grid) */}
      <section className="sw-section-alt">
        <div className="sw-bento" style={{ paddingTop: '0' }}>
          <div className="sw-bento-card span-2-col">
            <h2 className="sw-section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>Student Voices</h2>
            <div style={{ fontStyle: 'italic', fontSize: '1.2rem', color: '#555', borderLeft: '4px solid var(--sw-gold)', paddingLeft: '1rem', margin: '2rem 0' }}>
              "Study World provided me the exact launchpad I needed for my career in AI. The faculty is incredible!" 
              <br/><br/><strong>- Sneha R., CSE Alumni</strong>
            </div>
            <div style={{ fontStyle: 'italic', fontSize: '1.2rem', color: '#555', borderLeft: '4px solid var(--sw-gold)', paddingLeft: '1rem' }}>
              "The hands-on clinical training at the Allied Health College is second to none."
              <br/><br/><strong>- Rahul K., B.Pharm</strong>
            </div>
          </div>
          
          <div className="sw-bento-card">
            <h2 className="sw-section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>Latest News</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                <strong style={{ color: 'var(--sw-gold)' }}>🗓️ 15 Aug 2026</strong><br/>
                Annual Tech Symposium 2026 Announced
              </li>
              <li style={{ marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                <strong style={{ color: 'var(--sw-gold)' }}>🗓️ 10 Aug 2026</strong><br/>
                Mega Job Fair - 50+ Companies Visiting
              </li>
              <li>
                <strong style={{ color: 'var(--sw-gold)' }}>🗓️ 01 Aug 2026</strong><br/>
                New AI Research Lab Inaugurated
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="sw-footer">
        <div className="sw-footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Alumni Portal</a>
          <a href="#">Careers</a>
        </div>
        <p>📍 Study World Campus, Coimbatore, Tamil Nadu - 641400</p>
        <p style={{ marginTop: '1rem', opacity: 0.7 }}>&copy; 2026 Study World Institutions. All rights reserved.</p>
        <div style={{ marginTop: '2rem', fontSize: '1.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <span style={{ cursor: 'pointer' }}>📘</span>
          <span style={{ cursor: 'pointer' }}>🐦</span>
          <span style={{ cursor: 'pointer' }}>📸</span>
          <span style={{ cursor: 'pointer' }}>💼</span>
        </div>
      </footer>
    </div>
  );
}
