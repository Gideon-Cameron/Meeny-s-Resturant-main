import React from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { boxes, mains, sides, drinks, MenuItem } from "../data/menu";

import menuHero from "../assets/menu.jpg";

const Menu: React.FC = () => {
  const location = useLocation();

  // Read order type from navigation state
  const orderType: "delivery" | "pickup" =
    location.state?.orderType ?? "delivery";

  const { addItem, isItemSelected, getItemCount } = useCart();

  // 🔍 TEMP: verify flow
  console.log("🧭 Order type:", orderType);

  const cardBase =
    "relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition-all";
  const selectedStyle =
    "ring-4 ring-yellow-400 bg-yellow-50";

  const handleAdd = (item: MenuItem) => {
    console.log("➕ Adding item to cart:", item);
    addItem(item);
  };

  const QuantityBadge = ({ count }: { count: number }) =>
    count > 0 ? (
      <div className="absolute top-3 right-3 rounded-full bg-green-600 px-3 py-1 text-sm font-bold text-white">
        {count}
      </div>
    ) : null;

  return (
    <main className="bg-neutral-50 text-gray-900">
      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] w-full">
        <img src={menuHero} alt="Menu" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              Our Menu
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              A bold fusion of Jamaican soul and Bangladeshi spice.
            </p>
          </div>
        </div>
      </section>

      {/* ================= BOXES ================= */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-green-900">
          Signature Boxes
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {boxes.map((box) => {
            const selected = isItemSelected(box.id);
            const count = getItemCount(box.id);

            return (
              <div
                key={box.id}
                onClick={() => handleAdd(box)}
                className={`${cardBase} ${selected ? selectedStyle : ""}`}
              >
                <QuantityBadge count={count} />

                {box.image && (
                  <img
                    src={box.image}
                    alt={box.name}
                    className="h-56 w-full object-cover"
                  />
                )}

                <div className="p-6">
                  <h3 className="text-xl font-bold">{box.name}</h3>

                  <ul className="mt-4 space-y-1 text-gray-700">
                    {box.includes?.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>

                  <div className="mt-6 text-2xl font-extrabold text-yellow-600">
                    £{box.price}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= MENU ITEMS ================= */}
      <section className="bg-green-950 py-24 text-white">
        <div className="mx-auto w-full max-w-4xl px-4 md:max-w-[80%] lg:max-w-5xl">
          <h2 className="text-center text-3xl font-extrabold text-yellow-400">
            À La Carte
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* MAINS */}
            <div>
              <h3 className="mb-6 text-2xl font-bold text-center">
                Mains
              </h3>
              <ul className="space-y-3 text-lg">
                {mains.map((item) => {
                  const count = getItemCount(item.id);

                  return (
                    <li
                      key={item.id}
                      onClick={() => handleAdd(item)}
                      className="flex cursor-pointer justify-between border-b border-white/20 pb-2 transition hover:bg-white/10 px-2 rounded"
                    >
                      <span>
                        {item.name}
                        {count > 0 && (
                          <span className="ml-2 text-sm text-yellow-400">
                            × {count}
                          </span>
                        )}
                      </span>
                      <span>£{item.price}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* SIDES */}
            <div>
              <h3 className="mb-6 text-2xl font-bold text-center">
                Sides
              </h3>
              <ul className="space-y-3 text-lg">
                {sides.map((item) => {
                  const count = getItemCount(item.id);

                  return (
                    <li
                      key={item.id}
                      onClick={() => handleAdd(item)}
                      className="flex cursor-pointer justify-between border-b border-white/20 pb-2 transition hover:bg-white/10 px-2 rounded"
                    >
                      <span>
                        {item.name}
                        {count > 0 && (
                          <span className="ml-2 text-sm text-yellow-400">
                            × {count}
                          </span>
                        )}
                      </span>
                      <span>£{item.price}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* DRINKS */}
          <div className="mx-auto mt-20 max-w-md text-center">
            <h3 className="mb-6 text-2xl font-bold">Drinks</h3>
            <ul className="space-y-3 text-lg">
              {drinks.map((item) => {
                const count = getItemCount(item.id);

                return (
                  <li
                    key={item.id}
                    onClick={() => handleAdd(item)}
                    className="flex cursor-pointer justify-between border-b border-white/20 pb-2 transition hover:bg-white/10 px-2 rounded"
                  >
                    <span>
                      {item.name}
                      {count > 0 && (
                        <span className="ml-2 text-sm text-yellow-400">
                          × {count}
                        </span>
                      )}
                    </span>
                    <span>£{item.price}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;
