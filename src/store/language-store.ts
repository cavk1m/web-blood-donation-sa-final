import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Language, defaultLanguage } from '@/constants/translations';

interface LanguageStore {
  language: Language;
  setLanguage: (language: Language) => void;
  isHydrated: boolean;
}

const useLanguageStoreBase = create<LanguageStore>()(
  persist(
    (set) => ({
      language: defaultLanguage,
      setLanguage: (language: Language) => set({ language }),
      isHydrated: false,
    }),
    {
      name: 'language-storage',
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.isHydrated = true;
        }
      },
    }
  )
);

export const useLanguageStore = useLanguageStoreBase;