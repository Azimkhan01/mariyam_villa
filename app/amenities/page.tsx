'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Wifi, Tv, Coffee, AirVent, Waves, Utensils, MapPin, Users, Heart, Shield, Wind, Zap, Lock, Dumbbell, BarChart3 } from 'lucide-react';

const amenitiesData = [
  {
    icon: Wifi,
    title: 'High-Speed WiFi',
    description: '1 Gbps fiber optic connectivity throughout the villa',
    color: 'text-blue-500'
  },
  {
    icon: Tv,
    title: 'Entertainment System',
    description: 'Home theater, smart TVs, and premium streaming services in every room',
    color: 'text-purple-500'
  },
  {
    icon: Coffee,
    title: 'Gourmet Kitchen',
    description: 'Professional-grade appliances and fully stocked with premium ingredients',
    color: 'text-amber-600'
  },
  {
    icon: AirVent,
    title: 'Climate Control',
    description: 'Advanced smart HVAC with room-by-room temperature management',
    color: 'text-cyan-500'
  },
  {
    icon: Waves,
    title: 'Infinity Pool',
    description: 'Heated infinity pool with underwater lighting and sunset views',
    color: 'text-teal-500'
  },
  {
    icon: Utensils,
    title: 'Dining Experience',
    description: 'Indoor and outdoor dining with stunning ocean views',
    color: 'text-orange-500'
  },
  {
    icon: Heart,
    title: 'Spa & Wellness',
    description: 'Private sauna, steam room, massage room, and yoga studio',
    color: 'text-red-500'
  },
  {
    icon: Shield,
    title: '24/7 Security',
    description: 'Advanced security system with CCTV and on-site security personnel',
    color: 'text-green-600'
  },
  {
    icon: Wind,
    title: 'Smart Home',
    description: 'Voice-controlled home automation for lighting, temperature, and entertainment',
    color: 'text-indigo-500'
  },
  {
    icon: Zap,
    title: 'Power Backup',
    description: 'Solar panels and generators for continuous power supply',
    color: 'text-yellow-500'
  },
  {
    icon: MapPin,
    title: 'Concierge Service',
    description: '24/7 dedicated concierge for restaurant reservations, tours, and activities',
    color: 'text-rose-500'
  },
  {
    icon: Lock,
    title: 'Private Beach',
    description: '500m of pristine private beach with water sports equipment',
    color: 'text-teal-600'
  },
  {
    icon: Dumbbell,
    title: 'Fitness Center',
    description: 'Fully equipped gym with modern equipment and yoga mats',
    color: 'text-purple-600'
  },
  {
    icon: Users,
    title: 'Multiple Guest Suites',
    description: '5 luxury bedrooms with premium en-suite bathrooms',
    color: 'text-fuchsia-500'
  },
];

export default function AmenitiesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground text-balance">
              Mariyam Villa Amenities
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every detail has been carefully curated to provide an unforgettable luxury experience
            </p>
          </motion.div>

          {/* Amenities Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {amenitiesData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group p-8 bg-card rounded-xl border border-border hover:border-primary shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <motion.div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <Icon className={`w-8 h-8 ${item.color}`} />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-card-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-12 border border-border"
          >
            <h2 className="text-3xl font-bold mb-8 text-card-foreground">What Makes Mariyam Villa Special</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Architectural Excellence',
                  points: [
                    'Contemporary design with traditional elements',
                    'Premium sustainable materials',
                    'Floor-to-ceiling windows with ocean views',
                    'Custom Italian and European finishes'
                  ]
                },
                {
                  title: 'Luxury & Comfort',
                  points: [
                    'Premium Egyptian cotton linens',
                    'Michelin-star chef available',
                    'Premium minibar in every room',
                    'Personalized welcome amenities'
                  ]
                },
                {
                  title: 'Security & Privacy',
                  points: [
                    'Gated property with private entrance',
                    '24/7 CCTV monitoring',
                    'Biometric access control',
                    'Privacy guaranteed with NDA available'
                  ]
                },
                {
                  title: 'Dedicated Support',
                  points: [
                    'Personal villa manager on-call',
                    'Multilingual staff available',
                    'Flexible activity arrangements',
                    'Transportation and yacht services'
                  ]
                }
              ].map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold mb-4 text-foreground">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.points.map((point, pidx) => (
                      <li key={pidx} className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">✓</span>
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
