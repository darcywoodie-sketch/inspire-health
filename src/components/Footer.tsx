import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative text-white py-20 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0CB4D0 0%, #0899B0 50%, #067A8F 100%)'
    }}>
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div>
            <Image
              src="/logos/1.png"
              alt="Inspire Health Osteo Logo"
              width={140}
              height={70}
              className="h-14 w-auto mb-6"
            />
            <p className="text-white text-base leading-relaxed font-medium">
              Relieve Pain. Restore Movement. Reconnect with Your Best Self.
            </p>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-heading font-bold text-white mb-5 text-xl">Address</h3>
            <div className="text-white text-base leading-relaxed space-y-2">
              <p className="font-medium text-accent">
                26-28 Roberna St<br />
                Moorabbin VIC 3189<br />
                Australia
              </p>
              <p className="text-sm text-white/90 italic mt-3">
                Located on the 1st floor of Iron Viking Gym
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=26-28+Roberna+St,+Moorabbin+VIC+3189"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-semibold hover:text-accent/90 hover:underline inline-block mt-4 transition-colors"
              >
                View on Google Maps →
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-white mb-5 text-xl">Contact</h3>
            <div className="text-white text-base leading-relaxed space-y-4">
              <div>
                <p className="font-semibold mb-2 text-white/90">Phone</p>
                <a href="tel:+61432732686" className="text-accent font-bold text-lg hover:text-accent/90 hover:underline transition-colors">
                  0432 732 686
                </a>
              </div>
              <div>
                <p className="font-semibold mb-2 text-white/90">Email</p>
                <a href="mailto:inspirehealthosteo@gmail.com" className="text-accent font-bold hover:text-accent/90 hover:underline transition-colors break-all">
                  inspirehealthosteo@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="font-heading font-bold text-white mb-5 text-xl">Hours</h3>
            <div className="text-white text-base leading-relaxed space-y-2 mb-6">
              <p className="font-medium text-accent">Monday: 9:00 AM - 6:00 PM</p>
              <p className="text-white/80">Tuesday: Closed</p>
              <p className="font-medium text-accent">Wednesday: 8:00 AM - 8:00 PM</p>
              <p className="text-white/80">Thursday: Closed</p>
              <p className="text-white/80">Friday: Closed</p>
              <p className="font-medium text-accent">Saturday: 8:00 AM - 11:00 AM</p>
              <p className="text-white/80">Sunday: Closed</p>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.inspireosteo.com.au/book"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/inspirehealthosteo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/30 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-base font-medium">
              &copy; {new Date().getFullYear()} Inspire Health Osteo. All rights reserved.
            </p>
            <div className="flex gap-6 text-base">
              <Link href="/about" className="text-white hover:text-accent transition-colors font-medium">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-white hover:text-accent transition-colors font-medium">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

