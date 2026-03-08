'use client'

import { useLanguageStore } from '@/store/language-store';
import { getTranslation } from '@/lib/i18n'

export const useTranslations = () => {
  const language = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  const t = (key: string) => getTranslation(language, key)

  return { language, setLanguage, t }
}
