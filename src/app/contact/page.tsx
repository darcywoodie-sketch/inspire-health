"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white text-center"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/90 mt-4"
          >
            We&apos;re here to help. Get in touch with us today.
          </motion.p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-dark font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-dark/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-dark font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-dark/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-dark font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-dark/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="bg-green-100 text-green-800 px-4 py-3 rounded-xl">
                    Thank you! Your message has been sent. We&apos;ll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-100 text-red-800 px-4 py-3 rounded-xl">
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                    Address
                  </h3>
                  <p className="text-primary font-semibold">
                    Factory 23, 26-28 Roberna St<br />
                    Moorabbin VIC 3189<br />
                    Australia<br />
                    <span className="text-sm italic text-dark/70 font-normal">Located on the 1st floor of Iron Viking Gym</span>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                    Phone
                  </h3>
                  <a href="tel:+61432732686" className="text-dark/70 hover:text-primary transition-colors">
                    0432 732 686
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                    Email
                  </h3>
                  <a href="mailto:inspirehealthosteo@gmail.com" className="text-dark/70 hover:text-primary transition-colors">
                    inspirehealthosteo@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                    Opening Hours
                  </h3>
                  <div className="text-dark/70 space-y-1">
                    <p className="text-primary font-semibold">Monday: 9:00 AM - 6:00 PM</p>
                    <p>Tuesday: Closed</p>
                    <p className="text-primary font-semibold">Wednesday: 8:00 AM - 8:00 PM</p>
                    <p>Thursday: Closed</p>
                    <p>Friday: Closed</p>
                    <p className="text-primary font-semibold">Saturday: 8:00 AM - 11:00 AM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="https://inspire-health-osteo.au2.cliniko.com/bookings"
                    className="cliniko-book-online btn-primary inline-block"
                  >
                    Book an Appointment
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
              Find Us
            </h2>
            <div className="relative bg-white rounded-card shadow-card overflow-hidden border-2 border-primary/10 hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none z-10"></div>
                {/* 
                  IMPORTANT: To get the map to center properly, we need the embed code from Google Maps.
                  
                  Steps to get the embed code:
                  1. Go to: https://www.google.com/maps/place/Iron+Viking+Gym/@-37.9467973,145.0674355,17z
                  2. Click the "Share" button (top right of the info panel)
                  3. Click the "Embed a map" tab
                  4. Copy the ENTIRE src URL from the iframe code
                  5. Replace the URL below with that src URL
                  
                  The embed code will be a long URL starting with:
                  https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...
                */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.123456789!2d145.0696242!3d-37.9467973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66d0e90a98d1b%3A0x283b11d123157a8f!2sIron%20Viking%20Gym!5e0!3m2!1sen!2sau!4v1735123456789!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full relative z-0"
                  title="Iron Viking Gym - Factory 23, 26-28 Roberna St, Moorabbin VIC 3189"
                />
              </div>
              <div className="absolute bottom-4 right-4 z-30">
                <a
                  href="https://www.google.com/maps/place/Iron+Viking+Gym/@-37.9467973,145.0674355,17z/data=!4m6!3m5!1s0x6ad66d0e90a98d1b:0x283b11d123157a8f!8m2!3d-37.9467973!4d145.0696242!16s%2Fg%2F11gydm1dsw?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-4 py-2 rounded-lg shadow-lg hover:bg-primary/90 transition-colors text-sm font-semibold"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;

