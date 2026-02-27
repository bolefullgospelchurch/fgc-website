import React, { createContext, useState, useContext, useEffect } from 'react';
import i18n from '../i18n';

const LanguageContext = createContext();
const LANGUAGE_STORAGE_KEY = 'church-website.language';

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'am';
    try {
      const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
      return stored || 'am';
    } catch {
      return 'am';
    }
  });

  useEffect(() => {
    i18n.changeLanguage(language);
    // Sync language to document body for CSS targeting (e.g., font switching)
    document.body.classList.remove('lang-en', 'lang-am');
    document.body.classList.add(`lang-${language}`);
  }, [language]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // ignore storage errors
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'am' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
