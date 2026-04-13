"use client";

import React from 'react';

export default function ContactView() {
  return (
    <div className="sw-page" id="page-contact" style={{ animation: 'fadeIn 0.5s ease-in' }}>
      
      {/* 1. HERO SECTION */}
      <section className="sw-hero" style={{ minHeight: '40vh', background: 'linear-gradient(135deg, #0a1628 0%, #1a2c4c 100%)' }}>
        <div style={{ zIndex: 2 }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--sw-gold)' }}>Contact Us</h1>
          <p className="tagline" style={{ color: 'var(--sw-cream)' }}>We're Here to Help You Begin Your Journey.</p>
        </div>
      </section>

      {/* 2. SPLIT LAYOUT: FORM & INFO */}
      <section className="sw-section">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* LEFT: FORM */}
          <div style={{ background: 'var(--sw-white)', padding: '3rem', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-md)' }}>
            <h2 style={{ marginBottom: '2rem', color: 'var(--sw-navy)' }}>Drop Us a Message</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Full Name</label>
                <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-button)', border: '1px solid #ccc', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Email Address</label>
                <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-button)', border: '1px solid #ccc', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Phone Number</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-button)', border: '1px solid #ccc', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Department of Interest</label>
                <select style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-button)', border: '1px solid #ccc', boxSizing: 'border-box', WebkitAppearance: 'none' }}>
                  <option>Select Option...</option>
                  <option>Engineering College</option>
                  <option>Arts & Science College</option>
                  <option>Allied Health College</option>
                  <option>General Enquiry</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Message</label>
                <textarea rows={4} placeholder="How can we help you?" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-button)', border: '1px solid #ccc', boxSizing: 'border-box', resize: 'vertical' }}></textarea>
              </div>
              <button type="submit" style={{ width: '100%', padding: '1rem', background: 'var(--sw-gold)', color: 'var(--sw-navy)', border: 'none', borderRadius: 'var(--radius-button)', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', transition: 'background 0.3s' }}>
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT: INFO & MAP */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Address Card */}
            <div className="sw-bento-card" style={{ borderLeft: '4px solid var(--sw-gold)', padding: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Campus Address</h3>
              <p style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <span>📍</span>
                <span>Study World Educational Trust Campus<br/>Palakkad Main Road, Coimbatore<br/>Tamil Nadu - 641400</span>
              </p>
              <p style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <span>📞</span>
                <span>+91 98765 43210 <br/> +91 87654 32109</span>
              </p>
              <p style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <span>✉️</span>
                <span>admissions@studyworld.edu.in</span>
              </p>
              <p style={{ display: 'flex', gap: '1rem' }}>
                <span>🕒</span>
                <span>Office Hours:<br/>Monday - Saturday: 9:00 AM - 5:00 PM</span>
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="sw-placeholder" style={{ borderRadius: 'var(--radius-card)', height: '100%', minHeight: '300px', fontSize: '2rem', display: 'flex', flexDirection: 'column', padding: '2rem', textAlign: 'center' }}>
              🗺️ Google Maps
              <span style={{ fontSize: '1rem', opacity: 0.8, marginTop: '1rem' }}>Interactive embed goes here</span>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
