import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BoardingHub</h3>
            <p className="text-gray-400">
              Find your perfect boarding place with ease.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a onClick={() => scrollToSection('navbar')} 
                   className="text-gray-400 hover:text-white cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection('boardingsection')} 
                   className="text-gray-400 hover:text-white cursor-pointer">
                  Find Boarding
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection('about-section')} 
                   className="text-gray-400 hover:text-white cursor-pointer">
                  About
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection('contact-section')} 
                   className="text-gray-400 hover:text-white cursor-pointer">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div id="contact-section">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-blue-400" />
                <span>malithavisada@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-blue-400" />
                <span>+94 761 621 101</span>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>123,Dalugama, Kelaniya</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-5">Follow Us</h4>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaFacebookF className="text-3xl hover:text-blue-400" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaTwitter className="text-3xl hover:text-blue-400" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaInstagram className="text-3xl hover:text-blue-400" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 BoardingHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;