import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Villa Gallery - Browse Luxury Properties | LuxVillas',
  description: 'Explore our curated collection of luxury villas worldwide. Browse by location, amenities, and pricing with high-quality photos and detailed information.',
  keywords: 'villa gallery, luxury properties, beach villas, mountain villas, vacation rentals',
  openGraph: {
    title: 'Villa Gallery - LuxVillas',
    description: 'Browse our collection of luxury villas worldwide',
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
