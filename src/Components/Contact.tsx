import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="w-full bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-2 md:text-left">
          
          {/* LEFT: CONTACT INFO */}
          <div>
            <h2 className="text-4xl font-extrabold">
              Get in Touch
            </h2>

            <p className="mt-4 max-w-md text-lg text-gray-300">
              Questions, orders, or just saying hi — feel free to reach out!
            </p>

            <div className="mt-8 space-y-4 text-lg">
              <p>
                <span className="font-semibold text-white">Phone:</span>{" "}
                <a
                  href="tel:07367681747"
                  className="text-yellow-400 hover:underline"
                >
                  07367 681747
                </a>
              </p>

              <p>
                <span className="font-semibold text-white">Address:</span>{" "}
                <span className="text-gray-300">
                  Northampton, NN2 7PW
                </span>
              </p>
            </div>
          </div>

          {/* RIGHT: SOCIALS */}
          <div className="flex flex-col items-center justify-center md:items-start">
            <h3 className="text-2xl font-bold">
              Follow Us
            </h3>

            <div className="mt-6 flex gap-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/meenyskitchen?igsh=MWFwbDBxdzg4ZG90Mw%3D%3D&utm_source=qr"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-800 p-3 transition-colors hover:bg-yellow-500"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm0 9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm5.8-9.8a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6z" />
                </svg>
              </a>

              {/* Snapchat */}
              <a
                href="https://snapchat.com/t/OmGdtl3k"
                aria-label="Snapchat"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-800 p-3 transition-colors hover:bg-yellow-500"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2c-4.5 0-8 3.7-8 8.3 0 2.6 1.5 5.1 3.7 6.6v.2c0 .6-.5.7-.8.8-.7.2-1.5.3-1.5.8 0 .6 1.2 1 2.2 1 .3 0 .5 0 .6.1.2.2.2.5.4.7.4.5 1.2.9 2.4.9s2-.3 2.5-.9c.2-.2.2-.5.4-.7 0-.1.2-.1.5-.1 1 0 2.2-.3 2.2-1 0-.5-.8-.6-1.5-.8-.3-.1-.8-.2-.8-.8v-.2c2.2-1.5 3.7-4 3.7-6.6C20 5.7 16.5 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
