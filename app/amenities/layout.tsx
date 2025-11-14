import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premium Amenities & Features | LuxVillas',
  description: 'Discover the world-class amenities and features available in our luxury villas. From infinity pools to smart home automation.',
  keywords: 'villa amenities, luxury features, spa, pool, smart home',
  openGraph: {
    title: 'Premium Amenities - LuxVillas',
    description: 'World-class amenities in every villa',
  },
};

export default function AmenitiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
