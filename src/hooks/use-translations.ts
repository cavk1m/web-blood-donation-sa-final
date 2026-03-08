'use client'

import { useLanguageStore } from '@/store/language-store';
import { getTranslation } from '@/lib/i18n'
import { useEffect, useState } from 'react';

export const useTranslations = () => {
  const language = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);
  const isHydrated = useLanguageStore((state) => state.isHydrated);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const t = (key: string) => getTranslation(language, key)

  return { language, setLanguage, t, isHydrated: mounted && isHydrated }
}
