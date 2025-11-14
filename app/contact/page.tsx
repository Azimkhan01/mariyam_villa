'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    startDate: '',
    endDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Format the message with proper structure
    const formattedMessage = `
MARIYAM VILLA - RESERVATION INQUIRY

Guest Information:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Requested Dates:
Check-in: ${formData.startDate}
Check-out: ${formData.endDate}

Additional Message:
${formData.message}

---
Submitted via Mariyam Villa Official Website
Date: ${new Date().toLocaleString()}
    `;

    // Simulate form submission
    setTimeout(() => {
      // Create mailto link with formatted data
      const mailtoLink = `mailto:reservations@mariyamvilla.com?subject=Mariyam Villa Reservation Inquiry from ${formData.name}&body=${encodeURIComponent(formattedMessage)}`;
      window.location.href = mailtoLink;
      
      setLoading(false);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          startDate: '',
          endDate: '',
          message: '',
        });
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

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
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground text-balance">
              Reserve Mariyam Villa
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to experience luxury beachfront living? Contact our dedicated team to secure your dates and begin planning your perfect escape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-1 space-y-6"
            >
              {[
                {
                  icon: Phone,
                  title: 'Phone',
                  content: '+971-4-MARIYAM',
                  color: 'text-blue-500',
                },
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'reservations@mariyamvilla.com',
                  color: 'text-purple-500',
                },
                {
                  icon: Clock,
                  title: 'Hours',
                  content: '24/7 Available',
                  color: 'text-amber-600',
                },
                {
                  icon: MapPin,
                  title: 'Location',
                  content: 'Beachfront Premium Location',
                  color: 'text-rose-500',
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-card-foreground mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.content}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <div className="bg-card rounded-xl border border-border p-8">
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-green-700"
                  >
                    ✓ Thank you! Check your email client to send your reservation inquiry.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                      <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                        placeholder="Your name"
                      />
                    </motion.div>

                    {/* Email */}
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                      <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                        placeholder="your@email.com"
                      />
                    </motion.div>

                    {/* Phone */}
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                      <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                        placeholder="+971 (4) 123-4567"
                      />
                    </motion.div>

                    {/* Start Date */}
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                      <label className="block text-sm font-semibold text-foreground mb-2">Check-in Date *</label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                      />
                    </motion.div>

                    {/* End Date */}
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                      <label className="block text-sm font-semibold text-foreground mb-2">Check-out Date *</label>
                      <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                      />
                    </motion.div>
                  </div>

                  {/* Message */}
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
                    <label className="block text-sm font-semibold text-foreground mb-2">Special Requests</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground resize-none"
                      placeholder="Let us know about any special arrangements or preferences..."
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary hover:bg-primary/90 disabled:bg-muted text-primary-foreground font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-5 h-5" />
                    {loading ? 'Sending...' : 'Send Reservation Inquiry'}
                  </motion.button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Required fields. Our team will respond within 24 hours.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="text-4xl font-bold text-center mb-8 text-foreground">Find Us Here</h2>
            <div className="bg-card rounded-xl overflow-hidden border border-border shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.3577146093544!2d55.27089!3d25.18411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6c7c0000000%3A0x0!2zMjXCsDExJzAyLjAiTiA1NcKwMTYnMjcuMiJF!5e0!3m2!1sen!2sae!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
