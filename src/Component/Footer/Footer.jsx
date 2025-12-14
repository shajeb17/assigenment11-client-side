import React from "react";
import { FaFacebookF, FaLinkedin, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo + Description */}
        <div className="flex flex-col items-start space-y-4">
          <div className="font-bold text-3xl font-mulish bg-gradient-to-r from-[#F07048] via-[#9D4EDD] to-[#F07048] bg-clip-text text-transparent">
            ContestHub
          </div>
          <p className="text-gray-400 text-sm max-w-xs">
            A modern, user-friendly platform to create, participate, and manage contests for designers, writers, and creators.
          </p>
         
          <div className="flex space-x-4 mt-2">
            <a href="https://facebook.com" target="_blank"  className="hover:text-blue-500 transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank"  className="hover:text-blue-400 transition-colors">
              <FaLinkedinIn size={20} />
            </a>
              <a href="https://twiter.com" target="_blank"  className="hover:text-blue-400 transition-colors">
              <FaTwitterSquare size={20}/>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-white mb-2">Quick Links</h3>
          <a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a>
          <a href="/contests" className="text-gray-400 hover:text-white transition-colors">Contests</a>
          <a href="/dashboard" className="text-gray-400 hover:text-white transition-colors">Dashboard</a>
          <a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a>
        </div>

        {/* Newsletter / Contact */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-white mb-2">Subscribe</h3>
          <p className="text-gray-400 text-sm">Get updates on new contests & announcements</p>
          <div className="flex mt-2">
            <input type="email" placeholder="Your email" className="px-3 py-2 rounded-l-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 w-full" />
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-r-md transition-colors">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-8 pb-4 pt-4 text-center text-gray-500 text-sm">
        © 2025 ContestHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
