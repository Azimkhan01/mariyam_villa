import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About LuxVillas - Luxury Villa Experts',
  description: 'Learn about LuxVillas mission to provide exceptional luxury villa experiences. Discover our expertise, values, and commitment to excellence.',
  keywords: 'about us, luxury villas, company, mission, values',
  openGraph: {
    title: 'About LuxVillas',
    description: 'Learn about our luxury villa expertise',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
