import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat, Lora } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Revathi Institutions | Top Nursing & Allied Health College in Tiruppur, Tamil Nadu",
  description: "Join Revathi Institutions, the premier destination for Nursing, Physiotherapy, and Allied Health Sciences in Tiruppur. 100% placement with clinical training at our 300-bed super-specialty hospital.",
  keywords: ["Nursing College Tiruppur", "Physiotherapy College Tamil Nadu", "Allied Health Sciences Tiruppur", "Revathi Medical Center", "Healthcare Education India"],
  authors: [{ name: "Revathi Institutions" }],
  creator: "Revathi Institutions",
  publisher: "Revathi Institutions",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Revathi Institutions | Accelerate Your Healthcare Career",
    description: "Master elite healthcare skills with intensive clinical exposure at our 300-bed hospital in Tiruppur, Tamil Nadu.",
    url: "https://revathi.edu.in",
    siteName: "Revathi Institutions",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revathi Institutions | Top Nursing & Allied Health College",
    description: "100% placement rate and intensive clinical exposure in Tiruppur, Tamil Nadu.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { FloatingApplyButton } from "@/components/ui/FloatingApplyButton";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "name": "Revathi Institutions",
    "alternateName": "Revathi College of Nursing and Allied Health Sciences",
    "url": "https://revathi.edu.in",
    "logo": "https://revathi.edu.in/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ganani Bus Stop, Coimbatore Bypass",
      "addressLocality": "Avinashi (TK), Tirupur",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641654",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 9842202288",
      "contactType": "Admissions",
      "areaServed": "IN",
      "availableLanguage": ["en", "ta"]
    },
    "sameAs": [
      "https://www.facebook.com/share/1ENVwx7c9W/",
      "https://www.instagram.com/revathi_institutions?igsh=aGJqem0xNGp0b2h6",
      "https://www.linkedin.com/company/revathi-institutions/"
    ]
  };

  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${lora.variable} font-sans antialiased text-text-dark bg-bg-light`}
      >
        {children}
        <FloatingApplyButton />
        <SpeedInsights />
      </body>
    </html>
  );
}
