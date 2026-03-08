import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Language, defaultLanguage } from '@/constants/translations';

interface LanguageStore {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      language: defaultLanguage,
      setLanguage: (language: Language) => set({ language }),
    }),
    {
      name: 'language-storage',
    }
  )
);