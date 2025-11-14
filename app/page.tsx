'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MapPin, Star, Waves, Users, Heart } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'VacationRental',
      name: 'Mariyam Villa - Luxury Beachfront Property',
      description: 'Stunning beachfront luxury villa with 5 bedrooms, private beach access, and world-class amenities',
      url: 'https://mariyamvilla.com',
      telephone: '+971-4-MARIYAM',
      email: 'info@mariyamvilla.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Beachfront, Premium Location',
        addressCountry: 'AE'
      },
      priceRange: '$2000-$5000',
      rating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        ratingCount: '128'
      },
      amenityFeature: ['Private Beach', 'Infinity Pool', 'Smart Home', 'Spa', 'Concierge'],
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return () => document.head.removeChild(script);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section ref={heroRef} className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src="/luxury-beachfront-villa-sunset-golden-hour-private.jpg"
            alt="Mariyam Villa beachfront luxury property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </motion.div>

        <motion.div
          className="relative z-10 text-center text-white max-w-3xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <span className="bg-primary/20 backdrop-blur text-primary px-4 py-2 rounded-full text-sm font-semibold">
              Luxury Beachfront Living
            </span>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight"
          >
            Mariyam Villa
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8 text-gray-100"
          >
            Your private sanctuary awaits. Experience unparalleled luxury with private beach access, stunning sunset views, and world-class amenities.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Link
              href="/gallery"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-all"
            >
              Explore Gallery <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold backdrop-blur transition-all"
            >
              Reserve Now
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Waves,
                title: 'Private Beach Access',
                desc: 'Exclusive beachfront with 500m of pristine shoreline and water sports facilities'
              },
              {
                icon: Heart,
                title: 'Luxury Amenities',
                desc: 'Infinity pool, spa, gourmet kitchen, home automation, and full concierge service'
              },
              {
                icon: Users,
                title: 'Perfect for Groups',
                desc: '5 luxury suites accommodating up to 12 guests with premium en-suite bathrooms'
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8 rounded-xl bg-background"
                >
                  <motion.div
                    className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 mx-auto"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground text-balance">
              Experience Luxury Living
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mariyam Villa is a masterpiece of modern design combined with timeless elegance
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/luxury-villa-interior-modern-design-elegant-living.jpg"
                alt="Mariyam Villa interior design"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl font-bold mb-3 text-foreground">5 Star Rating</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mariyam Villa has received consistent 5-star reviews from guests around the world, praising its exceptional service, stunning location, and luxurious amenities.
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <Star className="w-6 h-6 text-primary fill-primary" />
                <span className="text-muted-foreground">128 verified guest reviews</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-primary" />
                <span className="text-muted-foreground">Prime beachfront location with city access</span>
              </div>

              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all mt-6"
              >
                View All Photos <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
