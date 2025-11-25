"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PractitionerCardProps {
  name: string;
  qualifications: string;
  bio: string;
  image: string;
  index: number;
}

const PractitionerCard = ({
  name,
  qualifications,
  bio,
  image,
  index,
}: PractitionerCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-soft overflow-hidden"
    >
      <div className="flex flex-col md:flex-row">
        <div className="relative h-64 md:h-auto md:w-80 flex-shrink-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain object-center p-2 md:p-4"
          />
        </div>
        <div className="p-6 md:p-10 md:py-12 flex-1 flex flex-col justify-center">
          <h3 className="text-[20px] md:text-2xl font-heading font-semibold text-primary mb-4 md:mb-5">
            {name}
          </h3>
          <p className="text-base md:text-lg text-light-blue font-medium mb-5 md:mb-6 leading-[1.7]">{qualifications}</p>
          <p className="text-base md:text-lg text-dark/70 leading-[1.8] md:leading-[1.9]">{bio}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PractitionerCard;

