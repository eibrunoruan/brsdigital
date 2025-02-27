import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between bg-[#FDF3ED] py-4 px-8 lg:px-32 shadow-md font-normal">
      {/* Logo Section */}
      <div className="font-normal flex items-center space-x-2">
        <span className="font-normal text-2xl font-bold text-gray-800">BRS</span>
        <span className="font-normal text-2xl font-bold text-white bg-orange-600 px-2 py-1 rounded">
          Digital
        </span>
      </div>

      {/* Hamburger Menu */}
      <div className="lg:hidden">
        <button
          className="text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`font-normal lg:flex items-center space-x-6 text-lg text-gray-700 lg:static lg:space-y-0 lg:space-x-6 lg:flex-row lg:bg-transparent lg:w-auto lg:shadow-none lg:rounded-none transition-all duration-300 ease-in-out ${
          isOpen
            ? "absolute top-16 left-0 bg-[#FDF3ED] w-full shadow-md rounded-lg space-y-4 p-6"
            : "hidden"
        }`}
      >
        <li className="block lg:hidden mt-4">
          <a
            href="https://wa.me/5547984731079"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-orange-600 text-white w-full px-4 py-2 rounded-full shadow hover:bg-orange-700 transition">
              Fale Conosco
            </button>
          </a>
        </li>
      </ul>

      {/* Desktop Button */}
      <div className="hidden lg:flex items-center space-x-4">
        <a
          href="https://wa.me/5547984731079"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-orange-600 text-white px-4 py-2 rounded-full shadow hover:bg-orange-700 transition">
            Fale Conosco
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

// Add padding to the body or top component to prevent overlapping with the fixed navbar
document.body.style.paddingTop = "64px";
