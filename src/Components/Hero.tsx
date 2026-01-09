import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero.jpg";
import popupImage from "../assets/Popup.jpg";

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const goToMenu = (orderType?: "delivery" | "pickup") => {
    setIsModalOpen(false);

    if (orderType) {
      navigate("/menu", {
        state: { orderType },
      });
    } else {
      navigate("/menu");
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* LEFT: TEXT */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Meeny’s Kitchen & Grill
              </h1>

              <p className="mt-4 max-w-xl text-lg text-gray-600">
              Introducing Meeny’s — where authenticity meets flavour! 🍲
              A true Blasian fusion of Caribbean spice and Asian soul, crafted with love and passion.
              Follow us on our journey as we bring the taste of home-cooked goodness to your plate.
              </p>

              <button
               onClick={() => setIsModalOpen(true)}
                className="group mt-8 inline-flex items-center justify-center gap-3 rounded-md bg-green-600 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-green-700"
              >
              <span>Order Now</span>
              <svg
                className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
              </svg>
              </button>

            </div>

            {/* RIGHT: IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={heroImage}
                alt="Featured food"
                className="w-full max-w-lg rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MODAL OVERLAY */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setIsModalOpen(false)}
        >
          {/* MODAL CONTENT */}
          <div
            className="relative w-full max-w-md rounded-lg bg-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-700 hover:bg-white"
              aria-label="Close"
            >
              ✕
            </button>

            {/* MODAL IMAGE */}
            <img
              src={popupImage}
              alt="Order options"
              className="h-48 w-full rounded-t-lg object-cover"
            />

            {/* MODAL CONTENT */}
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Click + Collect
                <br />
                Takeaway + Pickup
              </h2>

              <div className="mt-6 space-y-4">
                <button
                  onClick={() => goToMenu("delivery")}
                  className="group flex w-full items-center justify-between rounded-md bg-yellow-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-yellow-600"
                >
                  <span>ORDER FOR DELIVERY</span>
                  <svg
                    className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M13 5l7 7-7 7" />
                  </svg>
                </button>

                <button
                  onClick={() => goToMenu("pickup")}
                  className="group flex w-full items-center justify-between rounded-md bg-yellow-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-yellow-600"
                >
                  <span>CLICK & COLLECT</span>
                  <svg
                    className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M13 5l7 7-7 7" />
                  </svg>
                </button>

                <button
                  onClick={() => goToMenu()}
                  className="group flex w-full items-center justify-between rounded-md bg-yellow-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-yellow-600"
                >
                  <span>BROWSE MENU</span>
                  <svg
                    className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M13 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
