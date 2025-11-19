"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/practitioners", label: "Practitioners" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 md:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/2.png"
              alt="Inspire Health Osteo Logo"
              width={200}
              height={100}
              className="h-16 md:h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-dark hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://inspire-health-osteo.au2.cliniko.com/bookings"
              className="cliniko-book-online btn-primary"
            >
              Book an Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-dark transition-all ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-dark transition-all ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-dark transition-all ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`
          fixed bottom-0 left-0 right-0 z-50 flex flex-col transition-transform duration-300 md:hidden
          ${isOpen ? "translate-y-0" : "translate-y-full pointer-events-none"}
          h-[75vh] bg-white/95 backdrop-blur-sm rounded-t-3xl shadow-2xl overflow-hidden
        `}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src="/logos/2.png"
              alt="Inspire Health Osteo Logo"
              width={140}
              height={60}
              className="h-10 w-auto"
            />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="text-3xl font-light text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        {/* Navigation Links as Cards */}
        <nav className="flex flex-col gap-4 px-6 pt-6 pb-4 overflow-hidden flex-1">
          {navLinks.map((link, index) => {
            // Progressive gradient: top card (index 0) is darkest, bottom card (index 4) is lightest
            const totalCards = navLinks.length;
            const opacityStart = 0.85; // Darkest (top)
            const opacityEnd = 0.5;   // Lightest (bottom)
            const opacity = opacityStart - ((opacityStart - opacityEnd) * (index / (totalCards - 1)));
            
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group relative block p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(135deg, rgba(94, 179, 217, ${opacity}) 0%, rgba(126, 198, 232, ${opacity}) 100%)`,
                  backdropFilter: 'blur(10px)',
                }}
              >
                <span className="text-2xl font-semibold text-white">
                  {link.label}
                </span>
                <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
              </Link>
            );
          })}
        </nav>

        {/* Bottom CTA */}
        <div className="px-6 pb-6 pt-0 flex-shrink-0">
          <a
            href="https://inspire-health-osteo.au2.cliniko.com/bookings"
            className="w-full block text-center bg-gradient-to-r from-[#F7E250] to-[#EADB4B] text-[#111] font-bold text-lg py-5 rounded-2xl shadow-lg cliniko-book-online hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

