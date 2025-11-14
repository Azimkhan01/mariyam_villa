import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Book Your Luxury Villa | LuxVillas',
  description: 'Get in touch with our team to inquire about luxury villa rentals. Contact us via phone, email, or our contact form for immediate assistance.',
  keywords: 'contact, villa booking, luxury rentals, customer support',
  openGraph: {
    title: 'Contact Us - LuxVillas',
    description: 'Get in touch to book your perfect luxury villa',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
