'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { HandHeart, MapPin, Syringe } from 'lucide-react';

interface HeroProps {
  backgroundImage?: string;
}

export const Hero: React.FC<HeroProps> = ({
  backgroundImage = 'https://imgs.search.brave.com/Zvx0rfo0wIKAZnsQeaEBLmRlIL5jnK5gKrUx4DMGKwU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmlzaXQtYW5na29y/Lm9yZy93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8xMC9waG5v/bS1iYWtoZW5nLXZp/ZXctYW5na29yLXdh/dC1mb3RvLXNvay1r/YWthZGEuanBn',
}) => {
  const { t } = useLanguage();

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
          <div className="flex flex-wrap items-center gap-4">
            <Button className="h-12 rounded-full px-7 bg-white text-red-600 hover:bg-gray-100 font-semibold gap-2 shadow-sm">
              <Syringe className="w-4 h-4 text-red-500" />
              {t('hero.buttonDonate')}
            </Button>
            <Button
              variant="outline"
              className="h-12 rounded-full px-7 border border-white/40 bg-black/25 text-white font-semibold hover:bg-black/35 hover:text-white transition-colors gap-2 backdrop-blur-sm"
            >
              <HandHeart className="w-4 h-4 text-pink-400" />
              {t('hero.buttonSupport')}
            </Button>
            <Button
              variant="outline"
              className="h-12 rounded-full px-7 border border-white/40 bg-black/25 text-white font-semibold hover:bg-black/35 hover:text-white transition-colors gap-2 backdrop-blur-sm"
            >
              <MapPin className="w-4 h-4 text-pink-400" />
              {t('hero.buttonFind')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};