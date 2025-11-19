"use client";

export default function BookOnline() {
  return (
    <div className="min-h-screen bg-[#EAF6FB] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-[#3E719D] mb-6">
          Make a Booking
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Select a service and time that suits you.
        </p>
        <div className="w-full h-[1800px] bg-white shadow-lg rounded-xl overflow-hidden">
          <iframe
            src="https://inspire-health-osteo.au2.cliniko.com/bookings"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
