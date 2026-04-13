"use client";

import React, { useState, useEffect } from 'react';

const COURSES = [
  { id: 'pharm', name: 'B.Pharm', duration: '4 Years', eligibility: '10+2 with PCB/PCM', scope: 'Pharmacist, R&D, Clinical Trial', icon: '💊' },
  { id: 'physio', name: 'Physiotherapy (BPT)', duration: '4.5 Years', eligibility: '10+2 with PCB', scope: 'Rehab Centers, Sports Clinics', icon: '🦵' },
  { id: 'opto', name: 'Optometry', duration: '4 Years', eligibility: '10+2 with PCB/PCM', scope: 'Eye Hospitals, Vision Centers', icon: '👁️' },
  { id: 'mlt', name: 'Medical Lab Tech', duration: '3 Years', eligibility: '10+2 Science', scope: 'Diagnostic Labs, Pathology', icon: '🩸' },
  { id: 'rad', name: 'Radiology & Imaging', duration: '3 Years', eligibility: '10+2 Science', scope: 'MRI/CT Specialist, Hospitals', icon: '☢️' },
  { id: 'nursing', name: 'B.Sc. Nursing', duration: '4 Years', eligibility: '10+2 Science (PCB)', scope: 'Govt & Pvt Hospitals, Abroad', icon: '🏥' }
];

const STUDENT_LIFE = [
  { id: 1, text: '💉 Blood Donation Camp 2026', bg: 'linear-gradient(135deg, #0a1628, #1a2c4c)' },
  { id: 2, text: '🏕️ Community Health Trek', bg: 'linear-gradient(135deg, #1a2c4c, #0a1628)' },
  { id: 3, text: '🩺 Free Rural Checkup Drive', bg: 'linear-gradient(135deg, #e8a020, #0a1628)' }
];

export default function AlliedHealthView() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-playing carousel effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % STUDENT_LIFE.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="sw-page" id="page-allied-health" style={{ animation: 'fadeIn 0.5s ease-in' }}>
      
      {/* 1. HERO SECTION */}
      <section className="sw-hero" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #17382d 100%)' }}>
        <div style={{ zIndex: 2 }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--sw-cream)' }}>Allied Health College</h1>
          <p className="tagline" style={{ color: 'var(--sw-gold)' }}>Caring Hands. Healing Hearts.</p>
        </div>
      </section>

      {/* 2. COURSES OFFERED (Rich Cards) */}
      <section className="sw-section">
        <h2 className="sw-section-title">Programs Offered</h2>
        <div className="sw-bento" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {COURSES.map((course) => (
            <div key={course.id} className="sw-bento-card" style={{ borderLeft: '4px solid var(--sw-gold)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '3rem' }}>{course.icon}</span>
                <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{course.name}</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}><strong>⏳ Duration:</strong> {course.duration}</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}><strong>🎓 Eligibility:</strong> {course.eligibility}</li>
                <li style={{ padding: '0.5rem 0' }}><strong>💼 Career Scope:</strong> {course.scope}</li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SIMULATION & SKILLS LAB HIGHLIGHT */}
      <section className="sw-section-alt" style={{ background: 'var(--sw-navy)', color: 'var(--sw-cream)' }}>
        <div className="sw-bento">
          <div className="sw-bento-card span-2-col" style={{ background: 'transparent', boxShadow: 'none', flexDirection: 'row', alignItems: 'center', gap: '2rem' }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ color: 'var(--sw-gold)', fontSize: '2.5rem', marginBottom: '1rem' }}>Advanced Skills Lab</h2>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>Our 5000 sq.ft Simulation Centre features hi-fidelity adult and infant mannequins, VR surgical simulators, and a mock ICU setup. Students practice zero-risk clinical procedures before interacting with real patients.</p>
              <button style={{ padding: '1rem 2rem', background: 'var(--sw-gold)', color: 'var(--sw-navy)', border: 'none', borderRadius: 'var(--radius-button)', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', marginTop: '1.5rem' }}>Explore The Lab</button>
            </div>
            <div className="sw-placeholder" style={{ flex: 1, minHeight: '300px', fontSize: '5rem', background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))' }}>🥼🩺</div>
          </div>
        </div>
      </section>

      {/* 4. HOSPITAL TIE-UPS BENTO */}
      <section className="sw-section">
        <h2 className="sw-section-title">Clinical Partners & Hospital Tie-Ups</h2>
        <div className="sw-bento">
          <div className="sw-bento-card span-2-col span-2-row" style={{ background: 'var(--sw-gold)', color: 'var(--sw-navy)' }}>
            <h3 style={{ fontSize: '2rem' }}>🏥 Apex General Hospital</h3>
            <p>Our primary 500-bed parent multispecialty hospital for 360-degree clinical rotation training.</p>
            <div className="sw-placeholder" style={{ marginTop: 'auto', height: '150px', fontSize: '3rem', background: 'var(--sw-navy)' }}>🚑</div>
          </div>
          
          <div className="sw-bento-card">
            <h3>❤️ City Heart Care</h3>
            <p>200-bed facility dedicated to Cardiology rotations.</p>
          </div>
          
          <div className="sw-bento-card">
            <h3>⚕️ CurePlus Diagnostics</h3>
            <p>Training partner for Optometry and Lab Tech students.</p>
          </div>
          
          <div className="sw-bento-card span-2-col">
            <h3>♿ National Rehab Centre</h3>
            <p>Exclusive clinical tie-up for Physiotherapy internship programs.</p>
          </div>
        </div>
      </section>

      {/* 5. STUDENT LIFE CAROUSEL */}
      <section className="sw-section-alt">
        <h2 className="sw-section-title">Community Impact & Student Life</h2>
        <div className="sw-carousel-container">
          <div 
            className="sw-carousel-track" 
            style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
          >
            {STUDENT_LIFE.map((item, idx) => (
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

    </div>
  );
}
