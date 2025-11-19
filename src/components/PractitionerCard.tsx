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
      <div className="relative h-64 w-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain object-center p-2"
        />
      </div>
      <div className="p-6">
        <h3 className="text-[20px] md:text-2xl font-heading font-semibold text-primary mb-2">
          {name}
        </h3>
        <p className="text-base md:text-lg text-accent font-medium mb-3 leading-[1.7]">{qualifications}</p>
        <p className="text-base md:text-lg text-dark/70 leading-[1.7]">{bio}</p>
      </div>
    </motion.div>
  );
};

export default PractitionerCard;

