"use client";

import React, { useState, useEffect } from 'react';

const DEPARTMENTS = [
  { id: 'cse', name: 'Computer Science & Engineering', icon: '💻', count: 4, courses: ['B.E. CSE', 'B.E. CSE (AI & ML)', 'M.E. CSE', 'Ph.D. in CS'] },
  { id: 'ece', name: 'Electronics & Communication', icon: '📡', count: 2, courses: ['B.E. ECE', 'M.E. ECE'] },
  { id: 'mech', name: 'Mechanical Engineering', icon: '⚙️', count: 3, courses: ['B.E. Mechanical', 'M.E. CAD/CAM', 'Ph.D.'] },
  { id: 'civil', name: 'Civil Engineering', icon: '🏗️', count: 2, courses: ['B.E. Civil', 'M.E. Structural'] },
  { id: 'aiml', name: 'AI & Data Science', icon: '🤖', count: 1, courses: ['B.Tech AI & DS'] },
  { id: 'cyber', name: 'Cyber Security', icon: '🔒', count: 1, courses: ['B.Tech Cyber Security'] }
];

const FACULTY = [
  { id: 1, text: '👨‍🏫 Dr. Srinivasan - AI Expert', bg: 'linear-gradient(135deg, #0a1628, #1a2c4c)' },
  { id: 2, text: '👩‍🏫 Dr. Kavitha - IOT Researcher', bg: 'linear-gradient(135deg, #1a2c4c, #0a1628)' },
  { id: 3, text: '👨‍🏫 Prof. Ramesh - Cyber Sec', bg: 'linear-gradient(135deg, #e8a020, #0a1628)' }
];

export default function EngineeringView() {
  const [expandedDept, setExpandedDept] = useState<string | null>(null);
  const [currentFaculty, setCurrentFaculty] = useState(0);
  const [countOffers, setCountOffers] = useState(0);

  // Faculty Carousel Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFaculty((prev) => (prev + 1) % FACULTY.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Animated Counter Effect
  useEffect(() => {
    let start = 0;
    const end = 1250;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 10;
      setCountOffers(Math.min(start, end));
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="sw-page" id="page-engineering" style={{ animation: 'fadeIn 0.5s ease-in' }}>
      
      {/* 1. HERO SECTION */}
      <section className="sw-hero" style={{ minHeight: '60vh', background: 'linear-gradient(135deg, #1a2c4c 0%, #0a1628 100%)' }}>
        <div style={{ zIndex: 2 }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--sw-cream)' }}>Engineering College</h1>
          <p className="tagline" style={{ color: 'var(--sw-gold)' }}>Innovate. Create. Elevate.</p>
        </div>
      </section>

      {/* 2. PLACEMENT STATS (ANIMATED) */}
      <section className="sw-stats-bar" style={{ background: 'var(--sw-gold)', color: 'var(--sw-navy)' }}>
        <div className="sw-stat-item">
          <div className="sw-stat-number" style={{ color: 'var(--sw-navy)' }}>{countOffers}+</div>
          <div style={{ fontWeight: 600 }}>Offers This Year</div>
        </div>
        <div className="sw-stat-item">
          <div className="sw-stat-number" style={{ color: 'var(--sw-navy)' }}>24 LPA</div>
          <div style={{ fontWeight: 600 }}>Highest Package</div>
        </div>
        <div className="sw-stat-item">
          <div className="sw-stat-number" style={{ color: 'var(--sw-navy)' }}>150+</div>
          <div style={{ fontWeight: 600 }}>Top Recruiters</div>
        </div>
      </section>

      {/* 3. DEPARTMENTS SECTION */}
      <section className="sw-section-alt">
        <h2 className="sw-section-title">Departments</h2>
        <div className="sw-bento" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {DEPARTMENTS.map((dept) => (
            <div 
              key={dept.id} 
              className="sw-bento-card" 
              style={{ cursor: 'pointer', borderTop: '4px solid var(--sw-gold)' }}
              onClick={() => setExpandedDept(expandedDept === dept.id ? null : dept.id)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '2.5rem' }}>{dept.icon}</span>
                <h3 style={{ margin: 0 }}>{dept.name}</h3>
              </div>
              <p style={{ color: '#555' }}><strong>{dept.count} Courses</strong> available</p>
              
              {expandedDept === dept.id && (
                <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--sw-cream)', borderRadius: 'var(--radius-button)' }}>
                  <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                    {dept.courses.map((course, idx) => <li key={idx} style={{ padding: '0.25rem 0' }}>{course}</li>)}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4. FACILITIES BENTO GRID */}
      <section className="sw-section">
        <h2 className="sw-section-title">World-Class Facilities</h2>
        <div className="sw-bento">
          <div className="sw-bento-card span-2-col span-2-row" style={{ background: 'var(--sw-navy)', color: 'white' }}>
            <h3 style={{ color: 'var(--sw-gold)', fontSize: '1.8rem' }}>🔧 Central Workshop & Labs</h3>
            <p>10,000 sq.ft. of pure engineering equipment including CNC machines, 3D printers, and robotics arms.</p>
            <div className="sw-placeholder" style={{ marginTop: 'auto', height: '150px', fontSize: '3rem' }}>🏭</div>
          </div>
          
          <div className="sw-bento-card">
            <h3>💻 Computing Centre</h3>
            <p>1000+ i7/i9 machines with Gigabit network and GPU clusters.</p>
          </div>
          
          <div className="sw-bento-card">
            <h3>🎤 Seminar Halls</h3>
            <p>Smart AC halls with 500+ seating capacity.</p>
          </div>
          
          <div className="sw-bento-card span-2-col">
            <h3>📚 Tech Library</h3>
            <p>Over 50,000 volumes, IEEE journals, and dedicated reading pods.</p>
            <div className="sw-placeholder" style={{ height: '100px', fontSize: '2rem', marginTop: '1rem' }}>🔖</div>
          </div>
        </div>
      </section>

      {/* 5. FACULTY HIGHLIGHTS CAROUSEL */}
      <section className="sw-section-alt">
        <h2 className="sw-section-title">Distinguished Faculty</h2>
        <div className="sw-carousel-container">
          <div 
            className="sw-carousel-track" 
            style={{ transform: `translateX(-${currentFaculty * 33.333}%)` }}
          >
            {FACULTY.map((item, idx) => (
              <div className="sw-carousel-slide" key={item.id}>
                <div 
                  className="sw-placeholder" 
                  style={{ background: item.bg, height: '250px', fontSize: '1.2rem', textAlign: 'center', padding: '1rem' }}
                >
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ACHIEVEMENTS & ACCREDITATIONS */}
      <section className="sw-section">
        <h2 className="sw-section-title">Accreditations & MoUs</h2>
        <div className="sw-bento" style={{ paddingTop: '0' }}>
          <div className="sw-bento-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '3rem' }}>🏅</span>
            <h3>NBA Accredited</h3>
          </div>
          <div className="sw-bento-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '3rem' }}>🌐</span>
            <h3>MoU with IBM</h3>
          </div>
          <div className="sw-bento-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '3rem' }}>☁️</span>
            <h3>AWS Academy</h3>
          </div>
        </div>
      </section>

    </div>
  );
}
