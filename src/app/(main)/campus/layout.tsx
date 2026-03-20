import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Campus Infrastructure | Revathi Medical Institutions Tiruppur",
  description: "Explore our 300,000+ sq. ft. campus integrated with a 300-bed super-specialty hospital. Modern laboratories, digital library, and student-focused facilities in Tamil Nadu.",
  openGraph: {
    title: "Campus Infrastructure | Revathi Institutions",
    description: "See where healthcare leaders are forged at our Tiruppur campus.",
  }
};

export default function CampusLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
