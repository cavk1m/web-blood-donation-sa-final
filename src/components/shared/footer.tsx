'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from '@/hooks/use-translations';

export const Footer: React.FC = () => {
  const { t, isHydrated } = useTranslations();
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isHydrated) {
    return null;
  }

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
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                >
                  {t('header.home')}
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                >
                  {t('header.locations')}
                </Link>
              </li>
              <li>
                <Link
                  href="/campaigns"
                  className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                >
                  {t('header.campaigns')}
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                >
                  {t('header.donate')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">{t('footer.information')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                >
                  {t('footer.aboutUs')}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                >
                  {t('footer.contact')}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                >
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                >
                  {t('footer.termsConditions')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">
                {t('footer.email')}:{' '}
                <a
                  href="mailto:info@hopeflow.com"
                  className="hover:text-red-600 transition-colors"
                >
                  info@hopeflow.com
                </a>
              </li>
              <li className="text-gray-400">
                {t('footer.phone')}:{' '}
                <a
                  href="tel:+1234567890"
                  className="hover:text-red-600 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="text-gray-400">{t('footer.followUs')}</li>
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
            &copy; {currentYear} HopeFlow. {t('footer.copyright')}
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            {t('footer.madeWith')}
          </p>
        </div>
      </div>
    </footer>
  );
};
