import type { Metadata } from "next";
import PractitionerCard from "@/components/PractitionerCard";

export const metadata: Metadata = {
  title: "Our Practitioners - Inspire Health Osteo",
  description: "Meet our team of qualified osteopathic practitioners dedicated to your health and wellbeing.",
  openGraph: {
    title: "Our Practitioners - Inspire Health Osteo",
    description: "Meet our team of qualified osteopathic practitioners.",
    type: "website",
  },
};

const Practitioners = () => {
  const practitioners = [
    {
      name: "Aditya Devani",
      qualifications: "Master of Health Science (Osteopathy), Bachelor of Health Science (Osteopathy), BSc (Hons) Sports",
      bio: "Aditya studied osteopathy at Victoria University and has not looked back since. With over 5 years of experience, he has worked in Paynesville and Warragul as an osteopath prior to starting Inspire Health Osteo. Aditya's treatment approach focuses on understanding the person - who they are and what their life involves. He works closely with patients to understand their treatment goals, using a range of manual therapy techniques as well as exercise to help you move better. Ultimately, helping a patient be able to do the activities that bring them joy with ease is the main goal. When he's not seeing patients, Aditya loves watching and playing sport - with a keen interest in cricket, golf and keeping fit in the gym.",
      image: "/practitioners/aditya-devani.jpg.png",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[28px] md:text-5xl font-heading font-bold text-white">
            Our Practitioners
          </h1>
          <p className="text-[18px] md:text-xl mt-4 text-white/90">
            Experienced professionals dedicated to your health
          </p>
        </div>
      </section>

      {/* Practitioners Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practitioners.map((practitioner, index) => (
              <PractitionerCard
                key={practitioner.name}
                name={practitioner.name}
                qualifications={practitioner.qualifications}
                bio={practitioner.bio}
                image={practitioner.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[28px] md:text-4xl font-heading font-bold text-primary mb-6">
            Book an Appointment
          </h2>
          <p className="text-base md:text-lg text-dark/70 mb-8 leading-[1.7] max-w-[600px] mx-auto">
            Ready to meet with one of our practitioners? Book your appointment today.
          </p>
          <a
            href="https://inspire-health-osteo.au2.cliniko.com/bookings"
            className="cliniko-book-online btn-primary inline-block text-lg"
          >
            Book an Appointment
          </a>
        </div>
      </section>
    </>
  );
};

export default Practitioners;

