// Unescaped entities fixed automatically
"use client";

import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const valueProps = [
    {
      icon: "/icons/Gym-based-rehab.png",
      title: "Gym-Based Rehabilitation",
      text: "Our practice is located within a gym, making exercise rehabilitation programs easily accessible and convenient for your recovery journey.",
    },
    {
      icon: "/icons/close-professional.png",
      title: "Close Professional Relationship",
      text: "We maintain ongoing communication and follow-up care after your treatment to ensure you're progressing well and achieving your health goals.",
    },
    {
      icon: "/icons/patient-education.png",
      title: "Patient Education",
      text: "We take time to explain your condition and treatment plan, empowering you with knowledge to better understand and manage your health.",
    },
    {
      icon: "/icons/Patient-care.png",
      title: "Patient-Centered Care",
      text: "We focus on building genuine rapport and trust with each patient, ensuring your individual needs and goals are at the heart of your treatment.",
    },
  ];

  return (
    <>
      <Hero />

      {/* Welcome Section - white background */}
      <section className="relative bg-white py-16 md:py-20">
        {/* Subtle bottom gradient fade for smoother transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#7CB9DA]/20 pointer-events-none"></div>
        
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section header element */}
            <div className="mb-6">
              <span className="inline-block text-sm md:text-base font-semibold text-primary/70 uppercase tracking-wider mb-3">
                Our Clinic
              </span>
              <div className="w-16 h-0.5 bg-primary/40 mx-auto"></div>
            </div>
            
            <h2 className="text-[26px] md:text-4xl lg:text-[36px] font-heading font-semibold text-primary mb-8">
              Welcome to Inspire Health Osteo, Moorabbin
            </h2>
            
            <div className="text-xl md:text-2xl text-text-dark space-y-6 leading-relaxed md:leading-loose">
              <p>
                Throughout the years, we have achieved incredible results, treating all kinds of aches, 
                pains and injuries for people of all ages – from children to the elderly, pre and postnatal 
                women to tradies and office workers.
              </p>
              <p>
                We keep our treatment patient-focused, with accurate diagnosis and research-based techniques. 
                We aim to address the cause of your issue and prevent reoccurrence through education and 
                personalized management.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Propositions Section - Patient-Centered Care */}
      <div className="bg-[#7CB9DA] py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-6 md:space-y-8">
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-card p-6 md:p-8 shadow-card flex items-start gap-6 md:gap-8 transition-all duration-300"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-[3px] border-primary/30 flex items-center justify-center flex-shrink-0 bg-primary/5 p-2">
                  <Image
                    src={prop.icon}
                    alt={prop.title}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-[20px] md:text-2xl font-heading font-semibold text-primary mb-2">
                    {prop.title}
                  </h3>
                  <p className="text-base md:text-lg text-text-dark leading-[1.7]">
                    {prop.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Meet Dr Aditya Section */}
      <div className="bg-white py-20 pb-24 md:py-24 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 md:mb-12"
          >
            <h2 className="text-[28px] md:text-4xl lg:text-[36px] font-heading font-semibold text-primary mb-2 md:mb-4">
              Meet Dr Aditya
            </h2>
            <p className="text-base md:text-lg text-text-dark max-w-[600px] mx-auto">
              Your dedicated osteopathic practitioner with a passion for helping you achieve optimal health and function.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-lg md:rounded-card shadow-card"
              style={{
                background: 'linear-gradient(135deg, #E8F4F8 0%, #D1E9F1 50%, #B8DDE8 100%)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
              <Image
                src="/practitioners/aditya-devani.jpg.png"
                alt="Aditya Devani - Inspire Health Osteo Practitioner"
                fill
                className="object-contain object-center p-4 md:p-1 relative z-10"
                priority
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg md:rounded-card p-4 md:p-8 lg:p-10 shadow-card"
            >
              <h3 className="text-[24px] md:text-3xl font-heading font-bold text-primary mb-2 md:mb-3">
                Aditya Devani
              </h3>
              <p className="text-base md:text-lg text-light-blue font-semibold mb-4 md:mb-6 leading-[1.7]">
                Master of Health Science (Osteopathy)<br />
                Bachelor of Health Science (Osteopathy)<br />
                BSc (Hons) Sports
              </p>
              
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <p className="text-base leading-relaxed md:text-lg md:leading-[1.7] text-text-dark">
                  Aditya studied osteopathy at Victoria University and has not looked back since. With over 5 years of experience, he has worked in Paynesville and Warragul as an osteopath prior to starting Inspire Health Osteo.
                </p>
                <p className="text-base leading-relaxed md:text-lg md:leading-[1.7] text-text-dark">
                  Aditya&apos;s treatment approach focuses on understanding the person - who they are and what their life involves. He works closely with patients to understand their treatment goals, using a range of manual therapy techniques as well as exercise to help you move better.
                </p>
                <p className="text-base leading-relaxed md:text-lg md:leading-[1.7] text-text-dark">
                  When he&apos;s not seeing patients, Aditya loves watching and playing sport - with a keen interest in cricket, golf and keeping fit in the gym.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://inspire-health-osteo.au2.cliniko.com/bookings"
                  className="cliniko-book-online btn-primary text-center"
                >
                  Book an Appointment
                </a>
                <Link
                  href="/practitioners"
                  className="inline-block text-center px-8 py-4 rounded-full md:rounded-[8px] border-[3px] md:border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 4 Photo Collage Section */}
      <section className="bg-gradient-blue py-12 pb-24 md:py-24 md:pb-24 mt-8 mb-8 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4 md:gap-6 mb-12"
          >
            {/* Photo 1 - Top Left */}
            <div className="relative w-full aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/1.png"
                alt="Osteopathic treatment"
                fill
                className="object-cover"
              />
            </div>
            {/* Photo 2 - Top Right */}
            <div className="relative w-full aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/2.png"
                alt="Osteopathic treatment"
                fill
                className="object-cover"
              />
            </div>
            {/* Photo 3 - Bottom Left */}
            <div className="relative w-full aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/3.jpeg"
                alt="Osteopathic treatment"
                fill
                className="object-cover"
              />
            </div>
            {/* Photo 4 - Bottom Right */}
            <div className="relative w-full aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/4.png"
                alt="Osteopathic treatment"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-8 leading-snug md:leading-tight">
              What do we do?
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-[90%] md:max-w-[600px] mx-auto text-white space-y-6 text-base leading-relaxed md:text-lg md:leading-[1.7]"
          >
            <p>
              We use hands-on techniques like soft tissue work, stretching, and gentle manipulation to help your body get back to feeling its best. Our goal is simple: find what&apos;s causing your pain and work with you to fix it.
            </p>
            <p>
              Everyone&apos;s different, so we tailor each treatment to you. We take the time to understand your life, your goals, and what matters most. Then we use a mix of hands-on therapy and exercises to help you move better and feel better.
            </p>
            <p>
              At Inspire Health Osteo, we&apos;re here to help you get back to doing the things you love – pain-free and with ease.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 text-center"
          >
            <a
              href="https://inspire-health-osteo.au2.cliniko.com/bookings"
              className="cliniko-book-online inline-block py-2 px-4 text-sm rounded-md md:btn-primary md:py-4 md:px-8 md:text-base md:rounded-[8px] bg-accent text-[#111] font-semibold transition-all duration-300"
            >
              Book an Appointment
            </a>
          </motion.div>
        </div>
        {/* Subtle bottom fade */}
        <div className="h-6 bg-gradient-to-b from-[#A4C9E3] to-white absolute bottom-0 left-0 right-0"></div>
      </section>

      {/* Holistic Treatment Hero Section */}
      <section className="relative py-12 pb-24 md:py-32 lg:py-40 overflow-hidden bg-gradient-blue mt-8 mb-8">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-2 md:mb-6">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm md:text-base font-semibold mb-0 md:mb-6">
                Our Approach
              </span>
            </div>
            <h2 className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-snug md:leading-tight mb-6">
              We understand who you are<br className="hidden md:block" />
              <span className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl text-accent"> and what your life involves.</span>
            </h2>
            <p className="text-base leading-relaxed md:text-2xl md:leading-relaxed lg:text-3xl font-heading font-semibold text-white/95 max-w-[90%] md:max-w-4xl mx-auto">
              Our goal is to help you do the activities<br className="hidden md:block" /> that bring you joy with ease.
            </p>
          </motion.div>
        </div>
        {/* Subtle bottom fade */}
        <div className="h-6 bg-gradient-to-b from-[#A4C9E3] to-white absolute bottom-0 left-0 right-0 z-0"></div>
      </section>

      {/* How We Do It Section */}
      <section className="bg-white py-12 pb-24 md:py-20 md:pb-24 mt-8 mb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* How We Do It Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-8 leading-snug md:leading-tight">
              How we do it.
            </h2>
            <div className="text-base leading-relaxed md:text-lg md:leading-[1.7] text-text-dark space-y-6 max-w-[90%] md:max-w-[600px] mx-auto">
              <p>
                As highly trained and expertly skilled Osteopaths, we use a holistic treatment method to remedy all kinds of ailments using a range of gentle to more vigorous techniques. When considering a treatment plan, the best techniques to use will be determined post diagnosis, with your needs and considerations coming into play.
              </p>
              <p>
                With a focus on the musculoskeletal system as a whole, we treat the soft tissue areas of your body, as well as working on your spine and nervous system. Our treatment approach involves a wide variety of techniques including massage, METs (Muscle Energy Techniques), articulation, and manipulation.
              </p>
              <h3 className="text-[20px] md:text-2xl font-heading font-semibold text-light-blue mt-8 mb-4">
                By doing so we can assist in:
              </h3>
              <ul className="space-y-2 list-disc list-inside text-base leading-relaxed md:text-lg md:leading-[1.7] text-text-dark max-w-[90%] md:max-w-[600px]">
                <li>Musculoskeletal pain</li>
                <li>Neck and back pain</li>
                <li>Sports injuries</li>
                <li>Plantar Fasciitis</li>
                <li>Postural complaints</li>
                <li>Headaches and migraines</li>
                <li>Occupational injuries</li>
                <li>Joint pain</li>
                <li>Pregnancy-related pain</li>
                <li>Chronic pain</li>
                <li>Temporo-Mandibular Joint (TMJ) pain</li>
                <li>And so much more</li>
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <Link
                href="/services"
                className="inline-block py-2 px-4 text-sm rounded-md md:btn-primary md:py-4 md:px-8 md:text-base md:rounded-[8px] bg-accent text-[#111] font-semibold transition-all duration-300"
              >
                Book an Appointment
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </>
  );
};

export default Home;

