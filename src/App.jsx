import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Show from "./Components/Show";
import Contact from "./Components/Contact";
import CartPopup from "./Components/CartPopup";
import CartBar from "./Components/CartBar";
import Location from "./Components/Location";

import Menu from "./pages/Menu";
import Help from "./pages/Help"; // ✅ ADD THIS

import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";

const App = () => {
  return (
    <CartProvider>
      <OrderProvider>
        <div className="min-h-screen w-full bg-white">
          {/* Navigation */}
          <Navbar />

          <Routes>
            {/* HOME PAGE */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Show />
                  <Location />
                  <Contact />
                </>
              }
            />

            {/* MENU PAGE */}
            <Route path="/menu" element={<Menu />} />

            {/* HELP PAGE */}
            <Route path="/help" element={<Help />} />
          </Routes>

          {/* GLOBAL CART UI */}
          <CartBar />
          <CartPopup />
        </div>
      </OrderProvider>
    </CartProvider>
  );
};

export default App;
