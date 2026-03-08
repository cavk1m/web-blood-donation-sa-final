'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">HF</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Hope<span className="text-red-600">Flow</span>
            </span>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/locations"
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Locations
            </Link>
            <Link
              href="/campaigns"
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Campaigns
            </Link>
            <Link
              href="/donate"
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Donate
            </Link>
          </nav>

          {/* Register Button */}
          <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-6">
            Register Now
          </Button>
        </div>
      </div>
    </header>
  );
};