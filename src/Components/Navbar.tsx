import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/meenes-logo.png";

const Navbar = () => {
  const location = useLocation();

  const linkClass = (path: string) =>
    `text-sm font-medium transition-colors ${
      location.pathname === path
        ? "text-green-600"
        : "text-gray-800 hover:text-green-600"
    }`;

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Meeny's Kitchen & Grill Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link to="/menu" className={linkClass("/menu")}>
              Menu
            </Link>

            <Link to="/help" className={linkClass("/help")}>
              Help
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;


