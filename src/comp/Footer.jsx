// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub   } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 md:px-8 lg:px-16 md:mt-0 mt-[250px]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo Section */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-3xl font-bold">a.W<i className='italic text-red-500'>R</i></h1>
        </div>
        
        {/* Address and Contact Section */}
        <div className="text-center md:text-left mb-6 md:mb-0 pl-0 md:pl-20">
          <p className="text-gray-300">Hyderabad,Telangana, 500020</p>
          <p className="text-gray-300"><a href="#">Email: abdulwahabrehan7@gmail.com</a></p>
          <p className="text-gray-300">Phone: +91 9100657417</p>
        </div>

        {/* Social Links Section */}
        <div className="flex space-x-4 gap-5">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
          <FaFacebook className='text-4xl text-[#669BBC] hover:text-[#1877F2]' />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
          <FaXTwitter className='text-4xl text-[#669BBC] hover:text-[#eee]' />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
          <FaInstagram className='text-4xl text-[#669BBC] hover:text-[#E4405F]' />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
          <FaLinkedin className='text-4xl text-[#669BBC] hover:text-[#0A66C2]' />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
          <FaGithub className='text-4xl text-[#669BBC] hover:text-[#eee]' />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
