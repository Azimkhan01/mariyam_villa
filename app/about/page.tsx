'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Award, Users, MapPin, Clock } from 'lucide-react';

export default function AboutPage() {
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

      <div className="pt-32 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground text-balance">
              About Mariyam Villa
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Mariyam Villa is the epitome of luxury beachfront living. Meticulously designed and impeccably maintained, 
              our property offers an unparalleled vacation experience combining modern comfort with timeless elegance.
            </p>
          </motion.section>

          {/* Stats Section */}
          <motion.div
            className="grid md:grid-cols-4 gap-6 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Award,
                title: '5-Star Rating',
                desc: '128 verified guest reviews',
                color: 'text-amber-500'
              },
              {
                icon: Users,
                title: '12 Guests Maximum',
                desc: '5 luxury suites with en-suites',
                color: 'text-blue-500'
              },
              {
                icon: MapPin,
                title: 'Prime Location',
                desc: 'Beachfront with city access',
                color: 'text-rose-500'
              },
              {
                icon: Clock,
                title: '24/7 Service',
                desc: 'Dedicated concierge & support',
                color: 'text-green-500'
              },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="text-center p-8 bg-card rounded-xl border border-border hover:border-primary transition-colors"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className={`w-12 h-12 ${stat.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{stat.title}</h3>
                  <p className="text-muted-foreground text-sm">{stat.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="bg-card p-8 rounded-xl border border-border">
              <h2 className="text-3xl font-bold mb-4 text-primary">Our Mission</h2>
              <p className="text-card-foreground leading-relaxed">
                To provide our guests with an extraordinary beachfront experience that exceeds expectations. 
                We are committed to delivering personalized service, impeccable comfort, and unforgettable memories 
                in a luxurious setting.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-card p-8 rounded-xl border border-border">
              <h2 className="text-3xl font-bold mb-4 text-secondary">Our Vision</h2>
              <p className="text-card-foreground leading-relaxed">
                To be recognized as the premier luxury villa destination, known for our exceptional property, 
                world-class service, and dedication to creating life-changing experiences for our valued guests.
              </p>
            </motion.div>
          </motion.div>

          {/* Features */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground text-balance">
              The Mariyam Villa Experience
            </h2>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  title: 'Beachfront Paradise',
                  description: '500m of private pristine beach with water sports and sunset views'
                },
                {
                  title: 'Luxury Accommodations',
                  description: '5 exquisitely designed suites with premium bedding and amenities'
                },
                {
                  title: 'Culinary Excellence',
                  description: 'Michelin-trained chefs and gourmet dining experiences'
                },
                {
                  title: 'Wellness Sanctuary',
                  description: 'Spa, sauna, steam room, and fitness center for complete relaxation'
                },
                {
                  title: 'Entertainment Hub',
                  description: 'Home theater, gaming, and activities for all ages'
                },
                {
                  title: 'Concierge Service',
                  description: 'Personalized experiences and 24/7 guest support'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="text-center p-8 bg-card rounded-xl border border-border hover:border-primary transition-colors"
                >
                  <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Contact Info */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-12 border border-border text-center"
          >
            <h2 className="text-3xl font-bold mb-8 text-card-foreground">Ready to Experience Mariyam Villa?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact our dedicated team to check availability and make your reservation for an unforgettable luxury escape.
            </p>
          </motion.section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
