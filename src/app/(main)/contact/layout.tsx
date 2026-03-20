import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us | Revathi Institutions Tiruppur",
  description: "Get in touch for admissions, campus tours, and inquiries at Revathi Institutions in Tiruppur, Tamil Nadu. Reach our counseling desk at +91-421-2345678.",
  openGraph: {
    title: "Contact Us | Revathi Institutions",
    description: "Book a campus tour or start your healthcare career today.",
  }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
