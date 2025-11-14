'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Filter, ChevronRight } from 'lucide-react';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredId, setHoveredId] = useState(null);

  const galleryItems = [
    {
      id: 1,
      name: 'Master Suite',
      category: 'bedrooms',
      location: 'Main Wing',
      image: '/luxury-master-bedroom-beachfront-villa-king-size-b.jpg',
      rating: 5.0,
    },
    {
      id: 2,
      name: 'Infinity Pool',
      category: 'pool',
      location: 'Terrace',
      image: '/luxury-infinity-pool-beachfront-sunset-evening-lig.jpg',
      rating: 5.0,
    },
    {
      id: 3,
      name: 'Living Area',
      category: 'living',
      location: 'Main Floor',
      image: '/luxury-villa-living-room-modern-design-elegant-fur.jpg',
      rating: 5.0,
    },
    {
      id: 4,
      name: 'Gourmet Kitchen',
      category: 'kitchen',
      location: 'Main Floor',
      image: '/professional-chef-kitchen-luxury-villa-stainless-s.jpg',
      rating: 5.0,
    },
    {
      id: 5,
      name: 'Guest Suite 1',
      category: 'bedrooms',
      location: 'East Wing',
      image: '/luxury-guest-bedroom-villa-modern-design-comfortab.jpg',
      rating: 5.0,
    },
    {
      id: 6,
      name: 'Private Spa',
      category: 'spa',
      location: 'Wellness Center',
      image: '/luxury-spa-sauna-steam-room-wellness-center-relaxa.jpg',
      rating: 5.0,
    },
    {
      id: 7,
      name: 'Beachfront',
      category: 'beach',
      location: 'Private Beach',
      image: '/private-beach-golden-sand-sunset-ocean-tropical-pa.jpg',
      rating: 5.0,
    },
    {
      id: 8,
      name: 'Dining Room',
      category: 'dining',
      location: 'Main Floor',
      image: '/luxury-dining-room-villa-elegant-table-ocean-view.jpg',
      rating: 5.0,
    },
    {
      id: 9,
      name: 'Home Theater',
      category: 'entertainment',
      location: 'Lower Level',
      image: '/luxury-home-theater-cinema-room-comfortable-seatin.jpg',
      rating: 5.0,
    },
    {
      id: 10,
      name: 'Guest Suite 2',
      category: 'bedrooms',
      location: 'West Wing',
      image: '/luxury-villa-bedroom-suite-modern-design-elegant-d.jpg',
      rating: 5.0,
    },
    {
      id: 11,
      name: 'Outdoor Lounge',
      category: 'terrace',
      location: 'Terrace',
      image: '/luxury-outdoor-lounge-terrace-comfortable-seating-.jpg',
      rating: 5.0,
    },
    {
      id: 12,
      name: 'Guest Suite 3',
      category: 'bedrooms',
      location: 'North Wing',
      image: '/luxury-bedroom-villa-comfortable-bed-garden-view.jpg',
      rating: 5.0,
    },
  ];

  const filters = [
    { id: 'all', label: 'All Rooms' },
    { id: 'bedrooms', label: 'Bedrooms' },
    { id: 'pool', label: 'Pool & Terrace' },
    { id: 'kitchen', label: 'Kitchen & Dining' },
    { id: 'spa', label: 'Spa & Wellness' },
    { id: 'entertainment', label: 'Entertainment' },
  ];

  const filteredItems = useMemo(() => {
    return activeFilter === 'all' ? galleryItems : galleryItems.filter(v => v.category === activeFilter);
  }, [activeFilter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 },
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
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground text-balance">
              Mariyam Villa Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore every corner of our luxury beachfront property. Each space is meticulously designed for ultimate comfort and elegance.
            </p>
          </motion.div>

          {/* Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-3 justify-center mb-16"
          >
            <div className="flex items-center gap-2 text-muted-foreground mb-2 w-full justify-center">
              <Filter className="w-5 h-5" />
              <span className="font-semibold">Explore By Room:</span>
            </div>
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeFilter === filter.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card text-foreground hover:bg-muted border border-border'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            className="grid md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="wait">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  layout
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative h-64 overflow-hidden bg-muted">
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Content Overlay */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-4 text-white"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-200 mb-3">{item.location}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm bg-white/20 px-2 py-1 rounded">⭐ {item.rating}</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-muted-foreground">No rooms found in this category.</p>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
