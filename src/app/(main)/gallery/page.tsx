"use client";

import { useState } from "react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Campus Infrastructure", "Clinical Training", "Events", "Student Life"];

  const images = [
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcsPZJoD-6e1-Z-ds4WwmYRnfji_HWftGCRjZaFzd7iDUKQsZGvRkORVQm2BHx0tT4FbD6rtwKfbTGl2uk4uV_4aAs5hWWhoRBqQbFHOtrmczO24A2ddEMqGL6BYLdLXfxZ4nwmSr8y7lc44nGNQblyiBaDaIuzLOSgyaIr2QnP0YGPB-MdevEj2GXv7fB01Zusk_j9iFzdghGqFuzCb-1EwSZ5064k9JaAYiFJZlw4OBUcjTBbC8wW5Pk2qI2-qLNKzcjsvm55Sv5", category: "Clinical Training", alt: "Lab Session" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGkztpOfrzkktR3qMd4D3b39Puk2zwJua1Ras7RGObGnXFqqyXRBCgbWGfwH0FY0sR5eBzFU5hVrZX6qQo_hvNYb10bVppJM7lwAgOj0VZbwMB9gN6da1L9nTpL4HWtGl7VrNipCpD5tIVCKGCxcSVaFhfMh-lfCXJ5fnoIn5SjyJ6ynNGRh0SmiLdJTdxSuC7jZIPtjCpDfLD2ZhR7uHTIN05Fec_HQ1jiAjwzLpSYLAd9YYrDa5uHbYzDnWP3ojRziB5nnFw7yWi", category: "Clinical Training", alt: "Simulation Training" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmxULUH5EMhyblGO7hMKk0qGIWyejQFIRCFcC38KG8CRO8NWOktsV8jEbexM6W5pNji72w9ThwpLu14RJK8m5lTk4_ml-tbeNDqoHxztOQC5gmupF6omUfpb-9tuG1pcH0APNYON91Gr62q2VbGHB5cdiLXBgrVCyTYJYKsH6ExAMao0P9ThYmQKnUTndzwZlAQoLp9G_-6cNcDk8JZgHiY6bhF-QqAw521Z6tUhGoAaMqwl_dQczypSqe03oR8GZo335_A-foc5aV", category: "Campus Infrastructure", alt: "Main Building" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZf1hE4lYKdYYTc89LJdwOEFZ0l4GsWqIVZzqlKBx9WcCaE4kyoZvS53FrWYTHCknVT-T-AEXANcTeOclPLx_6yBkH2vaeQFrKD6AFalx9lYrRQe8Frvi4v2e56BxOkFo5xQDQvr6p8n9Rj2-7XQKswuBx6foYp8B9nbflPe9D4gulfHMbNHnUTI3MDTdAJjJUsrZjELp1yOh2EADk4nbxYMSyZ6ci6bbf7XqT_CXpAvwlby2Rlqp0jUAEe-ZBGVBUZ25bGPygbr5l", category: "Campus Infrastructure", alt: "Library" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCayiUriIwioB-gZ_N-f6BXwPQE7wm9YuVeKo4G_JnNohxcAfuzVqHkjhTF0inJp2sCzX4U2xkZNVKbQGrQVc2XCtC9gal2Sr1gZDiNIoiLe5p4HPpEHUfqnqXEaTDzsRrRMROc7xFr1uauK9ImcK-JioYr3WcL11bzETYViI939RNCaJ_sd8_5RgBbjJrhm8DnMLxYKrDtMaLuL4RbyIvm0PbjPDL8S6_m_PulUM7Ad251sYRpHcu9FVPnUyhf7TX76uRs_nUsIMoF", category: "Events", alt: "Annual Conference" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAccHpkNuTlr4VhCW86j1wk3hNc2yEkcKKeDZi3hT79ckgnwfnpgOHxNaUN-kX--Q8RyivZUkJVmtANlEdzdioVXvfhYm_2ZpaHwbnaAZcGSipTByOEqVWIho4QjXCzFoQmOcMC85v3RVNPC0drtKS_1oK1Nr9IxVrsaYdkZMO2N1iYUJjJ04JDvJc3Pul_QkGou1LLruHv7Gj621bd3GxmbdOu30HSu8bpYv8q469wXhwpGTFqRUrBhu0P3gfDSnTIT4ql--WWB-kH", category: "Student Life", alt: "Sports Day" }
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
