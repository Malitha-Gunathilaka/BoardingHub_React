import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-lg" id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a 
              onClick={() => scrollToSection('navbar')} 
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition duration-150 cursor-pointer"
            >
              BoardingHub
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              onClick={() => scrollToSection('boardingsection')} 
              className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors"
            >
              Find Boarding
            </a>

            <a 
              onClick={() => scrollToSection('about-section')} 
              className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors"
            >
              About
            </a>
            
            <a 
              onClick={() => scrollToSection('contact-section')} 
              className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors"
            >
              Contact
            </a>

            <Link to="/signin" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Sign In
            </Link>
            <Link to="/signup" className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {/* Replace the comment with this SVG */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

            <a 
              onClick={() => scrollToSection('boardingsection')} 
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 cursor-pointer"
            >
              Find Boarding
            </a>

            <a 
              onClick={() => scrollToSection('about-section')} 
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 cursor-pointer"
            >
              About
            </a>

            <a 
              onClick={() => scrollToSection('contact-section')} 
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 cursor-pointer"
            >
              Contact
            </a>

            <Link to="/signin" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50">
              Sign In
            </Link>
            <Link to="/signup" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;