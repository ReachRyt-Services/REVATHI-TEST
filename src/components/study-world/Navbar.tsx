"use client";

import React, { useState } from 'react';

type NavbarProps = {
  activePage: string;
  setActivePage: (page: string) => void;
};

export default function Navbar({ activePage, setActivePage }: NavbarProps) {
  return (
    <nav className="sw-navbar">
      <a 
        onClick={(e) => { e.preventDefault(); setActivePage('home'); }} 
        href="#" 
        className="sw-logo"
      >
        Study World <span>Institutions</span>
      </a>
      
      <div className="sw-nav-links">
        <a 
          className={`sw-nav-item ${activePage === 'home' ? 'active' : ''}`}
          onClick={(e) => { e.preventDefault(); setActivePage('home'); }}
        >
          Home
        </a>
        
        <div className="sw-dropdown-container">
          <a className="sw-nav-item">Institutions ▾</a>
          <div className="sw-dropdown-menu">
            <a 
              className="sw-dropdown-item"
              onClick={(e) => { e.preventDefault(); setActivePage('engineering'); }}
            >
              🎓 Engineering College
            </a>
            <a 
              className="sw-dropdown-item"
              onClick={(e) => { e.preventDefault(); setActivePage('arts'); }}
            >
              🎨 Arts College
            </a>
            <a 
              className="sw-dropdown-item"
              onClick={(e) => { e.preventDefault(); setActivePage('allied-health'); }}
            >
              🏥 Allied Health College
            </a>
          </div>
        </div>

        <a 
          className={`sw-nav-item ${activePage === 'campus' ? 'active' : ''}`}
          onClick={(e) => { e.preventDefault(); setActivePage('campus'); }}
        >
          Campus
        </a>
        
        <a 
          className={`sw-nav-item ${activePage === 'about' ? 'active' : ''}`}
          onClick={(e) => { e.preventDefault(); setActivePage('about'); }}
        >
          About Us
        </a>
        
        <a 
          className={`sw-nav-item ${activePage === 'contact' ? 'active' : ''}`}
          onClick={(e) => { e.preventDefault(); setActivePage('contact'); }}
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
}
