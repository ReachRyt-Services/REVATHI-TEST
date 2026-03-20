import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "100% Placement Support | Revathi Institutions Tiruppur",
  description: "Join the ranks of successful healthcare professionals. Revathi Institutions provides unmatched clinical placement support in top multi-specialty hospitals across Tamil Nadu, including Apollo, Fortis, and Manipal.",
  openGraph: {
    title: "Healthcare Placements | Revathi Institutions",
    description: "Launch your medical career in top hospitals across Tiruppur, Coimbatore, and Chennai.",
  }
};

export default function PlacementsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
