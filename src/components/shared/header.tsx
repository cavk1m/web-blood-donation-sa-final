'use client'

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTranslations } from '@/hooks/use-translations';

export default function Header() {
  const { language, setLanguage, t, isHydrated } = useTranslations();

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
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
              {t('header.home')}
            </Link>
            <Link
              href="/locations"
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              {t('header.locations')}
            </Link>
            <Link
              href="/campaigns"
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              {t('header.campaigns')}
            </Link>
            <Link
              href="/donate"
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              {t('header.donate')}
            </Link>
          </nav>

          {/* Language Switch and Register Button */}
          <div className="flex items-center space-x-4">
            {isHydrated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    {language === 'en' ? '🇺🇸 EN' : '🇰🇭 KH'}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setLanguage('en')}>
                    🇺🇸 English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage('kh')}>
                    🇰🇭 Khmer
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="outline" size="sm" disabled>
                🇺🇸 EN
              </Button>
            )}
            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-6">
              {t('header.register')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
