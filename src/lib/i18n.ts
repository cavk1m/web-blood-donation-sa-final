import en from '@/i18n/en.json';
import kh from '@/i18n/kh.json';

export type Language = 'en' | 'kh';

const translations: Record<Language, typeof en> = {
  en,
  kh,
};

export const getTranslation = (language: Language = 'en') => {
  return translations[language] || translations.en;
};

export const defaultLanguage: Language = 'en';