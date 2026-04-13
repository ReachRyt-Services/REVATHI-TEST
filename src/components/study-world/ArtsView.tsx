"use client";

import React, { useState, useEffect } from 'react';

const DEPARTMENTS = [
  { id: 'tamil', name: 'Tamil Literature', icon: '📝', desc: 'B.A., M.A., Ph.D.', bg: 'linear-gradient(135deg, #0a1628, #1a2c4c)' },
  { id: 'english', name: 'English', icon: '📖', desc: 'B.A., M.A., M.Phil.', bg: 'linear-gradient(135deg, #1a2c4c, #0a1628)' },
  { id: 'history', name: 'History', icon: '🏛️', desc: 'B.A.', bg: 'linear-gradient(135deg, #e8a020, #0a1628)' },
  { id: 'eco', name: 'Economics', icon: '📊', desc: 'B.A., M.A.', bg: 'linear-gradient(135deg, #0a1628, #e8a020)' },
  { id: 'viscom', name: 'Visual Communication', icon: '🎥', desc: 'B.Sc. VisCom', bg: 'linear-gradient(135deg, #1a2c4c, #e8a020)' },
  { id: 'com', name: 'Commerce', icon: '📈', desc: 'B.Com. (CA, PA, Gen)', bg: 'linear-gradient(135deg, #0a1628, #1a2c4c)' },
  { id: 'bba', name: 'Business Administration', icon: '🤝', desc: 'BBA', bg: 'linear-gradient(135deg, #e8a020, #1a2c4c)' }
];

const EVENTS = [
  { id: 1, text: '🎭 Annual Theatre Fest', bg: 'linear-gradient(135deg, #0a1628, #e8a020)' },
  { id: 2, text: '🎶 Inter-college Music Battle', bg: 'linear-gradient(135deg, #1a2c4c, #0a1628)' },
  { id: 3, text: '🎨 Art & Photography Exhibition', bg: 'linear-gradient(135deg, #e8a020, #0a1628)' },
  { id: 4, text: '✍️ National Level Literature Summit', bg: 'linear-gradient(135deg, #0a1628, #1a2c4c)' }
];

export default function ArtsView() {
  const [currentEvent, setCurrentEvent] = useState(0);

  // Auto-playing carousel effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % EVENTS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="sw-page" id="page-arts" style={{ animation: 'fadeIn 0.5s ease-in' }}>
      
      {/* 1. HERO SECTION */}
      <section className="sw-hero" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #301f4c 100%)' }}>
        <div style={{ zIndex: 2 }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--sw-gold)' }}>Arts & Science College</h1>
          <p className="tagline" style={{ color: 'var(--sw-cream)' }}>Discover Your Passion. Express Your Potential.</p>
        </div>
      </section>

      {/* 2. DEPARTMENTS GRID (Rich Cards) */}
      <section className="sw-section">
        <h2 className="sw-section-title">Academic Departments</h2>
        <div className="sw-bento" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {DEPARTMENTS.map((dept) => (
            <div key={dept.id} className="sw-bento-card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ background: dept.bg, height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
                {dept.icon}
              </div>
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.3rem' }}>{dept.name}</h3>
                <p style={{ margin: 0, color: '#555' }}>{dept.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CULTURAL EVENTS CAROUSEL */}
      <section className="sw-section-alt">
        <h2 className="sw-section-title">Cultural Vibrance</h2>
        <div className="sw-carousel-container">
          <div 
            className="sw-carousel-track" 
            style={{ transform: `translateX(-${currentEvent * 33.333}%)` }}
          >
            {EVENTS.map((item, idx) => (
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

      {/* 4. CLUB HIGHLIGHTS BENTO */}
      <section className="sw-section">
        <h2 className="sw-section-title">Student Clubs</h2>
        <div className="sw-bento">
          <div className="sw-bento-card span-2-col span-2-row" style={{ background: 'var(--sw-gold)', color: 'var(--sw-navy)' }}>
            <h3 style={{ fontSize: '2rem' }}>🗣️ The Debate Society</h3>
            <p>National award-winning debate team representing the college at MUNs and parliament simulations.</p>
            <div className="sw-placeholder" style={{ marginTop: 'auto', height: '150px', fontSize: '3rem', background: 'var(--sw-navy)' }}>🎙️</div>
          </div>
          
          <div className="sw-bento-card">
            <h3>📸 Photography Club</h3>
            <p>Capturing campus life and organizing annual exhibitions.</p>
          </div>
          
          <div className="sw-bento-card">
            <h3>💃 Dance Troupe</h3>
            <p>Classical and Western forms.</p>
          </div>
          
          <div className="sw-bento-card span-2-col">
            <h3>🌱 Eco Club</h3>
            <p>Driving sustainability initiatives across the 100-acre campus.</p>
          </div>
        </div>
      </section>

      {/* 5. ALUMNI & FEES SECTION (Split) */}
      <section className="sw-section-alt">
        <div className="sw-bento">
          <div className="sw-bento-card span-2-col" style={{ background: 'var(--sw-navy)', color: 'white' }}>
            <h2 className="sw-section-title" style={{ textAlign: 'left', marginBottom: '1rem', color: 'var(--sw-gold)' }}>Alumni Spotlight</h2>
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
              <div style={{ flex: 1, padding: '1rem', background: 'rgba(255,255,255,0.1)', borderRadius: 'var(--radius-button)' }}>
                <h3>Rajesh Kumar</h3>
                <p style={{ color: 'var(--sw-gold)' }}>B.A. English (2018)</p>
                <p>Now a Senior Content Editor at a leading Publishing House in London.</p>
              </div>
              <div style={{ flex: 1, padding: '1rem', background: 'rgba(255,255,255,0.1)', borderRadius: 'var(--radius-button)' }}>
                <h3>Anita Desai</h3>
                <p style={{ color: 'var(--sw-gold)' }}>B.Sc. VisCom (2020)</p>
                <p>Award-winning short filmmaker and digital creator.</p>
              </div>
            </div>
          </div>
          
          <div className="sw-bento-card">
            <h2 className="sw-section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>Fee Structure</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '0.8rem 0', fontWeight: 'bold' }}>B.Com / BBA</td>
                  <td style={{ padding: '0.8rem 0', textAlign: 'right', color: 'var(--sw-gold)', fontWeight: 'bold' }}>$400/sem</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '0.8rem 0', fontWeight: 'bold' }}>B.Sc. VisCom</td>
                  <td style={{ padding: '0.8rem 0', textAlign: 'right', color: 'var(--sw-gold)', fontWeight: 'bold' }}>$500/sem</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem 0', fontWeight: 'bold' }}>B.A. Programs</td>
                  <td style={{ padding: '0.8rem 0', textAlign: 'right', color: 'var(--sw-gold)', fontWeight: 'bold' }}>$300/sem</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '1rem' }}>*Excludes hostel and transport fees.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
