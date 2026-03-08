'use client';

import { useState, useEffect } from 'react';
import { getTranslation, type Language, defaultLanguage } from '@/lib/i18n';

export const useTranslations = (initialLanguage: Language = defaultLanguage) => {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [translation, setTranslation] = useState(getTranslation(language));

  useEffect(() => {
    setTranslation(getTranslation(language));
  }, [language]);

  return {
    translation,
    language,
    setLanguage,
  };
};