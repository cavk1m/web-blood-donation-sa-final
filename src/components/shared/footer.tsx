'use client';

import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">HF</span>
              </div>
              <span className="text-xl font-bold text-white">
                Hope<span className="text-red-600">Flow</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Saving lives through blood donation. Join our mission to help those in need.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  href="/campaigns"
                  className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                >
                  Campaigns
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">
                Email:{' '}
                <a
                  href="mailto:info@hopeflow.com"
                  className="hover:text-red-600 transition-colors"
                >
                  info@hopeflow.com
                </a>
              </li>
              <li className="text-gray-400">
                Phone:{' '}
                <a
                  href="tel:+1234567890"
                  className="hover:text-red-600 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="text-gray-400">Follow us on social media</li>
              <li className="flex space-x-4 pt-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-600 transition-colors"
                  aria-label="Facebook"
                >
                  <span className="text-lg">f</span>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-600 transition-colors"
                  aria-label="Twitter"
                >
                  <span className="text-lg">𝕏</span>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-600 transition-colors"
                  aria-label="Instagram"
                >
                  <span className="text-lg">📷</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} HopeFlow. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Made with <span className="text-red-600">❤</span> for life-saving donations
          </p>
        </div>
      </div>
    </footer>
  );
};
