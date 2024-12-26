import { Link } from "react-router-dom";
import { useState } from "react";
import { FaHome, FaBoxOpen, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import QuoteModal from "./QuoteModal"; // Import the QuoteModal component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu when a link or button is clicked
  };

  const openQuoteModal = () => {
    setIsModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
            <img
              src="/icon.png" // Use the correct file name of your uploaded image
              alt="Shubham Enterprises Logo"
              className="w-10 h-10 object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold hover:text-indigo-400 transition-colors">
            Shubham Enterprises
          </h1>
        </Link>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="text-2xl lg:hidden focus:outline-none"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute lg:static top-full left-0 w-full lg:w-auto lg:flex flex-col lg:flex-row lg:space-x-6 bg-gray-800 lg:bg-transparent transition-all`}
        >
          <Link
            to="/"
            onClick={closeMenu} // Close the menu when a link is clicked
            className="flex flex-col items-center lg:flex-row group text-gray-400 hover:text-indigo-400 transition-colors py-2 px-6 lg:py-0"
          >
            <FaHome className="text-2xl lg:mr-2" />
            <span>Home</span>
          </Link>
          <Link
            to="/products"
            onClick={closeMenu} // Close the menu when a link is clicked
            className="flex flex-col items-center lg:flex-row group text-gray-400 hover:text-indigo-400 transition-colors py-2 px-6 lg:py-0"
          >
            <FaBoxOpen className="text-2xl lg:mr-2" />
            <span>Products</span>
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu} // Close the menu when a link is clicked
            className="flex flex-col items-center lg:flex-row group text-gray-400 hover:text-indigo-400 transition-colors py-2 px-6 lg:py-0"
          >
            <FaPhoneAlt className="text-2xl lg:mr-2" />
            <span>Contact</span>
          </Link>
          {/* Get a Quote Button */}
          <button
            onClick={() => {
              openQuoteModal();
              closeMenu(); // Close the menu after clicking the button
            }}
            className="bg-yellow-500 hover:bg-yellow-400 text-gray-800 font-semibold py-2 px-6 rounded-full lg:ml-4 transition-all transform hover:scale-105"
          >
            Get a Quote
          </button>
        </div>
      </div>
      {isModalOpen && <QuoteModal onClose={closeQuoteModal} />}
    </nav>
  );
};

export default Navbar;
