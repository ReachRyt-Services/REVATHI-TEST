"use client";

import { useState } from "react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Campus Infrastructure", "Clinical Training", "Events", "Student Life"];

  const images = [
    { src: "/gallery/rev.png", category: "Campus Infrastructure", alt: "Revathi Main Building" },
    { src: "/gallery/rev 2.jpg", category: "Clinical Training", alt: "Lab Session" },
    { src: "/gallery/rev 3.jpg", category: "Clinical Training", alt: "Simulation Training" },
    { src: "/gallery/rev 5.jpg", category: "Events", alt: "Annual Conference" },
    { src: "/gallery/rev 6.jpg", category: "Student Life", alt: "Sports Day" },
    { src: "/gallery/rev7.png", category: "Campus Infrastructure", alt: "Library" },
    { src: "/gallery/rev 8.png", category: "Events", alt: "Cultural Fest" },
    { src: "/gallery/rev 9.jpg", category: "Clinical Training", alt: "Medical Practice" }
  ];

  const filteredImages = activeCategory === "All" ? images : images.filter(img => img.category === activeCategory);

  return (
    <div className="bg-bg-light min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-block py-1 px-4 bg-accent text-text-dark font-black text-xs uppercase tracking-widest mb-4 rounded-sm shadow-sm">
            Visual Experience
          </div>
          <h1 className="text-5xl font-black text-primary font-display mb-6 tracking-tight">Revathi Gallery</h1>
          <p className="text-lg text-text-dark/70 font-semibold leading-relaxed">
            Take a visual tour of our campus, cutting-edge facilities, and the vibrant life of our student community.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                activeCategory === category
                  ? "bg-primary text-bg-light shadow-md"
                  : "bg-white text-text-dark/60 border border-primary/10 hover:border-primary/30 hover:text-text-dark"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl shadow-md border-b-4 border-transparent hover:border-accent transition-all duration-300 bg-white">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-black text-lg uppercase tracking-tight">{img.alt}</h3>
                  <p className="text-accent text-[10px] font-bold uppercase tracking-widest mt-1">{img.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20 text-text-dark/40 font-semibold text-lg">
            No images found for this category.
          </div>
        )}

      </div>
    </div>
  );
}
