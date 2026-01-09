import React from "react";

const Location: React.FC = () => {
  return (
    <section className="w-full bg-[#FAF6ED] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          
          {/* LEFT: MAP */}
          <div className="w-full h-80 md:h-[400px]">
            <iframe
              title="Kingsland Gardens, Northampton"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.007623691162!2d-0.8987250999999999!3d52.261406599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48770ebd52984a27%3A0x77f29edc521b88fb!2sKingsland%20Gardens%2C%20Northampton%2C%20UK!5e0!3m2!1sen!2set!4v1767753450539!5m2!1sen!2set"
              className="h-full w-full rounded-xl shadow-md border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* RIGHT: INFO */}
          <div>
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900">
              Find Us in Northampton
            </h2>

            <p className="mb-4 text-lg leading-relaxed text-gray-700">
              You’ll find us at <strong>Kingsland Gardens, Northampton</strong>,
              a convenient and welcoming spot in the heart of the town. Whether
              you’re collecting an order or just stopping by, we’re easy to
              reach.
            </p>

            <p className="mb-6 text-gray-700">
              Use the map to get directions, check traffic, or open the location
              directly in Google Maps.
            </p>

            <a
              href="https://share.google/FjxQZkPXvRANq6zKw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-white transition hover:bg-yellow-600"
            >
              Open in Google Maps
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
