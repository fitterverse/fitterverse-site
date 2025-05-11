// src/website/Footer.tsx
import React from 'react';
import { FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6 md:px-16">
      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold">Fitterverse</h3>
          <p className="text-sm text-blue-100 mt-2">
            Personalized wellness for lifestyle disorders. Built on science, backed by compassion.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1 text-blue-100">
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Connect</h4>
          <p className="text-sm text-blue-100">WhatsApp: +91-9876543210</p>
          <p className="text-sm text-blue-100">Email: care@fitterverse.in</p>
          <div className="flex gap-4 mt-4 text-xl">
            <FaInstagram className="hover:text-pink-400 cursor-pointer" />
            <FaYoutube className="hover:text-red-500 cursor-pointer" />
            <FaFacebook className="hover:text-blue-400 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-300 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-blue-800 pt-4 text-center text-xs text-blue-300">
        <p>© {new Date().getFullYear()} Fitterverse. All rights reserved.</p>
        <p>Privacy Policy | Refund Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
