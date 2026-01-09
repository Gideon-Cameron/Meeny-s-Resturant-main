import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

const faqs: FAQItem[] = [
  {
    question: "What type of cuisine do you serve?",
    answer: (
      <p>
        We serve a unique <strong>Blasian fusion</strong> — combining the bold
        flavours of Caribbean spice with the rich comfort of Asian soul food.
      </p>
    ),
  },
  {
    question: "Where is Meeny’s Kitchen & Grill located?",
    answer: (
      <p>
        We are based in <strong>Northampton, Kingsland Gardens</strong>.  
        <br />
        <a
          href="https://share.google/FjxQZkPXvRANq6zKw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:underline"
        >
          View us on Google Maps
        </a>
      </p>
    ),
  },
  {
    question: "Do you offer pickup and delivery?",
    answer: (
      <p>
        Yes — we offer <strong>both pickup and delivery</strong>. You can choose
        your preferred option when placing your order.
      </p>
    ),
  },
  {
    question: "What are your opening hours?",
    answer: (
      <div>
        <p className="mb-2 font-medium">Our regular weekly hours are:</p>
        <ul className="list-disc pl-5">
          <li>Monday – Friday</li>
          <li>6:00am – 10:00am</li>
          <li>3:00pm – 9:00pm</li>
        </ul>
      </div>
    ),
  },
  {
    question: "How do I place an order on the website?",
    answer: (
      <p>
        Simply head to the <strong>Menu</strong>, select the items you’d like,
        and add them to your cart.  
        <br />
        If you choose delivery, you’ll be asked to enter your address before
        confirming your order.
      </p>
    ),
  },
];

const Help: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="mb-10 text-center text-3xl font-extrabold text-gray-900">
        FAQ
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-medium text-gray-900"
              >
                <span>{faq.question}</span>
                <span
                  className={`transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {isOpen && (
                <div className="border-t px-6 py-4 text-sm text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Help;
