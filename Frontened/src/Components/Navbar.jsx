import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons from react-icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold">Logo</a>
          </div>

          {/* Hamburger menu for mobile */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-gray-600 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" /> // Close icon
              ) : (
                <FaBars className="h-6 w-6" />  // Hamburger icon
              )}
            </button>
          </div>

          {/* Centered navigation links, hidden on small screens */}
          <div className={`sm:flex sm:flex-1 sm:items-center sm:justify-center hidden sm:block space-x-4 text-gray-600 font-openSans`}>
            <a href="#" className="hover:text-gray-950 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" className="hover:text-gray-950 px-3 py-2 rounded-md text-sm font-medium">About Us</a>
            <a href="#" className="hover:text-gray-950 px-3 py-2 rounded-md text-sm font-medium">Services</a>
            <a href="#" className="hover:text-gray-950 px-3 py-2 rounded-md text-sm font-medium">Testimonial</a>
            <a href="#" className="hover:text-gray-950 px-3 py-2 rounded-md text-sm font-medium">Contact Us</a>
          </div>

          {/* Button on the right, hidden on small screens */}
          <div className="hidden sm:block flex-shrink-0 text-white py-2 px-6 rounded-lg hover:text-black hover:bg-white bg-primary transition-colors duration-300">
            <a href="#" className="px-4 py-2 rounded-md text-sm font-medium">
              Make An Appointment
            </a>
          </div>
        </div>
      </div>

      {/* Mobile navigation dropdown (shown only when hamburger menu is clicked) */}
      {isOpen && (
        <div className="sm:hidden space-y-2 mt-2 px-2 pb-3">
          <a href="#" className="block hover:text-gray-950 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Home</a>
          <a href="#" className="block hover:text-gray-950 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">About Us</a>
          <a href="#" className="block hover:text-gray-950 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Services</a>
          <a href="#" className="block hover:text-gray-950 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Testimonial</a>
          <a href="#" className="block hover:text-gray-950 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Contact Us</a>

          {/* Button in mobile view */}
          <div className="text-white py-2 px-6 rounded-lg hover:text-black hover:bg-white bg-primary">
            <a href="#" className="px-4 py-2 rounded-md text-base font-medium">
              Make An Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
