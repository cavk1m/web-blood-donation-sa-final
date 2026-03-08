'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTranslations } from '@/hooks/use-translations';

interface HeroProps {
  backgroundImage?: string;
}

export const Hero: React.FC<HeroProps> = ({
  backgroundImage = '/images/hero-background.jpg',
}) => {
  const { t, isHydrated } = useTranslations();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isHydrated) {
    return null;
  }

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${backgroundImage}')`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center space-x-2 bg-red-600 bg-opacity-20 border border-red-500 rounded-full px-4 py-2 backdrop-blur-sm">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm text-white font-medium">{t('hero.badge')}</span>
          </div>

          {/* Title */}
          <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            <div>{t('hero.title1')}</div>
            <div className="italic font-light text-gray-200">{t('hero.title2')}</div>
            <div>{t('hero.title3')}</div>
          </h1>

          {/* Description */}
          <p className="text-gray-200 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
            {t('hero.description')}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-3 font-semibold">
              💉 {t('hero.buttonDonate')}
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white rounded-full px-8 py-3 font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              ❤️ {t('hero.buttonSupport')}
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white rounded-full px-8 py-3 font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              📍 {t('hero.buttonFind')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};