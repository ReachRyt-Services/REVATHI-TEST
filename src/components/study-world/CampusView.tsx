"use client";

import React from 'react';

export default function CampusView() {
  return (
    <div className="sw-page" id="page-campus" style={{ animation: 'fadeIn 0.5s ease-in' }}>
      
      {/* 1. HERO & MAP SECTION */}
      <section className="sw-hero" style={{ minHeight: '50vh', background: 'linear-gradient(135deg, #e8a020 0%, #0a1628 100%)' }}>
        <div style={{ zIndex: 2 }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--sw-cream)' }}>Our Campus</h1>
          <p className="tagline" style={{ color: 'var(--sw-navy)', fontWeight: 'bold' }}>100 Acres of Inspiration.</p>
        </div>
      </section>

      {/* FULL WIDTH MAP PLACEHOLDER */}
      <div 
        className="sw-placeholder" 
        style={{ height: '400px', borderRadius: 0, fontSize: '3rem', background: 'linear-gradient(to right, #ccc, #eee)' }}
      >
        🗺️ Interactive Campus Map
      </div>

      {/* 2. FACILITIES GRID */}
      <section className="sw-section">
        <h2 className="sw-section-title">Campus Facilities</h2>
        <div className="sw-bento" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div className="sw-bento-card" style={{ borderTop: '4px solid var(--sw-gold)' }}>
            <h3>📚 Central Library</h3>
            <p>3-floor fully digital library open 24/7 with discussion rooms.</p>
          </div>
          <div className="sw-bento-card" style={{ borderTop: '4px solid var(--sw-navy)' }}>
            <h3>⚽ Sports Complex</h3>
            <p>Indoor stadium, 400m track, swimming pool, and gym.</p>
          </div>
          <div className="sw-bento-card" style={{ borderTop: '4px solid var(--sw-gold)' }}>
            <h3>🏢 Hostels</h3>
            <p>AC & Non-AC with attached bath, Wi-Fi, and multi-cuisine mess.</p>
          </div>
          <div className="sw-bento-card" style={{ borderTop: '4px solid var(--sw-navy)' }}>
            <h3>☕ Cafeteria</h3>
            <p>1000-seater modern food court with global cuisines.</p>
          </div>
          <div className="sw-bento-card" style={{ borderTop: '4px solid var(--sw-gold)' }}>
            <h3>🎭 Auditorium</h3>
            <p>2000-seater air-conditioned hall with Dolby acoustics.</p>
          </div>
          <div className="sw-bento-card" style={{ borderTop: '4px solid var(--sw-navy)' }}>
            <h3>📶 Wi-Fi Campus</h3>
            <p>1 Gbps dedicated leased line across all academic blocks.</p>
          </div>
        </div>
      </section>

      {/* 3. CAMPUS LIFE PHOTO-WALL BENTO */}
      <section className="sw-section-alt">
        <h2 className="sw-section-title">Life at Study World</h2>
        <div className="sw-bento">
          <div className="sw-bento-card span-2-col span-2-row" style={{ padding: 0, overflow: 'hidden' }}>
            <div className="sw-placeholder" style={{ height: '100%', fontSize: '4rem', background: 'linear-gradient(135deg, #1a2c4c, #0a1628)' }}>🎉 Festival</div>
          </div>
          
          <div className="sw-bento-card" style={{ padding: 0, overflow: 'hidden' }}>
            <div className="sw-placeholder" style={{ height: '200px', fontSize: '2rem', background: 'linear-gradient(135deg, #e8a020, #0a1628)' }}>🏅 Sports</div>
          </div>
          
          <div className="sw-bento-card" style={{ padding: 0, overflow: 'hidden' }}>
            <div className="sw-placeholder" style={{ height: '200px', fontSize: '2rem', background: 'linear-gradient(135deg, #0a1628, #e8a020)' }}>🔬 Labs</div>
          </div>
          
          <div className="sw-bento-card span-2-col" style={{ padding: 0, overflow: 'hidden' }}>
            <div className="sw-placeholder" style={{ height: '200px', fontSize: '3rem', background: 'linear-gradient(135deg, #1a2c4c, #e8a020)' }}>🎓 Graduation</div>
          </div>
        </div>
      </section>

      {/* 4. TRANSPORT & VIRTUAL TOUR (SPLIT) */}
      <section className="sw-section" style={{ background: 'var(--sw-navy)', color: 'white' }}>
        <div className="sw-bento" style={{ paddingTop: 0 }}>
          <div className="sw-bento-card" style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}>
            <h2 className="sw-section-title" style={{ textAlign: 'left', marginBottom: '1rem', color: 'var(--sw-gold)' }}>Transport</h2>
            <p>We operate 50+ luxury buses across a 60km radius covering all major nodes in the city and suburbs.</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
              <li>GPS Tracked Fleet</li>
              <li>CCTV & First Aid Equipped</li>
              <li>Female attendee in all routes</li>
            </ul>
          </div>
          
          <div className="sw-bento-card span-2-col" style={{ background: 'var(--sw-gold)', color: 'var(--sw-navy)' }}>
            <h2 className="sw-section-title" style={{ textAlign: 'left', marginBottom: '1rem', color: 'var(--sw-navy)' }}>Virtual Tour</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Experience our breathtaking campus from the comfort of your home. Navigate through the classrooms, labs, and amenities in vivid 360° view.</p>
            <button style={{ padding: '1rem 2rem', background: 'var(--sw-navy)', color: 'var(--sw-cream)', border: 'none', borderRadius: 'var(--radius-button)', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' }}>▶️ Start Tour</button>
          </div>
        </div>
      </section>

    </div>
  );
}
