// src/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/logo.png'; // Import the logo


const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-300 py-12">
        <div className="container mx-auto flex flex-wrap justify-between gap-8">
          <div className="flex flex-col items-start p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex-2 min-w-[300px]">
            <img src={logo} alt="Logo" className="h-16 w-16 mb-4" />
            <h4 className="text-lg font-bold mb-4 text-white">Section 1</h4>
            <p>Welcome to our company. We strive to deliver the best service.</p>
            <a href="#" className="mt-2 text-blue-400 hover:text-blue-600 flex items-center">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </a>
          </div>
          <div className="flex flex-col items-start p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 min-w-[200px]">
            <h4 className="text-lg font-bold mb-4 text-white">Section 2</h4>
            <p>Content for section 2 with more detailed information and some additional links.</p>
            <a href="#" className="mt-2 text-blue-400 hover:text-blue-600 flex items-center">
              <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
              About
            </a>
          </div>
          <div className="flex flex-col items-start p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 min-w-[200px]">
            <h4 className="text-lg font-bold mb-4 text-white">Section 3</h4>
            <p>Content for section 3 with more detailed information and some additional links.</p>
            <a href="#" className="mt-2 text-blue-400 hover:text-blue-600 flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Contact
            </a>
          </div>
          <div className="flex flex-col items-start p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 min-w-[200px]">
            <h4 className="text-lg font-bold mb-4 text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 text-center text-sm text-gray-500">
          © 2024 Your Company. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;