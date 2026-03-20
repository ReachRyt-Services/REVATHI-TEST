import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Story | History of Revathi Institutions Tiruppur",
  description: "Discover the journey of Revathi Institutions, from a small 12-bed clinic to a premier medical and nursing college in Tiruppur, Tamil Nadu.",
  openGraph: {
    title: "Our Story | Revathi Institutions",
    description: "Built on conviction. Training healthcare leaders since 1998 in Tiruppur.",
  }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
