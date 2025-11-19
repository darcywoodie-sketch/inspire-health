"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
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
            Our Story
          </motion.h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#5DA9C6] mb-6 text-center">
              Welcome to Inspire Health Osteo
            </h2>
            <div className="text-xl md:text-2xl leading-relaxed text-gray-700">
              <p className="mb-6">
                At Inspire Health Osteo, we assess the root cause of your complaint and work with you to improve 
                your pain levels and function using manual therapy techniques and exercise.
              </p>
              <p className="mb-6">
                Our clinic operates within Iron Viking Gym, making exercise rehabilitation very accessible. 
                We provide comprehensive care that combines hands-on treatment with practical exercise programs 
                tailored to your needs.
              </p>
              <p className="mb-6">
                Since opening, we&apos;ve treated over 100 patients with a focus on patient-centered care, 
                education, and empowering you to have autonomy over your health. We maintain close professional 
                relationships with follow-up support throughout your recovery.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 bg-light">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#5DA9C6] mb-4">
              Our Philosophy
            </h2>
            <p className="text-lg text-gray-700">
              We believe in treating the whole person, not just the symptoms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-soft text-center"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src="/icons/care.png"
                  alt="Care"
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-primary mb-3">
                Care
              </h3>
              <p className="text-gray-700">
                We provide quality patient-centered care, taking the time to understand who you are 
                and what your life involves. Your wellbeing is our priority.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-soft text-center"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src="/icons/honesty.png"
                  alt="Honesty"
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-primary mb-3">
                Honesty
              </h3>
              <p className="text-gray-700">
                We believe in transparent communication and honest assessment. We educate patients 
                about their presenting complaint and the treatment techniques they will receive.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-soft text-center"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src="/icons/passion.png"
                  alt="Passion"
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-primary mb-3">
                Passion
              </h3>
              <p className="text-gray-700">
                We are passionate about helping you achieve your treatment goals. Our ultimate aim 
                is helping you do the activities that bring you joy with ease.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#5DA9C6] mb-4">
              Our Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-light p-6 rounded-xl"
            >
              <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                Our Mission
              </h3>
              <p className="text-gray-700">
                Our aim is to provide quality patient centered care for patients, educate patients 
                about their presenting complaint and give patients the tools to have autonomy over their health.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-light p-6 rounded-xl"
            >
              <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                Treatment Philosophy
              </h3>
              <p className="text-gray-700">
                My treatment approach is to understand the person - who they are and what their life involves. 
                Understand their treatment goals and work towards that. Ultimately, helping a patient be able 
                to do the activities that bring them joy with ease is the main goal.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-light p-6 rounded-xl"
            >
              <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                What to Expect
              </h3>
              <p className="text-gray-700">
                During your first visit, we will go through your history - including current and past medical 
                history, medications, and procedures. We&apos;ll then assess what is causing the discomfort, 
                provide treatment, and finish with exercise rehabilitation and lifestyle advice.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-light p-6 rounded-xl"
            >
              <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                Our Unique Approach
              </h3>
              <p className="text-gray-700">
                We operate within a gym, making exercise rehabilitation very accessible. We keep a close 
                professional relationship with patients by following up post treatment, and we focus on 
                building rapport to build trust when receiving treatment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-12 pb-12 bg-gradient-blue mb-0">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-white/90 mb-10">
              Book an appointment with us today and take the first step towards better health.
            </p>
            <a
              href="https://inspire-health-osteo.au2.cliniko.com/bookings"
              className="btn-primary mt-10 inline-block"
            >
              Book an Appointment
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;

