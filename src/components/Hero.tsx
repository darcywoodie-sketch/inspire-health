"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[110vh] h-[110vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/clinic/inspire_bed.png"
          alt="Inspire Health Osteo Clinic"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0, objectPosition: 'center bottom' }}
        />
        {/* Soft Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-[700px] mx-auto -mt-32 md:-mt-48"
      >
        <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
          Inspire Health Osteo
        </h1>
        <h2 className="text-2xl md:text-3xl font-heading font-normal text-white/95 mb-8 leading-relaxed">
          Relieve Pain and Restore Function
        </h2>
        <p className="text-lg md:text-xl text-white/90 mx-auto mb-12 leading-[1.8]">
          Based in Moorabbin, Inspire Health Osteo has been helping the local community from our conveniently located practice on the 1st floor of Iron Viking Gym.
        </p>
        <a
          href="https://inspire-health-osteo.au2.cliniko.com/bookings"
          className="cliniko-book-online btn-primary inline-block text-lg"
        >
          Book an Appointment
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

