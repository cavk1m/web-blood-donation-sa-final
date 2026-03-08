import { useLanguageStore } from '@/store/language-store';
import { translations } from '@/constants/translations';

export const useTranslations = () => {
  const language = useLanguageStore((state) => state.language);
  return translations[language];
};