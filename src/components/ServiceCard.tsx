"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  index: number;
}

const ServiceCard = ({ title, description, href, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={href}>
        <div className="bg-white p-6 rounded-xl shadow-soft hover:shadow-lg transition-shadow h-full">
          <h3 className="text-[20px] md:text-2xl font-heading font-semibold text-primary mb-3">
            {title}
          </h3>
          <p className="text-base md:text-lg text-dark/70 leading-[1.7]">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;

