"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      id: "osteopathic",
      title: "Osteopathic Assessment & Treatment",
      description: "Involves a wide variety of techniques; massage, METs, articulation, manipulation. At Inspire Health Osteo we aim to assess what the root cause of your presenting complaint is and work with you to improve your pain levels and function. We use a range of manual therapy techniques as well as exercise to get you moving better.",
      benefits: [
        "Comprehensive assessment of root causes",
        "Wide variety of manual therapy techniques",
        "Massage, METs, articulation, and manipulation",
        "Pain relief and improved function",
        "Personalized treatment plans",
      ],
    },
    {
      id: "dry-needling",
      title: "Dry Needling & Cupping",
      description: "Where required dry needling and/or cupping can be used for management of musculoskeletal complaints.",
      benefits: [
        "Targeted treatment for musculoskeletal complaints",
        "Dry needling for trigger points and muscle tension",
        "Cupping therapy for improved circulation",
        "Complementary to osteopathic treatment",
        "Effective pain management",
      ],
    },
    {
      id: "exercise",
      title: "Exercise Rehabilitation",
      description: "Mobility, strength and stability exercises can aid in the recovery of various musculoskeletal injuries. These exercises are progressed as the patient continues to improve. We operate within a gym making exercise rehabilitation very accessible.",
      benefits: [
        "Gym-based rehabilitation for easy access",
        "Progressive exercise programs",
        "Mobility, strength and stability training",
        "Injury recovery and prevention",
        "Long-term functional improvements",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 flex items-center justify-center bg-gradient-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[28px] md:text-5xl font-heading font-bold"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[18px] md:text-xl mt-4 opacity-90"
          >
            Relieve pain and restore function
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 md:mb-20 last:mb-0"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4 md:mb-6">
                    {service.title}
                  </h2>
                  <p className="text-base md:text-lg text-dark/70 mb-4 md:mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    <h3 className="text-lg md:text-xl font-heading font-semibold text-primary">
                      What We Offer:
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-base md:text-lg text-dark/70">
                          <span className="text-accent mr-2">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={`bg-light rounded-xl p-6 md:p-8 h-full ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="aspect-video bg-primary/10 rounded-xl overflow-hidden relative">
                    <Image
                      src={`/images/${index + 5}.png`}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-heading font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Your first appointment will take 60 minutes, allowing us to thoroughly review your condition and devise the most appropriate course of treatment.
            </p>
            <a
              href="https://inspire-health-osteo.au2.cliniko.com/bookings"
              className="cliniko-book-online btn-primary inline-block text-lg"
            >
              Book an Appointment
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;

